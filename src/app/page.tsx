'use client';

import Image from 'next/image';
import React from 'react';

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const submitLead = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const leadMsg = document.getElementById('leadMsg');
    const form = document.getElementById('leadForm') as HTMLFormElement;
    if (leadMsg) {
      leadMsg.style.display = 'block';
    }
    form?.reset();
  };

  return (
    <>
      <header>
        <div className="container top">
          <div className="brand">
            <div className="logo">SS</div>
            <div>
              <div style={{ fontWeight: 800 }}>Sanatani Shop</div>
              <div style={{ fontSize: '12px', opacity: 0.95 }}>
                Creative Digital Services
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
              src="https://picsum.photos/seed/1/420/380"
              alt="Sanatani Shop Digital Marketing"
              fill
              style={{ objectFit: 'cover', borderRadius: '16px' }}
              data-ai-hint="digital marketing"
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
                src="https://picsum.photos/seed/2/800/600"
                alt="Project 1"
                width={800}
                height={600}
                data-ai-hint="saas dashboard"
              />
              <h4 style={{ marginTop: '10px' }}>
                Enterprise SaaS Platform
              </h4>
              <div className="small">
                Full-stack web app with multi-tenancy.
              </div>
            </div>
            <div className="card">
              <Image
                src="https://picsum.photos/seed/3/800/600"
                alt="Project 2"
                width={800}
                height={600}
                data-ai-hint="mobile app"
              />
              <h4 style={{ marginTop: '10px' }}>
                E-commerce Mobile App
              </h4>
              <div className="small">
                Cross-platform app for iOS and Android.
              </div>
            </div>
            <div className="card">
              <Image
                src="https://picsum.photos/seed/4/800/600"
                alt="Project 3"
                width={800}
                height={600}
                data-ai-hint="data visualization"
              />
              <h4 style={{ marginTop: '10px' }}>
                Data Visualization Dashboard
              </h4>
              <div className="small">
                Real-time analytics and reporting interface.
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials">
          <h2 style={{ marginTop: '22px' }}>What clients say</h2>
          <div className="testimonials">
            <div className="testimonial">
              <strong>Innovate Inc.</strong>
              <p className="small">
                &quot;The custom CRM they built has revolutionized our sales
                process. The team was professional, responsive, and delivered
                on time.&quot;
              </p>
            </div>
            <div className="testimonial">
              <strong>Data Corp.</strong>
              <p className="small">
                &quot;Sanatani Shop helped us migrate our legacy systems to the
                cloud, significantly improving performance and reducing
                costs.&quot;
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div>
            <h2>Request a quote</h2>
            <p className="small">
              Tell us about your project — we’ll provide a detailed proposal
              and a project blueprint.
            </p>
            <form id="leadForm" onSubmit={submitLead}>
              <input id="name" placeholder="Your name" required />
              <input id="email" type="email" placeholder="Email" required />
              <input id="phone" placeholder="Phone (optional)" />
              <select id="budget">
                <option value="">Estimated project budget</option>
                <option>Under $10k</option>
                <option>$10k–$50k</option>
                <option>$50k+</option>
              </select>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your project goals and requirements"
              ></textarea>
              <button className="btn btn-primary" type="submit">
                Send Request
              </button>
            </form>
            <div
              id="leadMsg"
              style={{
                marginTop: '10px',
                color: 'green',
                display: 'none',
              }}
            >
              Thanks — we will email a proposal within 24 hours.
            </div>
          </div>

          <aside className="card" style={{ height: 'fit-content' }}>
            <h3>Why Sanatani Shop</h3>
            <ul className="small">
              <li>Agile development process for faster delivery</li>
              <li>Dedicated project management and transparent communication</li>
              <li>Focus on clean code, scalability, and security</li>
            </ul>
            <div style={{ marginTop: '12px' }}>
              <strong>Free 30-min consultation</strong> — book after you submit
              the form.
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
              Creative Digital Services
            </div>
          </div>
          <div className="small">
            © Sanatani Shop — All rights reserved
          </div>
        </div>
      </footer>
    </>
  );
}
