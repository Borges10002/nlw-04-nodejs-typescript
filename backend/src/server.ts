import express from "express";
import "reflect-metadata";
import "./database";

import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

const port = {
  port: 3333,
  host: "0.0.0.0",
};

app.listen(port, () => console.log(`Server is running - ${port.port}`));
