import React, { Component } from 'react';

import ImagPlat from "./assets/img/sistema-de-gerenciamento-de-conteudo.png"
import ImagApp from "./assets/img/smartphone.png"
import ImagSec from "./assets/img/seguranca.png"

class Beneficios extends Component {
    render() {

        return (

                <div className="section grey lighten-5">
                    <div className="row container center">
                        <h2 className="headerhome">Gerenciamento ágil</h2>
                        <p className="grey-text text-darken-1 lighten-3 homep center"> Transformação digital na gestão e uso de documentos de identificação e credenciais através de uma identidade digital inteligente </p>

                    </div>

                    
                    <div className="carousel">
                    <a className="carousel-item" href="#two!"><img alt="ID Digital - Aplicativo" src={ImagApp} /><p className="black-text center">ID Digital - Aplicativo</p></a>
                        <a className="carousel-item" href="#one!"><img alt="Sistema de Gestão" src={ImagPlat} /><p className="black-text center">Sistema de Gestão</p></a>
                        <a className="carousel-item" href="#three!"><img alt="Segurança" src={ImagSec} /><p className="black-text center">Segurança</p></a>

                    </div>

                    <div className="row container center">
                        <p className="grey-text text-darken-3 lighten-3 homep">O <b>IDook</b> fornece um prático sistema <b>multiplataforma</b> com novas funcionalidades que reduzem custos, tempo e riscos, além de <b>melhorar o relacionamento</b> entre o usuário e as Instituições.</p>
                    </div>
                </div>

        );
    };

}

export default Beneficios;
