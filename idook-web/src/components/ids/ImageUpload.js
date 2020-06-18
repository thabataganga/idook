import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editId } from '../../store/actions/idActions'
import { compose } from 'redux';
import {  firestoreConnect } from 'react-redux-firebase';
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
    const { sids } = this.props;
  

    //console.log(url);

   // console.log(sids);

  this.state.image = 'false';

 //   this.setState({image: 'false'})

    const ids = this.state;

    const key = sids.id;

    //console.log(key)
    this.props.editId(ids, key)
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
      if(image){

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
         // console.log(error);
        }, 
      () => {
          // complete function ....
          storage.ref('images').child(image.name).getDownloadURL().then(url => {
              //console.log(url);
              M.toast({html: 'Foto carregada', classes: 'rounded'});
  
              this.setState({url});
          })
      });

      }

      else{
        M.toast({html: 'Erro: nenhuma imagem selecionada', classes: 'rounded'});
      }
    
    
  }
  render() {

    const {vids} = this.props

    //console.log(sids.url)

    return (
      <div>
          <img alt="Foto de perfil" src={this.state.url || vids.url} object-fit='cover' class="circular--portraitM" />
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

const mapStateToProps = (state, sids, id) => {
    //console.log(state);
    //console.log(sids)
    //const id = ownProps.match.params.id;
    const ids = state.firestore.data.ids;
    const vids = ids[sids.id]
    //console.log(vids)
    //const sids = ids ? ids[id] : null
    return {
        //id:id,
        sids: sids,
        vids: vids,
        //auth: state.firebase.auth
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
)(ImageUpload)