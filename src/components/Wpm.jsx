import React from "react";
import "./Wpm.css";
import SpeedIcon from '@material-ui/icons/Speed';
import TimerIcon from '@material-ui/icons/Timer';

function Wpm(props) {
  if (props.characters !== 0 && props.secs !== 0) {
    const no = props.characters / 5;
    const time = props.secs / 60;
    const wpm = no / time;
    return (
      <div className="stats">
        <div className="speed"><SpeedIcon /> {Math.floor(wpm)} words/min</div>
        <div className="time"><TimerIcon /> {time * 60} seconds</div>
      </div>
    );
  }
  return null;
}
export default Wpm;
