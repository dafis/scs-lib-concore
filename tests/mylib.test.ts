import { hello_ } from "../src/mylib";

let testnumber = 1;

describe("hello_ function", () => {
  test(`${testnumber++}:: Hello delivers a valid string.`, () => {
    let name = `World`;
    const result = hello_(name);
    expect(result).toEqual("Hello World");
  });
});
