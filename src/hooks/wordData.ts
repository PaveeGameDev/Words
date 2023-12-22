export type WordData = {
  word: string;
  description: string[];
  synonyms: string[];
  translation: string[];
  example: string[];
  interest: string;
  level: number;
  [key: string]: string | string[] | number;
};
