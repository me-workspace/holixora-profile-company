export const metadata = {
  title: 'Contact | Holixora Digital Technology',
  description:
    'Start a consultation with Holixora to discuss automation, software, and hospitality operations solutions.',
};

const checklist = [
  'What your business does',
  'Which workflows or systems need improvement',
  'Whether you need automation, software, or strategic support',
  'Your timeline and priorities',
];

const expectations = [
  'A clearer understanding of the right solution path',
  'A more structured view of where inefficiencies exist',
  'A practical next-step conversation based on your needs',
];

export default function ContactPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Contact</p>
          <h1>Let&apos;s talk about your business needs</h1>
          <p className="lead muted">
            If your business is facing operational inefficiencies, fragmented
            workflows, or system limitations, Holixora can help you explore the
            right solution.
          </p>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container">
          <div className="signal-strip glass-card">
            <div>
              <p className="signal-label">Best for</p>
              <strong>Businesses facing workflow friction and manual work</strong>
            </div>
            <div>
              <p className="signal-label">Conversation focus</p>
              <strong>Automation, software, and operational clarity</strong>
            </div>
            <div>
              <p className="signal-label">Goal</p>
              <strong>Define the right next step for your business</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Start the conversation</p>
            <h2>Tell us what your business needs</h2>
            <p className="muted lead">
              Share what your business does, the challenges you are facing, and
              what you want to improve. We&apos;ll use that to shape the right next
              step.
            </p>

            <div className="info-card-grid">
              <div className="glass-card info-card">
                <h3>What to share</h3>
                <ul className="feature-list compact">
                  {checklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="glass-card info-card">
                <h3>What you can expect</h3>
                <ul className="feature-list compact">
                  {expectations.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <form className="glass-card contact-form">
            <label>
              Full Name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Company Name
              <input type="text" placeholder="Your company" />
            </label>
            <label>
              Email Address
              <input type="email" placeholder="you@company.com" />
            </label>
            <label>
              Industry
              <input type="text" placeholder="Hospitality, F&B, property..." />
            </label>
            <label>
              Service Needed
              <input type="text" placeholder="Automation, software, strategy..." />
            </label>
            <label>
              Message
              <textarea rows="6" placeholder="Tell us about your current challenge" />
            </label>
            <button type="button" className="button button-primary wide-button">
              Request a Consultation
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
