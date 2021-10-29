import { SET_ALERT, REMOVE_ALERT } from './types';
import uuid from 'uuid';

// Set Alert
export const setAlert = (msg, type, timeout = 5000) => async (dispatch)  => {
  const id = uuid.v4();
  console.log("Hello")
  console.log(msg)
  dispatch({
    type: SET_ALERT,
    payload: { msg, type, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
