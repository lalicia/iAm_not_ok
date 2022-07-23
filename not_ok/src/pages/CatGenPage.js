import React from "react";
import { useState } from 'react';

import styles from './CatGenPage.module.css';
import CatButton from '../components/CatButton/CatButton.js';


function CatGenPage() {
  const [currentCats, fetchCats]= useState(false);

  function handleClick() {
    // currentCats === true ? 
    // fetchCats(false) : fetchCats(true) 
    if(currentCats === true){
      fetchCats(false)
    }else{
      fetchCats(true)
    }
  }

  return(
    <div className={styles.container}>
        <header className={styles.cat_header}><h1><a href="/">iAm != "ok"</a></h1></header>
            <h2>Let's get you some cats</h2>
        
        
        <CatButton getCats={currentCats} handleClick={handleClick}/>

    
    </div>
  );
}

export default CatGenPage;