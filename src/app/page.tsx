'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProductCard, type Product } from '@/components/product-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { LineChart, Gem, Code } from 'lucide-react';
import { useState } from 'react';

function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative h-[75vh] min-h-[500px] flex items-center text-white">
      {heroImage && (
         <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <span className="block mb-2 text-lg font-semibold text-accent" data-animation="fadeInLeft" data-delay=".2s">
            Discover Your Digital Universe
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4" data-animation="fadeInLeft" data-delay=".4s">
            Premium Subscriptions, Unbeatable Prices
          </h1>
          <p className="text-lg md:text-xl mb-8" data-animation="fadeInLeft" data-delay=".6s">
            Get access to the best creative and productivity tools. SanataniShop offers genuine subscriptions with instant delivery and support.
          </p>
          <div data-animation="fadeInLeft" data-delay=".8s">
            <Button size="lg" variant="masking" asChild>
              <a href="#products">Explore Products</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-section');
  return (
     <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <span className="text-accent font-semibold">About Our Shop</span>
              <h2 className="text-3xl md:text-4xl font-bold font-headline mt-2 text-foreground">
                Good Software, Great Prices
              </h2>
            </div>
            <p className="text-muted-foreground mb-6">
              We believe in providing access to top-tier digital tools without the hefty price tag. Our mission is to empower creators, students, and professionals with the software they need to succeed.
            </p>
             <p className="text-muted-foreground mb-8">
              At SanataniShop, we are committed to providing genuine, reliable subscriptions with a focus on customer satisfaction. We handle the process so you can focus on your work.
            </p>
             <Button variant="outline" asChild>
              <a href="#">Learn More</a>
            </Button>
          </div>
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
             {aboutImage && (
               <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold font-headline mt-2 text-foreground">
            What We Do Best
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8 border bg-card rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                <LineChart className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Digital Marketing</h3>
            <p className="text-muted-foreground">
              Boost your online presence and reach your target audience with our data-driven digital marketing strategies. We help you grow your business from SEO to social media.
            </p>
          </div>
          <div className="p-8 border bg-card rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                <Gem className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Graphic Design & Branding</h3>
            <p className="text-muted-foreground">
              Craft a stunning brand identity that resonates with your audience. Our creative team designs everything from logos to complete branding packages that tell your unique story.
            </p>
          </div>
          <div className="p-8 border bg-card rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                <Code className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Website & App Development</h3>
            <p className="text-muted-foreground">
              Build a powerful digital experience with our custom website and mobile app development. We create responsive, user-friendly platforms that drive engagement and conversions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const products: Product[] = [
    {
        name: 'Canva Pro',
        description: 'Design anything. Publish anywhere. With Canva Pro, you get a full suite of tools to create professional designs with ease.',
        price: '₹399',
        imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjYW52YXxlbnwwfHx8fDE3NjE1OTEzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        imageHint: 'Canva logo'
    },
    {
        name: 'Midjourney',
        description: 'An independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species.',
        price: '₹549',
        imageUrl: 'https://images.unsplash.com/photo-1678560897587-a34204f2113c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtaWRqb3VybmV5fGVufDB8fHx8MTc2MTU5MTU0OXww&ixlib=rb-4.1.0&q=80&w=1080',
        imageHint: 'Midjourney AI art'
    }
]

export default function HomePage() {
  const [comparisonList, setComparisonList] = useState<Product[]>([]);

  const handleComparisonChange = (product: Product, isSelected: boolean) => {
    if (isSelected) {
      if (comparisonList.length < 4) {
        setComparisonList(prev => [...prev, product]);
      }
    } else {
      setComparisonList(prev => prev.filter(p => p.name !== product.name));
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow z-10">
        <Hero />
        <About />
        <Services />
        <section id="products" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-accent font-semibold">Our Offered Products</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-headline mt-2 text-foreground">
                        Trendy and Popular Subscriptions
                    </h2>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                    {products.map(product => (
                        <ProductCard 
                            key={product.name}
                            product={product}
                            onCompareChange={handleComparisonChange}
                        />
                    ))}
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
