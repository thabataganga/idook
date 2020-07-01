import React from 'react';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { View, Image, ScrollView, Text, TouchableOpacity, ActivityIndicator } from 'react-native';



import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

import QRCode from 'react-native-qrcode-svg';

import logoImg from '../../assets/idook.png';
import logoCliente from '../../assets/sindpd.png';
import styles from './styles';

import * as moment from 'moment'; import 'moment/locale/pt-br'

class Detail extends React.Component {

    render() {
        //moment.locale('pt-br')

        let moment = require("moment");
        if ("default" in moment) {
            moment = moment["default"];
        }

        const { auth, profile, ids, users } = this.props
        const token = profile.token

        const filterToken = ids.filter(id => id.id === token);

        const IDauthorId = filterToken[0].authorId

        const start = filterToken[0].createdAt.toDate();

        const now = new Date();

        //const now = "06/02/2020"

        const validade = filterToken[0].validade;


        let diff = moment(now, "DD/MM/YYYY").diff(moment(start, "DD/MM/YYYY"), 'days');

        var range = Math.abs(start - now)

        let duration = moment.duration(diff)

        var result = moment(duration)
        //duration.format("ddd")

        const expira = validade - diff - 1;


        if (users) {
            const filterUser = users.filter(id => id.id === IDauthorId);
            //  console.log(filterUser)
            if (filterUser.length != 0) {
                const company = filterUser[0]

                // console.log(company.url)

                if (expira < 1) {
                    return (
                        <View style={styles.container}>
                            
                            <View style={{ alignItems: 'flex-end' }}>
                                <TouchableOpacity style={styles.headerText} onPress={() => this.props.navigation.navigate("Inicial")}>
                                    <Feather name="arrow-left" size={20} color="#91bd36"
                                    />
                                </TouchableOpacity>
                            </View>

                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View
                                    style={{
                                        backgroundColor: `rgba(${company.color2.r}, ${company.color2.g}, ${company.color2.b}, ${company.color2.a})`,
                                        marginTop: 30,
                                        borderRadius: 8,
                                        color: 'white',
                                    }}
                                >
                                    <View style={styles.DIV}>
                                        <Text style={[styles.nomedocliente, { color: `rgba(${company.color4.r}, ${company.color4.g}, ${company.color4.b}, ${company.color4.a})` }]}>{company.socialreason}</Text>
                                    </View>
                                    <View style={{
                                        padding: 20,
                                        backgroundColor: `rgba(${company.color.r}, ${company.color.g}, ${company.color.b}, ${company.color.a})`,
                                        justifyContent: 'center',
                                    }}>

                                        <View style={styles.ID}>


                                        </View>
                                        <View style={styles.coluna}>
                                            <View style={styles.dadospessoais}>
                                                <Text style={[styles.name, { color: `rgba(${company.color3.r}, ${company.color3.g}, ${company.color3.b}, ${company.color3.a})` }]}>{filterToken[0].firstName} {filterToken[0].lastName} </Text>
                                                <Text style={[styles.descriptionB, { color: `rgba(${company.color3.r}, ${company.color3.g}, ${company.color3.b}, ${company.color3.a})` }]}>Empresa</Text>
                                                <Text style={[styles.description, { color: `rgba(${company.color3.r}, ${company.color3.g}, ${company.color3.b}, ${company.color3.a})` }]}>{filterToken[0].empresa}</Text>
                                                <Text style={[styles.descriptionB, { color: `rgba(${company.color3.r}, ${company.color3.g}, ${company.color3.b}, ${company.color3.a})` }]}>Cargo</Text>
                                                <Text style={[styles.description, { color: `rgba(${company.color3.r}, ${company.color3.g}, ${company.color3.b}, ${company.color3.a})` }]}>{filterToken[0].cargo}</Text>
                                                <Text style={[styles.descriptionB, { color: `rgba(${company.color3.r}, ${company.color3.g}, ${company.color3.b}, ${company.color3.a})` }]}>Local</Text>
                                                <Text style={[styles.description, { color: `rgba(${company.color3.r}, ${company.color3.g}, ${company.color3.b}, ${company.color3.a})` }]}>{filterToken[0].city}, {filterToken[0].uf}</Text>


                                            </View>
                                            <View style={styles.Foto}>
                                                <Image
                                                    style={{ width: 130, height: 130, borderRadius: 8 }}
                                                    source={{ uri: filterToken[0].url }}
                                                    resizeMode="cover"
                                                />

                                                <Image
                                                    style={{ marginTop: 5, width: 130, height: 50, borderRadius: 8 }}
                                                    source={{ uri: company.url }}
                                                    resizeMode="cover"
                                                />
                                            </View>
                                        </View>

                                    </View>

                                    <View style={styles.DIV}>

                                        <Text style={[styles.descriptionWhite, { color: `rgba(${company.color4.r}, ${company.color4.g}, ${company.color4.b}, ${company.color4.a})` }]}> ID Invalida: </Text>
                                        <Text style={[styles.descriptionWhiteB, { color: `rgba(${company.color4.r}, ${company.color4.g}, ${company.color4.b}, ${company.color4.a})` }]}> EXPIROU </Text>

                                    </View>

                                    <View style={{
                                        padding: 20,
                                        backgroundColor: `rgba(${company.color.r}, ${company.color.g}, ${company.color.b}, ${company.color.a})`,
                                        justifyContent: 'center',
                                    }}>

                                        <View style={styles.MainContainer}>
                                            <View  >
                                                <Text style={[styles.description, { color: `rgba(${company.color3.r}, ${company.color3.g}, ${company.color3.b}, ${company.color3.a})` }]}> Entre em contato para mais informações</Text>
                                            </View>
                                        </View>

                                    </View>

                                    <View style={styles.DIV}>

                                        <Text style={[styles.Site, { color: `rgba(${company.color4.r}, ${company.color4.g}, ${company.color4.b}, ${company.color4.a})` }]}> {company.website} </Text>

                                    </View>




                                </View>


                                <View style={{ alignItems: 'center' }}>
                                    <Image style={styles.logo2} source={logoImg} />
                                </View>

                            </ScrollView>

                        </View>
                    );

                }

                return (
                    <View style={styles.container}>

                        <View style={{ alignItems: 'flex-end' }}>



                            <TouchableOpacity style={styles.headerText} onPress={() => this.props.navigation.navigate("Inicial")}>
                                <Feather name="arrow-left" size={20} color="#91bd36"
                                />
                            </TouchableOpacity>
                        </View>

                         

                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View
                                style={{
                                    backgroundColor: `rgba(${company.color2.r}, ${company.color2.g}, ${company.color2.b}, ${company.color2.a})`,
                                    marginTop: 30,
                                    borderRadius: 8,
                                    color: 'white',
                                }}
                            >
                                <View style={styles.DIV}>
                                    <Text style={[styles.nomedocliente, { color: `rgba(${company.color4.r}, ${company.color4.g}, ${company.color4.b}, ${company.color4.a})` }]}>{company.socialreason}</Text>
                                </View>
                                <View style={{
                                    padding: 20,
                                    backgroundColor: `rgba(${company.color.r}, ${company.color.g}, ${company.color.b}, ${company.color.a})`,
                                    justifyContent: 'center',
                                }}>

                                    <View style={styles.ID}>


                                    </View>
                                    <View style={styles.coluna}>
                                        <View style={styles.dadospessoais}>
                                            <Text style={[styles.name, { color: `rgba(${company.color3.r}, ${company.color3.g}, ${company.color3.b}, ${company.color3.a})` }]}>{filterToken[0].firstName} {filterToken[0].lastName} </Text>
                                            <Text style={[styles.descriptionB, { color: `rgba(${company.color3.r}, ${company.color3.g}, ${company.color3.b}, ${company.color3.a})` }]}>Empresa</Text>
                                            <Text style={[styles.description, { color: `rgba(${company.color3.r}, ${company.color3.g}, ${company.color3.b}, ${company.color3.a})` }]}>{filterToken[0].empresa}</Text>
                                            <Text style={[styles.descriptionB, { color: `rgba(${company.color3.r}, ${company.color3.g}, ${company.color3.b}, ${company.color3.a})` }]}>Cargo</Text>
                                            <Text style={[styles.description, { color: `rgba(${company.color3.r}, ${company.color3.g}, ${company.color3.b}, ${company.color3.a})` }]}>{filterToken[0].cargo}</Text>
                                            <Text style={[styles.descriptionB, { color: `rgba(${company.color3.r}, ${company.color3.g}, ${company.color3.b}, ${company.color3.a})` }]}>Local</Text>
                                            <Text style={[styles.description, { color: `rgba(${company.color3.r}, ${company.color3.g}, ${company.color3.b}, ${company.color3.a})` }]}>{filterToken[0].city}, {filterToken[0].uf}</Text>

                                        </View>
                                        <View style={styles.Foto}>


                                            <Image
                                                style={{ width: 130, height: 130, borderRadius: 8 }}
                                                source={{ uri: filterToken[0].url }}
                                                resizeMode="cover"
                                            />

                                            <Image
                                                style={{ marginTop: 5, width: 130, height: 50, borderRadius: 8 }}
                                                source={{ uri: company.url }}
                                                resizeMode="cover"
                                            />
                                        </View>
                                    </View>

                                </View>

                                <View style={styles.DIV}>

                                    <Text style={[styles.descriptionWhite, { color: `rgba(${company.color4.r}, ${company.color4.g}, ${company.color4.b}, ${company.color4.a})` }]}> EXPIRA EM: </Text>
                                    <Text style={[styles.descriptionWhiteB, { color: `rgba(${company.color4.r}, ${company.color4.g}, ${company.color4.b}, ${company.color4.a})` }]}> {expira} dias </Text>

                                </View>

                                <View style={{
                                    padding: 20,
                                    backgroundColor: `rgba(${company.color.r}, ${company.color.g}, ${company.color.b}, ${company.color.a})`,
                                    justifyContent: 'center',
                                }}>

                                    <View style={styles.MainContainer}>
                                        <QRCode
                                            value={"MECARD: N:" + filterToken[0].firstName + " " + filterToken[0].lastName + "; TEL:" + filterToken[0].phone + "; EMAIL: " + filterToken[0].email + "; ORG: " + filterToken[0].empresa + ";"}
                                            // value="MECARD: N: Getulio Vargas;  TEL: (11) 2222-2222; EMAIL: getulio@sindpd.com"
                                            size={120}
                                        />
                                        <View style={{ paddingTop: 10 }} >
                                            <Text style={[styles.descriptionB, { color: `rgba(${company.color3.r}, ${company.color3.g}, ${company.color3.b}, ${company.color3.a})` }]}> Matrícula: {filterToken[0].matricula} </Text>
                                        </View>
                                    </View>

                                </View>

                                <View style={styles.DIV}>

                                    <Text style={[styles.Site, { color: `rgba(${company.color4.r}, ${company.color4.g}, ${company.color4.b}, ${company.color4.a})` }]}> {company.website} </Text>

                                </View>



                            </View>


                            <View style={{ alignItems: 'center' }}>
                                <Image style={styles.logo2} source={logoImg} />
                            </View>

                        </ScrollView>



                    </View>
                );
            }

        }


        return (
            <View style={styles.container}>
                <Text>Carregando...</Text>
                <ActivityIndicator size='large'></ActivityIndicator>
            </View>

        )
    }



}


const mapStateToProps = (state) => {

    // console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        ids: state.firestore.ordered.ids,
        users: state.firestore.ordered.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editId: (ids, id) => dispatch(editId(ids, id))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'ids' },
        { collection: 'users' }
    ])
)(Detail)