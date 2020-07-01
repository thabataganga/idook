import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import M from "materialize-css";
import { Redirect } from 'react-router-dom';

import { Link } from 'react-router-dom'


import classes from '../logout/contact/assets/css/contato.module.css';
import Rodape from '../logout/home/rodape'

export class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
        //this.props.history.push('/');
        //console.log(this.state);
    }
    render() {
        const { authError, auth } = this.props;
        if (auth.uid) {
            return <Redirect to="/" />;
        }
        return (
            <div>
            <div className="container center">

                <div className='row'>
                    <div className='col s12 m6'>

                        <form onSubmit={this.handleSubmit} className='white'>

                            <h5 className="grey-text text-darken-3">Login</h5>


                            <div className="input-field">
                                <label htmlFor='email'>Email</label>
                                <input type='email' id="email" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor='password'>Senha</label>
                                <input type='password' id="password" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <button className="btn z-depth-0">Entrar</button>
                                <div className="center red-text">
                                    {authError ? <p>{authError}</p> : null}
                                </div>
                            </div>


                        </form>

                    </div>
                    <div className='col s12 m6'>

                    <div className={classes.Content}>
                                <div className="container">
                                    <div className={classes.SubContent} >
                                        <h3>Ainda não tem conta?</h3>
                                        <p class="white-text ">A Identidade Digital é a porta de entrada para a revolução da informação, meios de comunicação e pagamentos do Século 21.</p>
                    <Link to='/contato'><button  className="btn z-depth-0">Conheça o IDOOK</button></Link>

                                    </div>

                                </div>

                            </div>

                    </div>
                </div>

            </div>
            <Rodape/>
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
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)