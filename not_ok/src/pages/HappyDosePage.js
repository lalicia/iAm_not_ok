import React from "react";

//import for React Router to allow page transitions
import {useNavigate} from "react-router-dom";

//imports for images
import happyfeeds from "../assets/happydose_meme.JPG";
import happycats from "../assets/happydose_cat.jpg";
import happymedia from "../assets/happydose_media.JPG";

import styles from "./HappyDosePage.module.css";
import NavSideBar from "../components/NavSideBar/NavSideBar";
import Card from "../components/Card/Card.js";


//function uses navigate hook to move pages; buttons call the function, each button set to corresponding image in assets folder
function HappyDosePage() {
    //this might not be used here?  May need to move to NavSideBar which has the options for moving pages...
    let navigate = useNavigate();
    // style={{backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"contain",width:"100%"}}

    return (
        <div className={styles.container}>
            <header><h1><a href="/">iAm != "ok"</a></h1></header>
                <h2>Ok, so what sounds like your idea of happy?</h2>
            
            <div className={styles.hd_content}>
                <NavSideBar />

                <div className={styles.dose_selection}>
                    <Card 
                        title="Amusing Feeds" 
                        imageUrl={happyfeeds} 
                        body="Let's checkout some funny feeds - memes, gifs - gimme what you got"
                        page="/happydose/funnyfeeds"
                    />
                    <Card 
                        title="Cats Cats Cats" 
                        imageUrl={happycats} 
                        body="I want to use the internet for its true purpose - cats please"
                        page="/happydose/catpicgenerator"
                    />
                    <Card 
                        title="Music, Movies, and More" 
                        imageUrl={happymedia} 
                        body="Let's see some ideas from other people - maybe add one too :)"
                        page="/happydose/ideas"
                    />

                </div>
            </div>
            
        </div>
    )
}

export default HappyDosePage;