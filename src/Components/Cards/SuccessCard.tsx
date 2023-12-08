import { PageSetup } from "@/Components/TodayWord.tsx";
import React from "react";
import { WordData } from "@/hooks/wordData.ts";
import { goToPage } from "@/functions/TodayWord/goToPage.ts";
import { WordCard } from "@/Components/Cards/WordCard.tsx";
import { Stack, Typography } from "@mui/material";

type Props = {
  maxPages: number;
  pageSetup: PageSetup;
  setPageSetup: React.Dispatch<React.SetStateAction<PageSetup>>;
  word: WordData;
};

export const SuccessCard = ({
  pageSetup,
  setPageSetup,
  word,
  maxPages,
}: Props) => {
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
      label={
        Math.floor(Math.random() * (2 - 1 + 1) + 1) > 1
          ? "Congratulations"
          : "Good Job"
      }
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ height: "100%", width: "100%" }}
      >
        <Typography variant="h4">The word</Typography>
        <Typography variant="h2">{word.word}</Typography>
        <Typography variant="h4">successfully learned</Typography>
      </Stack>
    </WordCard>
  );
};
