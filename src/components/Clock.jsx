import { useState, useEffect } from "react";
import ClockDisplay from "./ClockDisplay";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1>Bài 5: Đồng hồ</h1>
      <ClockDisplay time={time} />
    </div>
  );
};

export default Clock;
