import { PageSetup } from "@/Components/TodayWord.tsx";

export const goToPage = (
  currentPage: number,
  targetPage: number,
  maximumPage: number,
  minimumPage: number = 0,
): PageSetup => {
  if (targetPage < minimumPage || targetPage > maximumPage)
    return goToPage(currentPage, currentPage, maximumPage, minimumPage);

  return {
    currentPage: targetPage,
    isFirstPage: targetPage == minimumPage,
    isLastPage: targetPage == maximumPage,
  };
};
