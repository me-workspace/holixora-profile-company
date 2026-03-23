export default function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="section-intro">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {text ? <p className="lead muted">{text}</p> : null}
    </div>
  );
}
