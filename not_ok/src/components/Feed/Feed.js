import React, {useState, useEffect} from "react";

import styles from "./Feed.module.css";

//need function to render image which is from a fetch request to unsplash API 
//need to display quote from fetch request to quotes API
    //will need state for both things?  and use effect to get on render
function Feed({url}) {
    // const [picState, setPicState] = useState([]);
    const [feedState, setFeedState] = useState([]);
    // const [authorState, setAuthorState] = useState([])

    
    useEffect(() => {
        fetchFeed();
    }, [])

    const fetchFeed = async () => {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        // console.log(data.data.children[0].data.title)

        // const title = data.data.children[0].data.title;
        // const thumbnail = data.data.children[0].data.url;

        const results = data.data.children;

        //trying to weed out the stickied post - works!
        const betterResults = results.filter((item) => {
            return item.data.stickied === false
        })

        //trying to weed out video posts - works!
        const finalResults = betterResults.filter((item) => {
            return item.data.is_video === false
        })
   
        setFeedState(finalResults);
        //was title
        // setPicState(thumbnail);
    };


    return (
            feedState.map(function(item) {
                return (
                    <div className={styles.feedcontainer}>
                    <p className={styles.feedp}>{item.data.title}</p>
                    <img className={styles.feedpic} src={item.data.url} />
                    </div>
                )
        })

        // <div className={styles.feedcontainer}>
        //    <p className={styles.feedp}>{feedState}</p>
        //    <img className={styles.feedpic} src={picState} />
        // </div>
    )
}


export default Feed;