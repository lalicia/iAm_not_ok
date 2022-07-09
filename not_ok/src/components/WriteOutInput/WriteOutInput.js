//may not need state, not sure yet
import React, {useState} from "react";

import "./WriteOutInput.modules.css";

//needs to render box that disappears
function WriteOutInput() {
    const [inputValue, setInputValue] = useState("");
    const [isEmpty, setEmpty] = useState(false);

    // Input Field handler
    const handleUserInput = (e) => {
        setInputValue(e.target.value);
    };

    // Reset Input Field handler
    const resetInputField = () => {
        setEmpty(prev => !prev);
        // setInputValue("");

        setTimeout(() => {
            setInputValue("");
        }, 2200);
    };
  
 
//think I might need to create a button component and have it target the input area like function onClick() { setWriting""; const box = TextBox; TextBox = {writing}}

    return (
        <>
            <textarea className={isEmpty ? "empty-writeout" : "write-out"} value={inputValue} onChange={handleUserInput} >
            </textarea>
            <button onClick={resetInputField}>Release</button>
        </>
    )
}


export default WriteOutInput;