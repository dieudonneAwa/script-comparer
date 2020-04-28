import { initialState } from '../context/authContext';

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP_USER_SUCCESS':
      console.log(action);
      return { ...state, user: action.payload.user };
    case 'SIGNUP_USER_FAILURE':
      console.log(action);
      return { ...state, signUpErr: action.payload.error };

    // Sign in cases
    case 'SIGNIN_USER_SUCCESS':
      console.log(action);
      return { ...state, user: action.payload.user };
    case 'SIGNIN_USER_FAILURE':
      console.log(action);
      return { ...state, signInErr: action.payload.error };
    default:
      return state;
  }
};

export default auth;
