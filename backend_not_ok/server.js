import app from "./app";

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});