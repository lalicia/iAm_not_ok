//may not need state, not sure yet
import React, {useState} from "react";

import styles from "./WriteOutInput.module.css";

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

        //delays the state changing so that it's like the words blend into the background, but they DO disappear slightly after transition 
        setTimeout(() => {
            setInputValue("");
        }, 1200);

        //change the state again to set the box back to the beginning setting, so could be reused but also just to show text is gone not hidden and also looks ace haha
        setTimeout(() => {
            setEmpty(prev => !prev);
        }, 1750);
    };

    return (
        <div className={styles.writeout_section}>
            <textarea className={isEmpty ? `${styles.emptywriteout}` : `${styles.writeout}`} value={inputValue} onChange={handleUserInput} spellcheck="false">
            </textarea>
            <button className={styles.writeout_btn} onClick={resetInputField}>Release</button>
        </div>
    )
}


export default WriteOutInput;