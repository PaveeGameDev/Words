import { ReactNode } from "react";
import { WordToLearnDisplay } from "@/Components/WordToLearnDisplay.tsx";
import { Box, Divider, Stack } from "@mui/material";
import { ProgressWord } from "@/Components/ProgressWord.tsx";

type Props = {
  word: string;
  children: ReactNode;
  leftOptions: { onLeft: () => void; canLeft: boolean };
  rightOptions: { onRight: () => void; canRight: boolean };
};

export const WordCart = ({
  word,
  children,
  leftOptions,
  rightOptions,
}: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "95vh", // Set the height of the container to 100% of the viewport height
      }}
    >
      <Stack
        direction="column"
        justifyContent="top"
        alignItems="center"
        spacing={2}
        sx={{ flex: 1 }} // Allow this Stack to take up the remaining space
      >
        <WordToLearnDisplay word={word} />
        <Divider sx={{ width: "-webkit-fill-available", height: "10px" }} />
        <Box sx={{ height: "100%" }}>{children}</Box>
      </Stack>
      <ProgressWord leftOptions={leftOptions} rightOptions={rightOptions} />
    </Box>
  );
};
