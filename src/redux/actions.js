/*
 * action types
 */
export const ADD_ORDER = 'ADD_ORDER'

/*
 * action creators
 */

export function addOrder(name, logo, status, date) {
  return {
    type: ADD_ORDER,
    order: {
      name,
      logo,
      status,
      date,
    }
  }
}
