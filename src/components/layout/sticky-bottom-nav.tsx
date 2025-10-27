'use client';

import Link from 'next/link';
import { Home, Layers, ShoppingBag, MessageCircleQuestion, Rss } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#services', icon: Layers, label: 'Categories' },
  { href: '#products', icon: ShoppingBag, label: 'Shop' },
  { href: '#blog', icon: Rss, label: 'Blog' },
  { href: '#about', icon: MessageCircleQuestion, label: 'FAQs' },
];

export function StickyBottomNav() {
  const pathname = usePathname();

  // Only show on the homepage
  if (pathname !== '/') {
    return null;
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 md:hidden">
      <div className="mx-auto max-w-md px-2 pb-2">
        <div className="bg-background/80 backdrop-blur-lg border border-border rounded-full p-2">
            <div className="flex justify-around items-center">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex flex-col items-center justify-center text-muted-foreground w-16 h-12 rounded-full transition-colors',
                    'hover:text-primary'
                  )}
                >
                  <item.icon className="h-5 w-5 mb-1" />
                  <span className="text-xs font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
        </div>
      </div>
    </nav>
  );
}
