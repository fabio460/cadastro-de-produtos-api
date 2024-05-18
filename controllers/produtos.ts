import { Request, Response } from "express";
import { prisma } from "../prismaConst";

export const listar = async(req:Request, res:Response)=>{
    const r = await prisma.produto.findMany()
    res.json(r)
}

