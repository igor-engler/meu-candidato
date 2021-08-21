import BcryptFramework from './';

interface IBcrypt{
    hash(data: string | Buffer, saltOrRounds: string | number): Promise<string>;
    compare(data: string | Buffer, encrypted: string): Promise<boolean>;
}

export { IBcrypt, BcryptFramework as EncryptInfo}