import { useState } from "react";
import { Header } from "./components/Header.jsx";
import { WriteArea } from "./components/WriteArea.jsx";
import { Controlls } from "./components/Controlls.jsx";
import { Stats } from "./components/Stats.jsx";
import { LetterDensity } from "./components/LetterDensity.jsx";

const App = () => {
  const [text, setText] = useState(
    "Esto es un texto de prueba, puedes borrarlo, modificarlo o comprobar que la app está funcionando correctamente",
  );

  const [excludeSpaces, setExcludeSpaces] = useState(false);
  const [limitCharacter, setLimiterCharacter] = useState(false);
  const [limitValue, setLimitValue] = useState(10);
  const [showAll, setShowAll] = useState(false);

  const handleExcludeSpaces = () => {
    setExcludeSpaces(!excludeSpaces);
  };

  const handleLimitValue = (value) => {
    setLimitValue(Number(value));
  };

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleChangeTextarea = (e) => {
    const value = e.target.value;

    if (limitCharacter) {
      if (value.length <= limitValue) {
        setText(value);
      }
    } else {
      setText(value);
    }
  };

  const handleChangeInputLimit = () => {
    const newLimitState = !limitCharacter;
    setLimiterCharacter(newLimitState);

    if (newLimitState) {
      setText((prevText) => prevText.slice(0, limitValue));
    }
  };

  const characters = excludeSpaces
    ? text.replace(/\s/g, "").length
    : text.length;

  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  const sentences =
    text.trim() === ""
      ? 0
      : text.split(/[.!?]/).filter((sentence) => sentence.trim() !== "").length;

  const readingTime = words === 0 ? 0 : Math.ceil(words / 200);

  const cleanText = text.toLowerCase().replace(/[^a-záéíóúüñ]/g, "");
  const total = cleanText.length;

  const dictionaryLetters = {};

  cleanText.split("").forEach((letter) => {
    dictionaryLetters[letter] = (dictionaryLetters[letter] || 0) + 1;
  });

  const letters = Object.entries(dictionaryLetters).map((dataLetter) => {
    const letter = dataLetter[0];
    const amountLetter = dataLetter[1];

    const infoToRenderLetter = {
      letterName: letter,
      amount: amountLetter,
      percentage: total === 0 ? 0 : (amountLetter / total) * 100, // Protección ante NaN
    };
    return infoToRenderLetter;
  });

  const sortLetters = letters.sort((a, b) => b.amount - a.amount);

  const visibleLetters = showAll ? sortLetters : sortLetters.slice(0, 5);

  return (
    <main>
      <Header />
      <h2>
        Analyze you text <br />
        in real-time.
      </h2>

      <WriteArea handleChangeTextarea={handleChangeTextarea} text={text} />

      <Controlls
        excludeSpaces={excludeSpaces}
        handleExcludeSpaces={handleExcludeSpaces}
        limitCharacter={limitCharacter}
        handleChangeInputLimit={handleChangeInputLimit}
        limitValue={limitValue}
        handleLimitValue={handleLimitValue}
      />

      <Stats
        words={words}
        sentences={sentences}
        readingTime={readingTime}
        characters={characters}
      />

      {text && (
        <LetterDensity
          visibleLetters={visibleLetters}
          showAll={showAll}
          handleShowAll={handleShowAll}
        />
      )}
    </main>
  );
};

export { App };
