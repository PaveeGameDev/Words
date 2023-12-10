import { CheckSentenceData } from "@/hooks/checkSentenceData.ts";
import checkWord from "@/data/checkWord.ts";

export const useCheckSentence = (
  answer: string,
): {
  data: CheckSentenceData;
  isLoading: boolean;
  error: boolean | null;
  tempAnswer: string;
} => ({
  data: checkWord,
  isLoading: false,
  error: null,
  tempAnswer: answer,
});
