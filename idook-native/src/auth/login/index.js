import React, { Component } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import * as firebase from "firebase";

import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

import logoImg from '../../assets/idook.png';
import logoCliente from '../../assets/sindpd.png';
import styles from './styles';

class LoginScreen extends Component {
    state = {
        email: "",
        password: "",
        errorMessage: null,
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
        //this.props.history.push('/');
        console.log(this.state);
    };


    

    render() {

        //console.log(this.state.email)
        //console.log(this.state)
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                <Image style={styles.logo} source={logoCliente} />
            </View>  
            
            <View style={{alignItems:'flex-start'}}>
            <Text style={styles.title}>Olá,</Text>
            <Text style={styles.description}>Bem vindo de volta o seu IDook</Text>

            </View>

                <View style={styles.form}>
                    <View  style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Email</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            onChangeText={value=> this.setState({email: value})}
                            value={this.state.email}
                            //id='email'
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            autoCapitalize="none"
                            onChangeText={value=> this.setState({password: value})}
                            value={this.state.password}
                            //id='password'
                        ></TextInput>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign in</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ alignSelf: "center", marginTop: 32 }}
                    onPress={() => this.props.navigation.navigate("Register")}
                >
                    <Text style={{ color: "#414959", fontSize: 13 }}>
                        Ainda não tem um IDook? <Text style={{ fontWeight: "700", color: "#000000" }}>Registrar</Text>
                    </Text>
                </TouchableOpacity>

            <View style={{alignItems:'flex-end'}}>
                <Image style={styles.logo2} source={logoImg} />
            </View>
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return{
      authError: state.auth.authError,
      auth: state.firebase.auth,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      signIn: (creds) => dispatch(signIn(creds))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps) (LoginScreen)