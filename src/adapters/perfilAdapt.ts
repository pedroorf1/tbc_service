import dbclient from "../../prisma/client";
import { TAddPerfil, TGetPerfil, TUpdatePerfil } from "../types/perfilTypes";

import tools from "../helpers/tools";

export const add: TAddPerfil = async ({
  photo,
  name,
  secondname,
  socialname,
  birthday,
  userId,
}) => {
  const dataPerfil = {
    photo,
    name,
    secondname,
    socialname,
    birthday,
    userId: parseInt(userId),
  };

  return await dbclient.perfil
    .create({ data: dataPerfil })
    .then(async (value: any) => {
      const nvalue = await tools.customJson(value);
      return JSON.stringify(nvalue);
    })
    .catch((err: any) => {
      return {
        status: false,
        error: err,
        message: "Houve erro ao cadastrar o perfil!",
      };
    });
};

export const get: TGetPerfil = async (userid: string) => {
  const result = await dbclient.perfil.findFirst({
    where: { userId: parseInt(userid) },
  });
  return await tools.customJson(result);
};

export const update: TUpdatePerfil = async (
  userid,
  { name, secondname, socialname, photo, birthday }
) => {
  const dataPerfil = {
    name,
    secondname,
    socialname,
    photo,
    birthday,
  };

  return await dbclient.perfil
    .update({ where: { userId: parseInt(userid) }, data: dataPerfil })
    .then((value: any) => {
      return JSON.parse(value);
    })
    .catch((err: any) => {
      return err;
    });
};
