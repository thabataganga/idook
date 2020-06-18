import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editUser } from '../../store/actions/authActions'
import M from "materialize-css";

import {storage} from '../../config/fbConfig';


export class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
      progress: 0
    }
    this.handleChange = this
      .handleChange
      .bind(this);
      this.handleUpload = this.handleUpload.bind(this);
  }

  handleEdit = (e) => {
    e.preventDefault();
    const { auth } = this.props;

    //console.log(url);

   // console.log(sids);

  // this.setState({image: 'false'})

    this.state.image = 'false';

    this.props.editUser(this.state, auth.uid)

    //console.log(key)

    //this.props.editId(ids, key)
    //this.props.history.push('/');
}

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }
  handleUpload = () => {
      const {image} = this.state;
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      }, 
      (error) => {
           // error function ....
           M.toast({html: 'Erro: tente novamente mais tarde', classes: 'rounded'});
      //  console.log(error);
      }, 
    () => {
        // complete function ....
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
          M.toast({html: 'Foto carregada', classes: 'rounded'});
            //console.log(url);
            this.setState({url});
        })
    });
    
  }
  render() {

    const {profile} = this.props

    //console.log(profile)

    return (
      <div>
          <img alt="perfil" src={this.state.url || profile.url} object-fit='cover' class="circular--portraitM" />
      <progress value={this.state.progress} max="100"/>
      <br/>
        <input 
        style={{display: 'none'}} 
        type="file" 
        onChange={this.handleChange}
        ref={image => this.image = image}/>
        <button className="btn z-depth-0" onClick={() => this.image.click()}>Selecionar</button>
        <button className="btn z-depth-0" onClick={this.handleUpload}>Enviar</button>
        <button className="btn z-depth-0" onClick={this.handleEdit}>Salvar</button>
        <br/>
        
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
      editUser: (ids,id) => dispatch(editUser(ids,id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload)