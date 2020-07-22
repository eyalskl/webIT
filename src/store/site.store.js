const _ = require('lodash');
import { templateService } from '@/services/template-service.js';

export const siteStore = {
	state: {
		currSamplesList: 'sections',
    	isLoading: false,
		templates: [],
    	site: {},
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
    setTemplates(state, {templates}){
      state.templates = templates
    },
	setSite(state, { site }) {
		state.site = site;
	},
	},
	actions: {
		async loadTemplates({ commit }) {
			commit({ type: 'setIsLoading', isLoading: true });
			let templates = await templateService.query();
			templates = templates.map(template => ({ _id:template._id, name:template.name, previewImg:template.previewImg}));
			commit({ type: 'setTemplates', templates });
			commit({ type: 'setIsLoading', isLoading: false });
		},
		async loadSite({ commit} ,{id }) {
			commit({ type: 'setIsLoading', isLoading: true });
			let site = await templateService.getTemplateById(id);
			commit({ type: 'setSite', site });
     		commit({ type: 'setIsLoading', isLoading: false });
     	 	return site
		},
	},
	modules: {},
};
