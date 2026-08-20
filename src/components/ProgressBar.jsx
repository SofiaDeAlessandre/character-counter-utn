const ProgressBar = ({ letter }) => {
  return (
    <>
      <li className="density-row">
        <span className="density-letter">
          {letter.letterName.toUpperCase()}
        </span>
        <progress
          className="density-bar"
          min="0"
          max="100"
          value={letter.percentage}
        ></progress>
        <span className="density-count">
          {letter.amount} ({letter.percentage.toFixed(2)}%)
        </span>
      </li>
    </>
  );
};

export { ProgressBar };
