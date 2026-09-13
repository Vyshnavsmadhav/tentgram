import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function TripsPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--background)' }}>
      <Navbar />
      <div style={{ paddingTop: '120px', paddingBottom: '4rem', paddingLeft: '4rem', paddingRight: '4rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-playfair)', marginBottom: '1rem', color: 'var(--foreground)' }}>Adventure Trips</h1>
        <p style={{ color: 'var(--foreground)', opacity: 0.8, marginBottom: '4rem', fontSize: '1.2rem' }}>
          Embark on unforgettable journeys across scenic routes and breathtaking landscapes.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {[
            { title: 'The Great Mountain Drive', image: '/images/trip_adventure_1789217194233.jpg' }
          ].map((exp, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '3rem', background: 'var(--card-bg)', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-color)', flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse' }}>
              <div style={{ flex: '1', minHeight: '400px', background: 'var(--border-color)', position: 'relative' }}>
                <Image src={exp.image} alt={exp.title} fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ flex: '1', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-playfair)', marginBottom: '1.5rem', color: 'var(--accent)' }}>{exp.title}</h3>
                <p style={{ opacity: 0.8, marginBottom: '2rem', lineHeight: '1.8', color: 'var(--foreground)' }}>
                  Pack your bags and hit the road for an epic adventure. Drive through winding mountain passes, stop at secluded viewpoints, and experience the freedom of the open road with our carefully curated road trip itineraries.
                </p>
                <button style={{ alignSelf: 'flex-start', background: 'var(--accent)', color: '#000', border: 'none', padding: '1rem 2.5rem', fontWeight: 'bold', cursor: 'pointer', borderRadius: '4px', fontSize: '1rem' }}>
                  Explore Itinerary
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
