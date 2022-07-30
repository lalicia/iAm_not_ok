//needed to speak to the database - what we're importing handles communication; takes in SQL string and executes
import {query} from "../index.js";

//the tool_id is best practice
const createTableString = `CREATE TABLE IF NOT EXISTS tool_suggestions (
    tool_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT,
    type TEXT,
    description TEXT,
    link TEXT,
    imageUrl TEXT
);`

await query(createTableString);
