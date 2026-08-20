const WriteArea = ({ handleChangeTextarea, text }) => {
  return (
    <>
      <textarea
        className="hero-textarea"
        placeholder="Escribe tu texto..."
        onChange={handleChangeTextarea}
        value={text}
      ></textarea>
    </>
  );
};

export { WriteArea };
