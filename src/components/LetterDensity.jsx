import { ProgressBar } from "./ProgressBar";

const LetterDensity = ({ visibleLetters, handleShowAll, showAll }) => {
  return (
   <section>
      <h2>Cantidad de letras</h2>
      <button onClick={() => handleShowAll(!showAll)}>
        {showAll ? "Ver menos 🔼" : "Ver todos 🔽"}
      </button>
      <article>
        <ul>
          {visibleLetters.map((letter) => (
            <ProgressBar key={letter.letterName} letter={letter} />
          ))}
        </ul>
      </article>
    </section>
  )
   
};

export { LetterDensity };
