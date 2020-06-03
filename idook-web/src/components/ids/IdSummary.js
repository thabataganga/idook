

import React from "react";
import * as moment from 'moment'; import 'moment/locale/pt-br'

const IDSummary = ({ ids }) => {

  moment.locale('pt-br')

  const start = moment(ids.createdAt.toDate()).calendar();

  //const start = "05/21/2020"

  const now = new Date();

  //const now = "06/02/2020"

  const validade = ids.validade;


  let diff = moment(now, "DD/MM/YYYY").diff(moment(start, "DD/MM/YYYY"));

  let duration = moment.duration(diff)

  let result = duration.format("ddd")

  const expira = validade - result;

  if (expira<=0){
    //console.log(diff)



    return (
      <div className='card z-depth-0 news-summary'>
        <div className='card-content text-darken-3'>
          <div className='row'>
            <div className='col s12 m6'>
  
            <img src={ids.url} object-fit= 'cover' class="circular--portrait"/>
  
            
  
            </div>
            <div className='col s12 m6'>
              <br/>
              <span className='black-text card-title'>{ids.firstName} {ids.lastName}</span>
              <p className='black-text'>Empresa: {ids.empresa}</p>
              <p className='black-text'>Local: {ids.city}/{ids.uf}</p>
              <p><a className="red-text">Expirou</a></p>
  
              
            </div>
          </div>
        </div>
      </div>
    );
    

  } 

  

  //console.log(start)
  //console.log(result)

  return (
    <div className='card z-depth-0 news-summary'>
      <div className='card-content text-darken-3'>
        <div className='row'>
          <div className='col s12 m6'>

          <img src={ids.url} object-fit= 'cover' class="circular--portrait"/>

          

          </div>
          <div className='col s12 m6'>
            <br/>
            <span className='black-text card-title'>{ids.firstName} {ids.lastName}</span>
            <p className='black-text'>Empresa: {ids.empresa}</p>
            <p className='black-text'>Local: {ids.city}/{ids.uf}</p>
            <p className='black-text'>Expira em: {expira} dias</p>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDSummary;





