import userModel from "../database/domains/userModel";
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
  return userModel
    .create({
      email,
      password: createPassword,
    })
    .then((value: any) => {
      value.password = undefined;
      return {
        status: true,
        data: value,
        message: "Usuário cadastrado!",
      };
    })
    .catch((err: any) => {
      return {
        status: false,
        error: err,
        message: "Houve erro ao cadastrar o usuário!",
      };
    });
};

export const get: TGetUser = async (_id: string) => {
  return userModel
    .findOne({ _id })
    .then((value: any) => {
      return value;
    })
    .catch((err: any) => {
      return err;
    });
};

export const getByEmail: TGetUser = async (email: string) => {
  return userModel
    .findOne({ email })
    .then((value: any) => {
      return value;
    })
    .catch((err: any) => {
      return err;
    });
};

export const update: TUpdateUser = async ({ _id, password }) => {
  return userModel
    .updateOne({ _id }, { password })
    .then((value: any) => {
      return value;
    })
    .catch((err: any) => {
      return err;
    });
};
