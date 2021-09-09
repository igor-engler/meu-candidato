import * as jsonwebtoken from "jsonwebtoken";
import { IJsonwebtoken } from "./Ijsonwebtoken";
import { config } from "../../config";

interface IPaylod {
  sub: string,
}

class Jsonwebtoken implements IJsonwebtoken {
  sing(payload: string | object | Buffer, options?: jsonwebtoken.SignOptions): string {
    return jsonwebtoken.sign(payload, config.secretword as jsonwebtoken.Secret, options);
  }

  verify(token: string): jsonwebtoken.JwtPayload {
    return jsonwebtoken.verify(token, config.secretword as jsonwebtoken.Secret) as IPaylod;
  }

}

export default new Jsonwebtoken();