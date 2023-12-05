export const calculateActiveButtons = (
  changerId: number,
  activeButtons: number[],
  onlyOneActive: boolean,
): number[] => {
  if (onlyOneActive) return [changerId];
  if (activeButtons.includes(changerId)) {
    return activeButtons.filter((value) => value !== changerId);
  } else {
    return [...activeButtons, changerId];
  }
};
