import express from "express";
import "reflect-metadata";
import createConnection from "./database";

createConnection();

import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

export { app };
