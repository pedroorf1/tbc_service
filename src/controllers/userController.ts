import { Request, Response } from "express";

import EStatusReturn from "../types/statusReturn";
import { add, get, getByData } from "../adapters/userAdapt";
import { TUserRegister, TUserLogin } from "../types/userTypes";
import { TControllers } from "../types/controllersTypes";
import tools from "../helpers/tools";

export const addOne: TControllers = async (req, res) => {
  if (!req?.query) {
    res.send({
      data: [],
      message: "Dados inválidos!",
      status: EStatusReturn.Error,
    });
    return;
  }

  const data: TUserRegister = {
    email: String(req?.query.email),
    password: String(req?.query.password),
    confirmepassword: String(req?.query.confirmepassword),
  };

  const result = await add(data);
  if (result.status == false) {
    res.send({
      data: [],
      message: result.message,
      status: EStatusReturn.Error,
    });
    return;
  }
  const _data = await tools.customJson(result.data);
  res.send({
    data: JSON.stringify(_data),
    message: "Usuário adicionado!",
    status: EStatusReturn.Success,
  });
  return;
};

export const getOne: TControllers = async (req, res) => {
  const _id = String(req?.query._id);

  if (!_id) {
    res.send({
      data: [],
      message: "Parâmetro inválido!",
      status: EStatusReturn.Error,
    });
  }

  let result = await get(_id);
  result.data = await tools.customJson(result.data);
  res.send({
    data: JSON.stringify(result),
    message: "Usuário encontrado!",
    status: EStatusReturn.Success,
  });
};

export const updateOne: TControllers = async (req, res) => {
  res.send({
    data: JSON.stringify([]),
    message: "Usuário atualizado!",
    status: EStatusReturn.Success,
  });
};
export const deactivateOne: TControllers = async (req, res) => {
  res.send({
    data: JSON.stringify([]),
    message: "Usuário bloqueado!",
    status: EStatusReturn.Success,
  });
};
