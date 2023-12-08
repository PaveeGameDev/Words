import { Typography } from "@mui/material";

type Props = {
  word: string;
};

export const WordToLearnDisplay = ({ word }: Props) => {
  return (
    <>
      <Typography variant="h2">{word}</Typography>
    </>
  );
};
