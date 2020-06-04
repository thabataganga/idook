const initState = {
}


const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_ID':
      console.log('ID criada com sucesso!', action.ids);
      return state;
    case 'CREATE_ID_ERROR':
      console.log('Erro para criar a ID, tente novamente', action.err);
      return state;
    case 'DELETE_ID':
      console.log('delete id');
      return state;
    case 'DELETE_ID_ERROR':
      console.log('delete id error', 'state: ', state, 'action: ', action.id);
      return state;
    case 'EDIT_ID':
      console.log('edit id');
      return state;
    case 'EDIT_ID_ERROR':
      console.log('edit id error', 'state: ', state, 'action: ', action.id);
      return state;
  }
  return state;
};

export default projectReducer;