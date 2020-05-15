import authReducer from './authReducer'
import idReducer from './idReducer'
import newsReducer from './newsReducer'
import calendarReducer from './calendarReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  id: idReducer,
  news: newsReducer,
  calendar: calendarReducer,
});

export default rootReducer

// the key name will be the data property on the state object