import { Button, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

type Props = {
  leftOptions: { onLeft: () => void; canLeft: boolean };
  rightOptions: { onRight: () => void; canRight: boolean };
};

export const ProgressWord = ({
  leftOptions: { onLeft, canLeft },
  rightOptions: { onRight, canRight },
}: Props) => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
        sx={{ width: "100%", height: "75px" }}
      >
        <Button
          variant="contained"
          disabled={!canLeft}
          onClick={onLeft}
          sx={{ width: "50%", height: "100%" }}
          disableElevation
        >
          <NavigateNextIcon sx={{ transform: "rotate(180deg)" }} />
        </Button>
        <Button
          variant="contained"
          disabled={!canRight}
          onClick={onRight}
          sx={{ width: "50%", height: "100%" }}
          disableElevation
        >
          <NavigateNextIcon />
        </Button>
      </Stack>
    </>
  );
};
