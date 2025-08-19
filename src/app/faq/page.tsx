
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FAQPage() {
  const faqs = [
    {
      question: "What is RealEstate Explorer?",
      answer: "RealEstate Explorer is a platform for finding and investing in real estate properties. We provide tools and resources to help you make informed investment decisions.",
    },
    {
      question: "How do I get started?",
      answer: "To get started, simply sign up for an account, browse our listings, and find a property you're interested in. Our agents are here to help you every step of the way.",
    },
    {
      question: "What are the fees?",
      answer: "Our fees vary depending on the services you use. Please see our pricing page for more details.",
    },
    {
      question: "Can I sell my property on your platform?",
      answer: "Currently, we only list properties from our partners. However, we are exploring options to allow individuals to list their properties in the future.",
    },
     {
      question: "How is my investment secured?",
      answer: "We use a variety of security measures to protect your investment. All transactions are processed through secure channels, and we work with trusted partners to ensure the safety of your funds.",
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground mt-2">Find answers to common questions below.</p>
      </div>
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle>Common Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
