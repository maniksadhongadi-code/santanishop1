'use client';
import { useState, useRef, useEffect } from 'react';

export default function Home() {
  const [isNavActive, setIsNavActive] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const overlayRef = useRef<HTMLSpanElement>(null);

  const pages = [
    { name: 'Home', className: 'home' },
    { name: 'Project', className: 'project' },
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
            <p className="title">{page.name === 'About' ? 'Frontend Developer' : page.name}</p>
          </section>
        ))}
      </header>
    </>
  );
}
