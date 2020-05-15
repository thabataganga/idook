const initState = {
  id: [
    {id: '1', firstName: 'Thabata', lastName: 'Ganga', cpf:'429.570.458-00', cargo: 'CTO', empresa:'Ekoar IAA', phone:'+55 12 981207722', uf:'SP', city:'Sao Paulo', validade:'180', email:'thabata@ekoar.com.br', password: 'B0l4pr4m1m'},
    {id: '2', firstName: 'Thabata', lastName: 'Alcantara', cpf:'429.570.458-00', cargo: 'CTO', empresa:'Ekoar IAA', phone:'+55 12 981207722', uf:'SP', city:'Sao Paulo', validade:'180', email:'thabata@ekoar.com.br', password: 'B0l4pr4m1m'},
    {id: '3', firstName: 'Thabata', lastName: 'Ferreira', cpf:'429.570.458-00', cargo: 'CTO', empresa:'Ekoar IAA', phone:'+55 12 981207722', uf:'SP', city:'Sao Paulo', validade:'180', email:'thabata@ekoar.com.br', password: 'B0l4pr4m1m'},
  ]
}



const projectReducer = (state = initState, action) => {
  switch (action.type){
    case 'CREATE_ID':
      console.log('ID criada com sucesso!', action.id)
  }
  return state;
};

export default projectReducer;