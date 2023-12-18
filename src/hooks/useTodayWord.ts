import { WordData } from "@/hooks/wordData.ts";
import { useData } from "@/hooks/useData.ts";
import { capitalizeWordData } from "@/functions/TodayWord/capitalizeWordData.ts";

export const useTodayWord = (): {
  data: WordData;
  isLoading: boolean;
  error: string;
} => {
  const response = useData<WordData>("/word/todayWord", { method: "post" });

  return {
    data: capitalizeWordData(response.data[0]),
    isLoading: response.isLoading,
    error: response.error,
  };
};
