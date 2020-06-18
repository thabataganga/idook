import React, { Component } from 'react'
import M from "materialize-css";
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { editUser } from '../../store/actions/authActions'

import ImageUpload from "./ImageUpload"

export class EditUser extends Component {

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    state = {
        contact: '',
        phone: '',
        cnpj: '',
        socialreason: '',
        numero: '',
        complemento: '',
        cep: '',
        website: '',
        facebook: '',
        whatsapp: '',
        linkedin: '',
        instagram: '',
        twitter: '',
        setor: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //  console.log(this.state);
        //this.props.signUp(this.state);
    }
    handleEdit = (e) => {
        e.preventDefault();
        const { profile, auth } = this.props;

        if (this.state.contact === '') {
            this.state.contact = profile.contact
        }
        if (this.state.phone === '') {
            this.state.phone = profile.phone
        }
        if (this.state.cnpj === '') {
            this.state.cnpj = profile.cnpj
        }
        if (this.state.socialreason === '') {
            this.state.socialreason = profile.socialreason
        }
        if (this.state.numero === '') {
            this.state.numero = profile.numero
        }
        if (this.state.complemento === '') {
            this.state.complemento = profile.complemento
        }
        if (this.state.cep === '') {
            this.state.cep = profile.cep
        }
        if (this.state.website === '') {
            this.state.website = profile.website
        }
        if (this.state.facebook === '') {
            this.state.facebook = profile.facebook
        }
        if (this.state.whatsapp === '') {
            this.state.whatsapp = profile.whatsapp
        }
        if (this.state.linkedin === '') {
            this.state.linkedin = profile.linkedin
        }
        if (this.state.instagram === '') {
            this.state.instagram = profile.instagram
        }
        if (this.state.twitter === '') {
            this.state.twitter = profile.twitter
        }
        if (this.state.twitter === '') {
            this.state.setor = profile.setor
        }

        //console.log(profile);
        //console.log(auth.uid);
        //console.log(this.state);
        this.props.editUser(this.state, auth.uid)
        this.props.history.push('/userdetail');
    }

    render() {

        const { authError, auth, profile } = this.props;
        if (!auth.uid) {
            return <Redirect to="/signin" />;
        }

        return (
            <div className="container section center">
                <div className='row'>
                    <div className='col s12 m5'>
                        <div className='card z-depht-0'>
                            <div className='card-content'>
                                <span className='card-title'>Alterar foto </span>
                            </div>
                            <div className='card-action'>
                                <ImageUpload />
                            </div>

                        </div>
                    </div>
                    <div className='col s12 m7 '>
                        <form onSubmit={this.handleEdit} className='white form2'>
                            <h5 className="grey-text text-darken-3">Editar usuário</h5>
                            
                            <div class="input-field">
                                <select id='setor' defaultValue={profile.setor} onChange={this.handleChange}>
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
                                <label class="active" htmlFor='contact'>Nome do Responsável</label>
                                <input defaultValue={profile.contact} type='text' id="contact" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label class="active" htmlFor='phone'>Telefone</label>
                                <input defaultValue={profile.phone} type='tel' id="phone" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label class="active" htmlFor='cnpj'>CNPJ</label>
                                <input defaultValue={profile.cnpj} type='text' id="cnpj" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label class="active" htmlFor='socialreason'>Razão Social</label>
                                <input defaultValue={profile.socialreason} type='text' id="socialreason" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label class="active" htmlFor='cep'>CEP</label>
                                <input defaultValue={profile.cep} type='text' id="cep" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label class="active" htmlFor='numero'>Número</label>
                                <input defaultValue={profile.numero} type='text' id="numero" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label class="active" htmlFor='complemento'>Complemento</label>
                                <input defaultValue={profile.complemento} type='text' id="complemento" onChange={this.handleChange} />
                            </div>
                            <h5 className="grey-text text-darken-3">Redes Sociais</h5>

                            <div className="input-field">
                                <label class="active" htmlFor='complemento'>Whatsapp</label>
                                <input defaultValue={profile.whatsapp} type='text' id="whatsapp" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label class="active" htmlFor='complemento'>Facebook</label>
                                <input defaultValue={profile.facebook} type='text' id="facebook" onChange={this.handleChange} />
                            </div>

                            <div className="input-field">
                                <label class="active" htmlFor='complemento'>Instagram</label>
                                <input defaultValue={profile.instagram} type='text' id="instagram" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label class="active" htmlFor='complemento'>Twitter</label>
                                <input defaultValue={profile.twitter} type='text' id="twitter" onChange={this.handleChange} />
                            </div>

                            <div className="input-field">
                                <label class="active" htmlFor='complemento'>Linkedin</label>
                                <input defaultValue={profile.linkedin} type='text' id="linkedin" onChange={this.handleChange} />
                            </div>

                            <div className="input-field">
                                <label class="active" htmlFor='complemento'>Website</label>
                                <input defaultValue={profile.website} type='text' id="website" onChange={this.handleChange} />
                            </div>

                            <div className="input-field">
                                <button className="btn z-depth-0">Editar</button>
                            </div>
                            <div className="center red-text">
                                {authError ? <p>{authError}</p> : null}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editUser: (ids, id) => dispatch(editUser(ids, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)

