import React from 'react';
import { View, Text, ActivityIndicator } from "react-native"
import styles from './styles';
import * as firebase from 'firebase'

export default class LoadingScreen extends React.Component{

    componentDidMount() {
        //console.log(firebase.auth())
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "Inicial" : "Login");
        });
    }
   render(){


    return (
        <View style={styles.container}>
            <Text>Carregando...</Text>
            <ActivityIndicator size='large'></ActivityIndicator>
        </View>

    )
   }
        

    
}

