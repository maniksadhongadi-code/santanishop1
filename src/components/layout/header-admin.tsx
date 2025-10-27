import Link from 'next/link';
import { Logo } from '@/components/icons/logo';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  return (
    <header className="py-4 px-4 md:px-6 sticky top-0 bg-background/80 backdrop-blur-sm z-10 border-b">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Logo className="h-12 w-12 text-primary" />
          </Link>
          <Link href="/" className="hidden sm:block text-2xl font-bold tracking-tight text-foreground font-headline no-underline hover:text-foreground/90">
            Sanatani Shop
          </Link>
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/admin/dashboard" className={cn('text-lg font-medium text-muted-foreground hover:text-foreground')}>
            Dashboard
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-6 w-6" />
            <span className="sr-only">Shopping Cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
