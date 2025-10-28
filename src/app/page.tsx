'use client';
import { useState, useEffect } from 'react';
import { ChevronsUpDown, User, Settings, CreditCard, LogOut, Plus, Search, Menu as MenuIcon, X, Instagram, Youtube, HelpCircle, Info } from 'lucide-react';

// Main component
export default function Home() {
  const [activePage, setActivePage] = useState('Home');
  const [isCubeOpen, setIsCubeOpen] = useState(false);
  const [notesPage, setNotesPage] = useState(0);

  const pages = [
    {
      name: 'Home',
      content: (
        <div className="page home-page">
          <div className="content">
            <h1>Sanatani Shop</h1>
            <p>Welcome to the modern web experience.</p>
          </div>
        </div>
      )
    },
    {
      name: 'Shop',
      content: (
        <div className="page shop-page">
          <div className="content">
             <div className="shop-grid">
                <div className="shop-card">
                  <Instagram size={48} />
                  <h3>Instagram Growth</h3>
                  <p>Strategic funnels to boost your Instagram presence.</p>
                </div>
                <div className="shop-card">
                  <Youtube size={48} />
                  <h3>YouTube Marketing</h3>
                  <p>Engage and grow your audience on YouTube.</p>
                </div>
                <div className="shop-card">
                  <HelpCircle size={48} />
                  <h3>WordPress Solutions</h3>
                  <p>Expert WordPress services for your business.</p>
                </div>
              </div>
          </div>
        </div>
      )
    },
    {
      name: 'Blog',
      content: (
        <div className="page blog-page">
          <div className="content">
            <h2>Our Digital Marketing Philosophy</h2>
            <p>At Sanatani Shop, we believe in a holistic approach to digital marketing. It's not just about clicks and conversions; it's about building a brand story that resonates with your audience. We leverage cutting-edge strategies tailored for platforms like Instagram, YouTube, and WordPress to create meaningful engagement.</p>
            <p>With over a decade of experience, our team has honed the craft of creating marketing funnels that not only attract but also retain customers. We are proud of our journey and the successes we've brought to our clients.</p>
            <p>Each project is handled with the utmost care by our dedicated team members. We dive deep into your brand's ethos to ensure every campaign is a true reflection of your vision. Your success is our success.</p>
          </div>
        </div>
      )
    },
     {
      name: 'FAQs',
      content: (
        <div className="page faq-page">
          <div className="content">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-item">
              <h4>What is Sanatani Shop's main motto?</h4>
              <p>Our main motto is "Digital Harmony." We strive to create a perfect balance between innovative marketing techniques and the authentic story of your brand, ensuring your digital presence is both powerful and true to your identity.</p>
            </div>
            <div className="faq-item">
              <h4>How do you ensure customer satisfaction?</h4>
              <p>We are proud to have a 98% customer satisfaction rate. This is achieved through meticulous planning, transparent communication, and a dedicated team that treats every project as their own. We're not happy until you are delighted with the results.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      name: 'Notes',
      content: (
        <div className="page notes-page">
          <div className="content">
            <h2>Our Services</h2>
            {notesPage === 0 && (
              <ul className="notes-list">
                <li>Instagram Growth Funnels</li>
                <li>YouTube Audience Building</li>
                <li>WordPress SEO Strategy</li>
                <li>Content Marketing & Creation</li>
                <li>Email Marketing Campaigns</li>
              </ul>
            )}
            {notesPage === 1 && (
              <ul className="notes-list">
                <li>Pay-Per-Click (PPC) Management</li>
                <li>Social Media Advertising</li>
                <li>Conversion Rate Optimization (CRO)</li>
                <li>Brand Identity & Design</li>
                <li>Marketing Analytics & Reporting</li>
              </ul>
            )}
            <div className="notes-pagination">
              {notesPage > 0 && <button onClick={() => setNotesPage(notesPage - 1)}>Prev</button>}
              {notesPage < 1 && <button onClick={() => setNotesPage(notesPage + 1)}>Next</button>}
            </div>
          </div>
        </div>
      )
    }
  ];

  const currentPage = pages.find(p => p.name === activePage);

  const handlePageChange = (pageName) => {
    setActivePage(pageName);
    setIsCubeOpen(false); // Close cube when a page is selected
  };
  
  return (
    <div className={`page-container ${isCubeOpen ? 'cube-open' : ''}`}>
        {/* Top Navigation */}
      <div className="sticky-nav">
        <div className="logo-container">
          <div className="logo">
            <img src="https://i.ibb.co/pW3BqNm/logo.png" alt="Logo" />
          </div>
          <span className="logo-text">Sanatani Shop</span>
        </div>
        <div className="nav-icons">
           <button className="nav-icon-btn search-btn">
            <Search />
          </button>
          <button className="nav-icon-btn menu-btn" onClick={() => setIsCubeOpen(!isCubeOpen)}>
            {isCubeOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="main-content-area">
         {currentPage && currentPage.content}
      </div>


      {/* Category Cube */}
      {isCubeOpen && (
        <div className="category-cube-container">
          <div className="category-cube">
            <div className="face front" onClick={() => handlePageChange('Home')}>Home</div>
            <div className="face back" onClick={() => handlePageChange('Shop')}>Shop</div>
            <div className="face right" onClick={() => handlePageChange('Blog')}>Blog</div>
            <div className="face left" onClick={() => handlePageChange('Notes')}>Notes</div>
            <div className="face top" onClick={() => handlePageChange('FAQs')}>FAQs</div>
            <div className="face bottom" onClick={() => handlePageChange('About')}>About</div>
          </div>
        </div>
      )}

      {/* Bottom Jelly Menu */}
      <div className="jelly-menu">
        <button className={`jelly-button ${activePage === 'Home' ? 'active' : ''}`} onClick={() => handlePageChange('Home')}>Home</button>
        <button className={`jelly-button ${activePage === 'Shop' ? 'active' : ''}`} onClick={() => handlePageChange('Shop')}>Shop</button>
        <button className={`jelly-button ${activePage === 'Blog' ? 'active' : ''}`} onClick={() => handlePageChange('Blog')}>Blog</button>
        <button className={`jelly-button ${activePage === 'FAQs' ? 'active' : ''}`} onClick={() => handlePageChange('FAQs')}>FAQs</button>
      </div>
    </div>
  );
}