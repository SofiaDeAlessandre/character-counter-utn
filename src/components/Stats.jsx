const Stats = ({ characters, words, sentences, readingTime }) => {
  return (
    <div>
      <p>Cantidad de caracteres: {characters}</p>
      <p>Cantidad de palabras: {words}</p>
      <p>Cantidad de oraciones: {sentences}</p>
      <p>
        Approx. reading time:{" "}
        {readingTime < 1 ? "< 1 minute" : `${readingTime} minutes`}
      </p>
    </div>
  );
};

export { Stats };
