const Controlls = ({
  excludeSpaces,
  handleExcludeSpaces,
  limitCharacter,
  handleChangeInputLimit,
  limitValue,
  handleLimitValue,
}) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={excludeSpaces}
          onChange={() => handleExcludeSpaces(!excludeSpaces)}
        />
        Excluir espacios
      </label>
      <label>
        <input
          type="checkbox"
          checked={limitCharacter}
          onChange={handleChangeInputLimit}
        />
        Límite de caracteres
      </label>
      {limitCharacter && (
        <input
          type="number"
          value={limitValue}
          onChange={(e) => handleLimitValue(e.target.value)}
        />
      )}
    </div>
  );
};

export { Controlls };
