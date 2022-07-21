import React, {useState, useEffect} from "react";

import styles from "./Card.module.css";

function Card({title, imageUrl, body}) {
   


    return (
        <>
            <div className={styles.container}>
                <div className={styles.imagecontainer}>
                    <img src={imageUrl} alt="" />
                </div>
                <div className={styles.cardcontent}>
                    <div className={styles.cardtitle}>
                        <h3 className={styles.cardh3}>{title}</h3>
                    </div>
                    <div className="card-body">
                        <p className={styles.cardp}>{body}</p>
                    </div>
                </div>

                <div className={styles.cardbutton}>
                    <button>
                        <a className={styles.happy}>
                            This sounds good
                        </a>
                    </button>
                </div>
            </div>
        </>
    )
}


export default Card;