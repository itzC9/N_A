// ==UserScript==
// @name         Delta Key Bypasser
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Simple URL redirect bypasser using base64 decoding
// @author       arc
// @match        https://loot-link.com/s?*
// @match        https://auth.platorelay.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function isBase64(str) {
        try {
            if (typeof str !== 'string' || str.length % 4 !== 0) return false;
            const base64Regex = /^[A-Za-z0-9+/]+={0,2}$/;
            if (!base64Regex.test(str)) return false;
            const decoded = atob(str);
            return decoded.startsWith('http://') || decoded.startsWith('https://');
        } catch (e) {
            return false;
        }
    }

    function getQueryParam(name) {
        return new URLSearchParams(window.location.search).get(name);
    }

    const b64param = getQueryParam('r');

    if (b64param && isBase64(b64param)) {
        try {
            const decodedUrl = atob(b64param);
            console.log('Redirecting to:', decodedUrl);
            window.location.href = decodedUrl;
        } catch (err) {
            console.error('Failed to decode or redirect:', err);
        }
    } else {
        console.log('No valid url parameter found.');
    }
})();