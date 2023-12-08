import { WordData } from "@/hooks/wordData.ts";
import word from "@/data/word.ts";

export const useTodayWord = (): {
  data: WordData;
  isLoading: boolean;
  error: boolean | null;
} => ({
  data: word,
  isLoading: false,
  error: null,
});
