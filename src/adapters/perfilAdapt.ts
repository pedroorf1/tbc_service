import dbclient from "../../prisma/client";
import { TAddPerfil, TUpdatePerfil, TGetPerfil } from "../types/perfilTypes";

export const add: TAddPerfil = async ({
  photo,
  name,
  secondname,
  socialname,
  birthday,
  userid,
}) => {
  const dataPerfil = {
    photo,
    name,
    secondname,
    socialname,
    birthday,
    userid,
  };

  {
    photo;
    name;
    secondname;
    socialname;
    birthday;
    userid;
  }

  return dbclient.perfil
    .create({ data: dataPerfil })
    .then((value: any) => {
      return {
        status: true,
        data: value,
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
  return dbclient.perfil
    .findUnique({ where: { id: parseInt(userid) } })
    .then((value: any) => {
      return value;
    })
    .catch((err: any) => {
      return err;
    });
};

export const update: TUpdatePerfil = async ({
  userid,
  name,
  secondname,
  socialname,
  photo,
  birthday,
}) => {
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
      return value;
    })
    .catch((err: any) => {
      return err;
    });
};
