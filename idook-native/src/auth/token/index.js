import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import * as firebase from "firebase";
import styles from './styles';
import { Feather } from '@expo/vector-icons';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

import logoImg from '../../assets/idook.png';
import logoCliente from '../../assets/sindpd.png';


 class Token extends React.Component {
    state = {
        token: ""
    };

    signOutUser() {
        firebase.auth().signOut();
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        //this.props.signIn(this.state)
        //this.props.history.push('/');
        console.log(this.state);
    };
    
    
   

    render() {

        console.log(this.state);
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.logo} source={logoCliente} />

                    <TouchableOpacity style={styles.headerText} onPress={this.signOutUser}>
                        <Feather name="arrow-left" size={20} color="#91bd36"
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'flex-start' }}>
                    <Text style={styles.title}>Token,</Text>
                    <Text style={styles.description}>Digite o token enviado pelo Whatsapp</Text>

                </View>

                <View style={styles.form}>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.inputTitle}>Token</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            onChange={this.handleChange}
                            id='token'
                        ></TextInput>
                    </View>

                </View>

                <TouchableOpacity onPress={this.handleSubmit} style={styles.button} >
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>Confirmar Token</Text>
                </TouchableOpacity>

                

                <View style={{ alignItems: 'flex-end' }}>
                    <Image style={styles.logo2} source={logoImg} />
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {

    console.log(state)
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    }
  }
  

  
  export default compose(
    firebaseConnect(),
    connect(mapStateToProps),
  )(Token);