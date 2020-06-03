const initState = {
}

const projectReducer = (state = initState, action) => {
  switch (action.type){
    case 'CREATE_NEWS':
      console.log('Noticia criada com sucesso!', action.news);
      return state;
    case 'CREATE_NEWS_ERROR':
      console.log('Erro para criar a noticia, tente novamente', action.err);
      return state;
    default:
      return state;
  }
  
};

export default projectReducer;