import { Router } from "express";
import { getProduto } from "../controllers/produtos";

const route = Router()
route.get("/produtos",getProduto)
export default route