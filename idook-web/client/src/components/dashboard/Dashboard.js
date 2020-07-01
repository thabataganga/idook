import React, {Component} from 'react';
//import Notification from './Notifications';
//import NewsList from '../news/NewsList';
//import CalendarList from '../calendar/CalendarList';
import IdData from '../ids/IdData';
import IdList from '../ids/IdList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    render (){
       //console.log(this.props)
       const {ids} = this.props;

       const {auth, profile} = this.props;

       if (!auth.uid) {
        return <Redirect to="/home" />;
      }

      if(ids){
        const filteredId = ids.filter(id => id.authorId === auth.uid);
        //console.log(filteredId)

        return(
            <div className="dashboard container">
                
                <div className='row'>
                    <div className='col s12 m5'>
                        <IdData ids={filteredId} profile={profile}/>
                    </div>
                    <div className='col s12 m7'>
                        <IdList ids={filteredId} profile={profile}/>
                    </div>
                </div>

                

                
            </div>
        )
      }

       
       //const size = ids.length;
       //console.log(ids)
        return(
            <div className='container center'>
                <p>Carregando...</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state.firestore.ordered.news);
    //console.log(state);
    return {
        news: state.firestore.ordered.news,
        profile: state.firebase.profile,
        calendar: state.firestore.ordered.calendar,
        ids: state.firestore.ordered.ids,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'news' },
        { collection: 'calendar' },
        { collection: 'ids' }
      ])
  )(Dashboard)