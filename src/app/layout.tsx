import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';
import { WhatsAppFab } from '@/components/whatsapp-fab';
import { BubbleAnimation } from '@/components/ui/bubble-animation';

export const metadata: Metadata = {
  title: 'Sanatani Shop',
  description: 'Your one-stop shop for premium digital subscriptions.',
  openGraph: {
    title: 'Sanatani Shop',
    description: 'Your one-stop shop for premium digital subscriptions.',
    images: [
      {
        url: 'https://iili.io/KRCtUdv.md.jpg',
        width: 1200,
        height: 630,
        alt: 'Sanatani Shop Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <BubbleAnimation />
        <div className="relative z-10">{children}</div>
        <WhatsAppFab phoneNumber="9845634775" />
        <Toaster />
        <Script id="razorpay-checkout-js" src="https://checkout.razorpay.com/v1/checkout.js" />
      </body>
    </html>
  );
}
