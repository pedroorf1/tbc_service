import { add, get, update } from "../adapters/perfilAdapt";
import EStatusReturn from "../types/statusReturn";

import { IPerfilPayload, IPerfilPayloadUpdate } from "../types/perfilTypes";
import { TControllers } from "../types/controllersTypes";
import tools from "../helpers/tools";

//CREATE
export const addOne: TControllers = async (req, res) => {
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

  const _data = await tools.customJson(result.data);
  res.send(_data);
  return;
};
//UPDATE
export const updateOne: TControllers = async (req, res) => {
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

  await update(userid, data).then(async result => {
    const _data = await tools.customJson(result.data);
    result.data = _data;
    res.send(result);
  });

  return;
};

//FINDONE
export const getOne: TControllers = async (req, res) => {
  const _id = String(req?.query.userid);

  if (!_id) {
    res.send({
      data: [],
      message: "Parâmetro inválido!",
      status: EStatusReturn.Error,
    });
  }

  await get(_id).then(async value => {
    const _data = await tools.customJson(value.data);
    value.data = _data;
    res.send(value);
  });
};
