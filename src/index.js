import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Botao from './Botao.js';
import CaixaTexto from './CaixaTexto.js';
import Selecao from './components/selecao/selecao.jsx';
import Checkbox from './components/checkbox/checkbox.jsx';
import Radio from './components/radio/radio.jsx';

function App() {
  const [showHello, setShowHello] = useState(false);
  const [texto, setTexto] = useState('');

  const handleClick = () => {
    alert("Você confirma os dados?")
    setShowHello(true);
  };

  const handleTextoChange = (event) => {
    setTexto(event.target.value);
  };

  return (
    <div className='container'>
      <h2>Preencha os dados abaixo:</h2>
      <br />
    <div className='me-2 d-inline-block' >Nome:</div>
      <CaixaTexto
        placeholder="Digite seu nome"
        value={texto}
        onChange={handleTextoChange}
      />
      <br /><br />
      <div>Genero:</div>
      <Selecao/>
      <br />
      <div>Dias que tem aula:</div>
      <Checkbox/>
      <br />
      <div>Curso:</div>
      <Radio/>
      <br />
      <Botao onClick={handleClick} label="Enviar" />
      {showHello && <h2><br />Dados enviados com sucesso!</h2>}
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
