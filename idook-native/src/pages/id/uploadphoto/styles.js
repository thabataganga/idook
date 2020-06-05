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


    logo:{
        marginTop: 15,
        marginStart: 15,
        height: 50,
        resizeMode: 'contain'

      },
      logo2:{
        marginTop: 15,
        
        height: 50,
        resizeMode: 'contain'

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
        lineHeight: 24,
        color: '#737380',
        marginBottom: 10,
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginBottom: 30,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#91bd36",
        borderRadius: 4,
        height: 50,
        paddingHorizontal: 30,
        alignItems: "center",
        justifyContent: "center"
    }


})