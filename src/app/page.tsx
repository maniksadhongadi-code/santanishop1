import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProductCard } from '@/components/product-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const adobeImage = PlaceHolderImages.find(p => p.id === 'adobe-creative-cloud');
  const chatGptImage = PlaceHolderImages.find(p => p.id === 'chatgpt-plus');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-16">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline tracking-tight text-foreground sm:text-5xl">
            Premium Digital Subscriptions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Get access to industry-leading creative and AI tools with our simple, one-time purchases.
          </p>
        </section>

        <section className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 lg:gap-12">
          {adobeImage && (
            <ProductCard
              name="Adobe Creative Cloud"
              description="1-Year All Apps Subscription"
              price="$599.99"
              imageUrl={adobeImage.imageUrl}
              imageHint={adobeImage.imageHint}
            />
          )}
          {chatGptImage && (
            <ProductCard
              name="ChatGPT Plus"
              description="6-Month Subscription"
              price="$120.00"
              imageUrl={chatGptImage.imageUrl}
              imageHint={chatGptImage.imageHint}
            />
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
