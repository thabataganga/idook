import React, { Component } from 'react'
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from 'react-redux'
import { createId } from '../../store/actions/idActions'

export class CreateId extends Component {

    state = {
        email:'',
        password: '',
        firstName:'',
        lastName:'',
        cpf:'',
        cargo:'',
        empresa:'',
        phone:'',
        uf:'',
        city:'',
        validade:'',        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.createId(this.state)
    }
    render() {
        return (
            <div className="container center">                             
                <form onSubmit={this.handleSubmit} className='white'>                
                <h5 className="grey-text text-darken-3">Cadastrar ID</h5>
                        <div className="input-field">
                            <label htmlFor='firstName'>Primeiro Nome</label>
                            <input type='text' id="firstName" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor='lastName'>Ultimo Nome</label>
                            <input type='text' id="lastName" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor='cpf'>CPF</label>
                            <input type='number' id="cpf" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor='email'>Email</label>
                            <input type='email' id="email" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor='phone'>Telefone</label>
                            <input type='tel' id="phone" onChange={this.handleChange}/>
                        </div>
                        
                        <div className="input-field">
                            <label htmlFor='cargo'>Cargo</label>
                            <input type='text' id="cargo" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor='empresa'>Empresa</label>
                            <input type='text' id="empresa" onChange={this.handleChange}/>
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
                            <label htmlFor='validade'>Validade em dias</label>
                            <input type='number' id="validade" onChange={this.handleChange}/>
                        </div>
                        
                        <div className="input-field">
                            <label htmlFor='password'>Senha</label>
                            <input type='password' id="password" onChange={this.handleChange}/>
                        </div>

                        <div className="input-field">
                            <button className="btn z-depth-0">Emitir ID</button>
                        </div>                                      
                </form>                  
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createId: (id) => dispatch(createId(id))
    }
}

export default connect(null, mapDispatchToProps) (CreateId)
