parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"eEXO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const a={USD:"United States Dollar",AUD:"Australian Dollar",BGN:"Bulgarian Lev",BRL:"Brazilian Real",CAD:"Canadian Dollar",CHF:"Swiss Franc",CNY:"Chinese Yuan",CZK:"Czech Republic Koruna",DKK:"Danish Krone",GBP:"British Pound Sterling",HKD:"Hong Kong Dollar",HRK:"Croatian Kuna",HUF:"Hungarian Forint",IDR:"Indonesian Rupiah",ILS:"Israeli New Sheqel",INR:"Indian Rupee",JPY:"Japanese Yen",KRW:"South Korean Won",MXN:"Mexican Peso",MYR:"Malaysian Ringgit",NOK:"Norwegian Krone",NZD:"New Zealand Dollar",PHP:"Philippine Peso",PLN:"Polish Zloty",RON:"Romanian Leu",RUB:"Russian Ruble",SEK:"Swedish Krona",SGD:"Singapore Dollar",THB:"Thai Baht",TRY:"Turkish Lira",ZAR:"South African Rand",EUR:"Euro"};var e=a;exports.default=e;
},{}],"QvaY":[function(require,module,exports) {
"use strict";var e=u(require("./money.js"));function u(e){return e&&e.__esModule?e:{default:e}}console.log(e.default);
},{"./money.js":"eEXO"}]},{},["QvaY"], null)
//# sourceMappingURL=/js.a2281c89.js.map