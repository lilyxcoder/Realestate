"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Building2, LayoutDashboard, Landmark, ArrowLeftRight, Users, Briefcase, LogOut, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/properties', label: 'Properties', icon: Building2 },
  { href: '/admin/users', label: 'Users', icon: Users },
  { href: '/admin/investments', label: 'Investments', icon: Briefcase },
  { href: '/admin/transactions', label: 'Transactions', icon: ArrowLeftRight },
  
];

export function AdminSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <aside className="hidden md:flex flex-col w-64 bg-card text-card-foreground border-r border-border">
       <div className="flex items-center justify-center h-16 border-b">
        <Link href="/admin/dashboard" className="flex items-center gap-2">
          <Shield className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold">Admin Panel</span>
        </Link>
      </div>
      <nav className="flex-1 overflow-y-auto p-4 space-y-4">
        <div>
            <ul className="space-y-1">
                {navLinks.map((link) => (
                    <li key={link.href}>
                    <Link href={link.href}>
                        <Button
                        variant={isActive(link.href) ? 'secondary' : 'ghost'}
                        className="w-full justify-start"
                        >
                        <link.icon className="mr-2 h-5 w-5" />
                        {link.label}
                        </Button>
                    </Link>
                    </li>
                ))}
            </ul>
        </div>
      </nav>
      <div className="p-4 border-t">
        <Link href="/">
            <Button variant="ghost" className="w-full justify-start">
                <LogOut className="mr-2 h-5 w-5" />
                Exit Admin
            </Button>
        </Link>
      </div>
    </aside>
  );
}
