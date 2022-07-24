import doseData from "../../libs/data.js";
import {query} from "../index.js";

for (let i = 0; i < doseData.length; i++) {
    await query(`INSERT INTO dose_suggestions (dose)
    VALUES ($1);`,[
       doseData[i].dose
    ])
}
