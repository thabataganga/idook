import React from 'react'
import IDSummary from './IdSummary';
import { Link } from 'react-router-dom'
import M from "materialize-css";
import * as moment from 'moment'; import 'moment/locale/pt-br'

function componentDidMount() {
  // Auto initialize all the things!
  M.AutoInit();
}

const IDList = ({ ids, profile }) => {

  componentDidMount()

  //const filteredId = []

  //if (ids) {
    //console.log(ids)
    var idcad = ids.length
    const filteredId = ids.filter(id => id.city === 'Não configurado');
    const filteredIdH = ids.filter(id => id.city !== 'Não configurado');
    const filteredIdVenc = []
   // console.log(filteredId)
    const filteredVenc = ids.filter(id => id.validade < 1);
   // console.log(filteredVenc)
   
    var idvenc = filteredVenc.length;
  //  console.log(idvenc)

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
     //   console.log(expira)
        if (expira <= 0){
          idvenc = idvenc +1
        filteredIdVenc[i] = ids[i]
        //console.log(idvenc)
      //  console.log(filteredIdVenc[i])
        }
    //    console.log(filteredIdVenc)


      }
    }
  //}




  return (
    <div className="project-list section">
      <div className='card z-depth-0 news-summary'>

        <div className="row">
          <div className="col s12">
            <ul className="tabs">
              <li className="tab col s3 black-text"><a className='black-text active' href="#test1">IDooks</a></li>
              <li className="tab col s3 black-text"><a className='black-text' href="#test2">Aceito</a></li>
              <li className="tab col s3 black-text"><a className='black-text' href="#test3">Em espera</a></li>
              <li className="tab col s3 black-text"><a className='black-text' href="#test4">Vencidos</a></li>
            </ul>
          </div>
          <div id="test1" className="col s12">
            {ids && ids.map(ids => {
              return (
                <Link to={'/id/' + ids.id} key={ids.id}>
                  <IDSummary ids={ids} />
                </Link>
              )
            })}
          </div>
          <div id="test2" className="col s12">
          {filteredIdH && filteredIdH.map(filteredIdH => {
              return (
                <Link to={'/id/' + filteredIdH.id} key={filteredIdH.id}>
                  <IDSummary ids={filteredIdH} />
                </Link>
              )
            })}

          </div>
          <div id="test3" className="col s12">
          {filteredId && filteredId.map(filteredId => {
              return (
                <Link to={'/id/' + filteredId.id} key={filteredId.id}>
                  <IDSummary ids={filteredId} />
                </Link>
              )
            })}
          </div>

          <div id="test4" className="col s12">
          {filteredIdVenc && filteredIdVenc.map(filteredIdVenc => {
              return (
                <Link to={'/id/' + filteredIdVenc.id} key={filteredIdVenc.id}>
                  <IDSummary ids={filteredIdVenc} />
                </Link>
              )
            })}
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default IDList