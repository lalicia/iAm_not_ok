import React from "react";
import navStyles from "./NavSideBar.module.css";


//create NavSideBar function that renders the navigation bar for the side of some of the pages 
function NavSideBar() {
    return (
        <div className={navStyles.side}>
            <a href="/write-out">I'd like to get something out</a>
            <a href="/happy-dose">I'd like a little dose of happiness</a>
            <a href="/tools">I'd like some suggestions for tools to help me deal with how I'm feeling</a>
            <a href="/right-now-contacts">I think I need more help and might need to speak to someone right now</a>
        </div>
    )
}


export default NavSideBar;