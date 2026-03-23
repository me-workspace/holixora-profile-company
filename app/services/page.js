import SectionIntro from '../../components/SectionIntro';

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

      <section className="section">
        <div className="container">
          <div className="card-grid two-up">
            {services.map((service) => (
              <article key={service.title} className="glass-card service-detail-card">
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
        <div className="container narrow">
          <SectionIntro
            eyebrow="Engagement"
            title="Need a solution tailored to your operations?"
            text="We can help you define the right path — whether that means automation, software, or a phased implementation plan."
          />
        </div>
      </section>
    </div>
  );
}
