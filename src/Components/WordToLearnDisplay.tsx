import { Box, IconButton, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

type Props = {
  word: string;
  onHomeClick: () => void;
};

export const WordToLearnDisplay = ({ word, onHomeClick }: Props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          width: "100%",
        }}
      >
        <Typography variant="h2">{word}</Typography>
        <IconButton
          onClick={onHomeClick}
          sx={{
            position: "absolute",
            right: 5,
          }}
        >
          <HomeIcon />
        </IconButton>
      </Box>
    </>
  );
};
