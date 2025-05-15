// ==UserScript==
// @name         Yuki Bypass
// @namespace    https://tampermonkey.net/
// @version      1.0
// @description  Bypass keys for Codex, Delta, ArceusX, FluxusX, Ronix, and more.
// @author       itzYUKI

// @match        https://spdmteam.com/key-system-1?hwid=*
// @match        https://spdmteam.com/key-system-2?hwid=*
// @match        https://spdmteam.com/key-system-3?hwid=*
// @match        https://mobile.codex.lol/*
// @require      https://auto-bypass.onrender.com/api/codex

// @grant        GM_xmlhttpRequest
// @grant        GM_notification
// @grant        GM_openInTab
// @connect      api.codex.lol
// @connect      auto-bypass.onrender.com
// @connect     spdmteam.com
// @license      YUKI
// ==/UserScript==

(function () {
    'use strict';

    const url = window.location.href;

    function detectCaptcha() {
        return document.querySelector("iframe[src*='captcha']") || document.querySelector("#captcha, .captcha");
    }

    function getParameterByName(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    async function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function ArceusX() {
        const hwid = getParameterByName('hwid');
        const zone = 'Europe/Rome';
        const os = 'android';
        if (detectCaptcha()) {
            alert('Please solve the captcha first.');
            return;
        }
        if (url.includes('key-system-1')) {
            await fetch(`https://spdmteam.com/key-system-1?hwid=${hwid}&zone=${zone}&os=${os}`);
            await delay(500);
            await fetch(`https://spdmteam.com/api/keysystem?${new URLSearchParams({
                step: '1',
                zone: zone,
                advertiser: 'lootlabs',
                OS: os
            })}`);
            await delay(500);
            window.location.href = `https://spdmteam.com/key-system-2?hwid=${hwid}&zone=${zone}&os=${os}`;
        } else if (url.includes('key-system-2')) {
            await fetch(`https://spdmteam.com/key-system-2?hwid=${hwid}&zone=${zone}&os=${os}`);
            await delay(500);
            window.location.href = `https://spdmteam.com/key-system-3?hwid=${hwid}&zone=${zone}&os=${os}`;
        } else if (url.includes('key-system-3')) {
            await fetch(`https://spdmteam.com/key-system-3?hwid=${hwid}&zone=${zone}&os=${os}`);
            alert('Key bypass complete!');
    }
}

    if (url.includes('spdmteam.com') {
        ArceusX();
    }
})();