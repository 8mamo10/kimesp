import { greeter } from "./main";

describe(greeter.name, () => {
  it("should return greeting", () => {
    const greeting = greeter("John");

    expect(greeting).toBe("Hello, John!");
  });
});
