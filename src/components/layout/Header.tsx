
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Building2, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  const pathname = usePathname();
  const isOnDashboard = pathname.startsWith('/dashboard');

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/properties', label: 'Properties' },
    { href: '/agents', label: 'Agents' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/faq', label: 'FAQ' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <header className="bg-card/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        <Link href="/" className="flex items-center gap-2" aria-label="Go to homepage">
          <Building2 className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold text-gray-800 hidden sm:inline">RealEstate Explorer</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
           {isOnDashboard ? (
             <>
               <Button variant="ghost" asChild><Link href="/login">Logout</Link></Button>
               <Button variant="outline" size="icon" asChild>
                <Link href="/dashboard/profile">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Profile Settings</span>
                </Link>
               </Button>
             </>
           ) : (
             <>
               <Button variant="ghost" asChild><Link href="/login">Login</Link></Button>
               <Button asChild><Link href="/signup">Sign Up</Link></Button>
             </>
           )}
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-lg font-medium text-gray-600 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                ))}
              </nav>
               <div className="flex flex-col gap-2 mt-8">
                 {isOnDashboard ? (
                    <>
                      <Button variant="ghost" asChild><Link href="/login">Logout</Link></Button>
                      <Button variant="outline" asChild>
                        <Link href="/dashboard/profile">
                          <User className="mr-2 h-5 w-5" />
                          Profile Settings
                        </Link>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="ghost" asChild><Link href="/login">Login</Link></Button>
                      <Button asChild><Link href="/signup">Sign Up</Link></Button>
                    </>
                  )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
