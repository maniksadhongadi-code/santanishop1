import Link from 'next/link';
import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
      <main className="container">
        <h1 style={{ marginBottom: '20px' }}>Privacy Policy</h1>

        <h2>Who we are</h2>
        <p>Our website address is: SanataniShop.store.</p>
        <p>Effective Date: [16/09/2025]</p>

        <h3>1. Introduction</h3>
        <p>
          Welcome to SanataniShop.store. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share your information when you visit or make a purchase from our website.
        </p>

        <h3>2. Information We Collect</h3>
        <p>
          <strong>Personal Information:</strong> When you make a purchase or attempt to make a purchase through SanataniShop.store , we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number.
        </p>
        <p>
          <strong>Device Information:</strong> We automatically collect information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
        </p>
        <p>
          <strong>Order Information:</strong> When you make a purchase, we collect information about the items you buy, your payment method, and your contact details.
        </p>

        <h3>3. How We Use Your Information</h3>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Process your orders and manage your account.</li>
          <li>Communicate with you.</li>
          <li>Screen our orders for potential risk or fraud.</li>
          <li>Provide you with information or advertising relating to our products or services.</li>
        </ul>

        <h3>4. Sharing Your Information</h3>
        <p>
          We share your Personal Information with third parties to help us use your Personal Information as described above. For example, we use Shopify to power our online store. We also use Google Analytics to help us understand how our customers use the site.
        </p>

        <h3>5. Your Rights</h3>
        <p>
          If you are a resident of the European Economic Area (EEA), you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.
        </p>

        <h3>6. Data Retention</h3>
        <p>
          When you place an order through SanataniShop.store , we will maintain your Order Information for our records unless and until you ask us to delete this information.
        </p>

        <h3>7. Changes</h3>
        <p>
          We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.
        </p>

        <h3>8. Contact Us</h3>
        <p>
          For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by email at [sanatanishop2@gmail.com] or by mail using the details provided below:
        </p>
        <p>
          sanatanishop.store
          <br />
          <Link href="/contact" style={{ color: 'var(--accent)' }}>Contact Us</Link>
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
