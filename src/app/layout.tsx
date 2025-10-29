'use client';

import type { Metadata } from "next";
import "./globals.css";
import React, from 'react';
import { Loader2, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

function MobileWarningPopup({ onClose }: { onClose: () => void }) {
  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: '#333',
      color: 'white',
      padding: '15px 20px',
      borderRadius: '8px',
      zIndex: 1000,
      maxWidth: '90%',
      textAlign: 'center',
      boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
      display: 'flex',
      alignItems: 'center',
      gap: '15px'
    }}>
      <p style={{ margin: 0, fontSize: '14px' }}>
        This website is specially made for desktop view only, the mobile view of the website is cluttered please change it to desktop view.
      </p>
      <button onClick={onClose} style={{
        background: 'none',
        border: 'none',
        color: 'white',
        cursor: 'pointer',
        padding: 0
      }}>
        <X size={20} />
      </button>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = React.useState(true);
  const [showMobileWarning, setShowMobileWarning] = React.useState(false);
  const isMobile = useIsMobile();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const warningSeen = sessionStorage.getItem('mobileWarningSeen');
    if (isMobile && !warningSeen) {
      setShowMobileWarning(true);

      const warningTimer = setTimeout(() => {
        setShowMobileWarning(false);
        sessionStorage.setItem('mobileWarningSeen', 'true');
      }, 3000);

      return () => clearTimeout(warningTimer);
    }
  }, [isMobile]);

  const handleCloseWarning = () => {
    setShowMobileWarning(false);
    sessionStorage.setItem('mobileWarningSeen', 'true');
  };

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
          <>
            {children}
            {showMobileWarning && <MobileWarningPopup onClose={handleCloseWarning} />}
          </>
        )}
      </body>
    </html>
  );
}
