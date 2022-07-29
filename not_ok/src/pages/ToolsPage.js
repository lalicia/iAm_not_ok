import React, {useState, useEffect} from "react";

//imports for images
// import happyfeeds from "../assets/happydose_meme.JPG";


import styles from "./ToolsPage.module.css";
import ToolCard from "../components/ToolCard/ToolCard.js";


function ToolsPage() {

    //request to backend for doses
    // async function fetchDoses(){
    //     let res= await fetch('http://localhost:3001/happydose/ideas')
    //     let data = await res.json()
    //     console.log(data.payload)
    //     setDoses(data.payload)
    //     }
        
    //     //calls on page render
    //     useEffect(()=>{
    //       fetchDoses()
    //     },[])
        

    return (
        <div className={styles.container}>
            <header><h1><a href="/">iAm != "ok"</a></h1></header>
                <h2>These are some tools that might help you deal with how you're feeling.<br></br>The suggestions range from books, to apps, to music, and more.</h2>
                
                <div className={styles.dose_selection}>
                <ToolCard 
                    name="Headspace" 
                    imageUrl="https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/265546887_10158521640749080_1788363244475602597_n.png?_nc_cat=111&ccb=1-7&_nc_sid=9267fe&_nc_ohc=onOF_tIfWygAX_1JV4e&_nc_ht=scontent-man2-1.xx&oh=00_AT9Rz0WECONz43DU5qoZhpJQnC2lmSizvjhtnLrxD2gWDQ&oe=62E889B6"
                    type="Mobile app, Netflix program, website"
                    description="Meditation and sleep made simple"
                    link="https://www.headspace.com/"
                />
                 <ToolCard 
                    title="Cats Cats Cats" 
                    imageUrl="" 
                    body="I want to use the internet for its true purpose - cats please"
                    page="/happydose/catpicgenerator"
                />
                 <ToolCard 
                    title="Music, Movies, and More" 
                    imageUrl="" 
                    body="Let's see some ideas from other people - maybe add one too :)"
                    page="/happydose/ideas"
                />

            </div>        
    
        </div>
    )
}

export default ToolsPage;