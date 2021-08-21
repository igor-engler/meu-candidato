import express from "express";
import database from "./database";
import server from './server';

export default async (app: express.Application) => {
  const connection = database();
  console.log('DB loaded and connected!');

  server(app);
};
