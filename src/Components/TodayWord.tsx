import { useTodayWord } from "@/hooks/useTodayWord.ts";
import { WordCard } from "@/Components/Cards/WordCard.tsx";
import { goToPage } from "@/functions/TodysWord/goToPage.ts";
import { useState } from "react";

export type PageSetup = {
  currentPage: number;
  isFirstPage: boolean;
  isLastPage: boolean;
};

export const TodayWord = () => {
  const word = useTodayWord();
  const maxPages = 2;

  const [pageSetup, setPageSetup] = useState<PageSetup>(
    goToPage(0, 0, maxPages),
  );

  return (
    <WordCard
      word={word.data.word}
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
      {word.data.description}
    </WordCard>
  );
};
