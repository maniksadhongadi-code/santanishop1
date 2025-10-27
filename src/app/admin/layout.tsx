import { Header } from '@/components/layout/header-admin';
import { Footer } from '@/components/layout/footer';
import { Nav } from './_components/nav';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-16">
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <Nav />
          </aside>
          <div className="flex-1">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
