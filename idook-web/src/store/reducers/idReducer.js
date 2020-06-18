import M from "materialize-css";


const initState = {
}


const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_ID':
      M.toast({html: 'IDook criado com sucesso', classes: 'rounded'});
     // console.log('ID criada com sucesso!', action.ids);
      return state;
    case 'CREATE_ID_ERROR':
      M.toast({html: 'Erro para criar o IDook, tente novamente', classes: 'rounded'});
      //console.log('Erro para criar a ID, tente novamente', action.err);
      return state;
    case 'DELETE_ID':
      M.toast({html: 'IDook deletado com sucesso', classes: 'rounded'});
     // console.log('delete id');
      return state;
    case 'DELETE_ID_ERROR':
      M.toast({html: 'Erro para deletar o IDook, tente novamente', classes: 'rounded'});
     // console.log('delete id error', 'state: ', state, 'action: ', action.id);
      return state;
    case 'EDIT_ID':
      M.toast({html: 'IDook editado com sucesso', classes: 'rounded'});
     // console.log('edit id');
      return state;
    case 'EDIT_ID_ERROR':
      M.toast({html: 'Erro para editar o IDook, tente novamente', classes: 'rounded'});
     // console.log('edit id error', 'state: ', state, 'action: ', action.id);
      return state;
      default:
        // do nothing
  }
  return state;
};

export default projectReducer;