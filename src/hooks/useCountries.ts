import countries from "../data/countries.ts";

export type country = {
  id: number;
  name: string;
};

export const useCountries = () => ({
  data: countries,
  isLoading: false,
  error: null,
});
