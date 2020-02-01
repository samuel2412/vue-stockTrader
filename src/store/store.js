import Vue from 'vue';
import Vuex from 'vuex';

import companies from './modules/companies';
import userData  from './modules/userData';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        companies,
        userData
    }
});