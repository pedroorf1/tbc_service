import DB from "../conection/connect";
const Perfil = new DB.Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    secondname: {
      type: String,
      required: false,
    },
    socialname: {
      type: String,
      required: false,
    },
    preferedsocialname: {
      type: Boolean,
      required: false,
    },
    avatar: {
      type: String,
      unique: false,
    },
    birthDay: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
export default DB.model("perfil", Perfil);
