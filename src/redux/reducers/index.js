import { combineReducers } from 'redux';
import Orders from './orders';

export default combineReducers({
  orderReducer: Orders,
});
