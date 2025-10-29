import Link from 'next/link';
import React from 'react';

export default function Disclaimer() {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
      <main className="container">
        <h1 style={{ marginBottom: '20px' }}>Disclaimer</h1>

        <p>Effective Date: [16/09/2025]</p>

        <h3>1. General Information</h3>
        <p>
          The information provided by SanataniShop.store (“we,” “us” or “our”) on SanataniShop.store (the “Site”) is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
        </p>

        <h3>2. External Links Disclaimer</h3>
        <p>
          The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the Site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.
        </p>

        <h3>3. Professional Disclaimer</h3>
        <p>
          The Site cannot and does not contain legal, medical, fitness, health, or other professional advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional advice. The use or reliance of any information contained on this site is solely at your own risk.
        </p>

        <h3>4. Affiliates Disclaimer</h3>
        <p>
          The Site may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links.
        </p>

        <h3>5. Testimonials Disclaimer</h3>
        <p>
          The Site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume, that all users will have the same experiences. Your individual results may vary.
        </p>

        <h3>6. Errors and Omissions Disclaimer</h3>
        <p>
          While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, SanataniShop.store is not responsible for any errors or omissions or for the results obtained from the use of this information. All information in this site is provided “as is,” with no guarantee of completeness, accuracy, timeliness, or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability, and fitness for a particular purpose.
        </p>

        <h3>7. Contact Us</h3>
        <p>
          If you have any questions about this Disclaimer, please <Link href="/contact" style={{ color: 'var(--accent)' }}>contact us</Link>.
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
