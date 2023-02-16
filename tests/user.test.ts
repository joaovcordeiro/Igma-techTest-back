import supertest from "supertest";
import app from "../src/index.js";
import { prisma } from "../src/config/database.js";
import * as userFactory from "./factories/userFactory.js";

const agent = supertest(app);

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE "users" CASCADE;`;
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe("POST /create", () => {
  it("should create a new user", async () => {
    const body = await userFactory.createUser(true, true, true);

    const response = await agent.post("/create").send(body);
    const status = response.status;

    const userCreated = await userFactory.verifyUser(body);

    expect(status).toBe(201);
    expect(userCreated).not.toBeUndefined();
  });

  it("should return a error because the cpf already exists", async () => {
    const body = await userFactory.createUser(true, true, true);
    await agent.post("/create").send(body);
    const result = await agent.post("/create").send(body);
    const status = result.status;
    const userCreated = await userFactory.verifyUser(body);

    expect(status).toBe(409);
    expect(userCreated).not.toBeUndefined();
  });

  it("should return a error because the cpf is invalid", async () => {
    const body = await userFactory.createUser(false, true, true);
    const result = await agent.post("/create").send(body);
    const status = result.status;
    const userCreated = await userFactory.verifyUser(body);

    expect(status).toBe(422);
    expect(userCreated).toBeNull();
  });

  it("should return a error because the birthDate is invalid", async () => {
    const body = await userFactory.createUser(true, false, true);
    const result = await agent.post("/create").send(body);
    const status = result.status;
    const userCreated = await userFactory.verifyUser(body);

    expect(status).toBe(422);
    expect(userCreated).toBeNull();
  });

  it("should return a error because the name is invalid", async () => {
    const body = await userFactory.createUser(true, true, false);
    const result = await agent.post("/create").send(body);
    const status = result.status;
    const userCreated = await userFactory.verifyUser(body);

    expect(status).toBe(422);
    expect(userCreated).toBeNull();
  });
});

describe("GET /users/:page?/:take?", () => {
  it("should return a list of users", async () => {
    const body = await userFactory.createUser(true, true, true);
    await agent.post("/create").send(body);
    const response = await agent.get("/users");
    const status = response.status;

    expect(status).toBe(200);
    expect(response.body).not.toBeUndefined();
  });

  it("should return a list of users with pagination", async () => {
    const body = await userFactory.createUser(true, true, true);
    await agent.post("/create").send(body);
    const response = await agent.get("/users/1/1");
    const status = response.status;

    expect(status).toBe(200);
    expect(response.body).not.toBeUndefined();
  });

  it("should return a error because the page is invalid", async () => {
    const body = await userFactory.createUser(true, true, true);
    await agent.post("/create").send(body);
    const response = await agent.get("/users/0/1");
    const status = response.status;

    expect(status).toBe(422);
    expect(response.body).not.toBeUndefined();
  });

  it("should return a error because the take is invalid", async () => {
    const body = await userFactory.createUser(true, true, true);
    await agent.post("/create").send(body);
    const response = await agent.get("/users/1/0");
    const status = response.status;

    expect(status).toBe(422);
    expect(response.body).not.toBeUndefined();
  });

  it("should return a error because the page and take are invalid", async () => {
    const body = await userFactory.createUser(true, true, true);
    await agent.post("/create").send(body);
    const response = await agent.get("/users/0/0");
    const status = response.status;

    expect(status).toBe(422);
    expect(response.body).not.toBeUndefined();
  });
});

describe("GET /user/:cpf", () => {
  it("should return a user", async () => {
    const body = await userFactory.createUser(true, true, true);
    await agent.post("/create").send(body);
    const response = await agent.get(`/user/${body.cpf}`);
    const status = response.status;

    expect(status).toBe(200);
    expect(response.body).not.toBeUndefined();
  });

  it("should return a error because the cpf is invalid", async () => {
    const body = await userFactory.createUser(false, true, true);
    const response = await agent.get(`/user/${body.cpf}`);
    const status = response.status;

    expect(status).toBe(422);
    expect(response.body).not.toBeUndefined();
  });

  it("should return a error because the user does not exist", async () => {
    const body = await userFactory.createUser(true, true, true);
    const response = await agent.get(`/user/${body.cpf}`);
    const status = response.status;

    expect(status).toBe(404);
    expect(response.body).not.toBeUndefined();
  });
});
