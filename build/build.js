const fs = require("fs")
const { resolve } = require("path")
const UglifyJS = require("uglify-js")

const bodyFile = resolve(__dirname, "../src/dea.js")
const headerFile = resolve(__dirname, "../build/header.user.js")
const loaderHeaderFile = resolve(__dirname, "../build/loader-header.user.js")
const configHeaderFile = resolve(__dirname, "../build/config-header.user.js")
const configSettingsFile = resolve(__dirname, "../src/gm_config.js")
const configPageFile = resolve(__dirname, "../src/gm_configpage.js")
const settingsFile = resolve(__dirname, "../src/settings.js")

function defaultMerge(minify = true) {
  const body = fs.readFileSync(bodyFile, "utf8")
  const settings = fs.readFileSync(settingsFile, "utf8")
  const mergedBody = settings + body;
  return minify ? UglifyJS.minify(mergedBody).code : mergedBody
}

function userscript() {
  const header = fs.readFileSync(headerFile, "utf8")
  const settings = fs.readFileSync(settingsFile, "utf8")
  const body = fs.readFileSync(bodyFile, "utf8")
  fs.writeFileSync("docs/dea.user.js", header + settings + body)
  console.log("userscript done")
}

function loader() {
  const header = fs.readFileSync(loaderHeaderFile, "utf8")
  const settings = fs.readFileSync(settingsFile, "utf8")
  fs.writeFileSync("docs/dea-loader.user.js", header + settings)
  // loader payload
  const body = fs.readFileSync(bodyFile, "utf8")
  const minified = UglifyJS.minify(body).code
  fs.writeFileSync("docs/dea-nosettings.min.js", minified)
  console.log("loader-done")
}

function scriptConfig() {
  const header = fs.readFileSync(configHeaderFile, "utf8")
  const settings = fs.readFileSync(configSettingsFile, "utf8")
  const configPage = fs.readFileSync(configPageFile, "utf8")
  const body = fs.readFileSync(bodyFile, "utf8")
  fs.writeFileSync(
    "docs/dea-config.user.js",
    header + settings + body + configPage
  )
  console.log("config-done")
}

function minimized() {
  const body = defaultMerge()
  fs.writeFileSync("docs/dea.min.js", body)
  console.log("minimized done")
}

function bookmarklet() {
  const body = defaultMerge()
  const header = "javascript: (function () {"
  const footer = "})()"
  fs.writeFileSync("docs/dea.bookmarklet.js", header + body + footer)
  console.log("bookmarklet done")
}

function copy() {
  const body = defaultMerge(false)
  fs.writeFileSync("docs/dea.js", body)
  console.log("copy done")
}

userscript()
loader()
scriptConfig()
minimized()
bookmarklet()
copy()
