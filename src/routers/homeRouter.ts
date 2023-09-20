import express from "express";
const router = express();
import { routeValidade } from "../helpers/service/routevalidade.midware";

router.get(
  "/",
  routeValidade,
  (req: express.Request, resp: express.Response) => {
    resp.send(
      "Bem vindo ao nosso portal de serviços, aqui você vai encontrar profissionais dos mais diferentes campos de atividade dispostos a fazer aquele dinheiro extra!"
    );
  }
);

export default router;
