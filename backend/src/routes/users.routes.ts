import { request, Router } from 'express';

import { User } from '../model/User';

const UserRoutes = Router();

UserRoutes.post('/', (request, response) => {
  const { email, name, password } = request.body;

  const user: User = new User();

  Object.assign(user, {
    email,
    name,
    password,
  });

  return response.status(201).json({ user });
});

export { UserRoutes };
