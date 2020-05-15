const initState = {
  calendar: [
    {id: '1', title: 'lalala', link: 'lalala', content: "lalala", photo: 'lalala'},
    {id: '2', title: 'lalala', link: 'lalala', content: "lalala", photo: 'lalala'},
    {id: '3', title: 'lalala', link: 'lalala', content: "lalala", photo: 'lalala'},
  ]
}



const projectReducer = (state = initState, action) => {
  switch (action.type){
    case 'CREATE_CALENDAR':
      console.log('Calendário criada com sucesso!', action.calendar)
  }
  return state;
};

export default projectReducer;