const request = require("supertest");
const app = require("./app");

describe("User made login", function () {
  describe("Given a user and password", function () {
    // Control status code
    test("Given a user and password", async () => {
      const abc = await request(app).post("/login").send({
        password: "password",
        username: "username",
      });

      expect(abc.status).toBe(200);
    });

    test("should given json response", async () => {
      const abc = await request(app).post("/login").send({
        password: "password",
        username: "username",
      });
      expect(abc.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });

    test("truthy response", async () => {
      const n = null;
      expect(n).toBeNull(); // đúng giá trị null
      expect(n).toBeDefined(); // đã được định nghĩa
      expect(n).not.toBeUndefined(); // Không phải undefined
      expect(n).not.toBeTruthy(); // nó không phải là giá true
      expect(n).toBeFalsy(); // là là giá trị false
    });

    test("two plus two", () => {
      beforeEach;
      const value = 2 + 2;
      expect(value).toBeGreaterThan(3); // GIÁ TRỊ LỚN HƠN 3
      expect(value).toBeGreaterThanOrEqual(3.5); // GIÁ TRỊ LỚN HƠN HOẶC BẰNG 3.5
      expect(value).toBeLessThan(5); // GIÁ TRỊ NHỎ HƠN 5
      expect(value).toBeLessThanOrEqual(4.5); // GIÁ TRỊ NHỎ HƠN HOẶC BẰNG
      // toBe and toEqual are equivalent for numbers
      expect(value).toBe(4);
      expect(value).toEqual(4);
    });
  });

  describe("How to compare", () => {
    beforeEach(() => {
      console.log("------------------------------------------------");
    });
    test("should compare", () => {
      console.log("How to compare");
    });

    test("should compare", () => {
      console.log("How to compare 1");
    });
    test("should compare", () => {
      console.log("How to compare 2");
    });
  });
});
