import React, {Component} from 'react';
import { View, Text, ActivityIndicator } from "react-native"
import styles from './styles';
import * as firebase from 'firebase'


import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

class LoadingScreen extends Component{

   
   render(){

    const {auth, profile} = this.props;

    console.log(profile)



    if(!profile.token){
        this.props.navigation.navigate("Login");
    } else {
        if(!profile.token){
            this.props.navigation.navigate("Token");
        } else{
            if(!profile.confirm){
                this.props.navigation.navigate("NewID");
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
    }
  }
  

  export default connect(mapStateToProps, null) (LoadingScreen)

