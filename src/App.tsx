import { useState } from "react";

const App = () => {
  const [n, setN] = useState(0);

  const handleMenos = () => {
    setN(n -1);
  }

  const handleMais = () => {
    setN(n + 1);

  }

  return (
    <div>
      <h1>Projeto Simples - Contador <br></br></h1>
      <button onClick={handleMais}> + </button>
      <div>{n}</div>
      <button onClick={handleMenos}>-</button>
    </div>
  );
}

export default App;
