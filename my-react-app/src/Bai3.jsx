import { useState } from "react";
import "./Bai3.css";

function Bai3() {
  const [jobs, setJobs] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddJob = () => {
    if (inputValue.trim() !== "") {
      const newJob = {
        id: Date.now(),
        text: inputValue.trim(),
      };
      setJobs([...jobs, newJob]);
      setInputValue("");
    }
  };

  const handleDeleteJob = (jobId) => {
    setJobs(jobs.filter((job) => job.id !== jobId));
  };

  return (
    <div className="todo-container">
      <h2>Danh sách công việc</h2>

      <div className="input-section">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Nhập công việc..."
          className="job-input"
        />
        <button onClick={handleAddJob} className="add-button">
          Thêm
        </button>
      </div>

      <div className="job-list">
        {jobs.map((job) => (
          <div key={job.id} className="job-item">
            <span className="job-text">{job.text}</span>
            <button
              onClick={() => handleDeleteJob(job.id)}
              className="delete-button"
            >
              Xóa
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bai3;
