// ==UserScript==
// @name         Yuki Bypass
// @namespace    https://tampermonkey.net/
// @version      1.0
// @description  Bypass keys for Codex, Delta, ArceusX, FluxusX, Ronix, and more.
// @author       itzYUKI
// @match        https://mobile.codex.lol/?token=*
// @match        https://mobile.codex.lol/*
// @match        https://lootdest.com/s?*
// @match        https://auth.platorelay.com/*
// @match        https://spdmteam.com/*
// @match        https://flux.li/android/external/*
// @match        https://ads.luarmor.net/get_key?for=RonixAndroidkey-*
// @match       https://pandadevelopment.net/getkey?service=*
// @match       https://krnl.cat/checkpoint/android/*
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

    async function pandaBypass() {
    let antiAdblockRemover = setInterval(removeAntiAdblock, 500);

    if (document.documentElement.innerHTML.includes('you got the key')) {
        notification('bypassed successfully');
        return;
    }
    else if (!document.getElementsByTagName('form').length) {
        let providers = Array.from(document.getElementsByTagName('a'));
        let supportedProviders = ['Linkvertise', 'Short Jambo'];
        for (let provider of providers) {
            let providerName = provider.firstChild.innerHTML;
            if (supportedProviders.includes(providerName)) {
                window.location.assign(provider.href);
                return;
            }
        }
        throw new Error('no supported ad provider found');
    }
    function getAdLink() {
        let form = document.getElementsByTagName('form')[0];
        let data = new FormData(form);
        return new Promise(async (resolve, reject) => {
            GM.xmlHttpRequest({
                method: "POST",
                url: form.action,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Referer': window.location.href,
                },
                data: new URLSearchParams(data),
                onload: function (response) {
                    resolve(response.finalUrl);
                },
                onerror: function (error) {
                    reject(error);
                }
            });
        });
    }
    function getDestUrl(link) {
        let url = new URL(encodeURI(link));
        switch (url.hostname) {
            case 'linkvertise.com': {
                return atob(url.searchParams.get('r'));
            }
            case 'short-jambo.com': {
                return url.search.split('&url=')[1];
            }
            default: {
                if ((new URL(window.location.href)).searchParams.get('provider')) {
                    return false;
                }
                else {
                    throw new Error('unsupported ad provider');
                }
            }
        }
    }
    function removeAntiAdblock() {
        try {
            let antiAdblock = document.getElementsByClassName('adblock_title')[0];
            while (antiAdblock.parentElement != document.body) {
                antiAdblock = antiAdblock.parentElement;
            }
            antiAdblock.remove();
            clearInterval(antiAdblockRemover);
        } catch (e) { }
    }
    const customSleepTimes = {
        'vegax': 1000,
        'laziumtools': 1000,
        'adelhub': 1000,
        'neoxkey': 1000,
    };
    try {
        let currentUrl = new URL(window.location.href);
        let hwid = currentUrl.searchParams.get('hwid');
        let service = currentUrl.searchParams.get('service');
        let checkpoint = currentUrl.searchParams.get('checkpoint');
        let provider = currentUrl.searchParams.get('provider');

        if (document.getElementById('cf-turnstile')) {
            await getTurnstileResponse();
        }

        let adUrl = await getAdLink(hwid, service, token);
        let dest = getDestUrl(adUrl);
        if (!dest) {
            window.location.assign(`https://pandadevelopment.net/getkey?service=${service}&hwid=${hwid}`);
        }
        let sleepTime = 1000;
        Object.keys(customSleepTimes).forEach(key => {
            if (service == key) {
                sleepTime = customSleepTimes[key];
            }
        });
        await sleep(sleepTime);

        await linkvertiseSpoof(dest);
        notification('stage completed');

        await sleep(1000);

        let newUrl = new URL(dest);
        token = newUrl.searchParams.get('sessiontoken');
        let nextCheckpoint = `https://pandadevelopment.net/getkey?service=${service}&shwid=${hwid}&checkpoint=${checkpoint}`;
        if (provider) {
            nextCheckpoint += `&provider=${provider}`;
        }
        window.location.assign(nextCheckpoint);
    }
    catch (e) {
        handleError(e);
    }
}

    function detectCaptcha() {
        return document.querySelector("iframe[src*='captcha'], #captcha, .captcha");
    }

    function getParam(name) {
        return new URLSearchParams(window.location.search).get(name);
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function notification(text) {
        GM_notification({
            title: 'Yuki Bypass',
            text,
            timeout: 3000
        });
    }

    async function ronixBypass() {
        if (detectCaptcha()) return alert('Please solve the captcha first.');

        try {
            await fetch(`https://ads.luarmor.net/get_key?for=RonixAndroidkey-*`);
            await sleep(50);
            window.location.href = `https://linkvertise.com/1252359/ranix?o=sharing`;
            alert('Ronix Bypassed!');
        } catch (error) {
            console.error('Ronix Bypass failed:', error);
        }
    }

    async function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    function getParameterByName(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }
    
    function detectCaptcha() {
        return !!document.querySelector('input[type="checkbox"], iframe[src*="captcha"]');
    }

    async function ArceusX() {
        const hwid = getParameterByName('hwid');
        const zone = 'Europe/Rome';
        const os = 'android';
        const advertiser = 'linkvertise';
        const I = "I"

        if (detectCaptcha()) {
            alert('Please solve the captcha first.');
            return;
        }

        if (url.includes('key-system-1')) {
            await fetch(`https://spdmteam.com/key-system-1?hwid=${hwid}&zone=${zone}&os=${os}`);
            await delay(100);
            await fetch(`https://spdmteam.com/api/keysystem?${new URLSearchParams({
                step: '1',
                zone: zone,
                advertiser: 'linkvertise',
                OS: os
            })}`);
            await delay(100);
            window.location.href = `https://spdmteam.com/key-system-2?hwid=${hwid}&zone=${zone}&os=${os}`;
        } else if (url.includes('key-system-2')) {
            await fetch(`https://spdmteam.com/key-system-2?hwid=${hwid}&l=${I}&advertiser=${advertiser}&OS=${os}`);
            await delay(100);
            window.location.href = `https://linkvertise.com/376138/arceus-x-neo-key-system-2?o=sharing`;
        } else if (url.includes('neo-key-system-2')) {
            await fetch(`https://linkvertise.com/376138/arceus-x-neo-key-system-2?o=sharing`);
            await delay(100);
            window.location.href = `https://spdmteam.com/key-system-3?hwid=${hwid}&l=${I}&advertiser=${advertiser}&OS=${os}`;
        } else if (url.includes('key-system-3')) {
            await fetch(`https://spdmteam.com/key-system-3?hwid=${hwid}&l=${I}&advertiser=${advertiser}&OS=${os}`);
            await delay(100);
            window.location.href = `https://linkvertise.com/376138/arceus-x-neo-key-system-3?o=sharing`;
        } else if (url.includes('neo-key-system-3')) {
            await fetch(`https://linkvertise.com/376138/arceus-x-neo-key-system-3?o=sharing`);
            await delay(100);
            window.location.href = `https://spdmteam.com/key-system-getkey`;
            alert('Arceus X Bypassed!');
        }
    }
}

    async function krnlBYPASS() {     
        alert('Please solve the captcha first.');

        try {
            if (url.includes('https://krnl.cat/checkpoint/android/v1?')) {
                await fetch(`https://krnl.cat/checkpoint/android/v1?`);
                await sleep(500);
                window.location.href = `https://linkvertise.com/48193/krnl-android-checkpoint?o=sharing`;
            } else if (url.includes('https://krnl.cat/checkpoint/android/v2?')) {
                await fetch('https://krnl.cat/checkpoint/android/v2?');
                await sleep(500);
                window.location.href = `https://linkvertise.com/48193/krnl-android-checkpoint1?o=sharing`;
            alert('Krnl Bypassed!');
        }
        catch (err) {
            console.error('Krnl Bypass failed:', err);
    }
}

    if (url.includes('RonixAndroidkey') || url.includes('linkvertise.com/1252359/ranix')) {
        ronixBypass();
    } else if (url.includes('spdmteam.com/key-system') || url.includes('neo-key-system')) {
        setTimeout(ArceusX, 100);
    } else if (url.includes('krnl.cat')) {
        setTimeout(krnlBYPASS, 500);
    } else if (url.includes('pandadevelopment')) {
        setTimeout(pandaBypass, 500);
    }
})();