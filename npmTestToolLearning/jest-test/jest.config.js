/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  coverageDirectory: "coverage",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$",
};
