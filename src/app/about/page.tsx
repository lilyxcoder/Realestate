
import { AboutRealvest } from "@/components/home/AboutRealvest";
import { OurAgents } from "@/components/home/OurAgents";
import { Testimonials } from "@/components/home/Testimonials";

export default function AboutPage() {
  return (
    <>
      <div className="bg-card">
        <div className="container mx-auto px-4 py-8">
            <div className="text-center my-12">
                <h1 className="text-4xl font-bold">About Us</h1>
                <p className="text-lg text-muted-foreground mt-2">Learn more about our mission, vision, and team.</p>
            </div>
            <AboutRealvest />
        </div>
      </div>
      <div className="bg-background">
        <Testimonials />
      </div>
       <div className="bg-card">
        <OurAgents />
      </div>
    </>
  );
}
