import { useState } from "react";
import "./Bai1.css";

function Bai1() {
  const [text, setText] = useState("");
  const [isOverLimit, setIsOverLimit] = useState(false);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    if (inputText.length > 100) {
      setIsOverLimit(true);
    } else {
      setIsOverLimit(false);
    }
  };
  return (
    <div className="text-counter">
      <h2>Bộ đếm ký tự</h2>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Nhập văn bản..."
        className={`text-input ${isOverLimit ? "over-limit" : ""}`}
      />
      <div className={`counter ${isOverLimit ? "warning" : ""}`}>
        Số ký tự: {text.length}
      </div>
      {isOverLimit && (
        <div className="warning-message">
          Cảnh báo: Bạn đã vượt quá giới hạn 100 ký tự!
        </div>
      )}
    </div>
  );
}

export default Bai1;
