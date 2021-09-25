import "./timeBox.css";

const TimeBox = ({ time, children }) => {
  return (
    <div className="timeBox">
      <h2>{time < 10 ? "0" + time : time}</h2>
      <span>{children}</span>
    </div>
  );
};

export default TimeBox;
