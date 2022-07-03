import {query} from "../db/index.js";

//GET quote from quotes API
export async function getQuote() {
    const result = await fetch("https://zenquotes.io/api/random");
    console.log(result);
    // return result.rows;
};
