import DB from "../conection/connect";

import { Schema } from "mongoose";
import { EEstateUser, TAddUser } from "../../types/userTypes";
const User = new DB.Schema(
  {
    email: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    password: {
      type: Schema.Types.String,
      required: true,
    },
    status: {
      type: Schema.Types.String,
      default: EEstateUser.Active,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default DB.model<TAddUser>("users", User);
