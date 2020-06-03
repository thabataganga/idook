import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import * as firebase from "firebase";
import styles from './styles';
import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/idook.png';
import logoCliente from '../../assets/sindpd.png';


export default class RegisterScreen extends React.Component {
    state = {
        cpf: "",
        email: "",
        password: "",
        errorMessage: null
    };

    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(userCredentials => {
                return userCredentials.user.updateProfile({
                    displayName: this.state.name
                });
            })
            .catch(error => this.setState({ errorMessage: error.message }));
    };

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
                     <View  style={{ marginTop: 20 }}>
                        <Text style={styles.inputTitle}>CPF</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            onChangeText={cpf => this.setState({ cpf })}
                            value={this.state.cpf}
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.inputTitle}>Email</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.inputTitle}>Senha</Text>
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
                

                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
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

            <View style={{alignItems:'flex-end'}}>
                <Image style={styles.logo2} source={logoImg} />
            </View>
            </View>
        );
    }
}