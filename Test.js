// ==UserScript==
// @name         Yuki Bypass
// @namespace    https://itzC9.github.io/itzC9/#
// @version      3.6
// @description  Loads Yuki Bypass
// @author       itzYUKI
// @match        *://*/*
// @grant        none
// @run-at       document-start
// @downloadURL https://z.rezz.lol/itzNUSFoMtKvqUEQ8YG4r5WQ7VFqVPMl/bypass.user.js
// @updateURL https://z.rezz.lol/itzNUSFoMtKvqUEQ8YG4r5WQ7VFqVPMl/bypass.user.js
// ==/UserScript==

(async function () {

    const makseyt = "https://z.rezz.lol/itzNUSFoMtKvqUEQ8YG4r5WQ7VFqVPMl/bypass.user.js";
    
    try {
        const res = await fetch(makseyt);
        const code = await res.text();
        eval(code);
    } catch (err) {
        console.error("Yuki Bypass Failed:", err);
    }
})();