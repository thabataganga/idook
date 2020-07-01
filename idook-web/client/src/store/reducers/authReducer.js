import M from "materialize-css";


const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'LOGIN_ERROR':
      M.toast({html: 'Erro: verifique o email e a senha', classes: 'rounded'});
      //console.log('login error');
      return state

    case 'LOGIN_SUCCESS':
      M.toast({html: 'Bem vindo!', classes: 'rounded'});
   //   console.log('login success');
      return state


    case 'SIGNOUT_SUCCESS':
      M.toast({html: 'Até breve!', classes: 'rounded'});
     // console.log('signout success');
      return state;

    case 'SIGNUP_SUCCESS':
      M.toast({html: 'Conta criada com sucesso!', classes: 'rounded'});
     // console.log('signup success')
      return state


    case 'SIGNUP_ERROR':
      M.toast({html: 'Erro: verifique os seus dados!', classes: 'rounded'});
    //  console.log('signup error')
      return state


    default:
      return state

    case 'EDIT_USER':
      M.toast({html: 'Perfil editado com sucesso', classes: 'rounded'});
     // console.log('edit user');
      return state;
    case 'EDIT_USER_ERROR':
      M.toast({html: 'Erro: tente novamente mais tarde', classes: 'rounded'});
     // console.log('edit user error', 'state: ', state, 'action: ', action.id);
      return state;
  }
};

export default authReducer;