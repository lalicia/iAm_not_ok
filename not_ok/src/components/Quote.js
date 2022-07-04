import React, {useState, useEffect} from "react";

//import quoteStyles from "./Quote.module.css";

//need function to render image which is from a fetch request to unsplash API 
//need to display quote from fetch request to quotes API
    //will need state for both things?  and use effect to get on render
function Quote() {
    // const [picState, setPicState] = useState([]);
    const [quoteState, setQuoteState] = useState([]);
    const [authorState, setAuthorState] = useState([])

    
    useEffect(() => {
        fetchQuote();
    }, [])

    const fetchQuote = async () => {
        const response = await fetch("http://localhost:3001/quote");
        const data = await response.json();
        console.log(data);
        setQuoteState(data[0].q);
        setAuthorState(data[0].a);
    };

    //console.log(quoteState);

    return (
        <>
            <p className="quote">{quoteState}<br />{`- ${authorState}`}</p>
        </>
    )
}


export default Quote;