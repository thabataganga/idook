import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import * as firebase from "firebase";
import styles from './styles';
import { Feather } from '@expo/vector-icons';

import Constants from 'expo-constants';

import { editUser } from '../../store/actions/authActions'

import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';


import logoImg from '../../assets/idook.png';
import logoCliente from '../../assets/sindpd.png';


 class Token extends React.Component {
    state = {
        token: "",
        uid: "",
        authorId: ""
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
        const {profile, ids, auth} = this.props

        const token = this.state.token

        const uid_user = auth.uid

        //console.log(ids);

        const filterCPF = ids.filter(id => id.cpf === profile.cpf);

        var hascpf = filterCPF.length;
        //console.log(hascpf)

        if(hascpf != 0){
           // console.log("CPF Cadastrado")
            const filterToken = filterCPF.filter(id => id.tokenapp === token);
            var hastoken = filterToken.length;
           // console.log(hastoken)
            if(hastoken > 0){
               
                console.log(token);
                const uid = filterToken[0].id
                console.log(uid)
                this.state.token = uid
                this.state.authorId = filterToken[0].authorId
                this.props.editUser(this.state, uid_user )
            } else console.log("Tente novamente")
        } else {console.log("CPF não cadastrado")}
        


        //this.props.editUser(this.state, uid_user )
        //this.props.history.push('/');
       
    };

    handleEdit = (e) => {
        e.preventDefault();
        const { profile, auth } = this.props;

       // this.state.token = profile.state.cpf

        if (!this.state.token) {
            this.state.token = profile.cpf
            var cpf = this.state.token
            //console.log(cpf);

        }

        var cpf = this.state.token
        //console.log(profile);
        //console.log(cpf);
        //console.log(this.state);
        this.props.editUser({cpf}, auth.uid)
       // this.props.history.push('/userdetail');
    }

    componentDidMount() {
        //console.log(firebase.auth())
        
    }
    
   

    render() {

        const {profile, ids, auth} = this.props

        const uid = this.state.token

        const uid_user = auth.uid

        //console.log(ids);

        if (profile.isLoaded != false && profile.token) {

        //    console.log('tese')
        
            this.props.navigation.navigate("Inicial")
        }

    if (!auth.uid) {
        this.props.navigation.navigate("Login")
      } 
        
        if(ids && profile.isLoaded != false){

            const filterCPF = ids.filter(id => id.cpf === profile.cpf);

            console.log(this.props.profile)

            var hascpf = filterCPF.length;
           console.log(hascpf)

            if(hascpf != 0){
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
                                    //onChange={this.handleChange}
                                    //id='token'
                                    onChangeText={value=> this.setState({token: value})}
                                    value={this.state.token}
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
            } else {
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
                            <Text style={styles.title}>Que pena :(</Text>
                            <Text style={styles.description}>Infelizmente o seu CPF não foi habilitado na nossa base de dados</Text>
        
                        </View>  

                        <View style={styles.form}>
                            <View style={{ marginTop: 20 }}>
                                <Text style={styles.inputTitle}>CPF</Text>
                                <TextInput
                                    style={styles.input}
                                    autoCapitalize="none"
                                    defaultValue={profile.cpf}
                                    //onChange={this.handleChange}
                                    //id='token'
                                    onChangeText={token=> this.setState({token: token})}
                                    //value={this.state.token}
                                ></TextInput>
                            </View>
        
                        </View>
        
                        <TouchableOpacity onPress={this.handleEdit} style={styles.button} >
                            <Text style={{ color: "#FFF", fontWeight: "500" }}>Alterar CPF</Text>
                        </TouchableOpacity>                      
        
                        <View style={{ alignItems: 'flex-end' }}>
                            <Image style={styles.logo2} source={logoImg} />
                        </View>
                    </View>
                );
            }

            

        }

        return (
            <View style={{
                flex: 1,
                justifyContent:'center',
                alignItems: 'center',
                paddingTop: Constants.statusBarHeight + 20,
            }}>
                    <Text>Carregando...</Text>
                    <ActivityIndicator size='large'></ActivityIndicator>
                </View>

        )

        



//        console.log(this.state);
        
    }
    
}

const mapStateToProps = (state) => {

   // console.log(state)
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        ids: state.firestore.ordered.ids,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        editUser: (ids, id) => dispatch(editUser(ids, id))
    }
  }

  export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'ids' }
    ])
)(Token)


