const greet = require("./greet");

test("greets the user", () => {
  expect(greet("Alice")).toBe("Hello, Alice!");
});

test.todo("handles empty names");

test.skip("skips this test for now", () => {
  expect(greet("")).toBe("Hello, !");
});
