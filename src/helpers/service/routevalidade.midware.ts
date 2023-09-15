import { Request, Response, NextFunction } from "express";

import tools from "../tools";

export const routeValidade = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.clear();
  const tkin = req.headers["x-token"];
  return await tools.validadeToken(tkin).then((resp: any) => {
    if (resp.result) {
      req.headers.user = JSON.stringify({
        userid: resp.result._id,
        email: resp.result.email,
      });
      return next();
    } else {
      return res.status(401).send({ message: "Unauthorized" });
    }
  });
};
