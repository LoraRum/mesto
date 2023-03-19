(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n,r,o,i,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._templateSelector=e,this._userInfo=r,this._api=o,this._popupFullScreen=i,this._popupDeleteConfirmation=u,this._cardElement=this._getTemplate(),this._imageElement=this._cardElement.querySelector(".group__image"),this._likeElement=this._cardElement.querySelector(".group__like"),this._textElement=this._cardElement.querySelector(".group__text"),this._likesElement=this._cardElement.querySelector(".group__like-sum"),this._buttonElement=this._cardElement.querySelector(".group__remove"),this._setCardData(n),this._setEventListeners()}var n,r;return n=t,(r=[{key:"render",value:function(){return this._cardElement}},{key:"_setCardData",value:function(t){this._cardData=t,this._textElement.textContent=this._cardData.name,this._imageElement.src=this._cardData.link,this._imageElement.alt=this._cardData.name,this._likesElement.textContent=this._cardData.likes.length;var e=this._userInfo.getId();this._hasOwnLike()?this._likeElement.classList.add("group__like_active"):this._likeElement.classList.remove("group__like_active"),e!==this._cardData.owner._id&&this._buttonElement.remove()}},{key:"_handleRemove",value:function(){var t=this;this._popupDeleteConfirmation.setOnSubmit((function(){t._api.removeCard(t._cardData._id).then((function(){return t._cardElement.remove()})).catch((function(t){return console.log(t)}))})),this._popupDeleteConfirmation.open()}},{key:"_handleLike",value:function(){var t=this;this._hasOwnLike()?this._api.dislikeCard(this._cardData._id).then((function(e){t._setCardData(e)})).catch(console.log):this._api.likeCard(this._cardData._id).then((function(e){t._setCardData(e)}))}},{key:"_hasOwnLike",value:function(){var t=this._userInfo.getId();return this._cardData.likes.some((function(e){return e._id===t}))}},{key:"_handlePopup",value:function(){this._popupFullScreen.open(this._cardData)}},{key:"_setEventListeners",value:function(){this._buttonElement.addEventListener("click",this._handleRemove.bind(this)),this._likeElement.addEventListener("click",this._handleLike.bind(this)),this._imageElement.addEventListener("click",this._handlePopup.bind(this))}},{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".group").cloneNode(!0)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();const r=n;var o={inputSelector:".input",submitButtonClass:".form__save",inactiveButtonClass:"form__save_unavailable",inputClassError:".input_type_error",errorClass:"input_error_active"};function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===i(o)?o:String(o)),r)}var o}const a=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=n,this._formElement=e,this._inputList=Array.from(e.querySelectorAll(this._config.inputSelector)),this._buttonElement=e.querySelector(this._config.submitButtonClass)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));e.classList.add(this._config.inputClassError),e.textContent=t.validationMessage,t.classList.add(this._config.errorClass)}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));e.classList.remove(this._config.inputClassError),e.textContent="",t.classList.remove(this._config.errorClass)}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_hasInvalidInput",value:function(t){return t.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?this.disableSubmitButton():(this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"disableSubmitButton",value:function(){this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"checkSubmitButton",value:function(){this._toggleButtonState()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}const l=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.addItem=this.addItem.bind(this),this._items=r,this._renderer=o,this._container=document.querySelector(n),this.renderItems()}var e,n;return e=t,(n=[{key:"renderItems",value:function(){this._items.forEach(this.addItem)}},{key:"addItem",value:function(t){this._container.prepend(this._renderer(t))}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}const y=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupSelector=e,this._popupElement=document.querySelector(this._popupSelector),this.open=this.open.bind(this),this.close=this.close.bind(this),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popupElement.querySelector(".popup__close").addEventListener("click",(function(){return t.close()})),this._popupElement.addEventListener("mousedown",(function(e){e.target===t._popupElement&&t.close()}))}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},b.apply(this,arguments)}function v(t,e){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},v(t,e)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}const S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=_(r);if(o){var n=_(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return d(t)}(this,t)});function u(t,e){var n,r=e.onSubmit,o=e.onOpen;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._onSubmit=r,n._onOpen=o,n._form=n._popupElement.querySelector(".form__form"),n._inputList=n._form.querySelectorAll("input"),n._buttonSave=n._form.querySelector(".form__save"),n._handleSubmit=n._handleSubmit.bind(d(n)),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){b(_(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleSubmit)}},{key:"_handleSubmit",value:function(t){var e=this;t.preventDefault();var n=this._getInputValues();this._buttonSave.textContent="Сохранение...",this._onSubmit(n).then((function(){e._buttonSave.textContent="Сохранить",e.close()}))}},{key:"open",value:function(){b(_(u.prototype),"open",this).call(this),"function"==typeof this._onOpen&&this._onOpen()}},{key:"close",value:function(){b(_(u.prototype),"close",this).call(this),this._form.reset()}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},w.apply(this,arguments)}function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},k(t,e)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}const j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(r);if(o){var n=O(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popupElement.querySelector(".fullscreen-image__image"),e._popupText=e._popupElement.querySelector(".fullscreen-image__text"),e}return e=u,(n=[{key:"open",value:function(t){var e=t.name,n=t.link;this._popupImage.src=n,this._popupImage.alt=e,this._popupText.textContent=e,w(O(u.prototype),"open",this).call(this)}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}const L=function(){function t(e){var n=e.userNameSelector,r=e.aboutSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userNameElement=document.querySelector(n),this._aboutElement=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{username:this._userNameElement.textContent,about:this._aboutElement.textContent}}},{key:"setUserInfo",value:function(t){var e=t.username,n=t.about;this._userNameElement.textContent=e,this._aboutElement.textContent=n}},{key:"getId",value:function(){return this._id}},{key:"setId",value:function(t){this._id=t}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}const R=function(){function t(e){var n=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._avatarElement=document.querySelector(n)}var e,n;return e=t,(n=[{key:"getUserAvatar",value:function(){return{link:this._avatarElement.src}}},{key:"setUserAvatar",value:function(t){this._avatarElement.src=t}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}const U=function(){function t(e){var n=e.baseUrl,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._headers=r}var e,n;return e=t,(n=[{key:"_handleResponse",value:function(t){return t.ok?t.json():Promise.reject("Error: ".concat(t.status))}},{key:"updateUserInfo",value:function(t){var e=t.name,n=t.about;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:n})}).then(this._handleResponse)}},{key:"editAvatar",value:function(t){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatar})}).then(this._handleResponse)}},{key:"addCard",value:function(t){var e=t.name,n=t.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:n})}).then(this._handleResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then(this._handleResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then(this._handleResponse)}},{key:"removeCard",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._handleResponse(t)}))}},{key:"likeCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(t),{method:"PUT",headers:this._headers}).then(this._handleResponse)}},{key:"dislikeCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(t),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}}])&&D(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=J(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},A.apply(this,arguments)}function N(t,e){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},N(t,e)}function V(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function J(t){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},J(t)}const F=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&N(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=J(r);if(o){var n=J(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===x(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return V(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._form=e._popupElement.querySelector(".form__form"),e._handleSubmit=e._handleSubmit.bind(V(e)),e}return e=u,(n=[{key:"setEventListeners",value:function(){A(J(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleSubmit)}},{key:"_handleSubmit",value:function(t){t.preventDefault(),"function"==typeof this._onSubmit&&this._onSubmit(),this.close()}},{key:"setOnSubmit",value:function(t){this._onSubmit=t}},{key:"open",value:function(){A(J(u.prototype),"open",this).call(this),"function"==typeof this._onOpen&&this._onOpen()}}])&&B(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);var G=document.querySelector(".profile__edit-button"),H=document.querySelector(".profile__add-button"),z=document.querySelector(".avatar"),M=document.querySelector("#popup-user-profile .form__form"),K=document.querySelector("#popup-new-place .form__form"),Q=document.querySelector("#popup-change-avatar .form__form"),W=M.querySelector("#username"),X=M.querySelector("#about"),Y=Q.querySelector("#avatar"),Z=new R({avatarSelector:".avatar__image"}),$=new a(M,o),tt=new a(K,o),et=new a(Q,o),nt=new U({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-60",headers:{authorization:"6059afea-f832-4b2c-a73d-15748b82d9cd","Content-Type":"application/json"}}),rt=new S("#popup-user-profile",{onSubmit:function(t){return nt.updateUserInfo({name:t.username,about:t.about}).then((function(t){ct.setUserInfo({username:t.name,about:t.about}),rt.close()}))},onOpen:function(){$.disableSubmitButton();var t=ct.getUserInfo(),e=t.about,n=t.username;W.value=n,X.value=e,$.checkSubmitButton()}}),ot=new S("#popup-new-place",{onSubmit:function(t){return nt.addCard(t).then((function(t){st.addItem(t)}))},onOpen:function(){tt.disableSubmitButton()}}),it=new S("#popup-change-avatar",{onSubmit:function(t){return nt.editAvatar({avatar:t.avatar}).then((function(t){Z.setUserAvatar(t.avatar),it.close()}))},onOpen:function(){var t=Z.getUserAvatar().link;Y.value=t,et.checkSubmitButton()}}),ut=new j("#popup-fullscreen"),at=new F("#popup-delete-card"),ct=new L({userNameSelector:".profile__title",aboutSelector:".profile__subtitle"}),st=new l({items:[],renderer:function(t){return new r("#card-template",t,ct,nt,ut,at).render()}},".groups");st.renderItems(),G.addEventListener("click",rt.open),H.addEventListener("click",ot.open),z.addEventListener("click",it.open),$.enableValidation(),tt.enableValidation(),et.enableValidation(),rt.setEventListeners(),ot.setEventListeners(),ut.setEventListeners(),it.setEventListeners(),at.setEventListeners(),nt.getUserInfo().then((function(t){Z.setUserAvatar(t.avatar),ct.setUserInfo({username:t.name,about:t.about}),ct.setId(t._id),nt.getInitialCards().then((function(t){t.forEach((function(t){st.addItem(t)}))}))}))})();
//# sourceMappingURL=main.js.map