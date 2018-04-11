import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const state = {
  formInline: {
    id: "2222",
    role: "2222",
    pass: "22222"
  }
}

const mutations = {
  login(state, formInline) {
    state.formInline = formInline;
  }
}

const actions = {
  checkFormInline(){}
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
})
