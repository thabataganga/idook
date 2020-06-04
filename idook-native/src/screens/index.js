import React, {Component} from 'react';
import { View, Text, ActivityIndicator } from "react-native"
import styles from './styles';
import * as firebase from 'firebase'


import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

class LoadingScreen extends Component{

   
   render(){

    const {auth, profile, ids} = this.props;

    var confirm = '';

    if(ids  && profile){
        const token = profile.token

        const filterToken = ids.filter(id => id.id === token);

        if(filterToken.length != 0){
            console.log(filterToken[0])
            if(filterToken[0].empresa != "Não configurado"){
                console.log(filterToken[0].empresa)
                confirm = 1;
            }
    
        }
        
        

        
    }

    



    if(!profile.token){
        this.props.navigation.navigate("Login");
    } else {
        if(!profile.token){
            this.props.navigation.navigate("Token");
        } else{
            if(!confirm){
                this.props.navigation.navigate("NewID");
            } else {
                this.props.navigation.navigate("Inicial");
            }
        }

    }

    return (
        <View style={styles.container}>
            <Text>Carregando...</Text>
            <ActivityIndicator size='large'></ActivityIndicator>
        </View>

    )
   }
        

    
}

const mapStateToProps = (state) => {

    console.log(state)
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        ids: state.firestore.ordered.ids,
    }
  }
  

  export default compose(
    connect(mapStateToProps, null),
    firestoreConnect([
        { collection: 'ids' }
    ])
) (LoadingScreen)

