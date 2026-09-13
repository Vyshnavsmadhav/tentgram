"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function GalleryPage() {
  const images = [
    '/images/gallery_1_1789300624771.jpg',
    '/images/gallery_2_1789300649788.jpg',
    '/images/gallery_3_1789300665581.jpg',
    '/images/gallery_4_1789300683632.jpg',
    '/images/mountain_trekking_1789216577772.jpg',
    '/images/river_rafting_1789216592866.jpg',
    '/images/stargazing_night_1789216608697.jpg',
    '/images/trip_adventure_1789217194233.jpg'
  ];

  return (
    <main className="min-h-screen" style={{ background: 'radial-gradient(circle at top, var(--card-bg) 0%, var(--background) 100%)' }}>
      <Navbar />
      <div style={{ paddingTop: '120px', paddingBottom: '4rem', paddingLeft: '4rem', paddingRight: '4rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-playfair)', marginBottom: '1rem', color: 'var(--foreground)' }}>Gallery</h1>
        <p style={{ color: 'var(--foreground)', opacity: 0.8, marginBottom: '4rem', fontSize: '1.2rem' }}>
          A glimpse into the magical moments captured by our guests and team.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          {images.map((imgSrc, idx) => (
            <div key={idx} style={{ position: 'relative', height: '300px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
               <Image src={imgSrc} alt={`Gallery Image ${idx + 1}`} fill style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
