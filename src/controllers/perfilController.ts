import { Request, Response } from "express";
import EStatusReturn from "../types/statusReturn";
import { add, get, update } from "../adapters/perfilAdapt";
import {
  TAddPerfil,
  TUpdatePerfil,
  TGetPerfil,
  IPerfilPayload,
} from "../types/perfilTypes";

export const addOne = async (req: Request, res: Response): Promise<any> => {
  const user = JSON.parse(req.headers.user as string);
  const data: IPerfilPayload = {
    userid: null,
    name: String(req?.query.name || null).trim(),
    secondname: String(req?.query.secondname || null).trim(),
    socialname: String(req?.query.socialname || null).trim(),
    preferedsocialname: String(req?.query.preferedsocialname || null).trim(),
    avatar: String(req?.query.avatar || null).trim() || null,
    birthDay: req?.query.birthDay
      ? new Date(String(req?.query.birthDay).trim())
      : null,
  };

  for (const [key, value] of Object.entries(data)) {
    console.clear();
    if (value) {
      break;
    }
    res.send({
      data: [],
      message: "Dados inválidos!",
      status: EStatusReturn.Error,
    });
    return;
  }

  data.userid = user?.userid || null;

  console.log(data);
  res.send("teste");

  // const result = await add(data);
  // if (result.status == false) {
  //   res.send({
  //     data: [],
  //     message: result.message,
  //     status: EStatusReturn.Error,
  //   });
  //   return;
  // }

  // res.send({
  //   data: result.data,
  //   message: "Usuário adicionado!",
  //   status: EStatusReturn.Success,
  // });
  return;
};

export const getOne = async (req: Request, res: Response): Promise<any> => {
  const _id = String(req?.query._id);

  if (!_id) {
    res.send({
      data: [],
      message: "Parâmetro inválido!",
      status: EStatusReturn.Error,
    });
  }

  const result = await get(_id);
  res.send({
    data: result,
    message: "Usuário encontrado!",
    status: EStatusReturn.Success,
  });
};
