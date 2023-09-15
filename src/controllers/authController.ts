import { Request, Response } from "express";

import { login, validate, logout } from "../adapters/authAdapt";
import { ILogin, TLogout, TValidate } from "../types/authTypes";

export const atuthenticate = async (
  req: Request,
  res: Response
): Promise<any> => {
  const data: ILogin = {
    email: String(req?.query.email),
    password: String(req?.query.password),
  };

  login(data).then(result => {
    return res.send(result);
  });
};

export const validation = async (req: Request, res: Response): Promise<any> => {
  const token = String(req?.query.token);
  const result = await validate({ token });
  return res.send(result);
};
