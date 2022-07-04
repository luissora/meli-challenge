import { combineReducers } from 'redux'

/** reducers */
import { Reducer as ReducerApp } from './App';
import { Reducer as ReducerProducts } from './Products';

const RootReducer = combineReducers({
    app: ReducerApp,
    products: ReducerProducts
  })
  
export type RootStateProps = ReturnType<typeof RootReducer>;

export default RootReducer;

