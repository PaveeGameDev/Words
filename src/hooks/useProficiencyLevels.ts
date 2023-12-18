import { ButtonData } from "@/hooks/buttonData.ts";
import { useData } from "@/hooks/useData.ts";

export const useProficiencyLevels = (): {
  data: ButtonData[];
  isLoading: boolean;
  error: string;
} => {
  const response = useData<ButtonData>("/signup/proficiencyLevels");
  return {
    data: response.data,
    isLoading: response.isLoading,
    error: response.error,
  };
};
