
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { formatAmount } from '@/lib/helpers';
import { IPlan } from '@/lib/types';
import { getPlans } from '@/services/sanity/plans.sanity';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';



export async function PricingPlans() {

const plans: IPlan[] = await getPlans();


console.log(plans)
if (!plans) {
  notFound();
}

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Explore Our Plans</h2>
          <p className="text-lg text-muted-foreground mt-2">Find a plan that fits your needs and budget.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className={`flex flex-col ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-xl xl:text-3xl font-bold text-primary">{`${formatAmount(plan.priceRange.minPrice)} - ${formatAmount(plan.priceRange.maxPrice)}`}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                  <Link href="/login">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
