import { Request, Response, NextFunction } from "express";
import { Token } from "../../frameworks/jsonwebtoken/Ijsonwebtoken";

import { AppError } from "../../errors/appError";
import { UserRepository } from "../../repositories/implementations/userRepository";

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: email } = Token.verify(token);

    const userRepositories = UserRepository.getInstance();
    const user = userRepositories.findByEmail(email!);

    if (!user) {
      throw new AppError("Usuário não cadastrado!", 401);
    }

    next();
  } catch {
    throw new AppError("Usuário não autenticado!", 401);
  }
}