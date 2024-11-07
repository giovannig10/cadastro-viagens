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
    if(usuarios.length == 0) {
        return res.status(404).json({ message: "Nenhum usuário cadastrado" });
    }
});


export default usuariosRoutes;