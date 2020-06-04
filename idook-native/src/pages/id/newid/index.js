import React from "react";
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from "react-native";
import * as firebase from "firebase";

import { Feather } from '@expo/vector-icons';

import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

import logoImg from '../../../assets/idook.png';
import logoCliente from '../../../assets/sindpd.png';
import styles from './styles';

import { editId } from '../../../store/actions/idActions'


class NewId extends React.Component {
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

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const {auth, profile} = this.props
        console.log(profile)
        this.props.editId(this.state, profile.token)
        //this.props.history.push('/');
        //console.log(this.state);
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
                            autoCapitalize="true"
                            onChange={this.handleChange}
                            id='firstName'
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.inputTitle}>Sobrenome</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="true"
                            onChange={this.handleChange}
                            id='lastName'
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.inputTitle}>Telefone</Text>
                        <TextInput
                            style={styles.input}
                            
                            autoCapitalize="none"
                            onChange={this.handleChange}
                            id='phone'
                        ></TextInput>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.inputTitle}>Cidade</Text>
                        <TextInput
                            style={styles.input}
                            
                            autoCapitalize="true"
                            onChange={this.handleChange}
                            id='city'
                        ></TextInput>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.inputTitle}>Estado/Sigla</Text>
                        <TextInput
                            style={styles.input}
                            
                            autoCapitalize="true"
                            onChange={this.handleChange}
                            id='uf'
                        ></TextInput>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.inputTitle}>Empresa</Text>
                        <TextInput
                            style={styles.input}
                            
                            autoCapitalize="true"
                            onChange={this.handleChange}
                            id='empresa'
                        ></TextInput>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.inputTitle}>Cargo</Text>
                        <TextInput
                            style={styles.input}
                            
                            autoCapitalize="true"
                            onChange={this.handleChange}
                            id='cargo'
                        ></TextInput>
                    </View>
                </View>



                <TouchableOpacity onPress={this.handleSubmit} style={styles.button}>
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

const mapStateToProps = (state) => {

    console.log(state)
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        ids: state.firestore.ordered.ids,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        editId: (ids, id) => dispatch(editId(ids, id))
    }
  }

  export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'ids' }
    ])
)(NewId)