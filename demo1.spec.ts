export const demo1 = (a: number, b: number): number => a + b;

describe("test demo1", () => {
  expect(demo1(1, 1)).toBe(2);
});
