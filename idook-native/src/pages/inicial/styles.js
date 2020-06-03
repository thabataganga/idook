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
        marginTop: 10,
        fontWeight: 'bold',
        color: '#13131a'
    },

    description: {
        paddingHorizontal: 20,
        fontSize: 16,
        lineHeight: 24,
        color: '#737380',
        marginBottom: 20,
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
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    detailButtonText: {
        marginTop: 20,
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        color: "black"
    },
    containerMenu:{
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 15,
        justifyContent: 'center',
      },
      menuBox:{
        borderRadius: 8,
        backgroundColor: "#fff",
        width:140,
        height:140,
        alignItems: 'center',
        justifyContent: 'center',
        margin:15
      },
      icon: {
        fontSize: 40,
        color: "#91bd36",
      },
      info:{
        fontSize:22,
        color: "#696969",
      },
      logo:{
        marginTop: 15,
        marginStart: 15,
        height: 50,
        resizeMode: 'contain'

      },

      logo2:{
        marginTop: 15,
        
        height: 30,
        resizeMode: 'contain'

      }
});