import express from "express";
const router = express();
import * as user from "../controllers/userController";

import { routeValidade } from "../helpers/service/routevalidade.midware";

router.post("/signup", user.addOne);
router.get("/test", routeValidade, user.test);

export default router;
