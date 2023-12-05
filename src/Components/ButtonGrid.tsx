import { SignupButton } from "./SignupButton.tsx";
import { calculateActiveButtons } from "../functions/Signup/calculateActiveButtons.ts";
import { Box, CircularProgress, Grid } from "@mui/material";
import { useCountries } from "../hooks/useCountries.ts";
import { useState } from "react";

export type ButtonOptions = {
  id: number;
  active: boolean;
  label: string;
  onClick: () => void;
};
export const ButtonGrid = () => {
  const { data, isLoading, error } = useCountries();

  if (error) return null;
  if (isLoading) return <CircularProgress />;

  const [activeButtons, setActiveButtons] = useState<number[]>([]);
  const buttons: ButtonOptions[] = data.map((country) => ({
    id: country.id,
    active: activeButtons.includes(country.id),
    label: country.label,
    onClick: () => onChangeButtonStatus(country.id),
  }));

  const onChangeButtonStatus = (id: number) => {
    setActiveButtons(calculateActiveButtons(id, activeButtons, false));
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
