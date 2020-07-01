import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editId } from '../../store/actions/idActions'
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { firebaseConnect, firestoreConnect } from 'react-redux-firebase';

import {storage} from '../../config/fbConfig';

import IDFilePath from '../../../../teste.csv'

import M from "materialize-css";

const Papa = require('papaparse')
const fs = require('fs')

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
    const {url} = this.state;

    //console.log(url);

   // console.log(sids);

    this.state.image = 'false';

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
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      }, 
      (error) => {
           // error function ....
        console.log(error);
      }, 
    () => {
        // complete function ....
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
            //console.log(url);
            this.setState({url});
        })
    });
    
  }
  render() {

    


    //console.log(sids.url)

    return (
      <div>
      <progress value={this.state.progress} max="100"/>
      <br/>
        <input 
        style={{display: 'none'}} 
        type="file" 
        onChange={this.handleChange}
        ref={image => this.image = image}/>
        <button className="btn z-depth-0" onClick={() => this.image.click()}>Selecionar</button>
        <button className="btn z-depth-0" onClick={this.handleUpload}>Upload</button>
        <button className="btn z-depth-0" onClick={this.handleEdit}>Salvar</button>
        <br/>
        
      </div>
    )
  }
}

const mapStateToProps = (state, sids, id) => {

    return {
        id:id,
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
)(ImageUpload)