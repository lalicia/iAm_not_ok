import toolsData from "../../libs/toolsData.js";
import {query} from "../index.js";

for (let i = 0; i < toolsData.length; i++) {
    await query(`INSERT INTO tool_suggestions (name, type, description, link, imageUrl)
    VALUES ($1, $2, $3, $4, $5);`,[
       toolsData[i].name,
       toolsData[i].type,
       toolsData[i].description,
       toolsData[i].link,
       toolsData[i].imageUrl
    ])
}
