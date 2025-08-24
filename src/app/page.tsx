import { AboutRealvest } from '@/components/home/AboutRealvest';
import { FeaturedProperties } from '@/components/home/FeaturedProperties';
import { LatestNews } from '@/components/home/LatestNews';
import { OurAgents } from '@/components/home/OurAgents';
import { PricingPlans } from '@/components/home/PricingPlans';
import { SponsorCarousel } from '@/components/home/SponsorCarousel';
import { Testimonials } from '@/components/home/Testimonials';
import { WhyInvest } from '@/components/home/WhyInvest';
import { SearchFilters } from '@/components/properties/SearchFilters';
import Image from 'next/image';

export default async function Home() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[450px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/properties/property-96.jpg"
          alt="Luxury home with a pool at dusk"
          width={1920}
          height={1080}
          className="absolute z-0 w-full h-full object-cover"
          data-ai-hint="modern house exterior"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center p-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Find Your Dream Home
          </h1>
          <p className="text-lg md:text-xl mb-8 drop-shadow-md">
            We help you find the best properties in town, turning your dreams
            into reality.
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <SearchFilters />
          </div>
        </div>
      </section>

      <div className="bg-card">
        <WhyInvest />
      </div>
      <div className="bg-background">
        <FeaturedProperties />
      </div>
      <div className="bg-card">
        <AboutRealvest />
      </div>
      <div className="bg-background">
        <PricingPlans />
      </div>
      <div className="bg-card">
        <Testimonials />
      </div>
      <div className="bg-background">
        <SponsorCarousel />
      </div>
      <div className="bg-card">
        <OurAgents />
      </div>
      <div className="bg-background">
        <LatestNews />
      </div>
    </>
  );
}
