import Vue from 'vue'
import Vuex from 'vuex'

import { siteStore } from './site.store.js';
import { userStore } from './user.store.js';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        editMode: '',
        showLogin: false
    },
    getters: {
        editMode(state) {
            return state.editMode;
        },
        showLogin(state) {
            return state.showLogin
        }
    },
    mutations: {
        setEditMode(state, { editMode }) {
            state.editMode = editMode;
        },
        setShowLogin(state, { showLogin }) {
            state.showLogin = showLogin;
        },
    },
    actions: {},
    modules: {
        siteStore,
        userStore
    }
})