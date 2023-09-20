import dbclient from "../../prisma/client";
import { TAddPerfil, TGetPerfil, TUpdatePerfil } from "../types/perfilTypes";

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
      return {
        data: value,
        status: true,
        message: "Perfil adicionado com sucesso!",
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
  const result = await dbclient.perfil
    .findFirst({
      where: { userId: parseInt(userid) },
    })
    .then(async (value: any) => {
      return await value;
    })
    .catch((err: any) => {
      return {
        status: false,
        error: err,
        message: "Houve erro ao realizar a busca!",
      };
    });
  return {
    data: result,
    status: true,
    message: "Busca realizada com sucesso!",
  };
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
      return {
        data: value,
        status: true,
        message: "Perfil atualizado com sucesso!",
      };
    })
    .catch((err: any) => {
      return {
        status: false,
        error: err,
        message: "Houve erro ao atualizar o perfil!",
      };
    });
};
