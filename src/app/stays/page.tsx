import Navbar from "@/components/Navbar";
import StaysSection from "@/components/StaysSection";

export default function StaysPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--background)' }}>
      <Navbar />
      <div style={{ paddingTop: '120px', paddingBottom: '4rem', paddingLeft: '4rem', paddingRight: '4rem' }}>
        <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-playfair)', marginBottom: '1rem', color: 'var(--foreground)' }}>Our Handpicked Stays</h1>
        <p style={{ color: 'var(--foreground)', opacity: 0.8, marginBottom: '3rem' }}>
          Discover the most beautiful and serene locations for your next getaway.
        </p>
        <div style={{ margin: '0 -4rem' }}>
          <StaysSection />
        </div>
      </div>
    </main>
  );
}
