import Express, { Request, Response } from "express";
const app = Express()
app.use(Express.json())
import routes from "./routes/index";
app.use(routes)

app.listen(4000,()=>console.log("rodando na porta 4000"))