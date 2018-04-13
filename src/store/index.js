import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const state = {
  formInline: {
    id: "",
    role: "",
    pass: ""
  },
  form: {
    name: "",
    subject: "",
    time: "",
    type: "",
    kaoshihao: ""
  },
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
  },
  multipleSelection:[]
}

const mutations = {
  login(state, formInline) {
    state.formInline = formInline;
  },
  fabuForm(state, form) {
    state.form = form;
  },
  zjForm(state,txForm) {
    state.txForm = txForm;
  },
  stData(state, multipleSelection) {
    state.multipleSelection = multipleSelection
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
