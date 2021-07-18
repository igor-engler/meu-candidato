import { Request, Response } from "express";
import { ListUserUseCase } from "./ListUserUseCase";

class ListUserController {
    constructor(private listUserCase: ListUserUseCase) { }

    handle(request: Request, response: Response): Response {
        const all = this.listUserCase.execute();

        return response.json(all);
    };
};

export { ListUserController };