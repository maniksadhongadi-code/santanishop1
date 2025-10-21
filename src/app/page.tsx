'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProductCard } from '@/components/product-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HomePage() {
  const adobeImage = PlaceHolderImages.find(img => img.id === 'adobe-creative-cloud');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-16">
        <div className="flex flex-wrap justify-center gap-8">
          {adobeImage && (
            <ProductCard
              name="Adobe Creative Cloud"
              description="1-Year Subscription"
              price="₹2,499"
              imageUrl={adobeImage.imageUrl}
              imageHint={adobeImage.imageHint}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
