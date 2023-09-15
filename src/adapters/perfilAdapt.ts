import perfilModel from "../database/domains/perfilModel";
import { TAddPerfil, TUpdatePerfil, TGetPerfil } from "../types/perfilTypes";

export const add: TAddPerfil = async ({
  userid,
  name,
  secondname,
  socialname,
  preferedsocialname,
  avatar,
  birthDay,
}) => {
  const dataPerfil = {
    userid,
    name,
    secondname,
    socialname,
    preferedsocialname,
    avatar,
    birthDay,
  };

  return perfilModel
    .create(dataPerfil)
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
  return perfilModel
    .findOne({ userid })
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
  preferedsocialname,
  avatar,
  birthDay,
}) => {
  const dataPerfil = {
    name,
    secondname,
    socialname,
    preferedsocialname,
    avatar,
    birthDay,
  };

  return perfilModel
    .updateOne({ userid }, dataPerfil)
    .then((value: any) => {
      return value;
    })
    .catch((err: any) => {
      return err;
    });
};
