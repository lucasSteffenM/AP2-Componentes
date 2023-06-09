import React from 'react';

function CaixaTexto(props) {
  return (
    <input 
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      className='form-control'
    />
  );
}

export default CaixaTexto;
