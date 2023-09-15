export interface ILogin {
  email: string;
  password: string;
}
export interface Ivalidate {
  token: any;
}
export interface ILogout {
  email: string;
}

export type TLogin = ({ email, password }: ILogin) => Promise<any>;
export type TValidate = ({ token }: Ivalidate) => Promise<any>;
export type TLogout = ({ email }: ILogout) => any;
