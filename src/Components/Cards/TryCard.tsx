import { PageSetup } from "@/Components/TodayWord.tsx";
import React, { useState } from "react";
import { WordData } from "@/hooks/wordData.ts";
import { goToPage } from "@/functions/TodayWord/goToPage.ts";
import { WordCard } from "@/Components/Cards/WordCard.tsx";
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useCheckSentence } from "@/hooks/useCheckSentence.ts";
import { CheckSentenceData } from "@/hooks/checkSentenceData.ts";
import { AfterBackendSendType } from "@/hooks/afterBackendSendType.ts";

type Props = {
  maxPages: number;
  pageSetup: PageSetup;
  setPageSetup: React.Dispatch<React.SetStateAction<PageSetup>>;
  word: WordData;
};

export const TryCard = ({ pageSetup, setPageSetup, word, maxPages }: Props) => {
  const [userInput, setUserInput] = useState("");

  const passPoints: number = 4;

  const [answerStatus, setAnswerStatus] =
    useState<AfterBackendSendType<CheckSentenceData>>();

  const checkAnswer = (answer: string): void => {
    setAnswerStatus(useCheckSentence(answer));
  };

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
      label={`Use "${word.word}" in a sentence`}
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
          onChange={(e) => setUserInput(e.target.value)}
        />
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Button
            sx={{ height: "4em", width: "15em" }}
            variant="outlined"
            onClick={() => checkAnswer(userInput)}
          >
            <Typography variant="h6">Check with AI</Typography>
          </Button>
          {answerStatus?.isLoading && <CircularProgress />}
          {answerStatus?.data && answerStatus.data?.score > 4 && (
            <Box
              sx={{
                width: "2em",
                height: "2em",
                display: "flex",
                alignItems: "streach",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 229.196 229.196"
              >
                <g transform="translate(-4097.992 -3416.812)">
                  <path
                    d="M159.34,2.206H69.856C19.629,2.206,0,21.835,0,72.062v89.485C0,211.773,19.629,231.4,69.856,231.4H159.34c49.938,0,69.856-19.629,69.856-69.856V72.062c0-50.227-19.918-69.856-69.856-69.856"
                    transform="translate(4097.992 3414.606)"
                    fill="#48c300"
                  />
                  <path
                    d="M42.034,101.743.178,59.6,14.9,44.877,42.034,72.011,111.89,2.444l14.722,14.722Z"
                    transform="translate(4149.224 3483.097)"
                    fill="#fff"
                  />
                </g>
              </svg>
            </Box>
          )}
          {answerStatus?.data && answerStatus.data?.score <= passPoints && (
            <Box
              sx={{
                width: "2em",
                height: "2em",
                display: "flex",
                alignItems: "streach",
              }}
            >
              <img src="/src/assets/sentenceFailed.png" />
            </Box>
          )}
        </Stack>

        {answerStatus?.data && answerStatus.data?.score <= passPoints && (
          <Card>
            <CardContent>
              <Typography>Reason:</Typography>
              <br />
              <Typography>{answerStatus.data.reason}</Typography>
            </CardContent>
          </Card>
        )}
      </Stack>
    </WordCard>
  );
};
