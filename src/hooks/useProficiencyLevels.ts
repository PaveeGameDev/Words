import { ButtonData } from "@/hooks/buttonData.ts";
import proficiencyLevels from "@/data/proficiencyLevels.ts";

export const useProficiencyLevels = (): {
  data: ButtonData[];
  isLoading: boolean;
  error: boolean | null;
} => ({
  data: proficiencyLevels,
  isLoading: false,
  error: null,
});
