import express, { urlencoded } from 'express';
import Router from './router/user.router.js';

const app =  express()
const port = 3000;

app.use(express.urlencoded({extend : true}))
app.use(express.json())

app.use("/getList",Router)

app.listen(port,()=>{
    console.log(`Server is on port http://localhost:${port}`);
    
})