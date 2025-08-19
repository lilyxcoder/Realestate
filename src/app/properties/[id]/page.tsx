
'use client';

import { getPropertyById, getAgentById } from '@/lib/data';
import { notFound, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { BedDouble, Bath, SquareGanttChart, MapPin, CheckCircle, ArrowLeft } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { SimilarProperties } from '@/components/properties/SimilarProperties';
import { Card, CardContent } from '@/components/ui/card';
import { InvestmentDetails } from '@/components/properties/InvestmentDetails';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import type { Property } from '@/lib/types';


export default function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      const prop = await getPropertyById(params.id);
      if (!prop) {
        notFound();
      }
      setProperty(prop);
      setLoading(false);
    };
    fetchProperty();
  }, [params.id]);


  if (loading || !property) {
    return <div>Loading...</div>;
  }
  
  const propertyDetailsForAI = {
    propertyType: property.type,
    location: property.address.split(',')[1]?.trim() || 'city',
    bedrooms: property.bedrooms,
    bathrooms: property.bathrooms,
    squareFootage: property.area,
    price: property.price,
    amenities: property.amenities.join(', '),
    description: property.description
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex items-center gap-4 mb-8">
            <Button variant="outline" size="icon" onClick={() => router.back()}>
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Return to previous page</span>
            </Button>
        </div>
        <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">{property.title}</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>{property.address}</span>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Carousel className="w-full mb-8 rounded-lg overflow-hidden shadow-xl">
              <CarouselContent>
                {property.images.map((img, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={img}
                      alt={`${property.title} image ${index + 1}`}
                      width={1200}
                      height={800}
                      className="w-full h-auto max-h-[600px] object-cover"
                      priority={index === 0}
                      data-ai-hint={property.data_ai_hint}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4"/>
              <CarouselNext className="right-4"/>
            </Carousel>
            
            <Card className="mb-8 shadow-lg">
                <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Property Details</h2>
                    <div className="flex justify-around items-center border rounded-lg p-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                            <BedDouble className="w-8 h-8 text-primary" />
                            <span className='font-semibold'>{property.bedrooms}</span>
                            <span className="text-sm text-muted-foreground">Bedrooms</span>
                        </div>
                         <Separator orientation='vertical' className='h-16' />
                        <div className="flex flex-col items-center gap-2">
                            <Bath className="w-8 h-8 text-primary" />
                            <span className='font-semibold'>{property.bathrooms}</span>
                            <span className="text-sm text-muted-foreground">Bathrooms</span>
                        </div>
                         <Separator orientation='vertical' className='h-16' />
                        <div className="flex flex-col items-center gap-2">
                            <SquareGanttChart className="w-8 h-8 text-primary" />
                            <span className='font-semibold'>{property.area.toLocaleString()}</span>
                            <span className="text-sm text-muted-foreground">sqft</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="mb-8 shadow-lg">
                <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Description</h2>
                    <p className="text-muted-foreground leading-relaxed">{property.description}</p>
                </CardContent>
            </Card>

            <Card className="mb-8 shadow-lg">
                <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Amenities</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {property.amenities.map((amenity) => (
                        <div key={amenity} className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span>{amenity}</span>
                        </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
          </div>

          <aside className="lg:col-span-1 space-y-8 lg:sticky top-24 self-start">
             <Card className="shadow-lg">
                <CardContent className="p-6 text-center">
                    <p className="text-muted-foreground text-lg">Price</p>
                    <p className="text-4xl font-bold text-primary mb-4">${property.price.toLocaleString()}</p>
                    <Badge variant="secondary">{property.type}</Badge>
                </CardContent>
            </Card>
            <InvestmentDetails price={property.price} />
          </aside>
        </div>
      </div>
       <SimilarProperties propertyDetails={propertyDetailsForAI} />
    </div>
  );
}
