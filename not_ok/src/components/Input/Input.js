import React, {useState, useEffect} from "react";

import styles from "./Input.module.css";


function Input({handleClick, text, setText}) {
    

    return (
        <div className={styles.input_section}> 
            <label htmlFor="idea" className={styles.label_ideasinput}>...or offer some!</label>

            <input className={styles.idea_input} type="text" id="idea" maxLength="80" value={text} onChange={(e) => {setText(e.target.value)}} />

            <button className={styles.idea_btn} onClick={() => handleClick(text)}>Add Me</button>
        </div>
    )
}


export default Input;