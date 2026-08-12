import exprss from 'express';
import cors from 'cors'
import {router} from "./router/uploadRoute.js";

const app = exprss();
const PORT = 5000;
app.use(exprss.json());
app.use(cors())
app.use("/api/upload",router)

app.get("/",(req,res) => {
    res.send("Server is running")
})

app.listen(PORT,(req,res) => {
    console.log("Server is running from http://localhost:5000")
})