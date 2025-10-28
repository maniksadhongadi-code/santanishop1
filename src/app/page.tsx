'use client';
import { useState, useRef, useEffect } from 'react';
import {
  User,
  GitCompare,
  Heart,
  ShoppingCart,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Youtube,
  Globe,
  Target
} from 'lucide-react';

const categories = [
  'For You',
  'Digital Products',
  'Tools and More',
  'Software',
  'Books and Audio',
  'Best Digital Products and Service Provider',
];

const marketingServices = [
  {
    icon: <Instagram size={40} className="service-card-icon" />,
    title: 'Instagram Growth Funnels',
    description: 'Build automated sales funnels to convert followers into customers with targeted ad campaigns and content strategies.',
  },
  {
    icon: <Youtube size={40} className="service-card-icon" />,
    title: 'YouTube Audience Builder',
    description: 'Grow your subscriber base and engagement through optimized content, keyword strategy, and promotional tactics.',
  },
  {
    icon: <Globe size={40} className="service-card-icon" />,
    title: 'WordPress SEO & Content',
    description: 'Drive organic traffic to your WordPress site with comprehensive SEO, content marketing, and backlink strategies.',
  },
  {
    icon: <Target size={40} className="service-card-icon" />,
    title: 'Conversion Funnel Marketing',
    description: 'Design and optimize full-funnel marketing campaigns that guide users from awareness to conversion and loyalty.',
  }
];

export default function Home() {
  const [isNavActive, setIsNavActive] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [isSecondSearchExpanded, setIsSecondSearchExpanded] = useState(false);
  const [showCategoryCube, setShowCategoryCube] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const overlayRef = useRef<HTMLSpanElement>(null);
  const pageContainerRef = useRef<HTMLElement>(null);

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
  
  const handleNextCategory = () => {
    setSelectedCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const handlePrevCategory = () => {
    setSelectedCategoryIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
  };
  
  useEffect(() => {
    const pageContainer = pageContainerRef.current;
    if (pageContainer) {
      if (showCategoryCube || showShop) {
        pageContainer.classList.add('blur');
      } else {
        pageContainer.classList.remove('blur');
      }
    }
  }, [showCategoryCube, showShop]);


  return (
    <>
      <nav className="navbar">
        <div className="header-left">
          <div className="header-buttons-row">
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
          </div>
          
          <div className={`search-box ${isSecondSearchExpanded ? 'active' : ''}`} >
            <input type="text" placeholder="Search..." />
            <div className="search-icon" onClick={() => setIsSecondSearchExpanded(!isSecondSearchExpanded)}>
                <Search size={20} />
            </div>
            <div className="cancel-icon" onClick={() => setIsSecondSearchExpanded(false)}>
                <X size={20} />
            </div>
            <div className="search-data"></div>
           </div>
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

      <header ref={pageContainerRef} className={`page-container ${isNavActive ? 'active' : ''}`}>
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

      {showCategoryCube && (
        <div className="category-cube-overlay">
          <button className="close-cube-btn" onClick={() => setShowCategoryCube(false)}>
            <X size={30} />
          </button>
          <div className="category-cube-container">
            <div className="cube-scene">
              <div className="cube" style={{ transform: `rotateY(${-selectedCategoryIndex * 60}deg)` }}>
                {categories.map((category, index) => (
                  <div key={index} className={`cube-face face-${index + 1}`}>
                    {category}
                  </div>
                ))}
              </div>
            </div>
            <div className="cube-nav">
              <button onClick={handlePrevCategory}><ChevronLeft size={24} /></button>
              <button onClick={handleNextCategory}><ChevronRight size={24} /></button>
            </div>
          </div>
        </div>
      )}

      {showShop && (
        <div className="shop-overlay">
          <button className="close-shop-btn" onClick={() => setShowShop(false)}>
            <X size={30} />
          </button>
          <div className="shop-container">
            <h2>Digital Marketing Services</h2>
            <div className="services-grid">
              {marketingServices.map((service, index) => (
                <div key={index} className="service-card">
                  {service.icon}
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="bottom-nav">
        <button className="jelly-button" onClick={() => setShowCategoryCube(true)}>Categories</button>
        <button className="jelly-button" onClick={() => setShowShop(true)}>Shop</button>
        <button className="jelly-button">Blog</button>
        <button className="jelly-button">FAQs</button>
      </div>
    </>
  );
}
