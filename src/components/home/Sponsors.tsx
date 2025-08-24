"use client";

import { useMemo, useRef, useState } from 'react';

type LogoItem = {
  name: string;
  slug: string; // filename without extension
  href?: string; // optional link
};

const LOGOS: LogoItem[] = [
  { name: 'JPMorgan Chase & Co.', slug: 'jpmorgan-chase', href: 'https://www.jpmorganchase.com' },
  { name: 'Goldman Sachs', slug: 'goldman-sachs', href: 'https://www.goldmansachs.com' },
  { name: 'Morgan Stanley', slug: 'morgan-stanley', href: 'https://www.morganstanley.com' },
  { name: 'Citigroup', slug: 'citigroup', href: 'https://www.citigroup.com' },
  { name: 'Bank of America', slug: 'bank-of-america', href: 'https://www.bankofamerica.com' },
  { name: 'HSBC', slug: 'hsbc', href: 'https://www.hsbc.com' },
  { name: 'Barclays', slug: 'barclays', href: 'https://home.barclays' },
  { name: 'Deutsche Bank', slug: 'deutsche-bank', href: 'https://www.db.com' },
  { name: 'UBS', slug: 'ubs', href: 'https://www.ubs.com' },
  { name: 'BNP Paribas', slug: 'bnp-paribas', href: 'https://group.bnpparibas' },
  { name: 'Alphabet', slug: 'alphabet', href: 'https://abc.xyz' },
  { name: 'Amazon', slug: 'amazon', href: 'https://www.aboutamazon.com' },
  { name: 'Microsoft', slug: 'microsoft', href: 'https://www.microsoft.com' },
  { name: 'Apple', slug: 'apple', href: 'https://www.apple.com' },
  { name: 'Tesla', slug: 'tesla', href: 'https://www.tesla.com' },
  { name: 'Samsung', slug: 'samsung', href: 'https://www.samsung.com' },
  { name: 'SoftBank Group', slug: 'softbank-group', href: 'https://group.softbank/en' },
  { name: 'Sony', slug: 'sony', href: 'https://www.sony.com' },
  { name: 'Toyota Tsusho', slug: 'toyota-tsusho', href: 'https://www.toyota-tsusho.com' },
  { name: 'Mitsui', slug: 'mitsui', href: 'https://www.mitsui.com' },
  { name: 'Mitsubishi', slug: 'mitsubishi', href: 'https://www.mitsubishi.com' },
  { name: 'CBRE', slug: 'cbre', href: 'https://www.cbre.com' },
  { name: 'JLL', slug: 'jll', href: 'https://www.jll.com' },
  { name: 'Cushman & Wakefield', slug: 'cushman-and-wakefield', href: 'https://www.cushmanwakefield.com' },
  { name: 'Colliers', slug: 'colliers', href: 'https://www.colliers.com' },
  { name: 'Hines', slug: 'hines', href: 'https://www.hines.com' },
  { name: 'Greystar', slug: 'greystar', href: 'https://www.greystar.com' },
  { name: 'Prologis', slug: 'prologis', href: 'https://www.prologis.com' },
  { name: 'CapitaLand', slug: 'capitaland', href: 'https://www.capitaland.com' },
  { name: 'Lendlease', slug: 'lendlease', href: 'https://www.lendlease.com' },
  { name: 'China Vanke', slug: 'china-vanke', href: 'https://www.vanke.com' },
  { name: 'Country Garden', slug: 'country-garden', href: 'https://en.bgy.com.cn' },
  { name: 'Evergrande', slug: 'evergrande', href: 'http://www.evergrande.com' },
  { name: 'Allianz', slug: 'allianz', href: 'https://www.allianz.com' },
  { name: 'AXA', slug: 'axa', href: 'https://www.axa.com' },
  { name: 'PGIM', slug: 'pgim', href: 'https://www.pgim.com' },
  { name: 'MetLife Investment Management', slug: 'metlife-investment-management', href: 'https://investments.metlife.com' },
  { name: 'Aviva Investors', slug: 'aviva-investors', href: 'https://www.avivainvestors.com' },
  { name: 'Legal & General', slug: 'legal-and-general', href: 'https://www.legalandgeneral.com' },
  { name: 'Manulife', slug: 'manulife', href: 'https://www.manulife.com' },
  { name: 'Blackstone', slug: 'blackstone', href: 'https://www.blackstone.com' },
  { name: 'Brookfield', slug: 'brookfield', href: 'https://www.brookfield.com' },
  { name: 'KKR', slug: 'kkr', href: 'https://www.kkr.com' },
  { name: 'Apollo Global Management', slug: 'apollo-global-management', href: 'https://www.apollo.com' },
  { name: 'Starwood Capital Group', slug: 'starwood-capital-group', href: 'https://www.starwoodcapital.com' },
  { name: 'Carlyle Group', slug: 'carlyle-group', href: 'https://www.carlyle.com' },
  { name: 'Invesco Real Estate', slug: 'invesco-real-estate', href: 'https://www.invesco.com/realestate' },
  { name: 'Nuveen Real Estate', slug: 'nuveen-real-estate', href: 'https://www.nuveen.com/real-estate' },
  { name: 'CIM Group', slug: 'cim-group', href: 'https://www.cimgroup.com' },
  { name: 'Hilton', slug: 'hilton', href: 'https://www.hilton.com' },
  { name: 'Marriott International', slug: 'marriott', href: 'https://www.marriott.com' },
  { name: 'Hyatt Hotels', slug: 'hyatt', href: 'https://www.hyatt.com' },
  { name: 'Accor', slug: 'accor', href: 'https://group.accor.com' },
  { name: 'Four Seasons', slug: 'four-seasons', href: 'https://www.fourseasons.com' },
];

export function SponsorCarousel() {
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Duplicate the list to create an infinite loop effect
  const loopLogos = useMemo(() => [...LOGOS, ...LOGOS], []);

  return (
    <section aria-label="Sponsor logos" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Sponsors</h2>
            <p className="text-lg text-muted-foreground mt-2">We are proud to be partnered with these amazing companies.</p>
        </div>
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            ref={trackRef}
            className="flex items-center gap-10 will-change-transform"
            style={{
              animation: `${paused ? 'none' : 'scroll-left 60s linear infinite'}`,
            }}
          >
            {loopLogos.map((item, idx) => {
              const src = `https://placehold.co/150x60/gray/white?text=${item.name.replace('&', '').split(' ')[0]}`;
              const img = (
                <img
                  src={src}
                  alt={`${item.name} logo`}
                  loading="lazy"
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              );
              return item.href ? (
                <a
                  key={item.slug + idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 flex items-center justify-center"
                  aria-label={`${item.name} website`}
                >
                  {img}
                </a>
              ) : (
                <div key={item.slug + idx} className="shrink-0 flex items-center justify-center">
                  {img}
                </div>
              );
            })}
          </div>
           <div className="absolute inset-0 z-10" style={{
              background: 'linear-gradient(to right, hsl(var(--background)) 0%, transparent 10%, transparent 90%, hsl(var(--background)) 100%)'
           }} />
        </div>
      </div>
    </section>
  );
}