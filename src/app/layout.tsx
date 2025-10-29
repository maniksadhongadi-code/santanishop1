'use client';

import type { Metadata } from "next";
import "./globals.css";
import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate loading for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body>
        {loading ? (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: 'var(--bg)',
          }}>
            <Loader2 className="animate-spin" size={48} color="var(--accent)" />
          </div>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
