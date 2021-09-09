import * as bcrypt from "bcrypt";
import { IBcrypt } from "./Ibcrypt";

class BcryptFramework implements IBcrypt {
  async hash(data: string | Buffer, saltOrRounds: string | number): Promise<string> {
    return await bcrypt.hash(data, saltOrRounds);
  }

  async compare(data: string | Buffer, encrypted: string): Promise<boolean> {
    return bcrypt.compare(data, encrypted);
  }

}

export default new BcryptFramework();