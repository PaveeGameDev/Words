import { calculateActiveButtons } from "./calculateActiveButtons.ts"; // Make sure to replace with the correct path

describe("calculateChangeButtonStatus", () => {
  // Test case for onlyOneActive is true
  it("should return an array containing only the changerId when onlyOneActive is true", () => {
    const changerId = 1;
    const activeButtons = [2, 3, 4];
    const onlyOneActive = true;

    const result = calculateActiveButtons(
      changerId,
      activeButtons,
      onlyOneActive,
    );

    expect(result).toEqual([changerId]);
  });

  // Test case when changerId is already in activeButtons
  it("should remove changerId from activeButtons if it is already present", () => {
    const changerId = 2;
    const activeButtons = [1, 2, 3];
    const onlyOneActive = false;

    const result = calculateActiveButtons(
      changerId,
      activeButtons,
      onlyOneActive,
    );

    expect(result).toEqual([1, 3]); // 2 should be removed
  });

  // Test case when changerId is not in activeButtons
  it("should add changerId to activeButtons if it is not present", () => {
    const changerId = 4;
    const activeButtons = [1, 2, 3];
    const onlyOneActive = false;

    const result = calculateActiveButtons(
      changerId,
      activeButtons,
      onlyOneActive,
    );

    expect(result).toEqual([1, 2, 3, 4]); // 4 should be added
  });

  // Test case for an empty activeButtons array
  it("should add changerId to activeButtons when activeButtons is an empty array", () => {
    const changerId = 1;
    const activeButtons: number[] = [];
    const onlyOneActive = false;

    const result = calculateActiveButtons(
      changerId,
      activeButtons,
      onlyOneActive,
    );

    expect(result).toEqual([changerId]); // 1 should be added
  });
});
