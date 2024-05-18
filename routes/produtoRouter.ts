import { Router } from "express";
import { atualizar, criar, deletar, listar, listarPorId } from "../controllers/produtos";
const produtoRouter = Router()
produtoRouter.get("/listar",listar)
produtoRouter.get("/listarPorId/:id",listarPorId)
produtoRouter.post("/cadastrar",criar)
produtoRouter.put("/atualizar",atualizar)
produtoRouter.delete("/deletar",deletar)

export default produtoRouter