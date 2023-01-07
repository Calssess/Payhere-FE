import { combineReducers } from 'redux';

import { reducer as repoReducer } from './repo/reducer';

const rootReducer = combineReducers({
  repoReducer,
});

export default rootReducer;
