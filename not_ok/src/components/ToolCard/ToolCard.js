import styles from "./ToolCard.module.css";

function ToolCard({tools}) {
   
    return (
        tools.map((item)=>{
            return (
            <div className={styles.container}>
                <div className={styles.imagecontainer}>
                    <img src={`${item.imageurl}`} alt="" />
                </div>
                <div className={styles.toolcontent}>
                    <div className={styles.tool_title}>
                        <h3 className={styles.toolh3}>{item.name}</h3>
                    </div>
                    <div className="tool-body">
                        <p className={styles.toolp}><i>This is a... </i>{item.type}</p>
                        <p className={styles.toolp}><i>Synopsis... </i>{item.description}</p>
                    </div>
                </div>

                <div className={styles.tool_link}>
                        <a className={styles.link} href={item.link} target="_blank" rel="noreferrer">
                            More info
                        </a>
                </div>
            </div>
            )
        }
    )
    )
};

export default ToolCard;