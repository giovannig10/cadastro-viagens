import { Router } from "express";

const usuariosRoutes = Router();

let usuarios = [];

usuariosRoutes.get("/", (req, res) => {
  return res.status(200).json({
    message: usuarios.length == 0 
    ? "Nenhum usuário cadastrado" 
    : `Total de usuários cadastrados: ${usuarios.length}`, 
    usuarios, 
    });
});

usuariosRoutes.post("/", (req, res) => {
  const {destino, orcamento, status, objetivosViagem } = req.body;

  const novousuario = {
    id: Math.floor(Math.random() * 1000000),
    destino,
     orcamento,
     status, 
     objetivosViagem 
  };

  // Adiciona o novo usuario ao array de usuarios
  usuarios.push(novousuario);

  return res.status(201).json({
    message: "usuario cadastrado com sucesso!",
    novousuario,
  });
});

export default usuariosRoutes;