import React from "react";

//import for React Router to allow page transitions
import {useNavigate} from "react-router-dom";

//imports for images

//import homeStyles from "./HomePage.module.css"; //this looks like not being used, but if removed the whole page disappears and nothing shows up
import NavSideBar from "../components/NavSideBar";
import Quote from "../components/Quote";
import QuotePic from "../components/QuotePic";


//function uses navigate hook to move pages; buttons call the function, each button set to corresponding image in assets folder
function HomePage() {
    //this might not be used here?  May need to move to NavSideBar which has the options for moving pages...
    let navigate = useNavigate();
    // style={{backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"contain",width:"100%"}}

    return (
        <div id="main">
            <header><h1>iAm != "ok"</h1></header>
                <h2>I'm sorry you're not ok.  Hopefully something here can help or make you feel better.</h2>
            {/* <h3>What would you like to give a go?</h3> */}
            <NavSideBar />
            <Quote />
            
        </div>
    )
}

export default HomePage;