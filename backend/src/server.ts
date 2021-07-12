import express from "express";
import { UserRoutes } from "./Routes/users.routes";
import { config } from './config';

const app = express();

app.use(express.json());

app.use("/api", UserRoutes);

app.listen(config.port, () => console.log('App listening on url http://lolcalhost:' + config.port));