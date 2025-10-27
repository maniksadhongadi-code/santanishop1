import Link from 'next/link';
import { Logo } from '@/components/icons/logo';
import { Button, buttonVariants } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isPolicyPage = pathname === '/policy';
  const isTransparent = !isScrolled && !isPolicyPage;

  return (
    <header
      className={cn(
        'py-4 px-4 md:px-6 fixed top-0 left-0 right-0 z-20 transition-all duration-300',
        isTransparent
          ? 'bg-transparent text-white'
          : 'bg-background/80 backdrop-blur-sm text-foreground border-b'
      )}
    >
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Logo className="h-12 w-12" />
          </Link>
          <Link href="/" className={cn("hidden sm:block text-2xl font-bold tracking-tight no-underline", isTransparent ? 'text-white hover:text-white/90' : 'text-foreground hover:text-foreground/90')}>
            Sanatani Shop
          </Link>
        </div>

        <nav className="hidden md:flex gap-6 items-center absolute left-1/2 -translate-x-1/2">
          <Link href="/" className={cn(buttonVariants({ variant: 'ghost', size: 'default' }), 'text-lg', isTransparent ? 'text-white hover:bg-white/10 hover:text-white' : 'text-foreground hover:bg-accent')}>
            Home
          </Link>
          <Link href="/#products" className={cn(buttonVariants({ variant: 'ghost', size: 'default' }), 'text-lg', isTransparent ? 'text-white hover:bg-white/10 hover:text-white' : 'text-foreground hover:bg-accent')}>
            Products
          </Link>
          <Link href="/#about" className={cn(buttonVariants({ variant: 'ghost', size: 'default' }), 'text-lg', isTransparent ? 'text-white hover:bg-white/10 hover:text-white' : 'text-foreground hover:bg-accent')}>
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className={cn(isTransparent ? 'text-white border-white/50 hover:bg-white/10 hover:text-white' : 'text-foreground border-border hover:bg-accent')}>
            <ShoppingCart className="h-6 w-6" />
            <span className="sr-only">Shopping Cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
