import React, { Component } from "react";
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
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
        this.props.navigation.navigate("Loading")

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.logo} source={logoCliente} />

                    <TouchableOpacity style={styles.headerText} onPress={() => this.props.navigation.navigate("Register")}>
                        <Feather name="arrow-left" size={20} color="#91bd36"
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'flex-start' }}>
                    <Text style={styles.title}>Termos e Condições,</Text>
                    <Text style={styles.description}>Estamos cuidando da sua provacidade</Text>

                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.description}>A sua privacidade é importante para nós. É política do respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site , e outros sites que possuímos e operamos.</Text>
                <Text style={styles.description}>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</Text>
                <Text style={styles.description}>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</Text>
                <Text style={styles.description}>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</Text>
                <Text style={styles.description}>O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</Text>
                <Text style={styles.description}>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</Text>
                <Text style={styles.description}>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.</Text>
                <Text style={styles.description}>Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</Text>
               
                </ScrollView>

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