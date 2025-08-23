
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
    
    // In a real app, you would merge this with data from your database.
    // For now, we overlay localStorage changes on top of the static data.
    try {
      const storedPropertiesString = localStorage.getItem('properties');
      if (storedPropertiesString) {
        const storedProperties = JSON.parse(storedPropertiesString);
        
        // Create a map of stored properties by ID for efficient lookup
        const storedMap = new Map(storedProperties.map((p: Property) => [p.id, p]));
        
        // Merge initial properties with stored ones
        const mergedProperties = initialProperties.map(p => storedMap.get(p.id) || p);
        
        // Add any new properties from localStorage that aren't in the initial list
        const newProperties = storedProperties.filter((p: Property) => !initialProperties.some(ip => ip.id === p.id));
        
        setProperties([...mergedProperties, ...newProperties]);
      } else {
        setProperties(initialProperties);
      }
    } catch (error) {
      console.error("Failed to load properties from localStorage", error);
      setProperties(initialProperties);
    }
  }, []);

  useEffect(() => {
    fetchProperties();

    // Listen for storage changes to re-fetch
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
