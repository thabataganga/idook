export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
      
      firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      ).then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });
  
    }
  }

  export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
  
      firebase.auth().signOut().then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' })
      });
    }
  }

  export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
      const firebase = getFirebase();
      const firestore = getFirestore();
  
      firebase.auth().createUserWithEmailAndPassword(
        newUser.email, 
        newUser.password
      ).then(resp => {
        return firestore.collection('users').doc(resp.user.uid).set({
          ...newUser,
      createdAt: new Date(),
      url:"https://ipc.digital/wp-content/uploads/2016/07/icon-user-default.png",
      website:'Não configurado',
      facebook:'Não configurado',
      whatsapp:'Não configurado',
      linkedin: 'Não configurado',
      instagram:'Não configurado',
      twitter:'Não configurado'
        });
      }).then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'SIGNUP_ERROR', err});
      });
    }
  }

  export const editUser = (ids,id) => {
    return (dispatch, getState, { getFirestore }) => {
      // make async call to database
      const firestore = getFirestore();
  
      firestore.collection('users').doc(id)
        .update({
          ...ids
        })
        .then(() => {
          dispatch({ type: 'EDIT_USER', ids })
        }).catch(err => {
          dispatch({ type: 'EDIT_USER_ERROR', err })
        })
  
    }
  };