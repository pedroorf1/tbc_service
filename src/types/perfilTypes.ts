export type IPerfilPayload = {
  name: string;
  secondname: string;
  socialname?: string;
  photo?: string;
  birthday: Date;
  userId: string;
};

export type IPerfilPayloadUpdate = {
  name?: string;
  secondname?: string;
  socialname?: string;
  photo?: string;
  birthday?: Date;
};

export type TAddPerfil = ({
  name,
  secondname,
  socialname,
  photo,
  birthday,
  userId,
}: IPerfilPayload) => Promise<any>;
export type TGetPerfil = (userid: string) => Promise<any>;
export type TUpdatePerfil = (
  userId: string,
  { name, secondname, socialname, photo, birthday }: IPerfilPayloadUpdate
) => Promise<any>;
