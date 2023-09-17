import express from "express";
const router = express();
import * as perfil from "../controllers/perfilController";

import { routeValidade } from "../helpers/service/routevalidade.midware";

router.post("/perfil", routeValidade, perfil.addOne);
router.put("/perfil", routeValidade, perfil.updateOne);
router.get("/perfil", routeValidade, perfil.getOne);

export default router;
