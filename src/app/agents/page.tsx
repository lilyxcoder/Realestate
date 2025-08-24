import { getAgents } from '@/lib/data';
import { AgentCard } from '@/components/agents/AgentCard';

export default async function AgentsPage() {
  const agents = await getAgents();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Our Agents</h1>
        <p className="text-lg text-muted-foreground mt-2">Meet our team of dedicated professionals</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
}
