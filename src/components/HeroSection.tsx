"use client";

import Image from 'next/image';
import { useRef, useEffect } from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Auto-play prevented", e));
    }
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.backgroundContainer}>
        <div className={`${styles.bgMedia} ${styles.nightBg}`}>
          <video 
            ref={videoRef}
            className={styles.backgroundVideo} 
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
            onEnded={() => {
              if (videoRef.current) {
                videoRef.current.play();
              }
            }}
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={`${styles.bgMedia} ${styles.dayBg}`}>
          <Image 
            src="/images/sunny_bg.png" 
            alt="Sunny Daytime Background"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.tagline}>ESCAPE. EXPLORE. EXPERIENCE.</div>
        <h1 className={styles.title}>
          Stay Close to <br />
          <span className={styles.titleItalic}>What Matters</span>
        </h1>
        <p className={styles.description}>
          Unique stays in the world's most breathtaking<br />
          places. Handpicked by Tentgram.
        </p>
        
        <div className={styles.ctaGroup}>
          <button className={styles.primaryButton}>
            Explore Stays
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.arrowIcon}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          
          <button className={styles.watchStoryButton}>
            <span className={styles.playIconContainer}>
              <svg viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1" strokeLinejoin="round" className={styles.playIcon}>
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </span>
            Watch Story
          </button>
        </div>
      </div>

      <div className={styles.pagination}>
        <div className={styles.activePage}>01</div>
        <div className={styles.pageLine}></div>
        <div className={styles.inactivePage}>03</div>
      </div>
    </section>
  );
}
