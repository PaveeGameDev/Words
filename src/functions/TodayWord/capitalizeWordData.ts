import { WordData } from "@/hooks/wordData.ts";

export const capitalizeWordData = (wordData: WordData): WordData => {
  const capitalizedWordData: WordData = { ...wordData };

  for (var key in wordData) {
    if (wordData.hasOwnProperty(key)) {
      const value = wordData[key];

      if (typeof value === "string") {
        // Capitalize the first letter of each word for string values
        capitalizedWordData[key] = value
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      } else if (Array.isArray(value)) {
        // Capitalize the first letter of each word for array values
        const capitalizedValue: string[] = value.map((val) =>
          typeof val === "string"
            ? val.charAt(0).toUpperCase() + val.slice(1)
            : val,
        );
        capitalizedWordData[key] = capitalizedValue;
      } else {
        // If the value is not a string or an array, keep it as is
        capitalizedWordData[key] = value;
      }
    }
  }

  return capitalizedWordData;
};
