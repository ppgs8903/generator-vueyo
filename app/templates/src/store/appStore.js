import Vue from 'vue';
import Vuex from 'vuex';

import mutation from './mutations';
import action from './actions';
import getter from './getters';

Vue.use(Vuex);

const state = {
  isLoading: true,
  BannerVo: {}
};

const mutations = mutation;
const actions = action;
const getters = getter;

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
