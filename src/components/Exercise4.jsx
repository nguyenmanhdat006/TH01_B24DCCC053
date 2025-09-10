import { useState } from "react";

const StudentCard = ({ name, age, className }) => {
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => {
    setShowDetail((prev) => !prev);
  };

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>{name}</h3>
      <button onClick={toggleDetail}>
        {showDetail ? "Ẩn chi tiết" : "Hiện chi tiết"}
      </button>
      {showDetail && (
        <p>
          Tuổi: {age} - Lớp: {className}
        </p>
      )}
    </div>
  );
};

export default StudentCard;
