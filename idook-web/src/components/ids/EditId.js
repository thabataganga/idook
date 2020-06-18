import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editId } from '../../store/actions/idActions'
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import ImageUpload from "./ImageUpload"

import M from "materialize-css";

export class EditId extends Component {

    state = {
        firstName: '',
        lastName: '',
        cpf: '',
        email: '',
        phone: '',
        matricula: '',
        validade: '',
        city: "",
        uf: "",
        empresa: "",
        cargo: '',

    }

    componentDidMount() {
        // Auto initialize all the things!
        M.updateTextFields()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleEdit = (e) => {
        e.preventDefault();
        const { sids, id } = this.props;

        //console.log(id);

        if (this.state.firstName === '') {
          //  this.setState = ({firstName:sids.firstName })
           this.state.firstName = sids.firstName
        }
        if (this.state.lastName === '') {
          //  this.setState = ({lastName:sids.lastName })
           this.state.lastName = sids.lastName
        }
        if (this.state.cpf === '') {
           // this.setState = ({cpf:sids.cpf })
           this.state.cpf = sids.cpf
        }
        if (this.state.email === '') {
          //  this.setState = ({email:sids.email })
          this.state.email = sids.email
        }
        if (this.state.phone === '') {
          //  this.setState = ({phone:sids.phone })
           this.state.phone = sids.phone
        }
        if (this.state.matricula === '') {
          //  this.setState = ({matricula:sids.matricula })
           this.state.matricula = sids.matricula
        }
        if (this.state.validade === '') {
          //  this.setState = ({validade:sids.validade })
           this.state.validade = sids.validade
        }
        if (this.state.url === '') {
          //  this.setState = ({url:sids.url })
           this.state.url = sids.url
        }
        if (this.state.city === '') {
         //   this.setState = ({city:sids.city })
           this.state.city = sids.city
        }
        if (this.state.uf === '') {
         //   this.setState = ({uf:sids.uf })
           this.state.uf = sids.uf
        }
        if (this.state.empresa === '') {
          //  this.setState = ({empresa:sids.empresa })
            this.state.empresa = sids.empresa
        }
        if (this.state.cargo === '') {
          //  this.setState = ({cargo:sids.cargo })
         this.state.cargo = sids.cargo
        }



        const ids = this.state;

        //console.log(ids)

        this.props.editId(ids, id)
        this.props.history.push('/');
    }
    render() {

        const { auth } = this.props;
        const { sids, id } = this.props;

        //console.log(id)

        if (!auth.uid) {
            return <Redirect to="/signin" />;
        }

        if (sids) {

            return (
                <div className="container section center">

                    <div className='row'>
                        <div className='col s12 m5'>

                        <div className='card z-depht-0'>
                                <div className='card-content'>

                                    <span className='card-title'>Alterar foto </span>

                                </div>
                                <div className='card-action'>
                                <ImageUpload id={sids, id}/>
                                
                                </div>
                                <div className='card-action'>

                                
                                </div>


                            </div>
                            
                        </div>
                        <div className='col s12 m7'>

                        <form onSubmit={this.handleEdit} className='white form2'>
                        <h5 className="grey-text text-darken-3">Editar ID</h5>
                        <div className="input-field">
                            <label class="active" htmlFor='firstName'>Nome</label>
                            <input defaultValue={sids.firstName} type='text' id="firstName" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label class="active" htmlFor='lastName'>Sobrenome</label>
                            <input defaultValue={sids.lastName} type='text' id="lastName" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label class="active" htmlFor='cpf'>CPF</label>
                            <input defaultValue={sids.cpf} type='text' id="cpf" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label class="active" htmlFor='email'>Email</label>
                            <input defaultValue={sids.email} type='email' id="email" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label class="active" htmlFor='phone'>Telefone</label>
                            <input defaultValue={sids.phone} type='text' id="phone" onChange={this.handleChange} />
                        </div>

                        <div className="input-field">
                            <label class="active" htmlFor='matricula'>Matrícula</label>
                            <input defaultValue={sids.matricula} type='text' id="matricula" onChange={this.handleChange} />
                        </div>

                        <div className="input-field">
                            <label class="active" htmlFor='validade'>Validade</label>
                            <input defaultValue={sids.validade} type='text' id="validade" onChange={this.handleChange} />
                        </div>

                        <div className="input-field">
                            <label class="active" htmlFor='city'>Cidade</label>
                            <input defaultValue={sids.city} type='text' id="city" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label class="active" htmlFor='uf'>Estado</label>
                            <input defaultValue={sids.uf} type='text' id="uf" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label class="active" htmlFor='empresa'>Empresa</label>
                            <input defaultValue={sids.empresa} type='text' id="empresa" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label class="active" htmlFor='cargo'>Cargo</label>
                            <input defaultValue={sids.cargo} type='text' id="cargo" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <button className="btn z-depth-0">Editar ID</button>
                        </div>
                    </form>
                           
                        </div>
                    </div>

                    
                </div>
            )



        }

        else {
            return (
                <div className='container center'>
                    <p>Carregando...</p>
                </div>
            )
        }



    }


}

const mapStateToProps = (state, ownProps) => {
    //console.log(state);
    const id = ownProps.match.params.id;
    const ids = state.firestore.data.ids;
    const sids = ids ? ids[id] : null
    return {
        id: id,
        sids: sids,
        auth: state.firebase.auth
    }
}

const mapDistpacthToProps = (dispatch) => {
    return {
        editId: (ids, id) => dispatch(editId(ids, id)),
    }
}

export default compose(
    connect(mapStateToProps, mapDistpacthToProps),
    firestoreConnect([
        { collection: 'ids' }
    ])
)(EditId)
