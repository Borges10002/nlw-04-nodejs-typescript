import { app } from "./app";

const port = {
  port: 3333,
  host: "0.0.0.0",
};

app.listen(port, () => console.log(`Server is running - ${port.port}`));
