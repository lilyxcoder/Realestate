"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import type { Agent } from "@/lib/types";
import { Mail, MessageSquare, Phone, User } from "lucide-react";
import Image from "next/image";

interface PropertyContactFormProps {
    agent: Agent;
}

export function PropertyContactForm({ agent }: PropertyContactFormProps) {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Inquiry Sent!",
      description: "The agent will get back to you shortly.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Contact Agent</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 mb-6">
            <Image src={agent.image} alt={agent.name} width={64} height={64} className="rounded-full" data-ai-hint={agent.data_ai_hint}/>
            <div>
                <p className="font-bold">{agent.name}</p>
                <p className="text-sm text-muted-foreground">{agent.title}</p>
            </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="(123) 456-7890" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="I'm interested in this property..." required rows={4}/>
          </div>
          <Button type="submit" className="w-full">
            <MessageSquare className="mr-2 h-4 w-4" /> Send Inquiry
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
