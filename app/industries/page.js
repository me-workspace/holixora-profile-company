import SectionIntro from '../../components/SectionIntro';

const primary = [
  'Hotels',
  'Boutique hotels',
  'Resorts',
  'Restaurants',
  'Cafés',
  'Hospitality groups',
  'Event venues',
];

const related = [
  'Property managers',
  'Hospitality support businesses',
  'Coordination-heavy service companies',
  'Operations-focused SMEs serving hospitality ecosystems',
];

const challenges = [
  'Repetitive admin processes',
  'Disconnected systems',
  'Inefficient workflow handoffs',
  'Weak reporting visibility',
  'Poor operational coordination',
  'Systems that do not scale with growth',
];

export default function IndustriesPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Industries</p>
          <h1>Focused on hospitality and the businesses around it</h1>
          <p className="lead muted">
            Holixora works with hospitality businesses and related service
            operators that need stronger internal systems, smoother workflows,
            and better operational control.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split-panel">
          <div className="glass-card">
            <SectionIntro eyebrow="Primary" title="Hospitality operators" />
            <div className="pill-grid">
              {primary.map((item) => (
                <span key={item} className="pill">{item}</span>
              ))}
            </div>
          </div>
          <div className="glass-card">
            <SectionIntro eyebrow="Secondary" title="Related service businesses" />
            <div className="pill-grid">
              {related.map((item) => (
                <span key={item} className="pill">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container">
          <SectionIntro
            eyebrow="Common needs"
            title="Operational challenges we help solve"
          />
          <div className="card-grid three-up">
            {challenges.map((item) => (
              <article key={item} className="glass-card outcome-card">
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
