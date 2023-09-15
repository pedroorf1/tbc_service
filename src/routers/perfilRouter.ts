import express from "express";
const router = express();
import * as perfil from "../controllers/perfilController";

import { routeValidade } from "../helpers/service/routevalidade.midware";

router.post("/perfil/create", routeValidade, perfil.addOne);

export default router;
