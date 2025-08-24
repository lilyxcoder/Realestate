import { Button } from '@/components/ui/button';
import { IProperty } from '@/lib/types';
import { getPropertiesFeatured } from '@/services/sanity/properties.sanity';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PropertyCard } from '../properties/PropertyCard';

export async function FeaturedProperties() {
  const properties: IProperty[] = await getPropertiesFeatured();

  if (!properties) {
    notFound();
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured Properties
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            Handpicked properties by our team
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
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
