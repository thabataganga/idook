import { Alert, ToastAndroid } from "react-native";

const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'LOGIN_ERROR':
      console.log('login error');
      Alert.alert(
        "Erro",
        "Verifique o email e a senha",
        [
          { text: "OK"}
        ],
        { cancelable: false }
      );
      return {
        ...state,
        authError: 'Login failed'
      }

    case 'LOGIN_SUCCESS':
      console.log('login success');
      ToastAndroid.showWithGravity(
        "Bem vindo",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
      return {
        ...state,
        authError: null
      }

    case 'SIGNOUT_SUCCESS':
      console.log('signout success');
      ToastAndroid.showWithGravity(
        "Até breve!",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
      return {
        ...state,
        authError: null
      }
      return state;

    case 'SIGNUP_SUCCESS':
      console.log('signup success')
      ToastAndroid.showWithGravity(
        "Conta criada com sucesso",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
      return {
        ...state,
        authError: null
      }
      return {
        ...state,
        authError: null
      }

    case 'SIGNUP_ERROR':
      console.log('signup error')
      Alert.alert(
        "Erro",
        "Verifique o email e a senha",
        [
          { text: "OK"}
        ],
        { cancelable: false }
      );
      return {
        ...state,
        authError: action.err.message
      }

    default:
      return state

    case 'EDIT_USER':
      console.log('edit user');
      ToastAndroid.showWithGravity(
        "Conta editada com sucesso!",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
      return {
        ...state,
        authError: null
      }
      return state;
    case 'EDIT_USER_ERROR':
      console.log('edit user error', 'state: ', state, 'action: ', action.id);
      Alert.alert(
        "Erro",
        "Verifique os dados",
        [
          { text: "OK"}
        ],
        { cancelable: false }
      );
      return state;
  }
};

export default authReducer;