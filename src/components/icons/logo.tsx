import Image from 'next/image';
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Logo(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <Image
        src="https://iili.io/KRCtUdv.md.jpg"
        alt="SanataniShop Logo"
        width={50}
        height={50}
        className={cn('h-full w-full', props.className)}
      />
    </div>
  );
}
