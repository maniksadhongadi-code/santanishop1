'use client';

import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { saveOrder } from '@/app/actions/save-order';


declare global {
  interface Window {
    Razorpay: any;
  }
}

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(1, { message: 'This field is required.' }),
});

type ProductCardProps = {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  imageHint: string;
  className?: string;
  aspectRatio?: string;
};

const RazorpayButton = ({ paymentButtonId }: { paymentButtonId: string }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.async = true;
    script.dataset.payment_button_id = paymentButtonId;

    script.onload = () => setLoading(false);
    script.onerror = () => {
      setLoading(false);
      setError(true);
    };

    const currentFormRef = formRef.current;
    if (currentFormRef) {
      currentFormRef.appendChild(script);
    }
    
    return () => {
        if (currentFormRef && currentFormRef.contains(script)) {
            currentFormRef.removeChild(script);
        }
    }
  }, [paymentButtonId]);

  return (
    <div>
      {loading && !error && <div className="text-sm text-muted-foreground">Loading payment button...</div>}
      {error && <div className="text-sm text-destructive">Failed to load payment button.</div>}
      <form ref={formRef}></form>
    </div>
  );
};


export function ProductCard({
  name,
  description,
  price,
  imageUrl,
  imageHint,
  className,
  aspectRatio = 'aspect-[4/3]',
}: ProductCardProps) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      phone: '',
    },
  });

  const handlePayment = async (values: z.infer<typeof formSchema>) => {
    // Admin login check
    if (values.email === 'maniksadhongadi@gmail.com' && values.phone === 'Guru@1234') {
      router.push('/admin/dashboard');
      setOpen(false);
      form.reset();
      return;
    }

    const numericPrice = parseInt(price.replace('₹', '').replace(',', '')) * 100; // Amount in paise

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: numericPrice,
      currency: 'INR',
      name: 'Sanatani Shop',
      description: `Purchase: ${name}`,
      image: 'https://iili.io/KRCtUdv.md.jpg',
      handler: async function (response: any) {
        setOpen(false);
        form.reset();
        
        const orderData = {
          customerEmail: values.email,
          customerPhone: values.phone,
          product: name,
          price: price,
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
            product: name,
            price: price,
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
        product: name,
        price: price,
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
  
  const getPaymentButton = () => {
    if (name === 'Adobe Creative Cloud') {
      return <RazorpayButton paymentButtonId="pl_RRDgKfpZJzBThu" />;
    }
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="default" className="w-full">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Buy Now
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
    );
  };

  return (
    <Card className={cn('w-full max-w-sm overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group', className)}>
       <div className={cn('relative w-full bg-muted', aspectRatio)}>
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={imageHint}
          />
        </div>
      <CardContent className="p-6">
        <CardTitle className="font-headline text-xl mb-2">{name}</CardTitle>
        <CardDescription className="mb-4">{description}</CardDescription>
        <div className="flex justify-between items-center">
            <p className="text-2xl font-bold text-primary">{price}</p>
            {getPaymentButton()}
        </div>
      </CardContent>
    </Card>
  );
}
