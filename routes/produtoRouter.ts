import { Router } from "express";
import { getProduto } from "../controllers/produtos";
const produtoRouter = Router()
produtoRouter.get("/listar",getProduto)
export default produtoRouter