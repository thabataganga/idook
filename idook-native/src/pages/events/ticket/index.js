import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';

import { BarCodeScanner } from 'expo-barcode-scanner';

import logoImg from '../../../assets/idook.png';
import logoCliente from '../../../assets/sindpd.png';
import styles from '../styles';

export default function Incidents() {
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('EventDetail');
    }
    function navigateToPlay() {
        navigation.navigate('Play');
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



            <ScrollView 
            showsVerticalScrollIndicator = {false} 
            style={{ marginTop: 30, padding: 10 }}>

                <View style={styles.incident}>

                    <View style={{ alignItems: "center" }}>

                    <Text style={styles.Title}>Inscrição confirmada!</Text>

                        <Image
                            style={{ width: 250, height: 250, borderRadius: 8, alignSelf: "center", flex: 1 }}
                            source={{
                                uri:
                                    "https://image.freepik.com/vetores-gratis/modelo-de-banner-de-evento-de-musica-com-foto_52683-12627.jpg"
                            }}
                            resizeMode="cover"
                        />

                        <Image style={{marginTop: 30}} source={logoCliente} />
                        <View style={{ flex: 1, alignItems: "center" }}>
                            <Text style={styles.Title}>Nome do Evento</Text>
                            <Text style={styles.description}>Escaneie o QR Code do Evento</Text>
                            <Text style={styles.description}>Data do evento</Text>
                            <Text style={styles.description}>Vagas: 10/30</Text>
                            <Text style={styles.detailButtonText}>O evento abrira em breve</Text>
                        </View>            
                    </View>

                    
                            <TouchableOpacity
                                style={styles.detailButton}
                                onPress={navigateToPlay}>
                                <Text style={styles.detailButtonText}>Entrar no evento</Text>
                                <Feather style={styles.detailButtonText} name="arrow-right" size={16} color="black" />
                            </TouchableOpacity>
                </View>

                


            </ScrollView>

        </View>
    );
}