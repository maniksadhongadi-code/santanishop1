import Link from 'next/link';
import React from 'react';

export default function AboutUs() {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
      <main className="container">
        <h1 style={{ marginBottom: '20px' }}>About Us</h1>
        <p>
          At SanataniShop.store, our mission is to create a seamless and enjoyable shopping experience for our customers. We are committed to offering a wide selection of products at competitive prices, ensuring that everyone can find something they love. We strive to be a trusted source for all your shopping needs, providing exceptional customer service and a user-friendly platform.
        </p>
        <div style={{ marginTop: '30px' }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'var(--accent)', fontWeight: 'bold' }}>
            &larr; Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
