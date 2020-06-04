import React from 'react'
import { connect } from 'react-redux'
import * as moment from 'moment'; import 'moment/locale/pt-br'


const IdData = ({ ids, profile }) => {

  console.log(profile)

  
  if (ids) {
    //console.log(ids)
    var idcad = ids.length
    const filteredId = ids.filter(id => id.city === 'Não configurado');
    const filteredVenc = ids.filter(id => id.validade < 1);
    var idconf = idcad - filteredId.length;
    var idvenc = filteredVenc.length;

    //const {profile} = this.props
    //console.log(profile)

    //console.log(ids[0].createdAt)

    for(let i=0; i<idcad; i++){
      if(ids[0].createdAt){
        moment.locale('pt-br')
  
        const start = moment(ids[i].createdAt.toDate()).calendar();
    
        //const start = "05/21/2020"
    
        const now = new Date();
    
        //const now = "06/02/2020"
    
        const validade = ids[i].validade;
    
    
        let diff = moment(now, "DD/MM/YYYY").diff(moment(start, "DD/MM/YYYY"));
    
        let duration = moment.duration(diff)
    
        let result = duration.format("ddd")
    
        const expira = validade - result + 1;

        if(expira<0)
        idvenc++
    
        //console.log(idvenc)
      }

    }

    

  

  }

  return (
    <div className="project-list section">
      <div className='card z-depth-0 news-summary'>
        <div className='card-content text-darken-3'>
        <span className='black-text card-title center'>Idook de {profile.socialreason}</span>

        </div>
        <div className='card-action'>
          <img src={profile.url} object-fit='cover' class="circular--portraitM" />
          <br/>
        </div>
        
        <div className='card-action'>
          <p>IDs cadastrados: {idcad} </p>
          <p>IDs confirmados: {idconf} </p>
          <p>IDs vencidas: {idvenc} </p>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state.firebase.profile)
  return {
      authError: state.auth.authError,
      auth: state.firebase.auth,
      profile: state.firebase.profile,
  }
}

export default connect(mapStateToProps, null) (IdData)