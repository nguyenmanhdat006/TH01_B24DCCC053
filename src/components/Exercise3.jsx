import { useState } from "react";
import ColorBox from "../components/ColorBox";

const Exercise3 = () => {
  const colors = ["red", "green", "blue", "yellow"];
  const [index, setIndex] = useState(0);

  const changeColor = () => {
    setIndex((prev) => (prev + 1) % colors.length);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Bài 3: Ứng dụng đổi màu nền</h1>
      <ColorBox color={colors[index]} />
      <button onClick={changeColor}>Đổi màu</button>
    </div>
  );
};

export default Exercise3;
