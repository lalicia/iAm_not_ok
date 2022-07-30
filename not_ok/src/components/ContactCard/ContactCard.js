import styles from "./ContactCard.module.css";

function ContactCard() {
   
    return (
        // contacts.map((item)=>{
        //     return (
            <div className={styles.container}>
                <div className={styles.imagecontainer}>
                    <img src="https://cdn.shopify.com/s/files/1/0029/2401/9758/files/samaritans-logo-500px.png?height=628&pad_color=fff&v=1648718481&width=1200" alt="" />
                </div>
                <div className={styles.toolcontent}>
                    <div className={styles.tool_title}>
                        <h3 className={styles.toolh3}>Mind</h3>
                    </div>
                    <div className="tool-body">
                        <p className={styles.toolp}><i>About: </i>"We can all face problems that seem complicated or intimidating. At Citizens Advice we believe no one should have to face these problems without good quality, independent advice...Our network of independent charities offers confidential advice online, over the phone, and in person, for free. When we say we're for everyone, we mean it. People rely on us because we're independent and totally impartial."</p>
                        <a className={styles.link} href="https://www.mind.org.uk/" target="_blank" rel="noreferrer">
                            Get in contact
                        </a>
                    </div>
                </div>
            </div>
            )
        }
//     )
//     )
// };

export default ContactCard;