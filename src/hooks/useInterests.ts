import { ButtonData } from "@/hooks/buttonData.ts";
import { useData } from "@/hooks/useData.ts";

export const useInterests = (): {
  data: ButtonData[];
  isLoading: boolean;
  error: string;
} => {
  const response = useData<ButtonData>("/signup/interests");
  return {
    data: response.data,
    isLoading: response.isLoading,
    error: response.error,
  };
};
