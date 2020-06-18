import React, { Component } from 'react';
import TercSec from "./assets/img/globo.png"
import Comercio from "./assets/img/mercado.png"
import Educacao from "./assets/img/aprendizagem-online.png"
import Eventos from "./assets/img/bilhetes.png"
import Industria from "./assets/img/fabrica.png"
import Servicos from "./assets/img/consulting.png"
import TIC from "./assets/img/result.png"
import Turismo from "./assets/img/tourism.png"

class Mercados extends Component {
    render() {

        return (

            <div className="section grey lighten-5">
            <div className="row container center">
                <h2 className="headerhome">Saia do físico para o digital </h2>
                <p className="grey-text text-darken-1 lighten-3 homep center">Surpreenda e agilize a sua gestão e o relacionamento com clientes, associados, alunos, visitantes e colaboradores </p>


            </div>
            <div className="carousel">
                <a className="carousel-item" href="#one!"><img alt="Sistema de Gestão" src={TercSec} /><p className="black-text center">3º. Setor</p></a>
                <a className="carousel-item" href="#two!"><img alt="ID Digital - Aplicativo" src={Comercio} /><p className="black-text center">Comércio</p></a>
                <a className="carousel-item" href="#three!"><img alt="Segurança" src={Educacao} /><p className="black-text center">Educação</p></a>
                <a className="carousel-item" href="#three!"><img alt="Segurança" src={Eventos} /><p className="black-text center">Eventos</p></a>
                <a className="carousel-item" href="#three!"><img alt="Segurança" src={Industria} /><p className="black-text center">Indústria</p></a>
                <a className="carousel-item" href="#three!"><img alt="Segurança" src={Servicos} /><p className="black-text center">Serviços</p></a>
                <a className="carousel-item" href="#three!"><img alt="Segurança" src={TIC} /><p className="black-text center">T.I.C.</p></a>
                <a className="carousel-item" href="#three!"><img alt="Segurança" src={Turismo} /><p className="black-text center">Turismo/Lazer</p></a>

            </div>

            <div className="row container center">

                <p className="grey-text text-darken-3 lighten-3 homep">Utilize <b>análise de dados, inteligência e sustentabilidade</b>. Substitua documentos de identificação, crachás, carteiras, ingressos, planilhas de controle e um complexo sistema de ERP pelo <b>prático IDook</b>.</p>
            </div>
        </div>
        );
    };

}

export default Mercados;
