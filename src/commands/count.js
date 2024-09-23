function addCountToName(obj) {
    if (!obj || !obj.name) {
        return obj;
    }
    for (const key in obj) {
        if (!Array.isArray(obj[key])) continue;
        obj.name = `${obj.name} [${obj[key].length}]`;
        obj[key].forEach(item => {
            addCountToName(item);
        });
        
    }
    return obj;
}



module.exports = {addCountToName};