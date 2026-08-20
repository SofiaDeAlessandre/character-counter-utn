import { ProgressBar } from "./ProgressBar";

const LetterDensity = ({ visibleLetters, handleShowAll, showAll }) => {
  return (
    <>
      <section className="density">
        <h3 className="density-title">Letter Density</h3>
        <ul style={{ listStyle: "none" }}>
          {visibleLetters.map((letter) => (
            <ProgressBar key={letter.letterName} letter={letter} />
          ))}
        </ul>
        <button className="see-more" onClick={handleShowAll}>
          <span>{showAll ? "See less" : "See more"}</span>
          <span className="see-more-icon">{showAll ? "▲" : "▼"}</span>
        </button>
      </section>
    </>
  );
};

export { LetterDensity };
