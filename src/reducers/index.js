import { combineReducers } from 'redux';
import domain, {
  initialDomainState,
  changeNoteValue,
} from './domain';

export default combineReducers({
  domain,
});

export {
  changeNoteValue,
};
