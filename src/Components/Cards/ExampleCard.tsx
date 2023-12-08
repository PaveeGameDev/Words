import { PageSetup } from "@/Components/TodayWord.tsx";
import React from "react";
import { WordData } from "@/hooks/wordData.ts";
import { goToPage } from "@/functions/TodysWord/goToPage.ts";
import { WordCard } from "@/Components/Cards/WordCard.tsx";
import { Box, Typography } from "@mui/material";

type Props = {
  maxPages: number;
  pageSetup: PageSetup;
  setPageSetup: React.Dispatch<React.SetStateAction<PageSetup>>;
  word: WordData;
};

export const ExampleCard = ({
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
    >
      {word.example.map((description, index) => (
        <Box key={index}>
          <Typography variant="h5">{description}</Typography>
          <br />
        </Box>
      ))}
    </WordCard>
  );
};
