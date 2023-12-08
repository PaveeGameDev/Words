import { useTodayWord } from "@/hooks/useTodayWord.ts";
import { goToPage } from "@/functions/TodayWord/goToPage.ts";
import { useState } from "react";
import { DefinitionCard } from "@/Components/Cards/DefinitionCard.tsx";
import { ExampleCard } from "@/Components/Cards/ExampleCard.tsx";
import { TryCard } from "@/Components/Cards/TryCard.tsx";
import { SuccessCard } from "@/Components/Cards/SuccessCard.tsx";

export type PageSetup = {
  currentPage: number;
  isFirstPage: boolean;
  isLastPage: boolean;
};

export const TodayWord = () => {
  const word = useTodayWord();

  const maxPages = 3;

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

    case 2:
      return (
        <TryCard
          maxPages={maxPages}
          pageSetup={pageSetup}
          setPageSetup={setPageSetup}
          word={word.data}
        />
      );

    case 3:
      return (
        <SuccessCard
          maxPages={maxPages}
          pageSetup={pageSetup}
          setPageSetup={setPageSetup}
          word={word.data}
        />
      );
  }

  return <></>;
};
