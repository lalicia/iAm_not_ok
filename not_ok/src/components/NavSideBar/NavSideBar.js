import React from "react";

import styles from "./NavSideBar.module.css";

//create NavSideBar function that renders the navigation bar for the side of some of the pages
function NavSideBar() {
  return (
    <div className={styles.navbar}>
        <div className={styles.navlist}>
            <li className={styles.navlistitem}><a href="/writeout" className={styles.navlink}>I'd like to get something out</a></li>
            <li className={styles.navlistitem}><a href="/happydose" className={styles.navlink}>I'd like a little dose of happiness</a></li>
            <li className={styles.navlistitem}><a href="/tools" className={styles.navlink}>
                I'd like some suggestions for tools to help me deal with how I'm feeling
            </a></li>
            <li className={styles.navlistitem}><a href="/rightnowcontacts" className={styles.navlink}>
                I think I need more help and might need to speak to someone right now
            </a></li>
        </div>
    </div>
  );
}

export default NavSideBar;
