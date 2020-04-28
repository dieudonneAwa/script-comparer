import createDataContext from './createDataContext';
import authReducer from '../reducers/authReducer';
import { compareFiles, fetchComparisons, getOneComparison } from '../actions/comparisonsActions';

export const initialState = {
  comparisons: [],
  currentComparison: null,
  error: ''
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { compareFiles, fetchComparisons, getOneComparison },
  initialState
);
