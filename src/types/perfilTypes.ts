export type IPerfilPayload = {
  userid: string;
  name: string;
  secondname: string;
  socialname: string;
  preferedsocialname: string;
  avatar: string;
  birthDay: Date;
};

export type TAddPerfil = ({
  userid,
  name,
  secondname,
  socialname,
  preferedsocialname,
  avatar,
  birthDay,
}: IPerfilPayload) => Promise<any>;
export type TGetPerfil = (userid: string) => Promise<any>;
export type TUpdatePerfil = ({
  userid,
  name,
  secondname,
  socialname,
  preferedsocialname,
  avatar,
  birthDay,
}: IPerfilPayload) => Promise<any>;
