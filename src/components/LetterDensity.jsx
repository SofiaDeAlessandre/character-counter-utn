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
            <li key={letter.letterName}>
              <span>{letter.letterName.toUpperCase()}</span>
              <meter min="0" max="100" value={letter.percentage}></meter>
              <span>
                {letter.amount} ({letter.percentage.toFixed(1)}%){" "}
              </span>
            </li>
          ))}
          </ul>
        </article>
      </section>
      )
}

export { LetterDensity }