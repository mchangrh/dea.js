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