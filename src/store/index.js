import Vue from 'vue'
import Vuex from 'vuex'

import { siteStore } from './site.store.js';
import { userStore } from './user.store.js';

Vue.use(Vuex)

export default new Vuex.Store({
    // strict: true,
    state: {
        editMode: '',
    },
    getters: {
        editMode(state) {
            return state.editMode;
        }
    },
    mutations: {
        setEditMode(state, { editMode }) {
            state.editMode = editMode;
        }
    },
    actions: {},
    modules: {
        siteStore,
        userStore
    }
})