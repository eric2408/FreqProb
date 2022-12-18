// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    return keys.reduce((obj, current, idx) => {
        obj[current] = idx < values.length ? values[idx] : null;
        return obj;
    }, {});
}
