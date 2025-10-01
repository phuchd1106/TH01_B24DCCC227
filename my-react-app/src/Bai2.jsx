import { useState, useEffect } from "react";
import "./Bai2.css";

function Bai2() {
  const [currentLight, setCurrentLight] = useState(0); // 0: Đỏ, 1: Vàng, 2: Xanh
  const [isRunning, setIsRunning] = useState(false);

  const lights = ["red", "yellow", "green"];
  const lightNames = ["Đỏ", "Vàng", "Xanh"];

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCurrentLight((prev) => (prev + 1) % 3); // Chu kỳ: 0 -> 1 -> 2 -> 0
      }, 2000); // 2 giây
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]);

  const handleToggle = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div className="traffic-light-container">
      <h2>Đèn giao thông</h2>

      <div className="traffic-light">
        {lights.map((color, index) => (
          <div
            key={color}
            className={`light ${color} ${
              currentLight === index ? "active" : ""
            }`}
          />
        ))}
      </div>

      <div className="current-light">
        Đèn hiện tại:{" "}
        <span className={`light-text ${lights[currentLight]}`}>
          {lightNames[currentLight]}
        </span>
      </div>

      <button className="toggle-button" onClick={handleToggle}>
        {isRunning ? "Dừng" : "Chuyển đèn"}
      </button>
    </div>
  );
}

export default Bai2;
