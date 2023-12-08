import { useTodayWord } from "@/hooks/useTodayWord.ts";
import { goToPage } from "@/functions/TodysWord/goToPage.ts";
import { useState } from "react";
import { DefinitionCard } from "@/Components/Cards/DefinitionCard.tsx";
import { ExampleCard } from "@/Components/Cards/ExampleCard.tsx";

export type PageSetup = {
  currentPage: number;
  isFirstPage: boolean;
  isLastPage: boolean;
};

export const TodayWord = () => {
  const word = useTodayWord();
  const maxPages = 1;

  const [pageSetup, setPageSetup] = useState<PageSetup>(
    goToPage(0, 0, maxPages),
  );

  switch (pageSetup.currentPage) {
    case 0:
      return (
        <DefinitionCard
          maxPages={maxPages}
          pageSetup={pageSetup}
          setPageSetup={setPageSetup}
          word={word.data}
        />
      );

    case 1:
      return (
        <ExampleCard
          maxPages={maxPages}
          pageSetup={pageSetup}
          setPageSetup={setPageSetup}
          word={word.data}
        />
      );
  }

  return <></>;
};
