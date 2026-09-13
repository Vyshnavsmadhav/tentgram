"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isLightMode, setIsLightMode] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Check initial state from DOM
    setIsLightMode(document.documentElement.classList.contains('light-mode'));
    
    // Close dropdown on click outside
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(`.${styles.dropdownContainer}`)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleTheme = () => {
    if (isLightMode) {
      document.documentElement.classList.remove('light-mode');
      setIsLightMode(false);
    } else {
      document.documentElement.classList.add('light-mode');
      setIsLightMode(true);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <div className={styles.logoIcon}>
          {/* A simple SVG logo representing a tent/mountain */}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21h18L12 3 3 21z" />
            <path d="M12 3v18" />
            <path d="M8.5 14h7" />
          </svg>
        </div>
        <span className={styles.logoText}>TENTGRAM</span>
      </div>

      <div className={styles.navLinks}>
        <div className={styles.dropdownContainer}>
          <button 
            className={`${styles.dropdownButton} ${isDropdownOpen ? styles.active : ''}`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Tentgram
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}>
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          
          {isDropdownOpen && (
            <div className={styles.dropdownMenu}>
              <Link href="/stays" className={styles.dropdownItem} onClick={() => setIsDropdownOpen(false)}>Stays</Link>
              <Link href="/events" className={styles.dropdownItem} onClick={() => setIsDropdownOpen(false)}>Event</Link>
              <Link href="/experiences" className={styles.dropdownItem} onClick={() => setIsDropdownOpen(false)}>Experience</Link>
              <Link href="/trips" className={styles.dropdownItem} onClick={() => setIsDropdownOpen(false)}>Trip</Link>
            </div>
          )}
        </div>
        
        <Link href="/destinations" className={styles.navLink}>Destinations</Link>
        <Link href="/about" className={styles.navLink}>About Us</Link>
        <Link href="/gallery" className={styles.navLink}>Gallery</Link>
        <Link href="/contact" className={styles.navLink}>Contact</Link>
      </div>

      <div className={styles.actions}>
        <button className={styles.themeToggle} aria-label="Toggle Theme" onClick={toggleTheme}>
          {isLightMode ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
        <Link href="#" className={styles.bookButton}>
          Book Your Stay
        </Link>
        <button className={styles.hamburger} aria-label="Menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
