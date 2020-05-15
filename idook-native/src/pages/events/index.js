import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';



import logoImg from '../../assets/logo2.png';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';

export default function Incidents() {
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Inicial');
    }

    function navigateToEventDetail() {
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

            <Text style={styles.title}>Eventos,</Text>
            <Text style={styles.description}>Fique por dentro e retire a sua credencial!</Text>

            <FlatList
                data={[1, 2, 3, 4, 5]}
                style={styles.incidentList}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator = {false}
                renderItem={() => (


                    <View style={styles.incident}>

                        <View >
                        <Image
                                    style={{ width: 300, height: 200, borderRadius: 8, alignSelf: "center", flex: 1 }}
                                    source={{
                                        uri:
                                            "https://image.freepik.com/vetores-gratis/modelo-de-banner-de-evento-de-musica-com-foto_52683-12627.jpg"
                                    }}
                                    resizeMode="cover"
                                />
                            <View style={{ flex: 1 }}>
                            <Text style={styles.Title}>Nome do Evento</Text>
                            <Text style={styles.description}>Descrição do Evento</Text>
                            <Text style={styles.description}>Data do evento</Text>
                            
                            <TouchableOpacity
                                style={styles.detailButton}
                                onPress={navigateToEventDetail}>
                                <Text style={styles.detailButtonText}>Saiba mais</Text>
                                <Feather style={styles.detailButtonText} name="arrow-right" size={16} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.detailButton}
                                onPress={navigateToPlay}>
                                <Text style={styles.detailButtonText}>Entrar no evento</Text>
                                <Feather style={styles.detailButtonText} name="arrow-right" size={16} color="black" />
                            </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />


        </View>
    );
}