export function isEmptyObject (obj) {
    const keys = Object.keys(obj)

    if (!keys[0] || keys[0] == '') return true
    else return false
}

export default {
    isEmptyObject
}
