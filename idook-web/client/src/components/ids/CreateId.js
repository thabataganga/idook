import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createId } from '../../store/actions/idActions'
import { Redirect } from 'react-router-dom';

import MultiplesID from './MultiplesID';

import exemple from './modelo-idook.csv'

export class CreateId extends Component {

    state = {
        firstName:'',
        lastName:'',
        cpf:'',
        email:'',
        phone:'',
        matricula:'',
        validade:'',
        tokenapp: '',      
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.state.tokenapp = (Math.floor((Math.random() * 999999) + 1)).toString()
        //console.log(this.state)
        this.props.createId(this.state)
        this.props.history.push('/');
    }
    render() {

        const {auth} = this.props;

        //console.log(auth)

        if (!auth.uid) {
            return <Redirect to="/signin" />;
          }


        return (
            <div className="container section center">    
            

                <div className='row'>
                    <div className='col s12 m5'>

                    <div className='card z-depht-0'>
                                <div className='card-content'>

                                    <span className='card-title'>Cadastrar IDooks Multiplos</span>

                                </div>
                                <div className='card-action'>
                                    <p>Para inserir vários usuários de uma vez, você deve preparar um arquivo do tipo .CSV conforme descrito no tutorial: </p>
                                    <br/>
                                    <a href={exemple}>www.idook.com/tutorial</a>
                                    <br/><br/><br/>
                                    <MultiplesID></MultiplesID>

                                </div>

                            </div>
                            
                       
                    </div>
                    <div className='col s12 m7'>

                    <form onSubmit={this.handleSubmit} className='white form2'>                
                <h5 className="grey-text text-darken-3">Cadastrar IDook Unitário</h5>
                        <div className="input-field">
                            <label htmlFor='firstName'>Nome</label>
                            <input type='text' id="firstName" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor='lastName'>Sobrenome</label>
                            <input type='text' id="lastName" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor='cpf'>CPF</label>
                            <input type='text' id="cpf" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor='email'>Email</label>
                            <input type='email' id="email" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor='phone'>Telefone</label>
                            <input type='text' id="phone" onChange={this.handleChange}/>
                        </div>
                        
                        <div className="input-field">
                            <label htmlFor='matricula'>Matrícula</label>
                            <input type='text' id="matricula" onChange={this.handleChange}/>
                        </div>

                        <div className="input-field">
                            <label htmlFor='validade'>Validade em dias</label>
                            <input type='number' id="validade" onChange={this.handleChange}/>
                        </div>

                        <div className="input-field">
                            <button className="btn z-depth-0">Emitir ID</button>
                        </div>                                      
                </form>   
                       
                    </div>
                </div>

                              
            </div>
        )
    }
    
    
}

const mapStateToProps = (state) => {
    //console.log(state);
    return {
      auth: state.firebase.auth
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        createId: (id) => dispatch(createId(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CreateId)
