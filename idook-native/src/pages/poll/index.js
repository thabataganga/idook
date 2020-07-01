import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';



import logoImg from '../../assets/idook.png';
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

            <Text style={styles.title}>Pesquisa,</Text>
            <Text style={styles.description}>Dê sua opnião sobre o Sindpd!</Text>

            <FlatList
                data={[1, 2, 3, 4, 5]}
                style={styles.incidentList}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator = {false}
                renderItem={() => (


                    <View style={styles.incident}>

                        <View >
                            <View style={{ flex: 1 }}>
                            <Text style={styles.Title}>Pergunta</Text>
                            
                            <Text style={styles.description}>Opção 1</Text>
                            <Text style={styles.description}>Opção 2</Text>
                            <Text style={styles.description}>Opção 3</Text>
                            <Text style={styles.description}>Opção 4</Text>
                            

                            <TouchableOpacity
                                style={styles.detailButton}
                                onPress={() => { }}>
                                <Text style={styles.detailButtonText}>Votar</Text>
                                <Feather style={styles.detailButtonText} name="arrow-right" size={16} color="black" />
                                
                            </TouchableOpacity>
                            
                            <TouchableOpacity
                                style={styles.detailButton}
                                onPress={() => { }}>
                                <Text style={styles.detailButtonText}>Resultado parcial</Text>
                                <Feather style={styles.detailButtonText} name="arrow-right" size={16} color="black" />
                            </TouchableOpacity>

                            <Text style={styles.description}>Quantidade de votos: 666</Text>
                           
                            </View>
                        </View>
                    </View>
                )}
            />


        </View>
    );
}