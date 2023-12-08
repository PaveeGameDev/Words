import { WordData } from "@/hooks/wordData.ts";
import { capitalizeWordData } from "@/functions/TodayWord/capitalizeWordData.ts";

describe("capitalizeWordData", () => {
  it("should capitalize string values in WordData", () => {
    const input: WordData = {
      word: "apple",
      description: ["fruit"],
      synonyms: ["fruit"],
      translation: ["manzana"],
      example: ["I like to eat Apples."],
    };

    const expectedOutput: WordData = {
      word: "Apple",
      description: ["Fruit"],
      synonyms: ["Fruit"],
      translation: ["Manzana"],
      example: ["I like to eat Apples."],
    };

    const result = capitalizeWordData(input);

    expect(result).toEqual(expectedOutput);
  });

  it("should handle empty WordData", () => {
    const input: WordData = {
      word: "",
      description: [],
      synonyms: [],
      translation: [],
      example: [],
    };

    const expectedOutput: WordData = {
      word: "",
      description: [],
      synonyms: [],
      translation: [],
      example: [],
    };

    const result = capitalizeWordData(input);

    expect(result).toEqual(expectedOutput);
  });

  it("should capitalize mixed-case string values in WordData", () => {
    const input: WordData = {
      word: "OrAnGe",
      description: ["color"],
      synonyms: ["fruit"],
      translation: ["naranja"],
      example: ["I like to eat oranges."],
    };

    const expectedOutput: WordData = {
      word: "OrAnGe",
      description: ["Color"],
      synonyms: ["Fruit"],
      translation: ["Naranja"],
      example: ["I like to eat oranges."],
    };

    const result = capitalizeWordData(input);

    expect(result).toEqual(expectedOutput);
  });

  it("should handle WordData with additional properties", () => {
    const input: WordData = {
      word: "book",
      description: ["item"],
      synonyms: ["novel"],
      translation: ["libro"],
      example: ["I read a book."],
      additionalProperty: "extra",
    };

    const expectedOutput: WordData = {
      word: "Book",
      description: ["Item"],
      synonyms: ["Novel"],
      translation: ["Libro"],
      example: ["I read a book."],
      additionalProperty: "Extra",
    };

    const result = capitalizeWordData(input);

    expect(result).toEqual(expectedOutput);
  });
});
