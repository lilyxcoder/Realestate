
"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const supportTickets = [
    { id: 1, subject: "Issue with my last investment", status: "Answered", lastUpdated: "2024-07-22" },
    { id: 2, subject: "How do I change my password?", status: "Open", lastUpdated: "2024-07-21" },
    { id: 3, subject: "Question about withdrawal fees", status: "Closed", lastUpdated: "2024-07-20" },
    { id: 4, subject: "Unable to complete 2FA setup", status: "Answered", lastUpdated: "2024-07-19" },
];

export default function SupportPage() {
  const router = useRouter();

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Open':
        return 'destructive';
      case 'Answered':
        return 'default';
      case 'Closed':
        return 'secondary';
      default:
        return 'outline';
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Return to previous page</span>
        </Button>
        <h1 className="text-3xl font-bold">Support Ticket</h1>
      </div>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
            <div>
                <CardTitle>My Support Tickets</CardTitle>
                <CardDescription>View your past and current support requests.</CardDescription>
            </div>
            <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                New Ticket
            </Button>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Subject</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Updated</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {supportTickets.map((ticket) => (
                        <TableRow key={ticket.id}>
                            <TableCell className="font-medium">{ticket.subject}</TableCell>
                            <TableCell>
                                <Badge variant={getStatusVariant(ticket.status)}>
                                    {ticket.status}
                                </Badge>
                            </TableCell>
                            <TableCell>{ticket.lastUpdated}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
      </Card>
    </div>
  );
}
