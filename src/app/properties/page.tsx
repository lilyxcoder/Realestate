
"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getProperties } from '@/lib/data';
import type { Property } from '@/lib/types';
import { PropertyCard } from '@/components/properties/PropertyCard';
import { SearchFilters } from '@/components/properties/SearchFilters';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';

export default function PropertiesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndFilterProperties = async () => {
      setLoading(true);
      const allProperties = await getProperties();
      setProperties(allProperties);

      const locationQuery = searchParams.get('location')?.toLowerCase() || '';

      if (locationQuery) {
        const filtered = allProperties.filter(p =>
          p.address.toLowerCase().includes(locationQuery)
        );
        setFilteredProperties(filtered);
      } else {
        setFilteredProperties(allProperties);
      }
      setLoading(false);
    };

    fetchAndFilterProperties();
  }, [searchParams]);

  return (
    <div className="container mx-auto px-4 py-8">
       <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" size="icon" onClick={() => router.back()}>
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Return to previous page</span>
          </Button>
      </div>
      <div className="bg-gray-700 text-white p-8 rounded-lg mb-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Browse Properties</h1>
        <p className="text-lg text-gray-300 mb-6">Find the perfect property that fits your needs.</p>
        <SearchFilters />
      </div>
      
      {loading ? (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
                <PropertyCard key={index} property={null} />
            ))}
        </div>
      ) : filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
            ))}
        </div>
      ) : (
        <div className="text-center py-12 col-span-full">
            <h2 className="text-2xl">No Properties Found</h2>
            <p className="text-muted-foreground">Try adjusting your search criteria.</p>
        </div>
      )}
    </div>
  );
}
