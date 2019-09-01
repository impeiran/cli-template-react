import {
  SET_LOGIN,
  SET_USER_INFO
} from './actionTypes'

const setLogin = status => ({
  type: SET_LOGIN,
  data: status
})

const setUserInfo = info => ({
  type: SET_USER_INFO,
  data: info
})

export default {
  setLogin,
  setUserInfo,
}