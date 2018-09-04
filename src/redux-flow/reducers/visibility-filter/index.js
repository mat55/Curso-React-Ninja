import {
    SET_VISIBILITY_FILTER,
    SHOW_ALL
} from './action'

const initialState = SHOW_ALL

export const Filter = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER :
      return action.payload.filter
  }
  return state
}

export default Filter
