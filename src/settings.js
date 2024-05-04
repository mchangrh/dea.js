/* START OF SETTINGS */

let serverEndpoint = "https://sponsor.ajay.app"
let thumbEndpoint = "https://dearrow-thumb.ajay.app"
let normalization = "NFKC"
// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
let transform = "lowercase"
// https://developer.mozilla.org/docs/Web/CSS/text-transform
let imgfilter = "blur(5px)"
// https://developer.mozilla.org/docs/Web/CSS/filter

const validate_config = () => {
    if (!["NFC", "NFD", "NFKC", "NFKD"].includes(normalization)) {
        console.warn("Invalid normalization value, defaulting to NFC")
        normalization = "NFC"
    }
}
validate_config()

/* END OF SETTINGS */
