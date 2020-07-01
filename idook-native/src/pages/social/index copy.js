import React from 'react';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Image, Text, TouchableOpacity, Linking } from 'react-native';



import logoImg from '../../assets/idook.png';
import styles from './styles';

export default function Incidents() {
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Inicial');
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
            <Text style={styles.title}>Rede Sociais,</Text>
            <Text style={styles.description}>Converse com o Sindpd!</Text>

            <ScrollView 
            showsVerticalScrollIndicator = {false}>

            <View style={styles.containerMenu}>
                <View style={styles.menuBox}>
                    <TouchableOpacity
                        style={styles.detailButton}
                        onPress={()=> Linking.openURL('https://google.com')}
                    >
                        <FontAwesome name="whatsapp" style={styles.icon} />
                        <Text style={styles.detailButtonText}>WhatsApp</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.menuBox}>
                    <TouchableOpacity
                        style={styles.detailButton}
                        onPress={()=> Linking.openURL('https://google.com')}
                    >
                        <FontAwesome name="facebook" style={styles.icon} />
                        <Text style={styles.detailButtonText}>Facebook</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.menuBox}>
                    <TouchableOpacity
                        style={styles.detailButton}
                        onPress={()=> Linking.openURL('https://google.com')}
                    >
                        <FontAwesome name="instagram" style={styles.icon} />
                        <Text style={styles.detailButtonText}>Instagram</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.menuBox}>
                    <TouchableOpacity
                        style={styles.detailButton}
                        onPress={()=> Linking.openURL('https://google.com')}
                    >
                        <FontAwesome name="twitter" style={styles.icon} />
                        <Text style={styles.detailButtonText}>Twitter</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.menuBox}>
                    <TouchableOpacity
                        style={styles.detailButton}
                        onPress={()=> Linking.openURL('https://google.com')}
                    >
                        <FontAwesome name="linkedin" style={styles.icon}/>
                        <Text style={styles.detailButtonText}>Linkedin</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.menuBox}>
                    <TouchableOpacity
                        style={styles.detailButton}
                        onPress={()=> Linking.openURL('https://google.com')}
                    >
                        <FontAwesome name="desktop" style={styles.icon} />
                        <Text style={styles.detailButtonText}>Site</Text>
                    </TouchableOpacity>
                </View>

            </View>



            </ScrollView>

           
        </View>
    );
}