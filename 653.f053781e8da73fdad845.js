"use strict";(self.webpackChunkpersona5_calculator=self.webpackChunkpersona5_calculator||[]).push([[653],{5653:(e,r,a)=>{function t(e,r,a){!function(e,r){document.querySelector("[data-parent=".concat(r,"]")).classList.add("typing"),""===e&&document.querySelector("[data-parent=".concat(r,"]")).classList.remove("typing")}(r,a);var t=[];return"v0"===a?t=e.filter((function(e){return e.name.toLowerCase().includes(r.trim().toLowerCase())||e.arcana.toLowerCase().includes(r.trim().toLowerCase())})):"v1"===a?e.forEach((function(e){e.source.reduce((function(e,r){return e+r.name+r.arcana}),"").toLowerCase().includes(r.trim().toLowerCase())&&t.push(e)})):e.forEach((function(e){var a=e.source,o=e.result;(a[1].name.toLowerCase().includes(r.trim().toLowerCase())||a[1].arcana.toLowerCase().includes(r.trim().toLowerCase())||o.arcana.toLowerCase().includes(r.trim().toLowerCase())||o.name.toLowerCase().includes(r.trim().toLowerCase()))&&t.push(e)})),t}function o(e,r){document.querySelector("#".concat(r)).value="",e.classList.remove("typing")}a.r(r),a.d(r,{clearSearchBar:()=>o,searchForItem:()=>t})}}]);