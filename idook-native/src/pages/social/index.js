import React from 'react';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Image, Text, TouchableOpacity, Linking, ActivityIndicator } from 'react-native';

import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';



import logoImg from '../../assets/idook.png';
import logoCliente from '../../assets/sindpd.png';

import styles from './styles';

class Social extends React.Component{


    render(){

        const { auth, profile, ids, users } = this.props
        const token = profile.token

        const filterToken = ids.filter(id => id.id === token);

        const IDauthorId = filterToken[0].authorId

        if (users) {

            const filterUser = users.filter(id => id.id === IDauthorId);
           // console.log(filterUser)

            if (filterUser.length != 0) {

                const company = filterUser[0]

                var whatsapplink = 'https://api.whatsapp.com/send?l=pt-BR&phone=' + company.whatsapp;
                var facebooklink = 'https://' + company.facebook;
                var twitterlink = 'https://' + company.twitter;
                var youtubelink = 'https://' + company.youtube;
                var websitelink = 'https://' + company.website;
                var instagramlink = 'https://' + company.instagram;

                //console.log(facebooklink)

                return (
                    <View style={styles.container}>
                        <View style={styles.header}>
                        <Image style={styles.logo} source={logoCliente} />
                            <TouchableOpacity style={styles.headerText} onPress={() => this.props.navigation.navigate("Inicial")} >
                                <Feather name="arrow-left" size={20} color="#91bd36"
                                />
                            </TouchableOpacity> 
                        </View>
                        <Text style={styles.title}>Rede Sociais,</Text>
                        <Text style={styles.description}>Converse com o Sindpd!</Text>
            
                        <ScrollView 
                        showsVerticalScrollIndicator = {false}>
            
                        <View style={styles.containerMenu}>
                            <View style={styles.menuBox}>
                                <TouchableOpacity
                                    style={styles.detailButton}
                                    onPress={()=> Linking.openURL(whatsapplink)}
                                >
                                    <FontAwesome name="whatsapp" style={styles.icon} />
                                    <Text style={styles.detailButtonText}>WhatsApp</Text>
                                </TouchableOpacity>
                            </View>
            
                            <View style={styles.menuBox}>
                                <TouchableOpacity
                                    style={styles.detailButton}
                                    onPress={()=> Linking.openURL(facebooklink)}
                                >
                                    <FontAwesome name="facebook" style={styles.icon} />
                                    <Text style={styles.detailButtonText}>Facebook</Text>
                                </TouchableOpacity>
                            </View>
            
                            <View style={styles.menuBox}>
                                <TouchableOpacity
                                    style={styles.detailButton}
                                    onPress={()=> Linking.openURL(instagramlink)}                                >
                                    <FontAwesome name="instagram" style={styles.icon} />
                                    <Text style={styles.detailButtonText}>Instagram</Text>
                                </TouchableOpacity>
                            </View>
            
                            <View style={styles.menuBox}>
                                <TouchableOpacity
                                    style={styles.detailButton}
                                    onPress={()=> Linking.openURL(twitterlink)}                                >
                                    <FontAwesome name="twitter" style={styles.icon} />
                                    <Text style={styles.detailButtonText}>Twitter</Text>
                                </TouchableOpacity>
                            </View>
            
                            <View style={styles.menuBox}>
                                <TouchableOpacity
                                    style={styles.detailButton}
                                    onPress={()=> Linking.openURL(youtubelink)}                                >
                                    <FontAwesome name="youtube" style={styles.icon}/>
                                    <Text style={styles.detailButtonText}>youtube</Text>
                                </TouchableOpacity>
                            </View>
            
                            <View style={styles.menuBox}>
                                <TouchableOpacity
                                    style={styles.detailButton}
                                    onPress={()=> Linking.openURL(websitelink)}                                >
                                    <FontAwesome name="desktop" style={styles.icon} />
                                    <Text style={styles.detailButtonText}>Site</Text>
                                </TouchableOpacity>
                            </View>

                            
            
                        </View>

                        <View style={{alignItems:'flex-end'}}>
                <Image style={styles.logo2} source={logoImg} />
            </View>
            
                        </ScrollView>

                        
            
                       
                    </View>
                );

            }

        }

        return (
            <View style={styles.container}>
                <Text>Carregando...</Text>
                <ActivityIndicator size='large'></ActivityIndicator>
            </View>

        )

        

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

const mapDispatchToProps = (dispatch) => {
    return {
        editId: (ids, id) => dispatch(editId(ids, id))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'ids' },
        { collection: 'users' }
    ])
)(Social)