import styles from "./ContactCard.module.css";

function ContactCard({contacts}) {
   
    return (
        contacts.map((item)=>{
            return (
            <div className={styles.container}>
                <div className={styles.imagecontainer}>
                    <img src={`${item.logo}`} alt="logo" />
                </div>
                <div className={styles.toolcontent}>
                    <div className={styles.tool_title}>
                        <h3 className={styles.toolh3}>{item.name}</h3>
                    </div>
                    <div className="tool-body">
                        <p className={styles.toolp}><i>About: </i>{item.info}</p>
                        <a className={styles.link} href={item.contact} target="_blank" rel="noreferrer">
                            Get in contact
                        </a>
                    </div>
                </div>
            </div>
            )
        }
    )
    )
};

export default ContactCard;