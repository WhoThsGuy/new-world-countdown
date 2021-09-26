import { useEffect, useState, memo } from "react";
import "./app.css";

import TimeBox from "src/TimeBox";

const END_DATE = new Date("Sep 28, 2021 08:00:00 GMT+2").getTime();

const getTime = () => {
  const startDate = new Date().getTime();
  const diff = END_DATE - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

const Box = memo(({ time, children }) => (
  <TimeBox time={time}>{children}</TimeBox>
));

const App = () => {
  const [state, setState] = useState(getTime);

  useEffect(() => {
    let interval = setInterval(() => {
      setState(getTime);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="app">
      <Box time={state.days}>Days</Box>
      <Box time={state.hours}>Hours</Box>
      <Box time={state.minutes}>Minutes</Box>
      <Box time={state.seconds}>Seconds</Box>
    </div>
  );
};

export default App;
