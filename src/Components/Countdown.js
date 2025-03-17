import React, { useState, useEffect } from "react";
import "./Product.css";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(10); //start

  useEffect(() => {
    if (timeLeft <= 0) {
      setTimeLeft(10); //reset
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="countdown-container">
      <h2>Countdown: {timeLeft}s </h2>
    </div>
  );
};

export default Countdown;
