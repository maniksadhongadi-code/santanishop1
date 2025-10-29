
import Link from 'next/link';
import React from 'react';

const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="white"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );

export default function ContactPage() {
  return (
    <div style={{ padding: '20px 40px', fontFamily: 'sans-serif' }}>
      <div style={{ marginBottom: '40px', fontSize: '14px', color: '#555' }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'var(--accent)' }}>Home</Link>
        {' > '}
        <span>Contact Us</span>
      </div>
      <main style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', color: '#0000FF', fontSize: '3rem', marginBottom: '20px' }}>Contact Us</h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Send a Message</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Your name</label>
            <input type="text" id="name" name="name" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div>
            <label htmlFor="mobile" style={{ display: 'block', marginBottom: '5px' }}>Mobile Number</label>
            <input type="tel" id="mobile" name="mobile" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Your email</label>
            <input type="email" id="email" name="email" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div>
            <label htmlFor="subject" style={{ display: 'block', marginBottom: '5px' }}>Subject</label>
            <input type="text" id="subject" name="subject" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Your message (optional)</label>
            <textarea id="message" name="message" rows={5} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}></textarea>
          </div>
          <button type="submit" className="btn btn-primary" style={{alignSelf: 'flex-start'}}>Send Message</button>
        </form>
        <div style={{ marginTop: '30px' }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'var(--accent)', fontWeight: 'bold' }}>
            &larr; Back to Home
          </Link>
        </div>
      </main>
      <a 
        href="https://wa.me/9845634775" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#25D366',
            color: 'white',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            zIndex: 1000
        }}
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}
