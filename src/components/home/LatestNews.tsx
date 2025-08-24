import { BlogCard } from './BlogCard';

const blogPosts = [
  {
    id: 1,
    image: 'https://placehold.co/600x400.png',
    data_ai_hint: "real estate investment",
    date: { day: '07', month: 'Oct' },
    title: 'Important Tips for Real Estate Investing Career',
    excerpt: 'Embarking on a journey into real estate investing demands a comprehensive approach that encompasses various critical factors. Here are ten esse...',
    href: '#',
  },
  {
    id: 2,
    image: 'https://placehold.co/600x400.png',
    data_ai_hint: "house keys",
    date: { day: '21', month: 'Nov' },
    title: 'What is Turn Key Real Estate Investing?',
    excerpt: 'Investing in Real Estate: A Guide to Turnkey Investing Investing in real estate can be a lucrative venture, but it often requires significant time, ef...',
    href: '#',
  },
  {
    id: 3,
    image: 'https://placehold.co/600x400.png',
    data_ai_hint: "property portfolio",
    date: { day: '21', month: 'Nov' },
    title: 'How to Build Your Real Estate Portfolio',
    excerpt: 'Are you tired of renting and dreaming of owning multiple properties? Transitioning from being a renter to becoming a real estate investor can b...',
    href: '#',
  },
];

export function LatestNews() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-primary font-semibold">Our blogs</h2>
          <p className="text-3xl md:text-4xl font-bold mt-2">Latest News & Articles</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
