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
                await fetch(`https://auth.platorelay.com/`);
                await delay(500);
                window.location.href = `https://loot-link.com/s?fJjn&data=ropKerF1C%2BDVFRHtlJ4B3hUeWvxpY9KYXzYfq1OOn8pTW1RJVlhbo0ftFvz9i%2FQv5xvygcT3f%2F50L6xgYQMJAib4ppLVi8KID7VRKXIrmv42ed7DeqOmz2c1rVKA%2BfFm%2Fg1PaQ5FiFbDOrMAhEFwuGWLmQb%2FuNjx5JfP2A6WWNRTxGo6qhqGesilOIVOYQ76LwtJBHOBMc3Xv2AA335JyyK6edOXCezZ4ExMGX8zlIasLt5aKGc5UvcReR7sGQkUDw38RtqnunfQdGd8SjV1ESEzovE8eDb5bsoDHsN3EtRqkVFzwRckg3VFlaDrOHjfiH9dXGfeeSiRNBrc0aAv6KyZqyqsbuE3XWo12cLBwJovKt87bsqifTZ2wNHYqpJhffNtWjFmRhNoCL3fb2nvBb1eeo5ScutL0gRrw1kKw1NZhl%2F1cZdiZS8RlyqwFiRGxPc8gtRGkWH380UuEA1jYmynJ6AABQjMgsjtQ4Nf8t0MlZPJxa2DmHv4K2c6xRFjLTnryUWQ1rJ0M49Zr4pjT9QYmKhbpQoEbVLbCK3SuHh4ICrHSGY07HHQPb9KVmfvgjuKWkvjUrubrXwXiBtKSIjJpH7%2Fnh2t2kTNJST8hvhVLyYXpK6Ue6yQ2QStDhBdzLvVvugFe%2FDFZ%2BaBNeHA08XEfGMUH86lGOQoA3b7654%2FVAZMAWhrAmNXd6hHEC9SnF9rZy%2FCAEoRYiEmrRHdEqbHkyrTTZdNj9P2RXivSanV1mhWqWbMOvvEHBXDT1DDQ%2BppXL3Ap6LzH91C7i1NYglNxvxlxB%2BGgv6LbkuQMxQ%3D`;
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
            } else if (url.includes('key-system-2')) {
                await fetch(`https://spdmteam.com/key-system-2?hwid=${hwid}&zone=${zone}&os=${os}`);
                await delay(500);
                window.location.href = `https://spdmteam.com/key-system-3?hwid=${hwid}&zone=${zone}&os=${os}`;
            } else if (url.includes('key-system-3')) {
                await fetch(`https://spdmteam.com/key-system-3?hwid=${hwid}&zone=${zone}&os=${os}`);
                await delay(500);
                window.location.href = `https://linkvertise.com/376138/arceus-x-neo-key-system-1?o=sharing`;
            } else if (url.includes('neo-key-system-1')) {
                await fetch(url);
                window.location.href = `https://linkvertise.com/376138/arceus-x-neo-key-system-2?o=sharing`;
            } else if (url.includes('neo-key-system-2')) {
                await fetch(url);
                window.location.href = `https://linkvertise.com/376138/arceus-x-neo-key-system-3?o=sharing`;
            } else if (url.includes('neo-key-system-3')) {
                await fetch(url);
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
