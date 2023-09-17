import { Request, Response } from "express";
import { add, get, update } from "../adapters/perfilAdapt";
import { IPerfilPayload, IPerfilPayloadUpdate } from "../types/perfilTypes";
import EStatusReturn from "../types/statusReturn";
//CREATE
export const addOne = async (req: Request, res: Response): Promise<any> => {
  const data: IPerfilPayload = {
    userId: String(req?.query.userid || null).trim(),
    name: String(req?.query.name || null).trim(),
    secondname: String(req?.query.secondname || null).trim(),
    socialname: String(req?.query.socialname || null).trim(),
    photo: String(req?.query.photo || null).trim() || null,
    birthday: req?.query.birthday
      ? new Date(String(req?.query.birthday).trim())
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

  const result = await add(data);
  if (result?.status == false) {
    res.send({
      data: [],
      message: result.message,
      status: EStatusReturn.Error,
    });
    return;
  }

  res.send({
    data: result.data,
    message: "Perfil adicionado!",
    status: EStatusReturn.Success,
  });
  return;
};
//UPDATE
export const updateOne = async (req: Request, res: Response): Promise<any> => {
  const user = JSON.parse(req.headers.user as string);
  const userid = String(req?.query.userid || null).trim();
  const data: IPerfilPayloadUpdate = {
    name: String(req?.query.name || null).trim(),
    secondname: String(req?.query.secondname || null).trim(),
    socialname: String(req?.query.socialname || null).trim(),
    photo: String(req?.query.photo || null).trim() || null,
    birthday: req?.query.birthday
      ? new Date(String(req?.query.birthday).trim())
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

  await update(userid, data)
    .then(result => {
      res.send({
        data: result,
        message: "Perfil atualizado!",
        status: EStatusReturn.Success,
      });
    })
    .catch(err => {
      res.send({
        err: err,
        message: err.message,
        status: EStatusReturn.Error,
      });
    });

  return;
};

//FINDONE
export const getOne = async (req: Request, res: Response): Promise<any> => {
  const _id = String(req?.query.userid);

  if (!_id) {
    res.send({
      data: [],
      message: "Parâmetro inválido!",
      status: EStatusReturn.Error,
    });
  }

  await get(_id).then(value => {
    res.send({
      data: value,
      message: "Perfil encontrado!",
      status: EStatusReturn.Success,
    });
  });
};
