import React, {useState, useEffect} from "react";
import ContactCard from "../components/ContactCard/ContactCard";

import styles from "./RightNowContactsPage.module.css";


function RightNowContactsPage() {
    const [contacts, setContacts] = useState([]);

    //request to backend for tools
    async function fetchContacts(){
        let res= await fetch(`${process.env.REACT_APP_BACKEND}rightnowcontacts`)
        let data = await res.json()
        console.log(data.payload)
        setContacts(data.payload)
        }
        
        //calls on page render
        useEffect(()=>{
          fetchContacts()
        },[])
        

    return (
        <div className={styles.container}>
            <header><h1><a href="/">iAm != "ok"</a></h1></header>
                <h2>Getting help is smart and brave.<br></br>Please see if one of these organisations could help you, and if not, please reach out and look for other resources.<br></br>You matter.</h2>
                
                <div className={styles.tool_selection}>
                    <ContactCard contacts={contacts}/>
                </div>        
    
        </div>
    )
}

export default RightNowContactsPage;