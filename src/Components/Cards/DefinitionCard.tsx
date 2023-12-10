import { PageSetup } from "@/Components/TodayWord.tsx";
import React from "react";
import { WordData } from "@/hooks/wordData.ts";
import { goToPage } from "@/functions/TodayWord/goToPage.ts";
import { WordCard } from "@/Components/Cards/WordCard.tsx";
import { Box, Stack, Typography } from "@mui/material";

type Props = {
  maxPages: number;
  pageSetup: PageSetup;
  setPageSetup: React.Dispatch<React.SetStateAction<PageSetup>>;
  word: WordData;
};

export const DefinitionCard = ({
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
      label="Definition"
    >
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={2}
        sx={{ height: "100%" }}
      >
        <Box>
          {word.description.map((description, index) => (
            <Box key={index}>
              <Typography variant="h5">{description}</Typography>
              <br />
            </Box>
          ))}
        </Box>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          marginBottom="2em !important"
        >
          <Box>
            <Typography ml={3} mb={2} variant="h5">
              Synonyms
            </Typography>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
            >
              {word.synonyms.map((description, index) => (
                <Box key={index}>
                  <Typography variant="h5">{description}</Typography>
                </Box>
              ))}
            </Stack>
          </Box>
          <Box>
            <Typography mr={3} mb={2} variant="h5">
              Translations
            </Typography>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="flex-end"
              spacing={2}
            >
              {word.translation.map((description, index) => (
                <Box key={index}>
                  <Typography variant="h5">{description}</Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </WordCard>
  );
};
