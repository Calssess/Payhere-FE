import { call, delay, spawn } from 'redux-saga/effects';
export const makeRestartable = saga => {
  const counter = {};

  return function* () {
    yield spawn(function* () {
      while (true) {
        try {
          counter[saga] = (counter[saga] ?? 0) + 1;
          if (counter[saga] > 1) {
            // eslint-disable-next-line no-console
            console.log(`"${saga.name}" restarted.`);
          }
          yield call(saga);
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error(
            `Unexpected "${saga.name}" termination. It will restart within a second.`,
          );
        }
        yield delay(1000); // Avoid infinite failures blocking app
      }
    });
  };
};
