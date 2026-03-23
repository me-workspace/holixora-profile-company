import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="header">
      <div className="container nav-wrap">
        <Link href="/" className="brand-mark">
          <span className="brand-dot" />
          <span>
            <strong>Holixora</strong>
            <small>Digital Technology</small>
          </span>
        </Link>

        <nav className="nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="button button-primary header-cta">
          Book a Consultation
        </Link>

        <details className="mobile-nav">
          <summary>Menu</summary>
          <div className="mobile-nav-panel glass-card">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="button button-primary wide-button">
              Book a Consultation
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
