import React from "react";

//import for React Router to allow page transitions
import {useNavigate} from "react-router-dom";

import "./WriteOutPage.modules.css";
import WriteOutInput from "../components/WriteOutInput/WriteOutInput";

//imports for images


//function uses navigate hook to move pages; buttons call the function, each button set to corresponding image in assets folder
function WriteOutPage() {
    //for moving back to HomePage
    let navigate = useNavigate();
    // style={{backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"contain",width:"100%"}}

    return (
        <div className="writeout-container">
            <header><h1>iAm != "ok"</h1></header>
            <h2>Here's a space for you to write-out whatever's bothering you...<br />and then let it go.</h2>
            <div className="writeout-all">
                <div className="writeout-explanation">
                    <h3>Based on an idea used by therapists and spiritualists (it's true - you can google it!), the idea is that you get out - write down - whatever it is that's bothering you, and then you let it go by destroying it.<br /> <br />
                    Some people burn it, some people tear it up - but since computers are expensive we wouldn't recommend that here.<br /><br />Instead, once you're ready, click the Release button.</h3>
                </div>
                <div className="writeout-content">
                    <WriteOutInput />
                </div>
            </div>
        </div>
    )
}

export default WriteOutPage;