"use client";
import Navbar from "@/components/Navbar";

export default function DestinationsPage() {
  return (
    <main className="min-h-screen" style={{ background: 'radial-gradient(circle at top right, var(--card-bg) 0%, var(--background) 80%)' }}>
      <Navbar />
      <div style={{ paddingTop: '120px', paddingBottom: '4rem', paddingLeft: '4rem', paddingRight: '4rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-playfair)', marginBottom: '1rem', color: 'var(--foreground)' }}>Destinations</h1>
        <p style={{ color: 'var(--foreground)', opacity: 0.8, marginBottom: '4rem', fontSize: '1.2rem' }}>
          Explore our breathtaking destinations hand-picked just for you.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {['Manali', 'Nainital', 'Jibhi', 'Munnar', 'Coorg', 'Wayanad'].map((dest, idx) => (
            <div key={idx} style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '2.5rem 2rem', textAlign: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair)', marginBottom: '1rem', color: 'var(--accent)' }}>{dest}</h3>
              <p style={{ color: 'var(--foreground)', opacity: 0.7, marginBottom: '2rem', lineHeight: '1.6' }}>
                Discover the beauty and serenity of {dest}, perfect for your next getaway. Experience nature like never before.
              </p>
              <button style={{ background: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)', padding: '0.75rem 2rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', transition: 'background-color 0.3s, color 0.3s' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent)'; e.currentTarget.style.color = '#000'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; }}>
                Explore {dest}
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
