import { ButtonData } from "@/hooks/buttonData.ts";
import interests from "@/data/interests.ts";

export const useInterests = (): {
  data: ButtonData[];
  isLoading: boolean;
  error: boolean | null;
} => ({
  data: interests,
  isLoading: false,
  error: null,
});
