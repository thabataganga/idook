import React, { Component } from "react";
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import * as firebase from "firebase";
import styles from './styles';
import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/idook.png';
import logoCliente from '../../assets/sindpd.png';


class RegisterScreen extends Component {
    state = {
        cpf: "",
        email: "",
        password: "",
        errorMessage: null
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //  console.log(this.state);
        this.props.signUp(this.state);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.logo} source={logoCliente} />

                    <TouchableOpacity style={styles.headerText} onPress={() => this.props.navigation.navigate("Login")}>
                        <Feather name="arrow-left" size={20} color="#91bd36"
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'flex-start' }}>
                    <Text style={styles.title}>Registrar,</Text>
                    <Text style={styles.description}>Habilite o seu IDook</Text>

                </View>

                <View style={styles.form}>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.inputTitle}>CPF</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            //onChange={this.handleChange}
                            //id='cpf'
                            onChangeText={value=> this.setState({cpf: value})}
                            value={this.state.cpf}
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.inputTitle}>Email</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            //onChange={this.handleChange}
                            //id='email'
                            onChangeText={value=> this.setState({email: value})}
                            value={this.state.email}
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.inputTitle}>Senha</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            autoCapitalize="none"
                            //onChange={this.handleChange}
                            //id='password'
                            onChangeText={value=> this.setState({password: value})}
                            value={this.state.password}
                        ></TextInput>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign up</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ alignSelf: "center", marginTop: 32 }}
                    onPress={() => this.props.navigation.navigate("Register")}
                >
                    <Text style={{ color: "#414959", fontSize: 13 }}>
                        Ainda não tem um ID de acesso? <Text style={{ fontWeight: "700", color: "#000000" }}>Solicite</Text>
                    </Text>
                </TouchableOpacity>

                <View style={{ alignItems: 'flex-end' }}>
                    <Image style={styles.logo2} source={logoImg} />
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (creds) => dispatch(signUp(creds))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)