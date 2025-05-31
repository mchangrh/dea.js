<p align="center"><img src="docs/icon.png"></p>

# DEA.js
![GitHub file size in bytes](https://img.shields.io/github/size/mchangrh/dea.js/docs/dea.js)
![GitHub file size in bytes](https://img.shields.io/github/size/mchangrh/dea.js/docs/dea.min.js?label=size%20%28min%29)
![GitHub package.json version](https://img.shields.io/github/package-json/v/mchangrh/dea.js)

[DeArrow](https://github.com/ajayyy/DeArrow) for restrictive environments. When possible, use the browser extension.

## CDNs
<p align="center">
    <a href="https://mchangrh.github.io/dea.js"><img src="https://img.shields.io/static/v1?label=%20&message=GitHub%20Pages&color=222&logo=GitHub%20Pages" alt="Badge"></img></a>
</p>
<p align="center">
  <a href="https://raw.githubusercontent.com/mchangrh/dea.js/main/docs/dea.min.js"><img src="https://img.shields.io/static/v1?label=%20&message=GitHub&color=222&logo=GitHub" alt="Badge"></img></a>
    <a href="https://cdn.jsdelivr.net/gh/mchangrh/dea.js/docs/"><img src="https://img.shields.io/static/v1?label=%20&message=JSDelivr%20%20(GitHub)&color=222&logo=jsDelivr" alt="Badge"></img></a>alt="Badge"></img></a>
</p>

## Usage
Userscripts:
  - With Loader (`dea-loader.user.js`)
    - The loader loads the script every time on startup, settings are preserved between updates with no intervention.
  - Without Loader (`dea.user.js`)
    - The script will load faster each time, but will require user intervention if any settings are changed
  - With config page (`dea-config.user.js`)
    - Loads faster than loader, preserves settings between updates, and has a config page to change settings 
    - The script allows locally storing settings in `GM_setValue`
    - go to [https://mchangrh.github.io/dea.js/config](https://mchangrh.github.io/dea.js/config) to configure

Bookmarklet: `dea.bookmarklet.js`
- Create a new bookmark in your bookmarks bar
- Replace the URL with the text in `dea.bookmarklet.js`

Console: `dea.min.js` or `dea.js`
- Copy the contents of `dea.min.js` or `dea.js` into the console

## Links & CDNs
It is recommended to use the [CDN Check Page](docs/index.html) as it will check and generate links for you.
- GitHub: `https://raw.githubusercontent.com/mchangrh/dea.js/main/docs/dea.min.js`
- GitHub Pages: `https://mchangrh.github.io/dea.js/dea.min.js`
- JSDelivr (GitHub): `https://cdn.jsdelivr.net/gh/mchangrh/dea.js/docs/dea.min.js`

# DEA.js vs DeArrow (extension)
|  | DEA.js | Extension |
|---|---|---|
| Toggle | ❌ | ✅ |
| Voting | ❌ | ✅ |
| Invidious/ Mobile YT | ❌ | ✅ |