import React, {useState, useEffect} from "react";

import quotePicStyles from "./QuotePic.module.css";

//need function to render image which is from a fetch request to unsplash API 
//need to display quote from fetch request to quotes API
    //will need state for both things?  and use effect to get on render
function QuotePic() {
    // const [picState, setPicState] = useState([]);
    const [quoteState, setQuoteState] = useState([]);

    
    useEffect(() => {
        fetchQuote();
    }, [])

    const fetchQuote = async () => {
        const response = await fetch("http://localhost:3001/quote");
        const data = await response.json();
        console.log(data);
        setQuoteState(data[0].q);
    };

    //console.log(quoteState);

    // useEffect(() => {
    //     fetchPic();
    // }, [])

    // const fetchPic = async () => {
    //     const response = await fetch("http://localhost:3000/resources/CSS");
    //     const data = await response.json();
    //     //console.log(data);
    //     setPicState(data.payload);
    // };

    return (
        <>
            {/* <img className="landscape">{picState}</img> */}
            <p style={quotePicStyles}>{quoteState}</p>
        </>
    )
}


export default QuotePic;