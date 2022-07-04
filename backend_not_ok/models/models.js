import {query} from "../db/index.js";
import fetch from "node-fetch";
import { response } from "express";

//GET quote from quotes API
export async function getQuote() {
    const result = await fetch("https://zenquotes.io/api/random");
    const data = await result.json();
    console.log(data);
    //return data;
    //result.json(data);
};
