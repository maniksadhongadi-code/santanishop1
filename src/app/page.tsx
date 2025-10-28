'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Image
        src="https://iili.io/KPJAAF9.md.png"
        alt="Sanatani Shop Banner"
        fill
        style={{ objectFit: 'contain' }}
        priority
      />
    </div>
  );
}
