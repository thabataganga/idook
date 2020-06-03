import React from 'react';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Image, Text, TouchableOpacity, Linking } from 'react-native';



import logoImg from '../../assets/logo2.png';
import styles from './styles';

export default function Incidents() {
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Inicial');
    }

    function navigateToIdEdit() {
        navigation.navigate('EditID');
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

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity style={styles.headerText} onPress={navigateToDetail}>
                    <Feather name="arrow-left" size={20} color="#91bd36"
                    />
                </TouchableOpacity> 
            </View>
            <Text style={styles.title}>Configurações,</Text>
            <Text style={styles.description}>Personalize a sua ID!</Text>

            <ScrollView 
            showsVerticalScrollIndicator = {false}>

            <View style={styles.containerMenu}>
                <View style={styles.menuBox}>
                    <TouchableOpacity
                        style={styles.detailButton}
                        onPress={()=> {}}
                    >
                        <FontAwesome name="id-badge" style={styles.icon} />
                        <Text style={styles.detailButtonText}>Foto</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.menuBox}>
                    <TouchableOpacity
                        style={styles.detailButton}
                        onPress={navigateToIdEdit}
                    >
                        <FontAwesome name="align-justify" style={styles.icon} />
                        <Text style={styles.detailButtonText}>Dados do ID</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.menuBox}>
                    <TouchableOpacity
                        style={styles.detailButton}
                        onPress={()=> {}}
                    >
                        <FontAwesome name="bell" style={styles.icon} />
                        <Text style={styles.detailButtonText}>Notificações</Text>
                    </TouchableOpacity>
                </View>



            </View>



            </ScrollView>

           
        </View>
    );
}