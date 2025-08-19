import Image from 'next/image';

const sponsors = [
  { name: 'Sponsor 1', logo: 'https://placehold.co/150x60/gray/white?text=Sponsor+1', data_ai_hint: "company logo" },
  { name: 'Sponsor 2', logo: 'https://placehold.co/150x60/gray/white?text=Sponsor+2', data_ai_hint: "company logo" },
  { name: 'Sponsor 3', logo: 'https://placehold.co/150x60/gray/white?text=Sponsor+3', data_ai_hint: "company logo" },
  { name: 'Sponsor 4', logo: 'https://placehold.co/150x60/gray/white?text=Sponsor+4', data_ai_hint: "company logo" },
  { name: 'Sponsor 5', logo: 'https://placehold.co/150x60/gray/white?text=Sponsor+5', data_ai_hint: "company logo" },
];

export function Sponsors() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Sponsors</h2>
          <p className="text-lg text-muted-foreground mt-2">We are proud to be partnered with these amazing companies.</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image 
                src={sponsor.logo} 
                alt={sponsor.name}
                width={150} 
                height={60} 
                className="object-contain"
                data-ai-hint={sponsor.data_ai_hint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
