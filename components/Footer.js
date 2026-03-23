import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="eyebrow">Holixora Digital Technology</p>
          <h3>Smart systems for modern hospitality.</h3>
          <p className="muted">
            Holixora helps hospitality and related service businesses improve
            efficiency, visibility, and operational control through AI
            automation and custom software.
          </p>
        </div>

        <div>
          <p className="footer-title">Explore</p>
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
