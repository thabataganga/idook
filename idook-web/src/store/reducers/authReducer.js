const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'LOGIN_ERROR':
      console.log('Erro, tente novamente');
      return {
        ...state,
        authError: 'Erro, falha no login'
      }
    case 'LOGIN_SUCCESS':
      console.log('Login realizado com sucesso');
      return {
        authError: null
      }
      case 'SIGNOUT_SUCCESS':
      console.log('Conta desconectada com sucesso');
      return state
    default:
      return state
  }
};

export default authReducer;