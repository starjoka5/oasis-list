import React, { useEffect, useState } from "react";
import { format } from "date-fns";
export default function Timer() {
  const [time, setTime] = useState(() => {
    return format(new Date(), "HH:mm aa");
  });
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(format(new Date(), "HH:mm aa"));
    }, 30 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);
  return <div className="mr-10">{time}</div>;
}
