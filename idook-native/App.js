import React from 'react';
import Routes from './src/routes';
import firebase from './src/config/fbConfig';
import { createStore, applyMiddleware, compose } from 'redux';
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import UserProvider from './src/config/UserProvider.'

import "./yellowtime"

import rootReducer from './src/store/reducers/rootReducer';

// We enhance compose in order to use Redux DevTools extension
// https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create config for rrfProps object. We need this to pass it in the ReactReduxFirebaseProvider component
const rrfConfig = {
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  attachAuthIsReady: true,
  userProfile: 'users',
  attachAuthIsReady: true,
};

const store = createStore(rootReducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase), // still need this line to get access to firestore via getFirestore function (in projectActions, for example)
  ));

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // Create firestore instead of craete it in fbConfig.js
};



export default function App() {
  return (
    <UserProvider>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Routes />
      </ReactReduxFirebaseProvider>
    </Provider>
    </UserProvider>

  );
}

