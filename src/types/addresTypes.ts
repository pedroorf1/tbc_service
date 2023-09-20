import EStatusReturn from "./statusReturn";
interface IPayloadAddOneAddres {
  address: string;
  complement?: string;
  city: string;
  state: string;
  country: string;
  userId: BigInt;
}
interface IUpdateOneAddress {
  data: {
    address?: string;
    complement?: string;
    city?: string;
    state?: string;
    country?: string;
    userId?: BigInt;
  };
}

export type TAddAddres = ({
  address,
  complement,
  city,
  state,
  country,
  userId,
}: IPayloadAddOneAddres) => Promise<any>;
export type TGetOneAddress = (_id: string) => Promise<any>;
export type TUpdateOneAddres = (data: IUpdateOneAddress) => Promise<any>;
export type TGetManyAddress = (userId: string) => Promise<any>;
