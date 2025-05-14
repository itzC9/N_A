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
    
    function getParam(name) {
        return new URLSearchParams(window.location.search).get(name);
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function ronixBypass() {
        if (detectCaptcha()) return alert('Please solve the captcha first.');

        try {
            await fetch(`https://ads.luarmor.net/get_key?for=RonixAndroidkey-*`);
            await sleep(500);
            window.location.href = `https://linkvertise.com/1252359/ranix?o=sharing`;
            alert('Ronix Bypassed!');
        } catch (error) {
            console.error('Ronix Bypass failed:', error);
        }
    }

    async function ArceusX() {
        const hwid = getParameterByName('hwid');
        const zone = 'Europe/Rome';
        const os = 'ios';
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
    ArceusX();

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

    if (url.includes('RonixAndroidkey') {
        ronixBypass();
    } else if (url.includes('spdmteam.com') {
        ArceusX();
    } else if (url.includes('krnl.cat')) {
        krnlBYPASS();
    } else if (url.includes('pandadevelopment')) {
        pandaBypass();
    } else if (url.includes('spdmteam.com') {
    keySystem();
    }
})();