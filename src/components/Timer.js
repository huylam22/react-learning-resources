import React, { useEffect, useState } from "react";

// ****** CLEAN UP FUNCTION
const Timer = () => {
  const [message, setMessage] = useState("Huy Lam");
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(message);
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [message]);
  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
};

export default Timer;
