import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 15,
        paddingHorizontal: 10,
        color: '#737380',
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {
        fontSize: 35,
        marginBottom: 10,
        paddingHorizontal: 20,
        marginTop: 30,
        fontWeight: 'bold',
        color: '#13131a'
    },

    description: {
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#737380'
    },
    incidentList: {
        paddingHorizontal: 20,
        marginTop: 32,
    },
    incident:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },
    detailButton:{
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    
    },
    detailButtonText: {
        paddingHorizontal: 20,
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },

    Title: {
        padding: 20,
        fontSize: 25,
        fontWeight: 'bold'
    }
});