import {
  SET_LOGIN,
  SET_USER_INFO
} from './actionTypes'

const initState = {
  hasLogin: false,
  userInfo: {}
}

const reducer = (state = initState, action) => {
  state = {...state}

  switch (action.type) {
    
    case SET_LOGIN:
      state.hasLogin = action.data
      break

    case SET_USER_INFO:
      state.userInfo = action.data
      break

    default:
      return state
  }

  return state
}

export default reducer