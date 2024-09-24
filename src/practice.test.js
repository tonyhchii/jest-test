const practice = require("./practice.js");

it("Not capitilizing first letter", () => {
  expect(practice.capitiize("wow")).toBe("Wow");
});

it("Not capitilizing first letter 2", () => {
  expect(practice.capitiize("start")).toBe("Start");
});

it("Not reversing string", () => {
  expect(practice.reverseString("start")).toBe("trats");
});

it("Calculator Object not working", () => {
  const newCalc = practice.calculator();
  expect(newCalc.add(1, 2)).toBe(3);
  expect(newCalc.subtract(2, 2)).toBe(0);
  expect(newCalc.multiply(3, 3)).toBe(9);
});

it("Caesar cypher not working", () => {
  expect(practice.caesarCipher("xyz", 3)).toBe("abc");
});

it("Caesar cypher not working 2", () => {
  expect(practice.caesarCipher("abc", 3)).toBe("def");
});

it("Caesar cypher shift factor is not working", () => {
  expect(practice.caesarCipher("abc", 5)).toBe("fgh");
});

it("Caesar cypher upperCase is not working", () => {
  expect(practice.caesarCipher("heLLo", 3)).toBe("khOOr");
});

it("Caesar cypher punctuation is not working", () => {
  expect(practice.caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

it("Analyze Array is not working", () => {
  expect(practice.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

it("Analyze Array is not working 2", () => {
  expect(practice.analyzeArray([1, 5, 3, 4, 2, 6])).toEqual({
    average: 3.5,
    min: 1,
    max: 6,
    length: 6,
  });
});
