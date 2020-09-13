const numUniqueEmails = require("./index");

describe("numUniqueEmails", () => {
  it("should fail auto generated test", () => {
    expect(
      numUniqueEmails([
        "test.email+alex@leetcode.com",
        "test.e.mail+bob.cathy@leetcode.com",
        "testemail+david@lee.tcode.com"
      ])
    ).toBe(["testemail@leetcode.com", "testemail@lee.tcode.com"].length);
  });
});
