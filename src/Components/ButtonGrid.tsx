import { SignupButton } from "./SignupButton.tsx";
import { calculateActiveButtons } from "../functions/Signup/calculateActiveButtons.ts";
import { Box, CircularProgress, Grid } from "@mui/material";
import { useState } from "react";
import { ButtonData } from "@/hooks/buttonData.ts";

export type ButtonOptions = {
  id: number;
  active: boolean;
  name: string;
  onClick: () => void;
};

type Props = {
  data: ButtonData[];
  isLoading: boolean;
  error: boolean | null;
  onlyOneActive: boolean;
};
export const ButtonGrid = ({
  data,
  isLoading,
  error,
  onlyOneActive,
}: Props) => {
  if (error) return null;
  if (isLoading) return <CircularProgress />;

  const [activeButtons, setActiveButtons] = useState<number[]>([]);
  const buttons: ButtonOptions[] = data.map((dataPiece) => ({
    id: dataPiece.id,
    active: activeButtons.includes(dataPiece.id),
    name: dataPiece.name,
    onClick: () => onChangeButtonStatus(dataPiece.id),
  }));

  const onChangeButtonStatus = (id: number) => {
    setActiveButtons(calculateActiveButtons(id, activeButtons, onlyOneActive));
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columnSpacing={2}>
          {Array.from(buttons).map((options) => (
            <Grid item key={options.id}>
              <SignupButton buttonOptions={options} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
