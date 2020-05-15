export const createId = (id) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
      // make async call to database
      dispatch({ type: 'CREATE_ID', id });
    }
  };