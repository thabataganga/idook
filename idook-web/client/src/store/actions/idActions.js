

export const createId = (ids) => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid
    firestore.collection('ids').add({
      ...ids,
      city: "Não configurado",
      uf: "Não configurado",
      empresa: "Não configurado",
      cargo: 'Não configurado',
      url:"https://ipc.digital/wp-content/uploads/2016/07/icon-user-default.png",
      authorCompany: profile.socialreason,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_ID' });
    }).catch(err => {
      dispatch({ type: 'CREATE_ID_ERROR' }, err);
    });
  }
};

export const deleteId = (ids) => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();



    firestore.collection('ids').doc(ids)
      .delete()
      .then(() => {
        dispatch({ type: 'DELETE_ID', ids })
      }).catch(err => {
        dispatch({ type: 'DELETE_ID_ERROR', err })
      })

  }
};

export const editId = (ids,id) => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();

  //  console.log(ids)
  //  console.log(id)

    firestore.collection('ids').doc(id)
      .update({
        ...ids
      })
      .then(() => {
        dispatch({ type: 'EDIT_ID', ids })
      }).catch(err => {
        dispatch({ type: 'EDIT_ID_ERROR', err })
      })

  }
};

