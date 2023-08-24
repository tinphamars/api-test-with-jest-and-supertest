const request = require("supertest");
const mongoose = require("mongoose");
const app = require("./app");
const Jest = require("./jest.model");

beforeAll(async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/admin", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterEach(async () => {
  // await mongoose.connection.db.dropDatabase();
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe("API Tests", () => {
  it("should fetch list of users", async () => {
    const response = await request(app).get("/api/users");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("success"); // Kiểm tra dữ liệu trả về là mảng rỗng ban đầu
  });

  it("should create a new user", async () => {
    const newUser = {
      name: "testUser",
      email: "test100@example.com",
    };

    const response = await request(app).post("/api/users").send(newUser);
    expect(response.status).toBe(201);

    const createdUser = await Jest.findOne({ email: newUser.email });
    expect(createdUser).toBeTruthy();
    expect(createdUser.email).toBe(newUser.email);
  });
});
