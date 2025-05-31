// ==UserScript==
// @name         DEA.js userscript loader
// @description  DeArrow userscript loader
// @namespace    mchang.name
// @homepage     https://github.com/mchangrh/dea.js
// @icon         https://mchangrh.github.io/dea.js/icon.png
// @version      1.0.0
// @license      LGPL-3.0-or-later
// @match        https://www.youtube.com/*
// @connect      sponsor.ajay.app
// @connect      dearrow-thumb.ajay.app
// @require      https://mchangrh.github.io/dea.js/dea-nosettings.min.js
// @grant        none
// ==/UserScript==

/* Uses SponsorBlock data licensed used under CC BY-NC-SA 4.0 from https://sponsor.ajay.app/ */
/* LICENCED UNDER LGPL-3.0-or-later */
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
