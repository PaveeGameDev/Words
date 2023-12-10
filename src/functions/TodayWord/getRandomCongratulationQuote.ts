const getRandomCongratulationQuote = (): string => {
  const quotes: string[] = ["Good job", "Congratulations"];

  return quotes[Math.floor(Math.random() * quotes.length)];
};
