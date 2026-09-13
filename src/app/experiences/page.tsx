import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--background)' }}>
      <Navbar />
      <div style={{ paddingTop: '120px', paddingBottom: '4rem', paddingLeft: '4rem', paddingRight: '4rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-playfair)', marginBottom: '1rem', color: 'var(--foreground)' }}>Curated Experiences</h1>
        <p style={{ color: 'var(--foreground)', opacity: 0.8, marginBottom: '4rem', fontSize: '1.2rem' }}>
          More than just a stay. Immerse yourself in activities that connect you with nature.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {[
            { title: 'Mountain Trekking', image: '/images/mountain_trekking_1789216577772.jpg' },
            { title: 'River Rafting', image: '/images/river_rafting_1789216592866.jpg' },
            { title: 'Stargazing Night', image: '/images/stargazing_night_1789216608697.jpg' }
          ].map((exp, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '3rem', background: 'var(--card-bg)', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-color)', flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse' }}>
              <div style={{ flex: '1', minHeight: '350px', background: 'var(--border-color)', position: 'relative' }}>
                <Image src={exp.image} alt={exp.title} fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ flex: '1', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-playfair)', marginBottom: '1.5rem', color: 'var(--accent)' }}>{exp.title}</h3>
                <p style={{ opacity: 0.8, marginBottom: '2rem', lineHeight: '1.8', color: 'var(--foreground)' }}>
                  Experience the thrill of {exp.title.toLowerCase()} guided by our expert local team. Safety, fun, and unforgettable memories guaranteed. Discover hidden trails, push your limits, and bond with your group over an adventure of a lifetime.
                </p>
                <button style={{ alignSelf: 'flex-start', background: 'var(--accent)', color: '#000', border: 'none', padding: '1rem 2.5rem', fontWeight: 'bold', cursor: 'pointer', borderRadius: '4px', fontSize: '1rem' }}>
                  Explore Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
