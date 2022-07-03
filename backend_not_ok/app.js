import express from "express";
import 'dotenv/config';
import pg from "pg";
//will probably need to import CORS 
//will need to import router from file when we're create our routes and exported

//we export this so server.js can use, potentially also other things
const app = express();

app.use(express.json());

//router needs importing from routers folder as applicable
app.use("/", router);

// test route
app.get("/", function (req, res) {
    res.json({
      success: true,
      message: "Test route up and running!",
    });
  });


export default app;