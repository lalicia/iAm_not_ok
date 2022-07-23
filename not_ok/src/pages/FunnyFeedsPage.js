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
            <header><h1><a href="/">iAm != "ok"</a></h1></header>
                <h2>Some feeds for you to checkout</h2>
            
            <div className={styles.allfeeds}>
                <div className={styles.progfeed}>
                    <Feed url="https://api.reddit.com/r/ProgrammerHumor.json"/>
                </div>

                <div className={styles.sylabfeed}>
                    <Feed url="https://api.reddit.com/r/sylab.json"/>
                </div>

                <div className={styles.historyfeed}>
                    <Feed url="https://api.reddit.com/r/lotrmemes.json"/>
                </div>

            </div>
        </div>
    )
}

export default FunnyFeedsPage;