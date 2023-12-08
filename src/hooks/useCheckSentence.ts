import {CheckSentenceData} from "@/hooks/checkSentenceData.ts";

export const useCountries = (): {
  data: CheckSentenceData;
  isLoading: boolean;
  error: boolean | null;
} => ({
  data: ,
  isLoading: false,
  error: null,
});
