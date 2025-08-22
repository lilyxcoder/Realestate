import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface BlogPost {
  id: number;
  image: string;
  data_ai_hint?: string;
  date: {
    day: string;
    month: string;
  };
  title: string;
  excerpt: string;
  href: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <CardHeader className="p-0 relative">
        <Link href={post.href}>
          <Image
            src={post.image}
            alt={post.title}
            width={600}
            height={400}
            className="w-full h-56 object-cover"
            data-ai-hint={post.data_ai_hint}
          />
        </Link>
        <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-3 rounded-md text-center leading-none">
          <span className="text-2xl font-bold">{post.date.day}</span>
          <span className="text-xs font-semibold block">{post.date.month}</span>
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 flex-grow">
          <Link href={post.href} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {post.excerpt}
        </p>
        <Button asChild variant="link" className="p-0 h-auto justify-start">
          <Link href={post.href}>Read More</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
