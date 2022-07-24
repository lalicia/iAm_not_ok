import React from "react";
import {useState, useEffect} from "react";

import styles from "./CatButton.module.css";


function CatButton({currentCats, handleClick}) {
  const [cats, setCats] = useState([]);

  useEffect(
    function () {
      const fetchData = async function() {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search`
        );
        const data = await response.json();
        setCats(data[0].url);
      };

      fetchData();
    },
    [currentCats]
  ); //without dependency OR dependency [cats] gets stuck in loop of fetching cats


  return (
    <div className={styles.catpic}> 
      <img className={styles.catimg} src={cats} alt="meow"></img>
      <button className={styles.getcat_btn} onClick={handleClick}>Bring it</button>
    </div>
  );
}

export default CatButton;
