import dbclient from "../../prisma/client";
import { TAddPerfil, TUpdatePerfil, TGetPerfil } from "../types/perfilTypes";

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
    .then((value: any) => {
      return {
        status: true,
        data: JSON.parse(value),
        message: "Perfril cadastrado!",
      };
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
  return await dbclient.perfil
    .findFirst({ where: { userId: parseInt(userid) } })
    .then(async (value: any) => {
      console.log("\n Perfil get one: ", value);
      value = JSON.stringify(value);
      return value;
    })
    .catch((err: any) => {
      return err;
    });
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

  return dbclient.perfil
    .update({ where: { id: parseInt(userid) }, data: dataPerfil })
    .then((value: any) => {
      return JSON.parse(value);
    })
    .catch((err: any) => {
      return err;
    });
};
