import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET = process.env.TOKEN_SIGNE || "no secret";
const tools = class {
  static async createPassword(pass: string) {
    const steps = 10;
    const salt = await bcrypt.genSalt(steps);
    const hashPassword = await bcrypt.hash(pass, salt);
    return hashPassword;
  }

  static async verifyPassword(pass: string, hash: string) {
    const verified = await bcrypt.compare(pass, hash);
    return verified;
  }

  static async validateEmail(email: string) {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email);
  }
  static async validatePassword(password: string) {
    return password.length > 5;
  }

  static async generateToken(_id: string, email: string) {
    // eslint-disable-next-line no-undef
    const token = jwt.sign({ _id, email }, SECRET, {
      expiresIn: "24h",
    });
    return token;
  }
  static async validadeToken(token: any) {
    // eslint-disable-next-line no-undef
    return jwt.verify(token, SECRET, (err: any, decoded: any) => {
      if (err) return { result: false };
      return { result: decoded };
    });
  }
  static async customJson(data: any) {
    let newdata = { ...data };
    for (let [key, value] of Object.entries(data)) {
      if (typeof value == "bigint") {
        newdata[key] = value.toString();
      }
    }
    return newdata;
  }

  static async serializeBigInt(value: BigInt): Promise<string> {
    return value.toString().trim();
  }

  // Função para desserializar um valor bigint
  static async deserializeBigInt(serializedValue: string): Promise<bigint> {
    const deserializedValue = BigInt(serializedValue);
    return deserializedValue;
  }

  static strReplaceAt = function (
    str: string,
    index: number,
    replacement: any
  ) {
    if (index >= str.length) {
      return str.valueOf();
    }
    var a = String(str).split("");
    a[index] = replacement;
    return JSON.parse(a.join(""));
  };
};

export default tools;
