import {
  SET_TOKEN,
  CLEAR_TOKEN,
  CLEAR_ALL,
  SET_USER_INFO
} from '@/store/mutation-types'
import store from '@/store'
const state = {
  info: null,
  username: null,
  password: null,
  token: window.sessionStorage.getItem('user.token')
}
const mutations = {
  [SET_TOKEN] (state, {token, save = true}) {
    state.token = token
    if (save) {
      window.sessionStorage.setItem('user.token', token)
    }
  },
  [CLEAR_TOKEN] (state) {
    state.token = null
    window.sessionStorage.removeItem('user.token')
  },
  [CLEAR_ALL] (state) {
    state.username = null
    state.password = null
    store.commit(CLEAR_TOKEN)
  },
  [SET_USER_INFO] (state, {info}) {
    state.info = info
  }
}

const actions = {
}
const getters = {
  hasLogin (state) {
    return !!state.token
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
