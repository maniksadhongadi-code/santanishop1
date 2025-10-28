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
  Target,
  MessageCircle,
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

const allServices = [
    'Complete Instagram Growth Funnels',
    'YouTube Audience Building & Monetization',
    'Advanced WordPress SEO & Content Strategy',
    'Full-Funnel Conversion Marketing Campaigns',
    'Email Marketing Automation & List Building',
    'Social Media Management (Facebook, Twitter, LinkedIn)',
    'Pay-Per-Click (PPC) Campaign Management',
    'Content Creation: Blogs, Videos, & Graphics',
    'Brand Identity & Logo Design',
    'E-commerce Website Development (Shopify, WooCommerce)',
    'Mobile App Marketing & ASO',
    'Digital PR & Influencer Outreach',
];

const itemsPerPage = 5;

const pages = [
  { name: 'Home', className: 'home' },
  { name: 'Shop', className: 'shop-bg' },
  { name: 'Blog', className: 'blog-bg' },
  { name: 'Notes', className: 'notes-bg' },
  { name: 'About', className: 'about' },
  { name: 'FAQs', className: 'faq-bg' },
];

export default function Home() {
  const [isNavActive, setIsNavActive] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [isSecondSearchExpanded, setIsSecondSearchExpanded] = useState(false);
  const [showCategoryCube, setShowCategoryCube] = useState(false);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [notesPage, setNotesPage] = useState(0);

  const overlayRef = useRef<HTMLSpanElement>(null);
  const pageContainerRef = useRef<HTMLElement>(null);

  const totalNotesPages = Math.ceil(allServices.length / itemsPerPage);
  const displayedServices = allServices.slice(notesPage * itemsPerPage, (notesPage + 1) * itemsPerPage);


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
        {pages.filter(p => p.name !== 'FAQs').map((page, index) => (
          <li
            key={page.name}
            className="link"
            onClick={() => handleLinkClick(pages.findIndex(p => p.name === page.name))}
          >
            {page.name}
          </li>
        ))}
         <li className="link" onClick={() => handleLinkClick(pages.findIndex(p => p.name === 'Notes'))}>
            Notes
          </li>
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
                    <h1 className="title">Create Anything</h1>
                    <p>
                      Turn your ideas into reality. We provide the tools, services, and expertise to help you build and grow your digital presence. Explore our offerings and start creating today.
                    </p>
                </div>
            ) : page.name === 'Shop' ? (
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
            ) : page.name === 'Blog' ? (
              <div className="content">
                <h1 className="title">Our Digital Marketing Philosophy</h1>
                <p>
                  At Sanatani Shop, we believe digital marketing is both an art and a science. Our approach is rooted in years of experience, combining data-driven strategies with creative storytelling to build authentic connections. We don’t just run campaigns; we build ecosystems where brands can thrive. Each project is a partnership, and we immerse ourselves in your vision to craft bespoke strategies that deliver measurable results and lasting impact.
                </p>
                <p>
                  Our team is our greatest asset. Every employee at Sanatani Shop is a dedicated specialist who handles their role with meticulous care and a passion for excellence. From our SEO analysts to our content creators, we foster a culture of ownership and collaboration. We believe that the best results come from a team that is not only highly skilled but also deeply invested in the success of our clients. That’s the Sanatani Shop difference.
                </p>
              </div>
            ) : page.name === 'Notes' ? (
                <div className="content">
                    <h1 className="title">Our Services</h1>
                    <ul>
                        {displayedServices.map((service, i) => (
                            <li key={i}>{service}</li>
                        ))}
                    </ul>
                    {totalNotesPages > 1 && (
                      <div className="notes-nav">
                          <button 
                              className="notes-nav-button"
                              onClick={() => setNotesPage(p => p - 1)}
                              disabled={notesPage === 0}
                          >
                              Prev
                          </button>
                          <button 
                              className="notes-nav-button"
                              onClick={() => setNotesPage(p => p + 1)}
                              disabled={notesPage === totalNotesPages - 1}
                          >
                              Next
                          </button>
                      </div>
                    )}
                </div>
            ) : page.name === 'FAQs' ? (
                <div className="content">
                    <h1 className="title">FAQs</h1>
                    <p>
                        <strong>Our Main Motto:</strong> To empower creators and businesses by providing transformative digital tools and marketing strategies that deliver tangible results and foster growth. We are committed to innovation, integrity, and the success of our clients.
                    </p>
                    <p>
                        We are proud to have achieved a <strong>98% customer satisfaction rate</strong>. This is a testament to our dedicated team, our client-centric approach, and our relentless pursuit of excellence in everything we do.
                    </p>
                </div>
            ) : page.name === 'About' ? ( 
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
            ) : null}
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
        <button className="jelly-button" onClick={() => handleLinkClick(0)}>Home</button>
        <button className="jelly-button" onClick={() => setShowCategoryCube(true)}>Categories</button>
        <button className="jelly-button" onClick={() => handleLinkClick(2)}>Our Story</button>
        <button className="jelly-button">Quick Links</button>
        <button className="jelly-button">Information</button>
        <button className="jelly-button icon-only">
            <MessageCircle size={20} />
        </button>
      </div>
    </>
  );
}
