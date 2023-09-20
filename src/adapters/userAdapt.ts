import dbclient from "../../prisma/client";
import { TAddUser, TGetUser, TUpdateUser } from "../types/userTypes";
import tools from "../helpers/tools";

export const add: TAddUser = async ({ email, password, confirmepassword }) => {
  const isEmail = await tools.validateEmail(String(email));
  const isPassword = await tools.validatePassword(String(password));
  const isPassword2 = await tools.validatePassword(String(confirmepassword));
  const isEqualsPassowrd = password === confirmepassword;
  if (!isEmail) {
    return {
      status: false,
      message: "Email inválido!",
    };
  }
  if (!isPassword || !isPassword2 || !isEqualsPassowrd) {
    return {
      status: false,
      message: "As senhas não cobinam ou são inválidas!",
    };
  }

  if (await getByEmail(email)) {
    return {
      status: false,
      message: "Usuario já cadastrado!",
    };
  }

  const createPassword = await tools.createPassword(String(password));
  return dbclient.user
    .create({
      data: {
        email,
        password: createPassword,
      },
    })
    .then(async (value: any) => {
      delete value.password;
      return {
        status: true,
        data: value,
      };
    })
    .catch((err: any) => {
      console.log(err);
      return {
        status: false,
        error: err,
        message: "Houve erro ao cadastrar o usuário!",
      };
    });
};

export const get: TGetUser = async (_id: string) => {
  return dbclient.user
    .findUnique({ where: { id: parseInt(_id) } })
    .then((value: any) => {
      return value;
    })
    .catch((err: any) => {
      return err;
    });
};

export const getByEmail: TGetUser = async (email: string) => {
  return dbclient.user
    .findUnique({ where: { email } })
    .then((value: any) => {
      return value;
    })
    .catch((err: any) => {
      return err;
    });
};

export const update: TUpdateUser = async ({ _id, password }) => {
  return dbclient.user
    .update({
      where: { id: parseInt(_id) },
      data: { password: password },
    })
    .then((value: any) => {
      return value;
    })
    .catch((err: any) => {
      return err;
    });
};
