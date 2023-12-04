import { SignupButton } from "./SignupButton.tsx";
import { useState } from "react";

export type ButtonOptions = {
  id: number;
  active: boolean;
  label: string;
  onClick: (id: number) => void;
};

const calculateChangeButtonStatus = (
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

export const ButtonGrid = () => {
  const [activeButtons, setActiveButtons] = useState<number[]>([]);

  const testOptions: ButtonOptions = {
    id: 1,
    active: activeButtons.includes(1),
    label: "Czech",
    onClick: (id: number) => onChangeButtonStatus(id),
  };
  const testOptions2: ButtonOptions = {
    id: 2,
    active: activeButtons.includes(2),
    label: "Polish",
    onClick: (id: number) => onChangeButtonStatus(id),
  };

  const onChangeButtonStatus = (id: number) => {
    setActiveButtons(calculateChangeButtonStatus(id, activeButtons, true));
  };

  return (
    <>
      <SignupButton buttonOptions={testOptions} />
      <SignupButton buttonOptions={testOptions2} />
    </>
  );
};
