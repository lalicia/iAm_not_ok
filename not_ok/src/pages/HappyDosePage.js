import React from "react";

//import for React Router to allow page transitions
import {useNavigate} from "react-router-dom";

//imports for images

import styles from "./HappyDosePage.module.css";
import NavSideBar from "../components/NavSideBar/NavSideBar";


//function uses navigate hook to move pages; buttons call the function, each button set to corresponding image in assets folder
function HappyDosePage() {
    //this might not be used here?  May need to move to NavSideBar which has the options for moving pages...
    let navigate = useNavigate();
    // style={{backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"contain",width:"100%"}}

    return (
        <div className={styles.container}>
            <header><h1><a href="/">iAm != "ok"</a></h1></header>
                <h2>Ok, so what sounds like your idea of happy?</h2>
            <NavSideBar />

            <div className="happydose-selection">
            

            </div>
            
        </div>
    )
}

export default HappyDosePage;