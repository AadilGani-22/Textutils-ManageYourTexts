import React from "react";
import { useState } from "react";

function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was Clickked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase" , "success")
  };
  const handleLoClick = () => {
    // console.log("Lowercase was Clickked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase" , "success")
  };
  
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("ExtraSpace Handled" , "success")
  }
  const handleClearClick = () => {
    // console.log("Lowercase was Clickked " + text);
    let newText = ""
    setText(newText);
    props.showAlert("Cleared EveryThing" , "success")
  };
  const handleCopy = () => {
    // let text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("EveryThing is Copied" , "success")
  }
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //   setText("aksjdflsad"); correct way to change state
  // text = "asjdf" // Wrong way to set text
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            onChange={handleOnChange}
            rows="8"
            style={{ backgroundColor: props.mode === 'light' ? 'white' : '#515151e0', color: props.mode === 'dark' ? 'white' : 'black' }}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert To LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>
          Handle Extra Space
        </button>
      </div>
      <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preveiw"}</p>
      </div>
    </>
  );
}
export default TextForm;