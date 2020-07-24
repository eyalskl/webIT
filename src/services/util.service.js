export const utilService = {
    addIds,
    makeId
}


function addIds(template) {

    template.cmps.forEach(cmp => {
        cmp.id = makeId()
        if (cmp.cmps && cmp.cmps.length > 0) addIds(cmp)
    })
    return template
}

function makeId(length = 10) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}