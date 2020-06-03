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

    signOutUser() {
        firebase.auth().signOut();
    };

   

    render() {
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
                            onChangeText={cpf => this.setState({ cpf })}
                            value={this.state.cpf}
                        ></TextInput>
                    </View>

                </View>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>


                <TouchableOpacity style={styles.button} >
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>Confirmar Token</Text>
                </TouchableOpacity>

                

                <View style={{ alignItems: 'flex-end' }}>
                    <Image style={styles.logo2} source={logoImg} />
                </View>
            </View>
        );
    }
}