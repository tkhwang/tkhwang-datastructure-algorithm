const LetterCountI = require("./index");

describe('Letter Count Test', () => {
  test('TC #1', () => {
    expect(LetterCountI("Hello apple pie")).toEqual("Hello");
  });
});