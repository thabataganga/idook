import React from 'react';
import { View, Image, Text, ActivityIndicator } from 'react-native';
import * as firebase from "firebase";

import Constants from 'expo-constants';

import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';



class Inicial extends React.Component{
    

    //console.log(email, displayName)

    signOutUser() {
        firebase.auth().signOut();
    };


    render(){

            const {auth, profile, ids} = this.props;

            console.log(ids)

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
        
       //var token = 1;


       if (!auth.uid && !profile.token) {
        this.props.navigation.navigate("Login")
      } 
      if (auth.uid && !profile.token) {
        this.props.navigation.navigate("Token")
      }
      if (auth.uid && profile.token) {
        this.props.navigation.navigate("Inicial")
      }

   //   console.log(profile)



        return (
            <View style={{
                flex: 1,
                justifyContent:'center',
                alignItems: 'center',
                paddingTop: Constants.statusBarHeight + 20,
            }}>
                    <Text>Carregando...</Text>
                    <ActivityIndicator size='large'></ActivityIndicator>
                </View>
        );

    }
    

   
}

const mapStateToProps = (state) => {

    //  console.log(state)
      return {
          auth: state.firebase.auth,
          profile: state.firebase.profile,
          ids: state.firestore.ordered.ids,
          users: state.firestore.ordered.users,
      }
  }
  

  export default compose(
      connect(mapStateToProps, null),
      firestoreConnect([
          { collection: 'ids' },
          { collection: 'users' }
      ])
  )(Inicial)