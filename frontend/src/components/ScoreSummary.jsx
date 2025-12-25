import SkillScore from "./SkillScore";

export default function ScoreSummary({ data }) {
  return (
    <div className="card">
      <h2 className="section-title">Summary of Scores</h2>

      <div className="overall-score-box">
        <span className="overall-label">Overall Score</span>
        <span className="overall-score">
          {data.overallScore} <small>/ 9</small>
        </span>
      </div>

      <div className="skills">
        {Object.entries(data.skills).map(([skill, score]) => (
          <SkillScore key={skill} name={skill} score={score} />
        ))}
      </div>
    </div>
  );
}
