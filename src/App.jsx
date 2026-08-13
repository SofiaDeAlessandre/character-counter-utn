import { useState } from "react";
import { Header } from "./components/Header.jsx";

const App = () => {
  const [text, setText] = useState(
    "Esto es un texto de prueba, puedes borrarlo, modificarlo o comprobar que ña app está funcionando correctamente",
  );
 const [excludeSpaces, setExcludeSpaces] = useState(false)

 const characters = excludeSpaces ? text.replace(/\s/g, "").length : text.length

  return (
    <main>
      <Header />
      <h2>
        Analyze you text <br />
        in real-time.
      </h2>
      <textarea
        placeholder="Escribe tu texto..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      ></textarea>
      <div>
        <label>
          <input
           type="checkbox" 
           checked={excludeSpaces}
          onChange={() => setExcludeSpaces(!excludeSpaces)}/>
          Excluir espacios
        </label>
      </div>
      <p>Cantidad de caracteres: {characters}</p>
    </main>
  );
};

export { App };
