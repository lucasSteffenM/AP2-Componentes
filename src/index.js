import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Swal from 'sweetalert2'

import Botao from './components/botao/Botao.jsx';
import CaixaTexto from './components/caixatexto/CaixaTexto.jsx';
import Selecao from './components/selecao/selecao.jsx';
import Checkbox from './components/checkbox/checkbox.jsx';
import Radio from './components/radio/radio.jsx';

function App() {
  const [showHello, setShowHello] = useState(false);
  const [texto, setTexto] = useState('');

  const handleClick = () => {
    Swal.fire({
      title: 'Dados enviados com sucesso!',
      text: 'Continuar',
      icon: 'success',
      confirmButtonText: 'Ok'
    }).then(() => {
      window.location.reload();
    })
    setShowHello(true);
  };

  const handleTextoChange = (event) => {
    setTexto(event.target.value);
  };

  return (
    <div className='container' style={{margin:"10px", borderRadius: "15px", backgroundColor: "#39ad92"}} >
      <h2 className='display-6'>Preencha os dados abaixo:</h2>
      <br />
      <div className='me-2 d-inline-block lead' >Nome:</div>
      <CaixaTexto
        placeholder="Digite seu nome"
        value={texto}
        onChange={handleTextoChange}
      />
      <br /><br />
      <div className="lead">Genero:</div>
      <Selecao />
      <br />
      <div className="lead">Dias que tem aula:</div>
      <Checkbox />
      <br />
      <div className="lead">Curso:</div>
      <Radio />
      <br />
      <Botao onClick={handleClick} label="Enviar" />
      {showHello}
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
