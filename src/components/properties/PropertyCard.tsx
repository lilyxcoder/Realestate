import Image from 'next/image';
import Link from 'next/link';
import type { Property } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BedDouble, Bath, SquareGanttChart } from 'lucide-react';
import { Button } from '../ui/button';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <CardHeader className="p-0 relative">
        <Link href={`/properties/${property.id}`}>
          <Image
            src={property.image}
            alt={property.title}
            width={600}
            height={400}
            className="w-full h-56 object-cover"
            data-ai-hint={property.data_ai_hint}
          />
        </Link>
        <Badge className="absolute top-4 left-4" variant={property.featured ? 'default' : 'secondary'}>
          {property.type}
        </Badge>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl mb-2">
          <Link href={`/properties/${property.id}`} className="hover:text-primary transition-colors">
            {property.title}
          </Link>
        </CardTitle>
        <p className="text-2xl font-bold text-primary mb-4">
          ${property.price.toLocaleString()}
        </p>
        <p className="text-muted-foreground text-sm mb-4 h-10 overflow-hidden">{property.address}</p>

        <div className="flex justify-around items-center border-t border-b py-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <BedDouble className="w-5 h-5 text-primary" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-5 h-5 text-primary" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-2">
            <SquareGanttChart className="w-5 h-5 text-primary" />
            <span>{property.area.toLocaleString()} sqft</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full">
          <Link href={`/properties/${property.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
