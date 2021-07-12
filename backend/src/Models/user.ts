import { v4 as uuidV4 } from "uuid";

class User {
    id?: string;
    email: string;
    name: string;
    password: string;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
};

export { User };