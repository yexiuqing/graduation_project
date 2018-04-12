import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const state = {
  formInline: {
    id: "",
    role: "",
    pass: ""
  },
  kaoshihao: '',
  txForm: {
    xzNum: "",
    xzScore: "",
    pdNum: "",
    pdScore: "",
    tkNum: "",
    tkScore: "",
    zhNum: "",
    zhScore: "",
    type: ""
  }
}

const mutations = {
  login(state, formInline) {
    state.formInline = formInline;
  },
  ksNum(state, kaoshihao) {
    state.kaoshihao = kaoshihao;
  },
  zjForm(state,txForm) {
    state.txForm = this.txForm;
  }
}

const actions = {
  checkFormInline() {}
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
})
