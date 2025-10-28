'use client';
import { useState, useRef } from 'react';
import {
  User,
  GitCompare,
  Heart,
  ShoppingCart,
  ChevronDown,
} from 'lucide-react';

export default function Home() {
  const [isNavActive, setIsNavActive] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const overlayRef = useRef<HTMLSpanElement>(null);

  const pages = [
    { name: 'Home', className: 'home' },
    { name: 'Notes', className: 'notes' },
    { name: 'About', className: 'about' },
  ];

  const handleToggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const handleLinkClick = (index: number) => {
    if (overlayRef.current) {
      // Close the navigation when a link is clicked
      setIsNavActive(false);
      overlayRef.current.classList.add('slide');

      setTimeout(() => {
        setPageIndex(index);
      }, 500);

      setTimeout(() => {
        if (overlayRef.current) {
          overlayRef.current.classList.remove('slide');
        }
      }, 1000);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="header-left">
          <button className="header-button">
            <User size={20} />
            <span>Login/Register</span>
          </button>
          <button className="header-button">
            <GitCompare size={20} />
          </button>
          <button className="header-button">
            <Heart size={20} />
          </button>
          <button className="header-button">
            <ShoppingCart size={20} />
          </button>
          <button className="header-button">
            <ChevronDown size={20} />
          </button>
        </div>

        <h1 className="shop-title">SANATANI SHOP</h1>

        <div
          className={`toggle-btn ${isNavActive ? 'active' : ''}`}
          onClick={handleToggleNav}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <ul className={`nav-list ${isNavActive ? 'show' : ''}`}>
        {pages.map((page, index) => (
          <li
            key={page.name}
            className="link"
            onClick={() => handleLinkClick(index)}
          >
            {page.name}
          </li>
        ))}
      </ul>

      <header className={`page-container ${isNavActive ? 'active' : ''}`}>
        <span ref={overlayRef} className="overlay"></span>
        {pages.map((page, index) => (
          <section
            key={page.name}
            className={`page ${page.className} ${
              pageIndex === index ? 'active' : ''
            }`}
          >
            {page.name === 'Home' ? (
              <div className="content">
                <h1 className="title">Welcome to SANATANI SHOP</h1>
                <p>
                  At SANATANI SHOP, we empower your business by leveraging the
                  full potential of digital marketing. We specialize in
                  creating dynamic, engaging online experiences that connect you
                  with your audience and drive growth. From SEO and social
                  media strategies to complete WordPress solutions, we are your
                  dedicated partner in navigating the digital landscape.
                </p>
              </div>
            ) : page.name === 'Notes' ? (
              <div className="content">
                <h1 className="title">Digital Marketing</h1>
                <p>
                  Digital marketing encompasses all marketing efforts that use
                  an electronic device or the internet. Businesses leverage
                  digital channels such as search engines, social media, email,
                  and their websites to connect with current and prospective
                  customers.
                </p>
              </div>
            ) : (
              <div className="content">
                <h1 className="title">Product Marketing Strategies</h1>
                <p>
                  We craft tailored product marketing strategies that resonate
                  with your target audience. Our approach integrates SEO,
                  content marketing, and social media to build brand
                  awareness, drive engagement, and boost conversions. We focus
                  on data-driven insights to optimize campaigns and deliver
                  measurable results.
                </p>
              </div>
            )}
          </section>
        ))}
      </header>
    </>
  );
}
