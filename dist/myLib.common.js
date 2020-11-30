module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1a28":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StandardComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d748");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StandardComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StandardComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1b3d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavMenu3_vue_vue_type_style_index_0_id_661bd4be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3961");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavMenu3_vue_vue_type_style_index_0_id_661bd4be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavMenu3_vue_vue_type_style_index_0_id_661bd4be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "3961":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d748":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "StandardComponent", function() { return /* reexport */ components_StandardComponent; });
__webpack_require__.d(__webpack_exports__, "FunctionalComponent", function() { return /* reexport */ components_FunctionalComponent; });
__webpack_require__.d(__webpack_exports__, "MagnifyingGlass", function() { return /* reexport */ components_MagnifyingGlass; });
__webpack_require__.d(__webpack_exports__, "TopNavMenu3", function() { return /* reexport */ components_TopNavMenu3; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2fff9a73-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/StandardComponent/StandardComponent.vue?vue&type=template&id=627600cc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"white-body-view"},[_c('div',{staticClass:"content-view"},_vm._l((_vm.dataList),function(item,index){return _c('div',{key:index,staticClass:"item",attrs:{"id":'item' + index}},[_c('span',[_vm._v("item: "+_vm._s(item.name))])])}),0)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/StandardComponent/StandardComponent.vue?vue&type=template&id=627600cc&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/StandardComponent/StandardComponent.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var StandardComponentvue_type_script_lang_js_ = ({
  name: 'standard-component',
  data: function data() {
    return {
      dataList: [{
        name: '1'
      }, {
        name: '2'
      }, {
        name: '3'
      }, {
        name: '4'
      }, {
        name: '5'
      }, {
        name: '6'
      }, {
        name: '7'
      }, {
        name: '8'
      }, {
        name: '9'
      }, {
        name: '10'
      }, {
        name: '11'
      }, {
        name: '12'
      }]
    };
  },
  mounted: function mounted() {
    document.getElementById('item5').scrollIntoView();
  }
});
// CONCATENATED MODULE: ./src/components/StandardComponent/StandardComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var StandardComponent_StandardComponentvue_type_script_lang_js_ = (StandardComponentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/StandardComponent/StandardComponent.vue?vue&type=style&index=0&lang=css&
var StandardComponentvue_type_style_index_0_lang_css_ = __webpack_require__("1a28");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/StandardComponent/StandardComponent.vue






/* normalize component */

var component = normalizeComponent(
  StandardComponent_StandardComponentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var StandardComponent = (component.exports);
// CONCATENATED MODULE: ./src/components/StandardComponent/index.js

/* harmony default export */ var components_StandardComponent = (StandardComponent);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2fff9a73-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FunctionalComponent/FunctionalComponent.vue?vue&type=template&id=6337de0a&functional=true&
var FunctionalComponentvue_type_template_id_6337de0a_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('div',[_vm._t("default")],2)}
var FunctionalComponentvue_type_template_id_6337de0a_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FunctionalComponent/FunctionalComponent.vue?vue&type=template&id=6337de0a&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FunctionalComponent/FunctionalComponent.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var FunctionalComponentvue_type_script_lang_js_ = ({
  // change this!
  name: 'functional-component'
});
// CONCATENATED MODULE: ./src/components/FunctionalComponent/FunctionalComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var FunctionalComponent_FunctionalComponentvue_type_script_lang_js_ = (FunctionalComponentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/FunctionalComponent/FunctionalComponent.vue





/* normalize component */

var FunctionalComponent_component = normalizeComponent(
  FunctionalComponent_FunctionalComponentvue_type_script_lang_js_,
  FunctionalComponentvue_type_template_id_6337de0a_functional_true_render,
  FunctionalComponentvue_type_template_id_6337de0a_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var FunctionalComponent = (FunctionalComponent_component.exports);
// CONCATENATED MODULE: ./src/components/FunctionalComponent/index.js

/* harmony default export */ var components_FunctionalComponent = (FunctionalComponent);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2fff9a73-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MagnifyingGlass/MagnifyingGlass.vue?vue&type=template&id=509e4ff4&
var MagnifyingGlassvue_type_template_id_509e4ff4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ccui-magnifying-glass",staticStyle:{"width":"100px","height":"100px","background":"red"}})}
var MagnifyingGlassvue_type_template_id_509e4ff4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MagnifyingGlass/MagnifyingGlass.vue?vue&type=template&id=509e4ff4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MagnifyingGlass/MagnifyingGlass.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var MagnifyingGlassvue_type_script_lang_js_ = ({
  name: 'magnifying-glass'
});
// CONCATENATED MODULE: ./src/components/MagnifyingGlass/MagnifyingGlass.vue?vue&type=script&lang=js&
 /* harmony default export */ var MagnifyingGlass_MagnifyingGlassvue_type_script_lang_js_ = (MagnifyingGlassvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MagnifyingGlass/MagnifyingGlass.vue





/* normalize component */

var MagnifyingGlass_component = normalizeComponent(
  MagnifyingGlass_MagnifyingGlassvue_type_script_lang_js_,
  MagnifyingGlassvue_type_template_id_509e4ff4_render,
  MagnifyingGlassvue_type_template_id_509e4ff4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MagnifyingGlass = (MagnifyingGlass_component.exports);
// CONCATENATED MODULE: ./src/components/MagnifyingGlass/index.js

/* harmony default export */ var components_MagnifyingGlass = (MagnifyingGlass);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2fff9a73-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TopNavMenu3/TopNavMenu3.vue?vue&type=template&id=661bd4be&scoped=true&
var TopNavMenu3vue_type_template_id_661bd4be_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ccui-top-nav-menu3",style:(_vm.style1)},[_c('div',{staticClass:"sub-menu-wrapper-wrapper"},[_c('div',{staticClass:"sub-menu-wrapper",style:(_vm.style)},[_c('div',{staticClass:"logo-container"},[(_vm.dashboard)?_c('router-link',{attrs:{"to":_vm.dashboard}},[_c('img',{staticClass:"src",staticStyle:{"height":"40px","width":"40px","border":"0"},attrs:{"src":_vm.logo,"alt":""}}),_c('span',{staticClass:"app-name"},[_c('p',{staticClass:"appTitle"},[_vm._v(_vm._s(_vm.appTitle))]),_c('p',{staticClass:"companyTitle",attrs:{"title":_vm.companyTitle}},[_vm._v(_vm._s(_vm.companyTitle))])])]):_vm._e(),(!_vm.dashboard)?_c('div',{staticClass:"cursorPointer",staticStyle:{"display":"flex"}},[_c('img',{staticClass:"src",staticStyle:{"height":"40px","width":"40px","border":"0"},attrs:{"src":_vm.logo,"alt":""}}),_c('span',{staticClass:"app-name"},[_c('p',{staticClass:"appTitle"},[_vm._v(_vm._s(_vm.appTitle))]),_c('p',{staticClass:"companyTitle",attrs:{"title":_vm.companyTitle}},[_vm._v(_vm._s(_vm.companyTitle))])])]):_vm._e()],1),_c('ul',{staticClass:"nav"},_vm._l((_vm.subMenu1),function(item,index){return _c('li',{staticClass:"nav-item",on:{"click":function($event){return _vm.skip(item)}}},[_c('router-link',{attrs:{"redirect":item.m,"to":{ path: item.url}}},[_c('span',[_vm._v(_vm._s(item.name))])])],1)}),0),_c('i',{staticClass:"icon-ccui-help",on:{"click":_vm.ccuiHelp}})])])])}
var TopNavMenu3vue_type_template_id_661bd4be_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/TopNavMenu3/TopNavMenu3.vue?vue&type=template&id=661bd4be&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TopNavMenu3/TopNavMenu3.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TopNavMenu3vue_type_script_lang_js_ = ({
  name: 'top-nav-menu3',
  props: {
    appTitle: String,
    companyTitle: String,
    minWidth: {
      type: String,
      default: '1180px'
    },
    Width: {
      type: String,
      default: '1080px'
    },
    width: {
      type: String,
      default: 'auto'
    },
    maxWidth: String,
    logo: {
      type: String,
      default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAEoklEQVRYR72YeYjVVRTHP99220xbKCraI7KFTAgK0ZdNJUhEJFFJ2Dpt9EcLbQQzJGS0GBFFJlEklVNUtGCUwqQ1tCBW0F6klUQxpRmUrSe+w33wGN979/7eczp/vnd+537vWb/niv9BImJH4CRgF+BVSb+VHqtSxU70ImI34GLgLOB+4FlJ/1SxNSYAI2J74ALgVuArYK6kb6sAq+tucYARcTywIIV0AOiVtLETcP5miwCMiInAPsAZwC2Ac26Jwyvp907BdQwwIrYGpgDnAqcC+wMO67ZAAF8C2wFDwFPA8iqF0XihSh6MCOufBtwOTAa2auKd94AXk47/NuA1KeyLqnq0GGBE7AXcm7zWDJjBDAM9wA3AeaPAG+i7wBWSVpeGvQhgRBwKvABMamP4b+Aq4AngLeC4Fro/psKxvaxkAUbEgcAy4JCMtcEUfjdj56B7YCvZAMyR9EoOYVuAEbGDOz8wLWPIk6FH0lBEHAx8DriQ2slHwMxcf8wBnJeabe6iLoozJUVEHA2836KARttZDFwi6Y9WB7QEmPLOB+2UQWfjp0h6c6RkqwF0j5zdLtTtAD7oisu5DlgJzJD0VwJ4JPBhQYjrpp2HZ0va1OyspgAjYnyaobtnALp1XCvpvrpeROwBfA3sXHA5q6x3cUly/9xMWgF0M3Zx5MReO1bSJw0APebeAY7KfZz+9yWvk+T5XQzwLuD6ggMcysmNFCqNwUcTmykwMaIy0Ltw1ZyFvVNG0qRRWnlwOXByQXgflrRZnkbEbODpwkr2MR/0D26Y3leb4P5YBNAczv2snfwLXCTp8UaliHDVm6TenchDiRfX3Dy4qTa/Ns4zuwjgd8C+GcsOx1RJzje3F8/nc4B+4LASVA06625bsbE2b9r4L0oBlnjwV3tZ0nCqehOJuRXC2oilsgdfd/PNeMEU/gBg18T5Zlb0WqP66puWra/d2TPxl1IPzgduzBz4dqL1i4ALuwDnTwf6Bzm/ryYzoqIcnAG8lgnXy8BDwEsdhrUOxH3wGkkPNLtkqzbj309PXpzaAsDzgCdOrh3lnPuz1wZJq4oBpqocB3g+npDahhcis+q6fAqYyG6TQ9Dif3cBj7dHgCcl/VkVoBch0/YF/jhtbncAlyVDDk2W8DYcan2vn5+l9HnOpCK3yOf4YB9wInCppLUR4dw0u7Z4Vt8DHAOYde89ipoZkHeUdQnUxyYRkn6q4vEcQK+OLgavmN7kvEc4Vya4OCQ57GMq2RBFhCfKG2n0OTz2lPeNIUl+EKokaeIcBHxT55DtDGQBpoJxCJ9Jnqzb+yHl40pJ5nQtJYHyKuCK96VMMjwMslIEMIF0WE0A/ChUr1znmbu/R6NzbG0qBH9i2/ulSve6as97bl8uybpFUgywbi0ipqcGfUTRCWDW4y3Pl1vcbkFqZq8ywOTNWel5YymwJ3A44BXVjMZedU/7HliRHpGcBk13jtwlOwVoWu+Hoce8j0SEm7qLyaG3x4YleUJ0LR0BTF682kUjyRRrzKQbgKZZfgOclZsG3aDvGGDy4pXAUkleM8dEugXo3XdSnfaPBcKuAI4FoNE2/wMMMIY4QGNTMwAAAABJRU5ErkJggg=='
    },
    dashboard: String,
    subMenu: Array,
    defaultIndex: String
  },
  data: function data() {
    return {
      visible: false,
      subMenu1: [],
      subMenu2: []
    };
  },
  mounted: function mounted() {
    this.subMenu1 = this.subMenu;

    if (this.subMenu.length > 8) {
      this.subMenu2 = this.subMenu.slice(9);
      this.subMenu1 = this.subMenu.slice(0, 9);
    } else {
      this.subMenu1 = this.subMenu;
    }
  },
  methods: {
    skip: function skip(item) {
      this.$emit('onSubmitSkip', item);
    },
    ccuiHelp: function ccuiHelp(item) {
      this.$emit('ccuiHelp', item);
    }
  },
  watch: {
    subMenu: function subMenu() {
      console.log('111111', this.subMenu);
      this.subMenu1 = this.subMenu;

      if (this.subMenu.length > 8) {
        this.subMenu2 = this.subMenu.slice(9);
        this.subMenu1 = this.subMenu.slice(0, 9);
      } else {
        this.subMenu1 = this.subMenu;
      }
    }
  },
  computed: {
    style: function style() {
      var style = {};
      style.margin = '0 auto';
      style.maxWidth = '1730px';
      return style;
    },
    style2: function style2() {
      var style = {};
      style.height = '80px';
      style.margin = '0 auto';
      style.maxWidth = '1740px';
      style.paddinTop = '15px';
      return style;
    },
    style1: function style1() {
      var style1 = {};
      style1.minWidth = this.minWidth;
      style1.width = this.width;
      style1.margin = ' 0 auto';
      return style1;
    }
  }
});
// CONCATENATED MODULE: ./src/components/TopNavMenu3/TopNavMenu3.vue?vue&type=script&lang=js&
 /* harmony default export */ var TopNavMenu3_TopNavMenu3vue_type_script_lang_js_ = (TopNavMenu3vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/TopNavMenu3/TopNavMenu3.vue?vue&type=style&index=0&id=661bd4be&scoped=true&lang=css&
var TopNavMenu3vue_type_style_index_0_id_661bd4be_scoped_true_lang_css_ = __webpack_require__("1b3d");

// CONCATENATED MODULE: ./src/components/TopNavMenu3/TopNavMenu3.vue






/* normalize component */

var TopNavMenu3_component = normalizeComponent(
  TopNavMenu3_TopNavMenu3vue_type_script_lang_js_,
  TopNavMenu3vue_type_template_id_661bd4be_scoped_true_render,
  TopNavMenu3vue_type_template_id_661bd4be_scoped_true_staticRenderFns,
  false,
  null,
  "661bd4be",
  null
  
)

/* harmony default export */ var TopNavMenu3 = (TopNavMenu3_component.exports);
// CONCATENATED MODULE: ./src/components/TopNavMenu3/index.js

/* harmony default export */ var components_TopNavMenu3 = (TopNavMenu3);
// CONCATENATED MODULE: ./src/components/index.js




// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ })

/******/ });
//# sourceMappingURL=myLib.common.js.map