import React from 'react';
import { View, Text,  Image, TouchableOpacity } from "react-native";
import * as firebase from "firebase";

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';


import { Feather } from '@expo/vector-icons';

import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

import logoImg from '../../../assets/idook.png';
import logoCliente from '../../../assets/sindpd.png';
import styles from './styles';

import { editId } from '../../../store/actions/idActions'


class EditID extends React.Component {

    constructor(props) {
        super(props);
            this.state = {
                url: '',
                image: '',
                
            
            }
            this.pickImage = this
            .pickImage
            .bind(this);

            this.uploadImage = this
            .uploadImage
            .bind(this);
           
        }

        componentDidMount() {
            this.getPermissionAsync();
          }
        
          getPermissionAsync = async () => {
            if (Constants.platform.ios) {
              const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
              if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
              }
            }
          };
        
          _pickImage = async () => {
            try {
              let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 4],
                quality: 1,
              });
              if (!result.cancelled) {
                const image = result.uri 
            this.setState(() => ({image}))

            this.uploadImage(image, this.props.profile.cpf)
              }
        
             // console.log(result);
            } catch (E) {
             // console.log(E);
            }
          };

    

    async useEffect(){

        if (Constants.platform.ios) {
            const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }

    }



    signOutUser() {
        firebase.auth().signOut();
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    };

    handleEditIm = (e) => {
        e.preventDefault();
        const {auth, profile, ids} = this.props
        const token = profile.token

        this.state.image = 'false';

        //const {url} = this.state.url
        //console.log(url) 

        const idss = this.state;

        const filterToken = ids.filter(id => id.id === token);

        this.props.editId(idss, token)

       // this.props.navigation.navigate("Detail");
        //this.props.history.push('/');
        //console.log(this.state);
    };

    async pickImage(){

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
      
          //console.log(this.props.profile.cpf)
      
          if (!result.cancelled) {
            const image = result.uri 
            this.setState(() => ({image}))

            this.uploadImage(image, this.props.profile.cpf)

            //console.log(this.state)
            //this.state.setImage = result.uri
           // this.state.setImage(result.uri);
          }

    }

    uploadImage = async (uri, imageName) => {
        const response = await fetch(uri);
        const blob = await response.blob();
    
        var ref = firebase.storage().ref().child("images/" + imageName);
        ref.getDownloadURL().then((url) => {
           // console.log(url)
            this.setState(() => ({url}))
            //  console.log(this.state.url)
            
        })        
       // this.setState(() => ({url}))

        //console.log(this.state.url)
        return ref.put(blob);
      }

      



    render() {

        const {auth, profile, ids} = this.props
        const token = profile.token
       // const setImage = this.state

        const filterToken = ids.filter(id => id.id === token);
        //console.log(this.state.url)

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.logo} source={logoCliente} />

                    <TouchableOpacity style={styles.headerText} onPress={() => this.props.navigation.navigate("Settings")}>
                        <Feather name="arrow-left" size={20} color="#91bd36"
                        />
                    </TouchableOpacity>
                </View>


                <View style={{ alignItems: 'flex-start' }}>
                    <Text style={styles.title}>Foto</Text>
                    <Text style={styles.description}>Configure a foto do seu IDook</Text>
                </View>

                <View style={{ justifyContent: 'space-between', marginVertical:50, alignItems: 'center', justifyContent: 'center' }}>
               
                <Image source={{uri: this.state.image || filterToken[0].url}} style={{ width: 200, height: 200 }} />
                </View>

                <View style={{marginTop: 20}}>
                <TouchableOpacity onPress={this._pickImage}   style={styles.button}>
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>Selecionar</Text>
                </TouchableOpacity>
                </View>

                <View style={{marginTop: 10}}>
                <TouchableOpacity onPress={this.handleEditIm}  style={styles.button}>
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>Salvar</Text>
                </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const mapStateToProps = (state) => {

   // console.log(state)
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        ids: state.firestore.ordered.ids,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        editId: (ids, id) => dispatch(editId(ids, id))
    }
  }

  export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'ids' }
    ])
)(EditID)
