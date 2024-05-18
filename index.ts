import Express, { Request, Response } from "express";
const app = Express()
app.get("/",(req:Request, res:Response)=>{
    res.send("ok")
})
app.listen(4000,()=>console.log("rodando na porta 4000"))