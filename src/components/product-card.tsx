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
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-2">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
}
