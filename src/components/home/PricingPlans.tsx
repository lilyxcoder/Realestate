import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$3,000 - $5,000',
    features: ['Up to 1,500 sqft', '2 Bedrooms', 'Basic Finishes', 'Standard Appliances'],
  },
  {
    name: 'Golden',
    price: '$5,000 - $15,000',
    features: ['Up to 2,500 sqft', '3-4 Bedrooms', 'Upgraded Finishes', 'Energy-Efficient Appliances'],
    popular: true,
  },
  {
    name: 'Premium',
    price: '$15,000 - $25,000',
    features: ['Up to 4,000 sqft', '4-5 Bedrooms', 'Premium Finishes', 'Smart Home Integration'],
  },
  {
    name: 'Estates',
    price: '$25,000+',
    features: ['4,000+ sqft', 'Custom Bedrooms', 'Luxury Finishes', 'Gourmet Kitchen'],
  },
];

export function PricingPlans() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Explore Our Plans</h2>
          <p className="text-lg text-muted-foreground mt-2">Find a plan that fits your needs and budget.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className={`flex flex-col ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-3xl font-bold text-primary">{plan.price}</CardDescription>
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
                <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>Get Started</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
