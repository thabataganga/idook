import React, {setState} from 'react';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import * as firebase from "firebase";


import logoImg from '../../assets/idook.png';
import logoClient from '../../assets/sindpd.png'
import styles from './styles';



export default function Incidents() {
    const navigation = useNavigation();
    
    const {email, displayName} = firebase.auth().currentUser;

    //console.log(email, displayName)

    

    function signOutUser() {
        firebase.auth().signOut();
    };

    function navigateToDetail() {
        navigation.navigate('Detail');
    }

    function navigateToFeed() {
        navigation.navigate('Feed');
    }

    function navigateToEvents() {
        navigation.navigate('Events');
    }

    function navigateToPoll() {
        navigation.navigate('Poll');
    }

    function navigateToSocial() {
        navigation.navigate('Social');
    }

    function navigateToSettings() {
        navigation.navigate('Settings');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Image style={styles.logo} source={logoClient} />
            <TouchableOpacity style={styles.headerText} onPress={signOutUser}>
            <Feather name="log-out" size={20} color="#91bd36"
                    />
                    <Text>Sair</Text>
                </TouchableOpacity>
            </View>

            

       
            <Text style={styles.title}>Bem-vindo,</Text>
            <Text style={styles.description}>Fique por dentro do Sindpd!</Text>

            

            <ScrollView 
            showsVerticalScrollIndicator = {false}>

            <View style={styles.containerMenu}>
                <View style={styles.menuBox}>
                    <TouchableOpacity
                        style={styles.detailButton}
                        onPress={navigateToDetail}
                    >
                        <FontAwesome name="id-badge" style={styles.icon} />
                        <Text style={styles.detailButtonText}>ID Digital</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.menuBox}>
                    <TouchableOpacity
                        style={styles.detailButton}
                        onPress={navigateToFeed}
                    >
                        <FontAwesome name="newspaper-o" style={styles.icon} />
                        <Text style={styles.detailButtonText}>Notícias</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.menuBox}>
                    <TouchableOpacity
                        style={styles.detailButton}
                        onPress={navigateToSocial}
                    >
                        <FontAwesome name="users" style={styles.icon}/>
                        <Text style={styles.detailButtonText}>Redes Sociais</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.menuBox}>
                    <TouchableOpacity
                        style={styles.detailButton}
                        onPress={navigateToSettings}
                    >
                        <FontAwesome name="cogs" style={styles.icon} />
                        <Text style={styles.detailButtonText}>Configuração</Text>
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