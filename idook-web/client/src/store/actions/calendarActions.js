export const createCalendar = (calendar) => {
  return (dispatch, getState, {getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('calendar').add({
      ...calendar,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_CALENDAR' });
    }).catch(err => {
      dispatch({ type: 'CREATE_CALENDAR' }, err);
    });
  }
};