const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const request = require("supertest");
const app = require("./app"); // Importa solo la app, sin el servidor

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  process.env.DB_URI = uri;

  if (mongoose.connection.readyState !== 1) {
    await mongoose.disconnect();
    await mongoose.connect(uri);
  }
});

afterAll(async () => {
  if (mongoose.connection.readyState === 1) {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  }
  if (mongoServer) {
    await mongoServer.stop();
  }
});

describe("Pruebas de Mocks API", () => {
  describe("GET /api/mocks/mockingusers", () => {
    it("Debería retornar una lista de usuarios simulados", async () => {
      const res = await request(app).get("/api/mocks/mockingusers");
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    }, 10000);
  });

  describe("POST /api/mocks/generateData", () => {
    it("Debería generar e insertar datos correctamente", async () => {
      const res = await request(app)
        .post("/api/mocks/generateData")
        .send({ users: 10 });
      expect(res.statusCode).toBe(201);
      expect(res.body.message).toBe(
        "Datos generados e insertados correctamente"
      );
    }, 15000);
  });
});
