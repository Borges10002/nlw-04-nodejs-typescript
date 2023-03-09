import request from "supertest";
import { app } from "../app";

import createConnection from "../database";

describe("Users", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it("Should be able to create a new user", async () => {
    const response = await request(app).post("/users").send({
      email: "borges10002@gmail.com",
      name: "User Exemaple",
    });

    expect(response.status).toBe(201);
  });
});
