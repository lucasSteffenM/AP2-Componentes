import React from 'react';
function Botao(props) {
    return (
        <button class="btn btn-secondary" onClick={props.onClick}>
            {props.label}
        </button>
    );
}
export default Botao;