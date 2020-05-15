import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';



import logoImg from '../../assets/logo2.png';
import styles from './styles';

export default function Incidents() {
    const navigation = useNavigation();

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
                <Image source={logoImg} />
               <Text style={styles.headerText}>
                    <Text style={styles.headerTextBold}>21/04/2020</Text>
                </Text> 
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
                        onPress={navigateToEvents}
                    >
                        <FontAwesome name="qrcode" style={styles.icon} />
                        <Text style={styles.detailButtonText}>Eventos</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.menuBox}>
                    <TouchableOpacity
                        style={styles.detailButton}
                        onPress={navigateToPoll}
                    >
                        <FontAwesome name="comments-o" style={styles.icon} />
                        <Text style={styles.detailButtonText}>Pesquisas</Text>
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



            </ScrollView>

           
        </View>
    );
}