var stages = {
    0:{
      descricao: "Boas Vindas",
      obj: require('./stages/0'),
    },
    1:{
      descricao: "Lista",
      obj: require('./stages/1'),
    },
    2:{
      descricao: "Resumo",
      obj: require('./stages/2'),
    },
    3:{
      descricao: "Projetos",
      obj: require('./stages/3'),
    },
    4:{
      descricao: "Encerramento",
      obj: require('./stages/4'),
    },
  }

  exports.step = stages;