'use client';

import type { Metadata } from "next";
import "./globals.css";
import React from 'react';
import { Loader2, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

function MobileWarningPopup({ onClose }: { onClose: () => void }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'white',
        color: 'black',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '90%',
        textAlign: 'center',
        position: 'relative'
      }}>
        <p style={{ margin: 0, fontSize: '16px' }}>
          This website is specially made for desktop view only, the mobile view of the website is cluttered please change it to desktop view.
        </p>
        <button onClick={onClose} style={{
          position: 'absolute',
          top: '5px',
          right: '5px',
          background: 'none',
          border: 'none',
          color: 'black',
          cursor: 'pointer',
          padding: '5px'
        }}>
          <X size={24} />
        </button>
      </div>
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
    if (typeof window !== 'undefined') {
      const warningSeen = sessionStorage.getItem('mobileWarningSeen');
      if (isMobile && !warningSeen) {
        setShowMobileWarning(true);

        const warningTimer = setTimeout(() => {
          setShowMobileWarning(false);
          sessionStorage.setItem('mobileWarningSeen', 'true');
        }, 3000);

        return () => clearTimeout(warningTimer);
      }
    }
  }, [isMobile]);

  const handleCloseWarning = () => {
    setShowMobileWarning(false);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('mobileWarningSeen', 'true');
    }
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
            {showMobileWarning && <MobileWarningPopup onClose={handleCloseWarning} />}
            {children}
          </>
        )}
      </body>
    </html>
  );
}
