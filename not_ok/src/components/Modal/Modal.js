import React from "react";
import {useEffect} from "react";

import styles from "./Modal.module.css";

function Modal({setModal}) {

    // useEffect{

    // }

    return (
        <div className={styles.modal_bg}>
        <div className={styles.modal_container}>
            <div className={styles.xbtn}>
                <button onClick={() => setModal(false)}> X </button>
            </div>
            <div className={styles.title}>
                <h3 className={styles.modal_title}>Just a heads up...</h3>
            </div>
            <div className={styles.body}>
                <p>...this feature will let you add an idea, but it won't save after you leave as the post request has been disabled :)</p>
            </div>
            <div className={styles.closebtn}>
                <button onClick={() => setModal(false)}>Ok Thanks</button>
            </div>
        </div>
    </div>
    )
}

export default Modal;