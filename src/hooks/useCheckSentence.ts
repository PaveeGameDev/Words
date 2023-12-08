import { CheckSentenceData } from "@/hooks/checkSentenceData.ts";
import checkWord from "@/data/checkWord.ts";

export const useCheckSentence = (
  answer: string,
): {
  data: CheckSentenceData;
  isLoading: boolean;
  error: boolean | null;
} => ({
  data: checkWord,
  isLoading: false,
  error: null,
});
