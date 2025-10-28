'use client';
import { useState, useRef, useEffect } from 'react';
import {
  User,
  GitCompare,
  Heart,
  ShoppingCart,
  ChevronDown,
  Search,
  X,
  LogIn,
  ShoppingBasket,
  HeartHandshake,
  BookOpen,
  Download,
  Gift,
  Terminal,
  Wrench,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const conversionRates: { [key: string]: number } = {
  USD: 1.0,
  EUR: 0.92,
  GBP: 0.79,
  INR: 83.33,
};

const categories = [
  'For You',
  'Digital Products',
  'Tools and More',
  'Software',
  'Books and Audio',
  'Best Digital Products and Service Provider',
];

export default function Home() {
  const [isNavActive, setIsNavActive] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isSecondSearchExpanded, setIsSecondSearchExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('menu');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [baseAmount] = useState(100); // Base amount in USD
  const [showCategoryCube, setShowCategoryCube] = useState(false);
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
  
  const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCurrency(event.target.value);
  };

  const convertedAmount = (baseAmount * conversionRates[selectedCurrency]).toFixed(2);

  const handleNextCategory = () => {
    setSelectedCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const handlePrevCategory = () => {
    setSelectedCategoryIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
  };
  
  useEffect(() => {
    const pageContainer = pageContainerRef.current;
    if (pageContainer) {
      if (showCategoryCube) {
        pageContainer.classList.add('blur');
      } else {
        pageContainer.classList.remove('blur');
      }
    }
  }, [showCategoryCube]);


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
            <button
              className="header-button"
              onClick={() => setIsSearchExpanded(!isSearchExpanded)}
            >
              <ChevronDown size={20} />
            </button>
          </div>

          <div className={`search-box-container ${isSearchExpanded ? 'active' : ''}`}>
            <div className="tab-slider">
              <div className="tab-header">
                <div
                  className={`tab-item ${activeTab === 'menu' ? 'active' : ''}`}
                  onClick={() => setActiveTab('menu')}
                >
                  Menu
                </div>
                <div
                  className={`tab-item ${activeTab === 'categories' ? 'active' : ''}`}
                  onClick={() => setActiveTab('categories')}
                >
                  Categories
                </div>
                 <div className="tab-indicator" style={{ left: activeTab === 'categories' ? 'calc(50% - 2.5px)' : '5px' }}></div>
              </div>
              <div className="tab-content">
                <div className={`tab-pane ${activeTab === 'menu' ? 'active' : ''}`}>
                  <div className={`search-box active`}>
                    <input type="text" placeholder="Search in Menu..." />
                    <div className="search-icon">
                      <Search size={20} />
                    </div>
                  </div>
                  <div className="currency-converter">
                    <label htmlFor="currency-select">Choose Currency:</label>
                    <select id="currency-select" value={selectedCurrency} onChange={handleCurrencyChange}>
                      {Object.keys(conversionRates).map(currency => (
                        <option key={currency} value={currency}>{currency}</option>
                      ))}
                    </select>
                    <div className="payment-details">
                      <p>Payment Amount:</p>
                      <span>{convertedAmount} {selectedCurrency}</span>
                    </div>
                  </div>
                   <ul className="menu-options">
                    <li><LogIn size={16} /> Account</li>
                    <li><ShoppingBasket size={16} /> Cart</li>
                    <li><HeartHandshake size={16} /> Wishlist</li>
                  </ul>
                </div>
                <div className={`tab-pane ${activeTab === 'categories' ? 'active' : ''}`}>
                   <ul className="menu-options">
                    <li><BookOpen size={16} /> Books & Audio</li>
                    <li><Download size={16} /> Digital Products</li>
                    <li><Gift size={16} /> For You</li>
                    <li><Terminal size={16} /> Software</li>
                    <li><Wrench size={16} /> Tools & More</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`search-box ${isSecondSearchExpanded ? 'active' : ''}`} onMouseEnter={() => setIsSecondSearchExpanded(true)} onMouseLeave={() => setIsSecondSearchExpanded(false)}>
            <input type="text" placeholder="Search..." />
            <div className="search-icon">
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

      <div className="bottom-nav">
        <button className="jelly-button" onClick={() => setShowCategoryCube(true)}>Categories</button>
        <button className="jelly-button">Shop</button>
        <button className="jelly-button">Blog</button>
        <button className="jelly-button">FAQs</button>
      </div>
    </>
  );
}
