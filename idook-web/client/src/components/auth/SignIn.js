import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import M from "materialize-css";
import { Redirect } from 'react-router-dom';


export class SignIn extends Component {
    state = {
        email:'',
        password: ''
    }

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
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
            <div className="container center">
                
                    <form onSubmit={this.handleSubmit} className='white'>

                    <h5 className="grey-text text-darken-3">Sign In</h5>
                        
                       
                            <div className="input-field">
                                <label htmlFor='email'>Email</label>
                                <input type='email' id="email" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor='password'>Senha</label>
                                <input type='password' id="password" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <button className="btn z-depth-0">Entrar</button>
                                <div className="center red-text">
                                    { authError ? <p>{authError}</p> : null }
                                </div>
                            </div>
                        
                        
                    </form>      
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
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