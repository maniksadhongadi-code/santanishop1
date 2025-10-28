'use client';

import { Wrench } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center">
        <Wrench className="mx-auto h-16 w-16 text-yellow-400" />
        <h1 className="mt-6 text-4xl font-bold tracking-tight">
          Under Maintenance
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Our website is currently undergoing scheduled maintenance.
          <br />
          We should be back shortly. Thank you for your patience.
        </p>
      </div>
    </main>
  );
}
