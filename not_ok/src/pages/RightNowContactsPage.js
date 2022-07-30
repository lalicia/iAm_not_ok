import React, {useState, useEffect} from "react";
import ContactCard from "../components/ContactCard/ContactCard";

//imports for images
// import happyfeeds from "../assets/happydose_meme.JPG";


import styles from "./RightNowContactsPage.module.css";
//import ToolCard from "../components/ToolCard/ToolCard.js";


function RightNowContactsPage() {
    // const [tools, setTools] = useState([]);

    // //request to backend for tools
    // async function fetchTools(){
    //     let res= await fetch('http://localhost:3001/tools')
    //     let data = await res.json()
    //     console.log(data.payload)
    //     setTools(data.payload)
    //     }
        
    //     //calls on page render
    //     useEffect(()=>{
    //       fetchTools()
    //     },[])
        

    return (
        <div className={styles.container}>
            <header><h1><a href="/">iAm != "ok"</a></h1></header>
                <h2>Getting help is smart and brave.<br></br>Please see if someone here could help you, and if not, please reach out and look for other resources.<br></br>You matter. </h2>
                
                <div className={styles.tool_selection}>
                    <ContactCard />
                </div>        
    
        </div>
    )
}

export default RightNowContactsPage;