'use client';

import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

declare global {
  interface Window {
    Razorpay: any;
  }
}

type ProductCardProps = {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  imageHint: string;
  className?: string;
};

export function ProductCard({
  name,
  description,
  price,
  imageUrl,
  imageHint,
  className,
}: ProductCardProps) {
  const { toast } = useToast();

  const handlePayment = async () => {
    const numericPrice = parseInt(price.replace('₹', '').replace(',', '')) * 100; // Amount in paise

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: numericPrice,
      currency: 'INR',
      name: 'Sanatani Shop',
      description: `Purchase: ${name}`,
      image: 'https://iili.io/KRCtUdv.md.jpg',
      handler: function (response: any) {
        toast({
          title: 'Payment Successful!',
          description: `Payment ID: ${response.razorpay_payment_id}`,
        });
        // Here you would typically verify the payment on your server
      },
      prefill: {
        name: 'Sanatani Shop Customer',
        email: 'customer@sanatanishop.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Sanatani Shop - Digital Goods',
      },
      theme: {
        color: '#3399cc',
      },
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
    rzp.on('payment.failed', function (response: any) {
      toast({
        variant: 'destructive',
        title: 'Payment Failed',
        description: `Error: ${response.error.description}`,
      });
    });
    rzp.open();
  };

  return (
    <Card className={cn('w-full max-w-sm overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300', className)}>
      <CardContent className="p-0">
        <div className="relative aspect-[3/2] w-full">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
            data-ai-hint={imageHint}
          />
        </div>
      </CardContent>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <p className="text-2xl font-bold text-foreground">{price}</p>
        <Button 
          onClick={handlePayment}
          className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-2">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
}
