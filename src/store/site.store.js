const _ = require('lodash');
import { templateService } from '@/services/template-service.js';
import { utilService } from '@/services/util.service.js';

var localSite = null;
if (sessionStorage.site) localSite = JSON.parse(sessionStorage.site);

export const siteStore = {
    state: {
        currSamplesList: 'sections',
        isLoading: false,
        templates: [],
        site: localSite,
    },
    getters: {
        site(state) {
            return state.site;
        },
        templates(state) {
            return state.templates;
        },
        isLoading(state) {
            return state.isLoading;
        },

    },
    mutations: {
        setIsLoading(state, { isLoading }) {
            state.isLoading = isLoading;
        },
        setTemplates(state, { templates }) {
            state.templates = templates
        },
        setSite(state, { site }) {
            state.site = site;
            sessionStorage.site = JSON.stringify(site)
        },
    },
    actions: {
        async loadTemplates({ commit }) {
            commit({ type: 'setIsLoading', isLoading: true });
            let templates = await templateService.query();
            templates = templates.map(template => ({ _id: template._id, name: template.name, previewImg: template.previewImg, createdBy: template.createdBy }));
            commit({ type: 'setTemplates', templates });
            commit({ type: 'setIsLoading', isLoading: false });
            return templates;
        },
        async loadSite({ state, commit }, { id }) {
            commit({ type: 'setIsLoading', isLoading: true });
            if (state.site) {
                const siteToEdit = _.cloneDeep(state.site)
                utilService.addIds(siteToEdit)
                    // commit({ type: 'setSite', site: siteToEdit });
                return siteToEdit;
            }
            let site = await templateService.getTemplateById(id);
            var siteToEdit;
            if (!site.createdBy) {
                siteToEdit = _.cloneDeep(site)
                delete siteToEdit._id
                utilService.addIds(siteToEdit)
            } else siteToEdit = site
            commit({ type: 'setSite', site: siteToEdit });
            commit({ type: 'setIsLoading', isLoading: false });
            return siteToEdit
        },
        async saveSite({ state, commit }) {
            const site = state.site
            if (sessionStorage.user) {
                const user = JSON.parse(sessionStorage.user)
                site.createdBy = {
                    _id: user._id,
                    username: user.fullname,
                    email: user.email
                }
            }
            const savedTemplate = await templateService.save(site)
            commit({ type: 'setSite', site: savedTemplate });
            return savedTemplate;
        }
    },
};