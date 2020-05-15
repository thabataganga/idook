import React from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import * as moment from 'moment'; import 'moment/locale/pt-br'

const NewsDetail = (props) => {
    const { snew } = props;

    if(snew) {
        return (
            <div className='container section id-details'>
            <div className='card z-depht-0'>
                <div className='card-content'>
                    <img src={snew.photo} object-fit= 'cover' class="center"/>
                    <span className='card-title'>{ snew.title } </span>
                    <p>{ snew.subtitle } </p>
                </div>
                <div className='card-action'>
                    <p>{ snew.content }</p>
                      
                              
                </div>
                <div className='card-action'>
                <p className='black-text'>{moment(snew.createdAt.toDate()).calendar()}</p>           
                </div>
            </div>
        </div>
        )
        
    }
    else{
        return (
            <div className='container center'>
                <p>Carregando a noticia...</p>
            </div>
            )
    }

    
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const id = ownProps.match.params.id;
    const news = state.firestore.data.news;
    const snew = news ? news[id] : null
    return {
        snew: snew
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'news'}
    ])
) (NewsDetail)
