import React from "react";
import "./GameBox.css";
import "./TextDisplay.css";
import DisplayedText from "./DisplayedText";
import "./InputBox.css";
import displayTexts from "../displayTexts";
import Wpm from "./Wpm";

function GameBox() {
  const [text, setText] = React.useState(getText());
  const [inputText, setInputText] = React.useState([]);
  const [chars, setChars] = React.useState(0);
  const [sec, setSec] = React.useState(0);
  const [start, setStart] = React.useState(false);
  const [finish, setFinish] = React.useState(false);
  const countRef = React.useRef(null);

  function getText(){
    return displayTexts[Math.floor((Math.random()*displayTexts.length))];
  }


  function clickHandler() {
    setText(getText());
    setInputText([]);
    setChars(0);
    setSec(0);
    setStart(false);
    setFinish(false);
  }

  function ChangeHandler(event) {
    var inp = event.target.value;
    setInputText(inp);
    onDone(inp);
    countWords(inp);
    setClock();
  }

  function countWords(inputText) {
    const txt = text.replace(" ", "");
    setChars(() => {
      return inputText
        .replace(" ", "")
        .split("")
        .filter((car, ind) => car === txt[ind]).length;
    });
  }

  function setClock() {
    if (!start) {
      setStart(true);
      countRef.current = setInterval(() => {
        setSec((prevValue) => {
          return prevValue + 1;
        });
      }, 1000);
    }
  }

  function onDone(inp) {
    if (inp === text) {
      clearInterval(countRef.current);
      setFinish(true);
    }
  }

  return (
    <div className="GameBox">
      <div className="textDisplay">
        <DisplayedText displayText={text} userInput={inputText} />
      </div>
      <div className="InputTextDiv">
        <textarea
          placeholder="Type the above paragraph here..."
          autoFocus="true"
          className="InputTextBox"
          spellCheck="false"
          onChange={ChangeHandler}
          value={inputText}
          name="inputText"
          readOnly={finish}
        ></textarea>
        <br />
        <Wpm secs={sec} characters={chars} />
        <button
          onClick={clickHandler}
          type="button"
          class="btn btn-outline-light restartBtn"
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default GameBox;
