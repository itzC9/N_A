// ==UserScript==
// @name         Yuki Bypass
// @namespace    https://tampermonkey.net/
// @version      1.5
// @description  Codex, Delta, and ArceusX Key Bypass by itzYUKI
// @author       itzYUKI
// @match        https://mobile.codex.lol/?token=*
// @match        https://mobile.codex.lol/*
// @match        https://lootdest.com/s?*
// @match        https://auth.platorelay.com/*
// @match        https://spdmteam.com/key-system-1*
// @match        https://spdmteam.com/key-system-2*
// @match        https://spdmteam.com/key-system-3*
// @require       https://auto-bypass.onrender.com/api/codex
// @grant        GM_xmlhttpRequest
// @grant        GM_notification
// @grant        GM_openInTab
// @connect      api.codex.lol
// @connect      auto-bypass.onrender.com
// @license      YUKI
// ==/UserScript==

(function () {
    'use strict';

    const url = window.location.href;

    function isBase64(str) {
        try {
            if (typeof str !== 'string' || str.length === 0) return false;
            const base64Pattern = /^[A-Za-z0-9+/=]+$/;
            if (!base64Pattern.test(str)) return false;
            const decodedStr = atob(str);
            return btoa(decodedStr) === str;
        } catch (e) {
            return false;
        }
    }

    function getParameterByName(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    function deltaRedirect() {
        const base64String = getParameterByName('r');
        if (base64String && isBase64(base64String)) {
            try {
                const decodedUrl = atob(base64String);
                console.log('[YUKI BYPASS] Redirecting to:', decodedUrl);
                window.location.href = decodedUrl;
            } catch (error) {
                console.error('[YUKI BYPASS] Error decoding Base64:', error);
            }
        }
    }

    async function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function ArceusX() {
        const hwid = getParameterByName('hwid');
        const zone = 'Europe/Rome';
        const os = 'android';

        function detectCaptcha() {
            return !!document.querySelector('input[type="checkbox"], iframe[src*="captcha"]');
        }

        if (detectCaptcha()) {
            alert('Please solve the captcha first.');
            return;
        }

        if (url.includes('key-system-1')) {
            await fetch(`https://spdmteam.com/key-system-1?hwid=${hwid}&zone=${zone}&os=${os}`);
            await delay(2000);
            await fetch(`https://spdmteam.com/api/keysystem?${new URLSearchParams({
                step: '1',
                zone: zone,
                advertiser: 'lootdest',
                OS: os
            })}`);
            await delay(1000);
            window.location.href = `https://spdmteam.com/key-system-2?hwid=${hwid}&zone=${zone}&os=${os}`;
        } else if (url.includes('key-system-2')) {
            await fetch(`https://spdmteam.com/key-system-2?hwid=${hwid}&zone=${zone}&os=${os}`);
            await delay(1000);
            window.location.href = `https://spdmteam.com/key-system-3?hwid=${hwid}&zone=${zone}&os=${os}`;
        } else if (url.includes('key-system-3')) {
            await fetch(`https://spdmteam.com/key-system-3?hwid=${hwid}&zone=${zone}&os=${os}`);
            alert('Key bypass complete!');
        }
    }
    if (url.includes('auth.platorelay.com') || url.includes('lootdest.com/s?')) {
        deltaRedirect();
    } else if (url.includes('spdmteam.com/key-system')) {
        setTimeout(ArceusX, 1);
    }

})();