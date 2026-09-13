import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ background: 'radial-gradient(circle at bottom left, var(--card-bg) 0%, var(--background) 70%)' }}>
      <Navbar />
      <div style={{ paddingTop: '120px', paddingBottom: '4rem', paddingLeft: '4rem', paddingRight: '4rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-playfair)', marginBottom: '2rem', color: 'var(--foreground)' }}>About Us</h1>
        <p style={{ color: 'var(--foreground)', opacity: 0.8, marginBottom: '1.5rem', fontSize: '1.2rem', lineHeight: '1.8' }}>
          Welcome to Tentgram, your gateway to the most spectacular nature escapes. We believe in disconnecting to reconnect—leaving behind the noise of the city to find peace in the wilderness.
        </p>
        <p style={{ color: 'var(--foreground)', opacity: 0.8, marginBottom: '1.5rem', fontSize: '1.2rem', lineHeight: '1.8' }}>
          Our mission is to provide unforgettable experiences, curating the finest stays and adventures that harmonize perfectly with their natural surroundings, while promoting sustainable and responsible tourism.
        </p>
        <p style={{ color: 'var(--foreground)', opacity: 0.8, marginBottom: '3rem', fontSize: '1.2rem', lineHeight: '1.8' }}>
          Join us, and let nature inspire you.
        </p>
      </div>
    </main>
  );
}
