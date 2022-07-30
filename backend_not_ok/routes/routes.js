import express from 'express';
//will need to import models
import {getQuote, getDoses, postIdea, getTools} from "../models/models.js";

const router = express.Router();

//fetches positive quote for Homepage
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

router.get("/happydose/ideas", async function(req, res) {
    // const resourcesID = req.params.id;
    // console.log(resourcesID)
    let doses = await getDoses()
    // console.log(`this is the doses: `, doses);

    let data = res.json({
        success: true,
        payload: doses,
    })
    // console.log(`this is what will be sent to frontend as result:`, doseResults);
    return data;  
    })

//to POST new happy idea
router.post('/happydose/ideas', async function(req,res) {
    let newIdea = await postIdea(req.body)
    
    let data = res.json({
        success: true,
        payload: newIdea,
    })

    return data;
})

//to GET all tool_suggestions from Heroku
router.get("/tools", async function(req, res) {
    // const resourcesID = req.params.id;
    // console.log(resourcesID)
    let tools = await getTools()
    // console.log(`this is the doses: `, doses);

    let data = res.json({
        success: true,
        payload: tools,
    })
    // console.log(`this is what will be sent to frontend as result:`, doseResults);
    return data;  
    })

export default router;