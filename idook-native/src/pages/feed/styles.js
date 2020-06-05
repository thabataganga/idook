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

    DIV: {
        padding:20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
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
        resizeMode: 'contain',

      },



})