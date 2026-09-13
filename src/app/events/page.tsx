import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function EventsPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--background)' }}>
      <Navbar />
      <div style={{ paddingTop: '120px', paddingBottom: '4rem', paddingLeft: '4rem', paddingRight: '4rem', maxWidth: '1400px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-playfair)', marginBottom: '1rem', color: 'var(--foreground)' }}>Upcoming Events</h1>
        <p style={{ color: 'var(--foreground)', opacity: 0.8, marginBottom: '4rem', fontSize: '1.2rem' }}>
          Join us for exclusive gatherings, workshops, and celebrations in the heart of nature.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {[1, 2, 3].map((item) => (
            <div key={item} style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ height: '240px', background: '#333', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'var(--accent)', color: '#000', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', zIndex: 10 }}>
                  Oct 1{item}, 2026
                </div>
                <Image src="/images/nature_photography_event_1789216418312.jpg" alt="Nature Photography" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--foreground)' }}>Nature Photography Workshop {item}</h3>
                <p style={{ opacity: 0.7, marginBottom: '2rem', color: 'var(--foreground)', lineHeight: '1.5' }}>Learn how to capture the beauty of the wilderness with professional photographers. Includes gear rental and guided trails.</p>
                <button style={{ background: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)', padding: '0.75rem 1.5rem', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.3s' }}>Reserve Spot</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
