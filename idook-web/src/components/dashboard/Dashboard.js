import React, {Component} from 'react';
import Notification from './Notifications';
import NewsList from '../news/NewsList';
import CalendarList from '../calendar/CalendarList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
    render (){
       // console.log(this.props)
       const {news} = this.props;
       const {calendar} = this.props;
        return(
            <div className="dashboard container">
                
                <div className='row'>
                    <div className='col s12 m6'>
                        <NewsList news={news}/>
                    </div>
                    <div className='col s12 m5 offset-m1'>
                        <CalendarList calendar={calendar}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state.firestore.ordered.news);
    //console.log(state);
    return {
        news: state.firestore.ordered.news,
        calendar: state.firestore.ordered.calendar
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'news' },
        { collection: 'calendar' }
      ])
  )(Dashboard)