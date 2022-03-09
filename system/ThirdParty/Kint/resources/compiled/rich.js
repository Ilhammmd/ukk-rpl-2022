void 0===window.kintRich&&(window.kintRich=function(){"use strict";var i={selectText:function(e){var t=window.getSelection(),a=document.createRange();a.selectNodeContents(e),t.removeAllRanges(),t.addRange(a)},each:function(e,t){Array.prototype.slice.call(document.querySelectorAll(e),0).forEach(t)},hasClass:function(e,t){return!!e.classList&&e.classList.contains(t=void 0===t?"kint-show":t)},addClass:function(e,t){e.classList.add(t=void 0===t?"kint-show":t)},removeClass:function(e,t){return e.classList.remove(t=void 0===t?"kint-show":t),e},toggle:function(e,t){var a=i.getChildren(e);a&&((t=void 0===t?i.hasClass(e):t)?i.removeClass(e):i.addClass(e),1===a.childNodes.length&&(a=a.childNodes[0].childNodes[0])&&i.hasClass(a,"kint-parent")&&i.toggle(a,t))},toggleChildren:function(e,t){var a=i.getChildren(e);if(a){var o=a.getElementsByClassName("kint-parent"),r=o.length;for(void 0===t&&(t=!i.hasClass(e));r--;)i.toggle(o[r],t)}},toggleAll:function(e){for(var t=document.getElementsByClassName("kint-parent"),a=t.length,o=!i.hasClass(e.parentNode);a--;)i.toggle(t[a],o)},switchTab:function(e){var t=e.previousSibling,a=0;for(i.removeClass(e.parentNode.getElementsByClassName("kint-active-tab")[0],"kint-active-tab"),i.addClass(e,"kint-active-tab");t;)1===t.nodeType&&a++,t=t.previousSibling;for(var o=e.parentNode.nextSibling.childNodes,r=0;r<o.length;r++)r===a?(i.addClass(o[r]),1===o[r].childNodes.length&&(t=o[r].childNodes[0].childNodes[0])&&i.hasClass(t,"kint-parent")&&i.toggle(t,!1)):i.removeClass(o[r])},mktag:function(e){return"<"+e+">"},openInNewWindow:function(e){var t=window.open();t&&(t.document.open(),t.document.write(i.mktag("html")+i.mktag("head")+i.mktag("title")+"Kint ("+(new Date).toISOString()+")"+i.mktag("/title")+i.mktag('meta charset="utf-8"')+document.getElementsByClassName("kint-rich-script")[0].outerHTML+document.getElementsByClassName("kint-rich-style")[0].outerHTML+i.mktag("/head")+i.mktag("body")+'<input style="width: 100%" placeholder="Take some notes!"><div class="kint-rich">'+e.parentNode.outerHTML+"</div>"+i.mktag("/body")),t.document.close())},sortTable:function(e,a){var t=e.tBodies[0];[].slice.call(e.tBodies[0].rows).sort(function(e,t){if(e=e.cells[a].textContent.trim().toLocaleLowerCase(),t=t.cells[a].textContent.trim().toLocaleLowerCase(),isNaN(e)||isNaN(t)){if(isNaN(e)&&!isNaN(t))return 1;if(isNaN(t)&&!isNaN(e))return-1}else e=parseFloat(e),t=parseFloat(t);return e<t?-1:t<e?1:0}).forEach(function(e){t.appendChild(e)})},showAccessPath:function(e){for(var t=e.childNodes,a=0;a<t.length;a++)if(i.hasClass(t[a],"access-path"))return void(i.hasClass(t[a],"kint-show")?i.removeClass(t[a]):(i.addClass(t[a]),i.selectText(t[a])))},showSearchBox:function(e){var t=e.querySelector(".kint-search");t&&(i.hasClass(t)?(i.removeClass(t),i.removeClass(e.parentNode,"kint-search-root")):(i.addClass(e),i.addClass(t),t.focus(),t.select(),i.search(e.parentNode,t.value)))},search:function(e,t){var a=e.querySelectorAll(".kint-search-match");[].forEach.call(a,function(e){i.removeClass(e,"kint-search-match")}),i.removeClass(e,"kint-search-match"),t.length?(i.addClass(e,"kint-search-root"),i.findMatches(e,t)):i.removeClass(e,"kint-search-root")},findMatches:function(e,t){var a,o,r,s=e.cloneNode(!0);if(s.querySelectorAll(".access-path").forEach(function(e){e.remove()}),-1!=s.textContent.toUpperCase().indexOf(t.toUpperCase())){for(n in i.addClass(e,"kint-search-match"),e.childNodes)if("DD"==e.childNodes[n].tagName){a=e.childNodes[n];break}if(a)if([].forEach.call(a.childNodes,function(e){"DL"==e.tagName?i.findMatches(e,t):"UL"==e.tagName&&(i.hasClass(e,"kint-tabs")?o=e.childNodes:i.hasClass(e,"kint-tab-contents")&&(r=e.childNodes))}),o&&r&&o.length==r.length)for(var n=0;n<o.length;n++){var l=!1;-1!=o[n].textContent.toUpperCase().indexOf(t.toUpperCase())?l=!0:((s=r[n].cloneNode(!0)).querySelectorAll(".access-path").forEach(function(e){e.remove()}),-1!=s.textContent.toUpperCase().indexOf(t.toUpperCase())&&(l=!0)),l&&(i.addClass(o[n],"kint-search-match"),[].forEach.call(r[n].childNodes,function(e){"DL"==e.tagName&&i.findMatches(e,t)}))}}},getParentByClass:function(e,t){for(void 0===t&&(t="kint-rich");(e=e.parentNode)&&!i.hasClass(e,t););return e},getParentHeader:function(e,t){for(var a=e.nodeName.toLowerCase();"dd"!==a&&"dt"!==a&&i.getParentByClass(e);)a=(e=e.parentNode).nodeName.toLowerCase();return i.getParentByClass(e)?(e="dd"===a&&t?e.previousElementSibling:e)&&"dt"===e.nodeName.toLowerCase()&&i.hasClass(e,"kint-parent")?e:void 0:null},getChildren:function(e){for(;(e=e.nextElementSibling)&&"dd"!==e.nodeName.toLowerCase(););return e},isFolderOpen:function(){if(i.folder&&i.folder.querySelector("dd.kint-foldout"))return i.hasClass(i.folder.querySelector("dd.kint-foldout").previousSibling)},initLoad:function(){i.style=window.kintShared.dedupe("style.kint-rich-style",i.style),i.script=window.kintShared.dedupe("script.kint-rich-script",i.script),i.folder=window.kintShared.dedupe(".kint-rich.kint-folder",i.folder);var t,e=document.querySelectorAll("input.kint-search");[].forEach.call(e,function(t){function e(e){window.clearTimeout(a),t.value!==o&&(a=window.setTimeout(function(){o=t.value,i.search(t.parentNode.parentNode,o)},500))}var a=null,o=null;t.removeEventListener("keyup",e),t.addEventListener("keyup",e)}),i.folder&&(t=i.folder.querySelector("dd"),[].forEach.call(document.querySelectorAll(".kint-rich.kint-file"),function(e){e.parentNode!==i.folder&&t.appendChild(e)}),document.body.appendChild(i.folder),i.addClass(i.folder))},keyboardNav:{targets:[],target:0,active:!1,fetchTargets:function(){var e=i.keyboardNav.targets[i.keyboardNav.target];i.keyboardNav.targets=[],i.each(".kint-rich nav, .kint-tabs>li:not(.kint-active-tab)",function(e){i.isFolderOpen()&&!i.folder.contains(e)||0===e.offsetWidth&&0===e.offsetHeight||i.keyboardNav.targets.push(e)}),e&&-1!==i.keyboardNav.targets.indexOf(e)&&(i.keyboardNav.target=i.keyboardNav.targets.indexOf(e))},sync:function(e){var t=document.querySelector(".kint-focused");t&&i.removeClass(t,"kint-focused"),i.keyboardNav.active&&(t=i.keyboardNav.targets[i.keyboardNav.target],i.addClass(t,"kint-focused"),e||i.keyboardNav.scroll(t))},scroll:function(e){var t,a;e!==i.folder.querySelector("dt > nav")&&(a=(t=function(e){return e.offsetTop+(e.offsetParent?t(e.offsetParent):0)})(e),i.isFolderOpen()?(e=i.folder.querySelector("dd.kint-foldout")).scrollTo(0,a-e.clientHeight/2):window.scrollTo(0,a-window.innerHeight/2))},moveCursor:function(e){for(i.keyboardNav.target+=e;i.keyboardNav.target<0;)i.keyboardNav.target+=i.keyboardNav.targets.length;for(;i.keyboardNav.target>=i.keyboardNav.targets.length;)i.keyboardNav.target-=i.keyboardNav.targets.length;i.keyboardNav.sync()},setCursor:function(e){if(i.isFolderOpen()&&!i.folder.contains(e))return!1;i.keyboardNav.fetchTargets();for(var t=0;t<i.keyboardNav.targets.length;t++)if(e===i.keyboardNav.targets[t])return i.keyboardNav.target=t,!0;return!1}},mouseNav:{lastClickTarget:null,lastClickTimer:null,lastClickCount:0,renewLastClick:function(){window.clearTimeout(i.mouseNav.lastClickTimer),i.mouseNav.lastClickTimer=window.setTimeout(function(){i.mouseNav.lastClickTarget=null,i.mouseNav.lastClickTimer=null,i.mouseNav.lastClickCount=0},250)}},style:null,script:null,folder:null};return window.addEventListener("click",function(e){var t=e.target,a=t.nodeName.toLowerCase();if(i.mouseNav.lastClickTarget&&i.mouseNav.lastClickTimer&&i.mouseNav.lastClickCount)return t=i.mouseNav.lastClickTarget,void(1===i.mouseNav.lastClickCount?(i.toggleChildren(t.parentNode),i.keyboardNav.setCursor(t),i.keyboardNav.sync(!0),i.mouseNav.lastClickCount++,i.mouseNav.renewLastClick()):(i.toggleAll(t),i.keyboardNav.setCursor(t),i.keyboardNav.sync(!0),i.keyboardNav.scroll(t),window.clearTimeout(i.mouseNav.lastClickTimer),i.mouseNav.lastClickTarget=null,i.mouseNav.lastClickTarget=null,i.mouseNav.lastClickCount=0));if(i.getParentByClass(t)){if("dfn"===a)i.selectText(t);else if("th"===a)return void(e.ctrlKey||i.sortTable(t.parentNode.parentNode.parentNode,t.cellIndex));if((t=i.getParentHeader(t))&&(i.keyboardNav.setCursor(t.querySelector("nav")),i.keyboardNav.sync(!0)),t=e.target,"li"===a&&"kint-tabs"===t.parentNode.className)"kint-active-tab"!==t.className&&i.switchTab(t),(t=i.getParentHeader(t,!0))&&(i.keyboardNav.setCursor(t.querySelector("nav")),i.keyboardNav.sync(!0));else if("nav"===a)"footer"===t.parentNode.nodeName.toLowerCase()?(i.keyboardNav.setCursor(t),i.keyboardNav.sync(!0),t=t.parentNode,i.hasClass(t)?i.removeClass(t):i.addClass(t)):(i.toggle(t.parentNode),i.keyboardNav.fetchTargets(),i.mouseNav.lastClickCount=1,i.mouseNav.lastClickTarget=t,i.mouseNav.renewLastClick());else if(i.hasClass(t,"kint-popup-trigger")){var o=t.parentNode;if("footer"===o.nodeName.toLowerCase())o=o.previousSibling;else for(;o&&!i.hasClass(o,"kint-parent");)o=o.parentNode;i.openInNewWindow(o)}else i.hasClass(t,"kint-access-path-trigger")?i.showAccessPath(t.parentNode):i.hasClass(t,"kint-search-trigger")?i.showSearchBox(t.parentNode):i.hasClass(t,"kint-search")||("pre"===a&&3===e.detail?i.selectText(t):i.getParentByClass(t,"kint-source")&&3===e.detail?i.selectText(i.getParentByClass(t,"kint-source")):i.hasClass(t,"access-path")?i.selectText(t):"a"!==a&&(t=i.getParentHeader(t))&&(i.toggle(t),i.keyboardNav.fetchTargets()))}},!0),window.addEventListener("keydown",function(e){if(e.target===document.body&&!e.altKey&&!e.ctrlKey){if(68===e.keyCode){if(i.keyboardNav.active)i.keyboardNav.active=!1;else if(i.keyboardNav.active=!0,i.keyboardNav.fetchTargets(),0===i.keyboardNav.targets.length)return void(i.keyboardNav.active=!1);return i.keyboardNav.sync(),void e.preventDefault()}if(i.keyboardNav.active){if(9===e.keyCode)return i.keyboardNav.moveCursor(e.shiftKey?-1:1),void e.preventDefault();if(38===e.keyCode||75===e.keyCode)return i.keyboardNav.moveCursor(-1),void e.preventDefault();if(40===e.keyCode||74===e.keyCode)return i.keyboardNav.moveCursor(1),void e.preventDefault();var t,a,o=i.keyboardNav.targets[i.keyboardNav.target];if("li"===o.nodeName.toLowerCase()){if(32===e.keyCode||13===e.keyCode)return i.switchTab(o),i.keyboardNav.fetchTargets(),i.keyboardNav.sync(),void e.preventDefault();if(39===e.keyCode||76===e.keyCode)return i.keyboardNav.moveCursor(1),void e.preventDefault();if(37===e.keyCode||72===e.keyCode)return i.keyboardNav.moveCursor(-1),void e.preventDefault()}o=o.parentNode,65===e.keyCode?(i.showAccessPath(o),e.preventDefault()):"footer"===o.nodeName.toLowerCase()&&i.hasClass(o.parentNode,"kint-rich")?32===e.keyCode||13===e.keyCode?(i.hasClass(o)?i.removeClass(o):i.addClass(o),e.preventDefault()):37===e.keyCode||72===e.keyCode?(i.removeClass(o),e.preventDefault()):39!==e.keyCode&&76!==e.keyCode||(i.addClass(o),e.preventDefault()):32===e.keyCode||13===e.keyCode?(i.toggle(o),i.keyboardNav.fetchTargets(),e.preventDefault()):39!==e.keyCode&&76!==e.keyCode&&37!==e.keyCode&&72!==e.keyCode||(t=37===e.keyCode||72===e.keyCode,i.hasClass(o)?i.toggleChildren(o,t):!t||(a=i.getParentHeader(o.parentNode.parentNode,!0))&&(i.keyboardNav.setCursor((o=a).querySelector("nav")),i.keyboardNav.sync()),i.toggle(o,t),i.keyboardNav.fetchTargets(),e.preventDefault())}}},!0),i}()),window.kintShared.runOnce(window.kintRich.initLoad);
