
import Link from 'next/link';
import React from 'react';

export default function TermsAndConditions() {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
      <main className="container">
        <h1 style={{ marginBottom: '20px' }}>Terms and Conditions</h1>

        <p>Effective Date: [16/09/2025]</p>

        <h3>1. Introduction</h3>
        <p>
          Welcome to SanataniShop.store. These terms and conditions outline the rules and regulations for the use of our website. By accessing this website, we assume you accept these terms and conditions. Do not continue to use SanataniShop.store if you do not agree to all of the terms and conditions stated on this page.
        </p>

        <h3>2. Intellectual Property Rights</h3>
        <p>
          Unless otherwise stated, SanataniShop.store and/or its licensors own the intellectual property rights for all material on SanataniShop.store. All intellectual property rights are reserved. You may access this from SanataniShop.store for your own personal use subjected to restrictions set in these terms and conditions.
        </p>

        <h3>3. Restrictions</h3>
        <p>You are specifically restricted from all of the following:</p>
        <ul>
          <li>Publishing any website material in any other media without prior consent.</li>
          <li>Selling, sublicensing, and/or otherwise commercializing any website material.</li>
          <li>Using this website in any way that is or may be damaging to this website.</li>
          <li>Using this website in any way that impacts user access to this website.</li>
          <li>Using this website contrary to applicable laws and regulations, or in any way that may cause harm to the website, or to any person or business entity.</li>
          <li>Engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to this website.</li>
          <li>Using this website to engage in any advertising or marketing.</li>
        </ul>

        <h3>4. Your Privacy</h3>
        <p>Please read our Privacy Policy.</p>

        <h3>5. Limitation of Liability</h3>
        <p>
          In no event shall SanataniShop.store, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract. SanataniShop.store, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.
        </p>

        <h3>6. Indemnification</h3>
        <p>
          You hereby indemnify to the fullest extent SanataniShop.store from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these Terms.
        </p>

        <h3>7. Severability</h3>
        <p>
          If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
        </p>

        <h3>8. Variation of Terms</h3>
        <p>
          SanataniShop.store is permitted to revise these Terms at any time as it sees fit, and by using this website you are expected to review these Terms on a regular basis.
        </p>

        <h3>9. Assignment</h3>
        <p>
          The SanataniShop.store is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.
        </p>

        <h3>10. Entire Agreement</h3>
        <p>
          These Terms constitute the entire agreement between SanataniShop.store and you in relation to your use of this website and supersede all prior agreements and understandings.
        </p>

        <h3>11. Governing Law & Jurisdiction</h3>
        <p>
          These Terms will be governed by and interpreted in accordance with the laws of your local jurisdiction, and you submit to the non-exclusive jurisdiction of the state and federal courts located there for the resolution of any disputes.
        </p>

        <h3>Contact Us</h3>
        <p>
          If you have any questions about these Terms, please contact us.
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
