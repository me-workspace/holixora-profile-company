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
            <ul className="feature-list">
              <li>What your business does</li>
              <li>Which workflows or systems need improvement</li>
              <li>Whether you need automation, software, or strategic support</li>
              <li>Your timeline and priorities</li>
            </ul>
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
