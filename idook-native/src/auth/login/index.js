import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import * as firebase from "firebase";

import logoImg from '../../assets/idook.png';
import logoCliente from '../../assets/sindpd.png';
import styles from './styles';

export default class LoginScreen extends React.Component {
    state = {
        email: "",
        password: "",
        errorMessage: null
    };

    handleLogin = () => {
        const { email, password } = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({ errorMessage: error.message }));
    };

    render() {
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
                        <Text style={styles.inputTitle}>Email Address</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        ></TextInput>
                    </View>
                </View>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
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
