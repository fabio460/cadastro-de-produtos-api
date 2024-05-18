import Express, { Request, Response } from "express";
const app = Express()
app.use(Express.json())
import listRouter from "./routes/index";
listRouter.map((e)=>{
  app.use(e.endpoint,e.rota)
})

app.listen(4000,()=>console.log("rodando na porta 4000"))