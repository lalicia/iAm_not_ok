//needed to speak to the database - what we're importing handles communication; takes in SQL string and executes
import {query} from "../index.js";

//the dose_id is best practice
const createTableString = `CREATE TABLE IF NOT EXISTS dose_suggestions (
    dose_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    dose TEXT
);`

await query(createTableString);
