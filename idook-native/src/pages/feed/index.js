import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { WebView } from 'react-native-webview';

import logoImg from '../../assets/idook.png';
import logoCliente from '../../assets/sindpd.png';
import styles from './styles';

export default function Incidents() {
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Inicial');
    }

    const ScriptJava = `
      document.body.style.backgroundColor = '#FFF';
      document.getElementsByClassName('page-section home-page')[0].style.display='none';
      document.getElementsByClassName('notControl')[0].style.display='none';
      document.getElementsById('categoriaNoticiaEspaco')[0].style.display='none';
      
      true; // note: this is required, or you'll sometimes get silent failures
    `;

    const runFirst = `
    document.body.style.backgroundColor = '#FFF';
    document.getElementsByClassName('page-section home-page')[0].style.display='none';
    document.getElementsByClassName('notControl')[0].style.display='none';
    document.getElementsById('categoriaNoticiaEspaco')[0].style.display='none';
    
    true; // note: this is required, or you'll sometimes get silent failures
    `;


    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Image style={styles.logo} source={logoCliente} />

                <TouchableOpacity style={styles.headerText} onPress={navigateToDetail}>
                    <Feather name="arrow-left" size={20} color="#91bd36"
                    />
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1 }}>
                <WebView
                    style={{ marginTop: -443 }}
                    source={{
                        uri:
                            'https://sindpd.org.br/sindpd/site/categoria.jsp?id=0',
                    }}

                   

                />
            </View>

            <View style={{alignItems:'flex-end'}}>
                <Image style={styles.logo2} source={logoImg} />
            </View>

        </View>
    );
}