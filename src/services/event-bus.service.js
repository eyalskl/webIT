import Vue from 'vue'

export const SHOW_MSG = 'show-msg';

// ELEMENT PICKER
export const ADD_SAMPLE = 'add-samples';
// ELEMENT EDIT
export const EDIT_ELEMENT = 'edit-element';
//  ELEMENT CONTROLS
export const MOVE_ELEMENT = 'move-element';
export const CLONE_ELEMENT = 'clone-element';
export const REMOVE_ELEMENT = 'remove-element';

export const MINIMIZE_DASHBOARD = 'minimize-dashboard';

export const UPDATE_SITE = 'update-site';

export const OPEN_EDITOR = 'open-editor';


export const eventBus = new Vue();