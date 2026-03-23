import Link from 'next/link';
import SectionIntro from '../../components/SectionIntro';

export const metadata = {
  title: 'About Us | Holixora Digital Technology',
  description:
    'Learn about Holixora, an AI automation and software solutions company focused on hospitality operations.',
};

const principles = [
  ['Practicality', 'Every solution should solve a real operational problem.'],
  ['Clarity', 'Good systems make work simpler, not more confusing.'],
  ['Fit', 'Technology should adapt to the business, not the other way around.'],
  ['Long-term value', 'We build with usability, sustainability, and growth in mind.'],
];

export default function AboutPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">About Holixora</p>
          <h1>Building smarter operational systems for hospitality</h1>
          <p className="lead muted">
            Holixora is an AI automation and software solutions company focused
            on helping hospitality and related service businesses operate with
            greater clarity, efficiency, and control.
          </p>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container">
          <div className="signal-strip glass-card">
            <div>
              <p className="signal-label">Identity</p>
              <strong>AI automation and software solutions company</strong>
            </div>
            <div>
              <p className="signal-label">Industry focus</p>
              <strong>Hospitality and related service businesses</strong>
            </div>
            <div>
              <p className="signal-label">Mindset</p>
              <strong>Practical systems, not technology for its own sake</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <SectionIntro
            eyebrow="Who we are"
            title="Operations, automation, and software — working together"
          />
          <div className="stack-copy">
            <p>
              Holixora exists at the intersection of operations, automation,
              and software. We work with businesses facing workflow complexity
              and help them build stronger digital foundations for how they run.
            </p>
            <p>
              Our solutions are designed to create practical improvements — not
              just technical outputs. We believe business systems should reduce
              friction, improve visibility, and support growth with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container narrow">
          <SectionIntro
            eyebrow="Perspective"
            title="We start with the business, not the buzzwords"
            text="Many companies do not struggle because of a lack of ambition. They struggle because their workflows and systems are not built to support growth."
          />
          <p className="lead muted">
            Holixora helps solve that problem by designing automation and
            software around operational reality — where teams lose time,
            information breaks down, and better systems create leverage.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro eyebrow="Principles" title="How we think" />
          <div className="card-grid two-up">
            {principles.map(([title, body]) => (
              <article key={title} className="glass-card principle-card">
                <h3>{title}</h3>
                <p className="muted">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Next step</p>
            <h2>Let&apos;s turn business complexity into clearer systems</h2>
            <p className="lead muted">
              If your team is dealing with manual work, fragmented workflows, or
              weak visibility across operations, Holixora can help define the
              right system path.
            </p>
          </div>
          <div className="cta-actions">
            <Link href="/contact" className="button button-primary">
              Talk to Holixora
            </Link>
            <Link href="/services" className="button button-secondary">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
