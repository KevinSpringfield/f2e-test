import { ADD_ORDER } from '../actions';

const initialState = {
  orders: [],
}

export default function(state = initialState, action) {
  console.log(action)
  switch(action.type) {
    case ADD_ORDER:
      return {
        orders: [...state.orders, action.order]
      }
    default:
      return state;
  }
}


