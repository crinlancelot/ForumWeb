export const REQUEST = 'forum-app/LOAD_THREADS_REQUEST';
export const SUCCESS = 'forum-app/LOAD_THREADS_SUCCESS';
export const FAILURE = 'forum-app/LOAD_THREADS_FAILURE';


export const loadThreadsRequest = () => {
  return {
    type: REQUEST,
  }
};

export const loadThreadsSuccess = (threads) => {
  return {
    type: SUCCESS,
    payload: threads,
  }
};

export const loadThreadsFailure = (error) => {
  return {
    type: FAILURE,
    payload: error,
  }
};