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
  const { destino, orcamento, status, objetivoViagem } = req.body;
  if (!destino || !orcamento) {
    return res.status(400).json({ message: "Preencha os campos obrigatorios corretamente" });
  }
  if (status != "iniciada" && status != "planejando" && status != "finalizada") {
    return res.status(400).json({ message: "Status inválido" });
    }
    if (!objetivoViagem || objetivoViagem.length < 2) {
    return res.status(400).json({ message: "O campo objetivoViagem deve conter no mínimo dois objetivos" });
  }
  const novoUsuario = { id: usuarios.length + 1, destino, orcamento, status, objetivoViagem };
  usuarios.push(novoUsuario);
  return res.status(201).json({ message: "Usuário cadastrado com sucesso", usuario: novoUsuario });
});
export default usuariosRoutes;