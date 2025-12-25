import { useEffect, useState } from "react";
import ScoreSummary from "../components/ScoreSummary";
import Feedback from "../components/Feedback";

export default function Report() {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/report")
      .then((res) => res.json())
      .then((data) => {
        setReport(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
        <p>Loading report...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">Student Speaking Assessment Report</h1>

      <ScoreSummary data={report} />
      <Feedback score={report.overallScore} />
    </div>
  );
}
