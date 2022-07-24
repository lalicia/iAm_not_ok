import styles from "./PostIt.module.css";

function PostIt({body}) {
   
    return (
            <div className={styles.container}>
                <div className={styles.postit_body}>
                    <p className={styles.postit_p}>{body}</p>
                </div>
            </div>
    )
}


export default PostIt;