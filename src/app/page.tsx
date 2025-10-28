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
                Digital marketing for spiritual & handcrafted brands
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
            <a className="btn btn-outline" onClick={() => scrollToSection('contact')}>
              Get Proposal
            </a>
          </div>
        </div>

        <div className="container hero">
          <div className="hero-card">
            <h1>Digital Marketing that honours tradition</h1>
            <p>
              We grow spiritual, artisanal and handcrafted brands with targeted
              ads, local SEO, content that converts and beautiful design—so
              your products reach the right hearts.
            </p>
            <div className="cta">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection('contact')}
              >
                Request a Proposal
              </button>
              <a className="btn btn-outline" onClick={() => scrollToSection('portfolio')}>
                See Our Work
              </a>
            </div>

            <div className="services">
              <div className="service">
                <h4>Paid Ads</h4>
                <div className="small">
                  Google & Social ads with audience research
                </div>
              </div>
              <div className="service">
                <h4>SEO & Local</h4>
                <div className="small">
                  Rank for devotional & product keywords
                </div>
              </div>
              <div className="service">
                <h4>Content & Creatives</h4>
                <div className="small">
                  Product pages, reels & email funnels
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              borderRadius: '16px',
              minHeight: '320px',
              position: 'relative',
            }}
          >
            <Image
              src="https://picsum.photos/seed/1/420/380"
              alt="Sanatani Marketing"
              fill
              style={{ objectFit: 'cover', borderRadius: '16px' }}
              data-ai-hint="marketing tradition"
            />
          </div>
        </div>
      </header>

      <main className="container">
        <section id="services">
          <h2>What we do</h2>
          <p className="small">
            End-to-end digital growth for religious & cultural product brands.
          </p>
          <div className="grid-3" style={{ marginTop: '12px' }}>
            <div className="card">
              <h3>Brand Strategy</h3>
              <p className="small">
                Position your brand with a story that resonates — packaging,
                messaging and go-to-market plan tailored for spiritual
                customers.
              </p>
            </div>
            <div className="card">
              <h3>Performance Marketing</h3>
              <p className="small">
                ROAS-focused ad campaigns on Meta, Google & WhatsApp. A/B
                testing, creative optimization and conversion tracking.
              </p>
            </div>
            <div className="card">
              <h3>Shop & CRO</h3>
              <p className="small">
                Product page optimization, fast checkout flows and trust
                signals (reviews, badges) to increase conversions.
              </p>
            </div>
            <div className="card">
              <h3>Instagram Marketing</h3>
              <p className="small">
                Engage your audience with beautiful reels, stories, and carousel posts. We run targeted ad campaigns to grow your followers and drive sales from your spiritual and artisanal products.
              </p>
            </div>
            <div className="card">
              <h3>Facebook Marketing</h3>
              <p className="small">
                Build a strong community around your brand with Facebook groups and pages. We create and share content that resonates with your audience, and use Facebook Ads to reach new customers.
              </p>
            </div>
            <div className="card">
              <h3>WordPress & E-commerce</h3>
              <p className="small">
                We build and optimize beautiful WordPress and WooCommerce stores. From custom themes to payment gateway integration, we create seamless shopping experiences for your customers.
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
                alt="Campaign 1"
                width={800}
                height={600}
                data-ai-hint="campaign festive"
              />
              <h4 style={{ marginTop: '10px' }}>Festive Campaign — 4x ROAS</h4>
              <div className="small">Social-first reels & catalog ads.</div>
            </div>
            <div className="card">
              <Image
                src="https://picsum.photos/seed/3/800/600"
                alt="Campaign 2"
                width={800}
                height={600}
                data-ai-hint="local SEO"
              />
              <h4 style={{ marginTop: '10px' }}>Local SEO for Temple Store</h4>
              <div className="small">Driving footfall & phone orders.</div>
            </div>
            <div className="card">
              <Image
                src="https://picsum.photos/seed/4/800/600"
                alt="Campaign 3"
                width={800}
                height={600}
                data-ai-hint="whatsapp marketing"
              />
              <h4 style={{ marginTop: '10px' }}>WhatsApp Funnel</h4>
              <div className="small">
                Automated cart recovery & product bundles.
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials">
          <h2 style={{ marginTop: '22px' }}>What clients say</h2>
          <div className="testimonials">
            <div className="testimonial">
              <strong>Rama Stores</strong>
              <p className="small">
                &quot;Their Diwali campaign doubled our sales and improved our
                ROAS. Creative that actually speaks to our customers.&quot;
              </p>
            </div>
            <div className="testimonial">
              <strong>Shakti Handicrafts</strong>
              <p className="small">
                &quot;Local SEO work brought steady orders — shop visits
                increased by 38% in 3 months.&quot;
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div>
            <h2>Request a proposal</h2>
            <p className="small">
              Tell us about your store — we’ll suggest a growth plan and a
              30-day campaign blueprint.
            </p>
            <form id="leadForm" onSubmit={submitLead}>
              <input id="name" placeholder="Your name" required />
              <input id="email" type="email" placeholder="Email" required />
              <input id="phone" placeholder="Phone (optional)" />
              <select id="budget">
                <option value="">Estimated monthly ad budget</option>
                <option>Under ₹10k</option>
                <option>₹10k–50k</option>
                <option>₹50k+</option>
              </select>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your store or campaign goals"
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
            <h3>Why Sanatani Shop Growth</h3>
            <ul className="small">
              <li>Specialised audience targeting for devotional shoppers</li>
              <li>Creative direction rooted in culture and respect</li>
              <li>Transparent reporting and clear KPIs</li>
            </ul>
            <div style={{ marginTop: '12px' }}>
              <strong>Free 30-min consult</strong> — book after you submit the
              form.
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
              Digital marketing for spiritual & handcrafted brands
            </div>
          </div>
          <div className="small">© Sanatani Shop — All rights reserved</div>
        </div>
      </footer>
    </>
  );
}
