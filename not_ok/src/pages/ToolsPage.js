import React, {useState, useEffect} from "react";

//imports for images
// import happyfeeds from "../assets/happydose_meme.JPG";


import styles from "./ToolsPage.module.css";
import ToolCard from "../components/ToolCard/ToolCard.js";


function ToolsPage() {
    const [tools, setTools] = useState([]);

    //request to backend for tools
    async function fetchTools(){
        let res= await fetch('http://localhost:3001/tools')
        let data = await res.json()
        console.log(data.payload)
        setTools(data.payload)
        }
        
        //calls on page render
        useEffect(()=>{
          fetchTools()
        },[])
        

    return (
        <div className={styles.container}>
            <header><h1><a href="/">iAm != "ok"</a></h1></header>
                <h2>These are some tools that might help you deal with how you're feeling.<br></br>The suggestions range from books, to apps, to music, and more.</h2>
                
                <div className={styles.dose_selection}>
                <ToolCard tools={tools}/>

            </div>        
    
        </div>
    )
}

export default ToolsPage;