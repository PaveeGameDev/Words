import { ReactNode } from "react";
import { WordToLearnDisplay } from "@/Components/WordToLearnDisplay.tsx";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { ProgressWord } from "@/Components/ProgressWord.tsx";

type Props = {
  word: string;
  label: string;
  children: ReactNode;
  leftOptions: { onLeft: () => void; canLeft: boolean };
  rightOptions: { onRight: () => void; canRight: boolean };
};

export const WordCard = ({
  word,
  label,
  children,
  leftOptions,
  rightOptions,
}: Props) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="stretch"
      style={{ minHeight: "98vh" }}
    >
      <Grid item style={{ flex: 1 }} alignItems="center">
        <Stack
          direction="column"
          justifyContent="top"
          alignItems="center"
          spacing={2}
          sx={{ height: "84vh" }}
        >
          <WordToLearnDisplay word={word} />
          <Divider
            sx={{
              width: "-webkit-fill-available",
              height: "10px",
              margin: "0 !important",
            }}
          />
          <Box>
            <Typography align="center" variant="h4">
              {label}
            </Typography>
          </Box>
          <Box
            sx={{
              height: "100%",
              width: "90%",
            }}
          >
            {children}
          </Box>
        </Stack>
      </Grid>
      <Grid item>
        <ProgressWord leftOptions={leftOptions} rightOptions={rightOptions} />
      </Grid>
    </Grid>
  );
};
