import React, { Component } from 'react';
import './assets/css/rodape.css';
import { Link } from 'react-router-dom'

import Logo from '../../layout/logo.png'



class Rodape extends Component {
    render() {

        return (

            <footer className="page-footer grey lighten-5 black-text">

                <div className="col s-12 align-center">
                    <div className="icons">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-whatsapp"></i>
                        <i className="fa fa-linkedin"></i>
                    </div>
                </div>

                <div className="row container">

                    <div className="col l3 s12 ">
                    <Link to="/home"className="brand-logo black-text text-darken-2">  <img alt="logo" class="brand-logo2" src={Logo} />
                        <p>ID da Era Digital</p></Link>
                    </div>
                    <div className="col l3 s12">
                        <h5 className="black-text">Institucional</h5>
                        <ul>
                            <li><a className="grey-text text-darken-3" href="#!"><i className="fa fa-angle-double-right"></i>Sobre nós</a></li>
                            <li><a className="grey-text text-darken-3" href="/contato"><i className="fa fa-angle-double-right"></i>Contato comercial</a></li>

                        </ul>
                    </div>
                    <div className="col l3 s12">
                        <h5 className="black-text">Produtos</h5>
                        <ul>
                            <li><a className="grey-text text-darken-3" href="#!"><i className="fa fa-angle-double-right"></i>ID Digital: Aplicativo</a></li>
                            <li><a className="grey-text text-darken-3" href="#!"><i className="fa fa-angle-double-right"></i>Sistema de Gestão</a></li>
                            <li><a className="grey-text text-darken-3" href="#!"><i className="fa fa-angle-double-right"></i>Aplicativo personalizado</a></li>
                        </ul>
                    </div>
                    <div className="col l3 s12">
                        <h5 className="black-text">Segmentos</h5>
                        <ul>
                            <li><a className="grey-text text-darken-3" href="#!"><i className="fa fa-angle-double-right"></i>3º. Setor</a></li>
                            <li><a className="grey-text text-darken-3" href="#!"><i className="fa fa-angle-double-right"></i>Comércio</a></li>
                            <li><a className="grey-text text-darken-3" href="#!"><i className="fa fa-angle-double-right"></i>Educação</a></li>
                            <li><a className="grey-text text-darken-3" href="#!"><i className="fa fa-angle-double-right"></i>Eventos</a></li>
                            <li><a className="grey-text text-darken-3" href="#!"><i className="fa fa-angle-double-right"></i>Indústria</a></li>
                            <li><a className="grey-text text-darken-3" href="#!"><i className="fa fa-angle-double-right"></i>Serviços</a></li>
                            <li><a className="grey-text text-darken-3" href="#!"><i className="fa fa-angle-double-right"></i>T.I.C.</a></li>
                            <li><a className="grey-text text-darken-3" href="#!"><i className="fa fa-angle-double-right"></i>Turismo/Lazer</a></li>
                        </ul>
                    </div>

                </div>

                <div className="footer-copyright">
                    <div className="bottomcontent grey-text text-darken-3">
                        <p> © 2020 IDook - Todos os direitos reservados. Ekoar Tecnologia LTDA CNPJ: 00.000.000/0000-00</p>

                    </div>
                </div>
            </footer>

        );
    };

}

export default Rodape;
