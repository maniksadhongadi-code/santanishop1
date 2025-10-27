import Link from 'next/link';
import { Logo } from '@/components/icons/logo';
import { Button, buttonVariants } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  return (
    <header className="py-6 px-4 md:px-6 border-b sticky top-0 bg-background/80 backdrop-blur-sm z-10">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Logo className="h-16 w-16 text-primary" />
          </Link>
          <Link href="/" className="hidden sm:block text-4xl font-bold tracking-tight text-foreground font-headline no-underline hover:text-foreground/90">
            Sanatani Shop
          </Link>
        </div>

        <nav className="hidden md:flex gap-4 items-center">
          <Link href="/" className={cn(buttonVariants({ variant: 'masking', size: 'default' }), 'text-lg')}>
            Home
          </Link>
          <Link href="/#products" className={cn(buttonVariants({ variant: 'masking', size: 'default' }), 'text-lg')}>
            Products
          </Link>
          <Link href="/about" className={cn(buttonVariants({ variant: 'masking', size: 'default' }), 'text-lg')}>
            About
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
}
