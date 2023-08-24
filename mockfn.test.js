const foreach = require("./foreach.js");

const mockCallback = jest.fn((x) => 42 + x);

describe("GET MOCK FUNCTION", function () {
  test("GET the mock function // hàm giả lập", function () {
    foreach([1, 2, 3], mockCallback);
    expect(mockCallback.mock.calls).toHaveLength(3);
    expect(mockCallback.mock.calls[0][0]).toBe(1); // call lan 1
    expect(mockCallback.mock.calls[1][0]).toBe(2); // call lan 2
    expect(mockCallback.mock.calls[2][0]).toBe(3); // call lan 3
    expect(mockCallback.mock.results[2].value).toBe(45); // value cua call 3
  });
	 
});
