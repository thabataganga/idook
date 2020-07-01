import React, { Component } from 'react';

import classes from './assets/css/contato.module.css';
import Rodape from '../home/rodape'


class Home extends Component {

    render() {
        return (
            <div>
            <div className="container">
                <div className='row'>
                    <div className='col s12 m6'>
                    
                    <div className={classes.Content}>
                <div className="container">
                <div className={classes.SubContent} >
                    <h1>ID da Era Digital</h1>
                    <p class="white-text ">A Identidade Digital é a porta de entrada para a revolução da informação, meios de comunicação e pagamentos do Século 21.</p>
                    <p>- Fluxo digital para emissão de IDs</p>
                        <p>- Gestão de IDs e controle de acesso</p>
                        <p>- Notificação e alertas</p>
                        <p>- Pesquisas rápidas</p>
                        <p>- Implantação rápida via .CSV</p>
                        <p>- Moderação de Fotos</p>  
                </div>

                </div>
                
            </div>

                    </div>
                    <div className='col s12 m6'>
                        <form onSubmit={this.handleSubmit} className='white'>

                            <h5 className="grey-text text-darken-3">Fale com um especialista</h5>
                            <p>Preencha os campos abaixo e nosso time entrará em contato prontamente via email:</p>

                            <div className="input-field">
                                <label htmlFor='contact'>Nome</label>
                                <input type='text' id="contact" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor='email'>Email</label>
                                <input type='email' id="email" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor='phone'>Telefone</label>
                                <input type='tel' id="phone" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor='whatsapp'>Whatsapp</label>
                                <input type='tel' id="whatsapp" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor='socialreason'>Razão Social</label>
                                <input type='text' id="socialreason" onChange={this.handleChange} />
                            </div>
                            <div class="input-field">
                                <select id='setor' onChange={this.handleChange}>
                                    <option value="0" selected disabled hidden>Segmento</option>
                                    <option value="3º. Setor">3º. Setor</option>
                                    <option value="Comércio">Comércio</option>
                                    <option value="Educação">Educação</option>
                                    <option value="Eventos Coorporativos">Eventos Coorporativos</option>
                                    <option value="Eventos Sociais">Eventos Sociais</option>
                                    <option value="Indústria">Indústria</option>
                                    <option value="Serviços">Serviços</option>
                                    <option value="T.I.">T.I.</option>
                                    <option value="Turismo/Lazer">Turismo/Lazer</option>
                                    <option value="Outros">Outros</option>
                                </select>
                                <label htmlFor='setor'>Segmento</label>
                            </div>

                        
                            <div className="input-field">
                                <button className="btn z-depth-0">Conheça o IDook</button>
                            </div>


                        </form>
                    </div>
                </div>
                
            </div>

            <Rodape/>


            </div>
        );
    };
}

export default Home;
