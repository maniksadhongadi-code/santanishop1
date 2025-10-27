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
    <section className="relative h-[60vh] min-h-[400px] flex items-center text-white">
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
            <Button size="lg" variant="default" asChild>
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
              <h2 className="text-3xl md:text-4xl font-bold font-headline mt-2">
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
          <h2 className="text-3xl md:text-4xl font-bold font-headline mt-2">
            What We Do Best
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8 border rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <LineChart className="h-12 w-12 mx-auto text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Digital Marketing</h3>
            <p className="text-muted-foreground">
              Boost your online presence and reach your target audience with our data-driven digital marketing strategies. We help you grow your business from SEO to social media.
            </p>
          </div>
          <div className="p-8 border rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <Gem className="h-12 w-12 mx-auto text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Graphic Design & Branding</h3>
            <p className="text-muted-foreground">
              Craft a stunning brand identity that resonates with your audience. Our creative team designs everything from logos to complete branding packages that tell your unique story.
            </p>
          </div>
          <div className="p-8 border rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <Code className="h-12 w-12 mx-auto text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Website & App Development</h3>
            <p className="text-muted-foreground">
              Build a powerful digital experience with our custom website and mobile app development. We create responsive, user-friendly platforms that drive engagement and conversions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const [comparisonList, setComparisonList] = useState<Product[]>([]);

  const handleComparisonChange = (product: Product, isSelected: boolean) => {
    if (isSelected) {
      setComparisonList(prev => [...prev, product]);
    } else {
      setComparisonList(prev => prev.filter(p => p.name !== product.name));
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <section id="products" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-accent font-semibold">Our Offered Products</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-headline mt-2">
                        Trendy and Popular Subscriptions
                    </h2>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
