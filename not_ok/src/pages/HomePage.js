import React from "react";

//import for React Router to allow page transitions
import {useNavigate} from "react-router-dom";

//imports for images

import styles from "./HomePage.module.css";
import NavSideBar from "../components/NavSideBar/NavSideBar";
import Quote from "../components/Quote/Quote";
// import QuotePic from "../components/QuotePic";


//function uses navigate hook to move pages; buttons call the function, each button set to corresponding image in assets folder
function HomePage() {
    //this might not be used here?  May need to move to NavSideBar which has the options for moving pages...
    let navigate = useNavigate();
    // style={{backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"contain",width:"100%"}}

    return (
        <div className={styles.container}>
            <header><h1><a href="/">iAm != "ok"</a></h1></header>
                <h2>I'm sorry you're not ok.  Hopefully something here can help or make you feel better.</h2>
            {/* <h3>What would you like to give a go?</h3> */}
            
            <div className={styles.content}>
                <NavSideBar />
                <div className={styles.quote_container}>
                    <Quote />
                </div>
            </div>
        </div>
    )
}

export default HomePage;