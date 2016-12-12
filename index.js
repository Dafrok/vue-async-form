(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueIscrollLite"] = factory();
	else
		root["VueIscrollLite"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(1)

	/* template */
	var __vue_template__ = __webpack_require__(2)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/baidu/Documents/Github/vue-async-form/src/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-cd0c6d26", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-cd0c6d26", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 1 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//

	export default {
	  props: ['accept-charset', 'action', 'autocomplete', 'enctype', 'method', 'name', 'novaidate', 'target'],
	  methods: {
	    _serilize($form) {
	      return {
	        multipart() {
	          return new FormData($form);
	        },
	        urlEncoded() {
	          let ret = '';
	          for (let i = 0; i < $form.length; i++) {
	            ret += `${ encodeURIComponent(name) }=${ encodeURIComponent($form[i].value) }${ i === $form.length - 1 ? '' : '&' }`;
	          }
	          return ret;
	        }
	      };
	    },
	    submit(e) {
	      const { action, acceptCharset, autoComplete, enctype, method, name, novalidate, target } = this;
	      let fetchUrl = action;
	      const serilizer = this._serilize(e.target);
	      const options = {
	        headers: {
	          "Content-Type": enctype || "application/x-www-form-urlencoded"
	        },
	        mode: "no-cors",
	        credentials: 'include',
	        methods: method
	      };
	      switch (method.toUpperCase()) {
	        case 'GET':
	          fetchUrl = serilizer.urlEncoded();
	        default:
	          if (options.headers["Content-Type"] === "application/x-www-form-urlencoded") {
	            options.body = serilizer.urlEncoded();
	          } else {
	            options.body = serilizer.multipart();
	          }
	      }
	      fetch(action, options).then(res => this.$emit('response')).catch(res => this.$emit('disconnect'));
	    }
	  }
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('form', {
	    on: {
	      "submit": function($event) {
	        $event.preventDefault();
	        _vm.submit($event)
	      }
	    }
	  }, [_vm._t("default")])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-cd0c6d26", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;