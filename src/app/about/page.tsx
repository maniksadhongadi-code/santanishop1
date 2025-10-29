
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

        <section style={{ marginTop: '40px' }}>
          <h2>More Than 95% Satisfied Customers</h2>
          <ul style={{ paddingLeft: '20px' }}>
            <li><strong>Quality Selection:</strong> We carefully curate our collection to include only the best products from reputable brands and suppliers.</li>
            <li><strong>Affordable Prices:</strong> We believe that everyone should have access to quality products, which is why we offer our items at competitive prices.</li>
            <li><strong>Customer Satisfaction:</strong> Your satisfaction is our top priority. We are dedicated to providing excellent customer service and support.</li>
            <li><strong>Secure Shopping:</strong> We use the latest security measures to ensure that your personal information is protected.</li>
          </ul>
        </section>

        <section style={{ marginTop: '40px', textAlign: 'center' }}>
          <h2>We Reached So Far</h2>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>120+</div>
              <div>Online stores opened all over the world</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>15k</div>
              <div>Products sold till date through all platforms</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>3K</div>
              <div>Registered users on our all the platform</div>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '40px' }}>
          <h2>A Complete List of Services of the SanataniShop</h2>
          <div style={{ marginTop: '20px' }}>
            <h4>Wide network of outlets</h4>
            <p>Implemented open access to goods, interactive zones of virtual reality, zones of smart devices, electric transport - this makes it possible to study the goods in detail.</p>
          </div>
          <div style={{ marginTop: '20px' }}>
            <h4>Convenient site and delivery</h4>
            <p>Intuitive search, informative photos, detailed descriptions, characteristics - the most pleasant online shopping!</p>
          </div>
          <div style={{ marginTop: '20px' }}>
            <h4>Authorized service centers</h4>
            <p>Trained craftsmen with relevant diplomas, original parts, repair guarantee - we know how to put the device in order if something went wrong.</p>
          </div>
        </section>

        <section style={{ marginTop: '40px', textAlign: 'center', background: '#f9f9f9', padding: '30px', borderRadius: '8px' }}>
          <h2>Service is Our Top Priority</h2>
          <p>We are available 24/7/365 for you!</p>
          <p>If you have any questions, feedback, or just want to say hello, feel free to reach out to us. We’d love to hear from you!</p>
        </section>

        <div style={{ marginTop: '30px' }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'var(--accent)', fontWeight: 'bold' }}>
            &larr; Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
