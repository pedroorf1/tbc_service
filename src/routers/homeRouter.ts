import express from "express";
const router = express();
import { routeValidade } from "../helpers/service/routevalidade.midware";

router.get(
  "/",
  routeValidade,
  (req: express.Request, resp: express.Response) => {
    resp.send("Hello World!");
  }
);

export default router;
