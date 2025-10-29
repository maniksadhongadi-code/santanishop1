import Link from 'next/link';
import React from 'react';

export default function Faq() {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
      <main className="container">
        <h1 style={{ marginBottom: '20px' }}>Frequently Asked Questions (FAQs)</h1>

        <h3>1. What is SanataniShop.store?</h3>
        <p>
          ZenxZone.com is your one-stop shop for a wide variety of high-quality products, ranging from home essentials to the latest gadgets, fashion accessories, and wellness products.
        </p>

        <h3>2. How can I place an order?</h3>
        <p>
          Placing an order is easy! Simply browse our products, add your desired items to the cart, and proceed to checkout. Follow the on-screen instructions to complete your purchase.
        </p>

        <h3>3. What payment methods do you accept?</h3>
        <p>
          We accept various payment methods, including credit/debit cards, PayPal, and other secure payment gateways. All transactions are processed securely to ensure your information is protected.
        </p>

        <h3>4. How can I track my order?</h3>
        <p>
          Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this number to track your order on our website or the carrier’s website.
        </p>

        <h3>5. What is your return policy?</h3>
        <p>
          We offer a hassle-free return policy. If you are not satisfied with your purchase, you can return the item within 10 days of receipt for a full refund or exchange. Please refer to our <Link href="/refund-policy" style={{ color: 'var(--accent)' }}>Return Policy</Link> page for more details.
        </p>

        <h3>6. Do you offer international shipping?</h3>
        <p>
          Yes, we offer international shipping to many countries. Shipping fees and delivery times may vary depending on the destination. Please check our Shipping Policy page for more information.
        </p>

        <h3>7. How can I contact customer support?</h3>
        <p>
          You can reach our customer support team via email at [ sanatanishop2@gmail.com ] or through our <Link href="/contact" style={{ color: 'var(--accent)' }}>Contact Us</Link> page. We are here to assist you with any questions or concerns you may have.
        </p>

        <h3>8. Are my personal details safe?</h3>
        <p>
          Absolutely. We use the latest security measures to ensure that your personal information is protected. Please refer to our <Link href="/privacy-policy" style={{ color: 'var(--accent)' }}>Privacy Policy</Link> for more details on how we handle your data.
        </p>

        <h3>9. Can I change or cancel my order?</h3>
        <p>
          If you need to change or cancel my order, please contact us as soon as possible. We will do our best to accommodate your request, but please note that once an order has been processed, we may not be able to make changes.
        </p>

        <h3>10. Do you offer discounts or promotions?</h3>
        <p>
          Yes, we regularly offer discounts and promotions. Be sure to subscribe to our newsletter and follow us on social media to stay updated on the latest deals and offers.
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
