
import { getPropertyById } from '@/lib/data';
import { notFound } from 'next/navigation';
import { PropertyDetails } from '@/components/properties/PropertyDetails';

export default async function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const property = await getPropertyById(params.id);

  if (!property) {
    notFound();
  }

  return <PropertyDetails property={property} />;
}
