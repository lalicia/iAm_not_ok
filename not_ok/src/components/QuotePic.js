import React, {useState, useEffect} from "react";



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
        //setQuoteState(data.payload);
    };

    // useEffect(() => {
    //     fetchPic();
    // }, [])

    // const fetchPic = async () => {
    //     const response = await fetch("http://localhost:3000/resources/CSS");
    //     const data = await response.json();
    //     //console.log(data);
    //     setPicState(data.payload);
    // };

    // useEffect(
    //     function () {
    //         const fetchQuote = async function () {
    //         const response = await fetch(
    //             `https://zenquotes.io/random`
    //         );
    //         const data = await response.json();
    //         console.log(data)
    //         setQuoteState(data);
    //         };
    
    //         fetchQuote();
    //     },
    //     []
    // )

    return (
        <>
            {/* <img className="landscape">{picState}</img> */}
            <h2>{quoteState}</h2>
        </>
    )
}


export default QuotePic;