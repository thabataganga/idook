import { Alert, ToastAndroid } from "react-native";

const initState = {
}


const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_ID':
      console.log('ID criada com sucesso!', action.ids);
      ToastAndroid.showWithGravity(
        "IDook criada com sucesso",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
      return state;
    case 'CREATE_ID_ERROR':
      console.log('Erro para criar a ID, tente novamente', action.err);
      Alert.alert(
        "Erro",
        "Tente novamente mais tarde",
        [
          { text: "OK"}
        ],
        { cancelable: false }
      );
      return state;
    case 'DELETE_ID':
      console.log('delete id');
      ToastAndroid.showWithGravity(
        "IDook deletada com sucesso",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
      return state;
    case 'DELETE_ID_ERROR':
      console.log('delete id error', 'state: ', state, 'action: ', action.id);
      Alert.alert(
        "Erro",
        "Tente novamente mais tarde",
        [
          { text: "OK"}
        ],
        { cancelable: false }
      );
      return state;
    case 'EDIT_ID':
      console.log('edit id');
      ToastAndroid.showWithGravity(
        "IDook editada com sucesso",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
      return state;
    case 'EDIT_ID_ERROR':
      console.log('edit id error', 'state: ', state, 'action: ', action.id);
      Alert.alert(
        "Erro",
        "Tente novamente mais tarde",
        [
          { text: "OK"}
        ],
        { cancelable: false }
      );
      return state;
  }
  return state;
};

export default projectReducer;