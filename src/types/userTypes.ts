import EStatusReturn from "./statusReturn";
export type TUserRegister = {
  email: string;
  password: string;
  confirmepassword: string;
};

export type TUsUpdate = {
  _id: string;
  password: string;
};

export interface IUserLogin {
  email: string;
  password: string;
}

export enum EEstateUser {
  Active = "Ativo",
  Bloqued = "Bloqueado",
}

export type TReturnRegisterUser = {
  data: any;
  message: string;
  status: EStatusReturn;
};

export type TAddUser = ({
  email,
  password,
  confirmepassword,
}: TUserRegister) => Promise<any>;
export type TGetUser = (_id: string) => Promise<any>;
export type TUpdateUser = ({ _id, password }: TUsUpdate) => Promise<any>;
