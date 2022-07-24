import {query} from "../index.js";

const dropIt = `DROP TABLE IF EXISTS dose_suggestions;`;

await query(dropIt);