'use client';

import Image from 'next/image';
import React from 'react';
import {
  Facebook,
  Instagram,
} from 'lucide-react';

// A simple component for the WhatsApp icon as it's not in lucide-react
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header>
        <div className="container top">
          <div className="brand">
            <Image
              src="https://iili.io/KPdWQgs.md.jpg"
              alt="Sanatani Shop Logo"
              width={56}
              height={56}
              style={{ borderRadius: '12px' }}
            />
            <div>
              <div style={{ fontWeight: 800 }}>SanataniShop</div>
              <div style={{ fontSize: '12px', opacity: 0.95 }}>
                As Marketing Agency
              </div>
            </div>
          </div>

          <nav>
            <ul>
              <li>
                <a onClick={() => scrollToSection('services')}>Services</a>
              </li>
              <li>
                <a onClick={() => scrollToSection('portfolio')}>Portfolio</a>
              </li>
              <li>
                <a onClick={() => scrollToSection('testimonials')}>
                  Testimonials
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection('contact')}>Contact</a>
              </li>
            </ul>
          </nav>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <a
              className="btn btn-outline"
              onClick={() => scrollToSection('contact')}
            >
              Get a Quote
            </a>
          </div>
        </div>

        <div className="container hero">
          <div className="hero-card">
            <h1>
              <strong>WE'RE OFFERING CREATIVE DIGITAL SERVICES</strong>
            </h1>
            <p>
              We’re offering <strong>creative digital services</strong> designed to elevate your brand and transform your online presence. Our team blends <strong>innovation, design, and strategy</strong> to craft powerful digital experiences that connect with your audience. From <strong>branding and web development</strong> to <strong>social media marketing, SEO, and content creation</strong>, we deliver end-to-end solutions tailored to your goals. With a focus on <strong>creativity, technology, and performance</strong>, we help businesses grow, engage, and stand out in the digital world—turning ideas into impactful, measurable results.
            </p>
            <div className="cta">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection('contact')}
              >
                Request a Quote
              </button>
              <a
                className="btn btn-outline"
                onClick={() => scrollToSection('portfolio')}
              >
                See Our Work
              </a>
            </div>

            <div className="services">
              <div className="service">
                <h4>Innovative Solutions</h4>
                <div className="small">
                  We deliver innovative solutions that blend creativity and technology, helping businesses grow, adapt, and thrive in a fast-evolving digital world.
                </div>
              </div>
              <div className="service">
                <h4>Graphic Design</h4>
                <div className="small">
                  Our graphic design services bring your brand to life with captivating visuals, unique concepts, and impactful storytelling that inspire engagement.
                </div>
              </div>
              <div className="service">
                <h4>SEO Optimization</h4>
                <div className="small">
                  We provide expert SEO optimization to boost visibility, drive organic traffic, and position your business at the top of search results.
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              borderRadius: '16px',
              minHeight: '320px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Image
              src="https://iili.io/KP2WptV.md.jpg"
              alt="Digital Marketing Logo"
              fill
              style={{ objectFit: 'cover', borderRadius: '16px' }}
              data-ai-hint="digital marketing logo"
            />
          </div>
        </div>
      </header>

      <main className="container">
        <section id="services">
          <h2>What We Do</h2>
          <p className="small">
            Comprehensive digital marketing solutions designed to build your brand, increase visibility, and drive measurable growth for businesses of all sizes.
          </p>
          <div className="grid-3" style={{ marginTop: '12px' }}>
            <div className="card">
              <h3>Brand Strategy & Creative Design</h3>
              <p className="small">
                We craft unique brand identities, logos, and visual content that capture attention and communicate your message effectively across all digital platforms.
              </p>
            </div>
            <div className="card">
              <h3>Website Design & Development</h3>
              <p className="small">
                Designing and developing responsive, SEO-friendly websites that showcase your brand, attract visitors, and convert them into loyal customers.
              </p>
            </div>
            <div className="card">
              <h3>Search Engine Optimization (SEO)</h3>
              <p className="small">
                Optimizing your online presence through data-driven SEO strategies to improve visibility, increase traffic, and boost your search rankings.
              </p>
            </div>
            <div className="card">
              <h3>Social Media Marketing</h3>
              <p className="small">
                Building your brand’s community across social platforms with engaging content, campaigns, and targeted ads that drive real engagement and growth.
              </p>
            </div>
            <div className="card">
              <h3>Content Creation & Marketing</h3>
              <p className="small">
                Creating compelling content — from blogs to videos — that informs, inspires, and converts audiences while enhancing your digital presence.
              </p>
            </div>
            <div className="card">
              <h3>Pay-Per-Click (PPC) Advertising</h3>
              <p className="small">
                Managing high-performing ad campaigns on Google, Meta, and other platforms to maximize ROI and reach the right audience effectively.
              </p>
            </div>
            <div className="card">
              <h3>Email & Automation Marketing</h3>
              <p className="small">
                Delivering personalized email campaigns and automation workflows to nurture leads, retain customers, and increase conversions.
              </p>
            </div>
            <div className="card">
              <h3>Analytics & Performance Optimization</h3>
              <p className="small">
                Tracking and analyzing campaign performance to refine strategies, boost efficiency, and ensure consistent growth and measurable success.
              </p>
            </div>
          </div>
        </section>

        <section id="portfolio" style={{ marginTop: '22px' }}>
          <h2>Selected work</h2>
          <div className="grid-3 portfolio" style={{ marginTop: '12px' }}>
            <div className="card">
              <Image
                src="https://iili.io/KP2exV4.md.jpg"
                alt="Project 1"
                width={800}
                height={600}
                data-ai-hint="rebranding strategy"
              />
              <h4 style={{ marginTop: '10px' }}>
                Brand Transformation Campaign
              </h4>
              <div className="small">
                A complete digital rebranding strategy — including logo design, website revamp, and social media launch — that boosted client visibility by 150%.
              </div>
            </div>
            <div className="card">
              <Image
                src="https://iili.io/KP2gh5N.md.jpg"
                alt="Project 2"
                width={800}
                height={600}
                data-ai-hint="ecommerce marketing"
              />
              <h4 style={{ marginTop: '10px' }}>
                E-Commerce Growth Marketing
              </h4>
              <div className="small">
                Executed targeted SEO, Google Ads, and influencer collaborations for an online store, resulting in a 3x increase in monthly sales.
              </div>
            </div>
            <div className="card">
              <Image
                src="https://iili.io/KP26brG.md.jpg"
                alt="Project 3"
                width={800}
                height={600}
                data-ai-hint="social media dashboard"
              />
              <h4 style={{ marginTop: '10px' }}>
                Social Media Analytics Dashboard
              </h4>
              <div className="small">
                Developed a real-time dashboard to monitor engagement, ad performance, and audience behavior across multiple social platforms for data-driven marketing decisions.
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials">
          <h2 style={{ marginTop: '22px' }}>What Clients Say</h2>
          <div className="testimonials">
            <div className="testimonial">
              <strong>BrightWave Fashions</strong>
              <p className="small">
                &quot;Sanatani Shop completely transformed our online presence! Their branding and social media strategies helped us attract thousands of new followers and boost sales.&quot;
              </p>
            </div>
            <div className="testimonial">
              <strong>TechVibe Solutions</strong>
              <p className="small">
                &quot;The SEO and Google Ads campaigns by Sanatani Shop doubled our website traffic within months. Their team is creative, data-driven, and truly committed to results.&quot;
              </p>
            </div>
            <div className="testimonial">
              <strong>NatureNest Organics</strong>
              <p className="small">
                &quot;From logo design to content marketing, Sanatani Shop gave our brand a fresh, modern identity that connects beautifully with our customers.&quot;
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-grid">
          <div>
            <h2>Information</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
              <a href="#" className="small">Contact Us</a>
              <a href="#" className="small">Privacy Policy</a>
              <a href="#" className="small">Terms and Conditions</a>
              <a href="#" className="small">Refund Policy</a>
              <a href="#" className="small">Disclaimer</a>
            </div>
            <div style={{ marginTop: '28px' }}>
              <h2>Quick Links</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
                <a href="#" className="small">Blog</a>
                <a href="#" className="small">Subscription</a>
                <a href="#" className="small">Announcements</a>
                <a href="#" className="small">FAQ's</a>
                <a href="#" className="small">Shipping and Delivery</a>
              </div>
            </div>
          </div>

          <div>
            <h2>Our Story</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
              <a href="#" className="small">About Us</a>
              <a href="#" className="small">Our Facility</a>
              <a href="#" className="small">Commitment to Quality</a>
              <a href="#" className="small">Contract Manufacturing</a>
              <a href="#" className="small">Our Awards</a>
            </div>
            <div style={{ marginTop: '28px' }}>
              <h2>Categories</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
                <a href="#" className="small">Digital Marketing</a>
                <a href="#" className="small">SEO</a>
                <a href="#" className="small">Digital Products</a>
                <a href="#" className="small">Graphics</a>
                <a href="#" className="small">Web Designing</a>
              </div>
            </div>
          </div>

          <aside className="card" style={{ height: 'fit-content' }}>
            <h3>Why Sanatani Shop</h3>
            <ol
              className="small"
              style={{ paddingLeft: '20px', listStyleType: 'upper-roman' }}
            >
              <li>Creative & Strategic Approach — We combine creativity with data-driven strategies to deliver impactful marketing results.</li>
              <li>Dedicated Marketing Experts — A passionate team focused on helping your brand grow across every digital platform.</li>
              <li>Customized Campaigns — Every strategy is tailored to your business goals, audience, and budget for maximum ROI.</li>
              <li>Transparent Communication — We keep you informed at every step with clear reports and performance updates.</li>
              <li>Result-Oriented Solutions — Our goal is simple — to boost your visibility, engagement, and conversions.</li>
            </ol>
            <div style={{ marginTop: '12px' }}>
              <strong>Free Marketing Consultation</strong> — Get a complimentary 30-minute session after submitting your inquiry form.
            </div>
          </aside>
        </section>
      </main>

      <footer className="footer">
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div style={{ fontWeight: 800 }}>Sanatani Shop</div>
            <div className="small">
              As Marketing Agency
            </div>
          </div>
          <div className="socials">
             <div style={{ fontWeight: 700, marginBottom: '8px' }}>Follow us</div>
             <div className="social-icons">
                <a href="https://www.facebook.com/share/17KomzTebe/"><Facebook size={20} /></a>
                <a href="https://acesse.one/wwwInsta"><Instagram size={20} /></a>
                <a href="https://wa.me/9845634775"><WhatsAppIcon /></a>
             </div>
          </div>
          <div>
            <div style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>CONTACT NUMBER:- 9845634775</div>
            <div className="small">
              © Sanatani Shop — All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
