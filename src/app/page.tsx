'use client';

import { Wrench } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 text-green-500"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 text-pink-500"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);


export default function Home() {
  return (
    <main className="maintenance-page flex min-h-screen flex-col items-center justify-center p-8 font-sans">
      <div className="text-center text-gray-800">
        <h1 className="text-5xl font-bold tracking-tight">
          WE'RE MAKING
          <br />
          IMPROVEMENTS!
        </h1>

        <div className="my-12 flex justify-center">
            <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-2 border-dashed border-yellow-400">
                <Wrench className="h-16 w-16 text-yellow-500" />
            </div>
        </div>
        
        <p className="mt-4 text-lg text-gray-600">
          Our website is getting a refresh and
          <br />
          will be back shortly
        </p>

        <button className="mt-8 rounded-md border border-yellow-500 bg-white px-8 py-3 font-semibold text-gray-800 shadow-md transition-colors hover:bg-gray-100">
            STAY UPDATED
        </button>
      </div>

      <div className="absolute bottom-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
        <div className="flex items-center gap-3">
          <WhatsAppIcon />
          <span className="text-gray-700">WhatsApp: 9845634775</span>
        </div>
        <div className="flex items-center gap-3">
          <InstagramIcon />
          <span className="text-gray-700">Instagram: official_sanatanishop</span>
        </div>
      </div>
    </main>
  );
}