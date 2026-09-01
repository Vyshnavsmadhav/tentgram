import styles from './FeaturesBanner.module.css';

export default function FeaturesBanner() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
          <path d="M12 2L2 22h20L12 2z" />
          <path d="M12 22V12" />
        </svg>
      ),
      title: "Unique Properties",
      description: "Curated stays that blend comfort with nature."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "Breathtaking Locations",
      description: "From mountains to lakesides, we bring you closer to wonder."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: "Memorable Experiences",
      description: "Adventures and moments that stay with you forever."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      title: "Personalized Support",
      description: "We're here to make your journey seamless."
    }
  ];

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.banner}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureItem}>
            <div className={styles.iconContainer}>{feature.icon}</div>
            <div className={styles.textContainer}>
              <h4 className={styles.title}>{feature.title}</h4>
              <p className={styles.description}>{feature.description}</p>
            </div>
            {index < features.length - 1 && <div className={styles.divider}></div>}
          </div>
        ))}
      </div>
    </div>
  );
}
