import { Button, Stack, Typography } from "@mui/material";
import { WordData } from "@/hooks/wordData.ts";

type Props = {
  word: WordData;
  onStartLearning: () => void;
};

export const MainMenu = ({ word, onStartLearning }: Props) => {
  return (
    <>
      <Stack direction="column" alignItems="center" spacing={10}>
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          Daily Word Wisdom
          {/*OneTermTutor*/}
          {/*WordPerDayGuide*/}
        </Typography>

        <Button
          variant="outlined"
          size="large"
          sx={{ py: 2, px: 1 }}
          onClick={onStartLearning}
        >
          <Stack direction="column" alignItems="center" spacing={3}>
            <Typography variant="h5">Your custom daily word is</Typography>
            <Typography variant="h3">{word.word}</Typography>
            <Typography variant="h5">Let's learn it now</Typography>
          </Stack>
        </Button>
      </Stack>
    </>
  );
};
