import React, {useState, useEffect} from "react";

import styles from "./Input.module.css";


function Input() {
    // const [picState, setPicState] = useState([]);
    // const [quoteState, setQuoteState] = useState([]);
    // const [authorState, setAuthorState] = useState([])

    
    // useEffect(() => {
    //     fetchQuote();
    // }, [])

    // const fetchQuote = async () => {
    //     const response = await fetch("http://localhost:3001/quote");
    //     const data = await response.json();
    //     console.log(data);
    //     setQuoteState(data[0].q);
    //     setAuthorState(data[0].a);
    // };

    //console.log(quoteState);

    return (
        <div className={styles.input_section}> 
            <label htmlFor="idea" className={styles.label_ideasinput}>...or offer some!</label>
            <input className={styles.idea_input} type="text" id="idea" maxLength="80"></input>
        </div>
    )
}


export default Input;