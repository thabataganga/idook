import React, { Component } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";

import { connect } from 'react-redux';

import logoImg from '../../assets/idook.png';
import logoCliente from '../../assets/sindpd.png';
import styles from './styles';

import {
    changeLoginEmail,
    changeLoginPassword,
    loginUser,
} from '../../store/actions';

class LoginScreen extends Component {

    onLoginPress() {
        const { email, password } = this.props;
        console.log(email, password)
        this.props.loginUser({ email, password });
    }

    renderMessage() {
        if (this.props.error) {
            return (
                <Text style={{ color: 'red' }}>
                    {this.props.error}
                </Text>
            );
        }
        else if (this.props.success) {
            return (
                <Text style={{ color: 'green' }}>
                    {this.props.success}
                </Text>
            );
        }
    }


    render() {
        console.log(this.props.error)
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.logo} source={logoCliente} />
                </View>

                <View style={{ alignItems: 'flex-start' }}>
                    <Text style={styles.title}>Olá,</Text>
                    <Text style={styles.description}>Bem vindo de volta o seu IDook</Text>

                </View>

                <View style={styles.form}>
                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Email</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            value={this.props.email}
                            onChangeText={(text) => this.props.changeLoginEmail(text)}
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Senha</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            autoCapitalize="none"
                            value={this.props.password}
                            onChangeText={(text) => this.props.changeLoginPassword(text)}
                        ></TextInput>
                    </View>
                </View>

                <View style={styles.errorMessage}>
                    {this.renderMessage()}

                </View>


                <TouchableOpacity onPress={this.onLoginPress.bind(this)} style={styles.button} >
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

                <View style={{ alignItems: 'flex-end' }}>
                    <Image style={styles.logo2} source={logoImg} />
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, success, loading } = auth;

    //console.log(state)
    return {
        email,
        password,
        error,
        success,
        loading
    };
}

export default connect(mapStateToProps, {
    changeLoginEmail,
    changeLoginPassword,
    loginUser
})(LoginScreen)
