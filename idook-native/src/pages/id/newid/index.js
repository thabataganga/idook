import React from "react";
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from "react-native";
import * as firebase from "firebase";

import { Feather } from '@expo/vector-icons';

import logoImg from '../../../assets/idook.png';
import logoCliente from '../../../assets/sindpd.png';
import styles from './styles';

export default class NewId extends React.Component {
    state = {
        errorMessage: null,
        firstName: '',
        lastName: '',
        phone: '',
        city: "",
        uf: "",
        empresa: "",
        cargo: '',
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
                    <Text style={styles.title}>Cadastrar</Text>
                    <Text style={styles.description}>Cadastre o seu IDook!</Text>
                </View>

                <ScrollView 
            showsVerticalScrollIndicator = {false}>

                <View style={styles.form}>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.inputTitle}>Nome</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            onChangeText={cpf => this.setState({ cpf })}
                            value={this.state.cpf}
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.inputTitle}>Sobrenome</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.inputTitle}>Telefone</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        ></TextInput>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.inputTitle}>Cidade</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        ></TextInput>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.inputTitle}>Estado</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        ></TextInput>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.inputTitle}>Empresa</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        ></TextInput>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.inputTitle}>Cargo</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        ></TextInput>
                    </View>
                </View>



                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>Salvar</Text>
                </TouchableOpacity>


                <View style={{ alignItems: 'flex-end' }}>
                    <Image style={styles.logo2} source={logoImg} />
                </View>

                </ScrollView>
            </View>
        );
    }
}
