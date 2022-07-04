import { TypesActions, StateProps } from './types'

const initialState: StateProps  = {
  isLoading: false,
  currentUser: {
    success: false
  },
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
    case TypesActions.SET_USER_AUTH_STORE:
        nextState ={
          ...state,
          currentUser: action.data
        }
      break;
    default:
        nextState = state
        break;
  }

  return nextState
}

export default reducer;
