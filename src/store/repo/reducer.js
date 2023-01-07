import { SET_SEARCH_LIST, SET_MY_REPO_LIST, SET_ISSUES } from './actions';

const initialState = {
  searchList: [],
  fetchLoading: false,
  totalSearchCount: 0,
  myRepoList: [],
  issueList: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_LIST: {
      if (action.payload.isLoading) {
        return {
          ...state,
          fetchLoading: true,
        };
      } else {
        return {
          ...state,
          searchList:
            action.payload.page === 1
              ? [...action.payload.value.items]
              : [...state.searchList, ...action.payload.value.items],
          fetchLoading: false,
          totalSearchCount: action.payload.value.total_count,
        };
      }
    }
    case SET_MY_REPO_LIST: {
      return {
        ...state,
        myRepoList: action.payload.value,
      };
    }
    case SET_ISSUES: {
      return {
        ...state,
        fetchLoading: action.payload.isLoading || false,
        issueList: action.payload.value || [],
      };
    }
    default:
      return state;
  }
};
