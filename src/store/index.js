import Vue from 'vue'
import Vuex from 'vuex'

import { siteStore } from './site.store.js';
import { userStore } from './user.store.js';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        editMode: '',
        showLogin: false,
        showPublish:false,
    },
    getters: {
        editMode(state) {
            return state.editMode;
        },
        showLogin(state) {
            return state.showLogin
        },
        showPublish(state){
            return state.showPublish
        }
    },
    mutations: {
        setEditMode(state, { editMode }) {
            state.editMode = editMode;
        },
        setShowLogin(state, { showLogin }) {
            state.showLogin = showLogin;
        },
        setShowPublish(state, { showPublish }) {
            state.showPublish = showPublish;
        },
    },
    actions: {},
    modules: {
        siteStore,
        userStore
    }
})