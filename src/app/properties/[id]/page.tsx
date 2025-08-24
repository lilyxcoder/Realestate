import { PropertyDetails } from '@/components/properties/PropertyDetails';
import { getSingleProperty } from '@/services/sanity/properties.sanity';
import { notFound } from 'next/navigation';

export default async function PropertyDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const property = await getSingleProperty({ id: params.id });

  if (!property) {
    notFound();
  }

  return <PropertyDetails property={property} />;
}
