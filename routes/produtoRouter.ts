import { Router } from "express";
import { listar } from "../controllers/produtos";
const produtoRouter = Router()
produtoRouter.get("/listar",listar)
export default produtoRouter