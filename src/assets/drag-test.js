const _ = require('lodash');

export const applyDrag = (arr, dragResult) => {
    const { removedIndex, addedIndex, payload } = dragResult
    if (removedIndex === null && addedIndex === null) return arr

    const result = [...arr]
    let itemToAdd = payload
    if (!itemToAdd.id) {
        itemToAdd = _.cloneDeep(itemToAdd);
        itemToAdd.id = makeId();
        itemToAdd = addIds(itemToAdd);
    }

    if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0]
    }

    if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd)
    }

    return result
}




function makeId(length = 10) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function addIds(template) {
    template.cmps.forEach(cmp => {
        cmp.id = makeId()
        if (cmp.cmps && cmp.cmps.length > 0) addIds(cmp)
    })
    return template
}