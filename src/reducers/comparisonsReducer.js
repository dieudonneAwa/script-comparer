import { initialState } from '../context/comparisonContext';

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'COMPARE_STUDENT_SUCCESS':
      console.log(action);
      return { ...state, currentComparison: action.payload };
    case 'COMPARE_STUDENT_FAILURE':
      console.log(action);
      return { ...state, error: action.payload.error };

    case 'FETCH_COMPARISONS_SUCCESS':
      console.log(action);
      return { ...state, comparisons: action.payload };
    case 'FETCH_COMPARISONS_FAILURE':
      console.log(action);
      return { ...state, error: action.payload.error };

    case 'GET_ONE_COMPARISON_SUCCESS':
      console.log(action);
      return { ...state, currentComparison: action.payload };
    case 'GET_ONE_COMPARISON_FAILURE':
      console.log(action);
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};

export default auth;
