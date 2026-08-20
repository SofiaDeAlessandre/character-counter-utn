const Stats = ({ characters, words, sentences, readingTime }) => {
  return (
    <>
      <section className="cards">
        <div className="card card-teal">
          <span className="card-number">{characters}</span>
          <span className="card-label">Total Characters</span>
        </div>
        <div className="card card-purple">
          <span className="card-number">{words}</span>
          <span className="card-label">Word Count</span>
        </div>
        <div className="card card-pink">
          <span className="card-number">{sentences}</span>
          <span className="card-label">Sentence Count</span>
        </div>
      </section>
    </>
  );
};

export { Stats };
