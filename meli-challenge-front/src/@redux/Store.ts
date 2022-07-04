import RootReducer from './RootReducers'
import RootSaga from './RootSagas'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

export const getStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(RootReducer, {}, applyMiddleware(sagaMiddleware))
    
    sagaMiddleware.run(RootSaga)
    
    return store
}
