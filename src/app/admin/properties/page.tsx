
'use client';

import { useEffect, useState, useCallback } from 'react';
import { getProperties } from '@/lib/data';
import type { Property } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlusCircle, Pencil } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AdminPropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([]);

  const fetchProperties = useCallback(async () => {
    const initialProperties = await getProperties();
    
    try {
      const storedPropertiesString = localStorage.getItem('properties');
      if (storedPropertiesString) {
        const storedProperties = JSON.parse(storedPropertiesString) as Property[];
        const storedMap = new Map(storedProperties.map((p) => [p.id, p]));
        
        const merged = initialProperties.map(p => storedMap.get(p.id) || p);
        
        const newFromStorage = storedProperties.filter(p => !initialProperties.some(ip => ip.id === p.id));
        
        setProperties([...merged, ...newFromStorage].reverse());
      } else {
        setProperties(initialProperties.reverse());
      }
    } catch (error) {
      console.error("Failed to load or merge properties from localStorage", error);
      setProperties(initialProperties.reverse());
    }
  }, []);

  useEffect(() => {
    fetchProperties();

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'properties') {
        fetchProperties();
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    }
  }, [fetchProperties]);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Manage Properties</h1>
        <Button asChild>
            <Link href="/admin/properties/new">
                <PlusCircle className="mr-2 h-5 w-5" />
                Add New Property
            </Link>
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>All Properties</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {properties.map((property) => (
                <TableRow key={property.id}>
                  <TableCell>
                    <Image
                        src={property.image}
                        alt={property.title}
                        width={80}
                        height={60}
                        className="rounded-md object-cover"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{property.title}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{property.type}</Badge>
                  </TableCell>
                  <TableCell>${property.price.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge variant={property.featured ? 'default' : 'outline'}>
                        {property.featured ? 'Featured' : 'Standard'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button asChild variant="outline" size="sm">
                        <Link href={`/admin/properties/${property.id}/edit`}>
                            <Pencil className="mr-2 h-4 w-4" />
                            Edit
                        </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
