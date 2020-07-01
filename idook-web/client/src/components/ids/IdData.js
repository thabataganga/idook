import React from 'react'
import { connect } from 'react-redux'
import * as moment from 'moment'; import 'moment/locale/pt-br'
import { NavLink } from 'react-router-dom'

const IdData = ({ ids, profile }) => {

  // console.log(profile)

  if (ids) {
    //console.log(ids)
    var idcad = ids.length
    const filteredId = ids.filter(id => id.city === 'Não configurado');
    const filteredVenc = ids.filter(id => id.validade < 1);
    var idconf = idcad - filteredId.length;
    var idvenc = filteredVenc.length;

    for (let i = 0; i < idcad; i++) {
      if (ids[0].createdAt && profile.isLoaded !== false) {
        moment.locale('pt-br')
        const start = moment(ids[i].createdAt.toDate());
        const now = new Date();
        const validade = ids[i].validade;
        let diff = moment(now, "DD/MM/YYYY").diff(moment(start, "DD/MM/YYYY", 'days'));
        let duration = moment.duration(diff)
        let result = duration.format("ddd")
        const expira = validade - result;
       // console.log(expira)
        if (expira < 0)
          idvenc++
        //console.log(idvenc)
      }
    }
  }

  return (
    <div className="project-list section">
      <div className='card z-depth-0 news-summary'>
        <div className='card-content text-darken-3'>
          <span className='black-text card-title center'>IDook. ID da Era Digital.</span>

        </div>
        <div className='card-action'>
          <img alt="perfil" src={profile.url} object-fit='cover' class="circular--portraitM" />
          <br />
        </div>

        <div className='card-action center'>
          <NavLink class="btn-floating btn-large waves-effect waves-light green" to='/createid'><i class="material-icons">add</i></NavLink>
        </div>

           <div class="collection">
            <p  class="collection-item black-text"><span data-badge-caption="IDooks" class="new blue badge"> {idcad}</span>Cadastrados</p>
            <p  class="collection-item black-text"><span data-badge-caption="Habilitados" class="new badge">{idconf} </span>Confirmação</p>
            <p  class="collection-item black-text"><span data-badge-caption="Aguardando" class="new orange badge">{idcad - idconf} </span>Em espera</p>
            <p  class="collection-item black-text"><span data-badge-caption="Cancelados" class="new red badge">{idvenc} </span>Vencimento</p>

          </div>

      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  //console.log(state.firebase.profile)
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}

export default connect(mapStateToProps, null)(IdData)