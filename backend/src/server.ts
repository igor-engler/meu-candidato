import express from 'express';

import { UserRoutes } from './routes/users.routes';

const app = express();

app.use(express.json());

app.use('/users', UserRoutes);

app.listen(3333, () => console.log('server is running'));
