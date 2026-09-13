import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen" style={{ background: 'radial-gradient(circle at center, var(--card-bg) 0%, var(--background) 80%)' }}>
      <Navbar />
      <div style={{ paddingTop: '120px', paddingBottom: '4rem', paddingLeft: '4rem', paddingRight: '4rem', maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-playfair)', marginBottom: '1rem', color: 'var(--foreground)' }}>Contact Us</h1>
        <p style={{ color: 'var(--foreground)', opacity: 0.8, marginBottom: '3rem', fontSize: '1.2rem' }}>
          Have a question or want to book a stay? We'd love to hear from you.
        </p>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--foreground)' }}>Name</label>
            <input type="text" style={{ width: '100%', padding: '1rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '4px', color: 'var(--foreground)' }} placeholder="Your Name" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--foreground)' }}>Email</label>
            <input type="email" style={{ width: '100%', padding: '1rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '4px', color: 'var(--foreground)' }} placeholder="your@email.com" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--foreground)' }}>Message</label>
            <textarea rows={5} style={{ width: '100%', padding: '1rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '4px', color: 'var(--foreground)', fontFamily: 'inherit' }} placeholder="How can we help you?"></textarea>
          </div>
          <button type="button" style={{ background: 'var(--accent)', color: '#000', padding: '1rem', border: 'none', borderRadius: '4px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', marginTop: '1rem' }}>
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
