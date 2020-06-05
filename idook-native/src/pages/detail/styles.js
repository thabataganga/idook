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
    card: {
        //backgroundColor: '#2561AB',
        marginVertical: 30,
        borderRadius: 8,
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

    nomedocliente: {
        //color: '#FFF',
        margin: 10,
        fontSize: 20,
        paddingStart: 10,
        fontWeight: 'bold',      
    },

    quadrogeral: {
        padding: 20,
        backgroundColor: '#4585C5',
        justifyContent: 'center',
    },

    ID: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },


    DIV: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    name: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 20,
    },

    coluna: {
        flexDirection: 'row',
        justifyContent: 'space-between',        
    },

    dadospessoais: {
        flex: 1,
    },

    Foto: {
        padding: 5,
        marginStart: 10,
        borderRadius: 8,
        backgroundColor: '#fff',
        alignItems: 'center',
        alignSelf: 'flex-start'
        
    },

    LogoCliente: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    Titulo: {
        paddingTop: 13,
    },

    description: {
        fontSize: 16,
        lineHeight: 17,
        color: '#fff',
        marginBottom: 5,
    },

    descriptionB: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 17,
        marginBottom: 5,
        color: '#fff'
    },

    descriptionWhite: {
        fontSize: 16,
        lineHeight: 17,
        color: '#FFF',
        marginVertical: 5,
    },

    descriptionWhiteB: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 17,
        marginBottom: 5,
        color: '#FFF'
    },

    Site: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 17,
        marginBottom: 5,
        padding: 20,
        color: '#FFF'
    },


    containerQR: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
 
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    },
    MainContainer: {
        flex: 1,
       
        alignItems: 'center',
        paddingTop: 10,
      },

})