import {query} from "../db/index.js";
import fetch from "node-fetch";
import {response} from "express";

//GET quote from quotes API
export async function getQuote() {
    const result = await fetch("https://zenquotes.io/api/random");
    const data = await result.json();
    //console.log(data);
    return data;
    //res.json(data);
};

//GET doses from dose_suggestions table on Heroku
export async function getDoses() {
    // console.log('i have been called to get the doses') -this was working :)
    const result = await query(`SELECT * FROM dose_suggestions;`);
    // console.log(`this is the result :`, result);

    const doses = result.rows;
    return doses;
};

//POST new idea to dose_suggestions table on Heroku
export async function postIdea(info) {
    const res = await query(`INSERT INTO dose_suggestions (dose)
    VALUES ($1) RETURNING *;`, [info.dose])
    
    const newIdea = res.rows;
    return newIdea;
}

//GET tools from tool_suggestions table on Heroku
export async function getTools() {
    // console.log('i have been called to get the doses') -this was working :)
    const result = await query(`SELECT * FROM tool_suggestions;`);
    // console.log(`this is the result :`, result);

    const tools = result.rows;
    return tools;
};

//GET contacts from rightnow_contacts table on Heroku
export async function getContacts() {
    // console.log('i have been called to get the doses') -this was working :)
    const result = await query(`SELECT * FROM rightnow_contacts;`);
    // console.log(`this is the result :`, result);

    const contacts = result.rows;
    return contacts;
};