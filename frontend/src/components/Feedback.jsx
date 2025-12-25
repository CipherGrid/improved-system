export default function Feedback({ score }) {
  let message = "";

  if (score >= 8) {
    message = "Excellent performance with strong control.";
  } else if (score >= 6) {
    message = "Good performance with minor inaccuracies.";
  } else {
    message = "Needs improvement.";
  }

  return (
    <div className="card feedback-card">
      <h2 className="section-title">Descriptive Feedback</h2>
      <p className="feedback-text">{message}</p>
    </div>
  );
}
