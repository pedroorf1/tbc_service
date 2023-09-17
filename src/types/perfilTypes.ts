export type IPerfilPayload = {
  name: string;
  secondname: string;
  socialname?: string;
  photo?: string;
  birthday: Date;
  userid: string;
};

export type IPerfilPayloadUpdate = {
  name?: string;
  secondname?: string;
  socialname?: string;
  photo?: string;
  birthday?: Date;
  userid: string;
};

export type TAddPerfil = ({
  name,
  secondname,
  socialname,
  photo,
  birthday,
  userid,
}: IPerfilPayload) => Promise<any>;
export type TGetPerfil = (userid: string) => Promise<any>;
export type TUpdatePerfil = ({
  name,
  secondname,
  socialname,
  photo,
  birthday,
  userid,
}: IPerfilPayloadUpdate) => Promise<any>;
