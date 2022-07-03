import React from "react";

//import for React Router to allow page transitions
import {useNavigate} from "react-router-dom";

//imports for images

import homeStyles from "./HomePage.module.css";
import NavSideBar from "../components/NavSideBar";


//function uses navigate hook to move pages; buttons call the function, each button set to corresponding image in assets folder
function HomePage() {
    //this might not be used here?  May need to move to NavSideBar which has the options for moving pages...
    let navigate = useNavigate();
    // style={{backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"contain",width:"100%"}}

    return (
        <div id="main">
            <header><h1>iAm != "ok"</h1></header>
                <h2>I'm sorry you're not ok.  Hopefully something here can help or make you feel better.</h2>
           <h3>What would you like to give a go?</h3>
           <NavSideBar />
        </div>
    )
}

export default HomePage;