import createDataContext from './createDataContext';
import authReducer from '../reducers/authReducer';
import { signUp, signIn } from '../actions/authActions';

export const initialState = {
  user: null,
  signUpErr: '',
  signInErr: '',
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signUp, signIn },
  initialState
);
