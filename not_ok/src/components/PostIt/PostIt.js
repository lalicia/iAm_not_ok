import styles from "./PostIt.module.css";

function PostIt({doses}) {
   
    return (
        doses.map((item)=>{
            return (
                <div className={styles.container}>
                    <div className={styles.postit_body}>
                        <p className={styles.postit_body}>{item.dose}</p>
                    </div>
                </div>
            )
        })
        
               
        //this was the original code to use hardcoded data    
            // <div className={styles.container}>
            //     <div className={styles.postit_body}>
            //         <p className={styles.postit_p}>{body}</p>
            //     </div>
            // </div>
    )
}


export default PostIt;