
"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Landmark, Wallet, Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function WithdrawPage() {
  const router = useRouter();
  const { toast } = useToast();

  const handleWithdraw = (event: React.FormEvent) => {
    event.preventDefault();
    toast({
        title: "Withdrawal Request Submitted",
        description: "Your request has been received and is being processed.",
    });
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Return to previous page</span>
        </Button>
        <h1 className="text-3xl font-bold">Withdraw</h1>
      </div>
      
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Withdraw Funds</CardTitle>
          <CardDescription>Select your preferred withdrawal method and fill in the details.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
            <form onSubmit={handleWithdraw}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Wire Transfer */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <Landmark className="h-8 w-8 text-primary" />
                                <div>
                                    <CardTitle className="text-xl">Wire Transfer</CardTitle>
                                    <CardDescription>Direct to your bank account.</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <Label htmlFor="bankName">Bank Name</Label>
                                <Input id="bankName" placeholder="e.g., Chase Bank" />
                            </div>
                            <div>
                                <Label htmlFor="accountNumber">Account Number</Label>
                                <Input id="accountNumber" placeholder="Your account number" />
                            </div>
                             <div>
                                <Label htmlFor="holderName">Account Holder Name</Label>
                                <Input id="holderName" placeholder="e.g., John Doe" />
                            </div>
                             <div>
                                <Label htmlFor="swiftCode">SWIFT / BIC Code</Label>
                                <Input id="swiftCode" placeholder="For international transfers" />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Crypto and International */}
                    <div className="space-y-8">
                        <Card>
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                     <Wallet className="h-8 w-8 text-primary" />
                                     <div>
                                        <CardTitle className="text-xl">Cryptocurrency</CardTitle>
                                        <CardDescription>To your crypto wallet.</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <Label htmlFor="cryptoType">Cryptocurrency</Label>
                                    <Select>
                                    <SelectTrigger id="cryptoType">
                                        <SelectValue placeholder="Select crypto" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="btc">Bitcoin (BTC)</SelectItem>
                                        <SelectItem value="eth">Ethereum (ETH)</SelectItem>
                                        <SelectItem value="usdt">Tether (USDT)</SelectItem>
                                    </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label htmlFor="walletAddress">Wallet Address</Label>
                                    <Input id="walletAddress" placeholder="Your wallet address" />
                                </div>
                            </CardContent>
                        </Card>
                        
                        <Card>
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                     <Globe className="h-8 w-8 text-primary" />
                                     <div>
                                        <CardTitle className="text-xl">International Methods</CardTitle>
                                        <CardDescription>Other payment services</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                             <CardContent className="space-y-4">
                                <Button variant="outline" className="w-full justify-start py-6">
                                    <span className="font-semibold">PayPal</span>
                                </Button>
                                <Button variant="outline" className="w-full justify-start py-6">
                                    <span className="font-semibold">Wise</span>
                                </Button>
                             </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="mt-8 space-y-4">
                     <div>
                        <Label htmlFor="amount" className="text-lg">Amount to Withdraw ($)</Label>
                        <Input id="amount" type="number" placeholder="e.g., 500.00" className="h-12 text-xl" />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                        Submit Withdrawal Request
                    </Button>
                </div>
            </form>
        </CardContent>
      </Card>
    </div>
  );
}
