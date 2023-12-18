import { ButtonData } from "@/hooks/buttonData.ts";
import { useData } from "@/hooks/useData.ts";

export const useCountries = (): {
  data: ButtonData[];
  isLoading: boolean;
  error: string;
} => {
  const response = useData<ButtonData>("/signup/countries");
  return {
    data: response.data,
    isLoading: response.isLoading,
    error: response.error,
  };
};
