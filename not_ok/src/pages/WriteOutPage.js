import React from "react";

//import for React Router to allow page transitions
import {useNavigate} from "react-router-dom";

import styles from "./WriteOutPage.module.css";
import WriteOutInput from "../components/WriteOutInput/WriteOutInput";

//imports for images


//function uses navigate hook to move pages; buttons call the function, each button set to corresponding image in assets folder
function WriteOutPage() {
    //for moving back to HomePage
    let navigate = useNavigate();
    // style={{backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"contain",width:"100%"}}

    return (
        <div className={styles.container}>
            {/* <div className={styles.headerbck}> */}
                <header><h1><a href="/">iAm != "ok"</a></h1></header>
            {/* </div> */}
            <h2>Here's a space for you to write-out whatever's bothering you...<br />and then let it go.</h2>
            <div className={styles.writeout_all}>
                <div className={styles.writeout_explanation}>
                    <h3 className={styles.writeouth3}>Based on an idea used by therapists and spiritualists (it's true - you can google it!), the idea is that you get out - write down - whatever it is that's bothering you, and then you let it go by destroying it.<br /> <br />
                    Some people burn it, some people tear it up - but since computers are expensive we wouldn't recommend that here.<br /><br />Instead, once you're ready, click the Release button.</h3>
                </div>
                {/* <div className={styles.writeout_content}> */}
                    <WriteOutInput />
                {/* </div> */}
            </div>
            <div className={styles.bckbtndiv}>
                <h3 className={styles.bckbtn}><a href="/">/*home*/</a></h3>
            </div>
        </div>
    )
}

export default WriteOutPage;