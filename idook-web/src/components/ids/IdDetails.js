import React from 'react'

const IdDetail = (props) => {
    const id = props.match.params.id;
    return (
        <div className='container section id-details'>
            <div className='card z-depht-0'>
                <div className='card-content'>
                    <span className='card-title'>Nome Sobrenome - {id}</span>
                                 
                </div>
                <div className='card-action'>
                    <p>Cargo: </p>
                    <p>Empresa: </p>
                    <p>CPF: </p>  
                    <p>Cidade: </p>
                    <p>Estado: </p>       
                              
                </div>
                <div className='card-action'>
                    <span className='card-title'>Contato</span>
                    <p>Email: </p>
                    <p>Telefone: </p>
                               
                </div>
                <div className='card-action gret lighten-4 grey-text'>
                    <div>Expira em</div>
                    <div>180 dias</div>
                </div>
            </div>
        </div>
    )
}

export default IdDetail
