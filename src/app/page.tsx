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
              <div style={{ fontWeight: 800 }}>Sanatani Software</div>
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
            <h1>Innovative Software for Modern Businesses</h1>
            <p>
              We build custom software, web applications, and mobile apps that
              solve complex problems and drive business growth. Let us turn
              your vision into a powerful digital solution.
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
                <h4>Web Development</h4>
                <div className="small">
                  Scalable and secure web applications
                </div>
              </div>
              <div className="service">
                <h4>Mobile Apps</h4>
                <div className="small">
                  Native and cross-platform iOS & Android apps
                </div>
              </div>
              <div className="service">
                <h4>Cloud Solutions</h4>
                <div className="small">
                  Infrastructure, DevOps, and cloud migrations
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
              alt="Sanatani Software Development"
              fill
              style={{ objectFit: 'cover', borderRadius: '16px' }}
              data-ai-hint="software development"
            />
          </div>
        </div>
      </header>

      <main className="container">
        <section id="services">
          <h2>What we do</h2>
          <p className="small">
            End-to-end software development services for businesses of all
            sizes.
          </p>
          <div className="grid-3" style={{ marginTop: '12px' }}>
            <div className="card">
              <h3>Custom Software Development</h3>
              <p className="small">
                We design and build bespoke software solutions tailored to your
                specific business needs, from enterprise systems to specialized
                tools.
              </p>
            </div>
            <div className="card">
              <h3>Web Application Development</h3>
              <p className="small">
                Building powerful, scalable, and secure web applications using
                modern frameworks like React, Next.js, and Node.js.
              </p>
            </div>
            <div className="card">
              <h3>Mobile App Development</h3>
              <p className="small">
                Creating beautiful and performant native and cross-platform
                mobile applications for both iOS and Android platforms.
              </p>
            </div>
            <div className="card">
              <h3>Cloud & DevOps</h3>
              <p className="small">
                Cloud infrastructure setup, CI/CD pipelines, and automated
                deployments to ensure your applications are scalable and
                reliable.
              </p>
            </div>
            <div className="card">
              <h3>UI/UX Design</h3>
              <p className="small">
                Designing intuitive and engaging user interfaces that provide a
                seamless user experience and enhance your brand.
              </p>
            </div>
            <div className="card">
              <h3>Software Maintenance & Support</h3>
              <p className="small">
                Providing ongoing maintenance, updates, and support to ensure
                your software runs smoothly and remains secure.
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
                &quot;Sanatani Software helped us migrate our legacy systems to the
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
            <h3>Why Sanatani Software</h3>
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
            <div style={{ fontWeight: 800 }}>Sanatani Software</div>
            <div className="small">
              Creative Digital Services
            </div>
          </div>
          <div className="small">
            © Sanatani Software — All rights reserved
          </div>
        </div>
      </footer>
    </>
  );
}
