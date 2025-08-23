
import { getPropertyById } from '@/lib/data';
import { PropertyForm } from '@/components/admin/PropertyForm';
import { notFound } from 'next/navigation';

export default async function EditPropertyPage({ params }: { params: { id: string } }) {
  const property = await getPropertyById(params.id);

  if (!property) {
    notFound();
  }

  return (
    <div className="space-y-8">
        <h1 className="text-3xl font-bold">Edit Property</h1>
        <PropertyForm property={property} />
    </div>
  );
}
