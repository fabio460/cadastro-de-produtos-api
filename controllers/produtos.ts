import { Request, Response } from "express";
import { prisma } from "../prismaConst";

export const listar = async(req:Request, res:Response)=>{
    const r = await prisma.produto.findMany()
    res.json(r)
}
export const listarPorId = async(req:Request, res:Response)=>{
    const id = req.params.id
    const r = await prisma.produto.findUnique({where:{id}})
    res.json(r)
}

export const criar = async(req:Request, res:Response)=>{
    const {nome,preco,imagem} = req.body
    try {
        const r = await prisma.produto.create({
           data:{
              nome,
              preco,
              imagem
           }
        })
        res.send("Produto cadastrado com sucesso!")
        
    } catch (error) {
        res.status(500).send(error)
    }
}

export const atualizar = async(req:Request, res:Response)=>{
    const {id,nome,preco,imagem} = req.body
    console.log("teste")
    try {
        const r = await prisma.produto.updateMany({
           data:{
              nome,
              preco,    
              imagem
           },
           where:{id}
        })
        res.send("Produto atualizado com sucesso!")
        
    } catch (error) {
        res.status(500).send(error)
    }
}

export const deletar = async(req:Request, res:Response)=>{
    const {id} = req.body
    try {
        const r = await prisma.produto.delete({
          where:{id}
        })
        res.send("Produto deletado com sucesso!")
        
    } catch (error) {
        res.status(500).send("Falha ao deletar produto")
    }
}