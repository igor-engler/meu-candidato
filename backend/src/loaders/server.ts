import * as express from 'express';
import routes from "../api/routes";

export default (app: express.Application) => {
  app.use(express.json());

  app.use(routes);

  app.use('/users', routes);
}