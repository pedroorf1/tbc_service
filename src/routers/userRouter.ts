import express from "express";
const router = express();
import * as user from "../controllers/userController";

import { routeValidade } from "../helpers/service/routevalidade.midware";

router.get("/", routeValidade, user.getOne);
router.post("/", user.addOne);
router.put("/", routeValidade, user.updateOne);
router.post("/deactivate", routeValidade, user.deactivateOne);

export default router;
