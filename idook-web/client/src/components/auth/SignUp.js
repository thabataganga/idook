import React, { Component } from 'react'
import M from "materialize-css";
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authActions'



export class SignUp extends Component {

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    state = {
        email: '',
        password: '',
        setor: '',
        contact: '',
        phone: '',
        whatsapp: '',
        cnpj: '',
        socialreason: '',
        numero: '',
        complemento: '',
        cep: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.signUp(this.state);
    }
    render() {

        const { authError, auth } = this.props;
        if (auth.uid) {
            return <Redirect to="/" />;
        }
        return (
            <div className="container center">



                <form onSubmit={this.handleSubmit} className='white'>

                    <h5 className="grey-text text-darken-3">Sign Up</h5>



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
                        <label htmlFor='contact'>Nome do Responsável</label>
                        <input type='text' id="contact" onChange={this.handleChange} />
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
                        <label htmlFor='cnpj'>CNPJ</label>
                        <input type='text' id="cnpj" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor='socialreason'>Razão Social</label>
                        <input type='text' id="socialreason" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor='cep'>CEP</label>
                        <input type='text' id="cep" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor='numero'>Número</label>
                        <input type='text' id="numero" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor='complemento'>Complemento</label>
                        <input type='text' id="complemento" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor='email'>Email</label>
                        <input type='email' id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor='password'>Senha</label>
                        <input type='password' id="password" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <button className="btn z-depth-0">Registrar</button>
                    </div>
                    <div className="center red-text">
                        {authError ? <p>{authError}</p> : null}
                    </div>

                </form>






            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (creds) => dispatch(signUp(creds))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

