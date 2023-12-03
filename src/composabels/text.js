export function limit (text = '', count = 20) {
    return text.length > count ? text.slice(0, count) + '...' : text
}

export default {
    limit
}
