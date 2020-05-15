import React from "react";

const IDSummary = ({id}) => {
  return (
    <div className='card z-depth-0 project-summary'>
        <div className='card-content text-darken-3'>
            <span className='card-title'>{id.firstName} {id.lastName}</span>
            <p>Empresa: {id.empresa}</p>
            <p>Cargo: {id.cargo}</p>
            <p className='grey-text'>Expira em: {id.validade} dias</p>
        </div>
    </div>
  );
};

export default IDSummary;
