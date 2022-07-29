import styles from "./ToolCard.module.css";

function ToolCard({name, imageUrl, type, link, description}) {
   
    return (
        <>
            <div className={styles.container}>
                <div className={styles.imagecontainer}>
                    <img src={imageUrl} alt="" />
                </div>
                <div className={styles.toolcontent}>
                    <div className={styles.tool_title}>
                        <h3 className={styles.toolh3}>{name}</h3>
                    </div>
                    <div className="tool-body">
                        <p className={styles.toolp}>{type}</p>
                        <p className={styles.toolp}>{description}</p>
                    </div>
                </div>

                <div className={styles.tool_link}>
                        <a className={styles.link} href={link}>
                            More info
                        </a>
                </div>
            </div>
        </>
    )
}


export default ToolCard;