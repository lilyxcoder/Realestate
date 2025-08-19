import { FeaturedProperties } from '@/components/home/FeaturedProperties';
import { OurAgents } from '@/components/home/OurAgents';
import { Testimonials } from '@/components/home/Testimonials';
import { SearchFilters } from '@/components/properties/SearchFilters';
import Image from 'next/image';
import { PricingPlans } from '@/components/home/PricingPlans';
import { WhyInvest } from '@/components/home/WhyInvest';
import { AboutRealvest } from '@/components/home/AboutRealvest';

export default function Home() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[450px] flex items-center justify-center text-white">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Luxury home with a pool at dusk"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
          data-ai-hint="modern house exterior"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center p-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Find Your Dream Home</h1>
          <p className="text-lg md:text-xl mb-8 drop-shadow-md">We help you find the best properties in town, turning your dreams into reality.</p>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <SearchFilters />
          </div>
        </div>
      </section>

      <WhyInvest />
      <FeaturedProperties />
      <AboutRealvest />
      <PricingPlans />
      <Testimonials />
      <OurAgents />
    </>
  );
}
