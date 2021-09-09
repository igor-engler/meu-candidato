import express from 'express';
import { config } from './config';
import loaders from './loaders';

function main() {
  const app = express();

  loaders(app);

  app.listen(config.port || 8080, () => console.log('App Listening on url http://localhost:' + 8080));
}

main();

