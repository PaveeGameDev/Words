import "./App.css";
import { WordCart } from "@/Components/WordCart.tsx";
import { useTodayWord } from "@/hooks/useTodayWord.ts";

function App() {
  const word = useTodayWord();

  return (
    <>
      <WordCart
        word={word.data.word}
        rightOptions={{ onRight: () => console.log("right"), canRight: true }}
        leftOptions={{ onLeft: () => console.log("left"), canLeft: true }}
      >
        {word.data.description}
      </WordCart>
    </>
  );
}

export default App;
