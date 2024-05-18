import { Request, Response } from "express";
import { prisma } from "../prismaConst";

export const getProduto = async(req:Request, res:Response)=>{
    const r = await prisma.produto.findMany()
    res.json(r)
}