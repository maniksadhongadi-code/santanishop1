import { Logo } from '@/components/icons/logo';

export function Header() {
  return (
    <header className="py-6 px-4 md:px-6 border-b">
      <div className="container mx-auto flex items-center gap-4">
        <Logo className="h-8 w-8 text-primary" />
        <h1 className="text-2xl font-bold tracking-tight text-primary font-headline">
          SanataniShop
        </h1>
      </div>
    </header>
  );
}
