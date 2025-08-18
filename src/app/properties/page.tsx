import { getProperties } from '@/lib/data';
import { PropertyCard } from '@/components/properties/PropertyCard';
import { SearchFilters } from '@/components/properties/SearchFilters';

export default async function PropertiesPage() {
  const properties = await getProperties();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-700 text-white p-8 rounded-lg mb-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Browse Properties</h1>
        <p className="text-lg text-gray-300 mb-6">Find the perfect property that fits your needs.</p>
        <SearchFilters />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
