'use client';
import { useState, useRef, useEffect } from 'react';

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
        <div
          className={`toggle-btn ${isNavActive ? 'active' : ''}`}
          onClick={handleToggleNav}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h1 className="shop-title">SANATANI SHOP</h1>
      </nav>

      <ul className={`nav-list ${isNavActive ? 'show' : ''}`}>
        {pages.map((page, index) => (
          <li key={page.name} className="link" onClick={() => handleLinkClick(index)}>
            {page.name}
          </li>
        ))}
      </ul>

      <header className={`page-container ${isNavActive ? 'active' : ''}`}>
        <span ref={overlayRef} className="overlay"></span>
        {pages.map((page, index) => (
          <section
            key={page.name}
            className={`page ${page.className} ${pageIndex === index ? 'active' : ''}`}
          >
            {page.name === 'Notes' ? (
              <div className="content">
                <h1 className="title">Digital Marketing</h1>
                <p>
                  Digital marketing encompasses all marketing efforts that use an electronic device or the internet. Businesses leverage digital channels such as search engines, social media, email, and their websites to connect with current and prospective customers.
                </p>
              </div>
            ) : (
              <p className="title">{page.name === 'About' ? 'Frontend Developer' : page.name}</p>
            )}
          </section>
        ))}
      </header>
    </>
  );
}
