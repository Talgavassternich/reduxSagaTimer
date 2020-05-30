import { take, race, call, put, delay } from 'redux-saga/effects';

function* increment() {
    yield delay(30);
    yield put({type: 'INCREMENT'});
    return true;
};

export default function* saga() {
    while (true) {
        let stopCount;
        yield take('START');
        while (!stopCount) {
            const { cancel } = yield race({
                start: call(increment),
                cancel: take(['STOP', 'RESET'])
            });
            stopCount = cancel;
        }
    }
};
