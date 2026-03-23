import Link from 'next/link';
import SectionIntro from '../components/SectionIntro';

const services = [
  {
    title: 'AI Automation Audit',
    body: 'Identify process bottlenecks, repetitive tasks, and automation opportunities across your operations.',
  },
  {
    title: 'Workflow Automation',
    body: 'Implement practical automation that improves coordination and reduces avoidable manual work.',
  },
  {
    title: 'Custom Software Development',
    body: 'Build internal platforms, dashboards, and business systems tailored to how your company operates.',
  },
  {
    title: 'Hospitality Operations Solutions',
    body: 'Create integrated systems that strengthen visibility and control across hospitality workflows.',
  },
];

const industries = [
  'Hotels',
  'Boutique stays',
  'Resorts',
  'Restaurants',
  'Cafés',
  'Event venues',
  'Hospitality groups',
  'Property managers',
  'Related service businesses',
];

const outcomes = [
  'Reduced manual workload',
  'Improved team coordination',
  'Stronger operational visibility',
  'Fewer process delays and gaps',
  'Better reporting foundations',
  'A clearer path to growth',
];

const process = [
  {
    step: '01',
    title: 'Understand the operation',
    body: 'We look at workflows, friction points, reporting gaps, and what is slowing day-to-day execution.',
  },
  {
    step: '02',
    title: 'Define the right system',
    body: 'We identify whether the answer is automation, software, hospitality systems, or a phased roadmap.',
  },
  {
    step: '03',
    title: 'Build for real use',
    body: 'We design solutions around the way the business actually works so adoption is practical and sustainable.',
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">AI Automation & Smart Business Systems</p>
            <h1>Smart Systems for Modern Hospitality</h1>
            <p className="lead">
              Holixora helps hospitality and related service businesses
              streamline operations, reduce manual work, and scale with greater
              clarity through AI automation and custom software.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="button button-primary">
                Book a Consultation
              </Link>
              <Link href="/services" className="button button-secondary">
                View Solutions
              </Link>
            </div>

            <div className="hero-trust-row">
              <span>Hospitality-focused</span>
              <span>Operational-first</span>
              <span>Automation + software</span>
            </div>
          </div>

          <div className="hero-card glass-card">
            <p className="hero-card-label">Built for operational clarity</p>
            <div className="hero-metric">
              <strong>Hospitality-first</strong>
              <span>Focused on operators and related service businesses</span>
            </div>
            <div className="hero-metric">
              <strong>Systems + automation</strong>
              <span>From process reviews to tailored platforms</span>
            </div>
            <div className="hero-metric">
              <strong>Business outcomes</strong>
              <span>Less friction, better visibility, stronger control</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container">
          <div className="signal-strip glass-card">
            <div>
              <p className="signal-label">Positioning</p>
              <strong>AI automation and smart software for hospitality</strong>
            </div>
            <div>
              <p className="signal-label">Audience</p>
              <strong>Hotels, F&amp;B, event venues, related service operators</strong>
            </div>
            <div>
              <p className="signal-label">Outcome</p>
              <strong>Less friction, better visibility, stronger systems</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Positioning"
            title="Operational intelligence, built for hospitality"
            text="Hospitality businesses move fast and depend on clear coordination across people, processes, and systems. Holixora designs practical digital solutions that bring structure to complexity."
          />
          <div className="two-column-copy">
            <p>
              We combine automation, workflow thinking, and software
              development to help businesses reduce friction and improve how
              operations run day to day.
            </p>
            <p>
              Our focus is not technology for its own sake. It is building
              systems that support visibility, efficiency, and long-term growth.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container">
          <SectionIntro
            eyebrow="Services"
            title="What we do"
            text="Solutions designed to improve how your business operates."
          />
          <div className="card-grid four-up">
            {services.map((service) => (
              <article key={service.title} className="glass-card service-card service-card-polished">
                <p className="service-kicker">Service</p>
                <h3>{service.title}</h3>
                <p className="muted">{service.body}</p>
                <Link href="/services" className="text-link">
                  Learn more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-panel">
          <div>
            <SectionIntro
              eyebrow="Industries"
              title="Who we work with"
              text="We support hospitality businesses and related service operators that rely on smooth day-to-day execution."
            />
            <div className="pill-grid">
              {industries.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card why-card">
            <p className="eyebrow">Why Holixora</p>
            <h3>Less friction. Better visibility. Stronger systems.</h3>
            <ul className="feature-list">
              <li>Operational-first thinking</li>
              <li>Purposeful automation</li>
              <li>Tailored systems, not generic templates</li>
              <li>Hospitality-focused execution</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container">
          <SectionIntro
            eyebrow="Process"
            title="How Holixora works"
            text="A clear process keeps projects practical, focused, and aligned with business reality."
          />
          <div className="card-grid three-up">
            {process.map((item) => (
              <article key={item.step} className="glass-card process-card">
                <p className="process-step">{item.step}</p>
                <h3>{item.title}</h3>
                <p className="muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Outcomes"
            title="What better systems make possible"
            text="A stronger foundation for growth, powered by practical execution."
          />
          <div className="card-grid three-up">
            {outcomes.map((item) => (
              <article key={item} className="glass-card outcome-card outcome-card-polished">
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Let&apos;s build</p>
            <h2>Build a business that runs with more clarity</h2>
            <p className="lead muted">
              If your operations are slowed down by fragmented tools,
              repetitive work, or inefficient workflows, Holixora can help you
              build a smarter system for growth.
            </p>
          </div>
          <div className="cta-actions">
            <Link href="/contact" className="button button-primary">
              Talk to Holixora
            </Link>
            <Link href="/about" className="button button-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
