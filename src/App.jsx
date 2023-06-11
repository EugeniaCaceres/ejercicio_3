import { useState, useEffect } from "react";
import "./App.css";

function App({ atributo1 }) {
  const [texto, setTexto] = useState("");
  // texto === ""
  
  useEffect(() => {
    setTexto(atributo1);
  }, []);

  // texto === "My Friend"

  return (
    <>
      <h1>Hello {texto}! </h1>
      <button
        onClick={() => setTexto((texto) => texto + " (from Changed State)")}
      >
        Click me
      </button>
    </>
  );
  // texto === "My Friend (from Changed State)"
}

export default App;
