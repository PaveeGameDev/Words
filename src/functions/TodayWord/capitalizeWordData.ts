import { WordData } from "@/hooks/wordData.ts";

export const capitalizeWordData = (wordData: WordData): WordData => {
  const capitalizedWordData: WordData = {
    ...wordData,
  };

  for (var key in wordData) {
    if (wordData.hasOwnProperty(key)) {
      const value = wordData[key];

      if (Array.isArray(value)) {
        const capitalizedValue: string[] = [];
        value.forEach((val) =>
          capitalizedValue.push(val.charAt(0).toUpperCase() + val.slice(1)),
        );
        capitalizedWordData[key] = capitalizedValue;
      } else {
        capitalizedWordData[key] =
          value.charAt(0).toUpperCase() + value.slice(1);
      }
    }
  }

  return capitalizedWordData;
};
