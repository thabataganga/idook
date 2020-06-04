const initState = {
}



const projectReducer = (state = initState, action) => {
  switch (action.type){
    case 'CREATE_CALENDAR':
      console.log('Calendário criada com sucesso!', action.calendar)
  }
  return state;
};

export default projectReducer;