
'use client';

import { useEffect, useState } from 'react';
import { getPropertyById } from '@/lib/data';
import { PropertyForm } from '@/components/admin/PropertyForm';
import { notFound, useParams } from 'next/navigation';
import type { Property } from '@/lib/types';

export default function EditPropertyPage() {
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const id = params.id as string;

  useEffect(() => {
    if (!id) return;

    const fetchProperty = async () => {
      setLoading(true);
      const fetchedProperty = await getPropertyById(id);
      
      if (!fetchedProperty) {
        setLoading(false); 
        return;
      }
      
      setProperty(fetchedProperty);
      setLoading(false);
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!property) {
    return notFound();
  }

  return (
    <div className="space-y-8">
        <h1 className="text-3xl font-bold">Edit Property</h1>
        <PropertyForm property={property} />
    </div>
  );
}
