import React from "react";

//import for React Router to allow page transitions
import {useNavigate} from "react-router-dom";

//imports for images
// import happyfeeds from "../assets/happydose_meme.JPG";


import styles from "./FunnyFeedsPage.module.css";
import Feed from "../components/Feed/Feed.js";


function FunnyFeedsPage() {
    //this might not be used here?  May need to move to NavSideBar which has the options for moving pages...
    let navigate = useNavigate();


    return (
        <div className={styles.container}>
            <header className={styles.ff_header}><h1 className={styles.ff_h1}><a href="/">iAm != "ok"</a></h1></header>
            <h3 className={styles.h3_back}><a href="/happydose">(or go back a step)</a></h3>
                <h2>Some feeds for you to checkout</h2>
            
            <div className={styles.allfeeds}>
                <div className={styles.progfeed}>
                    <h3 className={styles.h3feed}><a href="https://reddit.com/r/ProgrammerHumor" target="_blank" rel="noreferrer">reddit.com/r/ProgrammerHumor</a></h3>
                    <Feed url="https://api.reddit.com/r/ProgrammerHumor.json"/>
                </div>

                <div className={styles.sylabfeed}>
                    <h3 className={styles.h3feed}><a href="https://reddit.com/r/FunnyAnimals" target="_blank" rel="noreferrer">reddit.com/r/FunnyAnimals</a></h3>
                    <Feed url="https://api.reddit.com/r/FunnyAnimals.json"/>
                </div>

                <div className={styles.historyfeed}>
                    <h3 className={styles.h3feed}><a href="https://reddit.com/r/lotrmemes" target="_blank" rel="noreferrer">reddit.com/r/lotrmemes</a></h3>
                    <Feed url="https://api.reddit.com/r/lotrmemes.json"/>
                </div>

            </div>
        </div>
    )
}

export default FunnyFeedsPage;