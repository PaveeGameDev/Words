import { PageSetup } from "@/Components/TodayWord.tsx";
import React, { useState } from "react";
import { WordData } from "@/hooks/wordData.ts";
import { goToPage } from "@/functions/TodayWord/goToPage.ts";
import { WordCard } from "@/Components/Cards/WordCard.tsx";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

type Props = {
  maxPages: number;
  pageSetup: PageSetup;
  setPageSetup: React.Dispatch<React.SetStateAction<PageSetup>>;
  word: WordData;
};

export const TryCard = ({ pageSetup, setPageSetup, word, maxPages }: Props) => {
  return (
    <WordCard
      word={word.word}
      rightOptions={{
        onRight: () =>
          setPageSetup(
            goToPage(
              pageSetup.currentPage,
              pageSetup.currentPage + 1,
              maxPages,
            ),
          ),
        canRight: !pageSetup.isLastPage,
      }}
      leftOptions={{
        onLeft: () =>
          setPageSetup(
            goToPage(
              pageSetup.currentPage,
              pageSetup.currentPage - 1,
              maxPages,
            ),
          ),
        canLeft: !pageSetup?.isFirstPage,
      }}
      label="Try it yourself"
    >
      <Stack
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
        sx={{ height: "100%", width: "100%" }}
      >
        <TextField
          multiline
          minRows={3}
          maxRows={15}
          variant="outlined"
          label="Your sentence"
          fullWidth
        />
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Button sx={{ height: "4em", width: "15em" }} variant="outlined">
            <Typography variant="h6">Check with AI</Typography>
          </Button>
          <CircularProgress />
        </Stack>
      </Stack>
    </WordCard>
  );
};
