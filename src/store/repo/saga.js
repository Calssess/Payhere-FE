import { takeLatest, put, select } from 'redux-saga/effects';
import {
  FETCH_ISSUES,
  FETCH_SEARCH_REPO,
  repoActions,
  SET_MY_REPO,
} from './actions';
import {
  GITHUB_TOKEN,
  RES_CODE_SUCCESS,
  ROW_PER_SEARCH_PAGE,
} from '../../constants/const';
import { Octokit } from 'octokit';
import axios from 'axios';

function* fetchSearchRepo(action) {
  const octokit = new Octokit({
    auth: GITHUB_TOKEN,
  });
  const payload = action.payload;
  yield put(repoActions.setSearchList({ isLoading: true }));
  const res = yield octokit.request(
    'GET /search/repositories{?q,page,per_page}',
    {
      q: payload.q,
      page: payload.page,
      per_page: ROW_PER_SEARCH_PAGE,
    },
  );
  if (res.status === RES_CODE_SUCCESS) {
    const { data } = res;
    yield put(
      repoActions.setSearchList({
        value: data,
        isLoading: false,
        page: payload.page,
      }),
    );
  }
}
function* setMyRepo(action) {
  const { item } = action.payload;
  const targetId = item.id;
  const savedList = JSON.parse(window.localStorage.getItem('my_repo') || '[]');
  if (savedList.some(i => i.id === targetId)) {
    const newList = savedList.filter(i => i.id !== targetId);
    window.localStorage.setItem('my_repo', JSON.stringify([...newList]));
    yield put(
      repoActions.setMyRepoList({
        value: [...newList],
      }),
    );
  } else {
    if (savedList.length === 4) {
      return alert('최대 4개까지 My Repo에 등록 가능합니다.');
    }
    window.localStorage.setItem(
      'my_repo',
      JSON.stringify([...savedList, item]),
    );
    yield put(
      repoActions.setMyRepoList({
        value: [...savedList, item],
      }),
    );
  }
}
function* fetchIssues(action) {
  yield put(repoActions.setIssues({ isLoading: true }));
  const octokit = new Octokit({
    auth: GITHUB_TOKEN,
  });
  const { myRepoList } = yield select(state => state.repoReducer);
  const { page, per_page, repoIndex } = action.payload;
  const currentRepo = myRepoList[repoIndex];
  const issueApi = currentRepo.issues_url.slice(0, -9);

  // const res = yield axios.get(issueApi, {
  //   params: { page: page, per_page: per_page },
  // });
  const res = yield octokit.request(
    'GET /repos/{owner}/{repo}/issues{?page,per_page,state}',
    {
      owner: currentRepo.owner.login,
      repo: currentRepo.name,
      page: page,
      per_page: per_page,
      state: 'all',
    },
  );
  if (res.status === RES_CODE_SUCCESS) {
    const { data } = res;
    yield put(
      repoActions.setIssues({
        value: [...data],
        isLoading: false,
      }),
    );
  }
}

export default function* watchRepoView() {
  yield takeLatest(FETCH_SEARCH_REPO, fetchSearchRepo);
  yield takeLatest(SET_MY_REPO, setMyRepo);
  yield takeLatest(FETCH_ISSUES, fetchIssues);
}
