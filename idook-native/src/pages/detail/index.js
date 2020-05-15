import React from 'react';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { View, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import QRCode from 'react-native-qrcode-svg';

import logoImg from '../../assets/logo2.png';
import logoCliente from '../../assets/sindpd.png';
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

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.card}>
                    <View style={styles.DIV}>
                        <Text style={styles.nomedocliente}>SindPD Digital</Text>
                    </View>
                    <View style={styles.quadrogeral}>

                        <View style={styles.ID}>
                            
                            
                        </View>
                        <View style={styles.coluna}>
                            <View style={styles.dadospessoais}>
                                <Text style={styles.name}>Getúlio Vargas</Text>
                                <Text style={styles.descriptionB}>Empresa</Text>
                                <Text style={styles.description}>República Federativa do Brasil</Text>
                                <Text style={styles.descriptionB}>Cargo</Text>
                                <Text style={styles.description}>Presidente da República</Text>
                                <Text style={styles.descriptionB}>Cidade</Text>
                                <Text style={styles.description}>São Borja, RS</Text>
                                <Text style={styles.descriptionB}>Contato</Text>
                                <Text style={styles.description}>getulio@sindpd.org</Text>
                                <Text style={styles.description}>(11) 2222-2222</Text>

                            </View>
                            <View style={styles.Foto}>
                            <Image source={logoCliente} />
                                <Image
                                    style={{ width: 130, height: 130, borderRadius: 8 }}
                                    source={{
                                        uri:
                                            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Getulio_Vargas_%281930%29.jpg/245px-Getulio_Vargas_%281930%29.jpg"
                                    }}
                                    resizeMode="cover"
                                />
                                <Text style={styles.Titulo}>Profissional de T.I.</Text>
                            </View>
                        </View>

                    </View>

                    <View style={styles.DIV}>

                        <Text style={styles.descriptionWhite}> EXPIRA EM: </Text>
                        <Text style={styles.descriptionWhiteB}> 21/08/2020 </Text>

                    </View>

                    <View style={styles.quadrogeral}>

                        <View style={styles.MainContainer}>
                            <QRCode
                                value="MECARD: N: Getulio Vargas;  TEL: (11) 2222-2222; EMAIL: getulio@sindpd.com"
                                size={150}
                            />
                            <View style={{ paddingTop: 10 }} >
                                <Text style={styles.description}> 123456-12 </Text>
                                <Text style={styles.descriptionB}> Matrícula </Text>
                            </View>
                        </View>

                    </View>

                    <View style={styles.DIV}>

                        <Text style={styles.Site}> sindpd.org.br </Text>

                    </View>

                </View>
            </ScrollView>

        </View>
    );
}