import Image from 'next/image';

export function AboutRealvest() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">About RealVest</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-primary">
              About Our Real Estate
            </h3>
            <p className="text-muted-foreground">
              Finding great properties for investment, we specialize in
              providing a streamlined platform for real estate investors to
              discover lucrative opportunities. Our user-friendly interface
              offers access to a diverse range of properties, complete with
              detailed analytics and expert guidance to help you make informed
              decisions. Whether you're a seasoned investor or just getting
              started, RealVest is your trusted partner for success in the real
              estate market.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/about-us.jpg"
              alt="Modern building exterior"
              width={600}
              height={400}
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              data-ai-hint="modern building"
            />
            {/* <div className="absolute top-4 left-4 bg-primary/80 text-primary-foreground p-4 rounded-lg shadow-lg backdrop-blur-sm">
              <p className="text-3xl font-bold">20%</p>
              <p>Average Profit Upto</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
