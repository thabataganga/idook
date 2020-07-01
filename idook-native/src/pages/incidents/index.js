import React from 'react';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { View, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { WebView } from 'react-native-webview';

import logoImg from '../../assets/idook.png';
import styles from './styles';

export default function Incidents() {
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Inicial');
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

            <View style={{ flex: 1 }}>
                <WebView
                    style={{ marginTop: -390 }}
                    source={{
                        uri:
                            'https://sindpd.org.br/sindpd/site/categoria.jsp?id=0',
                    }}
                    
                />
            </View>




        </View>
    );
}