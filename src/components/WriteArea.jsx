const WriteArea = ( {handleChangeTextarea, text} ) => {
    return (
        <textarea
        placeholder="Escribe tu texto..."
        onChange={handleChangeTextarea}
        value={text}
      ></textarea>
    )
}

export { WriteArea }