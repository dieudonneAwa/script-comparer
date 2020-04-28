import apiCall from '../apiCall';

export const compareFiles = (dispatch) => async (studentData) => {
  try {
    dispatch({ type: 'COMPARE_STUDENT_LOADING' });
    const res = await apiCall('/compare', 'post', studentData);
    dispatch({ type: 'COMPARE_STUDENT_SUCCESS', payload: res.data });
    return res;
  } catch (err) {
    return dispatch({
      type: 'COMPARE_STUDENT_FAILURE',
      payload: err.response.data,
    });
  }
};

export const fetchComparisons = (dispatch) => async () => {
  try {
    dispatch({ type: 'FETCH_COMPARISONS_LOADING' });
    const res = await apiCall('/comparisons', 'get', );
    dispatch({ type: 'FETCH_COMPARISONS_SUCCESS', payload: res.data });
    return res;
  } catch (err) {
    return dispatch({
      type: 'FETCH_COMPARISONS_FAILURE',
      payload: err.response.data,
    });
  }
};

export const getOneComparison = (dispatch) => async (id) => {
  try {
    dispatch({ type: 'GET_ONE_COMPARISON_LOADING' });
    const res = await apiCall(`/comparisons/${id}`, 'get');
    dispatch({ type: 'GET_ONE_COMPARISON_SUCCESS', payload: res.data });
    return res;
  } catch (err) {
    return dispatch({
      type: 'GET_ONE_COMPARISON_FAILURE',
      payload: err.response.data,
    });
  }
};
