import { Button } from "@mui/material";
import { ButtonOptions } from "./ButtonGrid.tsx";

type Props = {
  buttonOptions: ButtonOptions;
};

export const SignupButton = ({ buttonOptions }: Props) => {
  return (
    <>
      <Button
        variant={buttonOptions.active ? "contained" : "outlined"}
        onClick={() => buttonOptions.onClick(buttonOptions.id)}
      >
        {buttonOptions.label}
      </Button>
    </>
  );
};
