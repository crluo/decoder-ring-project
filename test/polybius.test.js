const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

// polybius() function tests
describe("polybius", () => {
  //tests for encoding functionality
  it("should return an encoded string when text is inputted", () => {
    const actual = polybius("thinkful");
    expect(actual).to.equal("4432423352125413");
  });
  it("should account for spaces and ignore capital letters when encoding text", () => {
    const actual = polybius("Hello world");
    expect(actual).to.equal("3251131343 2543241341");
  });
  
  // tests for decoding functionality
  it("should encode/decode 'i' and 'j' with the same number", () => {
    const actual = polybius("4432423352125413", false);
    expect(actual).to.equal("th(i/j)nkful");
  });
  it("should return false if number of characters in a string excluding spaces is not even when decoding", () => {
    const actual = polybius("44324233521254134", false);
    expect(actual).to.equal(false);
  });
  it("should account for spaces when decoding", () => {
    const actual = polybius("3251131343 2543241341", false);
    expect(actual).to.equal("hello world");
  });
});