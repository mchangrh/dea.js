// ==UserScript==
// @name         dea.js configurable userscript
// @description  DeArrow userscript with config
// @namespace    mchang.name
// @homepage     https://github.com/mchangrh/dea.js
// @icon         https://mchangrh.github.io/dea.js/icon.png
// @version      1.0.0
// @license      LGPL-3.0-or-later
// @match        https://www.youtube.com/*
// @match        https://mchangrh.github.io/dea.js/config
// @connect      sponsor.ajay.app
// @connect      dearrow-thumb.ajay.app
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==
const serverEndpoint = GM_getValue("serverEndpoint", "https://sponsor.ajay.app")
const thumbEndpoint = GM_getValue("thumbEndpoint","https://sponsor.ajay.app")
const normalization = GM_getValue("normalization", "NFC")
const transform = GM_getValue("transform", "")
const imgfilter = GM_getValue("imgfiler", "")/* dea.js - DeArrow for restrictive environments - by mchangrh

https://github.com/mchangrh/dea.js

Uses SponsorBlock data licensed used under CC BY-NC-SA 4.0 from https://sponsor.ajay.app/

LICENCED UNDER LGPL-3.0-or-later */
const VERSION = "1.0.0" // version constant

// object replacer
const replace = () =>
    [...document.querySelectorAll("ytd-compact-video-renderer,ytd-rich-item-renderer:not(.dea-js)")]
        .slice(0,50).forEach(replaceElem)

const basicFormatter = (title, custom = false) =>
    (custom) ? title.replace(/>/g,"") : title.normalize(normalization)

const replaceElem = async(videoRenderer,) => {
    if (videoRenderer.classList.contains("dea-js")) return
    const video_id =
        videoRenderer?.polymerController?.__data?.data?.videoId ??
        videoRenderer?.polymerController?.__data?.data?.content?.videoRenderer?.videoId
    // if no video_id or dea-js, skip
    if (!video_id) return
    const { title, has_thumb } = await getDeaVideo(video_id)
    // replace image
    const thumb_url = `${thumbEndpoint}/api/v1/getThumbnail?videoID=${video_id}`
    const thumb = videoRenderer.querySelector("yt-image img")
    // add to lazyData if not loaded
    if (!thumb.src) thumb.lazyData.sources = [{ url: thumb_url, width: 720, height: 404 }]
    else thumb.src = thumb_url
    // add filter
    if (!has_thumb) thumb.style.filter = imgfilter
    // replace title
    const titleElem = videoRenderer.querySelector("#video-title")
    const newTitle = basicFormatter(title ? "🧿" + title : titleElem.innerText, !!title)
    titleElem.innerText = newTitle
    if (!title) titleElem.style.textTransform = transform
    // mark parent as dearrowed
    if (thumb && titleElem) videoRenderer.classList.add("dea-js")
}

const getDeaVideo = async (video_id) =>
    await fetch(`${serverEndpoint}/api/branding?videoID=${video_id}`)
        .then(res => res.json())
        .then(data => ({
            title: data.titles?.[0]?.title,
            has_thumb: Boolean(data.thumbnails.length)
        }))

function setup() {
    console.log(`@mchangrh/DEA.js ${VERSION} Loaded`)
    console.log(`Uses SponsorBlock data licensed used under CC BY-NC-SA 4.0 from https://sponsor.ajay.app/`)
    if (document.querySelector(".cbTitleButtonContainer")) // exit if cbTitle exists
        return console.log("[DEA.js] Extension Present, Exiting")
    replace()
    document.addEventListener("yt-navigate-finish", replace)
    window.addEventListener("scroll", replace)
}
function setupConfigPage() {
    // clear placeholder
    document.getElementById("placeholder").style.display = "none"
    document.getElementById("config").style.display = "block"

    const serverEndpointInput = document.getElementById("serverEndpoint")
    const thumbEndpointInput = document.getElementById("thumbEndpoint")
    const normalizationInput = document.getElementById("normalization")
    const transformInput = document.getElementById("transform")
    const imgfilterInput = document.getElementById("imgfilter")

    const setValue = (key, value, defaultValue) => {
        if (value !== defaultValue) GM_setValue(key, value)
    }

    const submitButton = document.getElementById("submit")
    submitButton.addEventListener("click", () => {
        setValue("serverEndpoint", serverEndpointInput.value, serverEndpoint)
        setValue("thumbEndpoint", thumbEndpointInput.value, thumbEndpoint)
        setValue("normalization", normalizationInput.value, normalization)
        setValue("transform", transformInput.value, transform)
        setValue("imgfilter", imgfilterInput.value, imgfilter)
    })
}
if (document.URL === "https://mchangrh.github.io/dea.js/config") setupConfigPage()