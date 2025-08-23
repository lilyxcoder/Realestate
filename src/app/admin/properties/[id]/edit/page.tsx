
'use client';

import { useEffect, useState } from 'react';
import { getPropertyById } from '@/lib/data';
import { PropertyForm } from '@/components/admin/PropertyForm';
import { notFound } from 'next/navigation';
import type { Property } from '@/lib/types';

export default function EditPropertyPage({ params }: { params: { id: string } }) {
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = params;

  useEffect(() => {
    if (!id) return;

    const fetchProperty = async () => {
      setLoading(true);
      const initialProperty = await getPropertyById(id);
      
      if (!initialProperty) {
        setLoading(false); 
        return;
      }

      // In a real app, you'd fetch, but here we simulate the "live editing" by checking localStorage.
      try {
        const storedProperties = JSON.parse(localStorage.getItem('properties') || '[]');
        const storedProperty = storedProperties.find((p: Property) => p.id === id);
        setProperty(storedProperty || initialProperty);
      } catch (error) {
        console.error("Failed to parse properties from localStorage", error);
        setProperty(initialProperty);
      }
      
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
