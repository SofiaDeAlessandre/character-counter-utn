const Controlls = ({
  excludeSpaces,
  handleExcludeSpaces,
  limitCharacter,
  handleChangeInputLimit,
  limitValue,
  handleLimitValue,
  readingTime,
}) => {
  return (
    <>
      <div className="controls">
        <div className="controls-left">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={excludeSpaces}
              onChange={handleExcludeSpaces}
            />
            <span>Exclude Spaces</span>
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={limitCharacter}
              onChange={handleChangeInputLimit}
            />
            <span>Set Character Limit</span>
          </label>
          {limitCharacter && (
            <input
              type="number"
              className="limit-input"
              value={limitValue}
              onChange={(e) => handleLimitValue(e.target.value)}
            />
          )}
        </div>
        <div className="controls-right">
          <p className="reading-time">
            Approx. reading time:{" "}
            {readingTime === 0
              ? "< 1 minute"
              : `${readingTime} minute${readingTime > 1 ? "s" : ""}`}
          </p>
        </div>
      </div>
    </>
  );
};

export { Controlls };
