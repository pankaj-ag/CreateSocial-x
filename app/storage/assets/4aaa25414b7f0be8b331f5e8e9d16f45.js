;

/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);
;!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=this;if(i.clk=r,"image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n={};n.fileapi=void 0!==e("<input type='file'/>").get(0).files,n.formdata=void 0!==window.FormData;var i=!!e.fn.prop;e.fn.attr2=function(){if(!i)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function r(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;o>a;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function o(a){for(var n=new FormData,i=0;i<a.length;i++)n.append(a[i].name,a[i].value);if(t.extraData){var o=r(t.extraData);for(i=0;i<o.length;i++)o[i]&&n.append(o[i][0],o[i][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),s.data=null;var c=s.beforeSend;return s.beforeSend=function(e,r){r.data=t.formData?t.formData:n,c&&c.call(this,e,r)},e.ajax(s)}function s(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(r){a("cannot get iframe.contentWindow document: "+r)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function o(){function t(){try{var e=n(g).readyState;a("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(r){a("Server abort: ",r," (",r.name,")"),s(k),j&&clearTimeout(j),j=void 0}}var r=f.attr2("target"),i=f.attr2("action"),o="multipart/form-data",c=f.attr("enctype")||f.attr("encoding")||o;w.setAttribute("target",p),(!u||/post/i.test(u))&&w.setAttribute("method","POST"),i!=m.url&&w.setAttribute("action",m.url),m.skipEncodingOverride||u&&!/post/i.test(u)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(j=setTimeout(function(){T=!0,s(D)},m.timeout));var l=[];try{if(m.extraData)for(var d in m.extraData)m.extraData.hasOwnProperty(d)&&l.push(e.isPlainObject(m.extraData[d])&&m.extraData[d].hasOwnProperty("name")&&m.extraData[d].hasOwnProperty("value")?e('<input type="hidden" name="'+m.extraData[d].name+'">').val(m.extraData[d].value).appendTo(w)[0]:e('<input type="hidden" name="'+d+'">').val(m.extraData[d]).appendTo(w)[0]);m.iframeTarget||v.appendTo("body"),g.attachEvent?g.attachEvent("onload",s):g.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(h){var x=document.createElement("form").submit;x.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",c),r?w.setAttribute("target",r):f.removeAttr("target"),e(l).remove()}}function s(t){if(!x.aborted&&!F){if(M=n(g),M||(a("cannot access response document"),t=k),t===D&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t==k&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(M&&M.location.href!=m.iframeSrc||T){g.detachEvent?g.detachEvent("onload",s):g.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"==m.dataType||M.XMLDocument||e.isXMLDoc(M);if(a("isXml="+o),!o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--O)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=M.body?M.body:M.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=M.XMLDocument?M.XMLDocument:M,o&&(m.dataType="xml"),x.getResponseHeader=function(e){var t={"content-type":m.dataType};return t[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(m.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||m.textarea){var f=M.getElementsByTagName("textarea")[0];if(f)x.responseText=f.value,x.status=Number(f.getAttribute("status"))||x.status,x.statusText=f.getAttribute("statusText")||x.statusText;else if(l){var p=M.getElementsByTagName("pre")[0],h=M.getElementsByTagName("body")[0];p?x.responseText=p.textContent?p.textContent:p.innerText:h&&(x.responseText=h.textContent?h.textContent:h.innerText)}}else"xml"==c&&!x.responseXML&&x.responseText&&(x.responseXML=X(x.responseText));try{E=_(x,c,m)}catch(y){i="parsererror",x.error=r=y||i}}catch(y){a("error caught: ",y),i="error",x.error=r=y||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(m.success&&m.success.call(m.context,E,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,m])):i&&(void 0===r&&(r=x.statusText),m.error&&m.error.call(m.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,m,r])),d&&e.event.trigger("ajaxComplete",[x,m]),d&&!--e.active&&e.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,x,i),F=!0,m.timeout&&clearTimeout(j),setTimeout(function(){m.iframeTarget?v.attr("src",m.iframeSrc):v.remove(),x.responseXML=null},100)}}}var c,l,m,d,p,v,g,x,y,b,T,j,w=f[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(l=0;l<h.length;l++)c=e(h[l]),i?c.prop("disabled",!1):c.removeAttr("disabled");if(m=e.extend(!0,{},e.ajaxSettings,t),m.context=m.context||m,p="jqFormIO"+(new Date).getTime(),m.iframeTarget?(v=e(m.iframeTarget),b=v.attr2("name"),b?p=b:v.attr2("name",p)):(v=e('<iframe name="'+p+'" src="'+m.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),g=v[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop")}catch(n){}v.attr("src",m.iframeSrc),x.error=r,m.error&&m.error.call(m.context,x,r,t),d&&e.event.trigger("ajaxError",[x,m,r]),m.complete&&m.complete.call(m.context,x,r)}},d=m.global,d&&0===e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,m]),m.beforeSend&&m.beforeSend.call(m.context,x,m)===!1)return m.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;y=w.clk,y&&(b=y.name,b&&!y.disabled&&(m.extraData=m.extraData||{},m.extraData[b]=y.value,"image"==y.type&&(m.extraData[b+".x"]=w.clk_x,m.extraData[b+".y"]=w.clk_y)));var D=1,k=2,A=e("meta[name=csrf-token]").attr("content"),L=e("meta[name=csrf-param]").attr("content");L&&A&&(m.extraData=m.extraData||{},m.extraData[L]=A),m.forceSync?o():setTimeout(o,10);var E,M,F,O=50,X=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},C=e.parseJSON||function(e){return window.eval("("+e+")")},_=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var u,c,l,f=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),u=t.type||this.attr2("method"),c=t.url||this.attr2("action"),l="string"==typeof c?e.trim(c):"",l=l||window.location.href||"",l&&(l=(l.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:l,success:e.ajaxSettings.success,type:u||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var d=t.traditional;void 0===d&&(d=e.ajaxSettings.traditional);var p,h=[],v=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,p=e.param(t.data,d)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(v,d);p&&(g=g?g+"&"+p:p),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var x=[];if(t.resetForm&&x.push(function(){f.resetForm()}),t.clearForm&&x.push(function(){f.clearForm(t.includeHidden)}),!t.dataType&&t.target){var y=t.success||function(){};x.push(function(r){var a=t.replaceTarget?"replaceWith":"html";e(t.target)[a](r).each(y,arguments)})}else t.success&&x.push(t.success);if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=x.length;o>i;i++)x[i].apply(n,[e,r,a||f,f])},t.error){var b=t.error;t.error=function(e,r,a){var n=t.context||this;b.apply(n,[e,r,a,f])}}if(t.complete){var T=t.complete;t.complete=function(e,r){var a=t.context||this;T.apply(a,[e,r,f])}}var j=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}),w=j.length>0,S="multipart/form-data",D=f.attr("enctype")==S||f.attr("encoding")==S,k=n.fileapi&&n.formdata;a("fileAPI :"+k);var A,L=(w||D)&&!k;t.iframe!==!1&&(t.iframe||L)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){A=s(v)}):A=s(v):A=(w||D)&&k?o(v):e.ajax(t),f.removeData("jqxhr").data("jqxhr",A);for(var E=0;E<h.length;E++)h[E]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n){if(n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",n,t).bind("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var a=[];if(0===this.length)return a;var i,o=this[0],s=this.attr("id"),u=t?o.getElementsByTagName("*"):o.elements;if(u&&!/MSIE [678]/.test(navigator.userAgent)&&(u=e(u).get()),s&&(i=e(':input[form="'+s+'"]').get(),i.length&&(u=(u||[]).concat(i))),!u||!u.length)return a;var c,l,f,m,d,p,h;for(c=0,p=u.length;p>c;c++)if(d=u[c],f=d.name,f&&!d.disabled)if(t&&o.clk&&"image"==d.type)o.clk==d&&(a.push({name:f,value:e(d).val(),type:d.type}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}));else if(m=e.fieldValue(d,!0),m&&m.constructor==Array)for(r&&r.push(d),l=0,h=m.length;h>l;l++)a.push({name:f,value:m[l]});else if(n.fileapi&&"file"==d.type){r&&r.push(d);var v=d.files;if(v.length)for(l=0;l<v.length;l++)a.push({name:f,value:v[l],type:d.type});else a.push({name:f,value:"",type:d.type})}else null!==m&&"undefined"!=typeof m&&(r&&r.push(d),a.push({name:f,value:m,type:d.type,required:d.required}));if(!t&&o.clk){var g=e(o.clk),x=g[0];f=x.name,f&&!x.disabled&&"image"==x.type&&(a.push({name:f,value:g.val()}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}))}return a},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;o>i;i++)r.push({name:a,value:n[i]});else null!==n&&"undefined"!=typeof n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;n>a;a++){var i=this[a],o=e.fieldValue(i,t);null===o||"undefined"==typeof o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(0>o)return null;for(var s=[],u=t.options,c="select-one"==n,l=c?o+1:u.length,f=c?o:0;l>f;f++){var m=u[f];if(m.selected){var d=m.value;if(d||(d=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),c)return d;s.push(d)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"==n?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==n?this.selectedIndex=-1:"file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});
;

if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]');if(a.length){var b=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");"radio"===b.prop("type")&&a.find(".active").removeClass("active")}this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown"),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("dropdown");d||c.data("dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach()}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover%20requires%20tooltip.html");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);


/*
 * Project: Twitter Bootstrap Hover Dropdown
 * Author: Cameron Spear
 * Contributors: Mattia Larentis
 *
 * Dependencies: Bootstrap's Dropdown plugin, jQuery
 *
 * A simple plugin to enable Bootstrap dropdowns to active on hover and provide a nice user experience.
 *
 * License: MIT
 *
 * http://cameronspear.com/blog/twitter-bootstrap-dropdown-on-hover-plugin/
 */(function(e,t,n){if("ontouchstart"in document)return;var r=e();e.fn.dropdownHover=function(n){r=r.add(this.parent());return this.each(function(){var i=e(this),s=i.parent(),o={delay:500,instantlyCloseOthers:!0},u={delay:e(this).data("delay"),instantlyCloseOthers:e(this).data("close-others")},a=e.extend(!0,{},o,n,u),f;s.hover(function(n){if(!s.hasClass("open")&&!i.is(n.target))return!0;a.instantlyCloseOthers===!0&&r.removeClass("open");t.clearTimeout(f);s.addClass("open");s.trigger(e.Event("show.bs.dropdown"))},function(){f=t.setTimeout(function(){s.removeClass("open");s.trigger("hide.bs.dropdown")},a.delay)});i.hover(function(){a.instantlyCloseOthers===!0&&r.removeClass("open");t.clearTimeout(f);s.addClass("open");s.trigger(e.Event("show.bs.dropdown"))});s.find(".dropdown-submenu").each(function(){var n=e(this),r;n.hover(function(){t.clearTimeout(r);n.children(".dropdown-menu").show();n.siblings().children(".dropdown-menu").hide()},function(){var e=n.children(".dropdown-menu");r=t.setTimeout(function(){e.hide()},a.delay)})})})};e(document).ready(function(){e('[data-hover="dropdown"]').dropdownHover()})})(jQuery,this);;

/*!
	Colorbox v1.4.36 - 2014-02-01
	jQuery lightbox and modal window plugin
	(c) 2014 Jack Moore - http://www.jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(e,t,i){function o(i,o,n){var r=t.createElement(i);return o&&(r.id=Z+o),n&&(r.style.cssText=n),e(r)}function n(){return i.innerHeight?i.innerHeight:e(i).height()}function r(e){var t=k.length,i=(z+e)%t;return 0>i?t+i:i}function h(e,t){return Math.round((/%/.test(e)?("x"===t?E.width():n())/100:1)*parseInt(e,10))}function l(e,t){return e.photo||e.photoRegex.test(t)}function s(e,t){return e.retinaUrl&&i.devicePixelRatio>1?t.replace(e.photoRegex,e.retinaSuffix):t}function a(e){"contains"in g[0]&&!g[0].contains(e.target)&&(e.stopPropagation(),g.focus())}function d(){var t,i=e.data(N,Y);null==i?(B=e.extend({},X),console&&console.log&&console.log("Error: cboxElement missing settings object")):B=e.extend({},i);for(t in B)e.isFunction(B[t])&&"on"!==t.slice(0,2)&&(B[t]=B[t].call(N));B.rel=B.rel||N.rel||e(N).data("rel")||"nofollow",B.href=B.href||e(N).attr("href"),B.title=B.title||N.title,"string"==typeof B.href&&(B.href=e.trim(B.href))}function c(i,o){e(t).trigger(i),lt.triggerHandler(i),e.isFunction(o)&&o.call(N)}function u(i){q||(N=i,d(),k=e(N),z=0,"nofollow"!==B.rel&&(k=e("."+et).filter(function(){var t,i=e.data(this,Y);return i&&(t=e(this).data("rel")||i.rel||this.rel),t===B.rel}),z=k.index(N),-1===z&&(k=k.add(N),z=k.length-1)),w.css({opacity:parseFloat(B.opacity),cursor:B.overlayClose?"pointer":"auto",visibility:"visible"}).show(),J&&g.add(w).removeClass(J),B.className&&g.add(w).addClass(B.className),J=B.className,B.closeButton?K.html(B.close).appendTo(y):K.appendTo("<div/>"),U||(U=$=!0,g.css({visibility:"hidden",display:"block"}),H=o(st,"LoadedContent","width:0; height:0; overflow:hidden"),y.css({width:"",height:""}).append(H),O=x.height()+C.height()+y.outerHeight(!0)-y.height(),_=b.width()+T.width()+y.outerWidth(!0)-y.width(),D=H.outerHeight(!0),A=H.outerWidth(!0),B.w=h(B.initialWidth,"x"),B.h=h(B.initialHeight,"y"),H.css({width:"",height:B.h}),Q.position(),c(tt,B.onOpen),P.add(L).hide(),g.focus(),B.trapFocus&&t.addEventListener&&(t.addEventListener("focus",a,!0),lt.one(rt,function(){t.removeEventListener("focus",a,!0)})),B.returnFocus&&lt.one(rt,function(){e(N).focus()})),m())}function f(){!g&&t.body&&(V=!1,E=e(i),g=o(st).attr({id:Y,"class":e.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),w=o(st,"Overlay").hide(),F=e([o(st,"LoadingOverlay")[0],o(st,"LoadingGraphic")[0]]),v=o(st,"Wrapper"),y=o(st,"Content").append(L=o(st,"Title"),S=o(st,"Current"),I=e('<button type="button"/>').attr({id:Z+"Previous"}),R=e('<button type="button"/>').attr({id:Z+"Next"}),M=o("button","Slideshow"),F),K=e('<button type="button"/>').attr({id:Z+"Close"}),v.append(o(st).append(o(st,"TopLeft"),x=o(st,"TopCenter"),o(st,"TopRight")),o(st,!1,"clear:left").append(b=o(st,"MiddleLeft"),y,T=o(st,"MiddleRight")),o(st,!1,"clear:left").append(o(st,"BottomLeft"),C=o(st,"BottomCenter"),o(st,"BottomRight"))).find("div div").css({"float":"left"}),W=o(st,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),P=R.add(I).add(S).add(M),e(t.body).append(w,g.append(v,W)))}function p(){function i(e){e.which>1||e.shiftKey||e.altKey||e.metaKey||e.ctrlKey||(e.preventDefault(),u(this))}return g?(V||(V=!0,R.click(function(){Q.next()}),I.click(function(){Q.prev()}),K.click(function(){Q.close()}),w.click(function(){B.overlayClose&&Q.close()}),e(t).bind("keydown."+Z,function(e){var t=e.keyCode;U&&B.escKey&&27===t&&(e.preventDefault(),Q.close()),U&&B.arrowKey&&k[1]&&!e.altKey&&(37===t?(e.preventDefault(),I.click()):39===t&&(e.preventDefault(),R.click()))}),e.isFunction(e.fn.on)?e(t).on("click."+Z,"."+et,i):e("."+et).live("click."+Z,i)),!0):!1}function m(){var n,r,a,u=Q.prep,f=++at;$=!0,j=!1,N=k[z],d(),c(ht),c(it,B.onLoad),B.h=B.height?h(B.height,"y")-D-O:B.innerHeight&&h(B.innerHeight,"y"),B.w=B.width?h(B.width,"x")-A-_:B.innerWidth&&h(B.innerWidth,"x"),B.mw=B.w,B.mh=B.h,B.maxWidth&&(B.mw=h(B.maxWidth,"x")-A-_,B.mw=B.w&&B.w<B.mw?B.w:B.mw),B.maxHeight&&(B.mh=h(B.maxHeight,"y")-D-O,B.mh=B.h&&B.h<B.mh?B.h:B.mh),n=B.href,G=setTimeout(function(){F.show()},100),B.inline?(a=o(st).hide().insertBefore(e(n)[0]),lt.one(ht,function(){a.replaceWith(H.children())}),u(e(n))):B.iframe?u(" "):B.html?u(B.html):l(B,n)?(n=s(B,n),j=t.createElement("img"),e(j).addClass(Z+"Photo").bind("error",function(){B.title=!1,u(o(st,"Error").html(B.imgError))}).one("load",function(){var t;f===at&&(e.each(["alt","longdesc","aria-describedby"],function(t,i){var o=e(N).attr(i)||e(N).attr("data-"+i);o&&j.setAttribute(i,o)}),B.retinaImage&&i.devicePixelRatio>1&&(j.height=j.height/i.devicePixelRatio,j.width=j.width/i.devicePixelRatio),B.scalePhotos&&(r=function(){j.height-=j.height*t,j.width-=j.width*t},B.mw&&j.width>B.mw&&(t=(j.width-B.mw)/j.width,r()),B.mh&&j.height>B.mh&&(t=(j.height-B.mh)/j.height,r())),B.h&&(j.style.marginTop=Math.max(B.mh-j.height,0)/2+"px"),k[1]&&(B.loop||k[z+1])&&(j.style.cursor="pointer",j.onclick=function(){Q.next()}),j.style.width=j.width+"px",j.style.height=j.height+"px",setTimeout(function(){u(j)},1))}),setTimeout(function(){j.src=n},1)):n&&W.load(n,B.data,function(t,i){f===at&&u("error"===i?o(st,"Error").html(B.xhrError):e(this).contents())})}var w,g,v,y,x,b,T,C,k,E,H,W,F,L,S,M,R,I,K,P,B,O,_,D,A,N,z,j,U,$,q,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1},Y="colorbox",Z="cbox",et=Z+"Element",tt=Z+"_open",it=Z+"_load",ot=Z+"_complete",nt=Z+"_cleanup",rt=Z+"_closed",ht=Z+"_purge",lt=e("<a/>"),st="div",at=0,dt={},ct=function(){function e(){clearTimeout(h)}function t(){(B.loop||k[z+1])&&(e(),h=setTimeout(Q.next,B.slideshowSpeed))}function i(){M.html(B.slideshowStop).unbind(s).one(s,o),lt.bind(ot,t).bind(it,e),g.removeClass(l+"off").addClass(l+"on")}function o(){e(),lt.unbind(ot,t).unbind(it,e),M.html(B.slideshowStart).unbind(s).one(s,function(){Q.next(),i()}),g.removeClass(l+"on").addClass(l+"off")}function n(){r=!1,M.hide(),e(),lt.unbind(ot,t).unbind(it,e),g.removeClass(l+"off "+l+"on")}var r,h,l=Z+"Slideshow_",s="click."+Z;return function(){r?B.slideshow||(lt.unbind(nt,n),n()):B.slideshow&&k[1]&&(r=!0,lt.one(nt,n),B.slideshowAuto?i():o(),M.show())}}();e.colorbox||(e(f),Q=e.fn[Y]=e[Y]=function(t,i){var o=this;if(t=t||{},f(),p()){if(e.isFunction(o))o=e("<a/>"),t.open=!0;else if(!o[0])return o;i&&(t.onComplete=i),o.each(function(){e.data(this,Y,e.extend({},e.data(this,Y)||X,t))}).addClass(et),(e.isFunction(t.open)&&t.open.call(o)||t.open)&&u(o[0])}return o},Q.position=function(t,i){function o(){x[0].style.width=C[0].style.width=y[0].style.width=parseInt(g[0].style.width,10)-_+"px",y[0].style.height=b[0].style.height=T[0].style.height=parseInt(g[0].style.height,10)-O+"px"}var r,l,s,a=0,d=0,c=g.offset();if(E.unbind("resize."+Z),g.css({top:-9e4,left:-9e4}),l=E.scrollTop(),s=E.scrollLeft(),B.fixed?(c.top-=l,c.left-=s,g.css({position:"fixed"})):(a=l,d=s,g.css({position:"absolute"})),d+=B.right!==!1?Math.max(E.width()-B.w-A-_-h(B.right,"x"),0):B.left!==!1?h(B.left,"x"):Math.round(Math.max(E.width()-B.w-A-_,0)/2),a+=B.bottom!==!1?Math.max(n()-B.h-D-O-h(B.bottom,"y"),0):B.top!==!1?h(B.top,"y"):Math.round(Math.max(n()-B.h-D-O,0)/2),g.css({top:c.top,left:c.left,visibility:"visible"}),v[0].style.width=v[0].style.height="9999px",r={width:B.w+A+_,height:B.h+D+O,top:a,left:d},t){var u=0;e.each(r,function(e){return r[e]!==dt[e]?(u=t,void 0):void 0}),t=u}dt=r,t||g.css(r),g.dequeue().animate(r,{duration:t||0,complete:function(){o(),$=!1,v[0].style.width=B.w+A+_+"px",v[0].style.height=B.h+D+O+"px",B.reposition&&setTimeout(function(){E.bind("resize."+Z,Q.position)},1),i&&i()},step:o})},Q.resize=function(e){var t;U&&(e=e||{},e.width&&(B.w=h(e.width,"x")-A-_),e.innerWidth&&(B.w=h(e.innerWidth,"x")),H.css({width:B.w}),e.height&&(B.h=h(e.height,"y")-D-O),e.innerHeight&&(B.h=h(e.innerHeight,"y")),e.innerHeight||e.height||(t=H.scrollTop(),H.css({height:"auto"}),B.h=H.height()),H.css({height:B.h}),t&&H.scrollTop(t),Q.position("none"===B.transition?0:B.speed))},Q.prep=function(i){function n(){return B.w=B.w||H.width(),B.w=B.mw&&B.mw<B.w?B.mw:B.w,B.w}function h(){return B.h=B.h||H.height(),B.h=B.mh&&B.mh<B.h?B.mh:B.h,B.h}if(U){var a,d="none"===B.transition?0:B.speed;H.empty().remove(),H=o(st,"LoadedContent").append(i),H.hide().appendTo(W.show()).css({width:n(),overflow:B.scrolling?"auto":"hidden"}).css({height:h()}).prependTo(y),W.hide(),e(j).css({"float":"none"}),a=function(){function i(){e.support.opacity===!1&&g[0].style.removeAttribute("filter")}var n,h,a=k.length,u="frameBorder",f="allowTransparency";U&&(h=function(){clearTimeout(G),F.hide(),c(ot,B.onComplete)},L.html(B.title).add(H).show(),a>1?("string"==typeof B.current&&S.html(B.current.replace("{current}",z+1).replace("{total}",a)).show(),R[B.loop||a-1>z?"show":"hide"]().html(B.next),I[B.loop||z?"show":"hide"]().html(B.previous),ct(),B.preloading&&e.each([r(-1),r(1)],function(){var i,o,n=k[this],r=e.data(n,Y);r&&r.href?(i=r.href,e.isFunction(i)&&(i=i.call(n))):i=e(n).attr("href"),i&&l(r,i)&&(i=s(r,i),o=t.createElement("img"),o.src=i)})):P.hide(),B.iframe?(n=o("iframe")[0],u in n&&(n[u]=0),f in n&&(n[f]="true"),B.scrolling||(n.scrolling="no"),e(n).attr({src:B.href,name:(new Date).getTime(),"class":Z+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",h).appendTo(H),lt.one(ht,function(){n.src="//about:blank"}),B.fastIframe&&e(n).trigger("load")):h(),"fade"===B.transition?g.fadeTo(d,1,i):i())},"fade"===B.transition?g.fadeTo(d,0,function(){Q.position(0,a)}):Q.position(d,a)}},Q.next=function(){!$&&k[1]&&(B.loop||k[z+1])&&(z=r(1),u(k[z]))},Q.prev=function(){!$&&k[1]&&(B.loop||z)&&(z=r(-1),u(k[z]))},Q.close=function(){U&&!q&&(q=!0,U=!1,c(nt,B.onCleanup),E.unbind("."+Z),w.fadeTo(B.fadeOut||0,0),g.stop().fadeTo(B.fadeOut||0,0,function(){g.add(w).css({opacity:1,cursor:"auto"}).hide(),c(ht),H.empty().remove(),setTimeout(function(){q=!1,c(rt,B.onClosed)},1)}))},Q.remove=function(){g&&(g.stop(),e.colorbox.close(),g.stop().remove(),w.remove(),q=!1,g=null,e("."+et).removeData(Y).removeClass(et),e(t).unbind("click."+Z))},Q.element=function(){return e(N)},Q.settings=X)})(jQuery,document,window);;

/*! pace 0.4.17 */
(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V=[].slice,W={}.hasOwnProperty,X=function(a,b){function c(){this.constructor=a}for(var d in b)W.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},Y=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};for(t={catchupTime:500,initialRate:.03,minTime:500,ghostTime:500,maxProgressPerFrame:10,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!1}},B=function(){var a;return null!=(a="undefined"!=typeof performance&&null!==performance?"function"==typeof performance.now?performance.now():void 0:void 0)?a:+new Date},D=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,s=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==D&&(D=function(a){return setTimeout(a,50)},s=function(a){return clearTimeout(a)}),F=function(a){var b,c;return b=B(),(c=function(){var d;return d=B()-b,d>=33?(b=B(),a(d,function(){return D(c)})):setTimeout(c,33-d)})()},E=function(){var a,b,c;return c=arguments[0],b=arguments[1],a=3<=arguments.length?V.call(arguments,2):[],"function"==typeof c[b]?c[b].apply(c,a):c[b]},u=function(){var a,b,c,d,e,f,g;for(b=arguments[0],d=2<=arguments.length?V.call(arguments,1):[],f=0,g=d.length;g>f;f++)if(c=d[f])for(a in c)W.call(c,a)&&(e=c[a],null!=b[a]&&"object"==typeof b[a]&&null!=e&&"object"==typeof e?u(b[a],e):b[a]=e);return b},p=function(a){var b,c,d,e,f;for(c=b=0,e=0,f=a.length;f>e;e++)d=a[e],c+=Math.abs(d),b++;return c/b},w=function(a,b){var c,d,e;if(null==a&&(a="options"),null==b&&(b=!0),e=document.querySelector("[data-pace-"+a+"]")){if(c=e.getAttribute("data-pace-"+a),!b)return c;try{return JSON.parse(c)}catch(f){return d=f,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",d):void 0}}},g=function(){function a(){}return a.prototype.on=function(a,b,c,d){var e;return null==d&&(d=!1),null==this.bindings&&(this.bindings={}),null==(e=this.bindings)[a]&&(e[a]=[]),this.bindings[a].push({handler:b,ctx:c,once:d})},a.prototype.once=function(a,b,c){return this.on(a,b,c,!0)},a.prototype.off=function(a,b){var c,d,e;if(null!=(null!=(d=this.bindings)?d[a]:void 0)){if(null==b)return delete this.bindings[a];for(c=0,e=[];c<this.bindings[a].length;)this.bindings[a][c].handler===b?e.push(this.bindings[a].splice(c,1)):e.push(c++);return e}},a.prototype.trigger=function(){var a,b,c,d,e,f,g,h,i;if(c=arguments[0],a=2<=arguments.length?V.call(arguments,1):[],null!=(g=this.bindings)?g[c]:void 0){for(e=0,i=[];e<this.bindings[c].length;)h=this.bindings[c][e],d=h.handler,b=h.ctx,f=h.once,d.apply(null!=b?b:this,a),f?i.push(this.bindings[c].splice(e,1)):i.push(e++);return i}},a}(),null==window.Pace&&(window.Pace={}),u(Pace,g.prototype),C=Pace.options=u({},t,window.paceOptions,w()),S=["ajax","document","eventLag","elements"],O=0,Q=S.length;Q>O;O++)I=S[O],C[I]===!0&&(C[I]=t[I]);i=function(a){function b(){return T=b.__super__.constructor.apply(this,arguments)}return X(b,a),b}(Error),b=function(){function a(){this.progress=0}return a.prototype.getElement=function(){var a;if(null==this.el){if(a=document.querySelector(C.target),!a)throw new i;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace("pace-done",""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=a.firstChild?a.insertBefore(this.el,a.firstChild):a.appendChild(this.el)}return this.el},a.prototype.finish=function(){var a;return a=this.getElement(),a.className=a.className.replace("pace-active",""),a.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},a.prototype.update=function(a){return this.progress=a,this.render()},a.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(a){i=a}return this.el=void 0},a.prototype.render=function(){var a,b;return null==document.querySelector(C.target)?!1:(a=this.getElement(),a.children[0].style.width=""+this.progress+"%",(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(a.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?b="99":(b=this.progress<10?"0":"",b+=0|this.progress),a.children[0].setAttribute("data-progress",""+b)),this.lastRenderedProgress=this.progress)},a.prototype.done=function(){return this.progress>=100},a}(),h=function(){function a(){this.bindings={}}return a.prototype.trigger=function(a,b){var c,d,e,f,g;if(null!=this.bindings[a]){for(f=this.bindings[a],g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.call(this,b));return g}},a.prototype.on=function(a,b){var c;return null==(c=this.bindings)[a]&&(c[a]=[]),this.bindings[a].push(b)},a}(),N=window.XMLHttpRequest,M=window.XDomainRequest,L=window.WebSocket,v=function(a,b){var c,d,e,f;f=[];for(d in b.prototype)try{e=b.prototype[d],null==a[d]&&"function"!=typeof e?f.push(a[d]=e):f.push(void 0)}catch(g){c=g}return f},z=[],Pace.ignore=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?V.call(arguments,1):[],z.unshift("ignore"),c=b.apply(null,a),z.shift(),c},Pace.track=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?V.call(arguments,1):[],z.unshift("track"),c=b.apply(null,a),z.shift(),c},H=function(a){var b;if(null==a&&(a="GET"),"track"===z[0])return"force";if(!z.length&&C.ajax){if("socket"===a&&C.ajax.trackWebSockets)return!0;if(b=a.toUpperCase(),Y.call(C.ajax.trackMethods,b)>=0)return!0}return!1},j=function(a){function b(){var a,c=this;b.__super__.constructor.apply(this,arguments),a=function(a){var b;return b=a.open,a.open=function(d,e){return H(d)&&c.trigger("request",{type:d,url:e,request:a}),b.apply(a,arguments)}},window.XMLHttpRequest=function(b){var c;return c=new N(b),a(c),c},v(window.XMLHttpRequest,N),null!=M&&(window.XDomainRequest=function(){var b;return b=new M,a(b),b},v(window.XDomainRequest,M)),null!=L&&C.ajax.trackWebSockets&&(window.WebSocket=function(a,b){var d;return d=new L(a,b),H("socket")&&c.trigger("request",{type:"socket",url:a,protocols:b,request:d}),d},v(window.WebSocket,L))}return X(b,a),b}(h),P=null,x=function(){return null==P&&(P=new j),P},x().on("request",function(b){var c,d,e,f;return f=b.type,e=b.request,Pace.running||C.restartOnRequestAfter===!1&&"force"!==H(f)?void 0:(d=arguments,c=C.restartOnRequestAfter||0,"boolean"==typeof c&&(c=0),setTimeout(function(){var b,c,g,h,i,j;if(b="socket"===f?e.readyState<2:0<(h=e.readyState)&&4>h){for(Pace.restart(),i=Pace.sources,j=[],c=0,g=i.length;g>c;c++){if(I=i[c],I instanceof a){I.watch.apply(I,d);break}j.push(void 0)}return j}},c))}),a=function(){function a(){var a=this;this.elements=[],x().on("request",function(){return a.watch.apply(a,arguments)})}return a.prototype.watch=function(a){var b,c,d;return d=a.type,b=a.request,c="socket"===d?new m(b):new n(b),this.elements.push(c)},a}(),n=function(){function a(a){var b,c,d,e,f,g,h=this;if(this.progress=0,null!=window.ProgressEvent)for(c=null,a.addEventListener("progress",function(a){return h.progress=a.lengthComputable?100*a.loaded/a.total:h.progress+(100-h.progress)/2}),g=["load","abort","timeout","error"],d=0,e=g.length;e>d;d++)b=g[d],a.addEventListener(b,function(){return h.progress=100});else f=a.onreadystatechange,a.onreadystatechange=function(){var b;return 0===(b=a.readyState)||4===b?h.progress=100:3===a.readyState&&(h.progress=50),"function"==typeof f?f.apply(null,arguments):void 0}}return a}(),m=function(){function a(a){var b,c,d,e,f=this;for(this.progress=0,e=["error","open"],c=0,d=e.length;d>c;c++)b=e[c],a.addEventListener(b,function(){return f.progress=100})}return a}(),d=function(){function a(a){var b,c,d,f;for(null==a&&(a={}),this.elements=[],null==a.selectors&&(a.selectors=[]),f=a.selectors,c=0,d=f.length;d>c;c++)b=f[c],this.elements.push(new e(b))}return a}(),e=function(){function a(a){this.selector=a,this.progress=0,this.check()}return a.prototype.check=function(){var a=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return a.check()},C.elements.checkInterval)},a.prototype.done=function(){return this.progress=100},a}(),c=function(){function a(){var a,b,c=this;this.progress=null!=(b=this.states[document.readyState])?b:100,a=document.onreadystatechange,document.onreadystatechange=function(){return null!=c.states[document.readyState]&&(c.progress=c.states[document.readyState]),"function"==typeof a?a.apply(null,arguments):void 0}}return a.prototype.states={loading:0,interactive:50,complete:100},a}(),f=function(){function a(){var a,b,c,d,e,f=this;this.progress=0,a=0,e=[],d=0,c=B(),b=setInterval(function(){var g;return g=B()-c-50,c=B(),e.push(g),e.length>C.eventLag.sampleCount&&e.shift(),a=p(e),++d>=C.eventLag.minSamples&&a<C.eventLag.lagThreshold?(f.progress=100,clearInterval(b)):f.progress=100*(3/(a+3))},50)}return a}(),l=function(){function a(a){this.source=a,this.last=this.sinceLastUpdate=0,this.rate=C.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=E(this.source,"progress"))}return a.prototype.tick=function(a,b){var c;return null==b&&(b=E(this.source,"progress")),b>=100&&(this.done=!0),b===this.last?this.sinceLastUpdate+=a:(this.sinceLastUpdate&&(this.rate=(b-this.last)/this.sinceLastUpdate),this.catchup=(b-this.progress)/C.catchupTime,this.sinceLastUpdate=0,this.last=b),b>this.progress&&(this.progress+=this.catchup*a),c=1-Math.pow(this.progress/100,C.easeFactor),this.progress+=c*this.rate*a,this.progress=Math.min(this.lastProgress+C.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},a}(),J=null,G=null,q=null,K=null,o=null,r=null,Pace.running=!1,y=function(){return C.restartOnPushState?Pace.restart():void 0},null!=window.history.pushState&&(R=window.history.pushState,window.history.pushState=function(){return y(),R.apply(window.history,arguments)}),null!=window.history.replaceState&&(U=window.history.replaceState,window.history.replaceState=function(){return y(),U.apply(window.history,arguments)}),k={ajax:a,elements:d,document:c,eventLag:f},(A=function(){var a,c,d,e,f,g,h,i;for(Pace.sources=J=[],g=["ajax","elements","document","eventLag"],c=0,e=g.length;e>c;c++)a=g[c],C[a]!==!1&&J.push(new k[a](C[a]));for(i=null!=(h=C.extraSources)?h:[],d=0,f=i.length;f>d;d++)I=i[d],J.push(new I(C));return Pace.bar=q=new b,G=[],K=new l})(),Pace.stop=function(){return Pace.trigger("stop"),Pace.running=!1,q.destroy(),r=!0,null!=o&&("function"==typeof s&&s(o),o=null),A()},Pace.restart=function(){return Pace.trigger("restart"),Pace.stop(),Pace.start()},Pace.go=function(){return Pace.running=!0,q.render(),r=!1,o=F(function(a,b){var c,d,e,f,g,h,i,j,k,m,n,o,p,s,t,u,v;for(j=100-q.progress,d=o=0,e=!0,h=p=0,t=J.length;t>p;h=++p)for(I=J[h],m=null!=G[h]?G[h]:G[h]=[],g=null!=(v=I.elements)?v:[I],i=s=0,u=g.length;u>s;i=++s)f=g[i],k=null!=m[i]?m[i]:m[i]=new l(f),e&=k.done,k.done||(d++,o+=k.tick(a));return c=o/d,q.update(K.tick(a,c)),n=B(),q.done()||e||r?(q.update(100),Pace.trigger("done"),setTimeout(function(){return q.finish(),Pace.running=!1,Pace.trigger("hide")},Math.max(C.ghostTime,Math.min(C.minTime,B()-n)))):b()})},Pace.start=function(a){u(C,a),Pace.running=!0;try{q.render()}catch(b){i=b}return document.querySelector(".pace")?(Pace.trigger("start"),Pace.go()):setTimeout(Pace.start,50)},"function"==typeof define&&define.amd?define(function(){return Pace}):"object"==typeof exports?module.exports=Pace:C.startOnPageLoad&&Pace.start()}).call(this);;
/**
 *
 * Color picker
 * Author: Stefan Petre www.eyecon.ro
 *
 * Dual licensed under the MIT and GPL licenses
 *
 */
(function ($) {
	var ColorPicker = function () {
		var
			ids = {},
			inAction,
			charMin = 65,
			visible,
			tpl = '<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>',
			defaults = {
				eventName: 'click',
				onShow: function () {},
				onBeforeShow: function(){},
				onHide: function () {},
				onChange: function () {},
				onSubmit: function () {},
				color: 'ff0000',
				livePreview: true,
				flat: false
			},
			fillRGBFields = function  (hsb, cal) {
				var rgb = HSBToRGB(hsb);
				$(cal).data('colorpicker').fields
					.eq(1).val(rgb.r).end()
					.eq(2).val(rgb.g).end()
					.eq(3).val(rgb.b).end();
			},
			fillHSBFields = function  (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(4).val(hsb.h).end()
					.eq(5).val(hsb.s).end()
					.eq(6).val(hsb.b).end();
			},
			fillHexFields = function (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(0).val(HSBToHex(hsb)).end();
			},
			setSelector = function (hsb, cal) {
				$(cal).data('colorpicker').selector.css('backgroundColor', '#' + HSBToHex({h: hsb.h, s: 100, b: 100}));
				$(cal).data('colorpicker').selectorIndic.css({
					left: parseInt(150 * hsb.s/100, 10),
					top: parseInt(150 * (100-hsb.b)/100, 10)
				});
			},
			setHue = function (hsb, cal) {
				$(cal).data('colorpicker').hue.css('top', parseInt(150 - 150 * hsb.h/360, 10));
			},
			setCurrentColor = function (hsb, cal) {
				$(cal).data('colorpicker').currentColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			setNewColor = function (hsb, cal) {
				$(cal).data('colorpicker').newColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			keyDown = function (ev) {
				var pressedKey = ev.charCode || ev.keyCode || -1;
				if ((pressedKey > charMin && pressedKey <= 90) || pressedKey == 32) {
					return false;
				}
				var cal = $(this).parent().parent();
				if (cal.data('colorpicker').livePreview === true) {
					change.apply(this);
				}
			},
			change = function (ev) {
				var cal = $(this).parent().parent(), col;
				if (this.parentNode.className.indexOf('_hex') > 0) {
					cal.data('colorpicker').color = col = HexToHSB(fixHex(this.value));
				} else if (this.parentNode.className.indexOf('_hsb') > 0) {
					cal.data('colorpicker').color = col = fixHSB({
						h: parseInt(cal.data('colorpicker').fields.eq(4).val(), 10),
						s: parseInt(cal.data('colorpicker').fields.eq(5).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(6).val(), 10)
					});
				} else {
					cal.data('colorpicker').color = col = RGBToHSB(fixRGB({
						r: parseInt(cal.data('colorpicker').fields.eq(1).val(), 10),
						g: parseInt(cal.data('colorpicker').fields.eq(2).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(3).val(), 10)
					}));
				}
				if (ev) {
					fillRGBFields(col, cal.get(0));
					fillHexFields(col, cal.get(0));
					fillHSBFields(col, cal.get(0));
				}
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
				cal.data('colorpicker').onChange.apply(cal, [col, HSBToHex(col), HSBToRGB(col)]);
			},
			blur = function (ev) {
				var cal = $(this).parent().parent();
				cal.data('colorpicker').fields.parent().removeClass('colorpicker_focus');
			},
			focus = function () {
				charMin = this.parentNode.className.indexOf('_hex') > 0 ? 70 : 65;
				$(this).parent().parent().data('colorpicker').fields.parent().removeClass('colorpicker_focus');
				$(this).parent().addClass('colorpicker_focus');
			},
			downIncrement = function (ev) {
				var field = $(this).parent().find('input').focus();
				var current = {
					el: $(this).parent().addClass('colorpicker_slider'),
					max: this.parentNode.className.indexOf('_hsb_h') > 0 ? 360 : (this.parentNode.className.indexOf('_hsb') > 0 ? 100 : 255),
					y: ev.pageY,
					field: field,
					val: parseInt(field.val(), 10),
					preview: $(this).parent().parent().data('colorpicker').livePreview					
				};
				$(document).bind('mouseup', current, upIncrement);
				$(document).bind('mousemove', current, moveIncrement);
			},
			moveIncrement = function (ev) {
				ev.data.field.val(Math.max(0, Math.min(ev.data.max, parseInt(ev.data.val + ev.pageY - ev.data.y, 10))));
				if (ev.data.preview) {
					change.apply(ev.data.field.get(0), [true]);
				}
				return false;
			},
			upIncrement = function (ev) {
				change.apply(ev.data.field.get(0), [true]);
				ev.data.el.removeClass('colorpicker_slider').find('input').focus();
				$(document).unbind('mouseup', upIncrement);
				$(document).unbind('mousemove', moveIncrement);
				return false;
			},
			downHue = function (ev) {
				var current = {
					cal: $(this).parent(),
					y: $(this).offset().top
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind('mouseup', current, upHue);
				$(document).bind('mousemove', current, moveHue);
			},
			moveHue = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(4)
						.val(parseInt(360*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.y))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upHue = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind('mouseup', upHue);
				$(document).unbind('mousemove', moveHue);
				return false;
			},
			downSelector = function (ev) {
				var current = {
					cal: $(this).parent(),
					pos: $(this).offset()
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind('mouseup', current, upSelector);
				$(document).bind('mousemove', current, moveSelector);
			},
			moveSelector = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(6)
						.val(parseInt(100*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.pos.top))))/150, 10))
						.end()
						.eq(5)
						.val(parseInt(100*(Math.max(0,Math.min(150,(ev.pageX - ev.data.pos.left))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upSelector = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind('mouseup', upSelector);
				$(document).unbind('mousemove', moveSelector);
				return false;
			},
			enterSubmit = function (ev) {
				$(this).addClass('colorpicker_focus');
			},
			leaveSubmit = function (ev) {
				$(this).removeClass('colorpicker_focus');
			},
			clickSubmit = function (ev) {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').color;
				cal.data('colorpicker').origColor = col;
				setCurrentColor(col, cal.get(0));
				cal.data('colorpicker').onSubmit(col, HSBToHex(col), HSBToRGB(col), cal.data('colorpicker').el);
			},
			show = function (ev) {
				var cal = $('#' + $(this).data('colorpickerId'));
				cal.data('colorpicker').onBeforeShow.apply(this, [cal.get(0)]);
				var pos = $(this).offset();
				var viewPort = getViewport();
				var top = pos.top + this.offsetHeight;
				var left = pos.left;
				if (top + 176 > viewPort.t + viewPort.h) {
					top -= this.offsetHeight + 176;
				}
				if (left + 356 > viewPort.l + viewPort.w) {
					left -= 356;
				}
				cal.css({left: left + 'px', top: top + 'px'});
				if (cal.data('colorpicker').onShow.apply(this, [cal.get(0)]) != false) {
					cal.show();
				}
				$(document).bind('mousedown', {cal: cal}, hide);
				return false;
			},
			hide = function (ev) {
				if (!isChildOf(ev.data.cal.get(0), ev.target, ev.data.cal.get(0))) {
					if (ev.data.cal.data('colorpicker').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
						ev.data.cal.hide();
					}
					$(document).unbind('mousedown', hide);
				}
			},
			isChildOf = function(parentEl, el, container) {
				if (parentEl == el) {
					return true;
				}
				if (parentEl.contains) {
					return parentEl.contains(el);
				}
				if ( parentEl.compareDocumentPosition ) {
					return !!(parentEl.compareDocumentPosition(el) & 16);
				}
				var prEl = el.parentNode;
				while(prEl && prEl != container) {
					if (prEl == parentEl)
						return true;
					prEl = prEl.parentNode;
				}
				return false;
			},
			getViewport = function () {
				var m = document.compatMode == 'CSS1Compat';
				return {
					l : window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
					t : window.pageYOffset || (m ? document.documentElement.scrollTop : document.body.scrollTop),
					w : window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth),
					h : window.innerHeight || (m ? document.documentElement.clientHeight : document.body.clientHeight)
				};
			},
			fixHSB = function (hsb) {
				return {
					h: Math.min(360, Math.max(0, hsb.h)),
					s: Math.min(100, Math.max(0, hsb.s)),
					b: Math.min(100, Math.max(0, hsb.b))
				};
			}, 
			fixRGB = function (rgb) {
				return {
					r: Math.min(255, Math.max(0, rgb.r)),
					g: Math.min(255, Math.max(0, rgb.g)),
					b: Math.min(255, Math.max(0, rgb.b))
				};
			},
			fixHex = function (hex) {
				var len = 6 - hex.length;
				if (len > 0) {
					var o = [];
					for (var i=0; i<len; i++) {
						o.push('0');
					}
					o.push(hex);
					hex = o.join('');
				}
				return hex;
			}, 
			HexToRGB = function (hex) {
				var hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
				return {r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF)};
			},
			HexToHSB = function (hex) {
				return RGBToHSB(HexToRGB(hex));
			},
			RGBToHSB = function (rgb) {
				var hsb = {
					h: 0,
					s: 0,
					b: 0
				};
				var min = Math.min(rgb.r, rgb.g, rgb.b);
				var max = Math.max(rgb.r, rgb.g, rgb.b);
				var delta = max - min;
				hsb.b = max;
				if (max != 0) {
					
				}
				hsb.s = max != 0 ? 255 * delta / max : 0;
				if (hsb.s != 0) {
					if (rgb.r == max) {
						hsb.h = (rgb.g - rgb.b) / delta;
					} else if (rgb.g == max) {
						hsb.h = 2 + (rgb.b - rgb.r) / delta;
					} else {
						hsb.h = 4 + (rgb.r - rgb.g) / delta;
					}
				} else {
					hsb.h = -1;
				}
				hsb.h *= 60;
				if (hsb.h < 0) {
					hsb.h += 360;
				}
				hsb.s *= 100/255;
				hsb.b *= 100/255;
				return hsb;
			},
			HSBToRGB = function (hsb) {
				var rgb = {};
				var h = Math.round(hsb.h);
				var s = Math.round(hsb.s*255/100);
				var v = Math.round(hsb.b*255/100);
				if(s == 0) {
					rgb.r = rgb.g = rgb.b = v;
				} else {
					var t1 = v;
					var t2 = (255-s)*v/255;
					var t3 = (t1-t2)*(h%60)/60;
					if(h==360) h = 0;
					if(h<60) {rgb.r=t1;	rgb.b=t2; rgb.g=t2+t3}
					else if(h<120) {rgb.g=t1; rgb.b=t2;	rgb.r=t1-t3}
					else if(h<180) {rgb.g=t1; rgb.r=t2;	rgb.b=t2+t3}
					else if(h<240) {rgb.b=t1; rgb.r=t2;	rgb.g=t1-t3}
					else if(h<300) {rgb.b=t1; rgb.g=t2;	rgb.r=t2+t3}
					else if(h<360) {rgb.r=t1; rgb.g=t2;	rgb.b=t1-t3}
					else {rgb.r=0; rgb.g=0;	rgb.b=0}
				}
				return {r:Math.round(rgb.r), g:Math.round(rgb.g), b:Math.round(rgb.b)};
			},
			RGBToHex = function (rgb) {
				var hex = [
					rgb.r.toString(16),
					rgb.g.toString(16),
					rgb.b.toString(16)
				];
				$.each(hex, function (nr, val) {
					if (val.length == 1) {
						hex[nr] = '0' + val;
					}
				});
				return hex.join('');
			},
			HSBToHex = function (hsb) {
				return RGBToHex(HSBToRGB(hsb));
			},
			restoreOriginal = function () {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').origColor;
				cal.data('colorpicker').color = col;
				fillRGBFields(col, cal.get(0));
				fillHexFields(col, cal.get(0));
				fillHSBFields(col, cal.get(0));
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
			};
		return {
			init: function (opt) {
				opt = $.extend({}, defaults, opt||{});
				if (typeof opt.color == 'string') {
					opt.color = HexToHSB(opt.color);
				} else if (opt.color.r != undefined && opt.color.g != undefined && opt.color.b != undefined) {
					opt.color = RGBToHSB(opt.color);
				} else if (opt.color.h != undefined && opt.color.s != undefined && opt.color.b != undefined) {
					opt.color = fixHSB(opt.color);
				} else {
					return this;
				}
				return this.each(function () {
					if (!$(this).data('colorpickerId')) {
						var options = $.extend({}, opt);
						options.origColor = opt.color;
						var id = 'collorpicker_' + parseInt(Math.random() * 1000);
						$(this).data('colorpickerId', id);
						var cal = $(tpl).attr('id', id);
						if (options.flat) {
							cal.appendTo(this).show();
						} else {
							cal.appendTo(document.body);
						}
						options.fields = cal
											.find('input')
												.bind('keyup', keyDown)
												.bind('change', change)
												.bind('blur', blur)
												.bind('focus', focus);
						cal
							.find('span').bind('mousedown', downIncrement).end()
							.find('>div.colorpicker_current_color').bind('click', restoreOriginal);
						options.selector = cal.find('div.colorpicker_color').bind('mousedown', downSelector);
						options.selectorIndic = options.selector.find('div div');
						options.el = this;
						options.hue = cal.find('div.colorpicker_hue div');
						cal.find('div.colorpicker_hue').bind('mousedown', downHue);
						options.newColor = cal.find('div.colorpicker_new_color');
						options.currentColor = cal.find('div.colorpicker_current_color');
						cal.data('colorpicker', options);
						cal.find('div.colorpicker_submit')
							.bind('mouseenter', enterSubmit)
							.bind('mouseleave', leaveSubmit)
							.bind('click', clickSubmit);
						fillRGBFields(options.color, cal.get(0));
						fillHSBFields(options.color, cal.get(0));
						fillHexFields(options.color, cal.get(0));
						setHue(options.color, cal.get(0));
						setSelector(options.color, cal.get(0));
						setCurrentColor(options.color, cal.get(0));
						setNewColor(options.color, cal.get(0));
						if (options.flat) {
							cal.css({
								position: 'relative',
								display: 'block'
							});
						} else {
							$(this).bind(options.eventName, show);
						}
					}
				});
			},
			showPicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						show.apply(this);
					}
				});
			},
			hidePicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						$('#' + $(this).data('colorpickerId')).hide();
					}
				});
			},
			setColor: function(col) {
				if (typeof col == 'string') {
					col = HexToHSB(col);
				} else if (col.r != undefined && col.g != undefined && col.b != undefined) {
					col = RGBToHSB(col);
				} else if (col.h != undefined && col.s != undefined && col.b != undefined) {
					col = fixHSB(col);
				} else {
					return this;
				}
				return this.each(function(){
					if ($(this).data('colorpickerId')) {
						var cal = $('#' + $(this).data('colorpickerId'));
						cal.data('colorpicker').color = col;
						cal.data('colorpicker').origColor = col;
						fillRGBFields(col, cal.get(0));
						fillHSBFields(col, cal.get(0));
						fillHexFields(col, cal.get(0));
						setHue(col, cal.get(0));
						setSelector(col, cal.get(0));
						setCurrentColor(col, cal.get(0));
						setNewColor(col, cal.get(0));
					}
				});
			}
		};
	}();
	$.fn.extend({
		ColorPicker: ColorPicker.init,
		ColorPickerHide: ColorPicker.hidePicker,
		ColorPickerShow: ColorPicker.showPicker,
		ColorPickerSetColor: ColorPicker.setColor
	});
})(jQuery);

/*
 * jQuery Textarea.Autoresize
 * https://github.com/AndrewDryga/jQuery.Textarea.Autoresize
 *
 * This plugin resizes textarea height to match it's content height.
 *
 * Usage:
 * <code>$('textarea').autoresize(params_object);</code>
 *
 * Params can also be passed via data-api:
 * <code><textarea data-default-height="min" data-animated="false"></textarea></code>
 *
 * Available params:
 * - minHeight: minimal height for textarea, default is textarea height.
 * - maxHeight: maximal height for textarea, default is false (unlimited). If textarea content is bigger than this value, then scrollbar appears.
 * - defaultHeight: height that will be set to textarea when it loose focus. Default if false (turned off).
 * - animated: animation for focus loose/restore (works only width non-false defaultHeight values). Default is true.
 * - onResize: callback function, called each time plugin resizes textarea.
 *
 * Author: Andrew Dryga <andrew@dryga.com> <http://dryga.com>
 * License: MIT
 */

(function ($) {
  "use strict";

  var mirrorred_styles = [
    'padding',
    'paddingTop',
    'paddingBottom',
    'paddingRight',
    'paddingLeft',
    'border',
    'borderTop',
    'borderBottom',
    'borderRight',
    'borderLeft',
    'borderTopWidth',
    'borderRightWidth',
    'borderBottomWidth',
    'borderLeftWidth',
    'fontFamily',
    'fontSize',
    'lineHeight',
    'box-sizing',
  ];

  var Obj = function(element, params) {
    this.$element = $(element);
    this.$element.data('autoresize-api', this);
    params = params || {};

    this.params = $.extend({
      minHeight: this.$element.height(),
      maxHeight: ~~parseInt(this.$element.css('max-height'), 10),
      defaultHeight: false,
      animated: true,
      heightCompensation: this.$element.outerHeight() - this.$element.height(),
      onResize: $.noop
    }, this.$element.data(), params);

    if(this.params.defaultHeight && this.params.defaultHeight == 'min') {
      this.params.defaultHeight = this.params.minHeight;
    }

    this.init();
  };

  Obj.prototype = {
    init: function() {
      var $self = this;
      var $element = $self.$element;
      var element = $element.get(0);

      if($element.prop("tagName").toLowerCase() !== 'textarea') {
        console.error('jQuery.Textarea.Autoresize works only on textarea tags, skipping...');
        console.log('Selected element is: ', $element);
        return;
      }

      $element.addClass('autoresize');
      if($self.params.maxHeight == false) {
        $element.css('overflow', 'hidden');
      }

      if($self.params.defaultHeight) {
        $element.on('focus.autoresize', function() {
          $self.setHeight($self.getContentHeight(), $self.params.animated);
        });

        $element.on('focusout.autoresize', function() {
          $self.setHeight($self.params.defaultHeight, $self.params.animated);
        });
      }

      $element.on('keydown.autoresize', function() { //cut paste drop
        setTimeout(function() {
          $self.setHeight($self.getContentHeight());
        }, 0);
      });

      $element.on('resize.autoresize', function() {
        setTimeout(function() {
          $self.getMirror().width($element.width());
          $self.setHeight($self.getContentHeight());
        }, 0);
      });
    },

    destroy: function() {
      this.getMirror().remove();
      this.$element.removeData('autoresize-api');
      this.$element.off('.autoresize');
      this.$element.removeClass('autoresize');
      this.$element.css('overflow', '');
      this.$element.css('height', '');
      this.$element.removeAttr('style');
    },

    getMirror: function() {
      var mirror_tag = this.$element.nextAll('.autoresize-mirror').first();
      if(!mirror_tag.length) {
        mirror_tag = $('<div/>').addClass('autoresize-mirror');
        for(var i = 0; i < mirrorred_styles.length; i++) {
          mirror_tag.css(mirrorred_styles[i], this.$element.css(mirrorred_styles[i]));
        }
        mirror_tag.width(this.$element.width());

        this.$element.after(mirror_tag);
      }

      mirror_tag.html(this.$element.val().replace(/&/g, '&amp;').
                                     replace(/"/g, '&quot;').
                                     replace(/'/g, '&#39;').
                                     replace(/</g, '&lt;').
                                     replace(/>/g, '&gt;').
                                     replace(/\n/g, '<br />') + '<br />');

      return mirror_tag;
    },

    getContentHeight: function() {
      return this.limitValue(this.getMirror().height(), this.params.minHeight, this.params.maxHeight);
    },

    setHeight: function(height, animated) {
      if(animated) {
        this.$element.stop(true).animate({height: height + this.params.heightCompensation + 'px'}, 'slow');
      } else {
        this.$element.height(height);
      }
      this.params.onResize(this.$element, {height: height});
    },

    limitValue: function(value, min, max) {
      value = (min == false || value > min) ? value : min;
      value = (max == false || value < max) ? value : max;

      return value;
    }
  };

  $.fn.autoresize = function(params) {
    return this.each(function() {
      if(params == 'destroy')  {
        var api;
        if(api = $(this).data('autoresize-api')) {
          api.destroy();
        } else {
          console.error("Can't destroy autoresize api, it's not initialized.");
        }
      } else {
        new Obj(this, params);
      }
    });
  };

  $(function() {
    // Instert plugin styles
    $('html > head').append($('<style>.autoresize-mirror { display: none; word-wrap: break-word; white-space: pre-wrap; } .autoresize { resize: none; }</style>'));
  });
})(jQuery);


;
(function (root, factory) {

  "use strict";
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"));
  } else {
    // Browser globals (root is window)
    root.bootbox = factory(root.jQuery);
  }

}(this, function init($, undefined) {

  "use strict";

  // the base DOM structure needed to create a modal
  var templates = {
    dialog:
      "<div class='bootbox modal' tabindex='-1' role='dialog'>" +
        "<div class='modal-dialog'>" +
          "<div class='modal-content'>" +
            "<div class='modal-body'><div class='bootbox-body'></div></div>" +
          "</div>" +
        "</div>" +
      "</div>",
    header:
      "<div class='modal-header'>" +
        "<h4 class='modal-title'></h4>" +
      "</div>",
    footer:
      "<div class='modal-footer'></div>",
    closeButton:
      "<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",
    form:
      "<form class='bootbox-form'></form>",
    inputs: {
      text:
        "<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",
      textarea:
        "<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",
      email:
        "<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",
      select:
        "<select class='bootbox-input bootbox-input-select form-control'></select>",
      checkbox:
        "<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",
      date:
        "<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",
      time:
        "<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",
      number:
        "<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",
      password:
        "<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"
    }
  };

  var defaults = {
    // default language
    locale: "en",
    // show backdrop or not
    backdrop: true,
    // animate the modal in/out
    animate: true,
    // additional class string applied to the top level dialog
    className: null,
    // whether or not to include a close button
    closeButton: true,
    // show the dialog immediately by default
    show: true,
    // dialog container
    container: "body"
  };

  // our public object; augmented after our private API
  var exports = {};

  /**
   * @private
   */
  function _t(key) {
    var locale = locales[defaults.locale];
    return locale ? locale[key] : locales.en[key];
  }

  function processCallback(e, dialog, callback) {
    e.stopPropagation();
    e.preventDefault();

    // by default we assume a callback will get rid of the dialog,
    // although it is given the opportunity to override this

    // so, if the callback can be invoked and it *explicitly returns false*
    // then we'll set a flag to keep the dialog active...
    var preserveDialog = $.isFunction(callback) && callback(e) === false;

    // ... otherwise we'll bin it
    if (!preserveDialog) {
      dialog.modal("hide");
    }
  }

  function getKeyLength(obj) {
    // @TODO defer to Object.keys(x).length if available?
    var k, t = 0;
    for (k in obj) {
      t ++;
    }
    return t;
  }

  function each(collection, iterator) {
    var index = 0;
    $.each(collection, function(key, value) {
      iterator(key, value, index++);
    });
  }

  function sanitize(options) {
    var buttons;
    var total;

    if (typeof options !== "object") {
      throw new Error("Please supply an object of options");
    }

    if (!options.message) {
      throw new Error("Please specify a message");
    }

    // make sure any supplied options take precedence over defaults
    options = $.extend({}, defaults, options);

    if (!options.buttons) {
      options.buttons = {};
    }

    // we only support Bootstrap's "static" and false backdrop args
    // supporting true would mean you could dismiss the dialog without
    // explicitly interacting with it
    options.backdrop = options.backdrop ? "static" : false;

    buttons = options.buttons;

    total = getKeyLength(buttons);

    each(buttons, function(key, button, index) {

      if ($.isFunction(button)) {
        // short form, assume value is our callback. Since button
        // isn't an object it isn't a reference either so re-assign it
        button = buttons[key] = {
          callback: button
        };
      }

      // before any further checks make sure by now button is the correct type
      if ($.type(button) !== "object") {
        throw new Error("button with key " + key + " must be an object");
      }

      if (!button.label) {
        // the lack of an explicit label means we'll assume the key is good enough
        button.label = key;
      }

      if (!button.className) {
        if (total <= 2 && index === total-1) {
          // always add a primary to the main option in a two-button dialog
          button.className = "btn-primary";
        } else {
          button.className = "btn-default";
        }
      }
    });

    return options;
  }

  /**
   * map a flexible set of arguments into a single returned object
   * if args.length is already one just return it, otherwise
   * use the properties argument to map the unnamed args to
   * object properties
   * so in the latter case:
   * mapArguments(["foo", $.noop], ["message", "callback"])
   * -> { message: "foo", callback: $.noop }
   */
  function mapArguments(args, properties) {
    var argn = args.length;
    var options = {};

    if (argn < 1 || argn > 2) {
      throw new Error("Invalid argument length");
    }

    if (argn === 2 || typeof args[0] === "string") {
      options[properties[0]] = args[0];
      options[properties[1]] = args[1];
    } else {
      options = args[0];
    }

    return options;
  }

  /**
   * merge a set of default dialog options with user supplied arguments
   */
  function mergeArguments(defaults, args, properties) {
    return $.extend(
      // deep merge
      true,
      // ensure the target is an empty, unreferenced object
      {},
      // the base options object for this type of dialog (often just buttons)
      defaults,
      // args could be an object or array; if it's an array properties will
      // map it to a proper options object
      mapArguments(
        args,
        properties
      )
    );
  }

  /**
   * this entry-level method makes heavy use of composition to take a simple
   * range of inputs and return valid options suitable for passing to bootbox.dialog
   */
  function mergeDialogOptions(className, labels, properties, args) {
    //  build up a base set of dialog properties
    var baseOptions = {
      className: "bootbox-" + className,
      buttons: createLabels.apply(null, labels)
    };

    // ensure the buttons properties generated, *after* merging
    // with user args are still valid against the supplied labels
    return validateButtons(
      // merge the generated base properties with user supplied arguments
      mergeArguments(
        baseOptions,
        args,
        // if args.length > 1, properties specify how each arg maps to an object key
        properties
      ),
      labels
    );
  }

  /**
   * from a given list of arguments return a suitable object of button labels
   * all this does is normalise the given labels and translate them where possible
   * e.g. "ok", "confirm" -> { ok: "OK, cancel: "Annuleren" }
   */
  function createLabels() {
    var buttons = {};

    for (var i = 0, j = arguments.length; i < j; i++) {
      var argument = arguments[i];
      var key = argument.toLowerCase();
      var value = argument.toUpperCase();

      buttons[key] = {
        label: _t(value)
      };
    }

    return buttons;
  }

  function validateButtons(options, buttons) {
    var allowedButtons = {};
    each(buttons, function(key, value) {
      allowedButtons[value] = true;
    });

    each(options.buttons, function(key) {
      if (allowedButtons[key] === undefined) {
        throw new Error("button key " + key + " is not allowed (options are " + buttons.join("\n") + ")");
      }
    });

    return options;
  }

  exports.alert = function() {
    var options;

    options = mergeDialogOptions("alert", ["ok"], ["message", "callback"], arguments);

    if (options.callback && !$.isFunction(options.callback)) {
      throw new Error("alert requires callback property to be a function when provided");
    }

    /**
     * overrides
     */
    options.buttons.ok.callback = options.onEscape = function() {
      if ($.isFunction(options.callback)) {
        return options.callback();
      }
      return true;
    };

    return exports.dialog(options);
  };

  exports.confirm = function() {
    var options;

    options = mergeDialogOptions("confirm", ["cancel", "confirm"], ["message", "callback"], arguments);

    /**
     * overrides; undo anything the user tried to set they shouldn't have
     */
    options.buttons.cancel.callback = options.onEscape = function() {
      return options.callback(false);
    };

    options.buttons.confirm.callback = function() {
      return options.callback(true);
    };

    // confirm specific validation
    if (!$.isFunction(options.callback)) {
      throw new Error("confirm requires a callback");
    }

    return exports.dialog(options);
  };

  exports.prompt = function() {
    var options;
    var defaults;
    var dialog;
    var form;
    var input;
    var shouldShow;
    var inputOptions;

    // we have to create our form first otherwise
    // its value is undefined when gearing up our options
    // @TODO this could be solved by allowing message to
    // be a function instead...
    form = $(templates.form);

    // prompt defaults are more complex than others in that
    // users can override more defaults
    // @TODO I don't like that prompt has to do a lot of heavy
    // lifting which mergeDialogOptions can *almost* support already
    // just because of 'value' and 'inputType' - can we refactor?
    defaults = {
      className: "bootbox-prompt",
      buttons: createLabels("cancel", "confirm"),
      value: "",
      inputType: "text"
    };

    options = validateButtons(
      mergeArguments(defaults, arguments, ["title", "callback"]),
      ["cancel", "confirm"]
    );

    // capture the user's show value; we always set this to false before
    // spawning the dialog to give us a chance to attach some handlers to
    // it, but we need to make sure we respect a preference not to show it
    shouldShow = (options.show === undefined) ? true : options.show;

    // check if the browser supports the option.inputType
    var html5inputs = ["date","time","number"];
    var i = document.createElement("input");
    i.setAttribute("type", options.inputType);
    if(html5inputs[options.inputType]){
      options.inputType = i.type;
    }

    /**
     * overrides; undo anything the user tried to set they shouldn't have
     */
    options.message = form;

    options.buttons.cancel.callback = options.onEscape = function() {
      return options.callback(null);
    };

    options.buttons.confirm.callback = function() {
      var value;

      switch (options.inputType) {
        case "text":
        case "textarea":
        case "email":
        case "select":
        case "date":
        case "time":
        case "number":
        case "password":
          value = input.val();
          break;

        case "checkbox":
          var checkedItems = input.find("input:checked");

          // we assume that checkboxes are always multiple,
          // hence we default to an empty array
          value = [];

          each(checkedItems, function(_, item) {
            value.push($(item).val());
          });
          break;
      }

      return options.callback(value);
    };

    options.show = false;

    // prompt specific validation
    if (!options.title) {
      throw new Error("prompt requires a title");
    }

    if (!$.isFunction(options.callback)) {
      throw new Error("prompt requires a callback");
    }

    if (!templates.inputs[options.inputType]) {
      throw new Error("invalid prompt type");
    }

    // create the input based on the supplied type
    input = $(templates.inputs[options.inputType]);

    switch (options.inputType) {
      case "text":
      case "textarea":
      case "email":
      case "date":
      case "time":
      case "number":
      case "password":
        input.val(options.value);
        break;

      case "select":
        var groups = {};
        inputOptions = options.inputOptions || [];

        if (!inputOptions.length) {
          throw new Error("prompt with select requires options");
        }

        each(inputOptions, function(_, option) {

          // assume the element to attach to is the input...
          var elem = input;

          if (option.value === undefined || option.text === undefined) {
            throw new Error("given options in wrong format");
          }


          // ... but override that element if this option sits in a group

          if (option.group) {
            // initialise group if necessary
            if (!groups[option.group]) {
              groups[option.group] = $("<optgroup/>").attr("label", option.group);
            }

            elem = groups[option.group];
          }

          elem.append("<option value='" + option.value + "'>" + option.text + "</option>");
        });

        each(groups, function(_, group) {
          input.append(group);
        });

        // safe to set a select's value as per a normal input
        input.val(options.value);
        break;

      case "checkbox":
        var values   = $.isArray(options.value) ? options.value : [options.value];
        inputOptions = options.inputOptions || [];

        if (!inputOptions.length) {
          throw new Error("prompt with checkbox requires options");
        }

        if (!inputOptions[0].value || !inputOptions[0].text) {
          throw new Error("given options in wrong format");
        }

        // checkboxes have to nest within a containing element, so
        // they break the rules a bit and we end up re-assigning
        // our 'input' element to this container instead
        input = $("<div/>");

        each(inputOptions, function(_, option) {
          var checkbox = $(templates.inputs[options.inputType]);

          checkbox.find("input").attr("value", option.value);
          checkbox.find("label").append(option.text);

          // we've ensured values is an array so we can always iterate over it
          each(values, function(_, value) {
            if (value === option.value) {
              checkbox.find("input").prop("checked", true);
            }
          });

          input.append(checkbox);
        });
        break;
    }

    if (options.placeholder) {
      input.attr("placeholder", options.placeholder);
    }

    if(options.pattern){
      input.attr("pattern", options.pattern);
    }

    // now place it in our form
    form.append(input);

    form.on("submit", function(e) {
      e.preventDefault();
      // @TODO can we actually click *the* button object instead?
      // e.g. buttons.confirm.click() or similar
      dialog.find(".btn-primary").click();
    });

    dialog = exports.dialog(options);

    // clear the existing handler focusing the submit button...
    dialog.off("shown.bs.modal");

    // ...and replace it with one focusing our input, if possible
    dialog.on("shown.bs.modal", function() {
      input.focus();
    });

    if (shouldShow === true) {
      dialog.modal("show");
    }

    return dialog;
  };

  exports.dialog = function(options) {
    options = sanitize(options);

    var dialog = $(templates.dialog);
    var body = dialog.find(".modal-body");
    var buttons = options.buttons;
    var buttonStr = "";
    var callbacks = {
      onEscape: options.onEscape
    };

    each(buttons, function(key, button) {

      // @TODO I don't like this string appending to itself; bit dirty. Needs reworking
      // can we just build up button elements instead? slower but neater. Then button
      // can just become a template too
      buttonStr += "<button data-bb-handler='" + key + "' type='button' class='btn " + button.className + "'>" + button.label + "</button>";
      callbacks[key] = button.callback;
    });

    body.find(".bootbox-body").html(options.message);

    if (options.animate === true) {
      dialog.addClass("fade");
    }

    if (options.className) {
      dialog.addClass(options.className);
    }

    if (options.title) {
      body.before(templates.header);
    }

    if (options.closeButton) {
      var closeButton = $(templates.closeButton);

      if (options.title) {
        dialog.find(".modal-header").prepend(closeButton);
      } else {
        closeButton.css("margin-top", "-10px").prependTo(body);
      }
    }

    if (options.title) {
      dialog.find(".modal-title").html(options.title);
    }

    if (buttonStr.length) {
      body.after(templates.footer);
      dialog.find(".modal-footer").html(buttonStr);
    }


    /**
     * Bootstrap event listeners; used handle extra
     * setup & teardown required after the underlying
     * modal has performed certain actions
     */

    dialog.on("hidden.bs.modal", function(e) {
      // ensure we don't accidentally intercept hidden events triggered
      // by children of the current dialog. We shouldn't anymore now BS
      // namespaces its events; but still worth doing
      if (e.target === this) {
        dialog.remove();
      }
    });

    /*
    dialog.on("show.bs.modal", function() {
      // sadly this doesn't work; show is called *just* before
      // the backdrop is added so we'd need a setTimeout hack or
      // otherwise... leaving in as would be nice
      if (options.backdrop) {
        dialog.next(".modal-backdrop").addClass("bootbox-backdrop");
      }
    });
    */

    dialog.on("shown.bs.modal", function() {
      dialog.find(".btn-primary:first").focus();
    });

    /**
     * Bootbox event listeners; experimental and may not last
     * just an attempt to decouple some behaviours from their
     * respective triggers
     */

    dialog.on("escape.close.bb", function(e) {
      if (callbacks.onEscape) {
        processCallback(e, dialog, callbacks.onEscape);
      }
    });

    /**
     * Standard jQuery event listeners; used to handle user
     * interaction with our dialog
     */

    dialog.on("click", ".modal-footer button", function(e) {
      var callbackKey = $(this).data("bb-handler");

      processCallback(e, dialog, callbacks[callbackKey]);

    });

    dialog.on("click", ".bootbox-close-button", function(e) {
      // onEscape might be falsy but that's fine; the fact is
      // if the user has managed to click the close button we
      // have to close the dialog, callback or not
      processCallback(e, dialog, callbacks.onEscape);
    });

    dialog.on("keyup", function(e) {
      if (e.which === 27) {
        dialog.trigger("escape.close.bb");
      }
    });

    // the remainder of this method simply deals with adding our
    // dialogent to the DOM, augmenting it with Bootstrap's modal
    // functionality and then giving the resulting object back
    // to our caller

    $(options.container).append(dialog);

    dialog.modal({
      backdrop: options.backdrop,
      keyboard: false,
      show: false
    });

    if (options.show) {
      dialog.modal("show");
    }

    // @TODO should we return the raw element here or should
    // we wrap it in an object on which we can expose some neater
    // methods, e.g. var d = bootbox.alert(); d.hide(); instead
    // of d.modal("hide");

   /*
    function BBDialog(elem) {
      this.elem = elem;
    }

    BBDialog.prototype = {
      hide: function() {
        return this.elem.modal("hide");
      },
      show: function() {
        return this.elem.modal("show");
      }
    };
    */

    return dialog;

  };

  exports.setDefaults = function() {
    var values = {};

    if (arguments.length === 2) {
      // allow passing of single key/value...
      values[arguments[0]] = arguments[1];
    } else {
      // ... and as an object too
      values = arguments[0];
    }

    $.extend(defaults, values);
  };

  exports.hideAll = function() {
    $(".bootbox").modal("hide");
  };


  /**
   * standard locales. Please add more according to ISO 639-1 standard. Multiple language variants are
   * unlikely to be required. If this gets too large it can be split out into separate JS files.
   */
  var locales = {
    br : {
      OK      : "OK",
      CANCEL  : "Cancelar",
      CONFIRM : "Sim"
    },
    da : {
      OK      : "OK",
      CANCEL  : "Annuller",
      CONFIRM : "Accepter"
    },
    de : {
      OK      : "OK",
      CANCEL  : "Abbrechen",
      CONFIRM : "Akzeptieren"
    },
    en : {
      OK      : "OK",
      CANCEL  : "Cancel",
      CONFIRM : "OK"
    },
    es : {
      OK      : "OK",
      CANCEL  : "Cancelar",
      CONFIRM : "Aceptar"
    },
    fi : {
      OK      : "OK",
      CANCEL  : "Peruuta",
      CONFIRM : "OK"
    },
    fr : {
      OK      : "OK",
      CANCEL  : "Annuler",
      CONFIRM : "D'accord"
    },
    he : {
      OK      : "אישור",
      CANCEL  : "ביטול",
      CONFIRM : "אישור"
    },
    it : {
      OK      : "OK",
      CANCEL  : "Annulla",
      CONFIRM : "Conferma"
    },
    lt : {
      OK      : "Gerai",
      CANCEL  : "Atšaukti",
      CONFIRM : "Patvirtinti"
    },
    lv : {
      OK      : "Labi",
      CANCEL  : "Atcelt",
      CONFIRM : "Apstiprināt"
    },
    nl : {
      OK      : "OK",
      CANCEL  : "Annuleren",
      CONFIRM : "Accepteren"
    },
    no : {
      OK      : "OK",
      CANCEL  : "Avbryt",
      CONFIRM : "OK"
    },
    pl : {
      OK      : "OK",
      CANCEL  : "Anuluj",
      CONFIRM : "Potwierdź"
    },
    ru : {
      OK      : "OK",
      CANCEL  : "Отмена",
      CONFIRM : "Применить"
    },
    sv : {
      OK      : "OK",
      CANCEL  : "Avbryt",
      CONFIRM : "OK"
    },
    tr : {
      OK      : "Tamam",
      CANCEL  : "İptal",
      CONFIRM : "Onayla"
    },
    zh_CN : {
      OK      : "OK",
      CANCEL  : "取消",
      CONFIRM : "确认"
    },
    zh_TW : {
      OK      : "OK",
      CANCEL  : "取消",
      CONFIRM : "確認"
    }
  };

  exports.init = function(_$) {
    return init(_$ || $);
  };

  return exports;
}));
;

/* qTip2 v2.0.1-257 tips modal viewport svg imagemap ie6 | qtip2.com | Licensed MIT, GPL | Thu Nov 21 2013 21:15:07 */
(function(t,e,i){(function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):jQuery&&!jQuery.fn.qtip&&t(jQuery)})(function(s){"use strict";function o(t,e,i,o){this.id=i,this.target=t,this.tooltip=E,this.elements={target:t},this._id=X+"-"+i,this.timers={img:{}},this.options=e,this.plugins={},this.cache={event:{},target:s(),disabled:k,attr:o,onTooltip:k,lastClass:""},this.rendered=this.destroyed=this.disabled=this.waiting=this.hiddenDuringWait=this.positioning=this.triggering=k}function n(t){return t===E||"object"!==s.type(t)}function r(t){return!(s.isFunction(t)||t&&t.attr||t.length||"object"===s.type(t)&&(t.jquery||t.then))}function a(t){var e,i,o,a;return n(t)?k:(n(t.metadata)&&(t.metadata={type:t.metadata}),"content"in t&&(e=t.content,n(e)||e.jquery||e.done?e=t.content={text:i=r(e)?k:e}:i=e.text,"ajax"in e&&(o=e.ajax,a=o&&o.once!==k,delete e.ajax,e.text=function(t,e){var n=i||s(this).attr(e.options.content.attr)||"Loading...",r=s.ajax(s.extend({},o,{context:e})).then(o.success,E,o.error).then(function(t){return t&&a&&e.set("content.text",t),t},function(t,i,s){e.destroyed||0===t.status||e.set("content.text",i+": "+s)});return a?n:(e.set("content.text",n),r)}),"title"in e&&(n(e.title)||(e.button=e.title.button,e.title=e.title.text),r(e.title||k)&&(e.title=k))),"position"in t&&n(t.position)&&(t.position={my:t.position,at:t.position}),"show"in t&&n(t.show)&&(t.show=t.show.jquery?{target:t.show}:t.show===W?{ready:W}:{event:t.show}),"hide"in t&&n(t.hide)&&(t.hide=t.hide.jquery?{target:t.hide}:{event:t.hide}),"style"in t&&n(t.style)&&(t.style={classes:t.style}),s.each(R,function(){this.sanitize&&this.sanitize(t)}),t)}function h(t,e){for(var i,s=0,o=t,n=e.split(".");o=o[n[s++]];)n.length>s&&(i=o);return[i||t,n.pop()]}function l(t,e){var i,s,o;for(i in this.checks)for(s in this.checks[i])(o=RegExp(s,"i").exec(t))&&(e.push(o),("builtin"===i||this.plugins[i])&&this.checks[i][s].apply(this.plugins[i]||this,e))}function c(t){return G.concat("").join(t?"-"+t+" ":" ")}function d(i){return i&&{type:i.type,pageX:i.pageX,pageY:i.pageY,target:i.target,relatedTarget:i.relatedTarget,scrollX:i.scrollX||t.pageXOffset||e.body.scrollLeft||e.documentElement.scrollLeft,scrollY:i.scrollY||t.pageYOffset||e.body.scrollTop||e.documentElement.scrollTop}||{}}function p(t,e){return e>0?setTimeout(s.proxy(t,this),e):(t.call(this),i)}function u(t){return this.tooltip.hasClass(ee)?k:(clearTimeout(this.timers.show),clearTimeout(this.timers.hide),this.timers.show=p.call(this,function(){this.toggle(W,t)},this.options.show.delay),i)}function f(t){if(this.tooltip.hasClass(ee))return k;var e=s(t.relatedTarget),i=e.closest(U)[0]===this.tooltip[0],o=e[0]===this.options.show.target[0];if(clearTimeout(this.timers.show),clearTimeout(this.timers.hide),this!==e[0]&&"mouse"===this.options.position.target&&i||this.options.hide.fixed&&/mouse(out|leave|move)/.test(t.type)&&(i||o))try{t.preventDefault(),t.stopImmediatePropagation()}catch(n){}else this.timers.hide=p.call(this,function(){this.toggle(k,t)},this.options.hide.delay,this)}function g(t){return this.tooltip.hasClass(ee)||!this.options.hide.inactive?k:(clearTimeout(this.timers.inactive),this.timers.inactive=p.call(this,function(){this.hide(t)},this.options.hide.inactive),i)}function m(t){this.rendered&&this.tooltip[0].offsetWidth>0&&this.reposition(t)}function v(t,i,o){s(e.body).delegate(t,(i.split?i:i.join(he+" "))+he,function(){var t=T.api[s.attr(this,H)];t&&!t.disabled&&o.apply(t,arguments)})}function y(t,i,n){var r,h,l,c,d,p=s(e.body),u=t[0]===e?p:t,f=t.metadata?t.metadata(n.metadata):E,g="html5"===n.metadata.type&&f?f[n.metadata.name]:E,m=t.data(n.metadata.name||"qtipopts");try{m="string"==typeof m?s.parseJSON(m):m}catch(v){}if(c=s.extend(W,{},T.defaults,n,"object"==typeof m?a(m):E,a(g||f)),h=c.position,c.id=i,"boolean"==typeof c.content.text){if(l=t.attr(c.content.attr),c.content.attr===k||!l)return k;c.content.text=l}if(h.container.length||(h.container=p),h.target===k&&(h.target=u),c.show.target===k&&(c.show.target=u),c.show.solo===W&&(c.show.solo=h.container.closest("body")),c.hide.target===k&&(c.hide.target=u),c.position.viewport===W&&(c.position.viewport=h.container),h.container=h.container.eq(0),h.at=new z(h.at,W),h.my=new z(h.my),t.data(X))if(c.overwrite)t.qtip("destroy",!0);else if(c.overwrite===k)return k;return t.attr(Y,i),c.suppress&&(d=t.attr("title"))&&t.removeAttr("title").attr(se,d).attr("title",""),r=new o(t,c,i,!!l),t.data(X,r),t.one("remove.qtip-"+i+" removeqtip.qtip-"+i,function(){var t;(t=s(this).data(X))&&t.destroy(!0)}),r}function b(t){return t.charAt(0).toUpperCase()+t.slice(1)}function w(t,e){var s,o,n=e.charAt(0).toUpperCase()+e.slice(1),r=(e+" "+be.join(n+" ")+n).split(" "),a=0;if(ye[e])return t.css(ye[e]);for(;s=r[a++];)if((o=t.css(s))!==i)return ye[e]=s,o}function _(t,e){return Math.ceil(parseFloat(w(t,e)))}function x(t,e){this._ns="tip",this.options=e,this.offset=e.offset,this.size=[e.width,e.height],this.init(this.qtip=t)}function q(t,e){this.options=e,this._ns="-modal",this.init(this.qtip=t)}function C(t){this._ns="ie6",this.init(this.qtip=t)}var T,j,z,M,I,W=!0,k=!1,E=null,S="x",L="y",A="width",B="height",D="top",F="left",O="bottom",P="right",N="center",$="flipinvert",V="shift",R={},X="qtip",Y="data-hasqtip",H="data-qtip-id",G=["ui-widget","ui-tooltip"],U="."+X,Q="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),J=X+"-fixed",K=X+"-default",Z=X+"-focus",te=X+"-hover",ee=X+"-disabled",ie="_replacedByqTip",se="oldtitle",oe={ie:function(){for(var t=3,i=e.createElement("div");(i.innerHTML="<!--[if gt IE "+ ++t+"]><i></i><![endif]-->")&&i.getElementsByTagName("i")[0];);return t>4?t:0/0}(),iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||k};j=o.prototype,j._when=function(t){return s.when.apply(s,t)},j.render=function(t){if(this.rendered||this.destroyed)return this;var e,i=this,o=this.options,n=this.cache,r=this.elements,a=o.content.text,h=o.content.title,l=o.content.button,c=o.position,d=("."+this._id+" ",[]);return s.attr(this.target[0],"aria-describedby",this._id),this.tooltip=r.tooltip=e=s("<div/>",{id:this._id,"class":[X,K,o.style.classes,X+"-pos-"+o.position.my.abbrev()].join(" "),width:o.style.width||"",height:o.style.height||"",tracking:"mouse"===c.target&&c.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":k,"aria-describedby":this._id+"-content","aria-hidden":W}).toggleClass(ee,this.disabled).attr(H,this.id).data(X,this).appendTo(c.container).append(r.content=s("<div />",{"class":X+"-content",id:this._id+"-content","aria-atomic":W})),this.rendered=-1,this.positioning=W,h&&(this._createTitle(),s.isFunction(h)||d.push(this._updateTitle(h,k))),l&&this._createButton(),s.isFunction(a)||d.push(this._updateContent(a,k)),this.rendered=W,this._setWidget(),s.each(R,function(t){var e;"render"===this.initialize&&(e=this(i))&&(i.plugins[t]=e)}),this._unassignEvents(),this._assignEvents(),this._when(d).then(function(){i._trigger("render"),i.positioning=k,i.hiddenDuringWait||!o.show.ready&&!t||i.toggle(W,n.event,k),i.hiddenDuringWait=k}),T.api[this.id]=this,this},j.destroy=function(t){function e(){if(!this.destroyed){this.destroyed=W;var t=this.target,e=t.attr(se);this.rendered&&this.tooltip.stop(1,0).find("*").remove().end().remove(),s.each(this.plugins,function(){this.destroy&&this.destroy()}),clearTimeout(this.timers.show),clearTimeout(this.timers.hide),this._unassignEvents(),t.removeData(X).removeAttr(H).removeAttr(Y).removeAttr("aria-describedby"),this.options.suppress&&e&&t.attr("title",e).removeAttr(se),this._unbind(t),this.options=this.elements=this.cache=this.timers=this.plugins=this.mouse=E,delete T.api[this.id]}}return this.destroyed?this.target:(t===W&&"hide"!==this.triggering||!this.rendered?e.call(this):(this.tooltip.one("tooltiphidden",s.proxy(e,this)),!this.triggering&&this.hide()),this.target)},M=j.checks={builtin:{"^id$":function(t,e,i,o){var n=i===W?T.nextid:i,r=X+"-"+n;n!==k&&n.length>0&&!s("#"+r).length?(this._id=r,this.rendered&&(this.tooltip[0].id=this._id,this.elements.content[0].id=this._id+"-content",this.elements.title[0].id=this._id+"-title")):t[e]=o},"^prerender":function(t,e,i){i&&!this.rendered&&this.render(this.options.show.ready)},"^content.text$":function(t,e,i){this._updateContent(i)},"^content.attr$":function(t,e,i,s){this.options.content.text===this.target.attr(s)&&this._updateContent(this.target.attr(i))},"^content.title$":function(t,e,s){return s?(s&&!this.elements.title&&this._createTitle(),this._updateTitle(s),i):this._removeTitle()},"^content.button$":function(t,e,i){this._updateButton(i)},"^content.title.(text|button)$":function(t,e,i){this.set("content."+e,i)},"^position.(my|at)$":function(t,e,i){"string"==typeof i&&(t[e]=new z(i,"at"===e))},"^position.container$":function(t,e,i){this.rendered&&this.tooltip.appendTo(i)},"^show.ready$":function(t,e,i){i&&(!this.rendered&&this.render(W)||this.toggle(W))},"^style.classes$":function(t,e,i,s){this.rendered&&this.tooltip.removeClass(s).addClass(i)},"^style.(width|height)":function(t,e,i){this.rendered&&this.tooltip.css(e,i)},"^style.widget|content.title":function(){this.rendered&&this._setWidget()},"^style.def":function(t,e,i){this.rendered&&this.tooltip.toggleClass(K,!!i)},"^events.(render|show|move|hide|focus|blur)$":function(t,e,i){this.rendered&&this.tooltip[(s.isFunction(i)?"":"un")+"bind"]("tooltip"+e,i)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){if(this.rendered){var t=this.options.position;this.tooltip.attr("tracking","mouse"===t.target&&t.adjust.mouse),this._unassignEvents(),this._assignEvents()}}}},j.get=function(t){if(this.destroyed)return this;var e=h(this.options,t.toLowerCase()),i=e[0][e[1]];return i.precedance?i.string():i};var ne=/^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i,re=/^prerender|show\.ready/i;j.set=function(t,e){if(this.destroyed)return this;var o,n=this.rendered,r=k,c=this.options;return this.checks,"string"==typeof t?(o=t,t={},t[o]=e):t=s.extend({},t),s.each(t,function(e,o){if(n&&re.test(e))return delete t[e],i;var a,l=h(c,e.toLowerCase());a=l[0][l[1]],l[0][l[1]]=o&&o.nodeType?s(o):o,r=ne.test(e)||r,t[e]=[l[0],l[1],o,a]}),a(c),this.positioning=W,s.each(t,s.proxy(l,this)),this.positioning=k,this.rendered&&this.tooltip[0].offsetWidth>0&&r&&this.reposition("mouse"===c.position.target?E:this.cache.event),this},j._update=function(t,e){var i=this,o=this.cache;return this.rendered&&t?(s.isFunction(t)&&(t=t.call(this.elements.target,o.event,this)||""),s.isFunction(t.then)?(o.waiting=W,t.then(function(t){return o.waiting=k,i._update(t,e)},E,function(t){return i._update(t,e)})):t===k||!t&&""!==t?k:(t.jquery&&t.length>0?e.empty().append(t.css({display:"block",visibility:"visible"})):e.html(t),this._waitForContent(e).then(function(t){t.images&&t.images.length&&i.rendered&&i.tooltip[0].offsetWidth>0&&i.reposition(o.event,!t.length)}))):k},j._waitForContent=function(t){var e=this.cache;return e.waiting=W,(s.fn.imagesLoaded?t.imagesLoaded():s.Deferred().resolve([])).done(function(){e.waiting=k}).promise()},j._updateContent=function(t,e){this._update(t,this.elements.content,e)},j._updateTitle=function(t,e){this._update(t,this.elements.title,e)===k&&this._removeTitle(k)},j._createTitle=function(){var t=this.elements,e=this._id+"-title";t.titlebar&&this._removeTitle(),t.titlebar=s("<div />",{"class":X+"-titlebar "+(this.options.style.widget?c("header"):"")}).append(t.title=s("<div />",{id:e,"class":X+"-title","aria-atomic":W})).insertBefore(t.content).delegate(".qtip-close","mousedown keydown mouseup keyup mouseout",function(t){s(this).toggleClass("ui-state-active ui-state-focus","down"===t.type.substr(-4))}).delegate(".qtip-close","mouseover mouseout",function(t){s(this).toggleClass("ui-state-hover","mouseover"===t.type)}),this.options.content.button&&this._createButton()},j._removeTitle=function(t){var e=this.elements;e.title&&(e.titlebar.remove(),e.titlebar=e.title=e.button=E,t!==k&&this.reposition())},j.reposition=function(i,o){if(!this.rendered||this.positioning||this.destroyed)return this;this.positioning=W;var n,r,a=this.cache,h=this.tooltip,l=this.options.position,c=l.target,d=l.my,p=l.at,u=l.viewport,f=l.container,g=l.adjust,m=g.method.split(" "),v=h.outerWidth(k),y=h.outerHeight(k),b=0,w=0,_=h.css("position"),x={left:0,top:0},q=h[0].offsetWidth>0,C=i&&"scroll"===i.type,T=s(t),j=f[0].ownerDocument,z=this.mouse;if(s.isArray(c)&&2===c.length)p={x:F,y:D},x={left:c[0],top:c[1]};else if("mouse"===c)p={x:F,y:D},!z||!z.pageX||!g.mouse&&i&&i.pageX?i&&i.pageX||((!g.mouse||this.options.show.distance)&&a.origin&&a.origin.pageX?i=a.origin:(!i||i&&("resize"===i.type||"scroll"===i.type))&&(i=a.event)):i=z,"static"!==_&&(x=f.offset()),j.body.offsetWidth!==(t.innerWidth||j.documentElement.clientWidth)&&(r=s(e.body).offset()),x={left:i.pageX-x.left+(r&&r.left||0),top:i.pageY-x.top+(r&&r.top||0)},g.mouse&&C&&z&&(x.left-=(z.scrollX||0)-T.scrollLeft(),x.top-=(z.scrollY||0)-T.scrollTop());else{if("event"===c?i&&i.target&&"scroll"!==i.type&&"resize"!==i.type?a.target=s(i.target):i.target||(a.target=this.elements.target):"event"!==c&&(a.target=s(c.jquery?c:this.elements.target)),c=a.target,c=s(c).eq(0),0===c.length)return this;c[0]===e||c[0]===t?(b=oe.iOS?t.innerWidth:c.width(),w=oe.iOS?t.innerHeight:c.height(),c[0]===t&&(x={top:(u||c).scrollTop(),left:(u||c).scrollLeft()})):R.imagemap&&c.is("area")?n=R.imagemap(this,c,p,R.viewport?m:k):R.svg&&c&&c[0].ownerSVGElement?n=R.svg(this,c,p,R.viewport?m:k):(b=c.outerWidth(k),w=c.outerHeight(k),x=c.offset()),n&&(b=n.width,w=n.height,r=n.offset,x=n.position),x=this.reposition.offset(c,x,f),(oe.iOS>3.1&&4.1>oe.iOS||oe.iOS>=4.3&&4.33>oe.iOS||!oe.iOS&&"fixed"===_)&&(x.left-=T.scrollLeft(),x.top-=T.scrollTop()),(!n||n&&n.adjustable!==k)&&(x.left+=p.x===P?b:p.x===N?b/2:0,x.top+=p.y===O?w:p.y===N?w/2:0)}return x.left+=g.x+(d.x===P?-v:d.x===N?-v/2:0),x.top+=g.y+(d.y===O?-y:d.y===N?-y/2:0),R.viewport?(x.adjusted=R.viewport(this,x,l,b,w,v,y),r&&x.adjusted.left&&(x.left+=r.left),r&&x.adjusted.top&&(x.top+=r.top)):x.adjusted={left:0,top:0},this._trigger("move",[x,u.elem||u],i)?(delete x.adjusted,o===k||!q||isNaN(x.left)||isNaN(x.top)||"mouse"===c||!s.isFunction(l.effect)?h.css(x):s.isFunction(l.effect)&&(l.effect.call(h,this,s.extend({},x)),h.queue(function(t){s(this).css({opacity:"",height:""}),oe.ie&&this.style.removeAttribute("filter"),t()})),this.positioning=k,this):this},j.reposition.offset=function(t,i,o){function n(t,e){i.left+=e*t.scrollLeft(),i.top+=e*t.scrollTop()}if(!o[0])return i;var r,a,h,l,c=s(t[0].ownerDocument),d=!!oe.ie&&"CSS1Compat"!==e.compatMode,p=o[0];do"static"!==(a=s.css(p,"position"))&&("fixed"===a?(h=p.getBoundingClientRect(),n(c,-1)):(h=s(p).position(),h.left+=parseFloat(s.css(p,"borderLeftWidth"))||0,h.top+=parseFloat(s.css(p,"borderTopWidth"))||0),i.left-=h.left+(parseFloat(s.css(p,"marginLeft"))||0),i.top-=h.top+(parseFloat(s.css(p,"marginTop"))||0),r||"hidden"===(l=s.css(p,"overflow"))||"visible"===l||(r=s(p)));while(p=p.offsetParent);return r&&(r[0]!==c[0]||d)&&n(r,1),i};var ae=(z=j.reposition.Corner=function(t,e){t=(""+t).replace(/([A-Z])/," $1").replace(/middle/gi,N).toLowerCase(),this.x=(t.match(/left|right/i)||t.match(/center/)||["inherit"])[0].toLowerCase(),this.y=(t.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase(),this.forceY=!!e;var i=t.charAt(0);this.precedance="t"===i||"b"===i?L:S}).prototype;ae.invert=function(t,e){this[t]=this[t]===F?P:this[t]===P?F:e||this[t]},ae.string=function(){var t=this.x,e=this.y;return t===e?t:this.precedance===L||this.forceY&&"center"!==e?e+" "+t:t+" "+e},ae.abbrev=function(){var t=this.string().split(" ");return t[0].charAt(0)+(t[1]&&t[1].charAt(0)||"")},ae.clone=function(){return new z(this.string(),this.forceY)},j.toggle=function(t,i){var o=this.cache,n=this.options,r=this.tooltip;if(i){if(/over|enter/.test(i.type)&&/out|leave/.test(o.event.type)&&n.show.target.add(i.target).length===n.show.target.length&&r.has(i.relatedTarget).length)return this;o.event=d(i)}if(this.waiting&&!t&&(this.hiddenDuringWait=W),!this.rendered)return t?this.render(1):this;if(this.destroyed||this.disabled)return this;var a,h,l,c=t?"show":"hide",p=this.options[c],u=(this.options[t?"hide":"show"],this.options.position),f=this.options.content,g=this.tooltip.css("width"),m=this.tooltip.is(":visible"),v=t||1===p.target.length,y=!i||2>p.target.length||o.target[0]===i.target;return(typeof t).search("boolean|number")&&(t=!m),a=!r.is(":animated")&&m===t&&y,h=a?E:!!this._trigger(c,[90]),this.destroyed?this:(h!==k&&t&&this.focus(i),!h||a?this:(s.attr(r[0],"aria-hidden",!t),t?(o.origin=d(this.mouse),s.isFunction(f.text)&&this._updateContent(f.text,k),s.isFunction(f.title)&&this._updateTitle(f.title,k),!I&&"mouse"===u.target&&u.adjust.mouse&&(s(e).bind("mousemove."+X,this._storeMouse),I=W),g||r.css("width",r.outerWidth(k)),this.reposition(i,arguments[2]),g||r.css("width",""),p.solo&&("string"==typeof p.solo?s(p.solo):s(U,p.solo)).not(r).not(p.target).qtip("hide",s.Event("tooltipsolo"))):(clearTimeout(this.timers.show),delete o.origin,I&&!s(U+'[tracking="true"]:visible',p.solo).not(r).length&&(s(e).unbind("mousemove."+X),I=k),this.blur(i)),l=s.proxy(function(){t?(oe.ie&&r[0].style.removeAttribute("filter"),r.css("overflow",""),"string"==typeof p.autofocus&&s(this.options.show.autofocus,r).focus(),this.options.show.target.trigger("qtip-"+this.id+"-inactive")):r.css({display:"",visibility:"",opacity:"",left:"",top:""}),this._trigger(t?"visible":"hidden")},this),p.effect===k||v===k?(r[c](),l()):s.isFunction(p.effect)?(r.stop(1,1),p.effect.call(r,this),r.queue("fx",function(t){l(),t()})):r.fadeTo(90,t?1:0,l),t&&p.target.trigger("qtip-"+this.id+"-inactive"),this))},j.show=function(t){return this.toggle(W,t)},j.hide=function(t){return this.toggle(k,t)},j.focus=function(t){if(!this.rendered||this.destroyed)return this;var e=s(U),i=this.tooltip,o=parseInt(i[0].style.zIndex,10),n=T.zindex+e.length;return i.hasClass(Z)||this._trigger("focus",[n],t)&&(o!==n&&(e.each(function(){this.style.zIndex>o&&(this.style.zIndex=this.style.zIndex-1)}),e.filter("."+Z).qtip("blur",t)),i.addClass(Z)[0].style.zIndex=n),this},j.blur=function(t){return!this.rendered||this.destroyed?this:(this.tooltip.removeClass(Z),this._trigger("blur",[this.tooltip.css("zIndex")],t),this)},j.disable=function(t){return this.destroyed?this:("toggle"===t?t=!(this.rendered?this.tooltip.hasClass(ee):this.disabled):"boolean"!=typeof t&&(t=W),this.rendered&&this.tooltip.toggleClass(ee,t).attr("aria-disabled",t),this.disabled=!!t,this)},j.enable=function(){return this.disable(k)},j._createButton=function(){var t=this,e=this.elements,i=e.tooltip,o=this.options.content.button,n="string"==typeof o,r=n?o:"Close tooltip";e.button&&e.button.remove(),e.button=o.jquery?o:s("<a />",{"class":"qtip-close "+(this.options.style.widget?"":X+"-icon"),title:r,"aria-label":r}).prepend(s("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"})),e.button.appendTo(e.titlebar||i).attr("role","button").click(function(e){return i.hasClass(ee)||t.hide(e),k})},j._updateButton=function(t){if(!this.rendered)return k;var e=this.elements.button;t?this._createButton():e.remove()},j._setWidget=function(){var t=this.options.style.widget,e=this.elements,i=e.tooltip,s=i.hasClass(ee);i.removeClass(ee),ee=t?"ui-state-disabled":"qtip-disabled",i.toggleClass(ee,s),i.toggleClass("ui-helper-reset "+c(),t).toggleClass(K,this.options.style.def&&!t),e.content&&e.content.toggleClass(c("content"),t),e.titlebar&&e.titlebar.toggleClass(c("header"),t),e.button&&e.button.toggleClass(X+"-icon",!t)},j._storeMouse=function(t){(this.mouse=d(t)).type="mousemove"},j._bind=function(t,e,i,o,n){var r="."+this._id+(o?"-"+o:"");e.length&&s(t).bind((e.split?e:e.join(r+" "))+r,s.proxy(i,n||this))},j._unbind=function(t,e){s(t).unbind("."+this._id+(e?"-"+e:""))};var he="."+X;s(function(){v(U,["mouseenter","mouseleave"],function(t){var e="mouseenter"===t.type,i=s(t.currentTarget),o=s(t.relatedTarget||t.target),n=this.options;e?(this.focus(t),i.hasClass(J)&&!i.hasClass(ee)&&clearTimeout(this.timers.hide)):"mouse"===n.position.target&&n.hide.event&&n.show.target&&!o.closest(n.show.target[0]).length&&this.hide(t),i.toggleClass(te,e)}),v("["+H+"]",Q,g)}),j._trigger=function(t,e,i){var o=s.Event("tooltip"+t);return o.originalEvent=i&&s.extend({},i)||this.cache.event||E,this.triggering=t,this.tooltip.trigger(o,[this].concat(e||[])),this.triggering=k,!o.isDefaultPrevented()},j._bindEvents=function(t,e,o,n,r,a){if(n.add(o).length===n.length){var h=[];e=s.map(e,function(e){var o=s.inArray(e,t);return o>-1?(h.push(t.splice(o,1)[0]),i):e}),h.length&&this._bind(o,h,function(t){var e=this.rendered?this.tooltip[0].offsetWidth>0:!1;(e?a:r).call(this,t)})}this._bind(o,t,r),this._bind(n,e,a)},j._assignInitialEvents=function(t){function e(t){return this.disabled||this.destroyed?k:(this.cache.event=d(t),this.cache.target=t?s(t.target):[i],clearTimeout(this.timers.show),this.timers.show=p.call(this,function(){this.render("object"==typeof t||o.show.ready)},o.show.delay),i)}var o=this.options,n=o.show.target,r=o.hide.target,a=o.show.event?s.trim(""+o.show.event).split(" "):[],h=o.hide.event?s.trim(""+o.hide.event).split(" "):[];/mouse(over|enter)/i.test(o.show.event)&&!/mouse(out|leave)/i.test(o.hide.event)&&h.push("mouseleave"),this._bind(n,"mousemove",function(t){this._storeMouse(t),this.cache.onTarget=W}),this._bindEvents(a,h,n,r,e,function(){clearTimeout(this.timers.show)}),(o.show.ready||o.prerender)&&e.call(this,t)},j._assignEvents=function(){var i=this,o=this.options,n=o.position,r=this.tooltip,a=o.show.target,h=o.hide.target,l=n.container,c=n.viewport,d=s(e),p=(s(e.body),s(t)),v=o.show.event?s.trim(""+o.show.event).split(" "):[],y=o.hide.event?s.trim(""+o.hide.event).split(" "):[];s.each(o.events,function(t,e){i._bind(r,"toggle"===t?["tooltipshow","tooltiphide"]:["tooltip"+t],e,null,r)}),/mouse(out|leave)/i.test(o.hide.event)&&"window"===o.hide.leave&&this._bind(d,["mouseout","blur"],function(t){/select|option/.test(t.target.nodeName)||t.relatedTarget||this.hide(t)}),o.hide.fixed?h=h.add(r.addClass(J)):/mouse(over|enter)/i.test(o.show.event)&&this._bind(h,"mouseleave",function(){clearTimeout(this.timers.show)}),(""+o.hide.event).indexOf("unfocus")>-1&&this._bind(l.closest("html"),["mousedown","touchstart"],function(t){var e=s(t.target),i=this.rendered&&!this.tooltip.hasClass(ee)&&this.tooltip[0].offsetWidth>0,o=e.parents(U).filter(this.tooltip[0]).length>0;e[0]===this.target[0]||e[0]===this.tooltip[0]||o||this.target.has(e[0]).length||!i||this.hide(t)}),"number"==typeof o.hide.inactive&&(this._bind(a,"qtip-"+this.id+"-inactive",g),this._bind(h.add(r),T.inactiveEvents,g,"-inactive")),this._bindEvents(v,y,a,h,u,f),this._bind(a.add(r),"mousemove",function(t){if("number"==typeof o.hide.distance){var e=this.cache.origin||{},i=this.options.hide.distance,s=Math.abs;(s(t.pageX-e.pageX)>=i||s(t.pageY-e.pageY)>=i)&&this.hide(t)}this._storeMouse(t)}),"mouse"===n.target&&n.adjust.mouse&&(o.hide.event&&this._bind(a,["mouseenter","mouseleave"],function(t){this.cache.onTarget="mouseenter"===t.type}),this._bind(d,"mousemove",function(t){this.rendered&&this.cache.onTarget&&!this.tooltip.hasClass(ee)&&this.tooltip[0].offsetWidth>0&&this.reposition(t)})),(n.adjust.resize||c.length)&&this._bind(s.event.special.resize?c:p,"resize",m),n.adjust.scroll&&this._bind(p.add(n.container),"scroll",m)},j._unassignEvents=function(){var i=[this.options.show.target[0],this.options.hide.target[0],this.rendered&&this.tooltip[0],this.options.position.container[0],this.options.position.viewport[0],this.options.position.container.closest("html")[0],t,e];this._unbind(s([]).pushStack(s.grep(i,function(t){return"object"==typeof t})))},T=s.fn.qtip=function(t,e,o){var n=(""+t).toLowerCase(),r=E,h=s.makeArray(arguments).slice(1),l=h[h.length-1],c=this[0]?s.data(this[0],X):E;return!arguments.length&&c||"api"===n?c:"string"==typeof t?(this.each(function(){var t=s.data(this,X);if(!t)return W;if(l&&l.timeStamp&&(t.cache.event=l),!e||"option"!==n&&"options"!==n)t[n]&&t[n].apply(t,h);else{if(o===i&&!s.isPlainObject(e))return r=t.get(e),k;t.set(e,o)}}),r!==E?r:this):"object"!=typeof t&&arguments.length?i:(c=a(s.extend(W,{},t)),this.each(function(t){var e,o;return o=s.isArray(c.id)?c.id[t]:c.id,o=!o||o===k||1>o.length||T.api[o]?T.nextid++:o,e=y(s(this),o,c),e===k?W:(T.api[o]=e,s.each(R,function(){"initialize"===this.initialize&&this(e)}),e._assignInitialEvents(l),i)}))},s.qtip=o,T.api={},s.each({attr:function(t,e){if(this.length){var i=this[0],o="title",n=s.data(i,"qtip");if(t===o&&n&&"object"==typeof n&&n.options.suppress)return 2>arguments.length?s.attr(i,se):(n&&n.options.content.attr===o&&n.cache.attr&&n.set("content.text",e),this.attr(se,e))}return s.fn["attr"+ie].apply(this,arguments)},clone:function(t){var e=(s([]),s.fn["clone"+ie].apply(this,arguments));return t||e.filter("["+se+"]").attr("title",function(){return s.attr(this,se)}).removeAttr(se),e}},function(t,e){if(!e||s.fn[t+ie])return W;var i=s.fn[t+ie]=s.fn[t];s.fn[t]=function(){return e.apply(this,arguments)||i.apply(this,arguments)}}),s.ui||(s["cleanData"+ie]=s.cleanData,s.cleanData=function(t){for(var e,i=0;(e=s(t[i])).length;i++)if(e.attr(Y))try{e.triggerHandler("removeqtip")}catch(o){}s["cleanData"+ie].apply(this,arguments)}),T.version="2.0.1-257",T.nextid=0,T.inactiveEvents=Q,T.zindex=15e3,T.defaults={prerender:k,id:k,overwrite:W,suppress:W,content:{text:W,attr:"title",title:k,button:k},position:{my:"top left",at:"bottom right",target:k,container:k,viewport:k,adjust:{x:0,y:0,mouse:W,scroll:W,resize:W,method:"flipinvert flipinvert"},effect:function(t,e){s(this).animate(e,{duration:200,queue:k})}},show:{target:k,event:"mouseenter",effect:W,delay:90,solo:k,ready:k,autofocus:k},hide:{target:k,event:"mouseleave",effect:W,delay:0,fixed:k,inactive:k,leave:"window",distance:k},style:{classes:"",widget:k,width:k,height:k,def:W},events:{render:E,move:E,show:E,hide:E,toggle:E,visible:E,hidden:E,focus:E,blur:E}};var le,ce="margin",de="border",pe="color",ue="background-color",fe="transparent",ge=" !important",me=!!e.createElement("canvas").getContext,ve=/rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,ye={},be=["Webkit","O","Moz","ms"];if(me)var we=t.devicePixelRatio||1,_e=function(){var t=e.createElement("canvas").getContext("2d");return t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||1}(),xe=we/_e;else var qe=function(t,e,i){return"<qtipvml:"+t+' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" '+(e||"")+' style="behavior: url(#default#VML); '+(i||"")+'" />'};s.extend(x.prototype,{init:function(t){var e,i;i=this.element=t.elements.tip=s("<div />",{"class":X+"-tip"}).prependTo(t.tooltip),me?(e=s("<canvas />").appendTo(this.element)[0].getContext("2d"),e.lineJoin="miter",e.miterLimit=1e5,e.save()):(e=qe("shape",'coordorigin="0,0"',"position:absolute;"),this.element.html(e+e),t._bind(s("*",i).add(i),["click","mousedown"],function(t){t.stopPropagation()},this._ns)),t._bind(t.tooltip,"tooltipmove",this.reposition,this._ns,this),this.create()},_swapDimensions:function(){this.size[0]=this.options.height,this.size[1]=this.options.width},_resetDimensions:function(){this.size[0]=this.options.width,this.size[1]=this.options.height},_useTitle:function(t){var e=this.qtip.elements.titlebar;return e&&(t.y===D||t.y===N&&this.element.position().top+this.size[1]/2+this.options.offset<e.outerHeight(W))},_parseCorner:function(t){var e=this.qtip.options.position.my;return t===k||e===k?t=k:t===W?t=new z(e.string()):t.string||(t=new z(t),t.fixed=W),t},_parseWidth:function(t,e,i){var s=this.qtip.elements,o=de+b(e)+"Width";return(i?_(i,o):_(s.content,o)||_(this._useTitle(t)&&s.titlebar||s.content,o)||_(s.tooltip,o))||0},_parseRadius:function(t){var e=this.qtip.elements,i=de+b(t.y)+b(t.x)+"Radius";return 9>oe.ie?0:_(this._useTitle(t)&&e.titlebar||e.content,i)||_(e.tooltip,i)||0},_invalidColour:function(t,e,i){var s=t.css(e);return!s||i&&s===t.css(i)||ve.test(s)?k:s},_parseColours:function(t){var e=this.qtip.elements,i=this.element.css("cssText",""),o=de+b(t[t.precedance])+b(pe),n=this._useTitle(t)&&e.titlebar||e.content,r=this._invalidColour,a=[];return a[0]=r(i,ue)||r(n,ue)||r(e.content,ue)||r(e.tooltip,ue)||i.css(ue),a[1]=r(i,o,pe)||r(n,o,pe)||r(e.content,o,pe)||r(e.tooltip,o,pe)||e.tooltip.css(o),s("*",i).add(i).css("cssText",ue+":"+fe+ge+";"+de+":0"+ge+";"),a},_calculateSize:function(t){var e,i,s,o=t.precedance===L,n=this.options.width,r=this.options.height,a="c"===t.abbrev(),h=(o?n:r)*(a?.5:1),l=Math.pow,c=Math.round,d=Math.sqrt(l(h,2)+l(r,2)),p=[this.border/h*d,this.border/r*d];return p[2]=Math.sqrt(l(p[0],2)-l(this.border,2)),p[3]=Math.sqrt(l(p[1],2)-l(this.border,2)),e=d+p[2]+p[3]+(a?0:p[0]),i=e/d,s=[c(i*n),c(i*r)],o?s:s.reverse()},_calculateTip:function(t,e,i){i=i||1,e=e||this.size;var s=e[0]*i,o=e[1]*i,n=Math.ceil(s/2),r=Math.ceil(o/2),a={br:[0,0,s,o,s,0],bl:[0,0,s,0,0,o],tr:[0,o,s,0,s,o],tl:[0,0,0,o,s,o],tc:[0,o,n,0,s,o],bc:[0,0,s,0,n,o],rc:[0,0,s,r,0,o],lc:[s,0,s,o,0,r]};return a.lt=a.br,a.rt=a.bl,a.lb=a.tr,a.rb=a.tl,a[t.abbrev()]},_drawCoords:function(t,e){t.beginPath(),t.moveTo(e[0],e[1]),t.lineTo(e[2],e[3]),t.lineTo(e[4],e[5]),t.closePath()},create:function(){var t=this.corner=(me||oe.ie)&&this._parseCorner(this.options.corner);return(this.enabled=!!this.corner&&"c"!==this.corner.abbrev())&&(this.qtip.cache.corner=t.clone(),this.update()),this.element.toggle(this.enabled),this.corner},update:function(e,i){if(!this.enabled)return this;var o,n,r,a,h,l,c,d,p=this.qtip.elements,u=this.element,f=u.children(),g=this.options,m=this.size,v=g.mimic,y=Math.round;e||(e=this.qtip.cache.corner||this.corner),v===k?v=e:(v=new z(v),v.precedance=e.precedance,"inherit"===v.x?v.x=e.x:"inherit"===v.y?v.y=e.y:v.x===v.y&&(v[e.precedance]=e[e.precedance])),n=v.precedance,e.precedance===S?this._swapDimensions():this._resetDimensions(),o=this.color=this._parseColours(e),o[1]!==fe?(d=this.border=this._parseWidth(e,e[e.precedance]),g.border&&1>d&&!ve.test(o[1])&&(o[0]=o[1]),this.border=d=g.border!==W?g.border:d):this.border=d=0,c=this.size=this._calculateSize(e),u.css({width:c[0],height:c[1],lineHeight:c[1]+"px"}),l=e.precedance===L?[y(v.x===F?d:v.x===P?c[0]-m[0]-d:(c[0]-m[0])/2),y(v.y===D?c[1]-m[1]:0)]:[y(v.x===F?c[0]-m[0]:0),y(v.y===D?d:v.y===O?c[1]-m[1]-d:(c[1]-m[1])/2)],me?(r=f[0].getContext("2d"),r.restore(),r.save(),r.clearRect(0,0,6e3,6e3),a=this._calculateTip(v,m,xe),h=this._calculateTip(v,this.size,xe),f.attr(A,c[0]*xe).attr(B,c[1]*xe),f.css(A,c[0]).css(B,c[1]),this._drawCoords(r,h),r.fillStyle=o[1],r.fill(),r.translate(l[0]*xe,l[1]*xe),this._drawCoords(r,a),r.fillStyle=o[0],r.fill()):(a=this._calculateTip(v),a="m"+a[0]+","+a[1]+" l"+a[2]+","+a[3]+" "+a[4]+","+a[5]+" xe",l[2]=d&&/^(r|b)/i.test(e.string())?8===oe.ie?2:1:0,f.css({coordsize:c[0]+d+" "+(c[1]+d),antialias:""+(v.string().indexOf(N)>-1),left:l[0]-l[2]*Number(n===S),top:l[1]-l[2]*Number(n===L),width:c[0]+d,height:c[1]+d}).each(function(t){var e=s(this);e[e.prop?"prop":"attr"]({coordsize:c[0]+d+" "+(c[1]+d),path:a,fillcolor:o[0],filled:!!t,stroked:!t}).toggle(!(!d&&!t)),!t&&e.html(qe("stroke",'weight="'+2*d+'px" color="'+o[1]+'" miterlimit="1000" joinstyle="miter"'))})),t.opera&&setTimeout(function(){p.tip.css({display:"inline-block",visibility:"visible"})},1),i!==k&&this.calculate(e,c)},calculate:function(t,e){if(!this.enabled)return k;var i,o,n=this,r=this.qtip.elements,a=this.element,h=this.options.offset,l=(r.tooltip.hasClass("ui-widget"),{});return t=t||this.corner,i=t.precedance,e=e||this._calculateSize(t),o=[t.x,t.y],i===S&&o.reverse(),s.each(o,function(s,o){var a,c,d;o===N?(a=i===L?F:D,l[a]="50%",l[ce+"-"+a]=-Math.round(e[i===L?0:1]/2)+h):(a=n._parseWidth(t,o,r.tooltip),c=n._parseWidth(t,o,r.content),d=n._parseRadius(t),l[o]=Math.max(-n.border,s?c:h+(d>a?d:-a)))
}),l[t[i]]-=e[i===S?0:1],a.css({margin:"",top:"",bottom:"",left:"",right:""}).css(l),l},reposition:function(t,e,s){function o(t,e,i,s,o){t===V&&l.precedance===e&&c[s]&&l[i]!==N?l.precedance=l.precedance===S?L:S:t!==V&&c[s]&&(l[e]=l[e]===N?c[s]>0?s:o:l[e]===s?o:s)}function n(t,e,o){l[t]===N?g[ce+"-"+e]=f[t]=r[ce+"-"+e]-c[e]:(a=r[o]!==i?[c[e],-r[e]]:[-c[e],r[e]],(f[t]=Math.max(a[0],a[1]))>a[0]&&(s[e]-=c[e],f[e]=k),g[r[o]!==i?o:e]=f[t])}if(this.enabled){var r,a,h=e.cache,l=this.corner.clone(),c=s.adjusted,d=e.options.position.adjust.method.split(" "),p=d[0],u=d[1]||d[0],f={left:k,top:k,x:0,y:0},g={};this.corner.fixed!==W&&(o(p,S,L,F,P),o(u,L,S,D,O),l.string()===h.corner.string()||h.cornerTop===c.top&&h.cornerLeft===c.left||this.update(l,k)),r=this.calculate(l),r.right!==i&&(r.left=-r.right),r.bottom!==i&&(r.top=-r.bottom),r.user=this.offset,(f.left=p===V&&!!c.left)&&n(S,F,P),(f.top=u===V&&!!c.top)&&n(L,D,O),this.element.css(g).toggle(!(f.x&&f.y||l.x===N&&f.y||l.y===N&&f.x)),s.left-=r.left.charAt?r.user:p!==V||f.top||!f.left&&!f.top?r.left+this.border:0,s.top-=r.top.charAt?r.user:u!==V||f.left||!f.left&&!f.top?r.top+this.border:0,h.cornerLeft=c.left,h.cornerTop=c.top,h.corner=l.clone()}},destroy:function(){this.qtip._unbind(this.qtip.tooltip,this._ns),this.qtip.elements.tip&&this.qtip.elements.tip.find("*").remove().end().remove()}}),le=R.tip=function(t){return new x(t,t.options.style.tip)},le.initialize="render",le.sanitize=function(t){if(t.style&&"tip"in t.style){var e=t.style.tip;"object"!=typeof e&&(e=t.style.tip={corner:e}),/string|boolean/i.test(typeof e.corner)||(e.corner=W)}},M.tip={"^position.my|style.tip.(corner|mimic|border)$":function(){this.create(),this.qtip.reposition()},"^style.tip.(height|width)$":function(t){this.size=[t.width,t.height],this.update(),this.qtip.reposition()},"^content.title|style.(classes|widget)$":function(){this.update()}},s.extend(W,T.defaults,{style:{tip:{corner:W,mimic:k,width:6,height:6,border:W,offset:0}}});var Ce,Te,je="qtip-modal",ze="."+je;Te=function(){function t(t){if(s.expr[":"].focusable)return s.expr[":"].focusable;var e,i,o,n=!isNaN(s.attr(t,"tabindex")),r=t.nodeName&&t.nodeName.toLowerCase();return"area"===r?(e=t.parentNode,i=e.name,t.href&&i&&"map"===e.nodeName.toLowerCase()?(o=s("img[usemap=#"+i+"]")[0],!!o&&o.is(":visible")):!1):/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||n:n}function i(t){1>c.length&&t.length?t.not("body").blur():c.first().focus()}function o(t){if(h.is(":visible")){var e,o=s(t.target),a=n.tooltip,l=o.closest(U);e=1>l.length?k:parseInt(l[0].style.zIndex,10)>parseInt(a[0].style.zIndex,10),e||o.closest(U)[0]===a[0]||i(o),r=t.target===c[c.length-1]}}var n,r,a,h,l=this,c={};s.extend(l,{init:function(){return h=l.elem=s("<div />",{id:"qtip-overlay",html:"<div></div>",mousedown:function(){return k}}).hide(),s(e.body).bind("focusin"+ze,o),s(e).bind("keydown"+ze,function(t){n&&n.options.show.modal.escape&&27===t.keyCode&&n.hide(t)}),h.bind("click"+ze,function(t){n&&n.options.show.modal.blur&&n.hide(t)}),l},update:function(e){n=e,c=e.options.show.modal.stealfocus!==k?e.tooltip.find("*").filter(function(){return t(this)}):[]},toggle:function(t,o,r){var c=(s(e.body),t.tooltip),d=t.options.show.modal,p=d.effect,u=o?"show":"hide",f=h.is(":visible"),g=s(ze).filter(":visible:not(:animated)").not(c);return l.update(t),o&&d.stealfocus!==k&&i(s(":focus")),h.toggleClass("blurs",d.blur),o&&h.appendTo(e.body),h.is(":animated")&&f===o&&a!==k||!o&&g.length?l:(h.stop(W,k),s.isFunction(p)?p.call(h,o):p===k?h[u]():h.fadeTo(parseInt(r,10)||90,o?1:0,function(){o||h.hide()}),o||h.queue(function(t){h.css({left:"",top:""}),s(ze).length||h.detach(),t()}),a=o,n.destroyed&&(n=E),l)}}),l.init()},Te=new Te,s.extend(q.prototype,{init:function(t){var e=t.tooltip;return this.options.on?(t.elements.overlay=Te.elem,e.addClass(je).css("z-index",T.modal_zindex+s(ze).length),t._bind(e,["tooltipshow","tooltiphide"],function(t,i,o){var n=t.originalEvent;if(t.target===e[0])if(n&&"tooltiphide"===t.type&&/mouse(leave|enter)/.test(n.type)&&s(n.relatedTarget).closest(Te.elem[0]).length)try{t.preventDefault()}catch(r){}else(!n||n&&"tooltipsolo"!==n.type)&&this.toggle(t,"tooltipshow"===t.type,o)},this._ns,this),t._bind(e,"tooltipfocus",function(t,i){if(!t.isDefaultPrevented()&&t.target===e[0]){var o=s(ze),n=T.modal_zindex+o.length,r=parseInt(e[0].style.zIndex,10);Te.elem[0].style.zIndex=n-1,o.each(function(){this.style.zIndex>r&&(this.style.zIndex-=1)}),o.filter("."+Z).qtip("blur",t.originalEvent),e.addClass(Z)[0].style.zIndex=n,Te.update(i);try{t.preventDefault()}catch(a){}}},this._ns,this),t._bind(e,"tooltiphide",function(t){t.target===e[0]&&s(ze).filter(":visible").not(e).last().qtip("focus",t)},this._ns,this),i):this},toggle:function(t,e,s){return t&&t.isDefaultPrevented()?this:(Te.toggle(this.qtip,!!e,s),i)},destroy:function(){this.qtip.tooltip.removeClass(je),this.qtip._unbind(this.qtip.tooltip,this._ns),Te.toggle(this.qtip,k),delete this.qtip.elements.overlay}}),Ce=R.modal=function(t){return new q(t,t.options.show.modal)},Ce.sanitize=function(t){t.show&&("object"!=typeof t.show.modal?t.show.modal={on:!!t.show.modal}:t.show.modal.on===i&&(t.show.modal.on=W))},T.modal_zindex=T.zindex-200,Ce.initialize="render",M.modal={"^show.modal.(on|blur)$":function(){this.destroy(),this.init(),this.qtip.elems.overlay.toggle(this.qtip.tooltip[0].offsetWidth>0)}},s.extend(W,T.defaults,{show:{modal:{on:k,effect:W,blur:W,stealfocus:W,escape:W}}}),R.viewport=function(i,s,o,n,r,a,h){function l(t,e,i,o,n,r,a,h,l){var c=s[n],p=_[t],b=x[t],w=i===V,q=p===n?l:p===r?-l:-l/2,C=b===n?h:b===r?-h:-h/2,T=v[n]+y[n]-(f?0:u[n]),j=T-c,z=c+l-(a===A?g:m)-T,M=q-(_.precedance===t||p===_[e]?C:0)-(b===N?h/2:0);return w?(M=(p===n?1:-1)*q,s[n]+=j>0?j:z>0?-z:0,s[n]=Math.max(-u[n]+y[n],c-M,Math.min(Math.max(-u[n]+y[n]+(a===A?g:m),c+M),s[n],"center"===p?c-q:1e9))):(o*=i===$?2:0,j>0&&(p!==n||z>0)?(s[n]-=M+o,d.invert(t,n)):z>0&&(p!==r||j>0)&&(s[n]-=(p===N?-M:M)+o,d.invert(t,r)),v>s[n]&&-s[n]>z&&(s[n]=c,d=_.clone())),s[n]-c}var c,d,p,u,f,g,m,v,y,b=o.target,w=i.elements.tooltip,_=o.my,x=o.at,q=o.adjust,C=q.method.split(" "),T=C[0],j=C[1]||C[0],z=o.viewport,M=o.container,I=i.cache,W={left:0,top:0};return z.jquery&&b[0]!==t&&b[0]!==e.body&&"none"!==q.method?(u=M.offset()||W,f="static"===M.css("position"),c="fixed"===w.css("position"),g=z[0]===t?z.width():z.outerWidth(k),m=z[0]===t?z.height():z.outerHeight(k),v={left:c?0:z.scrollLeft(),top:c?0:z.scrollTop()},y=z.offset()||W,("shift"!==T||"shift"!==j)&&(d=_.clone()),W={left:"none"!==T?l(S,L,T,q.x,F,P,A,n,a):0,top:"none"!==j?l(L,S,j,q.y,D,O,B,r,h):0},d&&I.lastClass!==(p=X+"-pos-"+d.abbrev())&&w.removeClass(i.cache.lastClass).addClass(i.cache.lastClass=p),W):W},R.polys={polygon:function(t,e){var i,s,o,n={width:0,height:0,position:{top:1e10,right:0,bottom:0,left:1e10},adjustable:k},r=0,a=[],h=1,l=1,c=0,d=0;for(r=t.length;r--;)i=[parseInt(t[--r],10),parseInt(t[r+1],10)],i[0]>n.position.right&&(n.position.right=i[0]),i[0]<n.position.left&&(n.position.left=i[0]),i[1]>n.position.bottom&&(n.position.bottom=i[1]),i[1]<n.position.top&&(n.position.top=i[1]),a.push(i);if(s=n.width=Math.abs(n.position.right-n.position.left),o=n.height=Math.abs(n.position.bottom-n.position.top),"c"===e.abbrev())n.position={left:n.position.left+n.width/2,top:n.position.top+n.height/2};else{for(;s>0&&o>0&&h>0&&l>0;)for(s=Math.floor(s/2),o=Math.floor(o/2),e.x===F?h=s:e.x===P?h=n.width-s:h+=Math.floor(s/2),e.y===D?l=o:e.y===O?l=n.height-o:l+=Math.floor(o/2),r=a.length;r--&&!(2>a.length);)c=a[r][0]-n.position.left,d=a[r][1]-n.position.top,(e.x===F&&c>=h||e.x===P&&h>=c||e.x===N&&(h>c||c>n.width-h)||e.y===D&&d>=l||e.y===O&&l>=d||e.y===N&&(l>d||d>n.height-l))&&a.splice(r,1);n.position={left:a[0][0],top:a[0][1]}}return n},rect:function(t,e,i,s){return{width:Math.abs(i-t),height:Math.abs(s-e),position:{left:Math.min(t,i),top:Math.min(e,s)}}},_angles:{tc:1.5,tr:7/4,tl:5/4,bc:.5,br:.25,bl:.75,rc:2,lc:1,c:0},ellipse:function(t,e,i,s,o){var n=R.polys._angles[o.abbrev()],r=0===n?0:i*Math.cos(n*Math.PI),a=s*Math.sin(n*Math.PI);return{width:2*i-Math.abs(r),height:2*s-Math.abs(a),position:{left:t+r,top:e+a},adjustable:k}},circle:function(t,e,i,s){return R.polys.ellipse(t,e,i,i,s)}},R.svg=function(t,i,o){for(var n,r,a,h,l,c,d,p,u,f,g,m=s(e),v=i[0],y=s(v.ownerSVGElement),b=1,w=1,_=!0;!v.getBBox;)v=v.parentNode;if(!v.getBBox||!v.parentNode)return k;n=y.attr("width")||y.width()||parseInt(y.css("width"),10),r=y.attr("height")||y.height()||parseInt(y.css("height"),10);var x=(parseInt(i.css("stroke-width"),10)||0)/2;switch(x&&(b+=x/n,w+=x/r),v.nodeName){case"ellipse":case"circle":f=R.polys.ellipse(v.cx.baseVal.value,v.cy.baseVal.value,(v.rx||v.r).baseVal.value+x,(v.ry||v.r).baseVal.value+x,o);break;case"line":case"polygon":case"polyline":for(u=v.points||[{x:v.x1.baseVal.value,y:v.y1.baseVal.value},{x:v.x2.baseVal.value,y:v.y2.baseVal.value}],f=[],p=-1,c=u.numberOfItems||u.length;c>++p;)d=u.getItem?u.getItem(p):u[p],f.push.apply(f,[d.x,d.y]);f=R.polys.polygon(f,o);break;default:f=v.getBoundingClientRect(),f={width:f.width,height:f.height,position:{left:f.left,top:f.top}},_=!1}return g=f.position,y=y[0],_&&(y.createSVGPoint&&(a=v.getScreenCTM(),u=y.createSVGPoint(),u.x=g.left,u.y=g.top,h=u.matrixTransform(a),g.left=h.x,g.top=h.y),y.viewBox&&(l=y.viewBox.baseVal)&&l.width&&l.height&&(b*=n/l.width,w*=r/l.height)),g.left+=m.scrollLeft(),g.top+=m.scrollTop(),f},R.imagemap=function(t,e,i){e.jquery||(e=s(e));var o,n,r,a,h,l=e.attr("shape").toLowerCase().replace("poly","polygon"),c=s('img[usemap="#'+e.parent("map").attr("name")+'"]'),d=s.trim(e.attr("coords")),p=d.replace(/,$/,"").split(",");if(!c.length)return k;if("polygon"===l)a=R.polys.polygon(p,i);else{if(!R.polys[l])return k;for(r=-1,h=p.length,n=[];h>++r;)n.push(parseInt(p[r],10));a=R.polys[l].apply(this,n.concat(i))}return o=c.offset(),o.left+=Math.ceil((c.outerWidth(k)-c.width())/2),o.top+=Math.ceil((c.outerHeight(k)-c.height())/2),a.position.left+=o.left,a.position.top+=o.top,a};var Me,Ie='<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>';s.extend(C.prototype,{_scroll:function(){var e=this.qtip.elements.overlay;e&&(e[0].style.top=s(t).scrollTop()+"px")},init:function(i){var o=i.tooltip;1>s("select, object").length&&(this.bgiframe=i.elements.bgiframe=s(Ie).appendTo(o),i._bind(o,"tooltipmove",this.adjustBGIFrame,this._ns,this)),this.redrawContainer=s("<div/>",{id:X+"-rcontainer"}).appendTo(e.body),i.elements.overlay&&i.elements.overlay.addClass("qtipmodal-ie6fix")&&(i._bind(t,["scroll","resize"],this._scroll,this._ns,this),i._bind(o,["tooltipshow"],this._scroll,this._ns,this)),this.redraw()},adjustBGIFrame:function(){var t,e,i=this.qtip.tooltip,s={height:i.outerHeight(k),width:i.outerWidth(k)},o=this.qtip.plugins.tip,n=this.qtip.elements.tip;e=parseInt(i.css("borderLeftWidth"),10)||0,e={left:-e,top:-e},o&&n&&(t="x"===o.corner.precedance?[A,F]:[B,D],e[t[1]]-=n[t[0]]()),this.bgiframe.css(e).css(s)},redraw:function(){if(1>this.qtip.rendered||this.drawing)return this;var t,e,i,s,o=this.qtip.tooltip,n=this.qtip.options.style,r=this.qtip.options.position.container;return this.qtip.drawing=1,n.height&&o.css(B,n.height),n.width?o.css(A,n.width):(o.css(A,"").appendTo(this.redrawContainer),e=o.width(),1>e%2&&(e+=1),i=o.css("maxWidth")||"",s=o.css("minWidth")||"",t=(i+s).indexOf("%")>-1?r.width()/100:0,i=(i.indexOf("%")>-1?t:1)*parseInt(i,10)||e,s=(s.indexOf("%")>-1?t:1)*parseInt(s,10)||0,e=i+s?Math.min(Math.max(e,s),i):e,o.css(A,Math.round(e)).appendTo(r)),this.drawing=0,this},destroy:function(){this.bgiframe&&this.bgiframe.remove(),this.qtip._unbind([t,this.qtip.tooltip],this._ns)}}),Me=R.ie6=function(t){return 6===oe.ie?new C(t):k},Me.initialize="render",M.ie6={"^content|style$":function(){this.redraw()}}})})(window,document);
//@ sourceMappingURL=http://qtip2.com/v/nightly/jquery.qtip.min.map;

/**
 * Timeago is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
 *
 * @name timeago
 * @version 1.4.1
 * @requires jQuery v1.2.3+
 * @author Ryan McGeary
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * http://timeago.yarp.com/
 *
 * Copyright (c) 2008-2013, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
 */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    $.timeago = function(timestamp) {
        if (timestamp instanceof Date) {
            return inWords(timestamp);
        } else if (typeof timestamp === "string") {
            return inWords($.timeago.parse(timestamp));
        } else if (typeof timestamp === "number") {
            return inWords(new Date(timestamp));
        } else {
            return inWords($.timeago.datetime(timestamp));
        }
    };
    var $t = $.timeago;

    $.extend($.timeago, {
        settings: {
            refreshMillis: 60000,
            allowPast: true,
            allowFuture: false,
            localeTitle: false,
            cutoff: 0,
            strings: {
                prefixAgo: null,
                prefixFromNow: null,
                suffixAgo: trans_ago,
                suffixFromNow: trans_from_now,
                inPast: trans_any_moment,
                seconds: trans_less_than_minute,
                minute: trans_about_minute,
                minutes: "%d" + trans_minutes,
                hour: trans_about_hour,
                hours: trans_about + " %d " + trans_hours,
                day: trans_a_day,
                days: "%d " + trans_days,
                month: trans_about_month,
                months: "%d " + trans_months,
                year: trans_about_year,
                years: "%d " + trans_years,
                wordSeparator: " ",
                numbers: []
            }
        },

        inWords: function(distanceMillis) {
            if(!this.settings.allowPast && ! this.settings.allowFuture) {
                throw 'timeago allowPast and allowFuture settings can not both be set to false.';
            }

            var $l = this.settings.strings;
            var prefix = $l.prefixAgo;
            var suffix = $l.suffixAgo;
            if (this.settings.allowFuture) {
                if (distanceMillis < 0) {
                    prefix = $l.prefixFromNow;
                    suffix = $l.suffixFromNow;
                }
            }

            if(!this.settings.allowPast && distanceMillis >= 0) {
                return this.settings.strings.inPast;
            }

            var seconds = Math.abs(distanceMillis) / 1000;
            var minutes = seconds / 60;
            var hours = minutes / 60;
            var days = hours / 24;
            var years = days / 365;

            function substitute(stringOrFunction, number) {
                var string = $.isFunction(stringOrFunction) ? stringOrFunction(number, distanceMillis) : stringOrFunction;
                var value = ($l.numbers && $l.numbers[number]) || number;
                return string.replace(/%d/i, value);
            }

            var words = seconds < 45 && substitute($l.seconds, Math.round(seconds)) ||
                seconds < 90 && substitute($l.minute, 1) ||
                minutes < 45 && substitute($l.minutes, Math.round(minutes)) ||
                minutes < 90 && substitute($l.hour, 1) ||
                hours < 24 && substitute($l.hours, Math.round(hours)) ||
                hours < 42 && substitute($l.day, 1) ||
                days < 30 && substitute($l.days, Math.round(days)) ||
                days < 45 && substitute($l.month, 1) ||
                days < 365 && substitute($l.months, Math.round(days / 30)) ||
                years < 1.5 && substitute($l.year, 1) ||
                substitute($l.years, Math.round(years));

            var separator = $l.wordSeparator || "";
            if ($l.wordSeparator === undefined) { separator = " "; }
            return $.trim([prefix, words, suffix].join(separator));
        },

        parse: function(iso8601) {
            var s = $.trim(iso8601);
            s = s.replace(/\.\d+/,""); // remove milliseconds
            s = s.replace(/-/,"/").replace(/-/,"/");
            s = s.replace(/T/," ").replace(/Z/," UTC");
            s = s.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"); // -04:00 -> -0400
            s = s.replace(/([\+\-]\d\d)$/," $100"); // +09 -> +0900
            return new Date(s);
        },
        datetime: function(elem) {
            var iso8601 = $t.isTime(elem) ? $(elem).attr("datetime") : $(elem).attr("title");
            return $t.parse(iso8601);
        },
        isTime: function(elem) {
            // jQuery's `is()` doesn't play well with HTML5 in IE
            return $(elem).get(0).tagName.toLowerCase() === "time"; // $(elem).is("time");
        }
    });

    // functions that can be called via $(el).timeago('action')
    // init is default when no action is given
    // functions are called with context of a single element
    var functions = {
        init: function(){
            var refresh_el = $.proxy(refresh, this);
            refresh_el();
            var $s = $t.settings;
            if ($s.refreshMillis > 0) {
                this._timeagoInterval = setInterval(refresh_el, $s.refreshMillis);
            }
        },
        update: function(time){
            var parsedTime = $t.parse(time);
            $(this).data('timeago', { datetime: parsedTime });
            if($t.settings.localeTitle) $(this).attr("title", parsedTime.toLocaleString());
            refresh.apply(this);
        },
        updateFromDOM: function(){
            $(this).data('timeago', { datetime: $t.parse( $t.isTime(this) ? $(this).attr("datetime") : $(this).attr("title") ) });
            refresh.apply(this);
        },
        dispose: function () {
            if (this._timeagoInterval) {
                window.clearInterval(this._timeagoInterval);
                this._timeagoInterval = null;
            }
        }
    };

    $.fn.timeago = function(action, options) {
        var fn = action ? functions[action] : functions.init;
        if(!fn){
            throw new Error("Unknown function name '"+ action +"' for timeago");
        }
        // each over objects here and call the requested function
        this.each(function(){
            fn.call(this, options);
        });
        return this;
    };

    function refresh() {
        var data = prepareData(this);
        var $s = $t.settings;

        if (!isNaN(data.datetime)) {
            if ( $s.cutoff == 0 || Math.abs(distance(data.datetime)) < $s.cutoff) {
                $(this).text(inWords(data.datetime));
            }
        }
        return this;
    }

    function prepareData(element) {
        element = $(element);
        if (!element.data("timeago")) {
            element.data("timeago", { datetime: $t.datetime(element) });
            var text = $.trim(element.text());
            if ($t.settings.localeTitle) {
                element.attr("title", element.data('timeago').datetime.toLocaleString());
            } else if (text.length > 0 && !($t.isTime(element) && element.attr("title"))) {
                element.attr("title", text);
            }
        }
        return element.data("timeago");
    }

    function inWords(date) {
        return $t.inWords(distance(date));
    }

    function distance(date) {
        return (new Date().getTime() - date.getTime());
    }

    // fix for IE6 suckage
    document.createElement("abbr");
    document.createElement("time");
}));

$(function () {
    setInterval(function () {

            if ( $('.ajax-time').length > 0) {
                $('.ajax-time').timeago()
                    .removeClass('.ajax-time');
            }
        },
        2000);
});;/* ===========================================================
 * bootstrap-confirmation.js v1.0.1
 * http://ethaizone.github.io/Bootstrap-Confirmation/
 * ===========================================================
 * Copyright 2013 Nimit Suwannagate <ethaizone@hotmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================== */


!function ($) {

	"use strict"; // jshint ;_;


 /* CONFIRMATION PUBLIC CLASS DEFINITION
	* =============================== */

	//var for check event at body can have only one.
	var event_body = false;

	var Confirmation = function (element, options) {
		var that = this;

		// remove href attribute of button
		$(element).removeAttr('href')

		this.init('confirmation', element, options)

		$(element).on('show', function(e) {
			var options = that.options;
			var all = options.all_selector;
			if(options.singleton) {
				$(all).not(that.$element).confirmation('hide');
			}
		});

		$(element).on('shown', function(e) {
			var options = that.options;
			var all = options.all_selector;
			$(this).next('.popover').one('click.dismiss.confirmation', '[data-dismiss="confirmation"]', $.proxy(that.hide, that))
			if(that.isPopout()) {
				if(!event_body) {
					event_body = $('body').on('click', function (e) {
						if($(all).is(e.target)) return;
						if($(all).has(e.target).length) return;
						if($(all).next('div').has(e.target).length) return;

						$(all).confirmation('hide');
						$('body').unbind(e);
						event_body = false;

						return;
					});
				}
			}
		});
	}


	/* NOTE: CONFIRMATION EXTENDS BOOTSTRAP-TOOLTIP.js
		 ========================================== */

	Confirmation.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {

		constructor: Confirmation

		, setContent: function () {
				var $tip = this.tip()
					, $btnOk = this.btnOk()
					, $btnCancel = this.btnCancel()
					, title = this.getTitle()
					, href = this.getHref()
					, target = this.getTarget()
					, $e = this.$element
					, btnOkClass = this.getBtnOkClass()
					, btnCancelClass = this.getBtnCancelClass()
					, btnOkLabel = this.getBtnOkLabel()
					, btnCancelLabel = this.getBtnCancelLabel()
					, o = this.options

				$tip.find('.popover-title').text(title)

				$btnOk.addClass(btnOkClass).html(btnOkLabel).attr('href', href).attr('target', target).on('click', o.onConfirm)
				$btnCancel.addClass(btnCancelClass).html(btnCancelLabel).on('click', o.onCancel)

				$tip.removeClass('fade top bottom left right in')
			}

		, hasContent: function () {
				return this.getTitle()
			}

		, isPopout: function () {
				var popout
					, $e = this.$element
					, o = this.options

				popout = $e.attr('data-popout') || (typeof o.popout == 'function' ? o.popout.call($e[0]) :	o.popout)

				if(popout == 'false') popout = false;

				return popout
			}


		, getHref: function () {
				var href
					, $e = this.$element
					, o = this.options

				href = $e.attr('data-href') || (typeof o.href == 'function' ? o.href.call($e[0]) :	o.href)

				return href
			}

		, getTarget: function () {
				var target
					, $e = this.$element
					, o = this.options

				target = $e.attr('data-target') || (typeof o.target == 'function' ? o.target.call($e[0]) :	o.target)

				return target
			}

		, getBtnOkClass: function () {
				var btnOkClass
					, $e = this.$element
					, o = this.options

				btnOkClass = $e.attr('data-btnOkClass') || (typeof o.btnOkClass == 'function' ? o.btnOkClass.call($e[0]) :	o.btnOkClass)

				return btnOkClass
			}

		, getBtnCancelClass: function () {
				var btnCancelClass
					, $e = this.$element
					, o = this.options

				btnCancelClass = $e.attr('data-btnCancelClass') || (typeof o.btnCancelClass == 'function' ? o.btnCancelClass.call($e[0]) :	o.btnCancelClass)

				return btnCancelClass
			}

		, getBtnOkLabel: function () {
				var btnOkLabel
					, $e = this.$element
					, o = this.options

				btnOkLabel = $e.attr('data-btnOkLabel') || (typeof o.btnOkLabel == 'function' ? o.btnOkLabel.call($e[0]) :	o.btnOkLabel)

				return btnOkLabel
			}

		, getBtnCancelLabel: function () {
				var btnCancelLabel
					, $e = this.$element
					, o = this.options

				btnCancelLabel = $e.attr('data-btnCancelLabel') || (typeof o.btnCancelLabel == 'function' ? o.btnCancelLabel.call($e[0]) :	o.btnCancelLabel)

				return btnCancelLabel
			}

		, tip: function () {
				this.$tip = this.$tip || $(this.options.template)
				return this.$tip
			}

		, btnOk: function () {
				var $tip = this.tip()
				return $tip.find('.popover-content > div > a:not([data-dismiss="confirmation"])')
			}

		, btnCancel: function () {
				var $tip = this.tip()
				return $tip.find('.popover-content > div > a[data-dismiss="confirmation"]')
			}

		, hide: function () {
				var $btnOk = this.btnOk()
					, $btnCancel = this.btnCancel()

				$.fn.tooltip.Constructor.prototype.hide.call(this)

				$btnOk.off('click')
				$btnCancel.off('click')

				return this
			}

		, destroy: function () {
				this.hide().$element.off('.' + this.type).removeData(this.type)
			}

	})


 /* CONFIRMATION PLUGIN DEFINITION
	* ======================= */

	var old = $.fn.confirmation

	$.fn.confirmation = function (option) {
		var that = this
		return this.each(function () {
			var $this = $(this)
				, data = $this.data('confirmation')
				, options = typeof option == 'object' && option
			options = options || {}
			options.all_selector = that.selector
			if (!data) $this.data('confirmation', (data = new Confirmation(this, options)))
			if (typeof option == 'string') data[option]()
		})
	}

	$.fn.confirmation.Constructor = Confirmation

	$.fn.confirmation.defaults = $.extend({} , $.fn.tooltip.defaults, {
		placement: 'top'
		, trigger: 'click'
		, target : '_self'
		, href   : '#'
		, title: 'Are you sure?'
		, template: '<div class="popover">' +
				'<div class="arrow"></div>' +
				'<h3 class="popover-title"></h3>' +
				'<div class="popover-content text-center">' +
				'<div class="btn-group">' +
				'<a class="btn btn-small" href="" target=""></a>' +
				'<a class="btn btn-small" data-dismiss="confirmation"></a>' +
				'</div>' +
				'</div>' +
				'</div>'
		, btnOkClass:  'btn-primary'
		, btnCancelClass:  ''
		, btnOkLabel: '<i class="icon-ok-sign icon-white"></i> Yes'
		, btnCancelLabel: '<i class="icon-remove-sign"></i> No'
		, singleton: false
		, popout: false
		, onConfirm: function(){}
		, onCancel: function(){}
	})


 /* POPOVER NO CONFLICT
	* =================== */

	$.fn.confirmation.noConflict = function () {
		$.fn.confirmation = old
		return this
	}

}(window.jQuery);
;

(function (window, document) {

    Croppic = function (id, options) {

        var that = this;
        that.id = id;
        that.obj = $('#' + id);
        that.outputDiv = that.obj;

        // DEFAULT OPTIONS
        that.options = {
            uploadUrl:'',
            uploadData:{},
            cropUrl:'',
            cropData:{},
            outputUrlId:'',
            //styles
            imgEyecandy:true,
            imgEyecandyOpacity:0.2,
            zoomFactor:10,
            doubleZoomControls:true,
            modal:false,
            customUploadButtonId:'',
            loaderHtml:'',
            //callbacks
            onBeforeImgUpload: null,
            onAfterImgUpload: null,
            onImgDrag: null,
            onImgZoom: null,
            onBeforeImgCrop: null,
            onAfterImgCrop: null,
            onAfterClose : null
        };

        // OVERWRITE DEFAULT OPTIONS
        for (i in options) that.options[i] = options[i];

        // INIT THE WHOLE DAMN THING!!!
        that.init();

    };

    Croppic.prototype = {
        id:'',
        imgInitW:0,
        imgInitH:0,
        imgW:0,
        imgH:0,
        objW:0,
        objH:0,
        windowW:0,
        windowH:$(window).height(),
        obj:{},
        outputDiv:{},
        outputUrlObj:{},
        img:{},
        defaultImg:{},
        croppedImg:{},
        imgEyecandy:{},
        form:{},
        cropControlsUpload:{},
        cropControlsCrop:{},
        cropControlZoomMuchIn:{},
        cropControlZoomMuchOut:{},
        cropControlZoomIn:{},
        cropControlZoomOut:{},
        cropControlCrop:{},
        cropControlReset:{},
        cropControlRemoveCroppedImage:{},
        modal:{},
        loader:{},

        init: function () {
            var that = this;

            that.objW = that.obj.width();
            that.objH = that.obj.height();

            if( $.isEmptyObject(that.defaultImg)){ that.defaultImg = that.obj.find('img'); }

            that.createImgUploadControls();
            that.bindImgUploadControl();

        },
        createImgUploadControls: function(){
            var that = this;

            var cropControlUpload = '';
            if(that.options.customUploadButtonId ===''){ cropControlUpload = '<i class="cropControlUpload"></i>'; }
            var cropControlRemoveCroppedImage = '<i class="cropControlRemoveCroppedImage"></i>';

            if( $.isEmptyObject(that.croppedImg)){ cropControlRemoveCroppedImage=''; }

            var html =    '<div class="cropControls cropControlsUpload"> ' + cropControlUpload + cropControlRemoveCroppedImage + ' </div>';
            that.outputDiv.append(html);

            that.cropControlsUpload = that.outputDiv.find('.cropControlsUpload');

            if(that.options.customUploadButtonId ===''){ that.imgUploadControl = that.outputDiv.find('.cropControlUpload'); }
            else{	that.imgUploadControl = $('#'+that.options.customUploadButtonId); that.imgUploadControl.show();	}

            if( !$.isEmptyObject(that.croppedImg)){
                that.cropControlRemoveCroppedImage = that.outputDiv.find('.cropControlRemoveCroppedImage');
            }

        },
        bindImgUploadControl: function(){

            var that = this;

            // CREATE UPLOAD IMG FORM
            var formHtml = '<form class="'+that.id+'_imgUploadForm" style="display: none; visibility: hidden;">  <input type="file" name="img">  </form>';
            that.outputDiv.append(formHtml);
            that.form = that.outputDiv.find('.'+that.id+'_imgUploadForm');

            that.imgUploadControl.off('click');
            that.imgUploadControl.on('click',function(){
                that.form.find('input[type="file"]').trigger('click');
            });

            if( !$.isEmptyObject(that.croppedImg)){

                that.cropControlRemoveCroppedImage.on('click',function(){
                    that.croppedImg.remove();
                    $(this).hide();

                    if( !$.isEmptyObject(that.defaultImg)){
                        that.obj.append(that.defaultImg);
                    }

                    if(that.options.outputUrlId !== ''){	$('#'+that.options.outputUrlId).val('');	}


                });

            }

            that.form.find('input[type="file"]').change(function(){

                if (that.options.onBeforeImgUpload) that.options.onBeforeImgUpload.call(that);

                that.showLoader();
                that.imgUploadControl.hide();

                var formData = new FormData(that.form[0]);

                for (var key in that.options.uploadData) {
                    if( that.options.uploadData.hasOwnProperty(key) ) {
                        formData.append( key , that.options.uploadData[key] );
                    }
                }

                $.ajax({
                    url: that.options.uploadUrl,
                    data: formData,
                    context: document.body,
                    cache: false,
                    contentType: false,
                    processData: false,
                    type: 'POST'
                }).always(function(data){
                    response = jQuery.parseJSON(data);
                    if(response.status=='success'){

                        that.imgInitW = that.imgW = response.width;
                        that.imgInitH = that.imgH = response.height;

                        if(that.options.modal){	that.createModal(); }
                        if( !$.isEmptyObject(that.croppedImg)){ that.croppedImg.remove(); }

                        that.imgUrl=response.url;

                        that.obj.append('<img src="'+response.url+'">');
                        that.initCropper();

                        that.hideLoader();

                        if (that.options.onAfterImgUpload) that.options.onAfterImgUpload.call(that);

                    }

                    if(response.status=='error'){
                        //that.obj.append('<p style="width:100%; height:100%; text-align:center; line-height:'+that.objH+'px;">'+response.message+'</p>');
                        bootbox.alert(response.message)
                        that.hideLoader();
                        setTimeout( function(){ that.reset(); },2000)
                    }


                });

            });

        },
        createModal: function(){
            var that = this;

            var marginTop = that.windowH/2-that.objH/2;
            var modalHTML =  '<div id="croppicModal">'+'<div id="croppicModalObj" style="width:'+ that.objW +'px; height:'+ that.objH +'px; margin:0 auto; margin-top:'+ marginTop +'px; position: relative;"> </div>'+'</div>';

            $('body').append(modalHTML);

            that.modal = $('#croppicModal');

            that.obj = $('#croppicModalObj');

        },
        destroyModal: function(){
            var that = this;

            that.obj = that.outputDiv;
            that.modal.remove();
        },
        initCropper: function(){
            var that = this;

            /*SET UP SOME VARS*/
            that.img = that.obj.find('img');
            that.img.wrap('<div class="cropImgWrapper" style="overflow:hidden; z-index:1; position:absolute; width:'+that.objW+'px; height:'+that.objH+'px;"></div>');

            /*INIT DRAGGING*/
            that.createCropControls();

            if(that.options.imgEyecandy){ that.createEyecandy(); }
            that.initDrag();
            that.initialScaleImg();
        },
        createEyecandy: function(){
            var that = this;

            that.imgEyecandy = that.img.clone();
            that.imgEyecandy.css({'z-index':'0','opacity':that.options.imgEyecandyOpacity}).appendTo(that.obj);
        },
        destroyEyecandy: function(){
            var that = this;
            that.imgEyecandy.remove();
        },
        initialScaleImg:function(){
            var that = this;
            that.zoom(-that.imgInitW);
            that.zoom(40);

            // initial center image

            that.img.css({'left': -(that.imgW -that.objW)/2, 'top': -(that.imgH -that.objH)/2, 'position':'relative'});
            if(that.options.imgEyecandy){ that.imgEyecandy.css({'left': -(that.imgW -that.objW)/2, 'top': -(that.imgH -that.objH)/2, 'position':'relative'}); }

        },

        createCropControls: function(){
            var that = this;

            // CREATE CONTROLS
            var cropControlZoomMuchIn =      '<i class="cropControlZoomMuchIn"></i>';
            var cropControlZoomIn =          '<i class="cropControlZoomIn"></i>';
            var cropControlZoomOut =         '<i class="cropControlZoomOut"></i>';
            var cropControlZoomMuchOut =     '<i class="cropControlZoomMuchOut"></i>';
            var cropControlCrop =            '<i class="cropControlCrop"></i>';
            var cropControlReset =           '<i class="cropControlReset"></i>';

            var html;

            if(that.options.doubleZoomControls){ html =  '<div class="cropControls cropControlsCrop">'+ cropControlZoomMuchIn + cropControlZoomIn + cropControlZoomOut + cropControlZoomMuchOut + cropControlCrop + cropControlReset + '</div>'; }
            else{ html =  '<div class="cropControls cropControlsCrop">' + cropControlZoomIn + cropControlZoomOut + cropControlCrop + cropControlReset + '</div>'; }

            that.obj.append(html);

            that.cropControlsCrop = that.obj.find('.cropControlsCrop');

            // CACHE AND BIND CONTROLS
            if(that.options.doubleZoomControls){
                that.cropControlZoomMuchIn = that.cropControlsCrop.find('.cropControlZoomMuchIn');
                that.cropControlZoomMuchIn.on('click',function(){ that.zoom( that.options.zoomFactor*10 ); });

                that.cropControlZoomMuchOut = that.cropControlsCrop.find('.cropControlZoomMuchOut');
                that.cropControlZoomMuchOut.on('click',function(){ that.zoom(-that.options.zoomFactor*10); });
            }

            that.cropControlZoomIn = that.cropControlsCrop.find('.cropControlZoomIn');
            that.cropControlZoomIn.on('click',function(){ that.zoom(that.options.zoomFactor); });

            that.cropControlZoomOut = that.cropControlsCrop.find('.cropControlZoomOut');
            that.cropControlZoomOut.on('click',function(){ that.zoom(-that.options.zoomFactor); });

            that.cropControlCrop = that.cropControlsCrop.find('.cropControlCrop');
            that.cropControlCrop.on('click',function(){ that.crop(); });

            that.cropControlReset = that.cropControlsCrop.find('.cropControlReset');
            that.cropControlReset.on('click',function()
            {
                that.reset();
            });

        },
        initDrag:function(){
            var that = this;

            that.img.on("mousedown", function(e) {

                e.preventDefault(); // disable selection

                var z_idx = that.img.css('z-index'),
                    drg_h = that.img.outerHeight(),
                    drg_w = that.img.outerWidth(),
                    pos_y = that.img.offset().top + drg_h - e.pageY,
                    pos_x = that.img.offset().left + drg_w - e.pageX;

                that.img.css('z-index', 1000).on("mousemove", function(e) {

                    var imgTop = e.pageY + pos_y - drg_h;
                    var imgLeft = e.pageX + pos_x - drg_w;

                    that.img.offset({
                        top:imgTop,
                        left:imgLeft
                    }).on("mouseup", function() {
                        $(this).removeClass('draggable').css('z-index', z_idx);
                    });

                    if(that.options.imgEyecandy){ that.imgEyecandy.offset({ top:imgTop, left:imgLeft }); }

                    if( parseInt( that.img.css('top')) > 0 ){ that.img.css('top',0);  if(that.options.imgEyecandy){ that.imgEyecandy.css('top', 0); } }
                    var maxTop = -( that.imgH-that.objH); if( parseInt( that.img.css('top')) < maxTop){ that.img.css('top', maxTop); if(that.options.imgEyecandy){ that.imgEyecandy.css('top', maxTop); } }

                    if( parseInt( that.img.css('left')) > 0 ){ that.img.css('left',0); if(that.options.imgEyecandy){ that.imgEyecandy.css('left', 0); }}
                    var maxLeft = -( that.imgW-that.objW); if( parseInt( that.img.css('left')) < maxLeft){ that.img.css('left', maxLeft); if(that.options.imgEyecandy){ that.imgEyecandy.css('left', maxLeft); } }

                    if (that.options.onImgDrag) that.options.onImgDrag.call(that);

                });

            }).on("mouseup", function() {
                that.img.off("mousemove");
            }).on("mouseout", function() {
                that.img.off("mousemove");
            });

        },
        zoom :function(x){
            var that = this;
            var ratio = that.imgW / that.imgH;
            var newWidth = that.imgW+x;
            var newHeight = newWidth/ratio;
            var doPositioning = true;

            if( newWidth < that.objW || newHeight < that.objH){

                if( newWidth - that.objW < newHeight - that.objH ){
                    newWidth = that.objW;
                    newHeight = newWidth/ratio;
                }else{
                    newHeight = that.objH;
                    newWidth = ratio * newHeight;
                }

                doPositioning = false;

            }

            if( newWidth > that.imgInitW || newHeight > that.imgInitH){

                if( newWidth - that.imgInitW < newHeight - that.imgInitH ){
                    newWidth = that.imgInitW;
                    newHeight = newWidth/ratio;
                }else{
                    newHeight = that.imgInitH;
                    newWidth = ratio * newHeight;
                }

                doPositioning = false;

            }

            that.imgW = newWidth;
            that.img.width(newWidth);

            that.imgH = newHeight;
            that.img.height(newHeight);

            var newTop = parseInt( that.img.css('top') ) - x/2;
            var newLeft = parseInt( that.img.css('left') ) - x/2;

            if( newTop>0 ){ newTop=0;}
            if( newLeft>0 ){ newLeft=0;}

            var maxTop = -( newHeight-that.objH); if( newTop < maxTop){	newTop = maxTop;	}
            var maxLeft = -( newWidth-that.objW); if( newLeft < maxLeft){	newLeft = maxLeft;	}

            if( doPositioning ){
                that.img.css({'top':newTop, 'left':newLeft});
            }

            if(that.options.imgEyecandy){
                that.imgEyecandy.width(newWidth);
                that.imgEyecandy.height(newHeight);
                if( doPositioning ){
                    that.imgEyecandy.css({'top':newTop, 'left':newLeft});
                }
            }

            if (that.options.onImgZoom) that.options.onImgZoom.call(that);

        },
        crop:function(){
            var that = this;

            if (that.options.onBeforeImgCrop) that.options.onBeforeImgCrop.call(that);

            that.cropControlsCrop.hide();
            that.showLoader();

            var cropData = {
                imgUrl:that.imgUrl,
                imgInitW:that.imgInitW,
                imgInitH:that.imgInitH,
                imgW:that.imgW,
                imgH:that.imgH,
                imgY1:Math.abs( parseInt( that.img.css('top') ) ),
                imgX1:Math.abs( parseInt( that.img.css('left') ) ),
                cropH:that.objH,
                cropW:that.objW
            };

            var formData = new FormData();

            for (var key in cropData) {
                if( cropData.hasOwnProperty(key) ) {
                    formData.append( key , cropData[key] );
                }
            }

            for (var key in that.options.cropData) {
                if( that.options.cropData.hasOwnProperty(key) ) {
                    formData.append( key , that.options.cropData[key] );
                }
            }

            $.ajax({
                url: that.options.cropUrl,
                data: formData,
                context: document.body,
                cache: false,
                contentType: false,
                processData: false,
                type: 'POST'
            }).always(function(data){
                response = jQuery.parseJSON(data);
                if(response.status=='success'){

                    that.imgEyecandy.hide();

                    that.destroy();

                    that.obj.append('<img class="croppedImg" src="'+response.url+'">');
                    if(that.options.outputUrlId !== ''){	$('#'+that.options.outputUrlId).val(response.url);	}

                    that.croppedImg = that.obj.find('.croppedImg');

                    that.init();

                    that.hideLoader();

                }
                if(response.status=='error'){
                    that.obj.append('<p style="width:100%; height:100%;>'+response.message+'</p>">');
                }

                if (that.options.onAfterImgCrop) that.options.onAfterImgCrop.call(that);

            });
        },
        showLoader:function(){
            var that = this;

            that.obj.append(that.options.loaderHtml);
            that.loader = that.obj.find('.loader');

        },
        hideLoader:function(){
            var that = this;
            that.loader.remove();
        },
        reset:function(){
            var that = this;
            that.destroy();

            that.init();

            if( !$.isEmptyObject(that.croppedImg)){
                that.obj.append(that.croppedImg);
                if(that.options.outputUrlId !== ''){	$('#'+that.options.outputUrlId).val(that.croppedImg.attr('url'));	}
            }

            if (that.options.onAfterClose) that.options.onAfterClose.call(that);

        },
        destroy:function(){
            var that = this;
            if(that.options.modal && !$.isEmptyObject(that.modal) ){ that.destroyModal(); }
            if(that.options.imgEyecandy && !$.isEmptyObject(that.imgEyecandy) ){  that.destroyEyecandy(); }
            if( !$.isEmptyObject( that.cropControlsUpload ) ){  that.cropControlsUpload.remove(); }
            if( !$.isEmptyObject( that.cropControlsCrop ) ){   that.cropControlsCrop.remove(); }
            if( !$.isEmptyObject( that.loader ) ){   that.loader.remove(); }
            if( !$.isEmptyObject( that.form ) ){   that.form.remove(); }
            that.obj.html('');
        }
    };
})(window, document);
;/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();;(function($){var DEBUG=false;var version="1.1";$.fn.nailthumb=function(options){var opts=$.extend({},$.fn.nailthumb.defaults,options);return this.each(function(){var $this=$(this);var o=$.metadata?$.extend({},opts,$this.metadata()):opts;thumbize($this,o);});};function thumbize(element,options){var image=setImage(element,options);var container=setContainer(element,options);if(options.serverSideParams){$.fn.nailthumb.setServerSideParams(image,container,options);}debugObject("image",image);debugObject("container",container);if(options.onStart){options.onStart(container,options);}if(options.loadingClass){container.addClass(options.loadingClass);}if(options.preload||image.data("nailthumb.replaceto")){debug("wait on load");image.one("load",function(){debugObject("before check",image);if(!image.data("nailthumb.working")&&!image.data("nailthumb.replacing")){image.data("nailthumb.working",true);debugObject("inside check",image);doThumb(image,container,options);}});var src=image.attr("src");image.attr("src",null).attr("src",src);}else{debug("nail thumb directly");image.data("nailthumb.working",true);doThumb(image,container,options);}}function doThumb(image,container,options){resetImage(image,options);resetContainer(container,options);var imageDims=getImageDims(image,options);debugObject("image",image);debugObject("imageDims",imageDims);if(imageDims.width==0||imageDims.height==0){imageDims=getHiddenCloneDims(image);debugObject("imageCloneDims",imageDims);}var containerDims=getContainerDims(container,options);debugObject("container",container);debugObject("containerDims",containerDims);var prop=getProportion(containerDims,imageDims,options);debug("proportions",prop);resize(image,imageDims,container,containerDims,prop,options);}function setImage(element,options){var image=element.find("img").first();var finder=options.imageCustomFinder;if(!finder&&options.imageUrl){finder=imageUrlFinder;}else{if(!finder&&options.imageFromWrappingLink){finder=imageFromWrappingLinkFinder;}}if(finder){var img=finder(element,options);debugObject("finder",img);if(!img){img=[];}if(img.length>0){image=img;image.css("display","none");if(!image.data("nailthumb.replaceto")){image.data("nailthumb.replaceto",element);}image.data("nailthumb.originalImageDims",null);}}if(image.length==0){if(element.is("img")){image=element;}}return image;}function imageUrlFinder(element,options){var image=$("<img />").attr("src",options.imageUrl).css("display","none").data("nailthumb.replaceto",element);element.append(image);return image;}function imageFromWrappingLinkFinder(element,options){var image;var link=element.find("a").first();if(link.length==0&&element.is("a")){link=element;}if(link.attr("href")){image=$("<img />").attr("src",link.attr("href")).css("display","none").data("nailthumb.replaceto",link);if(link.attr("title")){image.attr("title",link.attr("title"));}link.append(image);}return image;}function resetImage(image,options){if(!options.nostyle){image.css({"position":"relative"});}if(!image.data("nailthumb.originalImageDims")){image.css({"width":"auto","height":"auto","top":0,"left":0}).removeAttr("width").removeAttr("height");}}function setContainer(element,options){var container=element;if(element.is("img")){if(options.ifImageAddContainer){var c=$("<div></div>");element.wrap(c);}container=element.parent();}return container;}function resetContainer(container,options){if(options.containerClass){container.addClass(options.containerClass);}if(!options.nostyle){container.css({"overflow":"hidden","padding":"0px"});}if(options.replaceAnimation=="animate"){if(options.width||options.height){container.animate({"width":options.width,"height":options.height},options.animationTime,options.animation);}}else{if(options.width){container.width(options.width);}if(options.height){container.height(options.height);}}container.find("span."+options.titleClass).remove();}function resize(image,imageDims,container,containerDims,prop,options){var iw=imageDims.width*prop;var ih=imageDims.height*prop;var top=0,left=0,diff;var direction=getDirections(options.fitDirection);if(ih<containerDims.innerHeight){switch(direction.v){case"center":top=-(ih-containerDims.innerHeight)/2;break;case"bottom":top=-(ih-containerDims.innerHeight);diff="bottom";break;case"top":top=0;diff="top";break;default:break;}}else{if(ih>containerDims.innerHeight){switch(direction.v){case"center":top=-(ih-containerDims.innerHeight)/2;break;case"bottom":top=-(ih-containerDims.innerHeight);break;default:break;}}}if(iw<containerDims.innerWidth){switch(direction.h){case"center":left=-(iw-containerDims.innerWidth)/2;break;case"right":left=-(iw-containerDims.innerWidth);break;default:break;}}else{if(iw>containerDims.innerWidth){switch(direction.h){case"center":left=-(iw-containerDims.innerWidth)/2;break;case"right":left=-(iw-containerDims.innerWidth);break;default:break;}}}image.addClass(options.imageClass);if(image.data("nailthumb.replaceto")){replaceImage(image,imageDims,container,containerDims,ih,iw,left,top,diff,options);}else{showImage(image,imageDims,container,containerDims,ih,iw,left,top,diff,options);}}function replaceImage(image,imageDims,container,containerDims,ih,iw,left,top,diff,options){var element=image.data("nailthumb.replaceto");var replaceto=findReplaceTo(element,options);image.data("nailthumb.replacing",true);image.load(function(){image.data("nailthumb.replacing",null);});if(replaceto){replaceto.replaceWith(image);}else{element.append(image);}if(options.afterReplace){options.afterReplace(container,image,options);}showImage(image,imageDims,container,containerDims,ih,iw,left,top,diff,options);}function showImage(image,imageDims,container,containerDims,ih,iw,left,top,diff,options){if(options.replaceAnimation=="animate"){image.css("display","inline");container.animate({"width":containerDims.innerWidth,"height":containerDims.innerHeight},options.animationTime,options.animation);image.animate({"width":iw,"height":ih,"top":top,"left":left},options.animationTime,options.animation,function(){afterAppear(image,imageDims,container,containerDims,ih,iw,left,top,diff,options);});}else{container.css({"width":containerDims.innerWidth,"height":containerDims.innerHeight});if(options.replaceAnimation){image.css("display","none");}image.css({"width":iw,"height":ih,"top":top,"left":left});if(options.replaceAnimation=="fade"){image.fadeIn(options.animationTime,options.animation,function(){afterAppear(image,imageDims,container,containerDims,ih,iw,left,top,diff,options);});}else{if(options.replaceAnimation=="slide"){image.slideDown(options.animationTime,options.animation,function(){afterAppear(image,imageDims,container,containerDims,ih,iw,left,top,diff,options);});}else{if(options.replaceAnimation&&options.replaceAnimation instanceof Function){options.replaceAnimation(image,function(){afterAppear(image,imageDims,container,containerDims,ih,iw,left,top,diff,options);},options);if(!options.selfStartAfterAppear){afterAppear(image,imageDims,container,containerDims,ih,iw,left,top,diff,options);}}else{image.css("display","inline");afterAppear(image,imageDims,container,containerDims,ih,iw,left,top,diff,options);}}}}}function afterAppear(image,imageDims,container,containerDims,ih,iw,left,top,diff,options){if(options.afterAppear){options.afterAppear(container,image,options);}image.data("nailthumb.replaceto",null);decorate(image,imageDims,container,containerDims,ih,iw,left,top,diff,options);}function findReplaceTo(element,options){var rep=null;element.find("img").each(function(){if(!rep&&!$(this).data("nailthumb.replaceto")){rep=$(this);}});return rep;}function decorate(image,imageDims,container,containerDims,ih,iw,left,top,diff,options){if(options.title||(options.titleAttr&&image.attr(options.titleAttr))){var title=options.title?options.title:image.attr(options.titleAttr);if(title){var span=$('<span class="'+options.titleClass+'">'+title+"</span>");if(containerDims.innerHeight>ih){span.css("top",containerDims.innerHeight-ih);}else{span.css("top","0px");}container.append(span);
var tit=getHiddenDims(span);var im=getHiddenDims(image);debugObject("decorate containerDims",containerDims);debugObject("decorate imageDims",imageDims);debugObject("decorate imageDims",im);debugObject("decorate tit",tit);var outbound=containerDims.offsetTop+containerDims.innerHeight-tit.offsetTop;if(containerDims.height>containerDims.innerHeight){outbound+=(containerDims.height-containerDims.innerHeight)/2;}span.css("top","+="+outbound);if(iw<tit.width){span.css("width",iw);}if(left>0){span.css("left",left);}var delta=tit.height;if(containerDims.innerHeight>ih&&diff!="bottom"){delta+=(containerDims.innerHeight-ih)/((diff=="top")?1:2);}var clone=span.clone();clone.css("width","auto").css("display","none").css("position","absolute");container.append(clone);var cloneDims=getHiddenDims(clone);clone.remove();debugObject("decorate cloneDims",cloneDims);if(options.titleWhen=="hover"){container.unbind("mouseenter mouseleave").hover(function(){span.find("span."+options.titleScrollerClass).css("left",0);containerDims=getHiddenDims(container);tit=getHiddenDims(span);outbound=containerDims.offsetTop+containerDims.innerHeight-tit.offsetTop;if(containerDims.height>containerDims.innerHeight){outbound+=(containerDims.height-containerDims.innerHeight)/2;}debugObject("decorate hover tit",tit);debug("decorate hover outbound",tit);var doubleDelta=0;if(outbound<0){span.css("top","+="+outbound);doubleDelta=delta;}else{doubleDelta=delta-outbound;}if(options.animateTitle){resetScrollTitle(span,options);span.stop(true).animate({top:"-="+doubleDelta},options.titleAnimationTime,options.titleAnimation,function(){scrollTitle(span,cloneDims.width,containerDims.innerWidth,options);});}else{span.css({top:"-="+doubleDelta});scrollTitle(span,cloneDims.width,containerDims.innerWidth,options);}},function(){if(options.animateTitle){resetScrollTitle(span,options);span.animate({top:"+="+delta},options.titleAnimationTime,options.titleAnimation,function(){resetScrollTitle(span,options);});}else{resetScrollTitle(span,options);span.css({top:"+="+delta});}});}else{if(options.animateTitle){span.animate({top:"-="+delta},options.titleAnimationTime,options.titleAnimation,function(){scrollTitle(span,cloneDims.width,containerDims.innerWidth,options);});}else{span.css({top:"-="+delta});scrollTitle(span,cloneDims.width,containerDims.innerWidth,options);}}}}if(options.onFinish){options.onFinish(container,options);}if(options.loadingClass){container.removeClass(options.loadingClass);}image.data("nailthumb.working",null);}function resetScrollTitle(span,options){span.find("span."+options.titleScrollerClass).stop();}function scrollTitle(span,width,visibleWidth,options){if(width>visibleWidth&&options.titleScrolling){if(span.find("span."+options.titleScrollerClass).length==0){span.wrapInner('<span class="'+options.titleScrollerClass+'" />');span.find("span."+options.titleScrollerClass).width(width).css("position","relative").css("white-space","nowrap");}span.find("span."+options.titleScrollerClass).css("left",0);setTimeout(scrollFunction(span,width,visibleWidth,options),1000);}}function scrollFunction(span,width,visibleWidth,options){return function(){var indent=Number(span.find("span."+options.titleScrollerClass).css("left").replace(/[^-\d]/g,""));debug("indent",indent);debug("width",width);debug("visibleWidth",visibleWidth);debug("width <= -indent",(width<=-indent));var delta=width+indent;if(delta<=0){span.find("span."+options.titleScrollerClass).css("left",visibleWidth);delta=width+visibleWidth;}delta+=10;span.find("span."+options.titleScrollerClass).animate({"left":"-="+delta},width*1000/30,"linear",scrollFunction(span,width,visibleWidth,options));};}function getProportion(containerDims,imageDims,options){if(options.proportions!=null&&options.proportions>0){return options.proportions;}else{var prop=containerDims.innerWidth/imageDims.width;if(options.method&&options.method=="resize"){if(containerDims.innerHeight/imageDims.height<prop){prop=containerDims.innerHeight/imageDims.height;}}else{if(containerDims.innerHeight/imageDims.height>prop){prop=containerDims.innerHeight/imageDims.height;}}if(options.maxEnlargement&&options.maxEnlargement<prop){prop=options.maxEnlargement;}if(options.maxShrink&&options.maxShrink>prop){prop=options.maxShrink;}return prop;}}function getDirections(option){var dir={h:"center",v:"center"};if(option){var opts=option.split(" ");if(opts.length>0){dir=getDirection(opts[0],dir);}if(opts.length>1){dir=getDirection(opts[1],dir);}}return dir;}function getDirection(str,d){switch(str){case"top":d.v="top";break;case"bottom":d.v="bottom";break;case"left":d.h="left";break;case"right":d.h="right";break;default:break;}return d;}function getImageDims(image,options){var imageDims;if(!image.data("nailthumb.originalImageDims")){imageDims=getHiddenDims(image);image.data("nailthumb.originalImageDims",imageDims);if(!options.keepImageDimensions){image.one("load",function(){image.data("nailthumb.originalImageDims",null);});}}else{imageDims=image.data("nailthumb.originalImageDims");}return imageDims;}function getContainerDims(container,options){var containerDims=getHiddenDims(container);if(options.width){containerDims.innerWidth=options.width;}if(options.height){containerDims.innerHeight=options.height;}return containerDims;}function getDims(elem){var offset=$(elem).offset();return{offsetTop:offset.top,offsetLeft:offset.left,width:$(elem).outerWidth(),height:$(elem).outerHeight(),innerWidth:$(elem).innerWidth(),innerHeight:$(elem).innerHeight()};}function getHiddenDims(elems){var dims=null,i=0,offset,elem;while((elem=elems[i++])){var hiddenElems=$(elem).parents().andSelf().filter(":hidden");if(!hiddenElems.length){dims=getDims(elem);}else{var backupStyle=[];hiddenElems.each(function(){var style=$(this).attr("style");style=typeof style=="undefined"?"":style;backupStyle.push(style);$(this).attr("style",style+" display: block !important;");});hiddenElems.eq(0).css("left",-10000);dims=getDims(elem);hiddenElems.each(function(){$(this).attr("style",backupStyle.shift());});}}return dims;}function getHiddenCloneDims(elems){var dims=null,i=0,offset,elem;while((elem=elems[i++])){var hiddenElems=$(elem).parents().andSelf().filter(":hidden");if(!hiddenElems.length){dims=getDims(elem);}else{var backupStyle=[];hiddenElems.each(function(){var style=$(this).attr("style");style=typeof style=="undefined"?"":style;backupStyle.push(style);$(this).attr("style",style+" display: block !important;");});hiddenElems.eq(0).css("left",-10000);var clone=hiddenElems.eq(0).clone();$("body").append(clone);dims=getDims(clone);hiddenElems.each(function(){$(this).attr("style",backupStyle.shift());});clone.remove();}}return dims;}$.fn.nailthumb.evalServerSideParams=function(image,container,options){if(options.serverSideParams){var params={};if(!options.serverSideParams.noServerResize){var w=null,h=null;if(options.serverSideParams.width){w=options.serverSideParams.width;}else{if(options.width){w=options.width;}}if(options.serverSideParams.height){h=options.serverSideParams.height;}else{if(options.height){h=options.height;}}if(!(w&&h)){resetContainer(container,options);var containerDims=getContainerDims(container,options);w=containerDims.innerWidth;h=containerDims.innerHeight;}if(w&&h){params.w=w;params.h=h;if(options.serverSideParams.mode!="resize"){if(options.method=="crop"){params.mode="crop";}if(options.serverSideParams.mode){params.mode=options.serverSideParams.mode;}}}}$.each(options.serverSideParams,function(key,val){if(key!="width"&&key!="height"&&key!="mode"&&key!="noServerResize"&&val){params[key]=val;}});var pars="";$.each(params,function(key,val){pars+=";"+key+"="+val;});debug(pars,params);return pars;}else{return"";}};$.fn.nailthumb.setServerSideParams=function(image,container,options){if(options.serverSideParams){var url=image.attr("src");if(image.data("nailthumb.originalImageUrl")){url=image.data("nailthumb.originalImageUrl");}image.data("nailthumb.originalImageUrl",url);var pars=$.fn.nailthumb.evalServerSideParams(image,container,options);
url+=pars;image.attr("src",url);}};$.fn.nailthumb.toggleDebug=function(){DEBUG=!DEBUG;};$.fn.nailthumb.doThumb=function(image,container,options){doThumb(image,container,options);};$.fn.nailthumb.defaults={onStart:null,onFinish:null,loadingClass:"nailthumb-loading",imageUrl:null,imageFromWrappingLink:false,imageCustomFinder:null,imageClass:"nailthumb-image",afterReplace:null,afterAppear:null,replaceAnimation:"fade",selfStartAfterAppear:false,animationTime:1000,animation:"swing",keepImageDimensions:false,method:"crop",fitDirection:null,proportions:null,ifImageAddContainer:true,containerClass:"nailthumb-container",maxEnlargement:null,maxShrink:null,preload:true,nostyle:false,width:null,height:null,title:null,titleClass:"nailthumb-title",titleAttr:"title",titleWhen:"hover",titleScrolling:true,titleScrollerClass:"nailthumb-title-scroller",animateTitle:true,titleAnimationTime:500,titleAnimation:"swing",serverSideParams:null};function log(log,jQueryobj){try{debug(log,jQueryobj,true);}catch(ex){}}function debug(log,jQueryobj,force){try{if((DEBUG&&window.console&&window.console.log)||force){window.console.log(log+": "+jQueryobj);}}catch(ex){}}function debugObject(log,jQueryobj,force){try{if(!jQueryobj){jQueryobj=log;}debug(log,jQueryobj);if((DEBUG&&window.console&&window.console.log)||force){window.console.debug(jQueryobj);}}catch(ex){}}})(jQuery);;/*	
 * jQuery mmenu v4.7.5
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *	
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * Licensed under the MIT license:
 * http://en.wikipedia.org/wiki/MIT_License
 */
!function(e){function n(){l=!0,d.$wndw=e(window),d.$html=e("html"),d.$body=e("body"),e.each([i,a,o],function(e,n){n.add=function(e){e=e.split(" ");for(var t in e)n[e[t]]=n.mm(e[t])}}),i.mm=function(e){return"mm-"+e},i.add("wrapper menu inline panel nopanel list nolist subtitle selected label spacer current highest hidden opened subopened subopen fullsubopen subclose"),i.umm=function(e){return"mm-"==e.slice(0,3)&&(e=e.slice(3)),e},a.mm=function(e){return"mm-"+e},a.add("parent"),o.mm=function(e){return e+".mm"},o.add("toggle open close setSelected transitionend webkitTransitionEnd mousedown mouseup touchstart touchmove touchend scroll resize click keydown keyup"),e[t]._c=i,e[t]._d=a,e[t]._e=o,e[t].glbl=d}var t="mmenu",s="4.7.5";if(!e[t]){var i={},a={},o={},l=!1,d={$wndw:null,$html:null,$body:null};e[t]=function(n,s,i){this.$menu=n,this.opts=s,this.conf=i,this.vars={},"function"==typeof this.___deprecated&&this.___deprecated(),this._initMenu(),this._initAnchors(),this._initEvents();var a=this.$menu.children(this.conf.panelNodetype);for(var o in e[t].addons)e[t].addons[o]._add.call(this),e[t].addons[o]._add=function(){},e[t].addons[o]._setup.call(this);return this._init(a),"function"==typeof this.___debug&&this.___debug(),this},e[t].version=s,e[t].addons={},e[t].uniqueId=0,e[t].defaults={classes:"",slidingSubmenus:!0,onClick:{setSelected:!0}},e[t].configuration={panelNodetype:"ul, ol, div",transitionDuration:400,openingInterval:25,classNames:{panel:"Panel",selected:"Selected",label:"Label",spacer:"Spacer"}},e[t].prototype={_init:function(n){n=n.not("."+i.nopanel),n=this._initPanels(n);for(var s in e[t].addons)e[t].addons[s]._init.call(this,n);this._update()},_initMenu:function(){this.opts.offCanvas&&this.conf.clone&&(this.$menu=this.$menu.clone(!0),this.$menu.add(this.$menu.find("*")).filter("[id]").each(function(){e(this).attr("id",i.mm(e(this).attr("id")))})),this.$menu.contents().each(function(){3==e(this)[0].nodeType&&e(this).remove()}),this.$menu.parent().addClass(i.wrapper);var n=[i.menu];n.push(i.mm(this.opts.slidingSubmenus?"horizontal":"vertical")),this.opts.classes&&n.push(this.opts.classes),this.$menu.addClass(n.join(" "))},_initPanels:function(n){var t=this;this.__findAddBack(n,"ul, ol").not("."+i.nolist).addClass(i.list);var s=this.__findAddBack(n,"."+i.list).find("> li");this.__refactorClass(s,this.conf.classNames.selected,"selected"),this.__refactorClass(s,this.conf.classNames.label,"label"),this.__refactorClass(s,this.conf.classNames.spacer,"spacer"),s.off(o.setSelected).on(o.setSelected,function(n,t){n.stopPropagation(),s.removeClass(i.selected),"boolean"!=typeof t&&(t=!0),t&&e(this).addClass(i.selected)}),this.__refactorClass(this.__findAddBack(n,"."+this.conf.classNames.panel),this.conf.classNames.panel,"panel"),n.add(this.__findAddBack(n,"."+i.list).children().children().filter(this.conf.panelNodetype).not("."+i.nopanel)).addClass(i.panel);var l=this.__findAddBack(n,"."+i.panel),d=e("."+i.panel,this.$menu);if(l.each(function(){var n=e(this),s=n.attr("id")||t.__getUniqueId();n.attr("id",s)}),l.each(function(){var n=e(this),s=n.is("ul, ol")?n:n.find("ul ,ol").first(),o=n.parent(),l=o.children("a, span"),d=o.closest("."+i.panel);if(o.parent().is("."+i.list)&&!n.data(a.parent)){n.data(a.parent,o);var r=e('<a class="'+i.subopen+'" href="#'+n.attr("id")+'" />').insertBefore(l);l.is("a")||r.addClass(i.fullsubopen),t.opts.slidingSubmenus&&s.prepend('<li class="'+i.subtitle+'"><a class="'+i.subclose+'" href="#'+d.attr("id")+'">'+l.text()+"</a></li>")}}),this.opts.slidingSubmenus){var r=this.__findAddBack(n,"."+i.list).find("> li."+i.selected);r.parents("li").removeClass(i.selected).end().add(r.parents("li")).each(function(){var n=e(this),t=n.find("> ."+i.panel);t.length&&(n.parents("."+i.panel).addClass(i.subopened),t.addClass(i.opened))}).closest("."+i.panel).addClass(i.opened).parents("."+i.panel).addClass(i.subopened)}else{var r=e("li."+i.selected,d);r.parents("li").removeClass(i.selected).end().add(r.parents("li")).addClass(i.opened)}var u=d.filter("."+i.opened);return u.length||(u=l.first()),u.addClass(i.opened).last().addClass(i.current),this.opts.slidingSubmenus&&l.not(u.last()).addClass(i.hidden).end().appendTo(this.$menu),l},_initAnchors:function(){var n=this;d.$body.on(o.click,"a",function(s){var a=e(this),l=!1,r=n.$menu.find(a).length;for(var u in e[t].addons)if(e[t].addons[u]._clickAnchor&&(l=e[t].addons[u]._clickAnchor.call(n,a,r)))break;if(!l&&r){var c=a.attr("href")||"";if("#"==c.slice(0,1))try{e(c,n.$menu).is("."+i.panel)&&(l=!0,e(c).trigger(n.opts.slidingSubmenus?o.open:o.toggle))}catch(p){}}if(l&&s.preventDefault(),!l&&r&&a.is("."+i.list+" > li > a")&&!a.is('[rel="external"]')&&!a.is('[target="_blank"]')){n.__valueOrFn(n.opts.onClick.setSelected,a)&&a.parent().trigger(o.setSelected);var h=n.__valueOrFn(n.opts.onClick.preventDefault,a,"#"==c.slice(0,1));h&&s.preventDefault(),n.__valueOrFn(n.opts.onClick.blockUI,a,!h)&&d.$html.addClass(i.blocking),n.__valueOrFn(n.opts.onClick.close,a,h)&&n.$menu.trigger(o.close)}})},_initEvents:function(){var n=this;this.$menu.on(o.toggle+" "+o.open+" "+o.close,"."+i.panel,function(e){e.stopPropagation()}),this.opts.slidingSubmenus?this.$menu.on(o.open,"."+i.panel,function(){return n._openSubmenuHorizontal(e(this))}):this.$menu.on(o.toggle,"."+i.panel,function(){var n=e(this);n.trigger(n.parent().hasClass(i.opened)?o.close:o.open)}).on(o.open,"."+i.panel,function(){e(this).parent().addClass(i.opened)}).on(o.close,"."+i.panel,function(){e(this).parent().removeClass(i.opened)})},_openSubmenuHorizontal:function(n){if(n.hasClass(i.current))return!1;var t=e("."+i.panel,this.$menu),s=t.filter("."+i.current);return t.removeClass(i.highest).removeClass(i.current).not(n).not(s).addClass(i.hidden),n.hasClass(i.opened)?s.addClass(i.highest).removeClass(i.opened).removeClass(i.subopened):(n.addClass(i.highest),s.addClass(i.subopened)),n.removeClass(i.hidden).addClass(i.current),setTimeout(function(){n.removeClass(i.subopened).addClass(i.opened)},this.conf.openingInterval),"open"},_update:function(e){if(this.updates||(this.updates=[]),"function"==typeof e)this.updates.push(e);else for(var n=0,t=this.updates.length;t>n;n++)this.updates[n].call(this,e)},__valueOrFn:function(e,n,t){return"function"==typeof e?e.call(n[0]):"undefined"==typeof e&&"undefined"!=typeof t?t:e},__refactorClass:function(e,n,t){return e.filter("."+n).removeClass(n).addClass(i[t])},__findAddBack:function(e,n){return e.find(n).add(e.filter(n))},__transitionend:function(e,n,t){var s=!1,i=function(){s||n.call(e[0]),s=!0};e.one(o.transitionend,i),e.one(o.webkitTransitionEnd,i),setTimeout(i,1.1*t)},__getUniqueId:function(){return i.mm(e[t].uniqueId++)}},e.fn[t]=function(s,i){return l||n(),s=e.extend(!0,{},e[t].defaults,s),i=e.extend(!0,{},e[t].configuration,i),this.each(function(){var n=e(this);n.data(t)||n.data(t,new e[t](n,s,i))})},e[t].support={touch:"ontouchstart"in window||navigator.msMaxTouchPoints}}}(jQuery);
/*	
 * jQuery mmenu offCanvas addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var t="mmenu",o="offCanvas";e[t].addons[o]={_init:function(){},_setup:function(){if(this.opts[o]){var t=this,s=this.opts[o],p=this.conf[o];"string"!=typeof p.pageSelector&&(p.pageSelector="> "+p.pageNodetype),a.$allMenus=(a.$allMenus||e()).add(this.$menu),this.vars.opened=!1;var r=[n.offcanvas];"left"!=s.position&&r.push(n.mm(s.position)),"back"!=s.zposition&&r.push(n.mm(s.zposition)),this.$menu.addClass(r.join(" ")).parent().removeClass(n.wrapper),this.setPage(a.$page),this[o+"_initBlocker"](),this[o+"_initWindow"](),this.$menu.on(i.open+" "+i.opening+" "+i.opened+" "+i.close+" "+i.closing+" "+i.closed+" "+i.setPage,function(e){e.stopPropagation()}).on(i.open+" "+i.close+" "+i.setPage,function(e){t[e.type]()}),this.$menu[p.menuInjectMethod+"To"](p.menuWrapperSelector)}},_add:function(){n=e[t]._c,s=e[t]._d,i=e[t]._e,n.add("offcanvas slideout modal background opening blocker page"),s.add("style"),i.add("opening opened closing closed setPage"),a=e[t].glbl},_clickAnchor:function(e){if(!this.opts[o])return!1;var t=this.$menu.attr("id");if(t&&t.length&&(this.conf.clone&&(t=n.umm(t)),e.is('[href="#'+t+'"]')))return this.open(),!0;if(a.$page){var t=a.$page.attr("id");return t&&t.length&&e.is('[href="#'+t+'"]')?(this.close(),!0):!1}}},e[t].defaults[o]={position:"left",zposition:"back",modal:!1,moveBackground:!0},e[t].configuration[o]={pageNodetype:"div",pageSelector:null,menuWrapperSelector:"body",menuInjectMethod:"prepend"},e[t].prototype.open=function(){if(this.vars.opened)return!1;var e=this;return this._openSetup(),setTimeout(function(){e._openFinish()},this.conf.openingInterval),"open"},e[t].prototype._openSetup=function(){var e=this;a.$allMenus.not(this.$menu).trigger(i.close),a.$page.data(s.style,a.$page.attr("style")||""),a.$wndw.trigger(i.resize,[!0]);var t=[n.opened];this.opts[o].modal&&t.push(n.modal),this.opts[o].moveBackground&&t.push(n.background),"left"!=this.opts[o].position&&t.push(n.mm(this.opts[o].position)),"back"!=this.opts[o].zposition&&t.push(n.mm(this.opts[o].zposition)),this.opts.classes&&t.push(this.opts.classes),a.$html.addClass(t.join(" ")),setTimeout(function(){e.vars.opened=!0},this.conf.openingInterval),this.$menu.addClass(n.current+" "+n.opened)},e[t].prototype._openFinish=function(){var e=this;this.__transitionend(a.$page,function(){e.$menu.trigger(i.opened)},this.conf.transitionDuration),a.$html.addClass(n.opening),this.$menu.trigger(i.opening)},e[t].prototype.close=function(){if(!this.vars.opened)return!1;var e=this;return this.__transitionend(a.$page,function(){e.$menu.removeClass(n.current).removeClass(n.opened),a.$html.removeClass(n.opened).removeClass(n.modal).removeClass(n.background).removeClass(n.mm(e.opts[o].position)).removeClass(n.mm(e.opts[o].zposition)),e.opts.classes&&a.$html.removeClass(e.opts.classes),a.$page.attr("style",a.$page.data(s.style)),e.vars.opened=!1,e.$menu.trigger(i.closed)},this.conf.transitionDuration),a.$html.removeClass(n.opening),this.$menu.trigger(i.closing),"close"},e[t].prototype.setPage=function(t){t||(t=e(this.conf[o].pageSelector,a.$body),t.length>1&&(t=t.wrapAll("<"+this.conf[o].pageNodetype+" />").parent())),t.addClass(n.page+" "+n.slideout),a.$page=t},e[t].prototype[o+"_initWindow"]=function(){a.$wndw.on(i.keydown,function(e){return a.$html.hasClass(n.opened)&&9==e.keyCode?(e.preventDefault(),!1):void 0});var s=0;a.$wndw.on(i.resize,function(e,t){if(t||a.$html.hasClass(n.opened)){var o=a.$wndw.height();(t||o!=s)&&(s=o,a.$page.css("minHeight",o))}}),e[t].prototype[o+"_initWindow"]=function(){}},e[t].prototype[o+"_initBlocker"]=function(){var s=e('<div id="'+n.blocker+'" class="'+n.slideout+'" />').appendTo(a.$body);s.on(i.touchstart,function(e){e.preventDefault(),e.stopPropagation(),s.trigger(i.mousedown)}).on(i.mousedown,function(e){e.preventDefault(),a.$html.hasClass(n.modal)||a.$allMenus.trigger(i.close)}),e[t].prototype[o+"_initBlocker"]=function(){}};var n,s,i,a}(jQuery);
/*	
 * jQuery mmenu buttonbars addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t){var n="mmenu",a="buttonbars";t[n].addons[a]={_init:function(n){this.opts[a],this.conf[a],this.__refactorClass(t("div",n),this.conf.classNames[a].buttonbar,"buttonbar"),t("."+i.buttonbar,n).each(function(){var n=t(this),a=n.children().not("input"),o=n.children().filter("input");n.addClass(i.buttonbar+"-"+a.length),o.each(function(){var n=t(this),i=a.filter('label[for="'+n.attr("id")+'"]');i.length&&n.insertBefore(i)})})},_setup:function(){},_add:function(){i=t[n]._c,o=t[n]._d,r=t[n]._e,i.add("buttonbar"),s=t[n].glbl}},t[n].defaults[a]={},t[n].configuration.classNames[a]={buttonbar:"Buttonbar"};var i,o,r,s}(jQuery);
/*	
 * jQuery mmenu counters addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t){var e="mmenu",n="counters";t[e].addons[n]={_init:function(e){var s=this,d=this.opts[n];this.conf[n],this.__refactorClass(t("em",e),this.conf.classNames[n].counter,"counter"),d.add&&e.each(function(){var e=t(this).data(o.parent);e&&(e.find("> em."+a.counter).length||e.prepend(t('<em class="'+a.counter+'" />')))}),d.update&&e.each(function(){var e=t(this),n=e.data(o.parent);if(n){var d=n.find("> em."+a.counter);d.length&&(e.is("."+a.list)||(e=e.find("> ."+a.list)),e.length&&!e.data(o.updatecounter)&&(e.data(o.updatecounter,!0),s._update(function(){var t=e.children().not("."+a.label).not("."+a.subtitle).not("."+a.hidden).not("."+a.search).not("."+a.noresultsmsg);d.html(t.length)})))}})},_setup:function(){var a=this.opts[n];"boolean"==typeof a&&(a={add:a,update:a}),"object"!=typeof a&&(a={}),a=t.extend(!0,{},t[e].defaults[n],a),this.opts[n]=a},_add:function(){a=t[e]._c,o=t[e]._d,s=t[e]._e,a.add("counter search noresultsmsg"),o.add("updatecounter"),d=t[e].glbl}},t[e].defaults[n]={add:!1,update:!1},t[e].configuration.classNames[n]={counter:"Counter"};var a,o,s,d}(jQuery);
/*	
 * jQuery mmenu dragOpen addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){function t(e,t,n){return t>e&&(e=t),e>n&&(e=n),e}var n="mmenu",o="dragOpen";e[n].addons[o]={_init:function(){},_setup:function(){if(this.opts.offCanvas){var s=this,p=this.opts[o],d=this.conf[o];if("boolean"==typeof p&&(p={open:p}),"object"!=typeof p&&(p={}),p=e.extend(!0,{},e[n].defaults[o],p),p.open){if(Hammer.VERSION<2)return;var f,c,h,m,u={},g=0,l=!1,v=!1,_=0,w=0;switch(this.opts.offCanvas.position){case"left":case"right":u.events="panleft panright",u.typeLower="x",u.typeUpper="X",v="width";break;case"top":case"bottom":u.events="panup pandown",u.typeLower="y",u.typeUpper="Y",v="height"}switch(this.opts.offCanvas.position){case"left":case"top":u.negative=!1;break;case"right":case"bottom":u.negative=!0}switch(this.opts.offCanvas.position){case"left":u.open_dir="right",u.close_dir="left";break;case"right":u.open_dir="left",u.close_dir="right";break;case"top":u.open_dir="down",u.close_dir="up";break;case"bottom":u.open_dir="up",u.close_dir="down"}var b=this.__valueOrFn(p.pageNode,this.$menu,r.$page);"string"==typeof b&&(b=e(b));var y=r.$page;switch(this.opts.offCanvas.zposition){case"front":y=this.$menu;break;case"next":y=y.add(this.$menu)}var $=new Hammer(b[0],p.vendors.hammer);$.on("panstart",function(e){switch(m=e.center[u.typeLower],s.opts.offCanvas.position){case"right":case"bottom":m>=r.$wndw[v]()-p.maxStartPos&&(g=1);break;default:m<=p.maxStartPos&&(g=1)}l=u.open_dir}).on(u.events+" panend",function(e){g>0&&e.preventDefault()}).on(u.events,function(e){if(f=e["delta"+u.typeUpper],u.negative&&(f=-f),f!=_&&(l=f>=_?u.open_dir:u.close_dir),_=f,_>p.threshold&&1==g){if(r.$html.hasClass(a.opened))return;g=2,s._openSetup(),s.$menu.trigger(i.opening),r.$html.addClass(a.dragging),w=t(r.$wndw[v]()*d[v].perc,d[v].min,d[v].max)}2==g&&(c=t(_,10,w)-("front"==s.opts.offCanvas.zposition?w:0),u.negative&&(c=-c),h="translate"+u.typeUpper+"("+c+"px )",y.css({"-webkit-transform":"-webkit-"+h,transform:h}))}).on("panend",function(){2==g&&(r.$html.removeClass(a.dragging),y.css("transform",""),s[l==u.open_dir?"_openFinish":"close"]()),g=0})}}},_add:function(){return"function"!=typeof Hammer?(e[n].addons[o]._init=function(){},e[n].addons[o]._setup=function(){},void 0):(a=e[n]._c,s=e[n]._d,i=e[n]._e,a.add("dragging"),r=e[n].glbl,void 0)}},e[n].defaults[o]={open:!1,maxStartPos:100,threshold:50,vendors:{hammer:{}}},e[n].configuration[o]={width:{perc:.8,min:140,max:440},height:{perc:.8,min:140,max:880}};var a,s,i,r}(jQuery);
/*	
 * jQuery mmenu fixedElements addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(o){var t="mmenu",d="fixedElements";o[t].addons[d]={_init:function(){if(this.opts.offCanvas){var o=this.conf.classNames[d].fixedTop,t=this.conf.classNames[d].fixedBottom,e=this.__refactorClass(a.$page.find("."+o),o,"fixed-top"),s=this.__refactorClass(a.$page.find("."+t),t,"fixed-bottom");e.add(s).appendTo(a.$body).addClass(i.slideout)}},_setup:function(){},_add:function(){i=o[t]._c,e=o[t]._d,s=o[t]._e,i.add("fixed-top fixed-bottom"),a=o[t].glbl}},o[t].defaults[d]={},o[t].configuration.classNames[d]={fixedTop:"FixedTop",fixedBottom:"FixedBottom"};var i,e,s,a}(jQuery);
/*	
 * jQuery mmenu footer addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t){var o="mmenu",e="footer";t[o].addons[e]={_init:function(a){var d=this,i=this.opts[e],r=t("div."+n.footer,this.$menu);r.length&&(i.update&&a.each(function(){var o=t(this),a=t("."+d.conf.classNames[e].panelFooter,o),u=a.html();u||(u=i.title);var l=function(){r[u?"show":"hide"](),r.html(u)};o.on(s.open,l),o.hasClass(n.current)&&l()}),t[o].addons.buttonbars&&t[o].addons.buttonbars._init.call(this,r))},_setup:function(){var a=this.opts[e];if("boolean"==typeof a&&(a={add:a,update:a}),"object"!=typeof a&&(a={}),a=t.extend(!0,{},t[o].defaults[e],a),this.opts[e]=a,a.add){var s=a.content?a.content:a.title;t('<div class="'+n.footer+'" />').appendTo(this.$menu).append(s),this.$menu.addClass(n.hasfooter)}},_add:function(){n=t[o]._c,a=t[o]._d,s=t[o]._e,n.add("footer hasfooter"),d=t[o].glbl}},t[o].defaults[e]={add:!1,content:!1,title:"",update:!1},t[o].configuration.classNames[e]={panelFooter:"Footer"};var n,a,s,d}(jQuery);
/*	
 * jQuery mmenu header addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var t="mmenu",a="header";e[t].addons[a]={_init:function(s){var i=this,o=this.opts[a],l=(this.conf[a],e("."+n.header,this.$menu));if(l.length){if(o.update){var h=l.find("."+n.title),c=l.find("."+n.prev),f=l.find("."+n.next),p=l.find("."+n.close),u=!1;r.$page&&(u="#"+r.$page.attr("id"),p.attr("href",u)),s.each(function(){var t=e(this),s=t.find("."+i.conf.classNames[a].panelHeader),r=t.find("."+i.conf.classNames[a].panelPrev),l=t.find("."+i.conf.classNames[a].panelNext),p=s.html(),u=r.attr("href"),v=l.attr("href"),m=r.html(),b=l.html();p||(p=t.find("."+n.subclose).html()),p||(p=o.title),u||(u=t.find("."+n.subclose).attr("href"));var x=function(){h[p?"show":"hide"](),h.html(p),c[u?"attr":"removeAttr"]("href",u),c[u||m?"show":"hide"](),c.html(m),f[v?"attr":"removeAttr"]("href",v),f[v||b?"show":"hide"](),f.html(b)};t.on(d.open,x),t.hasClass(n.current)&&x()})}e[t].addons.buttonbars&&e[t].addons.buttonbars._init.call(this,l)}},_setup:function(){var s=this.opts[a];if(this.conf[a],"boolean"==typeof s&&(s={add:s,update:s}),"object"!=typeof s&&(s={}),"undefined"==typeof s.content&&(s.content=["prev","title","next"]),s=e.extend(!0,{},e[t].defaults[a],s),this.opts[a]=s,s.add){if(s.content instanceof Array){for(var d=e("<div />"),r=0,i=s.content.length;i>r;r++)switch(s.content[r]){case"prev":case"next":case"close":d.append('<a class="'+n[s.content[r]]+'" href="#"></a>');break;case"title":d.append('<span class="'+n.title+'"></span>');break;default:d.append(s.content[r])}d=d.html()}else var d=s.content;e('<div class="'+n.header+'" />').prependTo(this.$menu).append(d),this.$menu.addClass(n.hasheader)}},_add:function(){n=e[t]._c,s=e[t]._d,d=e[t]._e,n.add("header hasheader prev next close title"),r=e[t].glbl}},e[t].defaults[a]={add:!1,title:"Menu",update:!1},e[t].configuration.classNames[a]={panelHeader:"Header",panelNext:"Next",panelPrev:"Prev"};var n,s,d,r}(jQuery);
/*	
 * jQuery mmenu labels addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(l){var e="mmenu",s="labels";l[e].addons[s]={_init:function(e){var n=this.opts[s];this.__refactorClass(l("li",this.$menu),this.conf.classNames[s].collapsed,"collapsed"),n.collapse&&l("."+a.label,e).each(function(){var e=l(this),s=e.nextUntil("."+a.label,"."+a.collapsed);s.length&&(e.children("."+a.subopen).length||(e.wrapInner("<span />"),e.prepend('<a href="#" class="'+a.subopen+" "+a.fullsubopen+'" />')))})},_setup:function(){var a=this.opts[s];"boolean"==typeof a&&(a={collapse:a}),"object"!=typeof a&&(a={}),a=l.extend(!0,{},l[e].defaults[s],a),this.opts[s]=a},_add:function(){a=l[e]._c,n=l[e]._d,o=l[e]._e,a.add("collapsed uncollapsed"),t=l[e].glbl},_clickAnchor:function(l,e){if(e){var s=l.parent();if(s.is("."+a.label)){var n=s.nextUntil("."+a.label,"."+a.collapsed);return s.toggleClass(a.opened),n[s.hasClass(a.opened)?"addClass":"removeClass"](a.uncollapsed),!0}}return!1}},l[e].defaults[s]={collapse:!1},l[e].configuration.classNames[s]={collapsed:"Collapsed"};var a,n,o,t}(jQuery);
/*	
 * jQuery mmenu searchfield addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){function s(e){switch(e){case 9:case 16:case 17:case 18:case 37:case 38:case 39:case 40:return!0}return!1}var n="mmenu",t="searchfield";e[n].addons[t]={_init:function(n){var i=this,l=this.opts[t],d=this.conf[t];if(l.add){switch(l.addTo){case"menu":var c=this.$menu;break;case"panels":var c=n;break;default:var c=e(l.addTo,this.$menu).filter("."+a.panel)}c.length&&c.each(function(){var s=e(this),n=s.is("."+a.menu)?d.form?"form":"div":"li";if(!s.children(n+"."+a.search).length){if(s.is("."+a.menu))var t=i.$menu,r="prependTo";else var t=s.children().first(),r=t.is("."+a.subtitle)?"insertAfter":"insertBefore";var o=e("<"+n+' class="'+a.search+'" />');if("form"==n&&"object"==typeof d.form)for(var c in d.form)o.attr(c,d.form[c]);o.append('<input placeholder="'+l.placeholder+'" type="text" autocomplete="off" />'),o[r](t)}l.noResults&&(s.is("."+a.menu)&&(s=s.children("."+a.panel).first()),n=s.is("."+a.list)?"li":"div",s.children(n+"."+a.noresultsmsg).length||e("<"+n+' class="'+a.noresultsmsg+'" />').html(l.noResults).appendTo(s))})}if(this.$menu.children("."+a.search).length&&this.$menu.addClass(a.hassearch),l.search){var h=e("."+a.search,this.$menu);h.length&&h.each(function(){var n=e(this);if("menu"==l.addTo)var t=e("."+a.panel,i.$menu),d=i.$menu;else var t=n.closest("."+a.panel),d=t;var c=n.children("input"),h=i.__findAddBack(t,"."+a.list).children("li"),u=h.filter("."+a.label),f=h.not("."+a.subtitle).not("."+a.label).not("."+a.search).not("."+a.noresultsmsg),p="> a";l.showLinksOnly||(p+=", > span"),c.off(o.keyup+" "+o.change).on(o.keyup,function(e){s(e.keyCode)||n.trigger(o.search)}).on(o.change,function(){n.trigger(o.search)}),n.off(o.reset+" "+o.search).on(o.reset+" "+o.search,function(e){e.stopPropagation()}).on(o.reset,function(){n.trigger(o.search,[""])}).on(o.search,function(s,n){"string"==typeof n?c.val(n):n=c.val(),n=n.toLowerCase(),t.scrollTop(0),f.add(u).addClass(a.hidden),f.each(function(){var s=e(this);e(p,s).text().toLowerCase().indexOf(n)>-1&&s.add(s.prevAll("."+a.label).first()).removeClass(a.hidden)}),e(t.get().reverse()).each(function(s){var n=e(this),t=n.data(r.parent);if(t){var d=n.add(n.find("> ."+a.list)).find("> li").not("."+a.subtitle).not("."+a.search).not("."+a.noresultsmsg).not("."+a.label).not("."+a.hidden);d.length?t.removeClass(a.hidden).removeClass(a.nosubresults).prevAll("."+a.label).first().removeClass(a.hidden):"menu"==l.addTo&&(n.hasClass(a.opened)&&setTimeout(function(){t.trigger(o.open)},1.5*(s+1)*i.conf.openingInterval),t.addClass(a.nosubresults))}}),d[f.not("."+a.hidden).length?"removeClass":"addClass"](a.noresults),i._update()})})}},_setup:function(){var s=this.opts[t];this.conf[t],"boolean"==typeof s&&(s={add:s,search:s}),"object"!=typeof s&&(s={}),s=e.extend(!0,{},e[n].defaults[t],s),"boolean"!=typeof s.showLinksOnly&&(s.showLinksOnly="menu"==s.addTo),this.opts[t]=s},_add:function(){a=e[n]._c,r=e[n]._d,o=e[n]._e,a.add("search hassearch noresultsmsg noresults nosubresults"),o.add("search reset change"),i=e[n].glbl}},e[n].defaults[t]={add:!1,addTo:"menu",search:!1,placeholder:"Search",noResults:"No results found."},e[n].configuration[t]={form:!1};var a,r,o,i}(jQuery);
/*	
 * jQuery mmenu toggles addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var t="mmenu",s="toggles";e[t].addons[s]={_init:function(t){var a=this;this.opts[s],this.conf[s],this.__refactorClass(e("input",t),this.conf.classNames[s].toggle,"toggle"),this.__refactorClass(e("input",t),this.conf.classNames[s].check,"check"),e("input."+c.toggle+", input."+c.check,t).each(function(){var t=e(this),s=t.closest("li"),l=t.hasClass(c.toggle)?"toggle":"check",n=t.attr("id")||a.__getUniqueId();s.children('label[for="'+n+'"]').length||(t.attr("id",n),s.prepend(t),e('<label for="'+n+'" class="'+c[l]+'"></label>').insertBefore(s.children("a, span").last()))})},_setup:function(){},_add:function(){c=e[t]._c,a=e[t]._d,l=e[t]._e,c.add("toggle check"),n=e[t].glbl}},e[t].defaults[s]={},e[t].configuration.classNames[s]={toggle:"Toggle",check:"Check"};var c,a,l,n}(jQuery);;(function(window, document, navigator, undefined){
    'use strict';

    // http://stackoverflow.com/questions/97962/debounce-clicks-when-submitting-a-web-form
    var debounce = function( callback, wait, cancelprevious )
    {
        var timeout;
        return function()
        {
            if( timeout )
            {
                if( ! cancelprevious )
                    return ;
                clearTimeout( timeout );
            }
            var context = this,
                args = arguments;
            timeout = setTimeout(
                function()
                {
                    timeout = null;
                    callback.apply( context, args );
                }, wait );
        };
    };

    // http://stackoverflow.com/questions/12949590/how-to-detach-event-in-ie-6-7-8-9-using-javascript
    var addEvent = function( element, type, handler, useCapture )
    {
        if( element.addEventListener ) {
            element.addEventListener( type, handler, useCapture ? true : false );
        }
        else if( element.attachEvent ) {
            element.attachEvent( 'on' + type, handler );
        }
        else if( element != window )
            element['on' + type] = handler;
    };
    var removeEvent = function( element, type, handler, useCapture )
    {
        if( element.removeEventListener ) {
            element.removeEventListener( type, handler, useCapture ? true : false );
        }
        else if( element.detachEvent) {
            element.detachEvent( 'on' + type, handler );
        }
        else if( element != window )
            element['on' + type] = null;
    };
    // http://www.cristinawithout.com/content/function-trigger-events-javascript
    var fireEvent = function( element, type, bubbles, cancelable )
    {
        if( document.createEvent ) {
            var event = document.createEvent('Event');
            event.initEvent( type, bubbles !== undefined ? bubbles : true, cancelable !== undefined ? cancelable : false );
            element.dispatchEvent(event);
        }
        else if( document.createEventObject ) { //IE
            var event = document.createEventObject();
            element.fireEvent( 'on' + type, event );
        }
        else if( typeof(element['on' + type]) == 'function' )
            element['on' + type]();
    };
    // prevent default
    var cancelEvent = function( e )
    {
        if( e.preventDefault )
            e.preventDefault();
        else
            e.returnValue = false;
        if( e.stopPropagation )
            e.stopPropagation();
        else
            e.cancelBubble = true;
        return false;
    };

    // http://stackoverflow.com/questions/13377887/javascript-node-undefined-in-ie8-and-under
    var Node_ELEMENT_NODE = typeof(Node) != 'undefined' ? Node.ELEMENT_NODE : 1;
    var Node_TEXT_NODE = typeof(Node) != 'undefined' ? Node.TEXT_NODE : 3;

    // http://stackoverflow.com/questions/2234979/how-to-check-in-javascript-if-one-element-is-a-child-of-another
    var isOrContainsNode = function( ancestor, descendant )
    {
        var node = descendant;
        while( node )
        {
            if( node === ancestor )
                return true;
            node = node.parentNode;
        }
        return false;
    };

    // http://stackoverflow.com/questions/667951/how-to-get-nodes-lying-inside-a-range-with-javascript
    var nextNode = function( node, container )
    {
        if( node.firstChild )
            return node.firstChild;
        while( node )
        {
            if( node == container ) // do not walk out of the container
                return null;
            if( node.nextSibling )
                return node.nextSibling;
            node = node.parentNode;
        }
        return null;
    };

    // save/restore selection
    // http://stackoverflow.com/questions/13949059/persisting-the-changes-of-range-objects-after-selection-in-html/13950376#13950376
    var saveSelection = function( containerNode )
    {
        if( window.getSelection )
        {
            var sel = window.getSelection();
            if( sel.rangeCount > 0 )
                return sel.getRangeAt(0);
        }
        else if( document.selection )
        {
            var sel = document.selection;
            return sel.createRange();
        }
        return null;
    };
    var restoreSelection = function( containerNode, savedSel )
    {
        if( ! savedSel )
            return;
        if( window.getSelection )
        {
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(savedSel);
        }
        else if( document.selection )
        {
            savedSel.select();
        }
    };

    // http://stackoverflow.com/questions/12603397/calculate-width-height-of-the-selected-text-javascript
    // http://stackoverflow.com/questions/6846230/coordinates-of-selected-text-in-browser-page
    var getSelectionRect = function()
    {
        if( window.getSelection )
        {
            var sel = window.getSelection();
            if( ! sel.rangeCount )
                return false;
            var range = sel.getRangeAt(0).cloneRange();
            if( range.getBoundingClientRect ) // Missing for Firefox 3.5+3.6
            {
                var rect = range.getBoundingClientRect();
                // Safari 5.1 returns null, IE9 returns 0/0/0/0 if image selected
                if( ! rect || (rect.left == 0 && rect.top == 0 && rect.right == 0 && rect.bottom == 0) )
                    return false;
                return {
                    // Firefox returns floating-point numbers
                    left: parseInt(rect.left),
                    top: parseInt(rect.top),
                    width: parseInt(rect.right - rect.left),
                    height: parseInt(rect.bottom - rect.top)
                };
            }
            /*
            // Fall back to inserting a temporary element (only for Firefox 3.5 and 3.6)
            var span = document.createElement('span');
            if( span.getBoundingClientRect )
            {
                // Ensure span has dimensions and position by
                // adding a zero-width space character
                span.appendChild( document.createTextNode('\u200b') );
                range.insertNode( span );
                var rect = span.getBoundingClientRect();
                var spanParent = span.parentNode;
                spanParent.removeChild( span );
                // Glue any broken text nodes back together
                spanParent.normalize();
                return {
                    left: parseInt(rect.left),
                    top: parseInt(rect.top),
                    width: parseInt(rect.right - rect.left),
                    height: parseInt(rect.bottom - rect.top)
                };
            }
            */
        }
        else if( document.selection )
        {
            var sel = document.selection;
            if( sel.type != 'Control' )
            {
                var range = sel.createRange();
                // http://javascript.info/tutorial/coordinates
                // http://www.softcomplex.com/docs/get_window_size_and_scrollbar_position.html
                // http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
                return {
                    left: range.boundingLeft,
                    top: range.boundingTop,
                    width: range.boundingWidth,
                    height: range.boundingHeight
                };
            }
        }
        return false;
    };

    var getSelectionCollapsed = function( containerNode )
    {
        if( window.getSelection )
        {
            var sel = window.getSelection();
            if( sel.isCollapsed )
                return true;
            return false;
        }
        else if( document.selection )
        {
            var sel = document.selection;
            if( sel.type == 'Text' )
            {
                var range = document.selection.createRange();
                var textrange = document.body.createTextRange();
                textrange.moveToElementText(containerNode);
                textrange.setEndPoint('EndToStart', range);
                return range.htmlText.length == 0;
            }
            if( sel.type == 'Control' ) // e.g. an image selected
                return false;
            // sel.type == 'None' -> collapsed selection
        }
        return true;
    };

    // http://stackoverflow.com/questions/7781963/js-get-array-of-all-selected-nodes-in-contenteditable-div
    var getSelectedNodes = function( containerNode )
    {
        if( window.getSelection )
        {
            var sel = window.getSelection();
            if( ! sel.rangeCount )
                return [];
            var nodes = [];
            for( var i=0; i < sel.rangeCount; ++i )
            {
                var range = sel.getRangeAt(i),
                    node = range.startContainer,
                    endNode = range.endContainer;
                while( node )
                {
                    // add this node?
                    if( node != containerNode )
                    {
                        var node_inside_selection = false;
                        if( sel.containsNode )
                            node_inside_selection = sel.containsNode( node, true );
                        else // IE11
                        {
                            // http://stackoverflow.com/questions/5884210/how-to-find-if-a-htmlelement-is-enclosed-in-selected-text
                            var noderange = document.createRange();
                            noderange.selectNodeContents( node );
                            for( var i=0; i < sel.rangeCount; ++i )
                            {
                                var range = sel.getRangeAt(i);
                                if( range.compareBoundaryPoints(range.START_TO_START, noderange) <= 0 &&
                                    range.compareBoundaryPoints(range.END_TO_END, noderange) >= 0 )
                                {
                                    node_inside_selection = true;
                                    break;
                                }
                            }
                        }
                        if( node_inside_selection )
                            nodes.push( node );
                    }
                    node = nextNode( node, node == endNode ? endNode : containerNode );
                }
            }
            if( nodes.length == 0 && isOrContainsNode(containerNode,sel.focusNode) && sel.focusNode != containerNode )
                nodes.push( sel.focusNode );
            return nodes;
        }
        else if( document.selection )
        {
            var sel = document.selection;
            if( sel.type == 'Text' )
            {
                var nodes = [];
                var range = sel.createRange(),
                    node = containerNode;
                while( node )
                {
                    // add this node?
                    if( node != containerNode && node.nodeType == Node_ELEMENT_NODE )
                    {
                        // http://stackoverflow.com/questions/5884210/how-to-find-if-a-htmlelement-is-enclosed-in-selected-text
                        var noderange = range.duplicate();
                        noderange.moveToElementText( node );
                        if( range.inRange(noderange) )
                            nodes.push( node );
                    }
                    node = nextNode( node, containerNode );
                }
                // http://stackoverflow.com/questions/5100640/how-to-get-focus-node-for-ie
                if( nodes.length == 0 && isOrContainsNode(containerNode,document.activeElement) && document.activeElement != containerNode )
                    nodes.push( document.activeElement );
                return nodes;
            }
            if( sel.type == 'Control' ) // e.g. an image selected
            {
                var nodes = [];
                // http://msdn.microsoft.com/en-us/library/ie/hh826021%28v=vs.85%29.aspx
                var range = sel.createRange();
                for( var i=0; i < range.length; ++i )
                    nodes.push( range(i) );
                return nodes;
            }
        }
        return [];
    };

    // http://stackoverflow.com/questions/8513368/collapse-selection-to-start-of-selection-not-div
    var collapseSelectionEnd = function()
    {
        if( window.getSelection )
        {
            var sel = window.getSelection();
            if( ! sel.isCollapsed )
                sel.collapseToEnd();
        }
        else if( document.selection )
        {
            var sel = document.selection;
            if( sel.type != 'Control' )
            {
                var range = sel.createRange();
                range.collapse(false);
                range.select();
            }
        }
    };

    // http://stackoverflow.com/questions/4652734/return-html-from-a-user-selected-text/4652824#4652824
    var getSelectionHtml = function( containerNode )
    {
        if( getSelectionCollapsed( containerNode ) )
            return null;
        if( window.getSelection )
        {
            var sel = window.getSelection();
            if( sel.rangeCount )
            {
                var container = document.createElement('div'),
                    len = sel.rangeCount;
                for( var i=0; i < len; ++i )
                {
                    var contents = sel.getRangeAt(i).cloneContents();
                    container.appendChild(contents);
                }
                return container.innerHTML;
            }
        }
        else if( document.selection )
        {
            var sel = document.selection;
            if( sel.type == 'Text' )
            {
                var range = sel.createRange();
                return range.htmlText;
            }
        }
        return null;
    };

    var selectionInside = function( containerNode, force )
    {
        // selection inside editor?
        if( window.getSelection )
        {
            var sel = window.getSelection();
            if( isOrContainsNode(containerNode,sel.anchorNode) && isOrContainsNode(containerNode,sel.focusNode) )
                return true;
            // selection at least partly outside editor
            if( ! force )
                return false;
            // force selection to editor
            var range = document.createRange();
            range.selectNodeContents( containerNode );
            range.collapse( false );
            sel.removeAllRanges();
            sel.addRange(range);
        }
        else if( document.selection )
        {
            var sel = document.selection;
            if( sel.type == 'Control' ) // e.g. an image selected
            {
                // http://msdn.microsoft.com/en-us/library/ie/hh826021%28v=vs.85%29.aspx
                var range = sel.createRange();
                if( range.length != 0 && isOrContainsNode(containerNode,range(0)) ) // test only the first element
                    return true;
            }
            else //if( sel.type == 'Text' || sel.type == 'None' )
            {
                // Range of container
                // http://stackoverflow.com/questions/12243898/how-to-select-all-text-in-contenteditable-div
                var rangeContainer = document.body.createTextRange();
                rangeContainer.moveToElementText(containerNode);
                // Compare with selection range
                var range = sel.createRange();
                if( rangeContainer.inRange(range) )
                    return true;
            }
            // selection at least partly outside editor
            if( ! force )
                return false;
            // force selection to editor
            // http://stackoverflow.com/questions/12243898/how-to-select-all-text-in-contenteditable-div
            var range = document.body.createTextRange();
            range.moveToElementText(containerNode);
            range.setEndPoint('StartToEnd',range); // collapse
            range.select();
        }
        return true;
    };

    /*
    var clipSelectionTo = function( containerNode )
    {
        if( window.getSelection && containerNode.compareDocumentPosition )
        {
            var sel = window.getSelection();
            var left_node = sel.anchorNode,
                left_offset = sel.anchorOffset,
                right_node = sel.focusNode,
                right_offset = sel.focusOffset;
            // http://stackoverflow.com/questions/10710733/dom-determine-if-the-anchornode-or-focusnode-is-on-the-left-side
            if( (left_node == right_node && left_offset > right_offset) ||
                (left_node.compareDocumentPosition(right_node) & Node.DOCUMENT_POSITION_PRECEDING) )
            {
                // Right-to-left selection
                left_node = sel.focusNode;
                left_offset = sel.focusOffset;
                right_node = sel.anchorNode,
                right_offset = sel.anchorOffset;
            }
            // Speed up: selection inside editor
            var left_inside = isOrContainsNode(containerNode,left_node),
                right_inside = isOrContainsNode(containerNode,right_node);
            if( left_inside && right_inside )
                return true;
            // Selection before/after container?
            if( ! left_inside && containerNode.compareDocumentPosition(left_node) & Node.DOCUMENT_POSITION_FOLLOWING )
                return false; // selection after
            if( ! right_inside && containerNode.compareDocumentPosition(right_node) & Node.DOCUMENT_POSITION_PRECEDING )
                return false; // selection before
            // Selection partly before/after container
            // http://stackoverflow.com/questions/12243898/how-to-select-all-text-in-contenteditable-div
            var range = document.createRange();
            range.selectNodeContents( containerNode );
            if( left_inside )
                range.setStart( left_node, left_offset );
            if( right_inside )
                range.setEnd( right_node, right_offset );
            sel.removeAllRanges();
            sel.addRange(range);
            return true;
        }
        else if( document.selection )
        {
            var sel = document.selection;
            if( sel.type == 'Text' )
            {
                // Range of container
                // http://stackoverflow.com/questions/12243898/how-to-select-all-text-in-contenteditable-div
                var rangeContainer = document.body.createTextRange();
                rangeContainer.moveToElementText(containerNode);
                // Compare with selection range
                var range = sel.createRange();
                if( rangeContainer.inRange(range) )
                    return true;
                // Selection before/after container?
                if( rangeContainer.compareEndPoints('StartToEnd',range) > 0 )
                    return false;
                if( rangeContainer.compareEndPoints('EndToStart',range) < 0 )
                    return false;
                // Selection partly before/after container
                if( rangeContainer.compareEndPoints('StartToStart',range) > 0 )
                    range.setEndPoint('StartToStart',rangeContainer);
                if( rangeContainer.compareEndPoints('EndToEnd',range) < 0 )
                    range.setEndPoint('EndToEnd',rangeContainer);
                // select range
                range.select();
                return true;
            }
        }
        return true;
    };
    */

    // http://stackoverflow.com/questions/6690752/insert-html-at-caret-in-a-contenteditable-div/6691294#6691294
    // http://stackoverflow.com/questions/4823691/insert-an-html-element-in-a-contenteditable-element
    // http://stackoverflow.com/questions/6139107/programatically-select-text-in-a-contenteditable-html-element
    var pasteHtmlAtCaret = function( containerNode, html )
    {
        if( window.getSelection )
        {
            // IE9 and non-IE
            var sel = window.getSelection();
            if( sel.getRangeAt && sel.rangeCount )
            {
                var range = sel.getRangeAt(0);
                // Range.createContextualFragment() would be useful here but is
                // only relatively recently standardized and is not supported in
                // some browsers (IE9, for one)
                var el = document.createElement('div');
                el.innerHTML = html;
                var frag = document.createDocumentFragment(), node, lastNode;
                while ( (node = el.firstChild) ) {
                    lastNode = frag.appendChild(node);
                }
                if( isOrContainsNode(containerNode, range.commonAncestorContainer) )
                {
                    range.deleteContents();
                    range.insertNode(frag);
                }
                else {
                    containerNode.appendChild(frag);
                }
                // Preserve the selection
                if( lastNode )
                {
                    range = range.cloneRange();
                    range.setStartAfter(lastNode);
                    range.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
            }
        }
        else if( document.selection )
        {
            // IE <= 8
            var sel = document.selection;
            if( sel.type != 'Control' )
            {
                var originalRange = sel.createRange();
                originalRange.collapse(true);
                var range = sel.createRange();
                if( isOrContainsNode(containerNode, range.parentElement()) )
                    range.pasteHTML( html );
                else // simply append to Editor
                {
                    var textRange = document.body.createTextRange();
                    textRange.moveToElementText(containerNode);
                    textRange.collapse(false);
                    textRange.select();
                    textRange.pasteHTML( html );
                }
                // Preserve the selection
                range = sel.createRange();
                range.setEndPoint('StartToEnd', originalRange);
                range.select();
            }
        }
    };

    // Interface: Create wysiwyg
    window.wysiwyg = function( option )
    {
        // Options
        option = option || {};
        var option_element = option.element || null;
        var option_onkeypress = option.onkeypress || null;
        var option_onselection = option.onselection || null;
        var option_onplaceholder = option.onplaceholder || null;
        var option_hijackcontextmenu = option.hijackcontextmenu || false;

        // Keep textarea if browser can't handle content-editable
        var is_textarea = option_element.nodeName == 'TEXTAREA' || option_element.nodeName == 'INPUT';
        if( is_textarea )
        {
            // http://stackoverflow.com/questions/1882205/how-do-i-detect-support-for-contenteditable-via-javascript
            var canContentEditable = 'contentEditable' in document.body;
            if( canContentEditable )
            {
                // Sniffer useragent...
                var webkit = navigator.userAgent.match(/(?:iPad|iPhone|Android).* AppleWebKit\/([^ ]+)/);
                if( webkit && 420 <= parseInt(webkit[1]) && parseInt(webkit[1]) < 534 ) // iPhone 1 was Webkit/420
                    canContentEditable = false;
            }
            if( ! canContentEditable )
            {
                // Keep textarea
                var node_textarea = option_element;
                // Add a 'newline' after each '<br>'
                var newlineAfterBR = function( html ) {
                    return html.replace(/<br[ \/]*>\n?/gi,'<br>\n');
                };
                node_textarea.value = newlineAfterBR( node_textarea.value );
                // Command structure
                var dummy_this = function() {
                    return this;
                };
                var dummy_null = function() {
                    return null;
                };
                return {
                    legacy: true,
                    // properties
                    getElement: function()
                    {
                        return node_textarea;
                    },
                    getHTML: function()
                    {
                        return node_textarea.value;
                    },
                    setHTML: function( html )
                    {
                        node_textarea.value = newlineAfterBR( html );
                        return this;
                    },
                    getSelectedHTML: dummy_null,
                    sync: dummy_this,
                    // selection and popup
                    collapseSelection: dummy_this,
                    openPopup: dummy_null,
                    closePopup: dummy_this,
                    // exec commands
                    removeFormat: dummy_this,
                    bold: dummy_this,
                    italic: dummy_this,
                    underline: dummy_this,
                    strikethrough: dummy_this,
                    forecolor: dummy_this,
                    highlight: dummy_this,
                    fontName: dummy_this,
                    fontSize: dummy_this,
                    subscript: dummy_this,
                    superscript: dummy_this,
                    align: dummy_this,
                    format: dummy_this,
                    indent: dummy_this,
                    insertLink: dummy_this,
                    insertImage: dummy_this,
                    insertHTML: dummy_this,
                    insertList: dummy_this
                };
            }
        }

        // create content-editable
        var node_textarea = null,
            node_wysiwyg = null;
        if( is_textarea )
        {
            // Textarea
            node_textarea = option_element;
            node_textarea.style.display = 'none';

            // Contenteditable
            node_wysiwyg = document.createElement( 'DIV' );
            node_wysiwyg.innerHTML = node_textarea.value;
            var parent = node_textarea.parentNode,
                next = node_textarea.nextSibling;
            if( next )
                parent.insertBefore( node_wysiwyg, next );
            else
                parent.appendChild( node_wysiwyg );
        }
        else
            node_wysiwyg = option_element;
        node_wysiwyg.setAttribute( 'contentEditable', 'true' ); // IE7 is case sensitive

        // IE8 uses 'document' instead of 'window'
        // http://tanalin.com/en/articles/ie-version-js/
        var window_ie8 = (document.all && !document.addEventListener) ? document : window;

        // Sync Editor with Textarea
        var syncTextarea = null;
        if( is_textarea )
        {
            var previous_html = node_wysiwyg.innerHTML;
            syncTextarea = function()
            {
                var new_html = node_wysiwyg.innerHTML;
                if( new_html == previous_html )
                    return ;
                // HTML changed
                node_textarea.value = new_html;
                previous_html = new_html;
                // Event Handler
                fireEvent( node_textarea, 'change', false );
            };
        }

        // Show placeholder
        var showPlaceholder;
        if( option_onplaceholder )
        {
            var placeholder_visible = false;
            showPlaceholder = function()
            {
                // Test if wysiwyg has content
                var wysiwyg_empty = true;
                var node = node_wysiwyg;
                while( node )
                {
                    node = nextNode( node, node_wysiwyg );
                    // Test if node contains something visible
                    if( ! node )
                        ;
                    else if( node.nodeType == Node_ELEMENT_NODE )
                    {
                        if( node.nodeName == 'IMG' )
                        {
                            wysiwyg_empty = false;
                            break;
                        }
                    }
                    else if( node.nodeType == Node_TEXT_NODE )
                    {
                        var text = node.nodeValue;
                        if( text && text.search(/[^\s]/) != -1 )
                        {
                            wysiwyg_empty = false;
                            break;
                        }
                    }
                }
                if( placeholder_visible != wysiwyg_empty )
                {
                    option_onplaceholder( wysiwyg_empty );
                    placeholder_visible = wysiwyg_empty;
                }
            };
            showPlaceholder();
        }

        // Handle selection
        var popup_saved_selection = null, // preserve selection during popup
            handleSelection = null,
            debounced_handleSelection = null;
        if( option_onselection )
        {
            handleSelection = function( clientX, clientY, rightclick )
            {
                // Detect collapsed selection
                var collapsed = getSelectionCollapsed( node_wysiwyg );
                // List of all selected nodes
                var nodes = getSelectedNodes( node_wysiwyg );
                // Rectangle of the selection
                var rect = (clientX === null || clientY === null) ? null :
                            {
                                left: clientX,
                                top: clientY,
                                width: 0,
                                height: 0
                            };
                var selectionRect = getSelectionRect();
                if( selectionRect )
                    rect = selectionRect;
                if( rect )
                {
                    // So far 'rect' is relative to viewport
                    if( node_wysiwyg.getBoundingClientRect )
                    {
                        // Make it relative to the editor via 'getBoundingClientRect()'
                        var boundingrect = node_wysiwyg.getBoundingClientRect();
                        rect.left -= parseInt(boundingrect.left);
                        rect.top -= parseInt(boundingrect.top);
                    }
                    else
                    {
                        var node = node_wysiwyg,
                            offsetLeft = 0,
                            offsetTop = 0,
                            fixed = false;
                        do {
                            offsetLeft += node.offsetLeft ? parseInt(node.offsetLeft) : 0;
                            offsetTop += node.offsetTop ? parseInt(node.offsetTop) : 0;
                            if( node.style.position == 'fixed' )
                                fixed = true;
                        }
                        while( node = node.offsetParent );
                        rect.left -= offsetLeft - (fixed ? 0 : window.pageXOffset);
                        rect.top -= offsetTop - (fixed ? 0 : window.pageYOffset);
                    }
                    // Trim rectangle to the editor
                    if( rect.left < 0 )
                        rect.left = 0;
                    if( rect.top < 0 )
                        rect.top = 0;
                    if( rect.width > node_wysiwyg.offsetWidth )
                        rect.width = node_wysiwyg.offsetWidth;
                    if( rect.height > node_wysiwyg.offsetHeight )
                        rect.height = node_wysiwyg.offsetHeight;
                }
                else if( nodes.length )
                {
                    // What else could we do? Offset of first element...
                    for( var i=0; i < nodes.length; ++i )
                    {
                        var node = nodes[i];
                        if( node.nodeType != Node_ELEMENT_NODE )
                            continue;
                        rect = {
                                left: node.offsetLeft,
                                top: node.offsetTop,
                                width: node.offsetWidth,
                                height: node.offsetHeight
                            };
                        break;
                    }
                }
                // Callback
                option_onselection( collapsed, rect, nodes, rightclick );
            };
            debounced_handleSelection = debounce( handleSelection, 1 );
        }

        // Open popup
        var node_popup = null;
        var popupClickClose = function( e )
        {
            // http://www.quirksmode.org/js/events_properties.html
            if( !e )
                var e = window.event;
            var target = e.target || e.srcElement;
            if( target.nodeType == Node_TEXT_NODE ) // defeat Safari bug
                target = target.parentNode;
            // Click within popup?
            if( isOrContainsNode(node_popup,target) )
                return ;
            // close popup
            popupClose();
        };
        var popupOpen = function()
        {
            // Already open?
            if( node_popup )
                return node_popup;

            // Global click closes popup
            addEvent( window_ie8, 'mousedown', popupClickClose, true );

            // Create popup element
            node_popup = document.createElement( 'DIV' );
            var parent = node_wysiwyg.parentNode,
                next = node_wysiwyg.nextSibling;
            if( next )
                parent.insertBefore( node_popup, next );
            else
                parent.appendChild( node_popup );
            return node_popup;
        };
        var popupClose = function()
        {
            if( ! node_popup )
                return ;
            node_popup.parentNode.removeChild( node_popup );
            node_popup = null;
            removeEvent( window_ie8, 'mousedown', popupClickClose, true );
        };

        // Focus/Blur events
        addEvent( node_wysiwyg, 'focus', function()
        {
            // forward focus/blur to the textarea
            if( node_textarea )
                fireEvent( node_textarea, 'focus', false );
        });
        addEvent( node_wysiwyg, 'blur', function()
        {
            // sync textarea immediately
            if( syncTextarea )
                syncTextarea();
            // forward focus/blur to the textarea
            if( node_textarea )
                fireEvent( node_textarea, 'blur', false );
        });

        // Change events
        var debounced_changeHandler = null;
        if( showPlaceholder || syncTextarea )
        {
            // debounce 'syncTextarea' a second time, because 'innerHTML' is quite burdensome
            var debounced_syncTextarea = syncTextarea ? debounce( syncTextarea, 250, true ) : null; // high timeout is save, because of "onblur" fires immediately
            var changeHandler = function( e )
            {
                if( showPlaceholder )
                    showPlaceholder();
                if( debounced_syncTextarea )
                    debounced_syncTextarea();
            };
            debounced_changeHandler = debounce( changeHandler, 1 );

            // Catch change events
            // http://stackoverflow.com/questions/1391278/contenteditable-change-events/1411296#1411296
            // http://stackoverflow.com/questions/8694054/onchange-event-with-contenteditable/8694125#8694125
            // https://github.com/mindmup/bootstrap-wysiwyg/pull/50/files
            // http://codebits.glennjones.net/editing/events-contenteditable.htm
            addEvent( node_wysiwyg, 'input', debounced_changeHandler );
            addEvent( node_wysiwyg, 'DOMNodeInserted', debounced_changeHandler );
            addEvent( node_wysiwyg, 'DOMNodeRemoved', debounced_changeHandler );
            addEvent( node_wysiwyg, 'DOMSubtreeModified', debounced_changeHandler );
            addEvent( node_wysiwyg, 'DOMCharacterDataModified', debounced_changeHandler ); // polyfill input in IE 9-10
            addEvent( node_wysiwyg, 'propertychange', debounced_changeHandler );
            addEvent( node_wysiwyg, 'textInput', debounced_changeHandler );
            addEvent( node_wysiwyg, 'paste', debounced_changeHandler );
            addEvent( node_wysiwyg, 'cut', debounced_changeHandler );
            addEvent( node_wysiwyg, 'drop', debounced_changeHandler );
        }

        // Key events
        // http://sandbox.thewikies.com/html5-experiments/key-events.html
        var keyHandler = function( e, phase )
        {
            // http://www.quirksmode.org/js/events_properties.html
            if( !e )
                var e = window.event;
            var code = 0;
            if( e.keyCode )
                code = e.keyCode;
            else if( e.which )
                code = e.which;
            // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
            var character = e.charCode;

            // Callback
            if( phase == 1 && option_onkeypress )
            {
                var rv = option_onkeypress( code, character?String(String):String.fromCharCode(code), e.shiftKey||false, e.altKey||false, e.ctrlKey||false, e.metaKey||false );
                if( rv === false ) // dismiss key
                    return cancelEvent( e );
            }
            // Keys can change the selection
            if( phase == 2 || phase == 3 )
            {
                popup_saved_selection = null;
                if( debounced_handleSelection )
                    debounced_handleSelection( null, null, false );
            }
            // Most keys can cause changes
            if( phase == 2 && debounced_changeHandler )
            {
                switch( code )
                {
                    case 33: // pageUp
                    case 34: // pageDown
                    case 35: // end
                    case 36: // home
                    case 37: // left
                    case 38: // up
                    case 39: // right
                    case 40: // down
                        // cursors do not
                        break;
                    default:
                        // call change handler
                        debounced_changeHandler();
                        break;
                }
            }
        };
        addEvent( node_wysiwyg, 'keydown', function( e )
        {
            return keyHandler( e, 1 );
        });
        addEvent( node_wysiwyg, 'keypress', function( e )
        {
            return keyHandler( e, 2 );
        });
        addEvent( node_wysiwyg, 'keyup', function( e )
        {
            return keyHandler( e, 3 );
        });

        // Mouse events
        var mouseHandler = function( e, rightclick )
        {
            // http://www.quirksmode.org/js/events_properties.html
            if( !e )
                var e = window.event;
            // mouse position
            var clientX = null,
                clientY = null;
            if( e.clientX && e.clientY )
            {
                clientX = e.clientX;
                clientY = e.clientY;
            }
            else if( e.pageX && e.pageY )
            {
                clientX = e.pageX - window.pageXOffset;
                clientY = e.pageY - window.pageYOffset;
            }
            // mouse button
            if( e.which && e.which == 3 )
                rightclick = true;
            else if( e.button && e.button == 2 )
                rightclick = true;

            // remove event handler
            removeEvent( window_ie8, 'mouseup', mouseHandler );
            // Callback selection
            popup_saved_selection = null;
            if( ! option_hijackcontextmenu && rightclick )
                return ;
            if( debounced_handleSelection )
                debounced_handleSelection( clientX, clientY, rightclick );
        };
        addEvent( node_wysiwyg, 'mousedown', function( e )
        {
            // catch event if 'mouseup' outside 'node_wysiwyg'
            removeEvent( window_ie8, 'mouseup', mouseHandler );
            addEvent( window_ie8, 'mouseup', mouseHandler );
        });
        addEvent( node_wysiwyg, 'mouseup', function( e )
        {
            mouseHandler( e );
            // Trigger change
            if( debounced_changeHandler )
                debounced_changeHandler();
        });
        addEvent( node_wysiwyg, 'dblclick', function( e )
        {
            mouseHandler( e );
        });
        addEvent( node_wysiwyg, 'selectionchange',  function( e )
        {
            mouseHandler( e );
        });
        if( option_hijackcontextmenu )
        {
            addEvent( node_wysiwyg, 'contextmenu', function( e )
            {
                mouseHandler( e, true );
                return cancelEvent( e );
            });
        }


        // exec command
        // https://developer.mozilla.org/en-US/docs/Web/API/document.execCommand
        // http://www.quirksmode.org/dom/execCommand.html
        var execCommand = function( command, param, force_selection )
        {
            // give selection to contenteditable element
            restoreSelection( node_wysiwyg, popup_saved_selection );
            if( ! selectionInside(node_wysiwyg, force_selection) ) // returns 'selection inside editor'
                return false;
            // for webkit, mozilla, opera
            if( window.getSelection )
            {
                // Buggy, call within 'try/catch'
                try {
                    if( document.queryCommandSupported && ! document.queryCommandSupported(command) )
                        return false;
                    return document.execCommand( command, false, param );
                }
                catch( e ) {
                }
            }
            // for IE
            else if( document.selection )
            {
                var sel = document.selection;
                if( sel.type != 'None' )
                {
                    var range = sel.createRange();
                    // Buggy, call within 'try/catch'
                    try {
                        if( ! range.queryCommandEnabled(command) )
                            return false;
                        return range.execCommand( command, false, param );
                    }
                    catch( e ) {
                    }
                }
            }
            return false;
        };

        // Command structure
        var callUpdates = function( selection_destroyed )
        {
            if( debounced_changeHandler )
                debounced_changeHandler();
            // handle saved selection
            if( selection_destroyed )
            {
                collapseSelectionEnd();
                popup_saved_selection = null; // selection destroyed
            }
            else if( popup_saved_selection )
                popup_saved_selection = saveSelection( node_wysiwyg );
        };
        return {
            // properties
            getElement: function()
            {
                return node_wysiwyg;
            },
            getHTML: function()
            {
                return node_wysiwyg.innerHTML;
            },
            setHTML: function( html )
            {
                node_wysiwyg.innerHTML = html;
                callUpdates( true ); // selection destroyed
                return this;
            },
            getSelectedHTML: function()
            {
                restoreSelection( node_wysiwyg, popup_saved_selection );
                if( ! selectionInside(node_wysiwyg) )
                    return null;
                return getSelectionHtml( node_wysiwyg );
            },
            sync: function()
            {
                if( syncTextarea )
                    syncTextarea();
                return this;
            },
            // selection and popup
            collapseSelection: function()
            {
                collapseSelectionEnd();
                popup_saved_selection = null; // selection destroyed
                return this;
            },
            openPopup: function()
            {
                if( ! popup_saved_selection )
                    popup_saved_selection = saveSelection( node_wysiwyg ); // save current selection
                return popupOpen();
            },
            closePopup: function()
            {
                popupClose();
                return this;
            },
            removeFormat: function()
            {
                execCommand( 'removeFormat' );
                execCommand( 'unlink' );
                callUpdates();
                return this;
            },
            bold: function()
            {
                execCommand( 'bold' );
                callUpdates();
                return this;
            },
            italic: function()
            {
                execCommand( 'italic' );
                callUpdates();
                return this;
            },
            underline: function()
            {
                execCommand( 'underline' );
                callUpdates();
                return this;
            },
            strikethrough: function()
            {
                execCommand( 'strikeThrough' );
                callUpdates();
                return this;
            },
            forecolor: function( color )
            {
                execCommand( 'foreColor', color );
                callUpdates();
                return this;
            },
            highlight: function( color )
            {
                // http://stackoverflow.com/questions/2756931/highlight-the-text-of-the-dom-range-element
                if( ! execCommand('hiliteColor',color) ) // some browsers apply 'backColor' to the whole block
                    execCommand( 'backColor', color );
                callUpdates();
                return this;
            },
            fontName: function( name )
            {
                execCommand( 'fontName', name );
                callUpdates();
                return this;
            },
            fontSize: function( size )
            {
                execCommand( 'fontSize', size );
                callUpdates();
                return this;
            },
            subscript: function()
            {
                execCommand( 'subscript' );
                callUpdates();
                return this;
            },
            superscript: function()
            {
                execCommand( 'superscript' );
                callUpdates();
                return this;
            },
            align: function( align )
            {
                if( align == 'left' )
                    execCommand( 'justifyLeft' );
                else if( align == 'center' )
                    execCommand( 'justifyCenter' );
                else if( align == 'right' )
                    execCommand( 'justifyRight' );
                else if( align == 'justify' )
                    execCommand( 'justifyFull' );
                callUpdates();
                return this;
            },
            format: function( tagname )
            {
                execCommand( 'formatBlock', tagname );
                callUpdates();
                return this;
            },
            indent: function( outdent )
            {
                execCommand( outdent ? 'outdent' : 'indent' );
                callUpdates();
                return this;
            },
            insertLink: function( url )
            {
                execCommand( 'createLink', url );
                callUpdates( true ); // selection destroyed
                return this;
            },
            insertImage: function( url )
            {
                execCommand( 'insertImage', url, true );
                callUpdates( true ); // selection destroyed
                return this;
            },
            insertHTML: function( html )
            {
                if( ! execCommand('insertHTML', html, true) )
                {
                    // IE 11 still does not support 'insertHTML'
                    restoreSelection( node_wysiwyg, popup_saved_selection );
                    selectionInside( node_wysiwyg, true );
                    pasteHtmlAtCaret( node_wysiwyg, html );
                }
                callUpdates( true ); // selection destroyed
                return this;
            },
            insertList: function( ordered )
            {
                execCommand( ordered ? 'insertOrderedList' : 'insertUnorderedList' );
                callUpdates();
                return this;
            }
        };
    };
})(window, document, navigator);
;(function(window, document, $, undefined){
    'use strict';

    // http://stackoverflow.com/questions/17242144/javascript-convert-hsb-hsv-color-to-rgb-accurately
    var HSVtoRGB = function( h, s, v )
    {
        var r, g, b, i, f, p, q, t;
        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);
        switch (i % 6)
        {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = t; break;
            case 3: r = p, g = q, b = v; break;
            case 4: r = t, g = p, b = v; break;
            case 5: r = v, g = p, b = q; break;
        }
        var hr = Math.floor(r * 255).toString(16);
        var hg = Math.floor(g * 255).toString(16);
        var hb = Math.floor(b * 255).toString(16);
        return '#' + (hr.length < 2 ? '0' : '') + hr +
                     (hg.length < 2 ? '0' : '') + hg +
                     (hb.length < 2 ? '0' : '') + hb;
    };

    // Create the Editor
    var create_editor = function( $textarea, classes, placeholder, toolbar_position, toolbar_buttons, toolbar_submit, label_selectImage,
                                  placeholder_url, placeholder_embed, max_imagesize, on_imageupload, force_imageupload, video_from_url, on_keypress )
    {
        // Content: Insert link
        var wysiwygeditor_insertLink = function( wysiwygeditor, url )
        {
            if( ! url )
                return wysiwygeditor;
            var selectedhtml = wysiwygeditor.getSelectedHTML();
            if( selectedhtml )
                return wysiwygeditor.insertLink( url );
            var html = '<a href="' + url.replace(/"/,'&quot;') + '">' + url + '</a>';
            return wysiwygeditor.insertHTML( html );
        };
        var content_insertlink = function(wysiwygeditor, $modify_link)
        {
            var $button = toolbar_button( toolbar_submit );
            var $inputurl = $('<input type="text" value="' + ($modify_link ? $modify_link.attr('href') : '') + '" />').addClass('wysiwyg-input')
                                .keypress(function(event){
                                    if( event.which != 10 && event.which != 13 )
                                        return ;
                                    if( $modify_link )
                                    {
                                        $modify_link.attr( 'href', $inputurl.val() );
                                        wysiwygeditor.closePopup().collapseSelection();
                                    }
                                    else
                                    {
                                        // Catch 'NS_ERROR_FAILURE' on Firefox 34
                                        try {
                                            wysiwygeditor_insertLink(wysiwygeditor,$inputurl.val()).closePopup().collapseSelection();
                                        }
                                        catch( e ) {
                                            wysiwygeditor.closePopup();
                                        }
                                    }
                                });
            if( placeholder_url )
                $inputurl.attr( 'placeholder', placeholder_url );
            var $okaybutton = $button.click(function(event){
                                    if( $modify_link )
                                    {
                                        $modify_link.attr( 'href', $inputurl.val() );
                                        wysiwygeditor.closePopup().collapseSelection();
                                    }
                                    else
                                        wysiwygeditor_insertLink(wysiwygeditor,$inputurl.val()).closePopup().collapseSelection();
                                    event.stopPropagation();
                                    event.preventDefault();
                                    return false;
                                });
            var $content = $('<div/>').addClass('wysiwyg-toolbar-form')
                                      .attr('unselectable','on');
            $content.append($inputurl).append($okaybutton);
            return $content;
        };

        // Content: Insert image
        var content_insertimage = function(wysiwygeditor)
        {
            // Add image to editor
            var insert_image_wysiwyg = function( url, filename )
            {
                var html = '<img id="wysiwyg-insert-image" src="" alt=""' + (filename ? ' title="'+filename.replace(/"/,'&quot;')+'"' : '') + ' />';
                wysiwygeditor.insertHTML( html ).closePopup().collapseSelection();
                var $image = $('#wysiwyg-insert-image').removeAttr('id');
                if( max_imagesize )
                {
                    $image.css({maxWidth: max_imagesize[0]+'px',
                                maxHeight: max_imagesize[1]+'px'})
                          .load( function() {
                                $image.css({maxWidth: '',
                                            maxHeight: ''});
                                // Resize $image to fit "clip-image"
                                var image_width = $image.width(),
                                    image_height = $image.height();
                                if( image_width > max_imagesize[0] || image_height > max_imagesize[1] )
                                {
                                    if( (image_width/image_height) > (max_imagesize[0]/max_imagesize[1]) )
                                    {
                                        image_height = parseInt(image_height / image_width * max_imagesize[0]);
                                        image_width = max_imagesize[0];
                                    }
                                    else
                                    {
                                        image_width = parseInt(image_width / image_height * max_imagesize[1]);
                                        image_height = max_imagesize[1];
                                    }
                                    $image.attr('width',image_width)
                                          .attr('height',image_height);
                                }
                            });
                }
                $image.attr('src', url);
            };
            // Create popup
            var $content = $('<div/>').addClass('wysiwyg-toolbar-form')
                                      .attr('unselectable','on');
            // Add image via 'Browse...'
            var $fileuploader = null,
                $fileuploader_input = $('<input type="file" />')
                                        .css({position: 'absolute',
                                              left: 0,
                                              top: 0,
                                              width: '100%',
                                              height: '100%',
                                              opacity: 0,
                                              cursor: 'pointer'});
            if( ! force_imageupload && window.File && window.FileReader && window.FileList )
            {
                // File-API
                var loadImageFromFile = function( file )
                {
                    // Only process image files
                    if( ! file.type.match('image.*') )
                        return;
                    var reader = new FileReader();
                    reader.onload = function(event) {
                        var dataurl = event.target.result;
                        insert_image_wysiwyg( dataurl, file.name );
                    };
                    // Read in the image file as a data URL
                    reader.readAsDataURL( file );
                };
                $fileuploader = $fileuploader_input
                                    .attr('draggable','true')
                                    .change(function(event){
                                        var files = event.target.files; // FileList object
                                        for(var i=0; i < files.length; ++i)
                                            loadImageFromFile( files[i] );
                                    })
                                    .on('dragover',function(event){
                                        event.originalEvent.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
                                        event.stopPropagation();
                                        event.preventDefault();
                                        return false;
                                    })
                                    .on('drop', function(event){
                                        var files = event.originalEvent.dataTransfer.files; // FileList object.
                                        for(var i=0; i < files.length; ++i)
                                            loadImageFromFile( files[i] );
                                        event.stopPropagation();
                                        event.preventDefault();
                                        return false;
                                    });
            }
            else if( on_imageupload )
            {
                // Upload image to a server
                var $input = $fileuploader_input
                                    .change(function(event){
                                        on_imageupload.call( this, insert_image_wysiwyg );
                                    });
                $fileuploader = $('<form/>').append($input);
            }
            if( $fileuploader )
                $('<div/>').addClass( 'wysiwyg-browse' )
                           .html( label_selectImage )
                           .append( $fileuploader )
                           .appendTo( $content );
            // Add image via 'URL'
            var $button = toolbar_button( toolbar_submit );
            var $inputurl = $('<input type="text" value="" />').addClass('wysiwyg-input')
                                .keypress(function(event){
                                    if( event.which == 10 || event.which == 13 )
                                        insert_image_wysiwyg( $inputurl.val() );
                                });
            if( placeholder_url )
                $inputurl.attr( 'placeholder', placeholder_url );
            var $okaybutton = $button.click(function(event){
                                    insert_image_wysiwyg( $inputurl.val() );
                                    event.stopPropagation();
                                    event.preventDefault();
                                    return false;
                                });
            $content.append( $('<div/>').append($inputurl).append($okaybutton) );
            return $content;
        };

        // Content: Insert video
        var content_insertvideo = function(wysiwygeditor)
        {
            // Add video to editor
            var insert_video_wysiwyg = function( url, html )
            {
                url = $.trim(url||'');
                html = $.trim(html||'');
                var website_url = false;
                if( url.length && ! html.length )
                    website_url = url;
                else if( html.indexOf('<') == -1 && html.indexOf('>') == -1 && 
                         html.match(/^(?:https?:\/)?\/?(?:[^:\/\s]+)(?:(?:\/\w+)*\/)(?:[\w\-\.]+[^#?\s]+)(?:.*)?(?:#[\w\-]+)?$/) )
                    website_url = html;
                if( website_url && video_from_url )
                    html = video_from_url( website_url ) || '';
                if( ! html.length && website_url )
                    html = '<video src="' + website_url.replace(/"/,'&quot;') + '" />';
                wysiwygeditor.insertHTML( html ).closePopup().collapseSelection();
            };
            // Create popup
            var $content = $('<div/>').addClass('wysiwyg-toolbar-form')
                                      .attr('unselectable','on');
            // Add video via '<embed/>'
            var $textareaembed = $('<textarea>').addClass('wysiwyg-input wysiwyg-inputtextarea');
            if( placeholder_embed )
                $textareaembed.attr( 'placeholder', placeholder_embed );
            $('<div/>').addClass( 'wysiwyg-embedcode' )
                       .append( $textareaembed )
                       .appendTo( $content );
            // Add video via 'URL'
            var $button = toolbar_button( toolbar_submit );
            var $inputurl = $('<input type="text" value="" />').addClass('wysiwyg-input')
                                .keypress(function(event){
                                    if( event.which == 10 || event.which == 13 )
                                        insert_video_wysiwyg( $inputurl.val() );
                                });
            if( placeholder_url )
                $inputurl.attr( 'placeholder', placeholder_url );
            var $okaybutton = $button.click(function(event){
                                    insert_video_wysiwyg( $inputurl.val(), $textareaembed.val() );
                                    event.stopPropagation();
                                    event.preventDefault();
                                    return false;
                                });
            $content.append( $('<div/>').append($inputurl).append($okaybutton) );
            return $content;
        };

        // Content: Color palette
        var content_colorpalette = function( wysiwygeditor, forecolor )
        {
            var $content = $('<table/>')
                            .attr('cellpadding','0')
                            .attr('cellspacing','0')
                            .attr('unselectable','on');
            for( var row=1; row < 15; ++row ) // should be '16' - but last line looks so dark
            {
                var $rows = $('<tr/>');
                for( var col=0; col < 25; ++col ) // last column is grayscale
                {
                    var color;
                    if( col == 24 )
                    {
                        var gray = Math.floor(255 / 13 * (14 - row)).toString(16);
                        var hexg = (gray.length < 2 ? '0' : '') + gray;
                        color = '#' + hexg + hexg + hexg;
                    }
                    else
                    {
                        var hue        = col / 24;
                        var saturation = row <= 8 ? row     /8 : 1;
                        var value      = row  > 8 ? (16-row)/8 : 1;
                        color = HSVtoRGB( hue, saturation, value );
                    }
                    $('<td/>').addClass('wysiwyg-toolbar-color')
                              .attr('title', color)
                              .attr('unselectable','on')
                              .css({backgroundColor: color})
                              .click(function(){
                                  var color = this.title;
                                  if( forecolor )
                                      wysiwygeditor.forecolor( color ).closePopup().collapseSelection();
                                  else
                                      wysiwygeditor.highlight( color ).closePopup().collapseSelection();
                                  return false;
                              })
                              .appendTo( $rows );
                }
                $content.append( $rows );
            }
            return $content;
        };

        // Handlers
        var get_toolbar_handler = function( name, popup_callback )
        {
            switch( name )
            {
                case 'insertimage':
                    if( ! popup_callback )
                        return null;
                    return function( target ) {
                        popup_callback( content_insertimage(wysiwygeditor), target );
                    };
                case 'insertvideo':
                    if( ! popup_callback )
                        return null;
                    return function( target ) {
                        popup_callback( content_insertvideo(wysiwygeditor), target );
                    };
                case 'insertlink':
                    if( ! popup_callback )
                        return null;
                    return function( target ) {
                        popup_callback( content_insertlink(wysiwygeditor), target );
                    };
                case 'bold':
                    return function() {
                        wysiwygeditor.bold(); // .closePopup().collapseSelection()
                    };
                case 'italic':
                    return function() {
                        wysiwygeditor.italic(); // .closePopup().collapseSelection()
                    };
                case 'underline':
                    return function() {
                        wysiwygeditor.underline(); // .closePopup().collapseSelection()
                    };
                case 'strikethrough':
                    return function() {
                        wysiwygeditor.strikethrough(); // .closePopup().collapseSelection()
                    };
                case 'forecolor':
                    if( ! popup_callback )
                        return null;
                    return function( target ) {
                        popup_callback( content_colorpalette(wysiwygeditor,true), target );
                    };
                case 'highlight':
                    if( ! popup_callback )
                        return null;
                    return function( target ) {
                        popup_callback( content_colorpalette(wysiwygeditor,false), target );
                    };
                case 'alignleft':
                    return function() {
                        wysiwygeditor.align('left'); // .closePopup().collapseSelection()
                    };
                case 'aligncenter':
                    return function() {
                        wysiwygeditor.align('center'); // .closePopup().collapseSelection()
                    };
                case 'alignright':
                    return function() {
                        wysiwygeditor.align('right'); // .closePopup().collapseSelection()
                    };
                case 'alignjustify':
                    return function() {
                        wysiwygeditor.align('justify'); // .closePopup().collapseSelection()
                    };
                case 'subscript':
                    return function() {
                        wysiwygeditor.subscript(); // .closePopup().collapseSelection()
                    };
                case 'superscript':
                    return function() {
                        wysiwygeditor.superscript(); // .closePopup().collapseSelection()
                    };
                case 'indent':
                    return function() {
                        wysiwygeditor.indent(); // .closePopup().collapseSelection()
                    };
                case 'outdent':
                    return function() {
                        wysiwygeditor.indent(true); // .closePopup().collapseSelection()
                    };
                case 'orderedList':
                    return function() {
                        wysiwygeditor.insertList(true); // .closePopup().collapseSelection()
                    };
                case 'unorderedList':
                    return function() {
                        wysiwygeditor.insertList(); // .closePopup().collapseSelection()
                    };
                case 'removeformat':
                    return function() {
                        wysiwygeditor.removeFormat().closePopup().collapseSelection();
                    };
            }
            return null;
        }

        // Create the toolbar
        var toolbar_button = function( button ) {
            return $('<a/>').addClass( 'wysiwyg-toolbar-icon' )
                            .attr('href','#')
                            .attr('title', button.title)
                            .attr('unselectable','on')
                            .append(button.image);
        };
        var add_buttons_to_toolbar = function( $toolbar, selection, popup_open_callback, popup_position_callback )
        {
            $.each( toolbar_buttons, function(key, value) {
                if( ! value )
                    return ;
                // Skip buttons on the toolbar
                if( selection === false && 'showstatic' in value && ! value.showstatic )
                    return ;
                // Skip buttons on selection
                if( selection === true && 'showselection' in value && ! value.showselection )
                    return ;
                // Click handler
                var toolbar_handler;
                if( 'click' in value )
                    toolbar_handler = function( target ) {
                        value.click( $(target) );
                    };
                else if( 'popup' in value )
                    toolbar_handler = function( target ) {
                        var $popup = popup_open_callback();
                        var overwrite_offset = value.popup( $popup, $(target) );
                        popup_position_callback( $popup, target, overwrite_offset );
                    };
                else
                    toolbar_handler = get_toolbar_handler( key, function( $content, target ) {
                        var $popup = popup_open_callback();
                        $popup.append( $content );
                        popup_position_callback( $popup, target );
                        $popup.find('input[type=text]:first').focus();
                    });
                // Create the toolbar button
                var $button;
                if( toolbar_handler )
                    $button = toolbar_button( value ).click( function(event) {
                        toolbar_handler( event.currentTarget );
                        // Give the focus back to the editor. Technically not necessary
                        if( get_toolbar_handler(key) ) // only if not a popup-handler
                            wysiwygeditor.getElement().focus();
                        event.stopPropagation();
                        event.preventDefault();
                        return false;
                    });
                else if( value.html )
                    $button = $(value.html);
                if( $button )
                    $toolbar.append( $button );
            });
        };
        var popup_position = function( $popup, $container, left, top )  // left+top relative to $container
        {
            // Test parents
            var offsetparent = $container.get(0).offsetParent,
                offsetparent_offset = { left: 0, top: 0 },  //$.offset() does not work with Safari 3 and 'position:fixed'
                offsetparent_fixed = false,
                offsetparent_overflow = false,
                popup_width = $popup.width(),
                node = offsetparent;
            while( node )
            {
                offsetparent_offset.left += node.offsetLeft;
                offsetparent_offset.top += node.offsetTop;
                var $node = $(node);
                if( $node.css('position') == 'fixed' )
                    offsetparent_fixed = true;
                if( $node.css('overflow') != 'visible' )
                    offsetparent_overflow = true;
                node = node.offsetParent;
            }
            // Move $popup as high as possible in the DOM tree: offsetParent of $container
            var $offsetparent = $(offsetparent || document.body);
            $offsetparent.append( $popup );
            var offset = $container.position();
            left += offset.left;
            top += offset.top;
            // Trim to offset-parent
            if( offsetparent_fixed || offsetparent_overflow )
            {
                if( left + popup_width > $offsetparent.width() - 1 )
                    left = $offsetparent.width() - popup_width - 1;
                if( left < 1 )
                    left = 1;
            }
            // Trim to viewport
            var viewport_width = $(window).width();
            if( offsetparent_offset.left + left + popup_width > viewport_width - 1 )
                left = viewport_width - offsetparent_offset.left - popup_width - 1;
            var scroll_left = offsetparent_fixed ? 0 : $(window).scrollLeft();
            if( offsetparent_offset.left + left < scroll_left + 1 )
                left = scroll_left - offsetparent_offset.left + 1;
            // Set offset
            $popup.css({ left: parseInt(left) + 'px',
                         top: parseInt(top) + 'px' });
        };


        // Transform the textarea to contenteditable
        var hotkeys = {};
        var create_wysiwyg = function( $textarea, $container, placeholder )
        {
            var option = {
                element: $textarea.get(0),
                onkeypress: function( code, character, shiftKey, altKey, ctrlKey, metaKey )
                    {
                        // Ask master
                        if( on_keypress && on_keypress(code, character, shiftKey, altKey, ctrlKey, metaKey) === false )
                            return false; // swallow key
                        // Exec hotkey
                        if( character && !shiftKey && !altKey && ctrlKey && !metaKey )
                        {
                            var hotkey = character.toLowerCase();
                            if( ! hotkeys[hotkey] )
                                return ;
                            hotkeys[hotkey]();
                            return false; // prevent default
                        }
                    },
                onselection: function( collapsed, rect, nodes, rightclick )
                    {
                        var show_popup = true,
                            $special_popup = null;
                        // Fix type error - https://github.com/wysiwygjs/wysiwyg.js/issues/4
                        if( ! rect )
                            show_popup = false;
                        // Click on a link opens the link-popup
                        else if( nodes.length == 1 && $(nodes[0]).parents('a').length != 0 ) // nodes is not a sparse array
                            $special_popup = content_insertlink( wysiwygeditor, $(nodes[0]).parents('a:first') );
                        // A right-click always opens the popup
                        else if( rightclick )
                            ;
                        // No selection-popup wanted?
                        else if( toolbar_position != 'selection' && toolbar_position != 'top-selection' && toolbar_position != 'bottom-selection' )
                            show_popup = false;
                        // Selected popup wanted, but nothing selected (=selection collapsed)
                        else if( collapsed )
                            show_popup = false;
                        // Only one image? Better: Display a special image-popup
                        else if( nodes.length == 1 && nodes[0].nodeName == 'IMG' ) // nodes is not a sparse array
                            show_popup = false;
                        if( ! show_popup )
                        {
                            wysiwygeditor.closePopup();
                            return ;
                        }
                        // Popup position
                        var $popup;
                        var apply_popup_position = function()
                        {
                            var popup_width = $popup.outerWidth();
                            // Point is the center of the selection - relative to $container not the element
                            var container_offset = $container.offset(),
                                editor_offset = $(wysiwygeditor.getElement()).offset();
                            var left = rect.left + parseInt(rect.width / 2) - parseInt(popup_width / 2) + editor_offset.left - container_offset.left;
                            var top = rect.top + rect.height + editor_offset.top - container_offset.top;
                            popup_position( $popup, $container, left, top );
                        };
                        // Open popup
                        $popup = $(wysiwygeditor.openPopup());
                        // if wrong popup -> create a new one
                        if( $popup.hasClass('wysiwyg-popup') && ! $popup.hasClass('wysiwyg-popuphover') )
                            $popup = $(wysiwygeditor.closePopup().openPopup());
                        if( ! $popup.hasClass('wysiwyg-popup') )
                        {
                            // add classes + buttons
                            $popup.addClass( 'wysiwyg-popup wysiwyg-popuphover' );
                            if( $special_popup )
                                $popup.empty().append( $special_popup );
                            else
                                add_buttons_to_toolbar( $popup, true,
                                    function() {
                                        return $popup.empty();
                                    },
                                    apply_popup_position );
                        }
                        // Apply position
                        apply_popup_position();
                    },
                hijackcontextmenu: (toolbar_position == 'selection')
            };
            if( placeholder )
            {
                var $placeholder = $('<div/>').addClass( 'wysiwyg-placeholder' )
                                              .html( placeholder )
                                              .hide();
                $container.prepend( $placeholder );
                option.onplaceholder = function( visible ) {
                    if( visible )
                        $placeholder.show();
                    else
                        $placeholder.hide();
                };
            }

            var wysiwygeditor = wysiwyg( option );
            return wysiwygeditor;
        }


        // Create a container
        var $container = $('<div/>').addClass('wysiwyg-container');
        if( classes )
            $container.addClass( classes );
        $textarea.wrap( $container );
        $container = $textarea.parent( '.wysiwyg-container' );

        // Create the editor-wrapper if placeholder
        var $wrapper = false;
        if( placeholder )
        {
            $wrapper = $('<div/>').addClass('wysiwyg-wrapper')
                                  .click(function(){     // Clicking the placeholder focus editor - fixes IE6-IE8
                                     wysiwygeditor.getElement().focus();
                                  });
            $textarea.wrap( $wrapper );
            $wrapper = $textarea.parent( '.wysiwyg-wrapper' );
        }

        // Create the WYSIWYG Editor
        var wysiwygeditor = create_wysiwyg( $textarea, placeholder ? $wrapper : $container, placeholder );
        if( wysiwygeditor.legacy )
        {
            var $textarea = $(wysiwygeditor.getElement());
            $textarea.addClass( 'wysiwyg-textarea' );
            if( $textarea.is(':visible') ) // inside the DOM
                $textarea.width( $container.width() - ($textarea.outerWidth() - $textarea.width()) );
        }
        else
            $(wysiwygeditor.getElement()).addClass( 'wysiwyg-editor' );

        // Hotkey+Commands-List
        var commands = {};
        $.each( toolbar_buttons, function(key, value) {
            if( ! value || ! value.hotkey )
                return ;
            var toolbar_handler = get_toolbar_handler( key );
            if( ! toolbar_handler )
                return ;
            hotkeys[value.hotkey.toLowerCase()] = toolbar_handler;
            commands[key] = toolbar_handler;
        });

        // Toolbar on top or bottom
        if( toolbar_position != 'selection' )
        {
            var toolbar_top = toolbar_position == 'top' || toolbar_position == 'top-selection';
            var $toolbar = $('<div/>').addClass( 'wysiwyg-toolbar' ).addClass( toolbar_top ? 'wysiwyg-toolbar-top' : 'wysiwyg-toolbar-bottom' );
            add_buttons_to_toolbar( $toolbar, false,
                function() {
                    // Open a popup from the toolbar
                    var $popup = $(wysiwygeditor.openPopup());
                    // if wrong popup -> create a new one
                    if( $popup.hasClass('wysiwyg-popup') && $popup.hasClass('wysiwyg-popuphover') )
                        $popup = $(wysiwygeditor.closePopup().openPopup());
                    if( ! $popup.hasClass('wysiwyg-popup') )
                        // add classes + content
                        $popup.addClass( 'wysiwyg-popup' );
                    return $popup;
                },
                function( $popup, target, overwrite_offset ) {
                    // Popup position
                    var $button = $(target);
                    var popup_width = $popup.outerWidth();
                    // Point is the top/bottom-center of the button
                    var left = $button.offset().left - $container.offset().left + parseInt($button.width() / 2) - parseInt(popup_width / 2);
                    var top = $button.offset().top - $container.offset().top;
                    if( toolbar_top )
                        top += $button.outerHeight();
                    else
                        top -= $popup.outerHeight();
                    if( overwrite_offset )
                    {
                        left = overwrite_offset.left;
                        top = overwrite_offset.top;
                    }
                    popup_position( $popup, $container, left, top );
                });
            if( toolbar_top )
                $container.prepend( $toolbar );
            else
                $container.append( $toolbar );
        }

        // Export userdata
        return {
            wysiwygeditor: wysiwygeditor,
            $container: $container
        };
    };

    // jQuery Interface
    $.fn.wysiwyg = function( option, param )
    {
        if( ! option || typeof(option) === 'object' )
        {
            option = $.extend( {}, option );
            return this.each(function() {
                var $that = $(this);
                // Already an editor
                if( $that.data( 'wysiwyg') )
                    return ;

                // Two modes: toolbar on top and on bottom
                var classes = option.classes,
                    placeholder = option.placeholder || $that.attr('placeholder'),
                    toolbar_position = (option.toolbar && (option.toolbar == 'top' || option.toolbar == 'top-selection' || option.toolbar == 'bottom' || option.toolbar == 'bottom-selection' || option.toolbar == 'selection')) ? option.toolbar : 'top-selection',
                    toolbar_buttons = option.buttons,
                    toolbar_submit = option.submit,
                    label_selectImage = option.selectImage,
                    placeholder_url = option.placeholderUrl || null,
                    placeholder_embed = option.placeholderEmbed || null,
                    max_imagesize = option.maxImageSize || null,
                    on_imageupload = option.onImageUpload || null,
                    force_imageupload = option.forceImageUpload && on_imageupload,
                    video_from_url = option.videoFromUrl || null,
                    on_keypress = option.onKeyPress;

                // Create the WYSIWYG Editor
                var data = create_editor( $that, classes, placeholder, toolbar_position, toolbar_buttons, toolbar_submit, label_selectImage,
                                          placeholder_url, placeholder_embed, max_imagesize, on_imageupload, force_imageupload, video_from_url, on_keypress );
                $that.data( 'wysiwyg', data );
            });
        }
        else if( this.length == 1 )
        {
            var data = this.data('wysiwyg');
            if( ! data )
                return this;
            if( option == 'container' )
                return data.$container;
            if( option == 'shell' )
                return data.wysiwygeditor;
        }
        return this;
    };
})(window, document, jQuery);
;
/**
 * function to search a string and return first link found
 * @param str
 * @return string
 */
function searchTextForLink(str) {
    pattern = /(^|[\s\n]|<br\/?>)((?:https?|ftp):\/\/[\-A-Z0-9+\u0026\u2019@#\/%?=()~_|!:,.;]*[\-A-Z0-9+\u0026@#\/%=~()_|])/gi;
    pattern = /(^|\s)((https?:\/\/|www\.)[\w-]+(\.[\w-]{2,})+\.?(:\d+)?(\/\S*)?)/gi;
    //pattern = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    pattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;

    //test for links without http|s://
    matches = pattern.exec(str);
    if (matches && matches[2]) return matches[2];
    return '';
}

function autoResizeTextarea()
{
    $('body').on('keyup', 'textarea', function(){
        var minH = $(this).data('height');
        if ($(this).data('off') != undefined) return false;
        if (minH != undefined) {
            $(this).height(minH);
        } else {
            $(this).height(0);
        }
        $(this).height(this.scrollHeight);
    });
}

function toggleFadeCover(t) {

    if (t == 'remove') {
        $('.fade-cover').delay(350).fadeOut('slow');
    } else {
        $('.fade-cover').fadeIn();
    }
}



/**
     * Assign of functions that need to be call after ajax process
     */
    function reloadPlugins(update) {

        //assign
        $('.post-time span').timeago();

        /**$('.post-textarea').autoresize({

        });**/
        element = $('.editor');
        $('.editor').wysiwyg({
            classes: 'some-more-classes',
            // 'selection'|'top'|'top-selection'|'bottom'|'bottom-selection'
            toolbar:'top-selection',
            buttons: {
                // Smiley plugin
                smilies: {
                    title: 'Smilies',
                    image: '\uf118', // <img src="path/to/image.png" width="16" height="16" alt="" />
                    popup: function( $popup, $button ) {
                        var list_smilies = emoticons;
                        var $smilies = $('<div/>').addClass('wysiwyg-toolbar-smilies')
                            .attr('unselectable','on');
                        $.each( list_smilies, function(index,smiley){
                            if( index != 0 )
                                $smilies.append(' ');
                            var $image = $(smiley).attr('unselectable','on');
                            // Append smiley
                            var imagehtml = ' '+$('<div/>').append($image.clone()).html()+' ';
                            $image
                                .css({ cursor: 'pointer' })
                                .click(function(event){
                                    $(element).wysiwyg('shell').insertHTML(imagehtml); // .closePopup(); - do not close the popup
                                })
                                .appendTo( $smilies );
                        });
                        var $container = $(element).wysiwyg('container');
                        $smilies.css({ maxWidth: parseInt($container.width()*0.95)+'px' });
                        $popup.append( $smilies );
                        // Smilies do not close on click, so force the popup-position to cover the toolbar
                        var $toolbar = $button.parents( '.wysiwyg-toolbar' );
                        if( ! $toolbar.length ) // selection toolbar?
                            return ;
                        return { // this prevents applying default position
                            left: parseInt( ($toolbar.outerWidth() - $popup.outerWidth()) / 2 ),
                            top: $toolbar.hasClass('wysiwyg-toolbar-bottom') ? ($container.outerHeight() - parseInt($button.outerHeight()/4)) : (parseInt($button.outerHeight()/4) - $popup.height())
                        };
                    },
                    //showstatic: true,    // wanted on the toolbar
                    showselection: true    // wanted on selection
                },
                insertimage: {
                    title: 'Insert image',
                    image: '\uf030', // <img src="path/to/image.png" width="16" height="16" alt="" />
                    showstatic: true    // wanted on the toolbar
                    //showselection:  false    // wanted on selection
                },

                insertlink: {
                    title: 'Insert link',
                    image: '\uf08e' // <img src="path/to/image.png" width="16" height="16" alt="" />
                },
                insertvideo: {
                    title: 'Insert video',
                    image: '\uf03d', // <img src="path/to/image.png" width="16" height="16" alt="" />
                    //showstatic: true,    // wanted on the toolbar
                    showselection: true    // wanted on selection
                },
                // Fontname plugin
                fontname: {
                    title: 'Font',
                    image: '\uf031', // <img src="path/to/image.png" width="16" height="16" alt="" />
                    popup: function( $popup, $button ) {
                        var list_fontnames = {
                            // Name : Font
                            'Arial, Helvetica' : 'Arial,Helvetica',
                            'Verdana'          : 'Verdana,Geneva',
                            'Georgia'          : 'Georgia',
                            'Courier New'      : 'Courier New,Courier',
                            'Times New Roman'  : 'Times New Roman,Times'
                        };
                        var $list = $('<div/>').addClass('wysiwyg-toolbar-list')
                            .attr('unselectable','on');
                        $.each( list_fontnames, function( name, font ){
                            var $link = $('<a style="display: block"/>').attr('href','#')
                                .css( 'font-family', font )
                                .html( name )
                                .click(function(event){
                                    $(element).wysiwyg('shell').fontName(font).closePopup();
                                    // prevent link-href-#
                                    event.stopPropagation();
                                    event.preventDefault();
                                    return false;
                                });
                            $list.append( $link );
                        });
                        $popup.append( $list );
                    },
                    //showstatic: true,    // wanted on the toolbar
                    showselection: true   // wanted on selection
                },
                // Fontsize plugin
                fontsize: {
                    title: 'Size',
                    image: '\uf034', // <img src="path/to/image.png" width="16" height="16" alt="" />
                    popup: function( $popup, $button ) {
                        // Hack: http://stackoverflow.com/questions/5868295/document-execcommand-fontsize-in-pixels/5870603#5870603
                        var list_fontsizes = [];
                        for( var i=8; i <= 11; ++i )
                            list_fontsizes.push(i+'px');
                        for( var i=12; i <= 28; i+=2 )
                            list_fontsizes.push(i+'px');
                        list_fontsizes.push('36px');
                        list_fontsizes.push('48px');
                        list_fontsizes.push('72px');
                        var $list = $('<div/>').addClass('wysiwyg-toolbar-list')
                            .attr('unselectable','on');
                        $.each( list_fontsizes, function( index, size ){
                            var $link = $('<a style="display: block"/>').attr('href','#')
                                .html( size )
                                .click(function(event){
                                    $(element).wysiwyg('shell').fontSize(7).closePopup();
                                    $(element).wysiwyg('container')
                                        .find('font[size=7]')
                                        .removeAttr("size")
                                        .css("font-size", size);
                                    // prevent link-href-#
                                    event.stopPropagation();
                                    event.preventDefault();
                                    return false;
                                });
                            $list.append( $link );
                        });
                        $popup.append( $list );
                    }
                    //showstatic: true,    // wanted on the toolbar
                    //showselection: true    // wanted on selection
                },
                // Header plugin
                header: {
                    title: 'Header',
                    image: '\uf1dc', // <img src="path/to/image.png" width="16" height="16" alt="" />
                    popup: function( $popup, $button ) {
                        var list_headers = {
                            // Name : Font
                            'Header 1' : '<h1>',
                            'Header 2' : '<h2>',
                            'Header 3' : '<h3>',
                            'Header 4' : '<h4>',
                            'Header 5' : '<h5>',
                            'Header 6' : '<h6>',
                            'Code'     : '<pre>'
                        };
                        var $list = $('<div/>').addClass('wysiwyg-toolbar-list')
                            .attr('unselectable','on');
                        $.each( list_headers, function( name, format ){
                            var $link = $('<a style="display: block"/>').attr('href','#')
                                .css( 'font-family', format )
                                .html( name )
                                .click(function(event){
                                    $(element).wysiwyg('shell').format(format).closePopup();
                                    // prevent link-href-#
                                    event.stopPropagation();
                                    event.preventDefault();
                                    return false;
                                });
                            $list.append( $link );
                        });
                        $popup.append( $list );
                    }
                    //showstatic: true,    // wanted on the toolbar
                    //showselection: false    // wanted on selection
                },
                bold: {
                    title: 'Bold (Ctrl+B)',
                    image: '\uf032', // <img src="path/to/image.png" width="16" height="16" alt="" />
                    hotkey: 'b'
                },
                italic: {
                    title: 'Italic (Ctrl+I)',
                    image: '\uf033', // <img src="path/to/image.png" width="16" height="16" alt="" />
                    hotkey: 'i'
                },
                underline: {
                    title: 'Underline (Ctrl+U)',
                    image: '\uf0cd', // <img src="path/to/image.png" width="16" height="16" alt="" />
                    hotkey: 'u'
                },
                strikethrough: {
                    title: 'Strikethrough (Ctrl+S)',
                    image: '\uf0cc', // <img src="path/to/image.png" width="16" height="16" alt="" />
                    hotkey: 's'
                },
                forecolor: {
                    title: 'Text color',
                    image: '\uf1fc' // <img src="path/to/image.png" width="16" height="16" alt="" />
                },
                highlight: {
                    title: 'Background color',
                    image: '\uf043' // <img src="path/to/image.png" width="16" height="16" alt="" />
                },
                alignleft:  {
                    title: 'Left',
                    image: '\uf036', // <img src="path/to/image.png" width="16" height="16" alt="" />
                    //showstatic: true,    // wanted on the toolbar
                    showselection: false    // wanted on selection
                },
                aligncenter:  {
                    title: 'Center',
                    image: '\uf037', // <img src="path/to/image.png" width="16" height="16" alt="" />
                    //showstatic: true,    // wanted on the toolbar
                    showselection: false    // wanted on selection
                },
                alignright: {
                    title: 'Right',
                    image: '\uf038', // <img src="path/to/image.png" width="16" height="16" alt="" />
                    //showstatic: true,    // wanted on the toolbar
                    showselection: false    // wanted on selection
                },
                alignjustify:  {
                    title: 'Justify',
                    image: '\uf039', // <img src="path/to/image.png" width="16" height="16" alt="" />
                    //showstatic: true,    // wanted on the toolbar
                    showselection: false    // wanted on selection
                },
                subscript:  {
                    title: 'Subscript',
                    image: '\uf12c', // <img src="path/to/image.png" width="16" height="16" alt="" />
                    //showstatic: true,    // wanted on the toolbar
                    showselection: true    // wanted on selection
                },
                superscript: {
                    title: 'Superscript',
                    image: '\uf12b', // <img src="path/to/image.png" width="16" height="16" alt="" />
                    //showstatic: true,    // wanted on the toolbar
                    showselection: true    // wanted on selection
                },
                indent:{
                    title: 'Indent',
                    image: '\uf03c', // <img src="path/to/image.png" width="16" height="16" alt="" />
                    //showstatic: true,    // wanted on the toolbar
                    showselection: false    // wanted on selection
                },
                outdent:{
                    title: 'Outdent',
                    image: '\uf03b', // <img src="path/to/image.png" width="16" height="16" alt="" />
                    //showstatic: true,    // wanted on the toolbar
                    showselection: false    // wanted on selection
                },
                orderedList: {
                    title: 'Ordered list',
                    image: '\uf0cb', // <img src="path/to/image.png" width="16" height="16" alt="" />
                    //showstatic: true,    // wanted on the toolbar
                    showselection: false    // wanted on selection
                },
                unorderedList: {
                    title: 'Unordered list',
                    image: '\uf0ca', // <img src="path/to/image.png" width="16" height="16" alt="" />
                    //showstatic: true,    // wanted on the toolbar
                    showselection: false    // wanted on selection
                },
                removeformat: {
                    title: 'Remove format',
                    image: '\uf12d' // <img src="path/to/image.png" width="16" height="16" alt="" />
                }
            },
            // Submit-Button
            submit: {
                title: 'Submit',
                image: '\uf00c' // <img src="path/to/image.png" width="16" height="16" alt="" />
            },
            // Other properties
            placeholderUrl: 'www.example.com',
            placeholderEmbed: '<embed/>',
            maxImageSize: [600,200],

            forceImageUpload: false,    // upload images even if File-API is present
            videoFromUrl: function( url ) {
                // Contributions are welcome :-)

                // youtube - http://stackoverflow.com/questions/3392993/php-regex-to-get-youtube-video-id
                var youtube_match = url.match( /^(?:http(?:s)?:\/\/)?(?:[a-z0-9.]+\.)?(?:youtu\.be|youtube\.com)\/(?:(?:watch)?\?(?:.*&)?v(?:i)?=|(?:embed|v|vi|user)\/)([^\?&\"'>]+)/ );
                if( youtube_match && youtube_match[1].length == 11 )
                    return '<iframe src="//www.youtube.com/embed/' + youtube_match[1] + '" width="640" height="360" frameborder="0" allowfullscreen></iframe>';

                // vimeo - http://embedresponsively.com/
                var vimeo_match = url.match( /^(?:http(?:s)?:\/\/)?(?:[a-z0-9.]+\.)?vimeo\.com\/([0-9]+)$/ );
                if( vimeo_match )
                    return '<iframe src="//player.vimeo.com/video/' + vimeo_match[1] + '" width="640" height="360" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';

                // dailymotion - http://embedresponsively.com/
                var dailymotion_match = url.match( /^(?:http(?:s)?:\/\/)?(?:[a-z0-9.]+\.)?dailymotion\.com\/video\/([0-9a-z]+)$/ );
                if( dailymotion_match )
                    return '<iframe src="//www.dailymotion.com/embed/video/' + dailymotion_match[1] + '" width="640" height="360" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';

                // undefined -> create '<video/>' tag
            },
            onKeyPress: function( code, character, shiftKey, altKey, ctrlKey, metaKey ) {
                // E.g.: submit form on enter-key:
                //if( (code == 10 || code == 13) && !shiftKey && !altKey && !ctrlKey && !metaKey ) {
                //    submit_form();
                //    return false; // swallow enter
                //}
            }
        })





        //paginating posts
        $(window).scroll(function() {
            if (document.body.scrollHeight ==
                document.body.scrollTop +
                    window.innerHeight ) {
                if ($('#post-list').length) {

                    paginatePost($('#post-list'));
                };
            }


        });

        if (!update) {
            /**Emoticons process**/

            $('.emoticon-selector').each(function() {

                $(this).qtip({
                    show : {
                        event : 'click'
                    },
                    content : {
                        text : $(this).next().html()
                    },
                    hide : {
                        fixed : true,
                        delay : 500
                    },
                    style : {
                        classes : 'qtip-light emoticons-container'
                    },
                    position : {
                        at : 'bottom center',
                        my : 'top center'
                    }
                })
            });

            /**User popover***/
            $('.user-popover').each(function() {
                var o = $(this);
                $(this).qtip({
                    content : {
                        text : function(e, api) {
                            $.ajax({
                                url : o.data('url'),
                                cache : false
                            })
                                .then(function(content) {
                                    api.set('content.text', content)
                                }, function(xhr, status, error) {
                                    api.set('content.text', status + ': ' + error);
                                })
                            return 'Loading...';
                        }
                    },
                    style : {
                        classes : 'qtip-light user-popover'
                    },
                    hide : {
                        fixed : true
                    }
                })
            });


        }

        //it help initiate back post pagination
        window.stopPaginate = false;



        /**qtip titles**/
        $("[title!='']").qtip({
            position : {
                my : 'top center',
                at : 'bottom center'
            },
            style : {
                classes : 'qtip-dark'
            }
        });



        //post images
        $('.preview-image').colorbox({
            scrolling : false,
            top : '0px',
            width : '80%',
            initialWidth : '80%',
            scalePhotos : false,
            maxHeight : '100%',
            height : '95%',
            fixed : true,
            className : 'photo-viewer',
            onOpen : function() {
                $('#append-content').html('');
                $('body').css('overflow', 'hidden');
            },
            onClosed : function() {
                $('body').css('overflow', 'auto');
            },
            onComplete :  function() {
                //$('#cboxContent').css('height', 'auto')

                var img = $('#cboxLoadedContent').find('img').attr('src');
                $.ajax({
                    url : baseUrl + 'photo/details',
                    data : {photo : img},
                    cache : false,
                    success : function(data) {
                        var c = $('<div id="append-content"></div>');
                        $('#cboxContent').append(c).css('height', 'auto');

                        c.html(data);
                        reloadPlugins();
                    }
                })
            }
        });

        //Load post medias for optimize page load
        $('.load-sound').each(function() {
            var loaded = $(this).data('loaded')

            if (loaded == undefined) {
                $(this).data('loaded', true);
               var c = '<iframe style="max-width:100%;" width="100%" height="120" scrolling="no" frameborder="no" src="'+$(this).data('url')+'"></iframe>';
                $(this).html(c);
           }
        });

        $('.load-video').each(function() {
            var loaded = $(this).data('loaded')

            if (loaded == undefined) {
                $(this).data('loaded', true);
                var c = '<iframe style="width: 100%;max-width:100%;height: 320px" allowfullscreen frameborder="no" src="'+$(this).data('url')+'"></iframe>'
                $(this).html(c);
            }
        });
        
        


        
    }///end of reloadPlugins

    /**paginating post***/
    window.stopPaginate = false;
    function paginatePost(o) {

        if (window.stopPaginate) return false;
        window.stopPaginate = true;
        var type = o.data('type');
        var offset = o.data('offset');
        var userid = o.data('userid');

        $.ajax({
            url : baseUrl + 'post/paginate',
            data : {type : type, offset: offset, userid : userid},
            cache : false,
            success : function(result) {
                result = jQuery.parseJSON(result);
                o.append(result.posts).data('offset', result.offset);

                if (result.posts != '') {
                    window.stopPaginate = false;
                    reloadPlugins();
                    nailImages();
                }
            }
        })
    }

    
    function nailImages()
    {
        jQuery('.post-thumb-image').nailthumb({fitDirection:'top left'});
        //jQuery('.post-thumb-one-image').nailthumb({ proportions : 1 });
    }


$(function() {
    autoResizeTextarea();
    toggleFadeCover('remove');
    bootbox.setDefaults({
        closeButton : false,
        className: "alert-modal"
    })
    nailImages();
    /*$('#sidebar-menu').slimScroll({
        height : '500px'
    });*/

    /**var menu = $.offCanvasMenu({
        direaction : 'left',
        coverage : '250px',
        trigger : '#sidebar-trigger',
        menu : '#sidebar',
        duration : 250
    });



    menu.on();**/



    $('#sidebar').mmenu({

    });
    $('#sidebar-trigger').click(function() {
        $('#sidebar').trigger('open.mm');
    });

    $('#sidebar a').click(function() {
        $('#sidebar').trigger('close.mm');
    })

    //function to text if browser support FormData
    function supportFormData()
    {
        return !! window.FormData;
    }

    


    function scrollMessageBox()
    {
        //scroll message-list-container to bottom on page load or ajax load
        $(".message-list-container").animate({ scrollTop: $('.message-list-container').prop('scrollHeight')}, 1000);

    }
    
    scrollMessageBox();


    function coverPluginLoading()
    {
        /**
         * initialize profile cover
         */

        var cropCover = new Croppic('profile-cover', {
            customUploadButtonId: 'change-profile-cover-button',
            uploadUrl: baseUrl + 'profile/upload/cover',
            cropUrl: baseUrl + 'profile/crop/cover',
            outputUrlId : 'cropped-cover-image',
            loaderHtml :'<div class="loader bubblingG"><span id="bubblingG_1"></span><span id="bubblingG_2"></span><span id="bubblingG_3"></span></div> ',
            onBeforeImgUpload: function() {
                $('#profile-cover').show();
            },
            onAfterImgCrop: function() {
                $('#profile-cover').hide();
                var img = $('#cropped-cover-image').val();

                $('#profile-header').css('background', 'url('+img+')');
                $('#profile-cover').css('background', 'url('+img+')');
            },
            onAfterClose : function() {
                $('#profile-cover').hide();
            }
        });
        cropCover.reset();

        //community logo upload
        prepareCommunityLogoUpload();

        //pages cover upload
        preparePageCover();
    }

    coverPluginLoading();

    /**
     * General way for action to required login
     */
    function actionRequiredLoggedIn()
    {
        return alert('You must be logged in to like or comment');
    }

    reloadPlugins();

    $(document).on('keyup','.slug-input', function() {
        var target = $($(this).data('target'));
        target.html($(this).val());
    });

    /**
     * Tagging
     */

    function insertTag(tags, input, userid, name, sc, sl)
    {
        if (tags.find("#tag-" + userid).length) return false;
        var div = $("<span id='tag-"+userid+"' class='tag'><input name='val[tags][]' type='hidden' value='"+userid+"'/>"+name+" <a href=''><i class='icon ion-close'></i></a> </span> ");
        div.insertBefore(input);

        //attach event to this by the user
        div.find('a').click(function() {
            div.remove();
            return false;
        });
        input.val('').focus();
        sc.slideUp('slow');
        sl.html('');
    }

    function resetTags()
    {
        var c = $('.people-tagging');
        c.find('.tag').remove();
        c.hide();
    }

    function enableTagging(c)
    {
        var tags = c.find('.tags');
        var tagForm = tags.find('form');
        var tagInput = tags.find('input[type=text]');
        var suggestionListContainer = tags.next();
        var suggestionIndicator = tags.find('.indicator');

        /**
         * if user what to tag non existing user this take of it
         */
        suggestionListContainer.find('.suggestion-info a').unbind('click').click(function() {
            insertTag(tags,tagInput, tagInput.val(), tagInput.val(), suggestionListContainer, suggestionListContainer.find('.suggestion-list'));
            return false;
        });

        /**on keyup make suggestions***/
        window.suggestionIsOn = false;
        tagInput.keyup(function() {
            var text = $(this).val();
            if (text.length < 3) suggestionListContainer.slideUp();
            if (window.suggestionIsOn || text.length < 3) {

                return false;
            }

            window.suggestionIsOn = true;


            suggestionListContainer.show();
            suggestionIndicator.show();
            //send to server to get people suggestions
            $.ajax({
                url : baseUrl + 'user/tag/suggestion',
                data : {text : text},
                cache : false,
                success : function(r) {
                    var sc = suggestionListContainer.find('.suggestion-list');
                    sc.html(r);
                    window.suggestionIsOn = false;
                    suggestionIndicator.hide();

                    sc.find('a').click(function() {
                        var userid = $(this).data('userid');
                        var name = $(this).data('name');
                        insertTag(tags,tagInput, userid, name, suggestionListContainer, sc);
                        return false;
                    })

                }
            });
        });
    }

    /***Login form processing*****/
    $(document).on('submit', '#login-form', function() {
        Pace.restart();
        var loginForm = $(this);
        var mc = loginForm.find('.message');
        mc.fadeOut();
        $(this).ajaxSubmit({
            type : 'POST',
            url  : baseUrl + 'login',
            cache : false,
            success : function(data) {
                data = jQuery.parseJSON(data);

                if (data.response == 1) {
                    window.location = data.url;
                } else {
                    Pace.stop();
                    mc.html(data.message).fadeIn();
                }
            }
        });

        return false;
    });
    /**End of login process***/

    /**Signup form process***/
    window.signupOnGoing = false;
    $(document).on('submit', '#signup-form', function() {
        if (window.signupOnGoing) return false;
        window.signupOnGoing = true;
        Pace.restart();
        var signupForm = $(this);
        var mc = signupForm.find('.message');
        mc.fadeOut();

        $(this).ajaxSubmit({
            type : 'POST',
            url : baseUrl + 'signup',
            cache : false,
            success : function(data) {
                window.signupOnGoing = false;
                data = jQuery.parseJSON(data);
                if (data.response == 1) {
                    window.location = data.url;
                } else {
                    Pace.stop();
                    mc.html(data.message).fadeIn();
                }
            },
            error : function() {
                window.signupOnGoing = false;
            }
        })
        return false;
    });
    /**End of Signup form***/

    /**Getstarted ***/
    function changePhoto(form, input) {
        var img = form.find('.media-object img');

        img.css('opacity', '0.6');
        form.ajaxSubmit({
            type : 'POST',
            url : baseUrl + 'getstarted/save/photo',
            success : function(data) {
                data = jQuery.parseJSON(data);
                if (data.code == 1) {
                    img.attr('src', data.url);
                } else {
                    alert(data.message);
                }
                input.val('');
                img.css('opacity', '1');
            }
        });
    }
    $(document).on('change', '#getstarted-image-input', function() {
        var form = $("#getstarted-form");
        var input = $(this);
        changePhoto(form, input);
    });

    $(document).on('submit', '#getstarted-form', function(e) {
        
        
        var form = $("#getstarted-form");
        var left = $('.getstarted-left');
        var right = $('.getstarted-right');

        left.css('opacity', '0.4');
        right.css('opacity', 1);
        var c = right.find('.member-container');
        c.css('background', 'white');
        $('#gestarted-continue-button').removeAttr('disabled');
        if (right.css('display') == 'none') {
            window.location = baseUrl + 'getstarted/finish';
            return false;
        }

        $.ajax({
            url : baseUrl + 'getstarted/members',
            cache : false,
            success : function(data) {
                c.html(data);
            }
        })
        
        
        e.preventDefault();
        if (supportFormData()) {
            $.ajax({
                url : baseUrl + 'getstarted/save/info',
                type : 'POST',
                data : new FormData(this),
                cache : false,
                contentType : false,
                processData : false
            });
        } else {
            
            form.ajaxSubmit({
            url : baseUrl + 'getstarted/save/info',
            type : 'POST'                                   
        });
        }
    });
    /**End of getstarted process***/

    /**AJaxify content***/

    if (doAjaxify) {

        function ajaxify(url, force) {
            window.onpopstate = function(e) {
                url = window.location;

                ajaxify(url, true);
            }
            if (url == window.location && force == undefined) return false;
            Pace.restart();

            $('.header-dropdown-box').fadeOut();
            Pagelet.reset();
            $.ajax({
                url : url,
                cache : false,
                //async : false,
                dataType : 'json',
                type : 'GET',
                success : function(data) {
                    //toggleFadeCover('add');
                    //data = jQuery.parseJSON(data);
                    var content = data.content;

                    if (content == 'login') {
                        window.location = baseUrl;
                        return false;
                    }
                    var container = data.container;
                    var title = data.title;


                    $(container).html(content);

                    if (data.design) {
                        design = jQuery.parseJSON(data.design);

                        changePageDesign(design.bg_image, design.bg_color, design.bg_position, design.bg_attachment, design.bg_repeat, design.link_color, design.content_bg_color );
                    }


                    document.title = title;
                    //window.history.pushState(null, null,  url);
                    //url = url.replace(baseUrl, '');

                    window.history.pushState({},'New URL:' + url, url);
                    //start paglets loading
                    Pagelet.process();
                    $('body').click().animate({scrollTop : 0}, 200);
                    Pace.stop();

                    reloadPlugins();
                    nailImages();
                    //help reload cover photo loading
                    coverPluginLoading();
                    
                    scrollMessageBox();
                    toggleFadeCover('remove');


                }
            });
        }



        $(document).on('click', 'a[data-ajaxify=true]', function() {
            var obj = $(this);
            var url = obj.attr('href');
            ajaxify(url);
            return false;
        });

        $(document).on('submit', '#search-box', function() {
           var term = $(this).find('input[type=text]').val();
            if (term != '') {
                url = $(this).attr('action')+ '?term='+ term;
                $(this).find('.dropdown').slideUp();
                ajaxify(url);
            }
            return false;
        });
    }

    /**END OF AJAXIFY**/
    $(document).on('click', '#content-container', function() {
       $('.header-dropdown-box').hide();
    });

    /**Search box dropdown**/
    $(document).on('keyup', '#search-box input[type=text]', function() {
        var term = $(this).val();
        var container = $('#search-box');
        var dropdown = container.find('.dropdown');
        if (term.length > 1) {
            if (dropdown.css('display') == 'none') $('.header-dropdown-box').hide(); //hide others
            dropdown.slideDown('fast');
            dropdown.find('.indicator').fadeIn();
            container.ajaxSubmit({
                url : baseUrl + 'search/dropdown',
                type : 'GET',
                success : function(data) {
                    dropdown.find('.dropdown-content').html(data);
                    dropdown.find('.indicator').fadeOut();
                }
            })
        } else {
            dropdown.slideUp('fast');
        }

        dropdown.find('.footer-link').unbind().click(function() {
           dropdown.slideUp('fast');
           container.submit();
            return false;
        });

        dropdown.find('.close-button').unbind().click(function() {
            dropdown.slideUp('fast');
            return false;
        });
        return false;
    });


    /**POST**/

    window.postingStatus = false;
    function showPostIndicator()
    {
        $('.post-editor-indicator').fadeIn();
    }

    function hidePostIndicator()
    {
        $('.post-editor-indicator').fadeOut();
    }
    function postingStatus(indicator) {
        window.postingStatus = true;
        if (!indicator) showPostIndicator();
        $("#post-submit-button").attr("disabled", "disabled");
        $("#post-editor-privacy-selector").attr("disabled", "disabled");
    }
    function isPosting() {
        return window.postingStatus;
    }
    function removePostingStatus(temp)
    {
        window.postingStatus = false;
        hidePostIndicator();
        $("#post-submit-button").removeAttr("disabled");
        $("#post-editor-privacy-selector").removeAttr("disabled");
        if (!temp) {
            /**
             * take time to clean editor up
             */
            $('#post-type-content').hide().find('input[type=text]').val('');
            $('#post-type-content').find('.image').remove();
            $('#content_type').val('text');
            $('.post-textarea').val('').css('height', '50px');
            $('#post-image-input').val('');
            $('#post-editor-video-upload').val('');
            resetTags();
            hidePostFile();
        }

    }

    function postHasUpload() {
        var img = $('#post-image-input').val();
        var video = $('#post-editor-video-upload').val();
        var file = $("#post-editor-file-upload").val();
        if (img != '' || video != '' || file != '') return true;
        return false;
    }

    function disablePost()
    {
        $("#post-submit-button").attr('disabled', 'disabled');
    }

    function enablePost()
    {
        $("#post-submit-button").removeAttr('disabled');
    }

    function showPostFile()
    {
        $('.add-file-container').fadeIn();
    }

    function hidePostFile()
    {
        $('.add-file-container').fadeOut();
        $('.add-file-container').find('input[type=file]').val('');
    }
    $(document).on('click', '.post-add-file-trigger', function() {

        var c = $('.add-file-container');
        if (c.css('display') == 'none') {
            c.fadeIn();
        } else {
            c.fadeOut();
        }
        return false;
    });

    window.currentPostEditorLink = '';

    function clearLinkPreview(clearCurrent) {
        if (clearCurrent != undefined) window.currentPostEditorLink = '';
        var linkContainer = $('.post-editor-link-container');
        var previewContainer = linkContainer.find('.link-preview-container');
        var titleInput = linkContainer.find('.link_title');
        var descriptionInput = linkContainer.find('.link_description');
        var imageInput = linkContainer.find('.link_image')
        var theLink = linkContainer.find('.the_link');

        linkContainer.hide();
        previewContainer.html('');
        titleInput.val('');
        descriptionInput.val('');
        imageInput.val('');
        theLink.val('');
        linkContainer.find('.link-preview-indicator').hide();
    }

    function processLinkLoader(str) {
        var spl = str.split(" ");
        var linkContainer = $('.post-editor-link-container');
        var indicator = linkContainer.find('.link-preview-indicator');
        var previewContainer = linkContainer.find('.link-preview-container');
        if (spl.length > 0) {
            var foundlink = searchTextForLink(str);
            if (foundlink != '' && foundlink != window.currentPostEditorLink) {
                window.currentPostEditorLink = foundlink;
                //linkContainer.show();
                showPostIndicator();
                $.ajax({
                    url : baseUrl + 'post/link-preview',
                    type : 'POST',
                    cache : false,
                    data : {link : foundlink},
                    success : function(data) {
                        var data = jQuery.parseJSON(data);
                        var title = data.title;
                        var description = data.description;
                        var images = data.image;
                        var titleInput = linkContainer.find('.link_title');
                        var descriptionInput = linkContainer.find('.link_description');
                        var imageInput = linkContainer.find('.link_image')
                        var theLink = linkContainer.find('.the_link');

                        hidePostIndicator();
                        if (title == '') {
                            clearLinkPreview();

                            return false; //we can't go on from here
                        }
                        previewContainer.html(data.preview);
                        linkContainer.show();
                        //let set the title and description
                        titleInput.val(title);
                        descriptionInput.val(description);
                        theLink.val(data.link);

                        if (images.length > 0) {
                            mainPreviewImage = previewContainer.find('.main-preview-image');
                            imageInput.val(images[0]); //set the first image as selected
                            window.currentPostLinkImage = 0;
                            //attached event to preview image navigation
                            previewContainer.find('.navigate-left').click(function() {
                                if (window.currentPostLinkImage != 0) {
                                    var n = window.currentPostLinkImage - 1;

                                    window.currentPostLinkImage = n;
                                    var cImage = images[n];
                                    imageInput.val(cImage);
                                    mainPreviewImage.attr('src', cImage)
                                }
                                return false;
                            });

                            previewContainer.find('.navigate-right').click(function() {
                                if (images.length - 1 != window.currentPostLinkImage) {
                                    var n = window.currentPostLinkImage + 1;

                                    window.currentPostLinkImage = n;
                                    var cImage = images[n];
                                    imageInput.val(cImage);
                                    mainPreviewImage.attr('src', cImage)
                                }
                                return false;
                            });

                        }
                        previewContainer.find('.delete-link-preview').click(function() {

                            linkContainer.hide();
                            previewContainer.html('');

                            titleInput.val('');
                            descriptionInput.val('');
                            imageInput.val('');

                            processLinkLoader($('.post-textarea').val() + ' ');
                            $('.post-textarea').val($('.post-textarea').val()).focus();
                            return false;
                        });



                        indicator.hide();

                    }
                })
            }
        }

    }

    $(document).on('focus', '.post-textarea', function() {
        $('.editor-footer').fadeIn('slow');
    });

    $(document).on('keyup', '.post-textarea', function() {
        if ($('.post-editor-link-container').css('display') == 'none') {
            processLinkLoader($(this).val());
        }
    });

    /***Emoticons***/
    $(document).on('click', '.each-emoticon-selector', function() {
        var code = $(this).data('code')
        var target = $($(this).data('target'));
        var val = target.val() + ' ' + code + ' ';
        target.select().val(val).focus();
        //$('body').click();//auto hide this emoticon dropdown
        return false;
    })

    window.mentionSuggestionIsOn = false;
    $(document).on('keyup', '.mention', function(e) {
        var str = $(this).val();
        var aStr = str.split(' ');
        var o = $(this);
        var container = $($(this).data('target'));
        var lContainer = container.find('.listing');


        if (aStr.length > 0) {
            var lStr = aStr[aStr.length - 1];
            var nStr = lStr.split('');
            if (lStr.length > 2 && nStr.length > 0) {
                var char = nStr[0];

                if (char.toLowerCase() == '@' || char.toLowerCase() == '#') {
                    container.fadeIn();
                    lContainer.fadeIn();
                    $.ajax({
                        url : baseUrl + 'user/tag/' + ((char == '@') ? 'username' : 'hashtag'),
                        data : {text : lStr.replace('@', '')},
                        cache : false,
                        success : function(r) {
                            window.mentionSuggestionIsOn = false;
                            if (r != '') {

                                lContainer.html(r).find('a').click(function() {
                                    var tagName = $(this).data('tag');
                                    aStr[aStr.length - 1] = tagName;

                                    var s = '';

                                    for(i = 0; i < aStr.length; i++) {
                                        s += aStr[i] + ' ';
                                    }

                                    o.select().val(s + ' ');

                                    lContainer.hide('fast', function() {
                                        //o.focus()
                                    });
                                    return false;
                                });
                            }
                        }
                    });
                } else {
                    lContainer.html('').hide();
                }
            } else {
                lContainer.html('').hide();
            }
        }

    });

    //tagging people in posts
    $(document).on('click', '#editor .add-people', function() {
        var c = $('#editor .post-with-friend');
        if (c.css('display') == 'none') {
            c.fadeIn().find('.tags input[type=text]').focus();

            enableTagging(c);
        } else {
            c.fadeOut();
        }
        return false;
    });

    //switch header nav
    $(document).on('click', '.editor-header .nav a', function(e) {

        if (!$(this).hasClass("photo")) {
            $('.editor-header .nav a').removeClass('current'); //remove current from all
            $(this).addClass('current');

        }
        if (!$(this).hasClass('video')) {
            $('#post-type-content').hide();
            $('#post-editor-video-upload-container').hide();

        } else  {
            $('#post-editor-video-upload-container').show();
        }
        if ($(this).hasClass('status')) return false;


    });

    //share post
    $(document).on('click', '.post-share-button', function() {
        var o = $(this);
        var id = o.data('id');


        if (!o.data('is-login')) {

            actionRequiredLoggedIn();
            return false;
        }

        bootbox.confirm('Are you sure you want to share this', function(result) {
            if (result) {
                $.ajax({
                    url : baseUrl + 'post/share/' + id,
                    cache : false,
                    success : function(data) {
                        data = jQuery.parseJSON(data);
                        if(data.code == 1) {
                            $('.post-share-count-' + id).html(data.count);
                        } else {
                            bootbox.alert(data.message)
                        }
                    }
                })
            }
        })
        return false;
    });

    //delete post
    $(document).on('click', '.delete-post', function() {

        var id = $(this).data('id');
        var o = $('#post-' + id);

        bootbox.confirm($(this).data('message'), function(r) {
            if (r) {
                o.fadeOut('fast');
                o.remove();
                $.ajax({
                    url : baseUrl + 'post/delete/'+id
                });
            }
        })
        return false;
    });

    //hide post
    $(document).on('click', '.hide-post', function() {
        var id = $(this).data('id');
        var o  = $('#post-' + id);
        var content = o.html();

        o.html('<div style="padding: 10px">Hiding post....</div>');
        $.ajax({
            url : baseUrl + 'post/hide/' + id,
            cache : false,
            success : function(data) {
                o.html(data);
                o.find('.undo').click(function() {
                    o.html(content);
                    $.ajax({
                        url : baseUrl + 'post/unhide/' + id
                    });
                    return false;
                });
                o.find('.delete').click(function() {
                    o.remove();
                    return false;
                });
            }
        })
        return false;
    });

    var postSelectedImage = 0;
    function postEditorPrepareImage(input) {

        $('#content_type').val('image');


        image = document.getElementById("post-image-input");
        $('#post-type-content').find('input[type=text]').hide();
        $('.post-media-suggestion').hide();
        var containerDiv = $('#post-type-content');
        var imagesContainer = containerDiv.find('.images-container');
        imagesContainer.html('');



        if (image.files) {
            $('.editor-header .nav a').removeClass('current'); //remove current from all
            $("#post-editor-photos-selector").addClass("current");
            if (image.files.length > maxPostImage) {
                bootbox.alert('Allowed only ' + maxPostImage + ' photos at once');

                return false;
            }

            containerDiv.show();
            for(i = 0; i < image.files.length; i++) {
                if (typeof FileReader != "undefined") {


                    var reader = new FileReader();
                    reader.onload = function(e) {
                        var div = $("<div class='image'></div>");
                        var img = $("<img/>");

                        img.attr('src', e.target.result);
                        div.append(img);
                        imagesContainer.append(div);
                    }
                    reader.readAsDataURL(image.files[i]);
                }
            }
        } else {

        }



    }

    function showPostError()
    {
        $('#post-error').fadeIn();
        setTimeout(function() {
            $('#post-error').slideUp();
        }, 5000)
    }

    $(document).on('submit', '#post-form', function (e) {

        if (isPosting()) return false;
        if (postHasUpload()) {
            postingStatus(true);
        } else {
            postingStatus();
        }
        e.preventDefault();
        $(this).ajaxSubmit({
            url : baseUrl + 'post/add',
            type : 'POST',
            success : function(data) {
                removePostingStatus();
                if (data != 0) {
                    var div = $('<div></div>');
                    div.html(data).hide();
                    $('#post-list').prepend(div)
                    $('#post-list').data('lastcheck', '');
                    div.fadeIn();
                    removePostingStatus();
                    reloadPlugins();
                    //clearInterval(window.usercheck);
                } else {

                    hidePostIndicator();
                    showPostError();
                }

            },
            error : function() {
                removePostingStatus(true);
            },
            uploadProgress : function(event, position, total, percent) {
                if (postHasUpload()) {
                    var uI = $("#post-editor-uploading-indicator");
                    uI.show();
                    uI.find('span').html(percent + "%");
                    if (percent == 100) {
                        uI.hide();
                        uI.find('span').html("0%");
                        showPostIndicator();
                    }
                }
            }
        });
        
    });
    $(document).on('click', '.content-type-toggle', function() {
        var type = $(this).data('type');
        var placeholder = $(this).data('placeholder');
        var container = $('#post-type-content');
        $('.post-media-suggestion').hide();
        $('.post-media-suggestion').find('.listing').html('').hide();

        if (type != 'video') {
            $('#post-editor-video-upload-container').hide();
            $('.editor-header .nav a').removeClass('current'); //remove current from all
            $('.editor-header .nav .status').addClass("current");
        }

        container.find('.image').remove();
        postSelectedImage = 0;
        container.fadeIn('slow').find('input[type=text]').val('').attr('placeholder', placeholder).fadeIn('slow').focus();
        $('#content_type').val(type);

        return false;
    });
    $(document).on('keyup', '#post-type-content input[type=text]', function() {
        var type = $('#content_type').val();

        if (type == 'link') {
            processLinkLoader($(this).val());
        }
    });
    $(document).on('keyup', '#post-type-content input[type=text]', function() {
        type = $('#content_type').val();
        
        
        if (type == 'audio' || type == 'video') {
            var container = $('.post-media-suggestion')
            var indicator = container.find('.search-indicator');
            var listing = container.find('.listing');
            listing.html('');

            //indicator.fadeIn();
            showPostIndicator();
            $.ajax({
                url : baseUrl + 'post/search/media',
                cache : false,
                data:{type: type, v : $(this).val()},
                success : function(data) {
                    hidePostIndicator();
                    if (!listing.find('.selected').length && data != '') {
                        listing.html(data);
                        container.show();
                        listing.show();
                    } else {
                        container.hide();
                        listing.hide();
                    }
                }
            });
        }
    });
    
    $(document).on('click', '.post-media-suggestion .listing a', function() {
        var l = $(this).attr('href');
        var image = $(this).data('image');
        var title = $(this).data('title');
        var div = $("<div class='media selected'><div class='media-object pull-left'><img src='"+image+"' width='30' height='30'/></div><div class='media-body'><h3 class='media-heading'>"+title+"</h3><a class='pull-right close' href=''><i class='icon ion-close'></i></a></div> </div>")
        $('.post-media-suggestion').find('.listing').html(div);

        div.find('.close').click(function() {
            div.remove();
            $('#post-type-content').find('input[type=text]').val('');
            $('.post-media-suggestion').hide();
            $('#post-type-content').hide();
            $('.post-media-suggestion').find('.listing').hide();
            return false;
        });
        $('#post-type-content').find('input[type=text]').val(l).hide();
        return false;
    })

    $(document).on('change', '#post-editor-video-upload', function() {
        $('#post-editor-video-upload-container').css('opacity', '0.5')
    });

    $(document).on('change', '#post-image-input', function() {
        postEditorPrepareImage($(this));
    });

    //inline post editoru
    $(document).on('click', '.edit-post-trigger', function() {
        var form = $('#post-inline-editor-' + $(this).data('id'));

        form.slideDown().find('textarea').focus();
        $('body').click();
        return false;
    });

    $(document).on('click', '.cancel-post-inline-editor', function() {
        var form = $('#post-inline-editor-' + $(this).data('id'));

        form.slideUp();
        return false;
    });

    $(document).on('click', '.save-post-inline-editor', function() {
        var container = $('#post-inline-editor-' + $(this).data('id'));
        var form = container.find('form');
        var text = form.find('textarea').val();
        var id = $(this).data('id');
        var textC = $('#post-text-content-' + id);
        var edited = $(".post-is-edited-" + id);
        textC.html(text);

        if($(this).data('text') != text) {
            edited.html($(this).data('edited'));
        }

        $.ajax({
            url : baseUrl + 'post/edit/'+id,
            data : {text: text},
            cache : false,
            type : 'POST',
            success : function(c) {
                if (c) textC.html(c);
            }
        })
        container.fadeOut();
        return false;
    });


    /**Process comments**/

    $(document).on('click', '.comment-edit-button', function() {
        var commentId = $(this).data('comment-id');
        var cTextContainer = $("#" +commentId + "-comment-text");
        var cForm = $("#comment-inline-editor-" + commentId);
        cTextContainer.hide();
        cForm.fadeIn().find('textarea').focus();
        return false;
    });

    $(document).on('click', '.cancel-inline-editor', function() {
        var commentId = $(this).data('id');
        var cTextContainer = $("#" +commentId + "-comment-text");
        var cForm = $("#comment-inline-editor-" + commentId);

        cForm.hide();
        cTextContainer.show();
        return false;
    });
    $(document).on('click', '.comment-edit-save-button', function() {

        var commentId = $(this).data('id');
        var $form = $("#comment-inline-editor-" + commentId);
        var cTextContainer = $("#" +commentId + "-comment-text");
        var oText = cTextContainer.html();
        var nText =  $form.find('textarea').val();

        if (nText == oText) return false;

        $form.hide();
        cTextContainer.html(nText).fadeIn();

        $.ajax({
            url : baseUrl + 'comment/edit/'+ commentId,
            data : {text: nText},
            cache : false,
            type : 'POST',
            success : function(c) {
                if (c) {
                    cTextContainer.html(c);
                } else {
                    cTextContainer.html(oText);
                }
            }
        });

        return false;
    });

    function updatePostCommentCount(type, id)
    {
        $.ajax({
            url: baseUrl + 'comment/count/'+type + '/' + id,
            success: function(c)
            {
                $('.post-reply-count-' + id).html(c);
                $('.photo-post-reply-count-' + id).html(c);
            }
        })
    }

    function toggleReplyForm(form,type) {
        var t = form.find('input[type=text]');
        var c = form.find('.real-comment-form')
        if (type) {
            //on the reply
            t.hide();
            c.fadeIn().find('textarea').focus();
        } else {
            c.hide();
            c.find('textarea').val('').css('height', '32px')
            t.fadeIn();
        }
    }
    $(document).on('focus', '.post-replies form input[type=text]', function() {
        var id = $(this).data('id');
        var type = $(this).data('type');

        var form = $('#reply-form-' + type + '-' + id);
        toggleReplyForm(form, true);
    });

    $(document).on('click', '.cancel-reply-form', function() {
        var id = $(this).data('id');
        var type = $(this).data('type');

        var form = $('#reply-form-' + type + '-' + id);
        toggleReplyForm(form, false);
        return false;
    });

    $(document).on('submit', '.post-replies form', function(e) {
        var form = $(this);
        var id = form.data('id');
        var type = form.data('type');
        var c = $('#'+type+'-'+ id + '-reply-lists');
        if (form.data('cloneid') != undefined) {
            var c2 = $('#'+form.data('cloneid')+ '-reply-lists');
        }
        var t = form.find('textarea');
        var f = form.find('input[type=file]');

        if (t.val() == '' && f.val() == '') {

            return false;
        }
        form.css('opacity', '0.6');

        e.preventDefault();
        if (supportFormData()) {
            $.ajax({
            url : baseUrl + 'comment/add',
            type : 'POST',
            data : new FormData(this),
            cache : false,
            contentType : false,
            processData : false,
            success : function(result) {
                c.append(result);
                if (c2) c2.append(result);
                toggleReplyForm(form, false);
                form.css('opacity', 1).find('input[type=text]').val('');
                form.find('textarea').val('').css('height', '32px');
                form.find('input[type=file]').val('');
                reloadPlugins();
                updatePostCommentCount(type,id);
            }
            });

        } else {
            form.ajaxSubmit({
            url : baseUrl + 'comment/add',
            type : 'POST',            
            success : function(result) {
                c.append(result);
                if (c2) c2.append(result);
                form.css('opacity', 1).find('input[type=text]').val('');
                form.find('input[type=file]').val('');
                reloadPlugins();
                updatePostCommentCount(type,id);
            }
            });

        }
        
    });
    $(document).on('click', '.reply .delete-button', function(){
        var o = $(this);

        var r = confirm($(this).data('warning'));

        if(r) {
            var reply = $("#reply-" + o.data('id'));
            var reply2 = $(".reply-" + o.data('id'));
            reply.fadeOut();
            reply2.fadeOut();
            $.ajax({url:baseUrl + 'comment/delete/' + o.data('id'), success:function() {
                updatePostCommentCount(o.data('type'), o.data('type-id'));
            }})

        }

        return false;
    });

    /**Loading more comments ***/
    function loadMoreComments(o, t)
    {
        var limit = o.data('limit');
        var type = o.data('type');
        var offset = o.data('offset');
        var typeId = o.data('type-id');

        var url = baseUrl + 'comment/load/more';
        t.find('.indicator').show();
        $.ajax({
            url : url,
            data : {
                limit : limit,
                offset : offset,
                type : type,
                typeId : typeId
            },
            cache : false,
            success : function(data) {
                data = jQuery.parseJSON(data)
                t.find('.indicator').hide();
                if (data.content == '') {
                    o.find('.load-more-comment').hide();
                } else {
                    o.find('.replies-list').prepend(data.content);
                    o.data('offset', data.offset);
                    reloadPlugins();
                }
            }
        })
    }
    $(document).on('click', '.load-more-comment', function() {
        loadMoreComments($($(this).data('target')), $(this));
        return false;
    })

    $(document).on('click', '.post-activity-loader', function() {
        var o = $(this);
        var id = o.data('id');
        var c = $('#post-activity-' + id);
        var l = o.data('loading');

        c.html('<div style="padding: 10px">'+l+'</div>').fadeIn();
        $.ajax({
            url : o.attr('href'),
            cache : false,
            success: function(content) {
                c.html(content);
            }
        })
        return false;
    });

    $(document).on('click', '#post-privacy-container a', function() {
       var o = $(this);
        var c = $('#post-privacy-container');
        var b = c.find('button');
        var input = c.find('input');
        var v = o.data('value');
        var t = o.data('text');
        
        $.ajax({
            url : baseUrl + 'user/update/post-privacy',
            data : {v : v}
        });

        b.find('span').html(t);
        input.val(v);
        $('body').click();
        return false;
    });



    $(document).on('click', '.post-load-more', function() {
        paginatePost($('#post-list'));
        return false;
    });

    //Processing post text limit
    function processPostTextLimit(o)
    {
        var limit = o.data('text-limit');
        var cVal = o.val();
        var counter = $(o.data('counter-target'));
        if (cVal.length > limit) {
            var cVal = cVal.substr(0, limit);
            o.val(cVal);
        }
        counter.html(limit - cVal.length);
    }

    $(document).on('keyup', '.post-text-limit', function() {
       processPostTextLimit($(this))
    });

    $(document).on('focus', '.post-text-limit', function() {
        processPostTextLimit($(this))
    });
    
    $(document).on('click', '.post-read-more', function() {
        var id = $(this).data('id');
        var content = $('#full-text-content-' + id);
        content = content.html();
        var container = $("#post-text-content-" + id);
        
        container.hide().html(content).fadeIn();
        return false;
    })

    /**End of post**/

    /**processing likes***/
    $(document).on('click', '.like-button', function() {
        var o = $(this);
        var like = o.data('like');
        var unlike = o.data('unlike');
        var status = o.data('status');
        var span = o.find('span');
        var type = o.data('type')
        var id = o.data('id');
        var target = $('.post-like-count-' + id);
        var target2 = $('.photo-post-like-count-' + id);

        if (o.data('target') != undefined) {
            target = $(o.data('target'));
        }

        if (!o.data('is-login')) {

            actionRequiredLoggedIn();
            return false;
        }

        if (status == 0) {
            //like the post
            span.html(unlike);
            o.data('status', 1);
            $.ajax({
                url : baseUrl + 'like/'+type +'/'+id,
                cache : false,
                success : function(r) {
                    target.html(r);
                    target2.html(r);
                }
            })
        } else {
            //unlike the post
            span.html(like);
            o.data('status', 0);
            $.ajax({
                url : baseUrl + 'unlike/'+type +'/'+id,
                success : function(r) {
                    target.html(r)
                    target2.html(r);
                }
            })
        }
        return false;
    });


    /**user account settings**/
    $(document).on('change', '#account-form #image-input', function () {
        var form = $('#account-form');
        changePhoto(form, $(this));
    })

    /**User design techs**/
    function changePageDesign(bgImg, bgColor, bgPosition, bgAttach, bgRepeat, lColor, pageColor )
    {
        //return false;
        if (bgImg != '' && bgImg != null) {
            $('body').css('background-image', 'url('+bgImg+')');
        } else {
            $('body').css('background-image', 'none');
        }

        //alert(bgImg);

        $('body').css('background-color', ''+bgColor+'');
        $('body').css('background-position', ''+bgPosition+'');
        $('body').css('background-attachment', ''+bgAttach+'');
        $('body').css('background-repeat', ''+bgRepeat+'');
        $('.design-link').css('color', lColor);

        $('.page-content').css('background-color', pageColor );
    }


    $(document).on('click', 'a[data-toggle=design]', function() {
        var bgImg = $(this).attr('background-image');
        var bgColor = $(this).attr('background-color');
        var bgPosition = $(this).attr('background-position');
        var bgAttach = $(this).attr('background-attachment');
        var bgRepeat = $(this).attr('background-repeat');
        var lColor = $(this).attr('link-color');
        var pageColor = $(this).attr('page-content-bg-color');

        changePageDesign(bgImg, bgColor, bgPosition, bgAttach, bgRepeat, lColor, pageColor);
        $('.user-selected-theme').val($(this).data('key'));

        /**lets disable others and enable this**/
        $('#themes').find('a').css('border-color', '#E8E8E8');
        $(this).css('border-color', '#D64541');
        return false;
    });

    $(document).on('change', '#background-image-input', function() {

        var preview = $('.bg-preview-image');
        var input = $(this);
        preview.css('opacity', '0.4');
        var form = $('#design-form');

        form.ajaxSubmit({
            type : 'POST',
            url : baseUrl + 'account/design/bg',
            data : {current: $(this).data('current')},
            success : function(data) {
                data = jQuery.parseJSON(data);
                if (data.response == 1) {

                    changePageDesign(data.image, $('#bgcolorpicker').val(), $('#bg-position-input').val(), $('#bg-attachment-input').val(), $('#bg-repeat-input').val(), $('#linkcolorpicker').val(), $('#pagecolorpicker').val() )
                    preview.attr('src', data.image);
                    input.next().val(data.imagePath);
                } else {
                    $('.page-bg-upload-error').fadeIn();
                    setTimeout(function() {
                        $('.page-bg-upload-error').hide();
                    }, 5000)
                }

                preview.css('opacity', '1');
            }
        });
    });

    $(document).on('focus','#bgcolorpicker', function()
    {
        $(this).ColorPicker({
            onSubmit: function(hsb, hex, rgb, el) {
                jQuery(el).val('#'+hex);
                jQuery(el).ColorPickerHide();
                $('body').css('background-color','#'+hex+'');

                changePageDesign($('#background-image-input'), hex, $('#bg-position-input').val(), $('#bg-attachment-input').val(), $('#bg-repeat-input').val(), $('#linkcolorpicker').val(), $('#pagecolorpicker').val() )
            },
            onBeforeShow: function () {
                jQuery(this).ColorPickerSetColor(this.value);
            }
        });
    });

    $(document).on('focus','#linkcolorpicker', function()
    {
        $(this).ColorPicker({
            onSubmit: function(hsb, hex, rgb, el) {
                jQuery(el).val('#'+hex);
                jQuery(el).ColorPickerHide();

                changePageDesign($('#background-image-input'), $('#bgcolorpicker').val(), $('#bg-position-input').val(), $('#bg-attachment-input').val(), $('#bg-repeat-input').val(), hex, $('#pagecolorpicker').val() )
            },
            onBeforeShow: function () {
                jQuery(this).ColorPickerSetColor(this.value);
            }
        });
    });

    $(document).on('focus','#pagecolorpicker', function()
    {
        $(this).ColorPicker({
            onSubmit: function(hsb, hex, rgb, el) {
                var color = 'rgba('+rgb.r+','+rgb.g+','+rgb.b+', 0.2)';
                jQuery(el).val(color);
                jQuery(el).ColorPickerHide();
                $('.page-content').css('background-color',color);

                changePageDesign($('#background-image-input'), $('#bgcolorpicker').val(), $('#bg-position-input').val(), $('#bg-attachment-input').val(), $('#bg-repeat-input').val(), $('#linkcolorpicker').val(), color )
            },
            onBeforeShow: function () {
                jQuery(this).ColorPickerSetColor(this.value);
            }
        });
    });

    //changePageDesign($('#background-image-input'), $('#bgcolorpicker').val(), $('#bg-position-input').val(), $('#bg-attachment-input').val(), $('#bg-repeat-input').val(), $('#linkcolorpicker').val(), $('#pagecolorpicker').val() )

    $(document).on('change', '#bg-attachment-input', function() {
        changePageDesign($('#background-image-input'), $('#bgcolorpicker').val(), $('#bg-position-input').val(), $('#bg-attachment-input').val(), $('#bg-repeat-input').val(), $('#linkcolorpicker').val(), $('#pagecolorpicker').val() )
    });
    $(document).on('change', '#bg-repeat-input', function() {
        changePageDesign($('#background-image-input'), $('#bgcolorpicker').val(), $('#bg-position-input').val(), $('#bg-attachment-input').val(), $('#bg-repeat-input').val(), $('#linkcolorpicker').val(), $('#pagecolorpicker').val() )
    });
    $(document).on('change', '#bg-position-input', function() {
        changePageDesign($('#background-image-input'), $('#bgcolorpicker').val(), $('#bg-position-input').val(), $('#bg-attachment-input').val(), $('#bg-repeat-input').val(), $('#linkcolorpicker').val(), $('#pagecolorpicker').val() )
    });




    /**Connections process***/
    $(document).on('click', '.follow-button', function() {
        var userid = $(this).data('userid')
        var toUserid = $(this).data('touserid');
        var e = $('.' + toUserid + '-follow-button');
        var o = $(this);

        e.removeClass('follow-button btn-lightblue').addClass('unfollow-button btn-danger').html(o.data('unfollow-title'));

        $.ajax({
            url : baseUrl + 'connection/add/'+userid+'/'+toUserid+'/1'
        });
        return false;
    });
    ///unfollow
    $(document).on('click', '.unfollow-button', function() {
        var userid = $(this).data('userid')
        var toUserid = $(this).data('touserid');
        var e = $('.' + toUserid + '-follow-button');
        var o = $(this);

        e.addClass('follow-button btn-lightblue').removeClass('unfollow-button btn-danger').html(e.data('follow-title'));

        $.ajax({
            url : baseUrl + 'connection/remove/'+userid+'/'+toUserid+'/1'
        })
        return false;
    });

    //add friend
    $(document).on('click', '.add-friend-button', function() {
        var userid = $(this).data('userid')
        var toUserid = $(this).data('touserid');
        var e = $('.' + toUserid + '-add-friend-button');
        e.removeClass('btn-blue').addClass('btn-default').html(e.data('sent-title'));

        $.ajax({
            url : baseUrl + 'connection/add/'+userid+'/'+toUserid+'/2',
            cache : false,
            success : function() {
                e.click(function() {
                    return false;
                })
            }
        });
        return false;
    });

    /**remove friend**/
    $(document).on('click', '.unfriend-button', function() {
        var url = $(this).attr('href');

        bootbox.confirm('Are you sure?', function(r) {
            if (r) {
                $.ajax({
                    url : url,
                    cache : false,
                    success : function() {
                        window.location.reload();
                    }
                });
            }
        })
        return false;
    });


    /**Notification dropdown***/    
    $(document).on('click', '#notification-link > a', function() {
        var c = $("#notification-link");
        var l = $(this);
        var d = c.find('.notification-dropdown');
        $('.header-dropdown-box').hide(); //hide others
        d.fadeIn().find('.indicator').show();

        $(this).find('span').remove();
        $.ajax({
            url : baseUrl + 'notification/dropdown',
            success : function(data)
            {
                d.find('.content').html(data);
                reloadPlugins();
                d.find('.indicator').hide();
            }
        });
        d.find('.footer-link').unbind().click(function() {
            d.fadeOut();
        });
        d.find('.close-button').unbind().click(function() {
            d.fadeOut();
            return false;
        })
        return false;
    });

    $(document).on('click', '.notification .delete-button', function() {
        var id = $(this).data('id');
        var c = $('.'+id+'-notification');

        c.fadeOut();

        $.ajax({
            url : baseUrl + 'notification/delete/'+id
        });
        return false;
    });

    /**
     * Notification receiver processing
     */
    $(document).on('click', '.toggle-notification-receiver', function() {
        var type = $(this).data('type');
        var typeId = $(this).data('type-id');
        var userid = $(this).data('userid');
        var o = $(this);
        var status = $(this).data('status');

        if (status == 1) {
            o.find('span').html(o.data('on'));
            o.data('status', 0);
            $.ajax({
                url : baseUrl + 'notification/receiver/remove/' + userid + '/' + type + '/' + typeId
            });
        } else {
            o.find('span').html(o.data('off'));
            o.data('status', 1);

            $.ajax({
                url : baseUrl + 'notification/receiver/add/' + userid + '/' + type + '/' + typeId
            });
        }
        return false;
    });

    /**
     * Blocking of user through different location
     */
    $(document).on('click', '.block-user', function() {
       var location = $(this).data('location');
        var userid = $(this).data('userid');
        bootbox.confirm('Are you sure to block this user', function(r) {
            if (r) {
                $.ajax({
                    url : baseUrl + 'block/user/' + userid,
                    cache : false,
                    success : function() {
                        if (location == 'post') {
                            $('.user-post-' + userid).fadeOut();
                        } else if (location == 'profile') {
                            window.location.reload();
                        }
                    }
                });


            }
        });

        return false;
    });
    $(document).on('click', '.unblock-button', function() {
        var id = $(this).data('id');
        var o = $(this);
        bootbox.confirm('Are you sure ?', function(r) {
            if(r) {
                $.ajax({
                    url : baseUrl + 'unblock/' + id
                });

                $("#blocked-" + id).fadeOut();
            }
        });

        return false;
    });

    /**Delete account ***/
    $(document).on('click', '#delete-account', function() {
        var url = $(this).attr('href');
        var wMessage = $(this).data('warning-message');

        bootbox.confirm(wMessage, function(r) {
           if (r) {
               window.location = url;
           }
        });

        return false;
    });


    /**Community scripting**/
    $(document).on('click', '.community-create-form .toggle-create', function() {
        var className = $(this).data('class');
        var privacy = $(this).data('privacy');
        $(this).find('.form-container').fadeIn();

        $('.community-create-form').find('.privacy').val($(this).data('privacy'));
        if (privacy == 1) {
            $('.community-create-form').find('.right .form-container').hide();
        } else {
            $('.community-create-form').find('.left .form-container').hide();
        }
    });

    $(document).on('click', '.join-community', function() {
        var id = $(this).data('id');
        $(this).attr('disabled', 'disabled');

        $.ajax({
            url : baseUrl + 'community/join/' + id,
            success : function() {
                window.location.reload();
            }
        })
        return false;
    });

    $(document).on('click', '.community-create-category-button', function() {
        $(this).hide();
        $('.community-create-category-form').fadeIn().find('input').focus();
        return false;
    });

    $(document).on('submit', '.community-create-category-form', function() {
        var id = $(this).data('id');
        var text = $(this).find('input').val();
        var o = $(this);
        $.ajax({
            url : baseUrl + 'community/category/add',
            cache : false,
            data : {
                id : id,
                text : text
            },
            success : function(content)
            {
                var c = jQuery.parseJSON(content);
                if (c.status == 1) {
                    $("<a data-ajaxify='true' href='"+ c.url+"'>"+ c.title+"</a>").insertBefore($('.community-create-category-button'));
                } else {
                    //failed
                    bootbox.alert(c.message);
                }

                $('.community-create-category-button').show();
                o.hide().find('input').val('');
            }
        })
        return false;
    });

    $(document).on('click', '.community-category-remove', function() {
        var id = $(this).data('id');
        var c = $('.category-' + id);

        c.fadeOut().remove();
        $.ajax({
            url : baseUrl + 'community/category/delete/'+id
        });
    });

    function prepareCommunityLogoUpload() {
        var cropCover = new Croppic('croppic-community-cover', {
            customUploadButtonId: 'change-community-cover',
            uploadUrl: baseUrl + 'community/upload/cover',
            cropUrl: baseUrl + 'community/crop/cover',
            loaderHtml :'<div class="loader bubblingG"><span id="bubblingG_1"></span><span id="bubblingG_2"></span><span id="bubblingG_3"></span></div> ',
            modal : false,
            cropData : {
              id : $('#croppic-community-cover').data('id')
            },
            outputUrlId : 'community-cropped-cover-image',
            onBeforeImgUpload: function() {
                $('#croppic-community-cover').show().css('background:','white');
            },
            onAfterImgCrop: function() {
                $('#croppic-community-cover').hide();
                var img = $('#community-cropped-cover-image').val();

                $('#croppic-community-cover').css('background', 'url('+img+')');
                $('.community-cover').css('background', 'url('+img+')');
            },
            onAfterClose : function() {
                $('#croppic-community-cover').hide();
            }
        });
    }

    $(document).on('click', '.delete-community', function() {
        var o = $(this);
        bootbox.confirm('Are you sure?', function(c) {
            if (c) window.location = o.attr('href');
        })
        return false;
    })

    /**Member invite button**/
    $(document).on('click', '.invite-member', function() {
        var o = $(this);
        o.attr('disabled', 'disabled').removeClass('btn-success').addClass('btn-default').html('Invited');
        $.ajax({
            url : o.attr('href'),
            success : function() {

            }
        });
        return false;
    });

    /**Photo albums**/
    $(document).on('click', '.album-create-button', function() {
        var c = $('.album-create');

        c.find('span').hide();
        c.find('form').fadeIn().find('input').focus();
        return false;
    });

    $(document).on('submit', '.album-create form', function() {
        var text = $(this).find('input').val();
        var c = $('.album-create');
        if (text == '') return false;
        $.ajax({
            url : baseUrl + 'photo/album/create',
            cache : false,
            data : {name : text},
            success : function(data) {
                data = jQuery.parseJSON(data);
                if (data.response != 0) {
                    var d = $('<div></div>');
                    d.html(data.album);
                    d.insertAfter($('.album-create'));
                } else {
                    bootbox.alert(data.message)
                }


                //now reset
                c.find('span').show();
                c.find('form').fadeOut()
            }
        })
        return false;
    });

    $(document).on('change', '#album-image-input', function() {
        $('.photo-add').css('opacity', '0.5');
        var obj = $(this);
        $('#photos-upload-form').ajaxSubmit({
            url : baseUrl + 'photos/upload',
            data : {album : $(this).data('album-id')},
            success : function(data) {
                $('.photo-add').css('opacity', '1');
                obj.val('');
                if (data == '') {
                    $('#album-add-photo-error').fadeIn();
                    setTimeout(function() {
                        $('#album-add-photo-error').fadeOut();
                    }, 5000)
                    return false;
                }
                var v = $('<div></div>')
                v.html(data);
                v.insertAfter($('.photo-add'));

                reloadPlugins();
            }
        });
    });

    $(document).on('click', '.delete-photo', function() {
        var l = $(this).attr('href');

        var c = confirm('Are you sure?');
        if (c) {
            window.location = l;
        }
        return false;
    });

    $(document).on('click', '.photo-album-edit-button', function() {
        var albumId = $(this).data('album-id');
        $('#photo-album-edit-form-' + albumId).fadeIn();
        return false;
    });

    $(document).on('click', '.photo-album-edit-cancel-button', function() {
        var albumId = $(this).data('album-id');
        $('#photo-album-edit-form-' + albumId).fadeOut();
        return false;
    });

    $(document).on('submit', '.photo-album-edit-form', function() {
        var albumId = $(this).data('album-id');
        var text = $(this).find('input[type=text]').val();
        var title = $('#album-title-' + albumId);
        var form = $(this);
        form.css('opacity', '0.6');
        $.ajax({
            url : baseUrl + 'photo/album/edit',
            cache : false,
            data : {id:albumId, text : text},
            success : function(data) {
                if (data != 0) title.html(data);
                form.css('opacity', '0.6').hide();;
            }
        });

        return false;
    });

    $(document).on('mouseover', '.photo', function() {

        $(this).find('.photo-time').fadeIn();
    });

    $(document).on('mouseout', '.photo', function() {

        $(this).find('.photo-time').fadeOut();
    });


    /**Page scripts***/
    $(document).on('change', '#page-image-input', function() {
        var form = $('#page-edit-form');
        var id = form.data('id');
        var img = $('#page-logo-image');
        img.css('opacity', '0.7');
        var input = $(this);

        form.ajaxSubmit({
            type : 'POST',
            url : baseUrl + 'pages/save/photo',
            data : {id : id},
            success : function(data) {
                data = jQuery.parseJSON(data);
                if (data.code == 1) {
                    img.attr('src', data.url);
                } else {
                    $('#page-image-error').fadeIn();
                    setTimeout(function() {
                        $('#page-image-error').fadeIn();
                    }, 5000);
                }
                input.val('');
            }
        });
    });

    $(document).on('click', '.page-delete-button', function() {
        var url = $(this).attr('href');
        bootbox.confirm('Are you sure?', function($r) {
           if ($r) {
               window.location = url;
           }
        });
        return false;
    })
    function preparePageCover() {
        var cropCover = new Croppic('page-profile-cover', {
            customUploadButtonId: 'change-profile-cover',
            uploadUrl: baseUrl + 'page/upload/cover',
            cropUrl: baseUrl + 'page/crop/cover',
            outputUrlId : 'cropped-cover-image',
            loaderHtml :'<div class="loader bubblingG"><span id="bubblingG_1"></span><span id="bubblingG_2"></span><span id="bubblingG_3"></span></div> ',
            cropData : {
                id : $('#page-profile-cover').data('id')
            },
            onBeforeImgUpload: function() {
                $('#page-profile-cover').show();
            },
            onAfterImgCrop: function() {
                $('#page-profile-cover').hide();
                var img = $('#cropped-cover-image').val();

                $('#profile-header').css('background', 'url('+img+')');
                $('#page-profile-cover').css('background', 'url('+img+')');
            },
            onAfterClose : function() {
                $('#page-profile-cover').hide();
            }
        });
    }

    $(document).on('keyup', '.add-admin-form input[type=text]', function() {

        var sContainer = $('.add-admin-form .suggestion-container');
        var indicator = sContainer.find('.indicator');
        sContainer.fadeIn();
        sContainer.find('.listing').html('')
        indicator.show();
        if ($(this).val().length > 0) {
            $.ajax({
                url : baseUrl + 'pages/suggest',
                type : 'POST',
                cache : false,
                data : {term : $(this).val(), pageid : $(this).data('page-id')},
                success : function(data) {
                    data = jQuery.parseJSON(data);
                    indicator.hide();

                    if (data.content != '') {
                        sContainer.find('.listing').html(data.content);
                    } else {
                        sContainer.find('.listing').html(data.message);
                    }

                }
            })
        }
    });

    $(document).on('click', '.add-admin-form .listing a', function() {
        var userId = $(this).data('user-id');
        var fullname = $(this).data('fullname');
        var avatar = $(this).data('avatar');
        var container = $('.add-admin-form .selected-user');
        var input = $('.add-admin-form .the-selected-user');
        var textInput = $('.add-admin-form input[type=text]');
        var sContainer = $('.add-admin-form .suggestion-container');

        var div = $("<div class='media'><div class='media-object pull-left'><img src='"+avatar+"'/></div><div class='media-body'><h5>"+fullname+"</h5> <a class='delete' href=''><i class='icon ion-close'></i> </a> </div> </div>")
        sContainer.hide().find('.listing').html('');
        container.html(div);
        input.val(userId);
        textInput.hide();
        //assign delete event
        container.find('.delete').click(function() {
            container.html('');
            input.val('');
            textInput.fadeIn();
            return false;
        })
        return false;
    });

    $(document).on('change', '.page-admin-role-selection', function() {
        var admin = $(this).data('admin');
        var moderator = $(this).data('moderator');
        var editor = $(this).data('editor');
        var target = $(this).data('target');

        var message = admin
        var v = $(this).val();

        if (v == 1) {
            message = admin;
        } else if(v == 2) {
            message = editor;
        } else {
            message = moderator;
        }

        $(target).html(message);


    });

    $(document).on('submit', '.each-page-admin-form', function() {
        var adminId = $(this).data('admin-id');
        var type = $(this).find('select').val();
        var form = $(this);

        form.css('opacity', '0.4');
        $.ajax({
            url : baseUrl + 'pages/update/admin',
            data : {adminId : adminId, type : type},
            type : 'POST',
            success : function() {
                form.css('opacity', 1);
            }
        })

        return false;
    })

    function processPageAdmin(data)
    {
        data = jQuery.parseJSON(data);
        if (data.code == 1) {
            //insert it into the lists
            var c = $('.custom-admin-list');
            c.append(data.message);
            var container = $('.add-admin-form .selected-user');
            var input = $('.add-admin-form .the-selected-user');
            var textInput = $('.add-admin-form input[type=text]');

            container.html('');
            input.val('');
            textInput.fadeIn().val('');

        } else {
            bootbox.alert(data.message);
        }
    }

    $(document).on('submit', '.add-admin-form', function(e) {
        e.preventDefault();
        var form = $(this);

        if (form.find('.the-selected-user').val() == '') return false;
        form.css('opacity', '0.4');
        if (!supportFormData()) {
            form.ajaxSubmit({
                url : baseUrl + 'pages/add/admin',
                success : function(data) {

                    processPageAdmin(data);
                    form.css('opacity', '1');
                }
            })
        } else {
            $.ajax({
                url : baseUrl + 'pages/add/admin',
                type : 'POST',
                data: new FormData(this),
                cache : false,
                processData : false,
                contentType : false,
                success : function(data) {
                    processPageAdmin(data);
                    form.css('opacity', '1');
                }
            });
        }

        return false;
    });

    //delete page
    $(document).on('click', '.remove-page-admin', function() {
        var id = $(this).data('admin');

        bootbox.confirm('Are you sure?', function(e) {
           if (e) {
               //delete this page admin
               $('#page-admin-' + id).fadeOut();
               $.ajax({
                   url : baseUrl + 'pages/remove/admin',
                   data : {id : id}
               });
           }
        });
        return false;
    });

    $(document).on('change', '#page-add-image-input', function() {

        var form = $('#page-add-photos-form');
        var o = form.find('a');
        var c = o.data('current');
        var i = o.find('img');
        var e = $('#page-add-photo-error');
        i.fadeIn();
        //$('body').click();

        form.ajaxSubmit({
            url : baseUrl + 'pages/add/photos',
            success : function(data) {


                if (data != '0') {
                    $('#page-photos-container').prepend(data);
                    reloadPlugins();
                    i.fadeOut();
                } else {
                    i.fadeOut();
                    e.fadeIn();
                    setTimeout(function() {
                        e.fadeOut();
                    }, 5000)
                }
            }
        })


    });

    //invite friends to like page pagination
    $(document).on('mouseover', '#page-inviter-members', function() {
        window.pageInviteePaginationn = false;
        $(this).scroll(function() {

            if ($(this).data('stop') == undefined && !window.pageInviteePaginationn) {
                if ($(this).scrollTop() + $(this).innerHeight() >= this.scrollHeight) {
                    var offset = $(this).data('offset');
                    var pageId = $(this).data('page-id');
                    var obj = $(this);
                    window.pageInviteePaginationn = true;
                    $.ajax({
                        url : baseUrl + 'pages/load/more/invitees',
                        type : 'POST',
                        data : {offset : offset,pageid : pageId},
                        success : function(data) {
                            data = jQuery.parseJSON(data);
                            window.pageInviteePaginationn = false;
                            if (data.content == '') {
                                obj.data('stop', true);
                            } else {
                                obj.append(data.content);
                                obj.data('offset', data.offset)
                            }
                        }
                    })
                }
            }
        })

    });

    $(document).on('keyup', '.page-friends-inviter-search', function() {
        var c = $('#page-inviter-members');
        var t = $(this).val();
        var pageId = $(this).data('page-id');
        c.html('').data('stop', true);
        $.ajax({
            url : baseUrl + 'pages/search/for/invitees',
            type : 'POST',
            cache : false,
            data : {text : t, pageid : pageId},
            success : function(data) {
                c.html(data);
            }
        })
    });


    //update game logo
    $(document).on('change', '#game-image-input', function() {

        var form = $('#game-edit-form');
        var id = form.data('id');
        var img = $('#game-logo-image');
        img.css('opacity', '0.7');
        var input = $(this);

        form.ajaxSubmit({
            type : 'POST',
            url : baseUrl + 'games/save/photo',
            data : {id : id},
            success : function(data) {
                data = jQuery.parseJSON(data);
                img.css('opacity', 1);
                if (data.code == 1) {
                    img.attr('src', data.url);
                } else {
                    $('#game-image-error').slideDown();
                    setTimeout(function() {
                        $('#game-image-error').slideUp();
                    }, 5000)
                }
                input.val('');
            }
        });
    });


    //Messaging
    $(document).on('click', '.send-message-button', function() {
        var userid = $(this).data('userid');
        var label = $(this).data('label');
        bootbox.dialog({
            message : '<textarea data-height="80" id="message-content" style="width: 100%;height: 120px" class="form-control"></textarea>',
            title : label,
            buttons : {
                success : {
                    label : label,
                    className : 'btn btn-xs btn-success',
                    callback : function() {
                        txt = $('#message-content').val();

                        if (txt == '') return false;
                        $.ajax({
                            url : baseUrl + 'messages/send',
                            type : 'POST',
                            data: {
                                text : txt,
                                userid : userid,
                                type : 'alert'
                            },
                            success : function(data) {
                                bootbox.alert(data);
                            }
                        })
                    }
                },
                danger: {
                    label: "Close",
                    className: "btn-danger btn-xs",
                    callback: function() {

                    }
                }
            }
        });

        return false;
    });

    $(document).on('click', '#message-dropdown-link > a', function() {
        var c = $("#message-dropdown-link");
        var l = $(this);
        var d = c.find('.message-dropdown');
        $('.header-dropdown-box').hide(); //hide others
        d.fadeIn().find('.indicator').show();

        //$(this).find('span').remove();
        $.ajax({
            url : baseUrl + 'messages/dropdown',
            success : function(data)
            {
                d.find('.content').html(data);
                reloadPlugins();
                d.find('.indicator').hide();
            }
        });
        d.find('.footer-link').unbind().click(function() {
            d.fadeOut();
        });
        d.find('.close-button').unbind().click(function() {
            d.fadeOut();
            return false;
        })
        return false;
    });

    window.messagePosting = false;
    $(document).on('submit', '.message-form-container form', function(e) {
        var form = $(this);
        var text = form.find('input[type=text]').val();
        var img = form.find('input[type=file]').val();
        var userid = form.data('userid');


        if (window.messagePosting) return false;
        if (text != '' || img != '') {
            form.css('opacity', '0.6');
            $('.message-list-container').data('lastcheck', '');
            window.messagePosting = true;
            e.preventDefault();
            if (!supportFormData()) {
                form.ajaxSubmit({
                url : baseUrl + 'messages/send',
                type : 'POST',
                data: {
                    text : text,
                    userid : userid,
                    type : 'content'
                },
                success : function(data) {
                    
                    
                    if (data != 0) {
                        
                        $('.message-list-container').append(data).data('lastcheck', '');
                        reloadPlugins();
                        scrollMessageBox();
                        scrollMessageBox();
                       
                        
                    } else {
                        alert('Failed to send message')
                    }
                    form.find('input').val('');
                    form.css('opacity', '1');
                    window.messagePosting = false;
                }
                })
            } else {
                $.ajax({
                url : baseUrl + 'messages/send?userid=' + userid + '&type=content',
                type : 'POST',
                
                data: new FormData(this),
                cache : false,
                processData : false,
                contentType : false,
                success : function(data) {
                    
                    
                    if (data != 0) {
                        
                        $('.message-list-container').append(data).data('lastcheck', '');
                        reloadPlugins();
                        scrollMessageBox();
                       
                        
                    } else {
                        alert('Failed to send message')
                    }
                    form.find('input').val('');
                    form.css('opacity', '1');
                    window.messagePosting = false;
                }
            })
            }
        } else {

        }
        return false;
    });

    $(document).on('click', '.load-old-message', function() {
        var userid = $(this).data('userid');
        var offset = $(this).data('offset');
        var o = $(this);

        $.ajax({
            url : baseUrl + 'messages/more',
            type : 'POST',
            data: {

                userid : userid,
                offset : offset
            },
            success : function(data) {
                data = jQuery.parseJSON(data);

                if (data.content != '') {
                    var div = $('<div></div>');
                    div.html(data.content).hide();
                    div.insertAfter(o);
                    div.fadeIn();
                    $('.post-time span').timeago();
                    o.data('offset', data.offset);
                } else {
                    o.hide();
                }

            }
        });

        return false;
    });

    $(document).on('click', '.delete-message-button', function() {
        var id = $(this).data('id');
        var message = $("#message-" + id);

                $.ajax({
                    url : baseUrl + 'messages/delete',
                    data : {
                        id : id
                    }
                })
                message.fadeOut();
        
        return false;
    });

    //chatbox
    $(document).on('click', '.chatbox-container .opener', function() {
        var indicator = $('.chatbox-container .indicator');
        var chatbox = $('.chat-list');

        if (chatbox.css('display') == 'block') {
            //indicator.fadeOut();
            chatbox.fadeOut();
        } else {
            //indicator.fadeIn();
            chatbox.fadeIn();
            $.ajax({
                url : baseUrl + 'messages/online',
                success : function(data) {
                    chatbox.html(data).fadeIn();
                    indicator.hide();
                }
            })
        }
        return false;
    });

    $(document).on('click', '.chat-online-status a', function () {
        var chatbox = $('.chat-list');
        if (chatbox.css('display') == 'none') {
            $('.chatbox-container .opener').click();
        }
    });

    $(document).on('click', '.chat-online-status .dropdown-menu a', function(){
         var v = $(this).data('value');
         var t = $(this).html();
         var c = $('.chat-online-status .online-status');
         c.html(t);
         $('body').click();
         $.ajax({
            url : baseUrl + 'set/online/status',
            data : {status : v}
         });
         return false;
    });

    if (isLogin == 'true') {
        initiateUpdateCheck();
    }
    window.updateCheck = false;
    window.lastAccess = '';
    function initiateUpdateCheck() {

        clearInterval(window.updateCheck);
            var postLastCheck = 0;
            var postType = '';
            var postUserid = '';


            if ($('#post-list').length) {
                var oPost = $('#post-list');
                postType = oPost.data('type');
                postLastCheck = oPost.data('lastcheck');
                if (oPost.data('userid') != undefined) {
                    postUserid = oPost.data('userid');
                }
            }

            var cConversation = 0
            var messagelastcheck = 0;
            if($('.message-list-container').length) {
                cConversation = $('.message-list-container').data('userid');
                messagelastcheck  = $('.message-list-container').data('lastcheck');
            }

            $.ajax({
                url :baseUrl + 'user/update',
                type : 'POST',
                data : {
                    postType : postType,
                    messageuserid : cConversation,
                    messagelastcheck : messagelastcheck,
                    postlastcheck : postLastCheck,
                    postUserid : postUserid,
                    lastaccess : window.lastAccess
                },
                success : function(data) {
                    data = jQuery.parseJSON(data);

                    if (data.status == 'login') {
                        return false;
                    } else {
                        //dispatch the return results
                        window.lastAccess = data.lastaccess;
                        alertUser = false;
                            $('.message-list-container').data('lastcheck', data.messagelastcheck)
                            $('#post-list').data("lastcheck", data.postlastcheck);

                        if (data.notifications != undefined) {
                            var nT = $('#notification-dropdown-trigger');
                            var cnT = $('.notification-dropdown-trigger');

                            if (data.notifications != '0') {

                                if (!nT.find('span').length) {
                                    cnT.append('<span></span>');
                                }
                                var nTSpan = nT.find('span');
                                if (nTSpan.html() != '') {
                                    if (nTSpan.html() != data.notifications) {
                                        alertUser = true;
                                    }
                                } else {
                                    alertUser = true;
                                }
                                cnT.find('span').html(data.notifications).show();
                                //alert(data.notifications)
                            } else {
                                cnT.find('span').html('').hide();
                            }
                        }

                        if (data.requests != undefined) {
                            $('.friends-online-count').html(data.onlines);
                            var rT = $('#friend-request-trigger');
                            var crT = $('.friend-request-trigger');
                            if(data.requests != '0') {

                                if (!rT.find('span').length) {
                                    crT.append('<span></span>');
                                }

                                var rTSpan = rT.find('span');
                                if (rTSpan.html() != '') {
                                    if (rTSpan.html() != data.requests) {
                                        alertUser = true;
                                    }
                                } else {
                                    alertUser = true;
                                }
                                crT.find('span').html(data.requests).show();
                            } else {
                                crT.find('span').html('').hide();
                            }
                        }

                        var mT = $('#new-messages-trigger');
                        var cmT = $('.new-messages-trigger');

                        if(data.unreadmessage != 0) {
                            if (!mT.find('span').length) {
                                cmT.append('<span></span>');
                            }

                            var mTSpan = mT.find('span');
                            if (mTSpan.html() != '') {
                                if (mTSpan.html() != data.unreadmessage) {
                                    alertUser = true;
                                }
                            } else {
                                alertUser = true;
                            }

                            cmT.find('span').html(data.unreadmessage).show()
                        } else {
                            cmT.find('span').html('').hide();
                        }

                        if (data.messages != undefined && data.messages != '') {
                            $('.message-list-container').append(data.messages);
                            //alertUser = true;
                        }

                        //if there is post too
                        if (data.posts != undefined && data.posts != '') {
                            var div = $('<div></div>');
                            div.html(data.posts);
                            $('#post-list').prepend(div);
                            //loadEmoticonPopover(div)
                        }


                        reloadPlugins(true);



                        if (!document.hasFocus() && alertUser) {

                            document.getElementById('update-sound').play();
                        }


                    }


                    window.updateCheck = setInterval(function() {
                        initiateUpdateCheck();
                    }, updateSpeed);
                },
                error : function() {
                    initiateUpdateCheck();
                }
            });

    }


    //friend request dropdown
    $(document).on('click', '#friend-request-trigger', function() {
        
        var l = $(this);
        var d = $('.request-dropdown');
        $('.header-dropdown-box').hide(); //hide others
        d.fadeIn().find('.indicator').show();

        //$(this).find('span').remove();
        $.ajax({
            url : baseUrl + 'connection/dropdown',
            success : function(data)
            {
                d.find('.content').html(data);
                
                d.find('.indicator').hide();
            }
        });
        d.find('.footer-link').unbind().click(function() {
            d.fadeOut();
        });
        d.find('.close-button').unbind().click(function() {
            d.fadeOut();
            return false;
        })
        return false;
    });


    $(document).on('click', '.response-friend-request', function() {
        var url = $(this).attr('href');
        var type = $(this).data('type');
        var id = $(this).data('id');
        var c = $("#friend-request-" + id);
        if (type == 'reject') {
            c.fadeOut();
        } else {
            c.find('.response-friend-request').remove();
            c.find('#visit-profile-link').fadeIn();
        }

        $.ajax({
            url:url,
            cache : false,
            success: function(data) {
            var rT = $('#friend-request-trigger');
            var crT = $('.friend-request-trigger');

            if(data != '0') {

                if (!rT.find('span').length) {
                    crT.append('<span></span>');
                }

                crT.find('span').html(data).show();
            } else {
                crT.find('span').html('').hide();
            }
        }});
        return false;
    });

});var Pagelet = {
    list : [],

    process : function(){
        $('.pagelets').each(function() {
            var pagelet = $(this);

            if (jQuery.inArray(pagelet.data('id'), Pagelet.list) != -1) {

            } else {

                Pagelet.list.push(pagelet.data('id'));

                $.ajax({
                    url : baseUrl + 'load/pagelets',
                    data : {pagelets : pagelet.data('content')},
                    type : 'POST',
                    success : function(c) {
                        //Pagelet.removeIndicator(pagelet);
                        pagelet.hide().html(c).slideDown();
                        Pagelet.process();//do process again
                        reloadPlugins();
                        nailImages();
                    },
                    error : function() {
                        Pagelet.reset();
                        Pagelet.process();
                    }
                })
            }
        })
    },

    reset : function() {
        this.list = [];
    }
}

$(function() {
    Pagelet.process();
})