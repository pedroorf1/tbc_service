import dbclient from "../../prisma/client";
import {
  TAddAddres,
  TUpdateOneAddres,
  TGetOneAddress,
  TGetManyAddress,
} from "../types/addresTypes";
import tools from "../helpers/tools";

export const add: TAddAddres = async ({
  address,
  complement,
  city,
  state,
  country,
  userId,
}) => {
  const factoredData = {
    address,
    complement,
    city,
    state,
    country,
    userId,
  };

  if (!userId) {
    return { status: false, message: "Existem erros nos dados!" };
  }

  const result = await dbclient.address.create(factoredData);
};

export const get: TGetOneAddress = async _id => {};
export const getMany: TGetManyAddress = async userid => {};
export const update: TUpdateOneAddres = async data => {};
