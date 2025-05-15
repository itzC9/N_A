// ==UserScript==
// @name         Premium Bypass Userscript
// @namespace    http://tampermonkey.net/
// @version      0..6
// @description  Auto Bypass Platoboost, Panda, KeyRBLX, KeyGuardian, Fluxus and more.
// @author       test
// @match        *://linkvertise.com/*
// @match        *://loot-link.com/*
// @match        *://loot-links.com/*
// @match        *://lootlink.org/*
// @match        *://lootlinks.co/*
// @match        *://lootdest.info/*
// @match        *://lootdest.org/*
// @match        *://lootdest.com/*
// @match        *://links-loot.com/*
// @match        *://linksloot.net/*
// @match        *://*.onsultingco.com/*
// @match        *://sub2unlock.com/*
// @match        *://sub2unlock.io/*
// @match        *://sub2unlock.net/*
// @match        *://sub2unlock.me/*
// @match        *://sub2unlock.online/*
// @match        *://sub2unlock.top/*
// @match        *://sub4unlock.pro/*
// @match        *://sub4unlock.com/*
// @match        *://sub4unlock.io/*
// @match        *://links.spacebin.in/*
// @match        *://adfoc.us/*
// @match        *://boost.ink/*
// @match        *://cuty.io/*
// @match        *://www.cuty.io/*
// @match        *://cutyion.com/*
// @match        *://cutynow.com/*
// @match        *://cety.app/*
// @match        *://www.cety.app/*
// @match        *://mboost.me/*
// @match        *://bst.gg/*
// @match        *://booo.st/*
// @match        *://bstlar.com/*
// @match        *://mendationforc.info/*
// @match        *://paster.so/*
// @match        *://paster.gg/*
// @match        *://rekonise.com/*
// @match        *://social-unlock.com/*
// @match        *://www.social-unlock.com/*
// @match        *://socialwolvez.com/*
// @match        *://sub2get.com/*
// @match        *://www.sub2get.com/*
// @match        *://work.ink/*
// @match        *://workink.net/*
// @match        *://paste.work.ink/view.html*
// @match        *://outgoing.work.ink/*
// @match        *://auth.platoboost.com/*
// @match        *://auth.platoboost.net/*
// @match        *://auth.platoboost.click/*
// @match        *://auth.platorelay.com/*
// @match        *://auth.platorelay.net/*
// @match        *://spdmteam.com/*
// @match        *://mobile.codex.lol/*
// @match        *://flux.li/*
// @match        *://keyguardian.org/a/*
// @match        *://keyrblx.com/getkey/*
// @match        *://pandadevelopment.net/*
// @match        *://krnl.cat/*
// @match        *://www.nixius.xyz/*
// @match        *://trigonevo.fun/*
// @match        *://arc-hub.xyz/*
// @match        *://alchemyhub.xyz/key*
// @match        *://ads.luarmor.net/get_key?*
// @match        *://hehehub-acsu123.pythonanywhere.com/api/getkeyv4*
// @match        *://hohocomunity.xyz/api/getkeyv4*
// @match        *://hohocomunity.xyz/api/getkeyv2*
// @match        *://ldnesfspublic.org/https*
// @match        *://thebasement.ink/*
// @match        *://apixerohub.x10.mx/api/getkey?*
// @match        *://getkey.farrghii.com/*
// @match        *://overdrivehub.xyz/*
// @match        *://auth.btteam.net/*
// @match        *://stfly.biz/*
// @match        *://shrtlk.click/*
// @match        *://shrtlk.biz/*
// @match        *://airevue.net/*
// @match        *://atravan.net/*
// @match        *://veroan.com/*
// @match        *://crenue.net/*
// @match        *://*/recaptcha/*
// @match        *://pastebin.com/*
// @match        *://paste-drop.com/*
// @match        *://pastefy.app/*
// @match        *://*.esohasl.net/*
// @match        *://linkunlocker.com/*
// @match        *://*.youtube.com/*
// @match        *://*.discord.com/*
// @match        *://nicuse.xyz/*
// @match        *://404063.xyz/*
// @match        *://link4m.com/go/*
// @match        *://zks1.blogspot.com/?post=*
// @match        *://zks2.blogspot.com/?post=*
// @match        *://tutwuri.id/*
// @match        *://sfl.gl/ready/go?u=*
// @match        *://pastesio.com/*
// @match        *://koronis.uwu.ai/*
// @match        *://go.linkify.ru/*
// @match        *://lockr.so/*
// @match        *://key.volcano.best/*
// @match        *://quartyz.com/getkey
// @match        *://overhub.xyz/key/*
// @match        https://*.hcaptcha.com/*checkbox*
// @match        https://*.hcaptcha.com/*hcaptcha-challenge*
// @match        https://*.hcaptcha.com/*captcha*
// @icon         https://i.vgy.me/1YxQnx.png
// @license      Gabriel
// @grant        GM_xmlhttpRequest
// @grant        GM_setClipboard
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_info
// @require      https://github.com/karlgbrl/userscript/raw/refs/heads/main/notification.js
// @require      https://github.com/karlgbrl/userscript/raw/refs/heads/main/testmain.js
// @require      https://cdn.rawgit.com/ricmoo/aes-js/e27b99df/index.js
// @connect      api.gabcode.dev
// @connect      api.codex.lol
// @connect      linkvertise.com
// @connect      loot-link.com
// @connect      loot-links.com
// @connect      lootlink.org
// @connect      lootlinks.co
// @connect      lootdest.info
// @connect      lootdest.org
// @connect      lootdest.com
// @connect      links-loot.com
// @connect      linksloot.net
// @connect      stfly.biz
// @connect      shrtlk.click
// @connect      pandadevelopment.net
// @connect      workink.xyz
// @connect      rekonise.com
// @connect      bit.ly
// @connect      engageub1.pythonanywhere.com
// @connect      engageub.pythonanywhere.com
// ==/UserScript==

function config() {
    return {
        redirect: {
            enabled: true,
            wait: 1,
            luarmorSleep: 15, // 15s is best wait time to prevent getting blacklist.
			keyrblx: 4, // Increase wait time if other keyrblx hub requires more wait time.
        },
        platoboostMethod: 2, // 1. goes to the ad link, then bypasses it and goes to next checkpoint; 2. bypasses the adlink and goes to next checkpoint; 3. completes all the steps and refreshes the page if the key is found.
        krnl: { // delay for button to appear in the ad link
			lootlabs: 5,
			linkvertise: 1,
		},
		codex: {
			perBypass: 3.1, // 5.3 seconds per bypassing step
			perStep: 0.75, // 750ms milliseconds per step completion
		},
		pandadev: {
			wait: 5,
			services: {
				// Priority wait time for specific service
				// example: "speedhubx": 7
				vegax: 3
			}
		}
    }
}

function autocopy() {
    return {
        // Key System Auto Copy
        platoboost: true, // Auto copy key in Platoboost
        pandadevelopment: true, // Auto copy key in Panda Development
        fluxus: true, // Auto copy key in Fluxus
        keyguardian: true, // Auto copy key in KeyGuardian
        keyrblx: true, // Auto copy key in KeyRBLX
        krnl: true, // Auto copy key in Krnl
		thebasementink: true, // Auto copy key in The Basement
		xerohub: true, // Auto copy key in XeroHub
		archub: true, // Auto copy key in ArcHub
		relzhub: true, // Auto copy key in RelzHub
		nixius: true, // Auto copy key in Nixius
		nicuse: true, // Auto copy key in Nicuse
		"404063": true, // Auto copy key in 404063
		neoxhub: true, // Auto copy key in neox hub
		volcano: true, // Auto copy key in Volcano
		// Paste Services Auto Copy
		pastebin: true, // Auto copy in pastebin
		pastefy: true, // Auto copy in pastefy
		pastedrop: true, // Auto copy in paste-drop
		workink: true, // Auto copy in work ink paste
		pastesio: true, // Auto copy in pastesio
    }
}

function autoConfig(){
	return {
		lootlabs: true, // All loot links will be run & unlock automatically
		workink: true,
	}
}