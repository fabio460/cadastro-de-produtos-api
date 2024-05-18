import { listRouterType } from "../types";
import produtoRouter from "./produtoRouter";
const listRouter:listRouterType = [
   {endpoint:"/produtos",rota:produtoRouter}
]
export default listRouter