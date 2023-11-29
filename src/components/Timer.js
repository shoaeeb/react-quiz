import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const minutes = Math.trunc(secondsRemaining / 60);
  const seconds = Math.trunc(secondsRemaining % 60);
  useEffect(
    function () {
      const timer = setInterval(() => dispatch({ type: "tick" }), 1000);
      return () => clearInterval(timer);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {minutes.toString().padStart(2, 0)}:{seconds.toString().padStart(2, 0)}
    </div>
  );
}

export default Timer;
