import { fork } from 'redux-saga/effects'

import { Saga as AppSaga } from './App'
import { Saga as ProductsSaga } from './Products'

export default function* rootSaga() {
    yield fork(AppSaga)
    yield fork(ProductsSaga)
}
