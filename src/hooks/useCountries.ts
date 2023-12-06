import countries from "../data/countries.ts";
import { ButtonData } from "@/hooks/buttonData.ts";

export const useCountries = (): {
  data: ButtonData[];
  isLoading: boolean;
  error: boolean | null;
} => ({
  data: countries,
  isLoading: false,
  error: null,
});
