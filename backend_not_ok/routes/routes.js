import express from 'express';
//will need to import models
import {getQuote} from "../models/models.js";

const router = express.Router();


router.get("/quote", async function(req, res) {
    // const resourcesID = req.params.id;
    // console.log(resourcesID)
    let quote = await getQuote()
                        
        //     const result = {
        //     success: true,
        //     payload: quote,
        // }
        //console.log(quote);
        res.json(quote);  
    })



export default router;