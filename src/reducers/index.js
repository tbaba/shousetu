import { combineReducers } from 'redux';
import domain, {
  initialDomainState,
  changeNoteValue,
} from './domain';

export const initialState = {
  domain: initialDomainState,
};

export default combineReducers({
  domain,
});

export {
  changeNoteValue,
};
