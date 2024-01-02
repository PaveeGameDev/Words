import "./App.css";
import { MainMenu } from "@/Components/MainMenu.tsx";
import { TodayWord } from "@/Components/TodayWord.tsx";
import { useState } from "react";
import { AfterBackendSendType } from "@/hooks/afterBackendSendType.ts";
import { WordData } from "@/hooks/wordData.ts";
import { useTodayWord } from "@/hooks/useTodayWord.ts";
// import { Signup } from "@/Components/Signup.tsx";

function App() {
  const word: AfterBackendSendType<WordData> = useTodayWord();
  const [learningWord, setLearningWord] = useState<boolean>(false);
  const goToLearnWord = (): void => {
    setLearningWord(true);
  };

  const goToMainMenu = (): void => {
    setLearningWord(false);
  };

  return (
    <>
      {/*<Signup />*/}
      {learningWord ? (
        <TodayWord word={word} goToMainMenu={goToMainMenu} />
      ) : (
        <MainMenu word={word.data} onStartLearning={goToLearnWord} />
      )}
    </>
  );
}

export default App;
