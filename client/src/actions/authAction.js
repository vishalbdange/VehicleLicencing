import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from './types';


// Load User
export const loadUser = () => async dispatch => {
  console.log(localStorage.token)
  console.log("Finding User..")
  if (localStorage.token) {
    setAuthToken(localStorage.token);
    console.log("User found")
  }
  try {
    const res = await axios.get('/api/auth');
    console.log("Loading User")
    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
    console.log("Some error")
  }
};

// Register User
export const register = formdata => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await axios.post('/api/users', formdata, config);
    console.log(res.data)
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    loadUser();
  } catch (err) {
    console.log(err.response.data.errors[0].msg)
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.errors[0].msg
    });
  }
};

// Login User
export const login = formdata => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await axios.post('/api/auth', formdata, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    loadUser();
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.msg
    });
  }
};

export const editProfile = ()=>dispatch=>{
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  // try {
  //   const res = await axios.put(
  //     `/api/auth/edit`,
  //     vehicle,
  //     config
  //   );
  //   dispatch({ type: UPDATE_VEHICLE, payload: res.data });
  // } catch (error) {
  //   dispatch({ type: VEHICLE_ERROR, payload: error.response.msg });
  // }
}

// Logout
export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
};

// Clear Errors
export const clearErrors = () => dispatch => {
  dispatch({
    type: CLEAR_ERRORS
  });
};
