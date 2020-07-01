import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import Moment from 'react-moment';


const CalendarDetail = (props) => {
    const { scalendar } = props;

    if(scalendar) {
        return (
            <div className='container section id-details'>
            <div className='card z-depht-0'>
                <div className='card-content'>
                    <img alt="foto" src={scalendar.photo} object-fit= 'cover' class="center"/>
                    <span className='card-title'>{ scalendar.title } </span>
                    <p>{ scalendar.subtitle } </p>
                </div>
                <div className='card-action'>
                    <p>{ scalendar.content }</p>

                    <p className='black-text'>Link de acesso:</p> 

                    <a href={ scalendar.link }>
                        <span className="blue-text">{ scalendar.link }</span>
                    </a>
                      
                              
                </div>
                <div className='card-action'>
                <p className='black-text'><Moment format="DD/MM/YYYY">{scalendar.date}</Moment> às {scalendar.ini_time}</p>           
                </div>
            </div>
        </div>
        )
        
    }
    else{
        return (
            <div className='container center'>
                <p>Carregando o calendário...</p>
            </div>
            )
    }

    
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const id = ownProps.match.params.id;
    const calendar = state.firestore.data.calendar;
    const scalendar = calendar ? calendar[id] : null
    return {
        scalendar: scalendar
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'calendar'}
    ])
) (CalendarDetail)
