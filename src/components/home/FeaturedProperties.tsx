
import { getFeaturedProperties } from '@/lib/data';
import { PropertyCard } from '@/components/properties/PropertyCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export async function FeaturedProperties() {
  const properties = await getFeaturedProperties();
  const newestProperties = properties.reverse();

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Properties</h2>
          <p className="text-lg text-muted-foreground mt-2">Handpicked properties by our team</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newestProperties.slice(0, 3).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg">
                <Link href="/properties">View All Properties</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
