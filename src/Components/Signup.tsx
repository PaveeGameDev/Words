import { ButtonGrid } from "@/Components/ButtonGrid.tsx";
import { useCountries } from "@/hooks/useCountries.ts";
import { ButtonData } from "@/hooks/buttonData.ts";
import { Typography } from "@mui/material";
import { useProficiencyLevels } from "@/hooks/useProficiencyLevels.ts";
import { useInterests } from "@/hooks/useInterests.ts";
import { AfterBackendSendType } from "@/hooks/afterBackendSendType.ts";

export const Signup = () => {
  const countries: AfterBackendSendType<ButtonData[]> = useCountries();

  const proficiencyLevels: AfterBackendSendType<ButtonData[]> =
    useProficiencyLevels();

  const interests: AfterBackendSendType<ButtonData[]> = useInterests();

  return (
    <>
      <Typography variant="h1">Signup</Typography>
      <Typography variant="h2">Proficiency level</Typography>
      <ButtonGrid
        data={proficiencyLevels.data}
        isLoading={proficiencyLevels.isLoading}
        error={proficiencyLevels.error}
        onlyOneActive={true}
      />

      <Typography variant="h2">Interests</Typography>
      <ButtonGrid
        data={interests.data}
        isLoading={interests.isLoading}
        error={interests.error}
        onlyOneActive={false}
      />
      <Typography variant="h2">Mother language</Typography>
      <ButtonGrid
        data={countries.data}
        isLoading={countries.isLoading}
        error={countries.error}
        onlyOneActive={true}
      />
    </>
  );
};
