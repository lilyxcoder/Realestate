
import { PricingPlans } from '@/components/home/PricingPlans';

export default function PricingPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Pricing Plans</h1>
          <p className="text-lg text-muted-foreground mt-2">Choose the best plan for your needs.</p>
        </div>
        <PricingPlans />
      </div>
    </div>
  );
}
