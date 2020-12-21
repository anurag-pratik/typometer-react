import React from "react";
import "./DisplayedText.css"

function DisplayedText(props) {
  const text = props.displayText.split('');

  return (
    <div className="textDisp">
      {text.map((letter, i) => {
        let clr;
        if (i < props.userInput.length) {
          if (letter === props.userInput[i]) clr = "#388e3c";
          else clr = "#d32f2f";
        }
        return (
          <span className="unsText" unselectable="on" key={i} style={{ backgroundColor: clr }}>
            {letter}
          </span>
        );
      })
      }
    </div>
  );
}

export default DisplayedText;
