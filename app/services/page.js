import Link from 'next/link';
import SectionIntro from '../../components/SectionIntro';

export const metadata = {
  title: 'Services | Holixora Digital Technology',
  description:
    'AI automation, workflow design, custom software, and hospitality operations solutions from Holixora.',
};

const services = [
  {
    title: 'AI Automation Audit',
    body: 'Review workflows, identify inefficiencies, and map practical automation opportunities across the business.',
    points: ['Workflow review', 'Bottleneck analysis', 'Automation roadmap'],
  },
  {
    title: 'Workflow Automation Implementation',
    body: 'Design and implement practical automations that reduce repetitive work and improve coordination.',
    points: ['Workflow design', 'Automation setup', 'Testing and handover'],
  },
  {
    title: 'Custom Software Development',
    body: 'Build tailored systems, dashboards, and platforms designed around your operational priorities.',
    points: ['Discovery and scoping', 'UI and system planning', 'Development support'],
  },
  {
    title: 'Hospitality Operations Solutions',
    body: 'Create integrated systems for hospitality businesses that need stronger visibility and control.',
    points: ['Hospitality workflow analysis', 'Systems planning', 'Dashboard and module design'],
  },
  {
    title: 'Prototype & MVP Development',
    body: 'Turn product ideas into structured prototypes and MVP plans that can be validated with confidence.',
    points: ['Product scoping', 'Feature prioritisation', 'Prototype roadmap'],
  },
];

const engagement = [
  'Businesses preparing to streamline operations',
  'Teams dealing with fragmented systems or repetitive work',
  'Hospitality operators looking for more visibility and control',
];

export default function ServicesPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Services</p>
          <h1>Solutions designed to improve how your business operates</h1>
          <p className="lead muted">
            Holixora provides AI automation and software solutions for
            hospitality and related service businesses seeking stronger systems,
            better visibility, and more efficient operations.
          </p>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container">
          <div className="signal-strip glass-card">
            <div>
              <p className="signal-label">Focus</p>
              <strong>Operational efficiency and business clarity</strong>
            </div>
            <div>
              <p className="signal-label">Approach</p>
              <strong>Automation, software, workflow design</strong>
            </div>
            <div>
              <p className="signal-label">Fit</p>
              <strong>Hospitality and related service businesses</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card-grid two-up">
            {services.map((service) => (
              <article key={service.title} className="glass-card service-detail-card service-detail-polished">
                <p className="service-kicker">Service</p>
                <h2>{service.title}</h2>
                <p className="muted">{service.body}</p>
                <ul className="feature-list compact">
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container split-panel">
          <div>
            <SectionIntro
              eyebrow="Engagement"
              title="Need a solution tailored to your operations?"
              text="We can help you define the right path — whether that means automation, software, or a phased implementation plan."
            />
            <ul className="feature-list compact">
              {engagement.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="glass-card consultation-card">
            <p className="eyebrow">Next step</p>
            <h3>Start with a practical conversation</h3>
            <p className="muted">
              Tell us what is slowing your business down today, what systems are
              unclear, and where you need more control.
            </p>
            <Link href="/contact" className="button button-primary">
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
