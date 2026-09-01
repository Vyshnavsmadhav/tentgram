import Image from 'next/image';
import styles from './StaysSection.module.css';

export default function StaysSection() {
  const properties = [
    {
      image: '/images/property_1.png',
      name: 'Aurora Canvas Lodge',
      location: 'Manali, Himachal Pradesh',
      price: '8,999'
    },
    {
      image: '/images/property_2.png',
      name: 'Lake Whisper Tented Suite',
      location: 'Nainital, Uttarakhand',
      price: '7,499'
    },
    {
      image: '/images/property_2.png', // Reusing image 2 for the 3rd one to match layout
      name: 'Pine Grove Retreat',
      location: 'Jibhi, Himachal Pradesh',
      price: '6,999'
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <span className={styles.subtitle}>HANDPICKED STAYS</span>
          <h2 className={styles.title}>
            Stay in Places<br/>
            <span className={styles.titleItalic}>That Inspire</span>
          </h2>
          <p className={styles.description}>
            Wake up to the views, the calm, and the kind of beauty that words can't describe.
          </p>
          <a href="#" className={styles.viewAll}>
            View All Properties
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <div className={styles.carouselContainer}>
        <div className={styles.cards}>
          {properties.map((prop, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image src={prop.image} alt={prop.name} fill style={{ objectFit: 'cover' }} />
                <button className={styles.heartButton} aria-label="Save to favorites">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>
              <div className={styles.cardInfo}>
                <h3 className={styles.cardTitle}>{prop.name}</h3>
                <div className={styles.cardMeta}>
                  <div className={styles.location}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {prop.location}
                  </div>
                  <div className={styles.price}>
                    <span className={styles.priceLabel}>From</span>
                    <span className={styles.priceAmount}>₹{prop.price}</span>
                    <span className={styles.priceNight}>/night</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.navigation}>
          <button className={styles.navButton} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button className={styles.navButton} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
