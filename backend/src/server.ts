import express from "express";
import { UserRoutes } from "./routes/users.routes";
import { config } from './config';

const app = express();

app.use(express.json());

app.use("/users", UserRoutes);

app.listen(config.port, () => console.log('App listening on url http://lolcalhost:' + config.port));