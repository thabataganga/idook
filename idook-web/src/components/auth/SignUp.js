import React, { Component } from 'react'
import M from "materialize-css/dist/js/materialize.min.js";

export class SignUp extends Component {

    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {});
          });
      }

    state = {
        email:'',
        password: '',
        setor:'',
        contact:'',
        phone:'',
        cnpj:'',
        socialreason:'',
        address:'',
        city:'',
        uf:'',
        cep:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container center">
                

                
                    <form onSubmit={this.handleSubmit} className='white'>

                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                        
                        

                        <div class="input-field">
                                <select id='setor'>
                                    <option value="" disabled selected>Segmento</option>
                                    <option value="1">3º. Setor</option>
                                    <option value="2">Educação</option>
                                    <option value="3">Turismo/Lazer</option>
                                    <option value="3">Empresa</option>
                                    <option value="3">Eventos Coorporativos</option>
                                    <option value="3">Eventos Sociais</option>
                                </select>
                                <label htmlFor='setor'>Segmento</label>
                            </div>

                            <div className="input-field">
                                <label htmlFor='contact'>Nome do Responsável</label>
                                <input type='text' id="contact" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor='phone'>Telefone</label>
                                <input type='tel' id="phone" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor='cnpj'>CNPJ</label>
                                <input type='number' id="cnpj" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor='socialreason'>Razão Social</label>
                                <input type='text' id="socialreason" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor='address'>Endereço</label>
                                <input type='text' id="address" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor='city'>Cidade</label>
                                <input type='text' id="city" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor='uf'>Estado</label>
                                <input type='text' id="uf" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor='cep'>CEP</label>
                                <input type='number' id="cep" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor='email'>Email</label>
                                <input type='email' id="email" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor='password'>Senha</label>
                                <input type='password' id="password" onChange={this.handleChange}/>
                            </div>

                            <div className="input-field">
                                <button className="btn z-depth-0">Registrar</button>
                            </div>

                            
                       
                        
                    </form>    

               
                
            
                
                
            </div>
        )
    }
}

export default SignUp
