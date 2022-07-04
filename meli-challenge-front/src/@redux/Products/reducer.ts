import { TypesActions, StateProps } from './types'

const initialState: StateProps  = {
  isLoading: false,
  data: [],
  error: ''
}

const reducer = (state = initialState, action: any = {}) => {
  let nextState: StateProps;

  switch (action.type) {
    case TypesActions.GET_START:
      nextState = {
        ...state,
        isLoading: true
      }
      break;
    case TypesActions.GET_ERROR:
      nextState = {
        ...state,
        error: action.message
      }
      break;
    case TypesActions.GET_COMPLETE:
      nextState = {
        ...state,
        isLoading: false
      }
      break;
    case TypesActions.SET_LIST_PRODUCTS_STORE:
        nextState ={
          ...state,
          data: action.data
        }
      break;
    case TypesActions.SET_PRODUCT_STORE:
      nextState = {
        ...state,
        currentItem: action.data
      }
      break
    default:
        nextState = state
        break;
  }

  return nextState
}

export default reducer;
