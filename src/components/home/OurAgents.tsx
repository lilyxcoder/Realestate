import { getAgents } from '@/lib/data';
import { AgentCard } from '@/components/agents/AgentCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export async function OurAgents() {
  const agents = await getAgents();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Meet Our Agents</h2>
          <p className="text-lg text-muted-foreground mt-2">Our team of dedicated professionals is here to help you</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg">
                <Link href="/agents">View All Agents</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
