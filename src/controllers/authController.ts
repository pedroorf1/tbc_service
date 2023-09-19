import { login, validate } from "../adapters/authAdapt";
import { ILogin } from "../types/authTypes";
import { TControllers } from "../types/controllersTypes";

export const atuthenticate: TControllers = async (req, res) => {
  const data: ILogin = {
    email: String(req?.query.email),
    password: String(req?.query.password),
  };

  login(data).then(result => {
    return res.send(result);
  });
};

export const validation: TControllers = async (req, res) => {
  const token = String(req?.query.token);
  const result = await validate({ token });
  return res.send(result);
};
