import React, { setState } from 'react';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { View, ScrollView, Image, Text, BackHandler, TouchableOpacity } from 'react-native';
import * as firebase from "firebase";


import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

import logoImg from '../../assets/idook.png';
import logoClient from '../../assets/sindpd.png'
import styles from './styles';

import signOut from "../../store/actions/authActions"

class Inicial extends React.Component {


    //console.log(email, displayName)

    signOutUser() {
        firebase.auth().signOut();
    };

    render() {

        const { auth, profile, ids } = this.props;

        var confirm = '';

        if (ids && profile) {
            const token = profile.token

            const filterToken = ids.filter(id => id.id === token);

            if (filterToken.length != 0) {
               // console.log(filterToken[0])
                if (filterToken[0].empresa == "Não configurado") {
                    console.log(filterToken[0].empresa)
                   // this.props.navigation.navigate("NewID")
                }

            }




        }


        if (profile.token) {
            var token = null;
        }


        if (!auth.uid) {
            this.props.navigation.navigate("Login")
        }

        // console.log(profile)



        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.logo} source={logoClient} />
                    <TouchableOpacity style={styles.headerText} onPress={this.signOutUser} >
                        <Feather name="log-out" size={20} color="#91bd36"
                        />
                        <Text>Sair</Text>
                    </TouchableOpacity>
                </View>




                <Text style={styles.title}>Bem-vindo,</Text>
                <Text style={styles.description}>Fique por dentro do Sindpd!</Text>



                <ScrollView
                    showsVerticalScrollIndicator={false} >

                    <View style={styles.containerMenu}>
                        <View style={styles.menuBox}>
                            <TouchableOpacity
                                style={styles.detailButton}
                                onPress={() => this.props.navigation.navigate("Detail")}
                            >
                                <FontAwesome name="id-badge" style={styles.icon} />
                                <Text style={styles.detailButtonText}>ID Digital</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.menuBox}>
                            <TouchableOpacity
                                style={styles.detailButton}
                                onPress={() => this.props.navigation.navigate("Feed")}
                            >
                                <FontAwesome name="newspaper-o" style={styles.icon} />
                                <Text style={styles.detailButtonText}>Notícias</Text>
                            </TouchableOpacity>
                        </View>


                        <View style={styles.menuBox}>
                            <TouchableOpacity
                                style={styles.detailButton}
                                onPress={() => this.props.navigation.navigate("Social")}
                            >
                                <FontAwesome name="users" style={styles.icon} />
                                <Text style={styles.detailButtonText}>Redes Sociais</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.menuBox}>
                            <TouchableOpacity
                                style={styles.detailButton}
                                onPress={() => this.props.navigation.navigate("Settings")}
                            >
                                <FontAwesome name="cogs" style={styles.icon} />
                                <Text style={styles.detailButtonText}>Configuração</Text>
                            </TouchableOpacity>
                        </View>



                    </View>

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
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        ids: state.firestore.ordered.ids,
        users: state.firestore.ordered.users,
    }
}


export default compose(
    connect(mapStateToProps, null),
    firestoreConnect([
        { collection: 'ids' },
        { collection: 'users' }
    ])
)(Inicial)