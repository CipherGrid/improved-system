export default function SkillScore({ name, score }) {
  return (
    <div className="skill">
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-score">{score} / 9</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${(score / 9) * 100}%` }}
        />
      </div>
    </div>
  );
}
