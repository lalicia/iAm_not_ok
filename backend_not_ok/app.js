import express from "express";
import 'dotenv/config';
import pg from "pg";
import cors from "cors";
import router from "./routes/routes.js";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());


// test route
app.get("/", function (req, res) {
    res.json({
      success: true,
      message: "Test route up and running!",
    });
  });

app.use("/", router);

app.get("/quote", router);

app.get("/happydose/ideas", router);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

export default app;