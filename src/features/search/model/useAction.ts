import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import * as ActionCreators from './actionCreators';

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};
