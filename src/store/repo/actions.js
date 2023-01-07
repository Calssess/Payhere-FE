const prefix = '[RepoView] ';
export const FETCH_SEARCH_REPO = prefix + 'FETCH_SEARCH_REPO';
export const SET_SEARCH_LIST = prefix + 'SET_SEARCH_LIST';
export const SET_MY_REPO = prefix + 'SET_MY_REPO';
export const SET_MY_REPO_LIST = prefix + 'SET_MY_REPO_LIST';
export const FETCH_ISSUES = prefix + 'FETCH_ISSUES';
export const SET_ISSUES = prefix + 'SET_ISSUES';
export const SET_ISSUES_COUNT = prefix + 'SET_ISSUES_COUNT';

export const repoActions = {
  fetchSearchRepo: payload => ({
    type: FETCH_SEARCH_REPO,
    payload,
  }),
  setSearchList: payload => ({
    type: SET_SEARCH_LIST,
    payload,
  }),
  setMyRepo: payload => ({
    type: SET_MY_REPO,
    payload,
  }),
  setMyRepoList: payload => ({
    type: SET_MY_REPO_LIST,
    payload,
  }),
  fetchIssues: payload => ({
    type: FETCH_ISSUES,
    payload,
  }),
  setIssues: payload => ({
    type: SET_ISSUES,
    payload,
  }),
};
