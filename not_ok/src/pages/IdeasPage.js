import React, {useState, useEffect} from "react";

//import for React Router to allow page transitions
import {useNavigate} from "react-router-dom";

//imports for images
// import happyfeeds from "../assets/happydose_meme.JPG";


import styles from "./IdeasPage.module.css";
import PostIt from "../components/PostIt/PostIt.js";
import Input from "../components/Input/Input.js";


function IdeasPage() {
    const [doses, setDoses] = useState([]);
    const [text, setText] = useState("");


    function handleClick(input) {
        const newDose = {
          dose: input
        } 

        //sends request to POST new idea to dose_suggestions table
        //commented out to disable as unable to monitor for abuse once deployed
        // async function postIdea(){
        //     let res = await fetch(`${process.env.REACT_APP_BACKEND}happydose/ideas`, {
        //         method: 'POST',
        //         headers: {'Content-Type':"application/json"},
        //         body: JSON.stringify(newDose)
        //       })
            
        //       let postedIdea = await res.json;
        //       //console.log(`this idea got posted: `, postedIdea);
        //     }
            
        // postIdea();
    
        console.log(newDose)
        setDoses([...doses, newDose]);
        setText("");
      }

    //request to backend for doses
    async function fetchDoses(){
        let res= await fetch(`${process.env.REACT_APP_BACKEND}happydose/ideas`)
        let data = await res.json()
        console.log(data.payload)
        setDoses(data.payload)
        }
        
        //calls on page render
        useEffect(()=>{
          fetchDoses()
        },[])
        

    return (
        <div className={styles.container}>
            <header className={styles.ideas_header}><h1 className={styles.ideas_h1}><a href="/">iAm != "ok"</a></h1></header>
            <h3 className={styles.h3_back}><a href="/happydose">(or go back a step)</a></h3>
                <h2 className={styles.ideas_h2}>Let's get some inspiration...</h2>
                
            
                <Input handleClick={handleClick} text={text} setText={setText}/>

                <div className={styles.idea_postits}>
                    <PostIt doses={doses} />
                    
                    {/* This was the original code to send hardcoded data to the PostIt component to render
                    <PostIt 
                        body="Go watch The Mummy - it's ace!"
                    />
                    <PostIt 
                        body="Have a walk outside and see how many cats you can see"
                    />
                    <PostIt 
                        body="Bake - and eat - a cake"
                    /> */}
                </div>
       
        </div>
    )
}

export default IdeasPage;