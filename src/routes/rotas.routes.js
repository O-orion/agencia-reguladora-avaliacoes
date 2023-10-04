import { Router } from "express";
import registrarAvalicaoController from "../controllers/registrarAvalicao.controller";

const route =  new Router();

route.post('/registrarAvaliacao', registrarAvalicaoController.index);

export default route;