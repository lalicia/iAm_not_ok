import contactsData from "../../libs/contactsData.js";
import {query} from "../index.js";

for (let i = 0; i < contactsData.length; i++) {
    await query(`INSERT INTO rightnow_contacts (name, info, contact, logo)
    VALUES ($1, $2, $3, $4);`,[
       contactsData[i].name,
       contactsData[i].info,
       contactsData[i].contact,
       contactsData[i].logo
    ])
}
