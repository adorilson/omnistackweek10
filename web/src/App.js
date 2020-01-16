import React, {useState} from 'react';


// Componente: bloco isolado de HTML, CSS e JS o qual nao interfere
// no resto da aplicação 
// Estado: informações mantida pelo componente (lembrar: imutabilidade)
// Propriedade:  Informações que um componente PAI passa para o componente FILHO



function App() {

  const [counter, setCounter] = useState(0);

  function incrementCounter(){
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
    );
}

export default App;
