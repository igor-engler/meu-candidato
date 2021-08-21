import * as jsonwebtoken from "jsonwebtoken";
import Jsonwebtoken from "./";

interface IJsonwebtoken{
    sing(payload: string | object | Buffer, options?: jsonwebtoken.SignOptions): string;
    verify(token: string): jsonwebtoken.JwtPayload;
}

export { IJsonwebtoken, Jsonwebtoken as Token };