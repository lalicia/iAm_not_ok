import {query} from "../index.js";

const dropIt = `DROP TABLE IF EXISTS rightnow_contacts;`;

await query(dropIt);