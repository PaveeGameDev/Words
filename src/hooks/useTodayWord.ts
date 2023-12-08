import { WordData } from "@/hooks/wordData.ts";
import word from "@/data/word.ts";
import { capitalizeWordData } from "@/functions/TodayWord/capitalizeWordData.ts";

export const useTodayWord = (): {
  data: WordData;
  isLoading: boolean;
  error: boolean | null;
} => ({
  data: capitalizeWordData(word),
  isLoading: false,
  error: null,
});
