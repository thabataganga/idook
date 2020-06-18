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


class EditID extends React.Component {
    state = {
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
        const {auth, profile, ids} = this.props
        const token = profile.token

        const filterToken = ids.filter(id => id.id === token);

        if(filterToken[0].firstName && !this.state.firstName ){
            this.state.firstName = filterToken[0].firstName
        }
        if(filterToken[0].lastName && !this.state.lastName ){
            this.state.lastName = filterToken[0].lastName
        }
        if(filterToken[0].phone && !this.state.phone ){
            this.state.phone = filterToken[0].phone
        }
        if(filterToken[0].city && !this.state.city ){
            this.state.city = filterToken[0].city
        }
        if(filterToken[0].uf && !this.state.uf ){
            this.state.uf = filterToken[0].uf
        }
        if(filterToken[0].empresa && !this.state.empresa ){
            this.state.empresa = filterToken[0].empresa
        }
        if(filterToken[0].cargo && !this.state.cargo ){
            this.state.cargo = filterToken[0].cargo
        }

        this.props.editId(this.state, profile.token)

        this.props.navigation.navigate("Settings");
        //this.props.history.push('/');
        console.log(this.state);
    };



    render() {
        const {auth, profile, ids} = this.props
        const token = profile.token

        const filterToken = ids.filter(id => id.id === token);

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.logo} source={logoCliente} />

                    <TouchableOpacity style={styles.headerText} onPress={() => this.props.navigation.navigate("Settings")}>
                        <Feather name="arrow-left" size={20} color="#91bd36"
                        />
                    </TouchableOpacity>
                </View>


                <View style={{ alignItems: 'flex-start' }}>
                    <Text style={styles.title}>Editar</Text>
                    <Text style={styles.description}>Configure o seu IDook!</Text>
                </View>

                <ScrollView 
            showsVerticalScrollIndicator = {false}>

                <View style={styles.form}>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.inputTitle}>Nome</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="words"
                            //onChange={this.handleChange}
                            //defaultValue={filterToken[0].firstName}
                            //id='firstName'
                            onChangeText={firstName=> this.setState({firstName: firstName})}
                            defaultValue={filterToken[0].firstName}
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.inputTitle}>Sobrenome</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="words"
                            //onChange={this.handleChange}
                            //defaultValue={filterToken[0].lastName}
                            //id='lastName'
                            onChangeText={lastName=> this.setState({lastName: lastName})}
                            defaultValue={filterToken[0].lastName}
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.inputTitle}>Telefone</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={phone=> this.setState({phone: phone})}
                            defaultValue={filterToken[0].phone}
                            
                            //autoCapitalize="none"
                            //onChange={this.handleChange}
                            //defaultValue={filterToken[0].phone}
                            //id='phone'
                        ></TextInput>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.inputTitle}>Cidade</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={city=> this.setState({city: city})}
                            defaultValue={filterToken[0].city}
                            autoCapitalize="words"
                            //onChange={this.handleChange}
                            //defaultValue={filterToken[0].city}
                            //id='city'
                        ></TextInput>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.inputTitle}>Estado/Sigla</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={uf=> this.setState({uf: uf})}
                            defaultValue={filterToken[0].uf}
                            autoCapitalize="words"
                            //onChange={this.handleChange}
                            //defaultValue={filterToken[0].uf}
                            //id='uf'
                        ></TextInput>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.inputTitle}>Empresa</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={empresa=> this.setState({empresa: empresa})}
                            defaultValue={filterToken[0].empresa}
                            autoCapitalize="words"
                            //onChange={this.handleChange}
                            //defaultValue={filterToken[0].empresa}
                            //id='empresa'
                        ></TextInput>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.inputTitle}>Cargo</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={cargo=> this.setState({cargo: cargo})}
                            defaultValue={filterToken[0].cargo}
                            autoCapitalize="words"
                           // onChange={this.handleChange}
                            //defaultValue={filterToken[0].cargo}
                            //id='cargo'
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

  //  console.log(state)
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
)(EditID)
