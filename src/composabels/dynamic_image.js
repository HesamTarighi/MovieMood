export default function (imageAddress) {
    return new URL(`/src/assets/${imageAddress}`, import.meta.url).href
}
