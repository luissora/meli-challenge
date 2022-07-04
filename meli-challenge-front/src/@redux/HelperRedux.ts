import {
  useSelector as useSelectorRedux,
  shallowEqual,
  TypedUseSelectorHook,
  useDispatch
} from 'react-redux';

import { RootStateProps } from './RootReducers';

const useSelector: TypedUseSelectorHook<RootStateProps> = useSelectorRedux;

function useShallowEqualSelector<TSelected>(
  selector: (s: RootStateProps) => TSelected
) {
  return useSelector(selector, shallowEqual);
}

export default {
  useSelector,
  useShallowEqualSelector,
  useDispatch
}