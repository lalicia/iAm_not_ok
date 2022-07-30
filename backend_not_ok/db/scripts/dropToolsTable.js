import {query} from "../index.js";

const dropIt = `DROP TABLE IF EXISTS tool_suggestions;`;

await query(dropIt);