const longestRepetition = (text: string): Array<string | number> =>
  Array.from(
    [...new Set(text.split(""))]
      .map((v) => text.match(new RegExp(`${v}+`, "g")))
      .flat()
      .sort((a, b) => b!.length - a!.length)
      .map((v) => [v![0], v!.length])[0]
  );

describe("test longestRepetition", () => {
  test("should return a, 4", () => {
    expect(longestRepetition("aaaabb")).toEqual(["a", 4]);
  });

  test("should return a 4", () => {
    expect(longestRepetition("bbbaaabaaaa")).toEqual(["a", 4]);
  });

  test("should return u 3", () => {
    expect(longestRepetition("cbdeuuu900")).toEqual(["u", 3]);
  });

  test("should return e3", () => {
    expect(longestRepetition("a1bb22c33dd4eee55ff6")).toEqual(["e", 3]);
  });
});
