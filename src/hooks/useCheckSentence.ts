import { CheckSentenceData } from "@/hooks/checkSentenceData.ts";
import { useData } from "@/hooks/useData.ts";

export const useCheckSentence = (
  answer: string,
  numOfCalls: number,
): {
  data: CheckSentenceData;
  isLoading: boolean;
  error: string;
} => {
  const response = useData<CheckSentenceData>(
    "/word/checkWord",
    {
      method: "post",
      data: { sentence: answer },
    },
    [numOfCalls],
  );
  return {
    data: response.data[0],
    isLoading: response.isLoading,
    error: response.error,
  };
};
