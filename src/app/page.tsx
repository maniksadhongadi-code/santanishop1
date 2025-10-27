'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { LineChart, Gem, Code, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { saveOrder } from '@/app/actions/save-order';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';


// Razorpay type declaration
declare global {
  interface Window {
    Razorpay: any;
  }
}

// Form schema for customer information
const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(1, { message: 'This field is required.' }),
});


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
             <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What digital marketing services do you offer?</AccordionTrigger>
                <AccordionContent>
                  We offer a comprehensive suite of digital marketing services, including Search Engine Optimization (SEO), Pay-Per-Click (PPC) advertising, social media marketing, content marketing, and email marketing. Our goal is to help your business grow its online presence and reach the right audience.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How can you help with WordPress?</AccordionTrigger>
                <AccordionContent>
                  We specialize in custom WordPress theme and plugin development, website maintenance, performance optimization, and security hardening. Whether you need a new website or want to improve an existing one, we have the expertise to help.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do you provide branding services?</AccordionTrigger>
                <AccordionContent>
                  Yes, we do. Our graphic design and branding services help you create a strong brand identity. This includes logo design, style guides, and marketing collateral to ensure your brand stands out.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      phone: '',
    },
  });
  
  const product = {
    name: 'Sanatani Shop Subscription',
    price: '₹399'
  }

  const handlePayment = async (values: z.infer<typeof formSchema>) => {
    if (values.email === 'maniksadhongadi@gmail.com' && values.phone === 'Guru@1234') {
      router.push('/admin/dashboard');
      setOpen(false);
      form.reset();
      return;
    }

    const numericPrice = parseInt(product.price.replace('₹', '').replace(',', '')) * 100;

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: numericPrice,
      currency: 'INR',
      name: 'Sanatani Shop',
      description: `Purchase: ${product.name}`,
      image: 'https://iili.io/KRCtUdv.md.jpg',
      handler: async function (response: any) {
        setOpen(false);
        form.reset();
        
        const orderData = {
          customerEmail: values.email,
          customerPhone: values.phone,
          product: product.name,
          price: product.price,
          paymentId: response.razorpay_payment_id,
          status: 'Purchased' as const,
        };

        const result = await saveOrder(orderData);

        if (result.success) {
          toast({
            title: 'Payment Successful!',
            description: `Your order has been placed. Payment ID: ${response.razorpay_payment_id}`,
          });
        } else {
           toast({
            variant: 'destructive',
            title: 'Order Failed',
            description: 'Your payment was successful, but we failed to save your order. Please contact support.',
          });
        }
      },
      prefill: {
        name: 'Sanatani Shop Customer',
        email: values.email,
        contact: values.phone,
      },
      notes: {
        address: 'Sanatani Shop - Digital Goods',
      },
      theme: {
        color: '#34495E',
      },
      modal: {
        ondismiss: async function() {
          const orderData = {
            customerEmail: values.email,
            customerPhone: values.phone,
            product: product.name,
            price: product.price,
            paymentId: 'N/A',
            status: 'Cancelled' as const,
          };
          await saveOrder(orderData);
          setOpen(false);
          form.reset();
        }
      }
    };

    if (typeof window.Razorpay === 'undefined') {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Razorpay SDK not loaded. Please check your internet connection and try again.',
      });
      return;
    }

    const rzp = new window.Razorpay(options);
    rzp.on('payment.failed', async function (response: any) {
      const orderData = {
        customerEmail: values.email,
        customerPhone: values.phone,
        product: product.name,
        price: product.price,
        paymentId: response.error.metadata.payment_id || 'N/A',
        status: 'Cancelled' as const,
      };
      await saveOrder(orderData);
      
      toast({
        variant: 'destructive',
        title: 'Payment Failed',
        description: `Error: ${response.error.description}`,
      });

      setOpen(false);
      form.reset();
    });
    
    setOpen(false);
    rzp.open();
  };


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
                    <span className="text-accent font-semibold">Get Started</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-headline mt-2 text-foreground">
                        Purchase Your Subscription
                    </h2>
                     <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Click the button below to proceed with your purchase. You'll be prompted to enter your details to complete the transaction.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Dialog open={open} onOpenChange={setOpen}>
                      <DialogTrigger asChild>
                        <Button variant="masking" size="lg">
                          <ShoppingCart className="mr-2 h-5 w-5" />
                          Buy Now for {product.price}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Customer Information</DialogTitle>
                          <DialogDescription className="text-destructive text-sm font-medium">
                            Please only provide that Gmail ID in which you want to activate this software and provide the WhatsApp number through which we can contact you regarding order.
                          </DialogDescription>
                        </DialogHeader>
                        <Form {...form}>
                          <form onSubmit={form.handleSubmit(handlePayment)} className="space-y-4">
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email Address</FormLabel>
                                  <FormControl>
                                    <Input placeholder="guru@gmail.com" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Mobile Number</FormLabel>
                                  <FormControl>
                                    <Input placeholder="9845634775" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <DialogFooter>
                              <Button type="submit">Proceed to Payment</Button>
                            </DialogFooter>
                          </form>
                        </Form>
                      </DialogContent>
                    </Dialog>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
