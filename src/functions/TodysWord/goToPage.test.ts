import { goToPage } from "@/functions/TodysWord/goToPage.ts";

describe("goToPage function", () => {
  it("should return the correct object if targetPage is within the valid range", () => {
    const result = goToPage(5, 8, 10, 2);
    expect(result).toEqual({
      currentPage: 8,
      isFirstPage: false,
      isLastPage: false,
    });
  });

  it("should correctly identify if the targetPage is the first page", () => {
    const result = goToPage(2, 2, 5, 2);
    expect(result).toEqual({
      currentPage: 2,
      isFirstPage: true,
      isLastPage: false,
    });
  });

  it("should correctly identify if the targetPage is the last page", () => {
    const result = goToPage(7, 7, 7, 2);
    expect(result).toEqual({
      currentPage: 7,
      isFirstPage: false,
      isLastPage: true,
    });
  });

  it("should handle the case when targetPage is less than minimumPage", () => {
    const result = goToPage(3, 2, 5, 3);
    expect(result).toEqual({
      currentPage: 3,
      isFirstPage: true,
      isLastPage: false,
    });
  });

  it("should handle the case when targetPage is greater than maximumPage", () => {
    const result = goToPage(5, 10, 7, 2);
    expect(result).toEqual({
      currentPage: 5,
      isFirstPage: false,
      isLastPage: false,
    });
  });

  it("should use the default minimumPage value if not provided", () => {
    const result = goToPage(5, 8, 10);
    expect(result).toEqual({
      currentPage: 8,
      isFirstPage: false,
      isLastPage: false,
    });
  });

  it("should handle the case when targetPage is less than minimumPage using default minimumPage", () => {
    const result = goToPage(3, -2, 5);
    expect(result).toEqual({
      currentPage: 3,
      isFirstPage: false,
      isLastPage: false,
    });
  });

  it("should handle the case when targetPage is greater than maximumPage using default minimumPage", () => {
    const result = goToPage(6, 10, 7);
    expect(result).toEqual({
      currentPage: 6,
      isFirstPage: false,
      isLastPage: false,
    });
  });

  it("should handle the case when both minimumPage and maximumPage are 0", () => {
    const result = goToPage(0, 0, 0);
    expect(result).toEqual({
      currentPage: 0,
      isFirstPage: true,
      isLastPage: true,
    });
  });

  it("should correctly identify if the targetPage is the last page", () => {
    const result = goToPage(10, 10, 10);
    expect(result).toEqual({
      currentPage: 10,
      isFirstPage: false,
      isLastPage: true,
    });
  });

  it("should use the default minimumPage value if not provided", () => {
    const result = goToPage(5, 10, 5);
    expect(result).toEqual({
      currentPage: 5,
      isFirstPage: false,
      isLastPage: true,
    });
  });

  it("should handle the case when both minimumPage and maximumPage are 0", () => {
    const result = goToPage(0, 0, 0);
    expect(result).toEqual({
      currentPage: 0,
      isFirstPage: true,
      isLastPage: true,
    });
  });
});
