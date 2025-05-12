// ==UserScript==
// @name         Yuki Bypass Fixed
// @namespace    https://tampermonkey.net/
// @version      1.0
// @description  Codex, Delta, ArceusX, and FluxusX Key Bypass (Fixed)
// @author       itzYUKI
// @match        https://mobile.codex.lol/?token=*
// @match        https://mobile.codex.lol/*
// @match        https://lootdest.com/s?*
// @match        https://auth.platorelay.com/*
// @match        https://spdmteam.com/key-system-1*
// @match        https://spdmteam.com/key-system-2*
// @match        https://spdmteam.com/key-system-3*
// @match        https://flux.li/android/external/*
// @require      https://auto-bypass.onrender.com/api/codex
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

    async function deltaX() {
        if (detectCaptcha()) {
            alert('Please solve the captcha first.');
            return;
        }

        if (url.includes('auth.platorelay.com')) {
            try {
            await delay(500);
                await fetch(`https://auth.platorelay.com/*`);
                window.location.href = `https://linkvertise.com/227776/207.68150151440244/dynamic?s=0&r=aHR0cHM6Ly9hdXRoLnBsYXRvcmVsYXkuY29tL3ZOd1ppRGdycnU5YzNkZzY1VWlnNWRpNXNUZ2RucXR4NUlCem5VS290ajZlNzk3JTJGY1JZSVFBcU9xaFZPZTVzWjg1bkV0TXVqQWpScjBTQndnQ0ZxVE1PZWVoS0I5NFdQalYxRk44SGx1UUd5NVdmN0Y0djU4QXdMQ25lUmZSZXB5dWNpYWclMkZTVkhuc2MwMjlDSzVJNkF0b3lvJTJGZ0JjUmI4ZlY4Q3Z3b0JlRE5KSlhnZjJleDE4QXE1SWJueW5HalhHeGNhM1lOdXJ6ZGY0JTJCbm9QWTU1MnZEM3RwcFJObSUyQm1VdVMwJTJGQ1VXZzdhMEM3c0E1RlVWNks4S00xeHBJck52bXdwcFNlQWhOSyUyQm9nbmNaSTRYVXAwM0pNZGp2dUNsMk9FdXNEVU43WVAlMkZjTDhFbExBZGxmJTJGbUNlTkpWbm9uNFElMkJWcXJ6RnFvUWFZWVRhQVBna2ZWcCUyQmslMkZxRTVTbTlnQ01HTDN5a21qcDNmNEx1aFRRbktEU0VwSHp6cyUyQnVKV1hZMGJhU1BSZzdWOWI2cG1KR0d3WSUyQlpxb0VTWm4yYThRakpnZWhPNUFCbGkxeHkxNjhxQ2kyVmlPNnQ1MTMwandldDIzRWd3T0g3VUd2NmFYYmxDVlRrMmtHRjNIOFZnJTJGSHZyZmpSZUZZVWZuc3NBR1Z2SEh1U0FKYUw2NGlsUzRTb0ZWWmR2ZmxGaFEyUA%3D%3D&o=sharing`;
                await delay(500);
                await fetch(`https://auth.platorelay.com/`);
                window.location.href = `https://auth.platorelay.com/`;
                alert('Delta X Bypassed!');
            } catch (error) {
                console.error('Delta X Bypass failed:', error);
            }
        }
    }

    async function ArceusX() {
        if (detectCaptcha()) {
            alert('Please solve the captcha first.');
            return;
        }

        const hwid = getParameterByName('hwid');
        const zone = 'Europe/Rome';
        const os = 'android';

        try {
            if (url.includes('key-system-1')) {
                await fetch(`https://spdmteam.com/key-system-1?hwid=${hwid}&zone=${zone}&os=${os}`);
                await delay(500);
                await fetch(`https://spdmteam.com/api/keysystem?${new URLSearchParams({
                    step: '1',
                    zone: zone,
                    advertiser: 'linkvertise',
                    OS: os
                })}`);
                
                await delay(500);
                window.location.href = `https://spdmteam.com/key-system-2?hwid=${hwid}&zone=${zone}&os=${os}`;
            }
            else if (url.includes('key-system-2')) {
                await fetch(`https://spdmteam.com/key-system-2?hwid=${hwid}&zone=${zone}&os=${os}`);
                await delay(500);
                window.location.href = `https://spdmteam.com/key-system-3?hwid=${hwid}&zone=${zone}&os=${os}`;
            }
            
            else if (url.includes('key-system-3')) {
                await fetch(`https://spdmteam.com/key-system-3?hwid=${hwid}&zone=${zone}&os=${os}`);
                await delay(500);
                window.location.href = `https://linkvertise.com/376138/arceus-x-neo-key-system-1?o=sharing`;
            }
            else if (url.includes('neo-key-system-1')) {
                await fetch(`https://linkvertise.com/376138/arceus-x-neo-key-system-1?o=sharing`);
                await delay(500);
                window.location.href = `https://linkvertise.com/376138/arceus-x-neo-key-system-2?o=sharing`;
            } else if (url.includes('neo-key-system-2');
                await fetch(`https://linkvertise.com/376138/arceus-x-neo-key-system-2?o=sharing`);
                await delay(500);
                window.location.href = `https://linkvertise.com/376138/arceus-x-neo-key-system-3?o=sharing`;
            }
            else if (url.includes('neo-key-system-3')) {
                await fetch(`https://linkvertise.com/376138/arceus-x-neo-key-system-3?o=sharing`);
                await delay(500);
            window.location.href = `https://spdmteam.com/api/keysystem?step=3&advertiser=linkvertise&OS=${os}`;
                alert('Arceus X Bypassed!');
            }
        } catch (error) {
            console.error('Arceus X Bypass failed:', error);
        }
    }

    async function fluxusX() {
        if (detectCaptcha()) {
            alert('Please solve the captcha first.');
            return;
        }

        if (url.includes('flux.li/android/external/')) {
            try {
                const link = document.querySelector("a[href*='start.php']");
                if (link) {
                    const newUrl = link.href.replace("main.php?", "https://direct-link.net/");
                    await delay(300);
                    window.location.href = newUrl;
                    alert('Fluxus X Bypassed!');
                }
            } catch (error) {
                console.error('Fluxus X Bypass failed:', error);
            }
        }
    }

    if (url.includes('auth.platorelay.com') || url.includes('loot-link.com/s?')) {
        deltaX();
    } else if (url.includes('spdmteam.com/key-system') || url.includes('neo-key-system')) {
        setTimeout(ArceusX, 500);
    } else if (url.includes('flux.li/android/external/')) {
        setTimeout(fluxusX, 500);
    }
})();