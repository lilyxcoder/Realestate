import Image from 'next/image';

export function AboutRealvest() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">About RealVest</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-primary">About Our Real Estate</h3>
            <p className="text-muted-foreground">
              Finding great properties for investment, we specialize in providing a streamlined platform for real estate investors to discover lucrative opportunities. Our user-friendly interface offers access to a diverse range of properties, complete with detailed analytics and expert guidance to help you make informed decisions. Whether you're a seasoned investor or just getting started, RealVest is your trusted partner for success in the real estate market.
            </p>
          </div>
          <div>
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="Modern building exterior"
              width={600}
              height={400}
              className="rounded-lg shadow-xl w-full"
              data-ai-hint="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
