import { call } from 'redux-saga/effects';

import repoSaga from './repo/saga';
import { makeRestartable } from '../utils';

const sagas = [repoSaga].map(saga => makeRestartable(saga));

export default function* rootSaga() {
  yield* sagas.map(saga => {
    return call(saga);
  });
}
