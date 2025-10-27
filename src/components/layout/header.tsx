import Link from 'next/link';
import { Logo } from '@/components/icons/logo';
import { Button, buttonVariants } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  return (
    <header className="py-4 px-4 md:px-6 absolute top-0 left-0 right-0 z-20 bg-transparent text-white">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Logo className="h-12 w-12 text-white" />
          </Link>
          <Link href="/" className="hidden sm:block text-2xl font-bold tracking-tight no-underline text-white hover:text-white/90">
            Sanatani Shop
          </Link>
        </div>

        <nav className="hidden md:flex gap-6 items-center absolute left-1/2 -translate-x-1/2">
          <Link href="/" className={cn(buttonVariants({ variant: 'ghost', size: 'default' }), 'text-lg text-white hover:bg-white/10 hover:text-white')}>
            Home
          </Link>
          <Link href="/#products" className={cn(buttonVariants({ variant: 'ghost', size: 'default' }), 'text-lg text-white hover:bg-white/10 hover:text-white')}>
            Products
          </Link>
          <Link href="/#about" className={cn(buttonVariants({ variant: 'ghost', size: 'default' }), 'text-lg text-white hover:bg-white/10 hover:text-white')}>
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="text-white border-white/50 hover:bg-white/10 hover:text-white">
            <ShoppingCart className="h-6 w-6" />
            <span className="sr-only">Shopping Cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
