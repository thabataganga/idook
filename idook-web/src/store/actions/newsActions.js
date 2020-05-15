export const createNews = (news) => {
  return (dispatch, getState, {getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('news').add({
      ...news,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_NEWS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_NEWS_ERROR' }, err);
    });
  }
};