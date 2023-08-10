"use client";

import { useState, useEffect } from "react";
import React from "react";

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const deadline = "November, 29, 2022";
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };
  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer-container">
      {days >= 1 && (
        <p className="timer-wrapper">
          {days}
          <span> {days > 2 ? "days" : "day"}</span>
        </p>
      )}

      {hours >= 1 && (
        <p className="timer-wrapper">
          {hours}

          {hours && <span> {hours === 1 ? "hour" : "hours"}</span>}
        </p>
      )}
      {minutes >= 1 && (
        <p className="timer-wrapper">
          {minutes}
          {minutes && <span> {minutes === 0 ? "" : "min"}</span>}
        </p>
      )}
      {seconds >= 1 && (
        <p className="timer-wrapper">
          {seconds}
          <span> sec</span>
        </p>
      )}
    </div>
  );
};

export default Timer;
