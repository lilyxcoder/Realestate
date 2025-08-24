import Image from 'next/image';
import type { Agent } from '@/lib/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <Card className="text-center overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="bg-primary/10 h-24" />
        <div className="relative p-6 -mt-16">
          <Image
            src={agent.image}
            alt={agent.name}
            width={128}
            height={128}
            className="rounded-full mx-auto border-4 border-white shadow-md"
            data-ai-hint={agent.data_ai_hint}
          />
          <h3 className="text-xl font-bold mt-4">{agent.name}</h3>
          <p className="text-primary">{agent.title}</p>
          <p className="text-sm text-muted-foreground mt-2">{agent.propertiesCount} Properties</p>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2 p-4 pt-0 border-t">
         <Button variant="ghost" className="w-full">
            <Mail className="mr-2 h-4 w-4" /> {agent.email}
          </Button>
          <Button variant="ghost" className="w-full">
            <Phone className="mr-2 h-4 w-4" /> {agent.phone}
          </Button>
      </CardFooter>
    </Card>
  );
}
