(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layouts_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/Layouts/Content */ "./resources/js/Layouts/Content.vue");
/* harmony import */ var _Pages_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/Pages/Login */ "./resources/js/Pages/Login.vue");
/* harmony import */ var _Store_Type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/Store/Type */ "./resources/js/Store/Type.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "App",
  components: {
    Login: _Pages_Login__WEBPACK_IMPORTED_MODULE_2__["default"],
    "loggedin-content": _Layouts_Content__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: {
    is_login: function is_login() {
      return this.$store.getters[_Store_Type__WEBPACK_IMPORTED_MODULE_3__["auth"].is_login];
    }
  },
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.$store.dispatch(_Store_Type__WEBPACK_IMPORTED_MODULE_3__["auth"].fetch);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  mounted: function mounted() {// console.log("mounted")
    // $(".preloader").fadeOut();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Content.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/Content.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layouts_Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/Layouts/Nav */ "./resources/js/Layouts/Nav.vue");
/* harmony import */ var _Layouts_Side__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/Layouts/Side */ "./resources/js/Layouts/Side.vue");
/* harmony import */ var _Layouts_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/Layouts/Footer */ "./resources/js/Layouts/Footer.vue");
/* harmony import */ var _Store_Type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Store/Type */ "./resources/js/Store/Type.js");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Content",
  components: {
    Side: _Layouts_Side__WEBPACK_IMPORTED_MODULE_1__["default"],
    Nav: _Layouts_Nav__WEBPACK_IMPORTED_MODULE_0__["default"],
    Footer: _Layouts_Footer__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    this.$store.dispatch(_Store_Type__WEBPACK_IMPORTED_MODULE_3__["other"].close_loading, true); // this is for close icon when navigation open in mobile view

    $(".nav-toggler").on('click', function () {
      $("#main-wrapper").toggleClass("show-sidebar");
      $(".nav-toggler i").toggleClass("ti-menu");
    });
    $(".search-box a, .search-box .app-search .srh-btn").on('click', function () {
      $(".app-search").toggle(200);
      $(".app-search input").focus();
    }); // ==============================================================
    // Resize all elements
    // ==============================================================

    $("body, .page-wrapper").trigger("resize");
    $(".page-wrapper").delay(20).show(); //****************************

    /* This is for the mini-sidebar if width is less then 1170*/
    //****************************

    var setsidebartype = function setsidebartype() {
      var width = window.innerWidth > 0 ? window.innerWidth : this.screen.width;

      if (width < 1170) {
        $("#main-wrapper").attr("data-sidebartype", "mini-sidebar");
      } else {
        $("#main-wrapper").attr("data-sidebartype", "full");
      }
    };

    $(window).ready(setsidebartype);
    $(window).on("resize", setsidebartype);
  },
  computed: {
    title: function title() {
      return this.$store.getters[_Store_Type__WEBPACK_IMPORTED_MODULE_3__["other"].title];
    }
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Footer.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/Footer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Footer"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Nav.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/Nav.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CONST__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CONST */ "./resources/js/CONST.js");
/* harmony import */ var _Store_Type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Store/Type */ "./resources/js/Store/Type.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Nav",
  data: function data() {
    return {// notifications:null,
      // count:0,
    };
  },
  mounted: function mounted() {},
  computed: {
    notifications: function notifications() {
      return [];
    },
    count: function count() {
      return this.notifications.length;
    }
  },
  created: function created() {// this.sync_notification()
  },
  beforeDestroy: function beforeDestroy() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Side.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/Side.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Store_Type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Store/Type */ "./resources/js/Store/Type.js");
/* harmony import */ var vue_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-avatar */ "./node_modules/vue-avatar/dist/vue-avatar.min.js");
/* harmony import */ var vue_avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_avatar__WEBPACK_IMPORTED_MODULE_1__);
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Side",
  components: {
    Avatar: vue_avatar__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  computed: {
    user: function user() {
      return this.$store.getters[_Store_Type__WEBPACK_IMPORTED_MODULE_0__["auth"].user];
    }
  },
  methods: {
    logout: function logout() {
      this.$store.dispatch(_Store_Type__WEBPACK_IMPORTED_MODULE_0__["auth"].logout);
    }
  },
  data: function data() {
    return {
      items: [{
        text: "Dashboard",
        to: {
          name: "dashboard"
        },
        icon_class: "mdi-view-dashboard-outline"
      }, {
        text: "Storages",
        to: {
          name: "storages"
        },
        icon_class: "mdi-view-dashboard-outline"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CONST__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/CONST */ "./resources/js/CONST.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Dashboard",
  data: function data() {
    return {
      img: undefined
    };
  },
  methods: {
    gotfile: function gotfile() {
      console.log("file i sgot");
    },
    uploadfile: function uploadfile(file) {
      if (!this.checkfile(file)) {
        return 1;
      }

      var data = new FormData();
      data.append('file', file);
      this.$axios.post("".concat(_CONST__WEBPACK_IMPORTED_MODULE_1__["ROOT_API"], "/media"), data).then(function (res) {
        console.log('response', res);
      });
    },
    upload: function () {
      var _upload = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        var input, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file, fr, result;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                input = this.$refs.fileinput;
                console.log(input.files);
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 5;
                _iterator = input.files[Symbol.iterator]();

              case 7:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 20;
                  break;
                }

                file = _step.value;
                fr = new FileReader();
                _context.next = 12;
                return fr.readAsDataURL(file);

              case 12:
                result = _context.sent;
                console.log("fr", fr.result);

                fr.onload = function (data) {
                  _this.img = data.target.result;
                };

                this.img = "";
                this.uploadfile(file);

              case 17:
                _iteratorNormalCompletion = true;
                _context.next = 7;
                break;

              case 20:
                _context.next = 26;
                break;

              case 22:
                _context.prev = 22;
                _context.t0 = _context["catch"](5);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 26:
                _context.prev = 26;
                _context.prev = 27;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 29:
                _context.prev = 29;

                if (!_didIteratorError) {
                  _context.next = 32;
                  break;
                }

                throw _iteratorError;

              case 32:
                return _context.finish(29);

              case 33:
                return _context.finish(26);

              case 34:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 22, 26, 34], [27,, 29, 33]]);
      }));

      function upload() {
        return _upload.apply(this, arguments);
      }

      return upload;
    }(),
    checkfile: function checkfile(file) {
      return true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Error404.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Error404.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Error404"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Login.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Login.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Store_Type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Store/Type */ "./resources/js/Store/Type.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "LoginV2",
  data: function data() {
    return {
      form: {
        // email:"",
        // password:"",
        email: "testing@mail.com",
        password: "123456"
      }
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    "login": _Store_Type__WEBPACK_IMPORTED_MODULE_1__["auth"].login
  }), {
    submit: function submit() {
      this.login(this.form);
    }
  }),
  mounted: function mounted() {
    var vm = this;

    (function ($) {
      "use strict";
      /*==================================================================
      [ Focus input ]*/

      $('.input100').each(function () {
        $(this).on('blur', function () {
          if ($(this).val().trim() != "") {
            $(this).addClass('has-val');
          } else {
            $(this).removeClass('has-val');
          }
        });
      });
      /*==================================================================
      [ Validate ]*/

      var input = $('.validate-input .input100');
      $('.validate-form').on('submit', function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
          if (validate(input[i]) == false) {
            showValidate(input[i]);
            check = false;
          }
        }

        return check;
      });
      $('.validate-form .input100').each(function () {
        $(this).focus(function () {
          hideValidate(this);
        });
      });

      function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
          if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            return false;
          }
        } else {
          if ($(input).val().trim() == '') {
            return false;
          }
        }
      }

      function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
      }

      function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
      }
      /*==================================================================
      [ Show pass ]*/


      var showPass = 0;
      $('.btn-show-pass').on('click', function () {
        if (showPass == 0) {
          $(this).next('input').attr('type', 'text');
          $(this).find('i').removeClass('zmdi-eye');
          $(this).find('i').addClass('zmdi-eye-off');
          showPass = 1;
        } else {
          $(this).next('input').attr('type', 'password');
          $(this).find('i').addClass('zmdi-eye');
          $(this).find('i').removeClass('zmdi-eye-off');
          showPass = 0;
        }
      });
    })(jQuery);

    $(".login100-form").find('input').keypress(function (e) {
      // Enter pressed?
      if (e.which === 10 || e.which === 13) {
        vm.login(vm.form);
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Settings/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SettingIndex"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Storages.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Storages.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CONST__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/CONST */ "./resources/js/CONST.js");
/* harmony import */ var _components_AudioComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AudioComponent */ "./resources/js/components/AudioComponent.vue");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Storages",
  components: {
    AudioComponent: _components_AudioComponent__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      medias: null,
      selected: {},
      add_rule: {
        // browse:{
        //     type:"button",
        //     text:"Browse",
        //     class:"btn btn-primary"
        // },
        cover: {
          type: "icon",
          column: "cover"
        },
        name: {
          type: "text",
          text: "Name"
        },
        genre: {
          type: "text",
          text: "Genre"
        },
        author: {
          type: "text",
          text: "Author"
        }
      }
    };
  },
  created: function created() {
    this.initialize();
  },
  methods: {
    initialize: function initialize() {
      this.medias = [{
        "name": "សបថនងអនសនយជមយគ-nam bunnarath new song 2014 non stop collection this month.mp3",
        "author": "nam",
        "genre": "roman",
        "cover": "/assets/images/no-image.png",
        "attachment": "https://www.googleapis.com/download/storage/v1/b/mediation-edd90.appspot.com/o/Cw1zwGXWlcVtA3Y1dZ8hVS5ALI0GaZGvaOvQgc2g.mpga?generation=1561089229726254&alt=media"
      }, {
        "name": "not alone",
        "author": "show lo",
        "genre": "roman",
        "cover": "https://www.googleapis.com/download/storage/v1/b/mediation-edd90.appspot.com/o/PXjybszh18NsuBAFApUjcs3uafWLI9LQcSK07yOw.jpeg?generation=1561088459416778&alt=media",
        "attachment": "https://www.googleapis.com/download/storage/v1/b/mediation-edd90.appspot.com/o/SV3HvYbUV4EODUHu4HiDE6f4uUPYOXLncezoDbew.mpga?generation=1561088459000052&alt=media"
      }, {
        "author": "Nam bun",
        "genre": "roman",
        "cover": "https://www.googleapis.com/download/storage/v1/b/mediation-edd90.appspot.com/o/k3MVjoCNibIG4UXnFvEJjVsmp6h6iBF1EvJwmCGc.jpeg?generation=1561088304478784&alt=media",
        "attachment": "https://www.googleapis.com/download/storage/v1/b/mediation-edd90.appspot.com/o/2QqVn47koWLKTSdiUVVPTvWpObbIQJ4P0l7uuVsi.mpga?generation=1561088303887273&alt=media",
        "name": "[ Town VCD Vol 22 ] Nam Bunnarath - Nov Kbae Ke Yu Yu Tov Oun Nerng Plich Bong (Khmer MV) 2012.mp3"
      }]; // this.$axios.get(`${ROOT_API}/medias`)
      //     .then(res => {
      //         this.medias = res.data
      //     })
    },
    PlayMusic: function PlayMusic(item) {
      this.$root.$emit('SHOW_MUSIC_MODAL', item);
    },
    submit_info: function submit_info() {
      var _this = this;

      var form = this.$refs.form.$el;
      var data = new FormData(form);
      data.append('attachment', this.selected.file);
      this.$axios.post("".concat(_CONST__WEBPACK_IMPORTED_MODULE_1__["ROOT_API"], "/media"), data).then(function (res) {
        _this.initialize();

        $("#UploadModal").modal('hide');
      });
    },
    browse_click: function browse_click() {
      var input = document.createElement('input');
      input.type = "file";
      input.onchange = this.cover_change;
      input.click();
    },
    cover_change: function () {
      var _cover_change = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(evt) {
        var _this2 = this;

        var file;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                file = evt.path[0].files[0];
                this.file_to_image(file).then(function (result) {
                  // console.log('image',result)
                  _this2.selected = _objectSpread({}, _this2.selected, {
                    cover: result
                  });
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function cover_change(_x) {
        return _cover_change.apply(this, arguments);
      }

      return cover_change;
    }(),
    upload_file_changed: function upload_file_changed(evt) {
      var file = evt.path[0].files[0];
      this.selected = {
        name: file.name,
        file: file,
        size: file.size,
        cover: "/assets/images/no-image.png"
      };
      $("#UploadModal").modal('show');
    },
    upload_click: function upload_click() {
      var input = document.createElement('input');
      input.type = "file";
      input.accept = "audio/*";
      input.onchange = this.upload_file_changed;
      input.click();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AudioComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AudioComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! plyr */ "./node_modules/plyr/dist/plyr.min.js");
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(plyr__WEBPACK_IMPORTED_MODULE_0__);
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AudioComponent",
  comp_name: "audio-play",
  props: ['music'],
  data: function data() {
    return {
      dat: {}
    };
  },
  created: function created() {},
  mounted: function mounted() {
    var vm = this;
    var player = new plyr__WEBPACK_IMPORTED_MODULE_0___default.a("#player");
    this.$root.$on("SHOW_MUSIC_MODAL", function (music) {
      vm.dat = music;
      $("#MusicModal").modal('show');
      player.media.src = music.attachment;
    });
    $("#MusicModal").on("hide.bs.modal", function () {
      console.log("hide");
      player.stop();
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Cover.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Cover.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Cover",
  comp_name: "file-cover",
  data: function data() {
    return {
      media: null
    };
  },
  props: ['item'],
  created: function created() {
    this.media = this.item;
    console.log("media", this.media);
  },
  methods: {
    Playmusic: function Playmusic() {
      console.log(_objectSpread({}, this.media));
      this.$emit('play_click', this.media);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CoverCard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CoverCard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CoverCard",
  comp_name: "card-cover",
  data: function data() {
    return {
      media: null
    };
  },
  props: ['item'],
  created: function created() {
    this.media = this.item;
    console.log("media", this.media);
  },
  methods: {
    play: function play() {
      console.log(_objectSpread({}, this.media));
      this.$emit('play_click', this.media);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FormGenerateV2",
  comp_name: "form-generate",
  props: ['inputs', 'data', "height", "savebtn"],
  data: function data() {
    return {
      temp_data: {},
      show_save: true
    };
  },
  created: function created() {
    this.temp_data = this.data;
    if (this.savebtn !== undefined) this.show_save = this.savebtn;
  },
  methods: {
    button_click: function button_click(name) {
      this.$emit("".concat(name, "_click"));
    },
    active_click: function active_click(key, item) {
      this.$set(item, key, !item[key]);
    },
    Save: function Save() {
      // console.log("temp",{...this.temp_data})
      this.$emit('OnSave', this.temp_data);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Image.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Image.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CONST__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/CONST */ "./resources/js/CONST.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ImageUpload",
  comp_name: "image-upload",
  props: ['src', "name"],
  data: function data() {
    return {
      temp_img: null
    };
  },
  created: function created() {
    this.temp_img = this.src;
  },
  methods: {
    ChooseImage: function ChooseImage() {
      var input = document.createElement("input");
      input.type = "file";
      input.name = this.name;
      input.style.display = "none";
      input.accept = "image/x-png,image/gif,image/jpeg";
      input.onchange = this.onChangelocal;
      input.click();
    },
    onChangelocal: function onChangelocal(evt) {
      var _this = this;

      var file = evt.target.files[0];
      this.file_to_image(file).then(function (result) {
        _this.temp_img = result;

        _this.$emit("afterChange");
      });
      this.$refs.image.append(evt.target);
    },
    onChange: function onChange(evt) {
      var _this2 = this;

      var formData = new FormData();
      formData.append("file", evt.target.files[0]);
      this.$axios.post("".concat(_CONST__WEBPACK_IMPORTED_MODULE_0__["ROOT_API"], "/media/save"), formData).then(function (res) {
        _this2.temp_img = res.data.location;

        _this2.$emit("afterChange");
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Nav.vue?vue&type=style&index=0&id=12bb96cf&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/Nav.vue?vue&type=style&index=0&id=12bb96cf&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".notification-area .mdi[data-v-12bb96cf] {\n  color: var(--primary);\n}\n.notification-area #noti[data-v-12bb96cf] {\n  font-size: 20pt;\n}\n.notification-area label[data-v-12bb96cf] {\n  text-align: right;\n  position: absolute;\n  right: 3px;\n  bottom: 5px;\n  z-index: 1;\n}\n.notification-area label span[data-v-12bb96cf] {\n  background: red;\n  color: white;\n}\n.dropdown-item[data-v-12bb96cf] {\n  background: var(--primary);\n}\n.dropdown-item h5[data-v-12bb96cf] {\n  text-align: center;\n}\n.navbar-right[data-v-12bb96cf] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AudioComponent.vue?vue&type=style&index=0&id=07fa7d1c&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AudioComponent.vue?vue&type=style&index=0&id=07fa7d1c&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".audio-container[data-v-07fa7d1c] {\n  position: relative;\n  width: 100%;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form.vue?vue&type=style&index=0&id=8048fca2&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form.vue?vue&type=style&index=0&id=8048fca2&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".form-v2[data-v-8048fca2] {\n  /*background-color: #EDF5F9;*/\n  /*border-left: var(--primary) 3px solid;*/\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  padding: 20px;\n  overflow-x: scroll;\n}\n.form-v2 label[data-v-8048fca2]:first-child {\n  font-weight: bold;\n}\n.form-v2 .items[data-v-8048fca2] {\n  max-width: 33%;\n}\n.label[data-v-8048fca2] {\n  background: gray;\n  color: white;\n  cursor: pointer;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n.label-active[data-v-8048fca2] {\n  background: #2CC3E9;\n  color: white;\n}\ndiv.footer[data-v-8048fca2] {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n@media screen and (max-width: 768px) {\n.form-v2[data-v-8048fca2] {\n    height: -webkit-fit-content !important;\n    height: -moz-fit-content !important;\n    height: fit-content !important;\n}\n.items[data-v-8048fca2] {\n    max-width: 100% !important;\n}\ndiv.footer[data-v-8048fca2] {\n    display: block;\n    position: relative;\n}\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Content.vue?vue&type=style&index=0&id=9099c5b6&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/Content.vue?vue&type=style&index=0&id=9099c5b6&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.page-wrapper[data-v-9099c5b6] {\n    overflow: scroll;\n    max-height: 90vh;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Side.vue?vue&type=style&index=0&id=5103cb4a&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/Side.vue?vue&type=style&index=0&id=5103cb4a&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.btn[data-v-5103cb4a]{\n    color: black;\n    font-size: 1rem;\n}\n.router-link-active[data-v-5103cb4a]{\n    color: white !important;\n    background: var(--primary);\n}\n#Userdd[data-v-5103cb4a]{\n    line-height: 2.5;\n}\n\n\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Login.vue?vue&type=style&index=0&id=0004d9e0&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Login.vue?vue&type=style&index=0&id=0004d9e0&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../sass/LoginV2/util.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./resources/sass/LoginV2/util.css"), "");
exports.i(__webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../sass/LoginV2/main.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./resources/sass/LoginV2/main.css"), "");

// Module
exports.push([module.i, "\n.has-val.input100 + .focus-input100[data-v-0004d9e0]::after{\n    top: -25px;\n}\n.alert-validate[data-v-0004d9e0]::after{\n    content: none;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CoverCard.vue?vue&type=style&index=0&id=66b1a3e8&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CoverCard.vue?vue&type=style&index=0&id=66b1a3e8&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.card-img-container[data-v-66b1a3e8] {\n    height: 80px;\n    width: 80px;\n    border-radius: 50%;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./resources/sass/LoginV2/main.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./resources/sass/LoginV2/main.css ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./fonts/poppins/Poppins-Regular.ttf */ "./resources/sass/LoginV2/fonts/poppins/Poppins-Regular.ttf"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ./fonts/poppins/Poppins-Medium.ttf */ "./resources/sass/LoginV2/fonts/poppins/Poppins-Medium.ttf"));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ./fonts/poppins/Poppins-Bold.ttf */ "./resources/sass/LoginV2/fonts/poppins/Poppins-Bold.ttf"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ./fonts/poppins/Poppins-SemiBold.ttf */ "./resources/sass/LoginV2/fonts/poppins/Poppins-SemiBold.ttf"));

// Module
exports.push([module.i, "\n\n\n\n/*//////////////////////////////////////////////////////////////////\n[ FONT ]*/\n@font-face {\n  font-family: gotham;\n  src: url(" + ___CSS_LOADER_URL___0___ + ");\n}\n@font-face {\n  font-family: Poppins-Medium;\n  src: url(" + ___CSS_LOADER_URL___1___ + ");\n}\n@font-face {\n  font-family: Poppins-Bold;\n  src: url(" + ___CSS_LOADER_URL___2___ + ");\n}\n@font-face {\n  font-family: Poppins-SemiBold;\n  src: url(" + ___CSS_LOADER_URL___3___ + ");\n}\n\n\n\n\n/*//////////////////////////////////////////////////////////////////\n[ RESTYLE TAG ]*/\n* {\n\tmargin: 0px; \n\tpadding: 0px; \n\tbox-sizing: border-box;\n}\nbody, html {\n\theight: 100%;\n\tfont-family: gotham, sans-serif;\n}\n\n/*---------------------------------------------*/\na {\n\tfont-family: gotham;\n\tfont-size: 14px;\n\tline-height: 1.7;\n\tcolor: #666666;\n\tmargin: 0px;\n\ttransition: all 0.4s;\n\t-webkit-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n}\na:focus {\n\toutline: none !important;\n}\na:hover {\n\ttext-decoration: none;\n  color: #6a7dfe;\n  color: -webkit-linear-gradient(left, #21d4fd, #b721ff);\n  color: -o-linear-gradient(left, #21d4fd, #b721ff);\n  color: -moz-linear-gradient(left, #21d4fd, #b721ff);\n  color: linear-gradient(left, #21d4fd, #b721ff);\n}\n\n/*---------------------------------------------*/\nh1,h2,h3,h4,h5,h6 {\n\tmargin: 0px;\n}\np {\n\tfont-family: gotham;\n\tfont-size: 14px;\n\tline-height: 1.7;\n\tcolor: #666666;\n\tmargin: 0px;\n}\nul, li {\n\tmargin: 0px;\n\tlist-style-type: none;\n}\n\n\n/*---------------------------------------------*/\ninput {\n\toutline: none;\n\tborder: none;\n}\ntextarea {\n  outline: none;\n  border: none;\n}\ntextarea:focus, input:focus {\n  border-color: transparent !important;\n}\ninput:focus::-webkit-input-placeholder { color:transparent;\n}\ninput:focus:-moz-placeholder { color:transparent;\n}\ninput:focus::-moz-placeholder { color:transparent;\n}\ninput:focus:-ms-input-placeholder { color:transparent;\n}\ntextarea:focus::-webkit-input-placeholder { color:transparent;\n}\ntextarea:focus:-moz-placeholder { color:transparent;\n}\ntextarea:focus::-moz-placeholder { color:transparent;\n}\ntextarea:focus:-ms-input-placeholder { color:transparent;\n}\ninput::-webkit-input-placeholder { color: #adadad;}\ninput:-moz-placeholder { color: #adadad;}\ninput::-moz-placeholder { color: #adadad;}\ninput:-ms-input-placeholder { color: #adadad;}\ntextarea::-webkit-input-placeholder { color: #adadad;}\ntextarea:-moz-placeholder { color: #adadad;}\ntextarea::-moz-placeholder { color: #adadad;}\ntextarea:-ms-input-placeholder { color: #adadad;}\n\n/*---------------------------------------------*/\nbutton {\n\toutline: none !important;\n\tborder: none;\n\tbackground: transparent;\n}\nbutton:hover {\n\tcursor: pointer;\n}\niframe {\n\tborder: none !important;\n}\n\n\n/*//////////////////////////////////////////////////////////////////\n[ Utility ]*/\n.txt1 {\n  font-family: gotham;\n  font-size: 13px;\n  color: #666666;\n  line-height: 1.5;\n}\n.txt2 {\n  font-family: gotham;\n  font-size: 13px;\n  color: #333333;\n  line-height: 1.5;\n}\n\n/*//////////////////////////////////////////////////////////////////\n[ login ]*/\n.limiter {\n  width: 100%;\n  margin: 0 auto;\n}\n.container-login100 {\n  width: 100%;  \n  min-height: 100vh;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  background: #f2f2f2;\n}\n.wrap-login100 {\n  width: 390px;\n  background: #fff;\n  border-radius: 10px;\n  overflow: hidden;\n  padding: 77px 55px 33px 55px;\n\n  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -o-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -ms-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n}\n\n\n/*------------------------------------------------------------------\n[ Form ]*/\n.login100-form {\n  width: 100%;\n}\n.login100-form-title {\n  display: block;\n  font-family: Poppins-Bold;\n  font-size: 30px;\n  color: #333333;\n  line-height: 1.2;\n  text-align: center;\n}\n.login100-form-title i {\n  font-size: 60px;\n}\n\n/*------------------------------------------------------------------\n[ Input ]*/\n.wrap-input100 {\n  width: 100%;\n  position: relative;\n  border-bottom: 2px solid #adadad;\n  margin-bottom: 37px;\n}\n.input100 {\n  font-family: gotham;\n  font-size: 15px;\n  color: #555555;\n  line-height: 1.2;\n\n  display: block;\n  width: 100%;\n  height: 45px;\n  background: transparent;\n  padding: 0 5px;\n}\n\n/*---------------------------------------------*/\n.focus-input100 {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n.focus-input100::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 0;\n  height: 2px;\n\n  -webkit-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  transition: all 0.4s;\n\n  background: #6a7dfe;\n  background: -webkit-linear-gradient(left, #21d4fd, #b721ff);\n  background: -o-linear-gradient(left, #21d4fd, #b721ff);\n  background: -moz-linear-gradient(left, #21d4fd, #b721ff);\n  background: linear-gradient(left, #21d4fd, #b721ff);\n}\n.focus-input100::after {\n  font-family: gotham;\n  font-size: 15px;\n  color: #999999;\n  line-height: 1.2;\n\n  content: attr(data-placeholder);\n  display: block;\n  width: 100%;\n  position: absolute;\n  top: 16px;\n  left: 0px;\n  padding-left: 5px;\n\n  -webkit-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  transition: all 0.4s;\n}\n.input100:focus + .focus-input100::after {\n  top: -15px;\n}\n.input100:focus + .focus-input100::before {\n  width: 100%;\n}\n.has-val.input100 + .focus-input100::after {\n  top: -15px;\n}\n.has-val.input100 + .focus-input100::before {\n  width: 100%;\n}\n\n/*---------------------------------------------*/\n.btn-show-pass {\n  font-size: 15px;\n  color: #999999;\n\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  height: 100%;\n  top: 0;\n  right: 0;\n  padding-right: 5px;\n  cursor: pointer;\n  -webkit-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  transition: all 0.4s;\n}\n.btn-show-pass:hover {\n  color: #6a7dfe;\n  color: -webkit-linear-gradient(left, #21d4fd, #b721ff);\n  color: -o-linear-gradient(left, #21d4fd, #b721ff);\n  color: -moz-linear-gradient(left, #21d4fd, #b721ff);\n  color: linear-gradient(left, #21d4fd, #b721ff);\n}\n.btn-show-pass.active {\n  color: #6a7dfe;\n  color: -webkit-linear-gradient(left, #21d4fd, #b721ff);\n  color: -o-linear-gradient(left, #21d4fd, #b721ff);\n  color: -moz-linear-gradient(left, #21d4fd, #b721ff);\n  color: linear-gradient(left, #21d4fd, #b721ff);\n}\n\n\n\n/*------------------------------------------------------------------\n[ Button ]*/\n.container-login100-form-btn {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding-top: 13px;\n}\n.wrap-login100-form-btn {\n  width: 100%;\n  display: block;\n  position: relative;\n  z-index: 1;\n  border-radius: 25px;\n  overflow: hidden;\n  margin: 0 auto;\n}\n.login100-form-bgbtn {\n  position: absolute;\n  z-index: -1;\n  width: 300%;\n  height: 100%;\n  background: #a64bf4;\n  background: -webkit-linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);\n  background: -o-linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);\n  background: -moz-linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);\n  background: linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);\n  top: 0;\n  left: -100%;\n\n  -webkit-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  transition: all 0.4s;\n}\n.login100-form-btn {\n  font-family: Poppins-Medium;\n  font-size: 15px;\n  color: #fff;\n  line-height: 1.2;\n  text-transform: uppercase;\n\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 20px;\n  width: 100%;\n  height: 50px;\n}\n.wrap-login100-form-btn:hover .login100-form-bgbtn {\n  left: 0;\n}\n\n\n/*------------------------------------------------------------------\n[ Responsive ]*/\n@media (max-width: 576px) {\n.wrap-login100 {\n    padding: 77px 15px 33px 15px;\n}\n}\n\n\n\n/*------------------------------------------------------------------\n[ Alert validate ]*/\n.validate-input {\n  position: relative;\n}\n.alert-validate::before {\n  content: attr(data-validate);\n  position: absolute;\n  max-width: 70%;\n  background-color: #fff;\n  border: 1px solid #c80000;\n  border-radius: 2px;\n  padding: 4px 25px 4px 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  transform: translateY(-50%);\n  right: 0px;\n  pointer-events: none;\n\n  font-family: gotham;\n  color: #c80000;\n  font-size: 13px;\n  line-height: 1.4;\n  text-align: left;\n\n  visibility: hidden;\n  opacity: 0;\n\n  -webkit-transition: opacity 0.4s;\n  -o-transition: opacity 0.4s;\n  -moz-transition: opacity 0.4s;\n  transition: opacity 0.4s;\n}\n.alert-validate::after {\n  content: \"\\f06a\";\n  font-family: FontAwesome;\n  font-size: 16px;\n  color: #c80000;\n\n  display: block;\n  position: absolute;\n  background-color: #fff;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  transform: translateY(-50%);\n  right: 5px;\n}\n.alert-validate:hover:before {\n  visibility: visible;\n  opacity: 1;\n}\n@media (max-width: 992px) {\n.alert-validate::before {\n    visibility: visible;\n    opacity: 1;\n}\n}\n\n\n\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./resources/sass/LoginV2/util.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./resources/sass/LoginV2/util.css ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*[ FONT SIZE ]\n///////////////////////////////////////////////////////////\n*/\n.fs-1 {font-size: 1px;}\n.fs-2 {font-size: 2px;}\n.fs-3 {font-size: 3px;}\n.fs-4 {font-size: 4px;}\n.fs-5 {font-size: 5px;}\n.fs-6 {font-size: 6px;}\n.fs-7 {font-size: 7px;}\n.fs-8 {font-size: 8px;}\n.fs-9 {font-size: 9px;}\n.fs-10 {font-size: 10px;}\n.fs-11 {font-size: 11px;}\n.fs-12 {font-size: 12px;}\n.fs-13 {font-size: 13px;}\n.fs-14 {font-size: 14px;}\n.fs-15 {font-size: 15px;}\n.fs-16 {font-size: 16px;}\n.fs-17 {font-size: 17px;}\n.fs-18 {font-size: 18px;}\n.fs-19 {font-size: 19px;}\n.fs-20 {font-size: 20px;}\n.fs-21 {font-size: 21px;}\n.fs-22 {font-size: 22px;}\n.fs-23 {font-size: 23px;}\n.fs-24 {font-size: 24px;}\n.fs-25 {font-size: 25px;}\n.fs-26 {font-size: 26px;}\n.fs-27 {font-size: 27px;}\n.fs-28 {font-size: 28px;}\n.fs-29 {font-size: 29px;}\n.fs-30 {font-size: 30px;}\n.fs-31 {font-size: 31px;}\n.fs-32 {font-size: 32px;}\n.fs-33 {font-size: 33px;}\n.fs-34 {font-size: 34px;}\n.fs-35 {font-size: 35px;}\n.fs-36 {font-size: 36px;}\n.fs-37 {font-size: 37px;}\n.fs-38 {font-size: 38px;}\n.fs-39 {font-size: 39px;}\n.fs-40 {font-size: 40px;}\n.fs-41 {font-size: 41px;}\n.fs-42 {font-size: 42px;}\n.fs-43 {font-size: 43px;}\n.fs-44 {font-size: 44px;}\n.fs-45 {font-size: 45px;}\n.fs-46 {font-size: 46px;}\n.fs-47 {font-size: 47px;}\n.fs-48 {font-size: 48px;}\n.fs-49 {font-size: 49px;}\n.fs-50 {font-size: 50px;}\n.fs-51 {font-size: 51px;}\n.fs-52 {font-size: 52px;}\n.fs-53 {font-size: 53px;}\n.fs-54 {font-size: 54px;}\n.fs-55 {font-size: 55px;}\n.fs-56 {font-size: 56px;}\n.fs-57 {font-size: 57px;}\n.fs-58 {font-size: 58px;}\n.fs-59 {font-size: 59px;}\n.fs-60 {font-size: 60px;}\n.fs-61 {font-size: 61px;}\n.fs-62 {font-size: 62px;}\n.fs-63 {font-size: 63px;}\n.fs-64 {font-size: 64px;}\n.fs-65 {font-size: 65px;}\n.fs-66 {font-size: 66px;}\n.fs-67 {font-size: 67px;}\n.fs-68 {font-size: 68px;}\n.fs-69 {font-size: 69px;}\n.fs-70 {font-size: 70px;}\n.fs-71 {font-size: 71px;}\n.fs-72 {font-size: 72px;}\n.fs-73 {font-size: 73px;}\n.fs-74 {font-size: 74px;}\n.fs-75 {font-size: 75px;}\n.fs-76 {font-size: 76px;}\n.fs-77 {font-size: 77px;}\n.fs-78 {font-size: 78px;}\n.fs-79 {font-size: 79px;}\n.fs-80 {font-size: 80px;}\n.fs-81 {font-size: 81px;}\n.fs-82 {font-size: 82px;}\n.fs-83 {font-size: 83px;}\n.fs-84 {font-size: 84px;}\n.fs-85 {font-size: 85px;}\n.fs-86 {font-size: 86px;}\n.fs-87 {font-size: 87px;}\n.fs-88 {font-size: 88px;}\n.fs-89 {font-size: 89px;}\n.fs-90 {font-size: 90px;}\n.fs-91 {font-size: 91px;}\n.fs-92 {font-size: 92px;}\n.fs-93 {font-size: 93px;}\n.fs-94 {font-size: 94px;}\n.fs-95 {font-size: 95px;}\n.fs-96 {font-size: 96px;}\n.fs-97 {font-size: 97px;}\n.fs-98 {font-size: 98px;}\n.fs-99 {font-size: 99px;}\n.fs-100 {font-size: 100px;}\n.fs-101 {font-size: 101px;}\n.fs-102 {font-size: 102px;}\n.fs-103 {font-size: 103px;}\n.fs-104 {font-size: 104px;}\n.fs-105 {font-size: 105px;}\n.fs-106 {font-size: 106px;}\n.fs-107 {font-size: 107px;}\n.fs-108 {font-size: 108px;}\n.fs-109 {font-size: 109px;}\n.fs-110 {font-size: 110px;}\n.fs-111 {font-size: 111px;}\n.fs-112 {font-size: 112px;}\n.fs-113 {font-size: 113px;}\n.fs-114 {font-size: 114px;}\n.fs-115 {font-size: 115px;}\n.fs-116 {font-size: 116px;}\n.fs-117 {font-size: 117px;}\n.fs-118 {font-size: 118px;}\n.fs-119 {font-size: 119px;}\n.fs-120 {font-size: 120px;}\n.fs-121 {font-size: 121px;}\n.fs-122 {font-size: 122px;}\n.fs-123 {font-size: 123px;}\n.fs-124 {font-size: 124px;}\n.fs-125 {font-size: 125px;}\n.fs-126 {font-size: 126px;}\n.fs-127 {font-size: 127px;}\n.fs-128 {font-size: 128px;}\n.fs-129 {font-size: 129px;}\n.fs-130 {font-size: 130px;}\n.fs-131 {font-size: 131px;}\n.fs-132 {font-size: 132px;}\n.fs-133 {font-size: 133px;}\n.fs-134 {font-size: 134px;}\n.fs-135 {font-size: 135px;}\n.fs-136 {font-size: 136px;}\n.fs-137 {font-size: 137px;}\n.fs-138 {font-size: 138px;}\n.fs-139 {font-size: 139px;}\n.fs-140 {font-size: 140px;}\n.fs-141 {font-size: 141px;}\n.fs-142 {font-size: 142px;}\n.fs-143 {font-size: 143px;}\n.fs-144 {font-size: 144px;}\n.fs-145 {font-size: 145px;}\n.fs-146 {font-size: 146px;}\n.fs-147 {font-size: 147px;}\n.fs-148 {font-size: 148px;}\n.fs-149 {font-size: 149px;}\n.fs-150 {font-size: 150px;}\n.fs-151 {font-size: 151px;}\n.fs-152 {font-size: 152px;}\n.fs-153 {font-size: 153px;}\n.fs-154 {font-size: 154px;}\n.fs-155 {font-size: 155px;}\n.fs-156 {font-size: 156px;}\n.fs-157 {font-size: 157px;}\n.fs-158 {font-size: 158px;}\n.fs-159 {font-size: 159px;}\n.fs-160 {font-size: 160px;}\n.fs-161 {font-size: 161px;}\n.fs-162 {font-size: 162px;}\n.fs-163 {font-size: 163px;}\n.fs-164 {font-size: 164px;}\n.fs-165 {font-size: 165px;}\n.fs-166 {font-size: 166px;}\n.fs-167 {font-size: 167px;}\n.fs-168 {font-size: 168px;}\n.fs-169 {font-size: 169px;}\n.fs-170 {font-size: 170px;}\n.fs-171 {font-size: 171px;}\n.fs-172 {font-size: 172px;}\n.fs-173 {font-size: 173px;}\n.fs-174 {font-size: 174px;}\n.fs-175 {font-size: 175px;}\n.fs-176 {font-size: 176px;}\n.fs-177 {font-size: 177px;}\n.fs-178 {font-size: 178px;}\n.fs-179 {font-size: 179px;}\n.fs-180 {font-size: 180px;}\n.fs-181 {font-size: 181px;}\n.fs-182 {font-size: 182px;}\n.fs-183 {font-size: 183px;}\n.fs-184 {font-size: 184px;}\n.fs-185 {font-size: 185px;}\n.fs-186 {font-size: 186px;}\n.fs-187 {font-size: 187px;}\n.fs-188 {font-size: 188px;}\n.fs-189 {font-size: 189px;}\n.fs-190 {font-size: 190px;}\n.fs-191 {font-size: 191px;}\n.fs-192 {font-size: 192px;}\n.fs-193 {font-size: 193px;}\n.fs-194 {font-size: 194px;}\n.fs-195 {font-size: 195px;}\n.fs-196 {font-size: 196px;}\n.fs-197 {font-size: 197px;}\n.fs-198 {font-size: 198px;}\n.fs-199 {font-size: 199px;}\n.fs-200 {font-size: 200px;}\n\n/*[ PADDING ]\n///////////////////////////////////////////////////////////\n*/\n.p-t-0 {padding-top: 0px;}\n.p-t-1 {padding-top: 1px;}\n.p-t-2 {padding-top: 2px;}\n.p-t-3 {padding-top: 3px;}\n.p-t-4 {padding-top: 4px;}\n.p-t-5 {padding-top: 5px;}\n.p-t-6 {padding-top: 6px;}\n.p-t-7 {padding-top: 7px;}\n.p-t-8 {padding-top: 8px;}\n.p-t-9 {padding-top: 9px;}\n.p-t-10 {padding-top: 10px;}\n.p-t-11 {padding-top: 11px;}\n.p-t-12 {padding-top: 12px;}\n.p-t-13 {padding-top: 13px;}\n.p-t-14 {padding-top: 14px;}\n.p-t-15 {padding-top: 15px;}\n.p-t-16 {padding-top: 16px;}\n.p-t-17 {padding-top: 17px;}\n.p-t-18 {padding-top: 18px;}\n.p-t-19 {padding-top: 19px;}\n.p-t-20 {padding-top: 20px;}\n.p-t-21 {padding-top: 21px;}\n.p-t-22 {padding-top: 22px;}\n.p-t-23 {padding-top: 23px;}\n.p-t-24 {padding-top: 24px;}\n.p-t-25 {padding-top: 25px;}\n.p-t-26 {padding-top: 26px;}\n.p-t-27 {padding-top: 27px;}\n.p-t-28 {padding-top: 28px;}\n.p-t-29 {padding-top: 29px;}\n.p-t-30 {padding-top: 30px;}\n.p-t-31 {padding-top: 31px;}\n.p-t-32 {padding-top: 32px;}\n.p-t-33 {padding-top: 33px;}\n.p-t-34 {padding-top: 34px;}\n.p-t-35 {padding-top: 35px;}\n.p-t-36 {padding-top: 36px;}\n.p-t-37 {padding-top: 37px;}\n.p-t-38 {padding-top: 38px;}\n.p-t-39 {padding-top: 39px;}\n.p-t-40 {padding-top: 40px;}\n.p-t-41 {padding-top: 41px;}\n.p-t-42 {padding-top: 42px;}\n.p-t-43 {padding-top: 43px;}\n.p-t-44 {padding-top: 44px;}\n.p-t-45 {padding-top: 45px;}\n.p-t-46 {padding-top: 46px;}\n.p-t-47 {padding-top: 47px;}\n.p-t-48 {padding-top: 48px;}\n.p-t-49 {padding-top: 49px;}\n.p-t-50 {padding-top: 50px;}\n.p-t-51 {padding-top: 51px;}\n.p-t-52 {padding-top: 52px;}\n.p-t-53 {padding-top: 53px;}\n.p-t-54 {padding-top: 54px;}\n.p-t-55 {padding-top: 55px;}\n.p-t-56 {padding-top: 56px;}\n.p-t-57 {padding-top: 57px;}\n.p-t-58 {padding-top: 58px;}\n.p-t-59 {padding-top: 59px;}\n.p-t-60 {padding-top: 60px;}\n.p-t-61 {padding-top: 61px;}\n.p-t-62 {padding-top: 62px;}\n.p-t-63 {padding-top: 63px;}\n.p-t-64 {padding-top: 64px;}\n.p-t-65 {padding-top: 65px;}\n.p-t-66 {padding-top: 66px;}\n.p-t-67 {padding-top: 67px;}\n.p-t-68 {padding-top: 68px;}\n.p-t-69 {padding-top: 69px;}\n.p-t-70 {padding-top: 70px;}\n.p-t-71 {padding-top: 71px;}\n.p-t-72 {padding-top: 72px;}\n.p-t-73 {padding-top: 73px;}\n.p-t-74 {padding-top: 74px;}\n.p-t-75 {padding-top: 75px;}\n.p-t-76 {padding-top: 76px;}\n.p-t-77 {padding-top: 77px;}\n.p-t-78 {padding-top: 78px;}\n.p-t-79 {padding-top: 79px;}\n.p-t-80 {padding-top: 80px;}\n.p-t-81 {padding-top: 81px;}\n.p-t-82 {padding-top: 82px;}\n.p-t-83 {padding-top: 83px;}\n.p-t-84 {padding-top: 84px;}\n.p-t-85 {padding-top: 85px;}\n.p-t-86 {padding-top: 86px;}\n.p-t-87 {padding-top: 87px;}\n.p-t-88 {padding-top: 88px;}\n.p-t-89 {padding-top: 89px;}\n.p-t-90 {padding-top: 90px;}\n.p-t-91 {padding-top: 91px;}\n.p-t-92 {padding-top: 92px;}\n.p-t-93 {padding-top: 93px;}\n.p-t-94 {padding-top: 94px;}\n.p-t-95 {padding-top: 95px;}\n.p-t-96 {padding-top: 96px;}\n.p-t-97 {padding-top: 97px;}\n.p-t-98 {padding-top: 98px;}\n.p-t-99 {padding-top: 99px;}\n.p-t-100 {padding-top: 100px;}\n.p-t-101 {padding-top: 101px;}\n.p-t-102 {padding-top: 102px;}\n.p-t-103 {padding-top: 103px;}\n.p-t-104 {padding-top: 104px;}\n.p-t-105 {padding-top: 105px;}\n.p-t-106 {padding-top: 106px;}\n.p-t-107 {padding-top: 107px;}\n.p-t-108 {padding-top: 108px;}\n.p-t-109 {padding-top: 109px;}\n.p-t-110 {padding-top: 110px;}\n.p-t-111 {padding-top: 111px;}\n.p-t-112 {padding-top: 112px;}\n.p-t-113 {padding-top: 113px;}\n.p-t-114 {padding-top: 114px;}\n.p-t-115 {padding-top: 115px;}\n.p-t-116 {padding-top: 116px;}\n.p-t-117 {padding-top: 117px;}\n.p-t-118 {padding-top: 118px;}\n.p-t-119 {padding-top: 119px;}\n.p-t-120 {padding-top: 120px;}\n.p-t-121 {padding-top: 121px;}\n.p-t-122 {padding-top: 122px;}\n.p-t-123 {padding-top: 123px;}\n.p-t-124 {padding-top: 124px;}\n.p-t-125 {padding-top: 125px;}\n.p-t-126 {padding-top: 126px;}\n.p-t-127 {padding-top: 127px;}\n.p-t-128 {padding-top: 128px;}\n.p-t-129 {padding-top: 129px;}\n.p-t-130 {padding-top: 130px;}\n.p-t-131 {padding-top: 131px;}\n.p-t-132 {padding-top: 132px;}\n.p-t-133 {padding-top: 133px;}\n.p-t-134 {padding-top: 134px;}\n.p-t-135 {padding-top: 135px;}\n.p-t-136 {padding-top: 136px;}\n.p-t-137 {padding-top: 137px;}\n.p-t-138 {padding-top: 138px;}\n.p-t-139 {padding-top: 139px;}\n.p-t-140 {padding-top: 140px;}\n.p-t-141 {padding-top: 141px;}\n.p-t-142 {padding-top: 142px;}\n.p-t-143 {padding-top: 143px;}\n.p-t-144 {padding-top: 144px;}\n.p-t-145 {padding-top: 145px;}\n.p-t-146 {padding-top: 146px;}\n.p-t-147 {padding-top: 147px;}\n.p-t-148 {padding-top: 148px;}\n.p-t-149 {padding-top: 149px;}\n.p-t-150 {padding-top: 150px;}\n.p-t-151 {padding-top: 151px;}\n.p-t-152 {padding-top: 152px;}\n.p-t-153 {padding-top: 153px;}\n.p-t-154 {padding-top: 154px;}\n.p-t-155 {padding-top: 155px;}\n.p-t-156 {padding-top: 156px;}\n.p-t-157 {padding-top: 157px;}\n.p-t-158 {padding-top: 158px;}\n.p-t-159 {padding-top: 159px;}\n.p-t-160 {padding-top: 160px;}\n.p-t-161 {padding-top: 161px;}\n.p-t-162 {padding-top: 162px;}\n.p-t-163 {padding-top: 163px;}\n.p-t-164 {padding-top: 164px;}\n.p-t-165 {padding-top: 165px;}\n.p-t-166 {padding-top: 166px;}\n.p-t-167 {padding-top: 167px;}\n.p-t-168 {padding-top: 168px;}\n.p-t-169 {padding-top: 169px;}\n.p-t-170 {padding-top: 170px;}\n.p-t-171 {padding-top: 171px;}\n.p-t-172 {padding-top: 172px;}\n.p-t-173 {padding-top: 173px;}\n.p-t-174 {padding-top: 174px;}\n.p-t-175 {padding-top: 175px;}\n.p-t-176 {padding-top: 176px;}\n.p-t-177 {padding-top: 177px;}\n.p-t-178 {padding-top: 178px;}\n.p-t-179 {padding-top: 179px;}\n.p-t-180 {padding-top: 180px;}\n.p-t-181 {padding-top: 181px;}\n.p-t-182 {padding-top: 182px;}\n.p-t-183 {padding-top: 183px;}\n.p-t-184 {padding-top: 184px;}\n.p-t-185 {padding-top: 185px;}\n.p-t-186 {padding-top: 186px;}\n.p-t-187 {padding-top: 187px;}\n.p-t-188 {padding-top: 188px;}\n.p-t-189 {padding-top: 189px;}\n.p-t-190 {padding-top: 190px;}\n.p-t-191 {padding-top: 191px;}\n.p-t-192 {padding-top: 192px;}\n.p-t-193 {padding-top: 193px;}\n.p-t-194 {padding-top: 194px;}\n.p-t-195 {padding-top: 195px;}\n.p-t-196 {padding-top: 196px;}\n.p-t-197 {padding-top: 197px;}\n.p-t-198 {padding-top: 198px;}\n.p-t-199 {padding-top: 199px;}\n.p-t-200 {padding-top: 200px;}\n.p-t-201 {padding-top: 201px;}\n.p-t-202 {padding-top: 202px;}\n.p-t-203 {padding-top: 203px;}\n.p-t-204 {padding-top: 204px;}\n.p-t-205 {padding-top: 205px;}\n.p-t-206 {padding-top: 206px;}\n.p-t-207 {padding-top: 207px;}\n.p-t-208 {padding-top: 208px;}\n.p-t-209 {padding-top: 209px;}\n.p-t-210 {padding-top: 210px;}\n.p-t-211 {padding-top: 211px;}\n.p-t-212 {padding-top: 212px;}\n.p-t-213 {padding-top: 213px;}\n.p-t-214 {padding-top: 214px;}\n.p-t-215 {padding-top: 215px;}\n.p-t-216 {padding-top: 216px;}\n.p-t-217 {padding-top: 217px;}\n.p-t-218 {padding-top: 218px;}\n.p-t-219 {padding-top: 219px;}\n.p-t-220 {padding-top: 220px;}\n.p-t-221 {padding-top: 221px;}\n.p-t-222 {padding-top: 222px;}\n.p-t-223 {padding-top: 223px;}\n.p-t-224 {padding-top: 224px;}\n.p-t-225 {padding-top: 225px;}\n.p-t-226 {padding-top: 226px;}\n.p-t-227 {padding-top: 227px;}\n.p-t-228 {padding-top: 228px;}\n.p-t-229 {padding-top: 229px;}\n.p-t-230 {padding-top: 230px;}\n.p-t-231 {padding-top: 231px;}\n.p-t-232 {padding-top: 232px;}\n.p-t-233 {padding-top: 233px;}\n.p-t-234 {padding-top: 234px;}\n.p-t-235 {padding-top: 235px;}\n.p-t-236 {padding-top: 236px;}\n.p-t-237 {padding-top: 237px;}\n.p-t-238 {padding-top: 238px;}\n.p-t-239 {padding-top: 239px;}\n.p-t-240 {padding-top: 240px;}\n.p-t-241 {padding-top: 241px;}\n.p-t-242 {padding-top: 242px;}\n.p-t-243 {padding-top: 243px;}\n.p-t-244 {padding-top: 244px;}\n.p-t-245 {padding-top: 245px;}\n.p-t-246 {padding-top: 246px;}\n.p-t-247 {padding-top: 247px;}\n.p-t-248 {padding-top: 248px;}\n.p-t-249 {padding-top: 249px;}\n.p-t-250 {padding-top: 250px;}\n.p-b-0 {padding-bottom: 0px;}\n.p-b-1 {padding-bottom: 1px;}\n.p-b-2 {padding-bottom: 2px;}\n.p-b-3 {padding-bottom: 3px;}\n.p-b-4 {padding-bottom: 4px;}\n.p-b-5 {padding-bottom: 5px;}\n.p-b-6 {padding-bottom: 6px;}\n.p-b-7 {padding-bottom: 7px;}\n.p-b-8 {padding-bottom: 8px;}\n.p-b-9 {padding-bottom: 9px;}\n.p-b-10 {padding-bottom: 10px;}\n.p-b-11 {padding-bottom: 11px;}\n.p-b-12 {padding-bottom: 12px;}\n.p-b-13 {padding-bottom: 13px;}\n.p-b-14 {padding-bottom: 14px;}\n.p-b-15 {padding-bottom: 15px;}\n.p-b-16 {padding-bottom: 16px;}\n.p-b-17 {padding-bottom: 17px;}\n.p-b-18 {padding-bottom: 18px;}\n.p-b-19 {padding-bottom: 19px;}\n.p-b-20 {padding-bottom: 20px;}\n.p-b-21 {padding-bottom: 21px;}\n.p-b-22 {padding-bottom: 22px;}\n.p-b-23 {padding-bottom: 23px;}\n.p-b-24 {padding-bottom: 24px;}\n.p-b-25 {padding-bottom: 25px;}\n.p-b-26 {padding-bottom: 26px;}\n.p-b-27 {padding-bottom: 27px;}\n.p-b-28 {padding-bottom: 28px;}\n.p-b-29 {padding-bottom: 29px;}\n.p-b-30 {padding-bottom: 30px;}\n.p-b-31 {padding-bottom: 31px;}\n.p-b-32 {padding-bottom: 32px;}\n.p-b-33 {padding-bottom: 33px;}\n.p-b-34 {padding-bottom: 34px;}\n.p-b-35 {padding-bottom: 35px;}\n.p-b-36 {padding-bottom: 36px;}\n.p-b-37 {padding-bottom: 37px;}\n.p-b-38 {padding-bottom: 38px;}\n.p-b-39 {padding-bottom: 39px;}\n.p-b-40 {padding-bottom: 40px;}\n.p-b-41 {padding-bottom: 41px;}\n.p-b-42 {padding-bottom: 42px;}\n.p-b-43 {padding-bottom: 43px;}\n.p-b-44 {padding-bottom: 44px;}\n.p-b-45 {padding-bottom: 45px;}\n.p-b-46 {padding-bottom: 46px;}\n.p-b-47 {padding-bottom: 47px;}\n.p-b-48 {padding-bottom: 48px;}\n.p-b-49 {padding-bottom: 49px;}\n.p-b-50 {padding-bottom: 50px;}\n.p-b-51 {padding-bottom: 51px;}\n.p-b-52 {padding-bottom: 52px;}\n.p-b-53 {padding-bottom: 53px;}\n.p-b-54 {padding-bottom: 54px;}\n.p-b-55 {padding-bottom: 55px;}\n.p-b-56 {padding-bottom: 56px;}\n.p-b-57 {padding-bottom: 57px;}\n.p-b-58 {padding-bottom: 58px;}\n.p-b-59 {padding-bottom: 59px;}\n.p-b-60 {padding-bottom: 60px;}\n.p-b-61 {padding-bottom: 61px;}\n.p-b-62 {padding-bottom: 62px;}\n.p-b-63 {padding-bottom: 63px;}\n.p-b-64 {padding-bottom: 64px;}\n.p-b-65 {padding-bottom: 65px;}\n.p-b-66 {padding-bottom: 66px;}\n.p-b-67 {padding-bottom: 67px;}\n.p-b-68 {padding-bottom: 68px;}\n.p-b-69 {padding-bottom: 69px;}\n.p-b-70 {padding-bottom: 70px;}\n.p-b-71 {padding-bottom: 71px;}\n.p-b-72 {padding-bottom: 72px;}\n.p-b-73 {padding-bottom: 73px;}\n.p-b-74 {padding-bottom: 74px;}\n.p-b-75 {padding-bottom: 75px;}\n.p-b-76 {padding-bottom: 76px;}\n.p-b-77 {padding-bottom: 77px;}\n.p-b-78 {padding-bottom: 78px;}\n.p-b-79 {padding-bottom: 79px;}\n.p-b-80 {padding-bottom: 80px;}\n.p-b-81 {padding-bottom: 81px;}\n.p-b-82 {padding-bottom: 82px;}\n.p-b-83 {padding-bottom: 83px;}\n.p-b-84 {padding-bottom: 84px;}\n.p-b-85 {padding-bottom: 85px;}\n.p-b-86 {padding-bottom: 86px;}\n.p-b-87 {padding-bottom: 87px;}\n.p-b-88 {padding-bottom: 88px;}\n.p-b-89 {padding-bottom: 89px;}\n.p-b-90 {padding-bottom: 90px;}\n.p-b-91 {padding-bottom: 91px;}\n.p-b-92 {padding-bottom: 92px;}\n.p-b-93 {padding-bottom: 93px;}\n.p-b-94 {padding-bottom: 94px;}\n.p-b-95 {padding-bottom: 95px;}\n.p-b-96 {padding-bottom: 96px;}\n.p-b-97 {padding-bottom: 97px;}\n.p-b-98 {padding-bottom: 98px;}\n.p-b-99 {padding-bottom: 99px;}\n.p-b-100 {padding-bottom: 100px;}\n.p-b-101 {padding-bottom: 101px;}\n.p-b-102 {padding-bottom: 102px;}\n.p-b-103 {padding-bottom: 103px;}\n.p-b-104 {padding-bottom: 104px;}\n.p-b-105 {padding-bottom: 105px;}\n.p-b-106 {padding-bottom: 106px;}\n.p-b-107 {padding-bottom: 107px;}\n.p-b-108 {padding-bottom: 108px;}\n.p-b-109 {padding-bottom: 109px;}\n.p-b-110 {padding-bottom: 110px;}\n.p-b-111 {padding-bottom: 111px;}\n.p-b-112 {padding-bottom: 112px;}\n.p-b-113 {padding-bottom: 113px;}\n.p-b-114 {padding-bottom: 114px;}\n.p-b-115 {padding-bottom: 115px;}\n.p-b-116 {padding-bottom: 116px;}\n.p-b-117 {padding-bottom: 117px;}\n.p-b-118 {padding-bottom: 118px;}\n.p-b-119 {padding-bottom: 119px;}\n.p-b-120 {padding-bottom: 120px;}\n.p-b-121 {padding-bottom: 121px;}\n.p-b-122 {padding-bottom: 122px;}\n.p-b-123 {padding-bottom: 123px;}\n.p-b-124 {padding-bottom: 124px;}\n.p-b-125 {padding-bottom: 125px;}\n.p-b-126 {padding-bottom: 126px;}\n.p-b-127 {padding-bottom: 127px;}\n.p-b-128 {padding-bottom: 128px;}\n.p-b-129 {padding-bottom: 129px;}\n.p-b-130 {padding-bottom: 130px;}\n.p-b-131 {padding-bottom: 131px;}\n.p-b-132 {padding-bottom: 132px;}\n.p-b-133 {padding-bottom: 133px;}\n.p-b-134 {padding-bottom: 134px;}\n.p-b-135 {padding-bottom: 135px;}\n.p-b-136 {padding-bottom: 136px;}\n.p-b-137 {padding-bottom: 137px;}\n.p-b-138 {padding-bottom: 138px;}\n.p-b-139 {padding-bottom: 139px;}\n.p-b-140 {padding-bottom: 140px;}\n.p-b-141 {padding-bottom: 141px;}\n.p-b-142 {padding-bottom: 142px;}\n.p-b-143 {padding-bottom: 143px;}\n.p-b-144 {padding-bottom: 144px;}\n.p-b-145 {padding-bottom: 145px;}\n.p-b-146 {padding-bottom: 146px;}\n.p-b-147 {padding-bottom: 147px;}\n.p-b-148 {padding-bottom: 148px;}\n.p-b-149 {padding-bottom: 149px;}\n.p-b-150 {padding-bottom: 150px;}\n.p-b-151 {padding-bottom: 151px;}\n.p-b-152 {padding-bottom: 152px;}\n.p-b-153 {padding-bottom: 153px;}\n.p-b-154 {padding-bottom: 154px;}\n.p-b-155 {padding-bottom: 155px;}\n.p-b-156 {padding-bottom: 156px;}\n.p-b-157 {padding-bottom: 157px;}\n.p-b-158 {padding-bottom: 158px;}\n.p-b-159 {padding-bottom: 159px;}\n.p-b-160 {padding-bottom: 160px;}\n.p-b-161 {padding-bottom: 161px;}\n.p-b-162 {padding-bottom: 162px;}\n.p-b-163 {padding-bottom: 163px;}\n.p-b-164 {padding-bottom: 164px;}\n.p-b-165 {padding-bottom: 165px;}\n.p-b-166 {padding-bottom: 166px;}\n.p-b-167 {padding-bottom: 167px;}\n.p-b-168 {padding-bottom: 168px;}\n.p-b-169 {padding-bottom: 169px;}\n.p-b-170 {padding-bottom: 170px;}\n.p-b-171 {padding-bottom: 171px;}\n.p-b-172 {padding-bottom: 172px;}\n.p-b-173 {padding-bottom: 173px;}\n.p-b-174 {padding-bottom: 174px;}\n.p-b-175 {padding-bottom: 175px;}\n.p-b-176 {padding-bottom: 176px;}\n.p-b-177 {padding-bottom: 177px;}\n.p-b-178 {padding-bottom: 178px;}\n.p-b-179 {padding-bottom: 179px;}\n.p-b-180 {padding-bottom: 180px;}\n.p-b-181 {padding-bottom: 181px;}\n.p-b-182 {padding-bottom: 182px;}\n.p-b-183 {padding-bottom: 183px;}\n.p-b-184 {padding-bottom: 184px;}\n.p-b-185 {padding-bottom: 185px;}\n.p-b-186 {padding-bottom: 186px;}\n.p-b-187 {padding-bottom: 187px;}\n.p-b-188 {padding-bottom: 188px;}\n.p-b-189 {padding-bottom: 189px;}\n.p-b-190 {padding-bottom: 190px;}\n.p-b-191 {padding-bottom: 191px;}\n.p-b-192 {padding-bottom: 192px;}\n.p-b-193 {padding-bottom: 193px;}\n.p-b-194 {padding-bottom: 194px;}\n.p-b-195 {padding-bottom: 195px;}\n.p-b-196 {padding-bottom: 196px;}\n.p-b-197 {padding-bottom: 197px;}\n.p-b-198 {padding-bottom: 198px;}\n.p-b-199 {padding-bottom: 199px;}\n.p-b-200 {padding-bottom: 200px;}\n.p-b-201 {padding-bottom: 201px;}\n.p-b-202 {padding-bottom: 202px;}\n.p-b-203 {padding-bottom: 203px;}\n.p-b-204 {padding-bottom: 204px;}\n.p-b-205 {padding-bottom: 205px;}\n.p-b-206 {padding-bottom: 206px;}\n.p-b-207 {padding-bottom: 207px;}\n.p-b-208 {padding-bottom: 208px;}\n.p-b-209 {padding-bottom: 209px;}\n.p-b-210 {padding-bottom: 210px;}\n.p-b-211 {padding-bottom: 211px;}\n.p-b-212 {padding-bottom: 212px;}\n.p-b-213 {padding-bottom: 213px;}\n.p-b-214 {padding-bottom: 214px;}\n.p-b-215 {padding-bottom: 215px;}\n.p-b-216 {padding-bottom: 216px;}\n.p-b-217 {padding-bottom: 217px;}\n.p-b-218 {padding-bottom: 218px;}\n.p-b-219 {padding-bottom: 219px;}\n.p-b-220 {padding-bottom: 220px;}\n.p-b-221 {padding-bottom: 221px;}\n.p-b-222 {padding-bottom: 222px;}\n.p-b-223 {padding-bottom: 223px;}\n.p-b-224 {padding-bottom: 224px;}\n.p-b-225 {padding-bottom: 225px;}\n.p-b-226 {padding-bottom: 226px;}\n.p-b-227 {padding-bottom: 227px;}\n.p-b-228 {padding-bottom: 228px;}\n.p-b-229 {padding-bottom: 229px;}\n.p-b-230 {padding-bottom: 230px;}\n.p-b-231 {padding-bottom: 231px;}\n.p-b-232 {padding-bottom: 232px;}\n.p-b-233 {padding-bottom: 233px;}\n.p-b-234 {padding-bottom: 234px;}\n.p-b-235 {padding-bottom: 235px;}\n.p-b-236 {padding-bottom: 236px;}\n.p-b-237 {padding-bottom: 237px;}\n.p-b-238 {padding-bottom: 238px;}\n.p-b-239 {padding-bottom: 239px;}\n.p-b-240 {padding-bottom: 240px;}\n.p-b-241 {padding-bottom: 241px;}\n.p-b-242 {padding-bottom: 242px;}\n.p-b-243 {padding-bottom: 243px;}\n.p-b-244 {padding-bottom: 244px;}\n.p-b-245 {padding-bottom: 245px;}\n.p-b-246 {padding-bottom: 246px;}\n.p-b-247 {padding-bottom: 247px;}\n.p-b-248 {padding-bottom: 248px;}\n.p-b-249 {padding-bottom: 249px;}\n.p-b-250 {padding-bottom: 250px;}\n.p-l-0 {padding-left: 0px;}\n.p-l-1 {padding-left: 1px;}\n.p-l-2 {padding-left: 2px;}\n.p-l-3 {padding-left: 3px;}\n.p-l-4 {padding-left: 4px;}\n.p-l-5 {padding-left: 5px;}\n.p-l-6 {padding-left: 6px;}\n.p-l-7 {padding-left: 7px;}\n.p-l-8 {padding-left: 8px;}\n.p-l-9 {padding-left: 9px;}\n.p-l-10 {padding-left: 10px;}\n.p-l-11 {padding-left: 11px;}\n.p-l-12 {padding-left: 12px;}\n.p-l-13 {padding-left: 13px;}\n.p-l-14 {padding-left: 14px;}\n.p-l-15 {padding-left: 15px;}\n.p-l-16 {padding-left: 16px;}\n.p-l-17 {padding-left: 17px;}\n.p-l-18 {padding-left: 18px;}\n.p-l-19 {padding-left: 19px;}\n.p-l-20 {padding-left: 20px;}\n.p-l-21 {padding-left: 21px;}\n.p-l-22 {padding-left: 22px;}\n.p-l-23 {padding-left: 23px;}\n.p-l-24 {padding-left: 24px;}\n.p-l-25 {padding-left: 25px;}\n.p-l-26 {padding-left: 26px;}\n.p-l-27 {padding-left: 27px;}\n.p-l-28 {padding-left: 28px;}\n.p-l-29 {padding-left: 29px;}\n.p-l-30 {padding-left: 30px;}\n.p-l-31 {padding-left: 31px;}\n.p-l-32 {padding-left: 32px;}\n.p-l-33 {padding-left: 33px;}\n.p-l-34 {padding-left: 34px;}\n.p-l-35 {padding-left: 35px;}\n.p-l-36 {padding-left: 36px;}\n.p-l-37 {padding-left: 37px;}\n.p-l-38 {padding-left: 38px;}\n.p-l-39 {padding-left: 39px;}\n.p-l-40 {padding-left: 40px;}\n.p-l-41 {padding-left: 41px;}\n.p-l-42 {padding-left: 42px;}\n.p-l-43 {padding-left: 43px;}\n.p-l-44 {padding-left: 44px;}\n.p-l-45 {padding-left: 45px;}\n.p-l-46 {padding-left: 46px;}\n.p-l-47 {padding-left: 47px;}\n.p-l-48 {padding-left: 48px;}\n.p-l-49 {padding-left: 49px;}\n.p-l-50 {padding-left: 50px;}\n.p-l-51 {padding-left: 51px;}\n.p-l-52 {padding-left: 52px;}\n.p-l-53 {padding-left: 53px;}\n.p-l-54 {padding-left: 54px;}\n.p-l-55 {padding-left: 55px;}\n.p-l-56 {padding-left: 56px;}\n.p-l-57 {padding-left: 57px;}\n.p-l-58 {padding-left: 58px;}\n.p-l-59 {padding-left: 59px;}\n.p-l-60 {padding-left: 60px;}\n.p-l-61 {padding-left: 61px;}\n.p-l-62 {padding-left: 62px;}\n.p-l-63 {padding-left: 63px;}\n.p-l-64 {padding-left: 64px;}\n.p-l-65 {padding-left: 65px;}\n.p-l-66 {padding-left: 66px;}\n.p-l-67 {padding-left: 67px;}\n.p-l-68 {padding-left: 68px;}\n.p-l-69 {padding-left: 69px;}\n.p-l-70 {padding-left: 70px;}\n.p-l-71 {padding-left: 71px;}\n.p-l-72 {padding-left: 72px;}\n.p-l-73 {padding-left: 73px;}\n.p-l-74 {padding-left: 74px;}\n.p-l-75 {padding-left: 75px;}\n.p-l-76 {padding-left: 76px;}\n.p-l-77 {padding-left: 77px;}\n.p-l-78 {padding-left: 78px;}\n.p-l-79 {padding-left: 79px;}\n.p-l-80 {padding-left: 80px;}\n.p-l-81 {padding-left: 81px;}\n.p-l-82 {padding-left: 82px;}\n.p-l-83 {padding-left: 83px;}\n.p-l-84 {padding-left: 84px;}\n.p-l-85 {padding-left: 85px;}\n.p-l-86 {padding-left: 86px;}\n.p-l-87 {padding-left: 87px;}\n.p-l-88 {padding-left: 88px;}\n.p-l-89 {padding-left: 89px;}\n.p-l-90 {padding-left: 90px;}\n.p-l-91 {padding-left: 91px;}\n.p-l-92 {padding-left: 92px;}\n.p-l-93 {padding-left: 93px;}\n.p-l-94 {padding-left: 94px;}\n.p-l-95 {padding-left: 95px;}\n.p-l-96 {padding-left: 96px;}\n.p-l-97 {padding-left: 97px;}\n.p-l-98 {padding-left: 98px;}\n.p-l-99 {padding-left: 99px;}\n.p-l-100 {padding-left: 100px;}\n.p-l-101 {padding-left: 101px;}\n.p-l-102 {padding-left: 102px;}\n.p-l-103 {padding-left: 103px;}\n.p-l-104 {padding-left: 104px;}\n.p-l-105 {padding-left: 105px;}\n.p-l-106 {padding-left: 106px;}\n.p-l-107 {padding-left: 107px;}\n.p-l-108 {padding-left: 108px;}\n.p-l-109 {padding-left: 109px;}\n.p-l-110 {padding-left: 110px;}\n.p-l-111 {padding-left: 111px;}\n.p-l-112 {padding-left: 112px;}\n.p-l-113 {padding-left: 113px;}\n.p-l-114 {padding-left: 114px;}\n.p-l-115 {padding-left: 115px;}\n.p-l-116 {padding-left: 116px;}\n.p-l-117 {padding-left: 117px;}\n.p-l-118 {padding-left: 118px;}\n.p-l-119 {padding-left: 119px;}\n.p-l-120 {padding-left: 120px;}\n.p-l-121 {padding-left: 121px;}\n.p-l-122 {padding-left: 122px;}\n.p-l-123 {padding-left: 123px;}\n.p-l-124 {padding-left: 124px;}\n.p-l-125 {padding-left: 125px;}\n.p-l-126 {padding-left: 126px;}\n.p-l-127 {padding-left: 127px;}\n.p-l-128 {padding-left: 128px;}\n.p-l-129 {padding-left: 129px;}\n.p-l-130 {padding-left: 130px;}\n.p-l-131 {padding-left: 131px;}\n.p-l-132 {padding-left: 132px;}\n.p-l-133 {padding-left: 133px;}\n.p-l-134 {padding-left: 134px;}\n.p-l-135 {padding-left: 135px;}\n.p-l-136 {padding-left: 136px;}\n.p-l-137 {padding-left: 137px;}\n.p-l-138 {padding-left: 138px;}\n.p-l-139 {padding-left: 139px;}\n.p-l-140 {padding-left: 140px;}\n.p-l-141 {padding-left: 141px;}\n.p-l-142 {padding-left: 142px;}\n.p-l-143 {padding-left: 143px;}\n.p-l-144 {padding-left: 144px;}\n.p-l-145 {padding-left: 145px;}\n.p-l-146 {padding-left: 146px;}\n.p-l-147 {padding-left: 147px;}\n.p-l-148 {padding-left: 148px;}\n.p-l-149 {padding-left: 149px;}\n.p-l-150 {padding-left: 150px;}\n.p-l-151 {padding-left: 151px;}\n.p-l-152 {padding-left: 152px;}\n.p-l-153 {padding-left: 153px;}\n.p-l-154 {padding-left: 154px;}\n.p-l-155 {padding-left: 155px;}\n.p-l-156 {padding-left: 156px;}\n.p-l-157 {padding-left: 157px;}\n.p-l-158 {padding-left: 158px;}\n.p-l-159 {padding-left: 159px;}\n.p-l-160 {padding-left: 160px;}\n.p-l-161 {padding-left: 161px;}\n.p-l-162 {padding-left: 162px;}\n.p-l-163 {padding-left: 163px;}\n.p-l-164 {padding-left: 164px;}\n.p-l-165 {padding-left: 165px;}\n.p-l-166 {padding-left: 166px;}\n.p-l-167 {padding-left: 167px;}\n.p-l-168 {padding-left: 168px;}\n.p-l-169 {padding-left: 169px;}\n.p-l-170 {padding-left: 170px;}\n.p-l-171 {padding-left: 171px;}\n.p-l-172 {padding-left: 172px;}\n.p-l-173 {padding-left: 173px;}\n.p-l-174 {padding-left: 174px;}\n.p-l-175 {padding-left: 175px;}\n.p-l-176 {padding-left: 176px;}\n.p-l-177 {padding-left: 177px;}\n.p-l-178 {padding-left: 178px;}\n.p-l-179 {padding-left: 179px;}\n.p-l-180 {padding-left: 180px;}\n.p-l-181 {padding-left: 181px;}\n.p-l-182 {padding-left: 182px;}\n.p-l-183 {padding-left: 183px;}\n.p-l-184 {padding-left: 184px;}\n.p-l-185 {padding-left: 185px;}\n.p-l-186 {padding-left: 186px;}\n.p-l-187 {padding-left: 187px;}\n.p-l-188 {padding-left: 188px;}\n.p-l-189 {padding-left: 189px;}\n.p-l-190 {padding-left: 190px;}\n.p-l-191 {padding-left: 191px;}\n.p-l-192 {padding-left: 192px;}\n.p-l-193 {padding-left: 193px;}\n.p-l-194 {padding-left: 194px;}\n.p-l-195 {padding-left: 195px;}\n.p-l-196 {padding-left: 196px;}\n.p-l-197 {padding-left: 197px;}\n.p-l-198 {padding-left: 198px;}\n.p-l-199 {padding-left: 199px;}\n.p-l-200 {padding-left: 200px;}\n.p-l-201 {padding-left: 201px;}\n.p-l-202 {padding-left: 202px;}\n.p-l-203 {padding-left: 203px;}\n.p-l-204 {padding-left: 204px;}\n.p-l-205 {padding-left: 205px;}\n.p-l-206 {padding-left: 206px;}\n.p-l-207 {padding-left: 207px;}\n.p-l-208 {padding-left: 208px;}\n.p-l-209 {padding-left: 209px;}\n.p-l-210 {padding-left: 210px;}\n.p-l-211 {padding-left: 211px;}\n.p-l-212 {padding-left: 212px;}\n.p-l-213 {padding-left: 213px;}\n.p-l-214 {padding-left: 214px;}\n.p-l-215 {padding-left: 215px;}\n.p-l-216 {padding-left: 216px;}\n.p-l-217 {padding-left: 217px;}\n.p-l-218 {padding-left: 218px;}\n.p-l-219 {padding-left: 219px;}\n.p-l-220 {padding-left: 220px;}\n.p-l-221 {padding-left: 221px;}\n.p-l-222 {padding-left: 222px;}\n.p-l-223 {padding-left: 223px;}\n.p-l-224 {padding-left: 224px;}\n.p-l-225 {padding-left: 225px;}\n.p-l-226 {padding-left: 226px;}\n.p-l-227 {padding-left: 227px;}\n.p-l-228 {padding-left: 228px;}\n.p-l-229 {padding-left: 229px;}\n.p-l-230 {padding-left: 230px;}\n.p-l-231 {padding-left: 231px;}\n.p-l-232 {padding-left: 232px;}\n.p-l-233 {padding-left: 233px;}\n.p-l-234 {padding-left: 234px;}\n.p-l-235 {padding-left: 235px;}\n.p-l-236 {padding-left: 236px;}\n.p-l-237 {padding-left: 237px;}\n.p-l-238 {padding-left: 238px;}\n.p-l-239 {padding-left: 239px;}\n.p-l-240 {padding-left: 240px;}\n.p-l-241 {padding-left: 241px;}\n.p-l-242 {padding-left: 242px;}\n.p-l-243 {padding-left: 243px;}\n.p-l-244 {padding-left: 244px;}\n.p-l-245 {padding-left: 245px;}\n.p-l-246 {padding-left: 246px;}\n.p-l-247 {padding-left: 247px;}\n.p-l-248 {padding-left: 248px;}\n.p-l-249 {padding-left: 249px;}\n.p-l-250 {padding-left: 250px;}\n.p-r-0 {padding-right: 0px;}\n.p-r-1 {padding-right: 1px;}\n.p-r-2 {padding-right: 2px;}\n.p-r-3 {padding-right: 3px;}\n.p-r-4 {padding-right: 4px;}\n.p-r-5 {padding-right: 5px;}\n.p-r-6 {padding-right: 6px;}\n.p-r-7 {padding-right: 7px;}\n.p-r-8 {padding-right: 8px;}\n.p-r-9 {padding-right: 9px;}\n.p-r-10 {padding-right: 10px;}\n.p-r-11 {padding-right: 11px;}\n.p-r-12 {padding-right: 12px;}\n.p-r-13 {padding-right: 13px;}\n.p-r-14 {padding-right: 14px;}\n.p-r-15 {padding-right: 15px;}\n.p-r-16 {padding-right: 16px;}\n.p-r-17 {padding-right: 17px;}\n.p-r-18 {padding-right: 18px;}\n.p-r-19 {padding-right: 19px;}\n.p-r-20 {padding-right: 20px;}\n.p-r-21 {padding-right: 21px;}\n.p-r-22 {padding-right: 22px;}\n.p-r-23 {padding-right: 23px;}\n.p-r-24 {padding-right: 24px;}\n.p-r-25 {padding-right: 25px;}\n.p-r-26 {padding-right: 26px;}\n.p-r-27 {padding-right: 27px;}\n.p-r-28 {padding-right: 28px;}\n.p-r-29 {padding-right: 29px;}\n.p-r-30 {padding-right: 30px;}\n.p-r-31 {padding-right: 31px;}\n.p-r-32 {padding-right: 32px;}\n.p-r-33 {padding-right: 33px;}\n.p-r-34 {padding-right: 34px;}\n.p-r-35 {padding-right: 35px;}\n.p-r-36 {padding-right: 36px;}\n.p-r-37 {padding-right: 37px;}\n.p-r-38 {padding-right: 38px;}\n.p-r-39 {padding-right: 39px;}\n.p-r-40 {padding-right: 40px;}\n.p-r-41 {padding-right: 41px;}\n.p-r-42 {padding-right: 42px;}\n.p-r-43 {padding-right: 43px;}\n.p-r-44 {padding-right: 44px;}\n.p-r-45 {padding-right: 45px;}\n.p-r-46 {padding-right: 46px;}\n.p-r-47 {padding-right: 47px;}\n.p-r-48 {padding-right: 48px;}\n.p-r-49 {padding-right: 49px;}\n.p-r-50 {padding-right: 50px;}\n.p-r-51 {padding-right: 51px;}\n.p-r-52 {padding-right: 52px;}\n.p-r-53 {padding-right: 53px;}\n.p-r-54 {padding-right: 54px;}\n.p-r-55 {padding-right: 55px;}\n.p-r-56 {padding-right: 56px;}\n.p-r-57 {padding-right: 57px;}\n.p-r-58 {padding-right: 58px;}\n.p-r-59 {padding-right: 59px;}\n.p-r-60 {padding-right: 60px;}\n.p-r-61 {padding-right: 61px;}\n.p-r-62 {padding-right: 62px;}\n.p-r-63 {padding-right: 63px;}\n.p-r-64 {padding-right: 64px;}\n.p-r-65 {padding-right: 65px;}\n.p-r-66 {padding-right: 66px;}\n.p-r-67 {padding-right: 67px;}\n.p-r-68 {padding-right: 68px;}\n.p-r-69 {padding-right: 69px;}\n.p-r-70 {padding-right: 70px;}\n.p-r-71 {padding-right: 71px;}\n.p-r-72 {padding-right: 72px;}\n.p-r-73 {padding-right: 73px;}\n.p-r-74 {padding-right: 74px;}\n.p-r-75 {padding-right: 75px;}\n.p-r-76 {padding-right: 76px;}\n.p-r-77 {padding-right: 77px;}\n.p-r-78 {padding-right: 78px;}\n.p-r-79 {padding-right: 79px;}\n.p-r-80 {padding-right: 80px;}\n.p-r-81 {padding-right: 81px;}\n.p-r-82 {padding-right: 82px;}\n.p-r-83 {padding-right: 83px;}\n.p-r-84 {padding-right: 84px;}\n.p-r-85 {padding-right: 85px;}\n.p-r-86 {padding-right: 86px;}\n.p-r-87 {padding-right: 87px;}\n.p-r-88 {padding-right: 88px;}\n.p-r-89 {padding-right: 89px;}\n.p-r-90 {padding-right: 90px;}\n.p-r-91 {padding-right: 91px;}\n.p-r-92 {padding-right: 92px;}\n.p-r-93 {padding-right: 93px;}\n.p-r-94 {padding-right: 94px;}\n.p-r-95 {padding-right: 95px;}\n.p-r-96 {padding-right: 96px;}\n.p-r-97 {padding-right: 97px;}\n.p-r-98 {padding-right: 98px;}\n.p-r-99 {padding-right: 99px;}\n.p-r-100 {padding-right: 100px;}\n.p-r-101 {padding-right: 101px;}\n.p-r-102 {padding-right: 102px;}\n.p-r-103 {padding-right: 103px;}\n.p-r-104 {padding-right: 104px;}\n.p-r-105 {padding-right: 105px;}\n.p-r-106 {padding-right: 106px;}\n.p-r-107 {padding-right: 107px;}\n.p-r-108 {padding-right: 108px;}\n.p-r-109 {padding-right: 109px;}\n.p-r-110 {padding-right: 110px;}\n.p-r-111 {padding-right: 111px;}\n.p-r-112 {padding-right: 112px;}\n.p-r-113 {padding-right: 113px;}\n.p-r-114 {padding-right: 114px;}\n.p-r-115 {padding-right: 115px;}\n.p-r-116 {padding-right: 116px;}\n.p-r-117 {padding-right: 117px;}\n.p-r-118 {padding-right: 118px;}\n.p-r-119 {padding-right: 119px;}\n.p-r-120 {padding-right: 120px;}\n.p-r-121 {padding-right: 121px;}\n.p-r-122 {padding-right: 122px;}\n.p-r-123 {padding-right: 123px;}\n.p-r-124 {padding-right: 124px;}\n.p-r-125 {padding-right: 125px;}\n.p-r-126 {padding-right: 126px;}\n.p-r-127 {padding-right: 127px;}\n.p-r-128 {padding-right: 128px;}\n.p-r-129 {padding-right: 129px;}\n.p-r-130 {padding-right: 130px;}\n.p-r-131 {padding-right: 131px;}\n.p-r-132 {padding-right: 132px;}\n.p-r-133 {padding-right: 133px;}\n.p-r-134 {padding-right: 134px;}\n.p-r-135 {padding-right: 135px;}\n.p-r-136 {padding-right: 136px;}\n.p-r-137 {padding-right: 137px;}\n.p-r-138 {padding-right: 138px;}\n.p-r-139 {padding-right: 139px;}\n.p-r-140 {padding-right: 140px;}\n.p-r-141 {padding-right: 141px;}\n.p-r-142 {padding-right: 142px;}\n.p-r-143 {padding-right: 143px;}\n.p-r-144 {padding-right: 144px;}\n.p-r-145 {padding-right: 145px;}\n.p-r-146 {padding-right: 146px;}\n.p-r-147 {padding-right: 147px;}\n.p-r-148 {padding-right: 148px;}\n.p-r-149 {padding-right: 149px;}\n.p-r-150 {padding-right: 150px;}\n.p-r-151 {padding-right: 151px;}\n.p-r-152 {padding-right: 152px;}\n.p-r-153 {padding-right: 153px;}\n.p-r-154 {padding-right: 154px;}\n.p-r-155 {padding-right: 155px;}\n.p-r-156 {padding-right: 156px;}\n.p-r-157 {padding-right: 157px;}\n.p-r-158 {padding-right: 158px;}\n.p-r-159 {padding-right: 159px;}\n.p-r-160 {padding-right: 160px;}\n.p-r-161 {padding-right: 161px;}\n.p-r-162 {padding-right: 162px;}\n.p-r-163 {padding-right: 163px;}\n.p-r-164 {padding-right: 164px;}\n.p-r-165 {padding-right: 165px;}\n.p-r-166 {padding-right: 166px;}\n.p-r-167 {padding-right: 167px;}\n.p-r-168 {padding-right: 168px;}\n.p-r-169 {padding-right: 169px;}\n.p-r-170 {padding-right: 170px;}\n.p-r-171 {padding-right: 171px;}\n.p-r-172 {padding-right: 172px;}\n.p-r-173 {padding-right: 173px;}\n.p-r-174 {padding-right: 174px;}\n.p-r-175 {padding-right: 175px;}\n.p-r-176 {padding-right: 176px;}\n.p-r-177 {padding-right: 177px;}\n.p-r-178 {padding-right: 178px;}\n.p-r-179 {padding-right: 179px;}\n.p-r-180 {padding-right: 180px;}\n.p-r-181 {padding-right: 181px;}\n.p-r-182 {padding-right: 182px;}\n.p-r-183 {padding-right: 183px;}\n.p-r-184 {padding-right: 184px;}\n.p-r-185 {padding-right: 185px;}\n.p-r-186 {padding-right: 186px;}\n.p-r-187 {padding-right: 187px;}\n.p-r-188 {padding-right: 188px;}\n.p-r-189 {padding-right: 189px;}\n.p-r-190 {padding-right: 190px;}\n.p-r-191 {padding-right: 191px;}\n.p-r-192 {padding-right: 192px;}\n.p-r-193 {padding-right: 193px;}\n.p-r-194 {padding-right: 194px;}\n.p-r-195 {padding-right: 195px;}\n.p-r-196 {padding-right: 196px;}\n.p-r-197 {padding-right: 197px;}\n.p-r-198 {padding-right: 198px;}\n.p-r-199 {padding-right: 199px;}\n.p-r-200 {padding-right: 200px;}\n.p-r-201 {padding-right: 201px;}\n.p-r-202 {padding-right: 202px;}\n.p-r-203 {padding-right: 203px;}\n.p-r-204 {padding-right: 204px;}\n.p-r-205 {padding-right: 205px;}\n.p-r-206 {padding-right: 206px;}\n.p-r-207 {padding-right: 207px;}\n.p-r-208 {padding-right: 208px;}\n.p-r-209 {padding-right: 209px;}\n.p-r-210 {padding-right: 210px;}\n.p-r-211 {padding-right: 211px;}\n.p-r-212 {padding-right: 212px;}\n.p-r-213 {padding-right: 213px;}\n.p-r-214 {padding-right: 214px;}\n.p-r-215 {padding-right: 215px;}\n.p-r-216 {padding-right: 216px;}\n.p-r-217 {padding-right: 217px;}\n.p-r-218 {padding-right: 218px;}\n.p-r-219 {padding-right: 219px;}\n.p-r-220 {padding-right: 220px;}\n.p-r-221 {padding-right: 221px;}\n.p-r-222 {padding-right: 222px;}\n.p-r-223 {padding-right: 223px;}\n.p-r-224 {padding-right: 224px;}\n.p-r-225 {padding-right: 225px;}\n.p-r-226 {padding-right: 226px;}\n.p-r-227 {padding-right: 227px;}\n.p-r-228 {padding-right: 228px;}\n.p-r-229 {padding-right: 229px;}\n.p-r-230 {padding-right: 230px;}\n.p-r-231 {padding-right: 231px;}\n.p-r-232 {padding-right: 232px;}\n.p-r-233 {padding-right: 233px;}\n.p-r-234 {padding-right: 234px;}\n.p-r-235 {padding-right: 235px;}\n.p-r-236 {padding-right: 236px;}\n.p-r-237 {padding-right: 237px;}\n.p-r-238 {padding-right: 238px;}\n.p-r-239 {padding-right: 239px;}\n.p-r-240 {padding-right: 240px;}\n.p-r-241 {padding-right: 241px;}\n.p-r-242 {padding-right: 242px;}\n.p-r-243 {padding-right: 243px;}\n.p-r-244 {padding-right: 244px;}\n.p-r-245 {padding-right: 245px;}\n.p-r-246 {padding-right: 246px;}\n.p-r-247 {padding-right: 247px;}\n.p-r-248 {padding-right: 248px;}\n.p-r-249 {padding-right: 249px;}\n.p-r-250 {padding-right: 250px;}\n\n/*[ MARGIN ]\n///////////////////////////////////////////////////////////\n*/\n.m-t-0 {margin-top: 0px;}\n.m-t-1 {margin-top: 1px;}\n.m-t-2 {margin-top: 2px;}\n.m-t-3 {margin-top: 3px;}\n.m-t-4 {margin-top: 4px;}\n.m-t-5 {margin-top: 5px;}\n.m-t-6 {margin-top: 6px;}\n.m-t-7 {margin-top: 7px;}\n.m-t-8 {margin-top: 8px;}\n.m-t-9 {margin-top: 9px;}\n.m-t-10 {margin-top: 10px;}\n.m-t-11 {margin-top: 11px;}\n.m-t-12 {margin-top: 12px;}\n.m-t-13 {margin-top: 13px;}\n.m-t-14 {margin-top: 14px;}\n.m-t-15 {margin-top: 15px;}\n.m-t-16 {margin-top: 16px;}\n.m-t-17 {margin-top: 17px;}\n.m-t-18 {margin-top: 18px;}\n.m-t-19 {margin-top: 19px;}\n.m-t-20 {margin-top: 20px;}\n.m-t-21 {margin-top: 21px;}\n.m-t-22 {margin-top: 22px;}\n.m-t-23 {margin-top: 23px;}\n.m-t-24 {margin-top: 24px;}\n.m-t-25 {margin-top: 25px;}\n.m-t-26 {margin-top: 26px;}\n.m-t-27 {margin-top: 27px;}\n.m-t-28 {margin-top: 28px;}\n.m-t-29 {margin-top: 29px;}\n.m-t-30 {margin-top: 30px;}\n.m-t-31 {margin-top: 31px;}\n.m-t-32 {margin-top: 32px;}\n.m-t-33 {margin-top: 33px;}\n.m-t-34 {margin-top: 34px;}\n.m-t-35 {margin-top: 35px;}\n.m-t-36 {margin-top: 36px;}\n.m-t-37 {margin-top: 37px;}\n.m-t-38 {margin-top: 38px;}\n.m-t-39 {margin-top: 39px;}\n.m-t-40 {margin-top: 40px;}\n.m-t-41 {margin-top: 41px;}\n.m-t-42 {margin-top: 42px;}\n.m-t-43 {margin-top: 43px;}\n.m-t-44 {margin-top: 44px;}\n.m-t-45 {margin-top: 45px;}\n.m-t-46 {margin-top: 46px;}\n.m-t-47 {margin-top: 47px;}\n.m-t-48 {margin-top: 48px;}\n.m-t-49 {margin-top: 49px;}\n.m-t-50 {margin-top: 50px;}\n.m-t-51 {margin-top: 51px;}\n.m-t-52 {margin-top: 52px;}\n.m-t-53 {margin-top: 53px;}\n.m-t-54 {margin-top: 54px;}\n.m-t-55 {margin-top: 55px;}\n.m-t-56 {margin-top: 56px;}\n.m-t-57 {margin-top: 57px;}\n.m-t-58 {margin-top: 58px;}\n.m-t-59 {margin-top: 59px;}\n.m-t-60 {margin-top: 60px;}\n.m-t-61 {margin-top: 61px;}\n.m-t-62 {margin-top: 62px;}\n.m-t-63 {margin-top: 63px;}\n.m-t-64 {margin-top: 64px;}\n.m-t-65 {margin-top: 65px;}\n.m-t-66 {margin-top: 66px;}\n.m-t-67 {margin-top: 67px;}\n.m-t-68 {margin-top: 68px;}\n.m-t-69 {margin-top: 69px;}\n.m-t-70 {margin-top: 70px;}\n.m-t-71 {margin-top: 71px;}\n.m-t-72 {margin-top: 72px;}\n.m-t-73 {margin-top: 73px;}\n.m-t-74 {margin-top: 74px;}\n.m-t-75 {margin-top: 75px;}\n.m-t-76 {margin-top: 76px;}\n.m-t-77 {margin-top: 77px;}\n.m-t-78 {margin-top: 78px;}\n.m-t-79 {margin-top: 79px;}\n.m-t-80 {margin-top: 80px;}\n.m-t-81 {margin-top: 81px;}\n.m-t-82 {margin-top: 82px;}\n.m-t-83 {margin-top: 83px;}\n.m-t-84 {margin-top: 84px;}\n.m-t-85 {margin-top: 85px;}\n.m-t-86 {margin-top: 86px;}\n.m-t-87 {margin-top: 87px;}\n.m-t-88 {margin-top: 88px;}\n.m-t-89 {margin-top: 89px;}\n.m-t-90 {margin-top: 90px;}\n.m-t-91 {margin-top: 91px;}\n.m-t-92 {margin-top: 92px;}\n.m-t-93 {margin-top: 93px;}\n.m-t-94 {margin-top: 94px;}\n.m-t-95 {margin-top: 95px;}\n.m-t-96 {margin-top: 96px;}\n.m-t-97 {margin-top: 97px;}\n.m-t-98 {margin-top: 98px;}\n.m-t-99 {margin-top: 99px;}\n.m-t-100 {margin-top: 100px;}\n.m-t-101 {margin-top: 101px;}\n.m-t-102 {margin-top: 102px;}\n.m-t-103 {margin-top: 103px;}\n.m-t-104 {margin-top: 104px;}\n.m-t-105 {margin-top: 105px;}\n.m-t-106 {margin-top: 106px;}\n.m-t-107 {margin-top: 107px;}\n.m-t-108 {margin-top: 108px;}\n.m-t-109 {margin-top: 109px;}\n.m-t-110 {margin-top: 110px;}\n.m-t-111 {margin-top: 111px;}\n.m-t-112 {margin-top: 112px;}\n.m-t-113 {margin-top: 113px;}\n.m-t-114 {margin-top: 114px;}\n.m-t-115 {margin-top: 115px;}\n.m-t-116 {margin-top: 116px;}\n.m-t-117 {margin-top: 117px;}\n.m-t-118 {margin-top: 118px;}\n.m-t-119 {margin-top: 119px;}\n.m-t-120 {margin-top: 120px;}\n.m-t-121 {margin-top: 121px;}\n.m-t-122 {margin-top: 122px;}\n.m-t-123 {margin-top: 123px;}\n.m-t-124 {margin-top: 124px;}\n.m-t-125 {margin-top: 125px;}\n.m-t-126 {margin-top: 126px;}\n.m-t-127 {margin-top: 127px;}\n.m-t-128 {margin-top: 128px;}\n.m-t-129 {margin-top: 129px;}\n.m-t-130 {margin-top: 130px;}\n.m-t-131 {margin-top: 131px;}\n.m-t-132 {margin-top: 132px;}\n.m-t-133 {margin-top: 133px;}\n.m-t-134 {margin-top: 134px;}\n.m-t-135 {margin-top: 135px;}\n.m-t-136 {margin-top: 136px;}\n.m-t-137 {margin-top: 137px;}\n.m-t-138 {margin-top: 138px;}\n.m-t-139 {margin-top: 139px;}\n.m-t-140 {margin-top: 140px;}\n.m-t-141 {margin-top: 141px;}\n.m-t-142 {margin-top: 142px;}\n.m-t-143 {margin-top: 143px;}\n.m-t-144 {margin-top: 144px;}\n.m-t-145 {margin-top: 145px;}\n.m-t-146 {margin-top: 146px;}\n.m-t-147 {margin-top: 147px;}\n.m-t-148 {margin-top: 148px;}\n.m-t-149 {margin-top: 149px;}\n.m-t-150 {margin-top: 150px;}\n.m-t-151 {margin-top: 151px;}\n.m-t-152 {margin-top: 152px;}\n.m-t-153 {margin-top: 153px;}\n.m-t-154 {margin-top: 154px;}\n.m-t-155 {margin-top: 155px;}\n.m-t-156 {margin-top: 156px;}\n.m-t-157 {margin-top: 157px;}\n.m-t-158 {margin-top: 158px;}\n.m-t-159 {margin-top: 159px;}\n.m-t-160 {margin-top: 160px;}\n.m-t-161 {margin-top: 161px;}\n.m-t-162 {margin-top: 162px;}\n.m-t-163 {margin-top: 163px;}\n.m-t-164 {margin-top: 164px;}\n.m-t-165 {margin-top: 165px;}\n.m-t-166 {margin-top: 166px;}\n.m-t-167 {margin-top: 167px;}\n.m-t-168 {margin-top: 168px;}\n.m-t-169 {margin-top: 169px;}\n.m-t-170 {margin-top: 170px;}\n.m-t-171 {margin-top: 171px;}\n.m-t-172 {margin-top: 172px;}\n.m-t-173 {margin-top: 173px;}\n.m-t-174 {margin-top: 174px;}\n.m-t-175 {margin-top: 175px;}\n.m-t-176 {margin-top: 176px;}\n.m-t-177 {margin-top: 177px;}\n.m-t-178 {margin-top: 178px;}\n.m-t-179 {margin-top: 179px;}\n.m-t-180 {margin-top: 180px;}\n.m-t-181 {margin-top: 181px;}\n.m-t-182 {margin-top: 182px;}\n.m-t-183 {margin-top: 183px;}\n.m-t-184 {margin-top: 184px;}\n.m-t-185 {margin-top: 185px;}\n.m-t-186 {margin-top: 186px;}\n.m-t-187 {margin-top: 187px;}\n.m-t-188 {margin-top: 188px;}\n.m-t-189 {margin-top: 189px;}\n.m-t-190 {margin-top: 190px;}\n.m-t-191 {margin-top: 191px;}\n.m-t-192 {margin-top: 192px;}\n.m-t-193 {margin-top: 193px;}\n.m-t-194 {margin-top: 194px;}\n.m-t-195 {margin-top: 195px;}\n.m-t-196 {margin-top: 196px;}\n.m-t-197 {margin-top: 197px;}\n.m-t-198 {margin-top: 198px;}\n.m-t-199 {margin-top: 199px;}\n.m-t-200 {margin-top: 200px;}\n.m-t-201 {margin-top: 201px;}\n.m-t-202 {margin-top: 202px;}\n.m-t-203 {margin-top: 203px;}\n.m-t-204 {margin-top: 204px;}\n.m-t-205 {margin-top: 205px;}\n.m-t-206 {margin-top: 206px;}\n.m-t-207 {margin-top: 207px;}\n.m-t-208 {margin-top: 208px;}\n.m-t-209 {margin-top: 209px;}\n.m-t-210 {margin-top: 210px;}\n.m-t-211 {margin-top: 211px;}\n.m-t-212 {margin-top: 212px;}\n.m-t-213 {margin-top: 213px;}\n.m-t-214 {margin-top: 214px;}\n.m-t-215 {margin-top: 215px;}\n.m-t-216 {margin-top: 216px;}\n.m-t-217 {margin-top: 217px;}\n.m-t-218 {margin-top: 218px;}\n.m-t-219 {margin-top: 219px;}\n.m-t-220 {margin-top: 220px;}\n.m-t-221 {margin-top: 221px;}\n.m-t-222 {margin-top: 222px;}\n.m-t-223 {margin-top: 223px;}\n.m-t-224 {margin-top: 224px;}\n.m-t-225 {margin-top: 225px;}\n.m-t-226 {margin-top: 226px;}\n.m-t-227 {margin-top: 227px;}\n.m-t-228 {margin-top: 228px;}\n.m-t-229 {margin-top: 229px;}\n.m-t-230 {margin-top: 230px;}\n.m-t-231 {margin-top: 231px;}\n.m-t-232 {margin-top: 232px;}\n.m-t-233 {margin-top: 233px;}\n.m-t-234 {margin-top: 234px;}\n.m-t-235 {margin-top: 235px;}\n.m-t-236 {margin-top: 236px;}\n.m-t-237 {margin-top: 237px;}\n.m-t-238 {margin-top: 238px;}\n.m-t-239 {margin-top: 239px;}\n.m-t-240 {margin-top: 240px;}\n.m-t-241 {margin-top: 241px;}\n.m-t-242 {margin-top: 242px;}\n.m-t-243 {margin-top: 243px;}\n.m-t-244 {margin-top: 244px;}\n.m-t-245 {margin-top: 245px;}\n.m-t-246 {margin-top: 246px;}\n.m-t-247 {margin-top: 247px;}\n.m-t-248 {margin-top: 248px;}\n.m-t-249 {margin-top: 249px;}\n.m-t-250 {margin-top: 250px;}\n.m-b-0 {margin-bottom: 0px;}\n.m-b-1 {margin-bottom: 1px;}\n.m-b-2 {margin-bottom: 2px;}\n.m-b-3 {margin-bottom: 3px;}\n.m-b-4 {margin-bottom: 4px;}\n.m-b-5 {margin-bottom: 5px;}\n.m-b-6 {margin-bottom: 6px;}\n.m-b-7 {margin-bottom: 7px;}\n.m-b-8 {margin-bottom: 8px;}\n.m-b-9 {margin-bottom: 9px;}\n.m-b-10 {margin-bottom: 10px;}\n.m-b-11 {margin-bottom: 11px;}\n.m-b-12 {margin-bottom: 12px;}\n.m-b-13 {margin-bottom: 13px;}\n.m-b-14 {margin-bottom: 14px;}\n.m-b-15 {margin-bottom: 15px;}\n.m-b-16 {margin-bottom: 16px;}\n.m-b-17 {margin-bottom: 17px;}\n.m-b-18 {margin-bottom: 18px;}\n.m-b-19 {margin-bottom: 19px;}\n.m-b-20 {margin-bottom: 20px;}\n.m-b-21 {margin-bottom: 21px;}\n.m-b-22 {margin-bottom: 22px;}\n.m-b-23 {margin-bottom: 23px;}\n.m-b-24 {margin-bottom: 24px;}\n.m-b-25 {margin-bottom: 25px;}\n.m-b-26 {margin-bottom: 26px;}\n.m-b-27 {margin-bottom: 27px;}\n.m-b-28 {margin-bottom: 28px;}\n.m-b-29 {margin-bottom: 29px;}\n.m-b-30 {margin-bottom: 30px;}\n.m-b-31 {margin-bottom: 31px;}\n.m-b-32 {margin-bottom: 32px;}\n.m-b-33 {margin-bottom: 33px;}\n.m-b-34 {margin-bottom: 34px;}\n.m-b-35 {margin-bottom: 35px;}\n.m-b-36 {margin-bottom: 36px;}\n.m-b-37 {margin-bottom: 37px;}\n.m-b-38 {margin-bottom: 38px;}\n.m-b-39 {margin-bottom: 39px;}\n.m-b-40 {margin-bottom: 40px;}\n.m-b-41 {margin-bottom: 41px;}\n.m-b-42 {margin-bottom: 42px;}\n.m-b-43 {margin-bottom: 43px;}\n.m-b-44 {margin-bottom: 44px;}\n.m-b-45 {margin-bottom: 45px;}\n.m-b-46 {margin-bottom: 46px;}\n.m-b-47 {margin-bottom: 47px;}\n.m-b-48 {margin-bottom: 48px;}\n.m-b-49 {margin-bottom: 49px;}\n.m-b-50 {margin-bottom: 50px;}\n.m-b-51 {margin-bottom: 51px;}\n.m-b-52 {margin-bottom: 52px;}\n.m-b-53 {margin-bottom: 53px;}\n.m-b-54 {margin-bottom: 54px;}\n.m-b-55 {margin-bottom: 55px;}\n.m-b-56 {margin-bottom: 56px;}\n.m-b-57 {margin-bottom: 57px;}\n.m-b-58 {margin-bottom: 58px;}\n.m-b-59 {margin-bottom: 59px;}\n.m-b-60 {margin-bottom: 60px;}\n.m-b-61 {margin-bottom: 61px;}\n.m-b-62 {margin-bottom: 62px;}\n.m-b-63 {margin-bottom: 63px;}\n.m-b-64 {margin-bottom: 64px;}\n.m-b-65 {margin-bottom: 65px;}\n.m-b-66 {margin-bottom: 66px;}\n.m-b-67 {margin-bottom: 67px;}\n.m-b-68 {margin-bottom: 68px;}\n.m-b-69 {margin-bottom: 69px;}\n.m-b-70 {margin-bottom: 70px;}\n.m-b-71 {margin-bottom: 71px;}\n.m-b-72 {margin-bottom: 72px;}\n.m-b-73 {margin-bottom: 73px;}\n.m-b-74 {margin-bottom: 74px;}\n.m-b-75 {margin-bottom: 75px;}\n.m-b-76 {margin-bottom: 76px;}\n.m-b-77 {margin-bottom: 77px;}\n.m-b-78 {margin-bottom: 78px;}\n.m-b-79 {margin-bottom: 79px;}\n.m-b-80 {margin-bottom: 80px;}\n.m-b-81 {margin-bottom: 81px;}\n.m-b-82 {margin-bottom: 82px;}\n.m-b-83 {margin-bottom: 83px;}\n.m-b-84 {margin-bottom: 84px;}\n.m-b-85 {margin-bottom: 85px;}\n.m-b-86 {margin-bottom: 86px;}\n.m-b-87 {margin-bottom: 87px;}\n.m-b-88 {margin-bottom: 88px;}\n.m-b-89 {margin-bottom: 89px;}\n.m-b-90 {margin-bottom: 90px;}\n.m-b-91 {margin-bottom: 91px;}\n.m-b-92 {margin-bottom: 92px;}\n.m-b-93 {margin-bottom: 93px;}\n.m-b-94 {margin-bottom: 94px;}\n.m-b-95 {margin-bottom: 95px;}\n.m-b-96 {margin-bottom: 96px;}\n.m-b-97 {margin-bottom: 97px;}\n.m-b-98 {margin-bottom: 98px;}\n.m-b-99 {margin-bottom: 99px;}\n.m-b-100 {margin-bottom: 100px;}\n.m-b-101 {margin-bottom: 101px;}\n.m-b-102 {margin-bottom: 102px;}\n.m-b-103 {margin-bottom: 103px;}\n.m-b-104 {margin-bottom: 104px;}\n.m-b-105 {margin-bottom: 105px;}\n.m-b-106 {margin-bottom: 106px;}\n.m-b-107 {margin-bottom: 107px;}\n.m-b-108 {margin-bottom: 108px;}\n.m-b-109 {margin-bottom: 109px;}\n.m-b-110 {margin-bottom: 110px;}\n.m-b-111 {margin-bottom: 111px;}\n.m-b-112 {margin-bottom: 112px;}\n.m-b-113 {margin-bottom: 113px;}\n.m-b-114 {margin-bottom: 114px;}\n.m-b-115 {margin-bottom: 115px;}\n.m-b-116 {margin-bottom: 116px;}\n.m-b-117 {margin-bottom: 117px;}\n.m-b-118 {margin-bottom: 118px;}\n.m-b-119 {margin-bottom: 119px;}\n.m-b-120 {margin-bottom: 120px;}\n.m-b-121 {margin-bottom: 121px;}\n.m-b-122 {margin-bottom: 122px;}\n.m-b-123 {margin-bottom: 123px;}\n.m-b-124 {margin-bottom: 124px;}\n.m-b-125 {margin-bottom: 125px;}\n.m-b-126 {margin-bottom: 126px;}\n.m-b-127 {margin-bottom: 127px;}\n.m-b-128 {margin-bottom: 128px;}\n.m-b-129 {margin-bottom: 129px;}\n.m-b-130 {margin-bottom: 130px;}\n.m-b-131 {margin-bottom: 131px;}\n.m-b-132 {margin-bottom: 132px;}\n.m-b-133 {margin-bottom: 133px;}\n.m-b-134 {margin-bottom: 134px;}\n.m-b-135 {margin-bottom: 135px;}\n.m-b-136 {margin-bottom: 136px;}\n.m-b-137 {margin-bottom: 137px;}\n.m-b-138 {margin-bottom: 138px;}\n.m-b-139 {margin-bottom: 139px;}\n.m-b-140 {margin-bottom: 140px;}\n.m-b-141 {margin-bottom: 141px;}\n.m-b-142 {margin-bottom: 142px;}\n.m-b-143 {margin-bottom: 143px;}\n.m-b-144 {margin-bottom: 144px;}\n.m-b-145 {margin-bottom: 145px;}\n.m-b-146 {margin-bottom: 146px;}\n.m-b-147 {margin-bottom: 147px;}\n.m-b-148 {margin-bottom: 148px;}\n.m-b-149 {margin-bottom: 149px;}\n.m-b-150 {margin-bottom: 150px;}\n.m-b-151 {margin-bottom: 151px;}\n.m-b-152 {margin-bottom: 152px;}\n.m-b-153 {margin-bottom: 153px;}\n.m-b-154 {margin-bottom: 154px;}\n.m-b-155 {margin-bottom: 155px;}\n.m-b-156 {margin-bottom: 156px;}\n.m-b-157 {margin-bottom: 157px;}\n.m-b-158 {margin-bottom: 158px;}\n.m-b-159 {margin-bottom: 159px;}\n.m-b-160 {margin-bottom: 160px;}\n.m-b-161 {margin-bottom: 161px;}\n.m-b-162 {margin-bottom: 162px;}\n.m-b-163 {margin-bottom: 163px;}\n.m-b-164 {margin-bottom: 164px;}\n.m-b-165 {margin-bottom: 165px;}\n.m-b-166 {margin-bottom: 166px;}\n.m-b-167 {margin-bottom: 167px;}\n.m-b-168 {margin-bottom: 168px;}\n.m-b-169 {margin-bottom: 169px;}\n.m-b-170 {margin-bottom: 170px;}\n.m-b-171 {margin-bottom: 171px;}\n.m-b-172 {margin-bottom: 172px;}\n.m-b-173 {margin-bottom: 173px;}\n.m-b-174 {margin-bottom: 174px;}\n.m-b-175 {margin-bottom: 175px;}\n.m-b-176 {margin-bottom: 176px;}\n.m-b-177 {margin-bottom: 177px;}\n.m-b-178 {margin-bottom: 178px;}\n.m-b-179 {margin-bottom: 179px;}\n.m-b-180 {margin-bottom: 180px;}\n.m-b-181 {margin-bottom: 181px;}\n.m-b-182 {margin-bottom: 182px;}\n.m-b-183 {margin-bottom: 183px;}\n.m-b-184 {margin-bottom: 184px;}\n.m-b-185 {margin-bottom: 185px;}\n.m-b-186 {margin-bottom: 186px;}\n.m-b-187 {margin-bottom: 187px;}\n.m-b-188 {margin-bottom: 188px;}\n.m-b-189 {margin-bottom: 189px;}\n.m-b-190 {margin-bottom: 190px;}\n.m-b-191 {margin-bottom: 191px;}\n.m-b-192 {margin-bottom: 192px;}\n.m-b-193 {margin-bottom: 193px;}\n.m-b-194 {margin-bottom: 194px;}\n.m-b-195 {margin-bottom: 195px;}\n.m-b-196 {margin-bottom: 196px;}\n.m-b-197 {margin-bottom: 197px;}\n.m-b-198 {margin-bottom: 198px;}\n.m-b-199 {margin-bottom: 199px;}\n.m-b-200 {margin-bottom: 200px;}\n.m-b-201 {margin-bottom: 201px;}\n.m-b-202 {margin-bottom: 202px;}\n.m-b-203 {margin-bottom: 203px;}\n.m-b-204 {margin-bottom: 204px;}\n.m-b-205 {margin-bottom: 205px;}\n.m-b-206 {margin-bottom: 206px;}\n.m-b-207 {margin-bottom: 207px;}\n.m-b-208 {margin-bottom: 208px;}\n.m-b-209 {margin-bottom: 209px;}\n.m-b-210 {margin-bottom: 210px;}\n.m-b-211 {margin-bottom: 211px;}\n.m-b-212 {margin-bottom: 212px;}\n.m-b-213 {margin-bottom: 213px;}\n.m-b-214 {margin-bottom: 214px;}\n.m-b-215 {margin-bottom: 215px;}\n.m-b-216 {margin-bottom: 216px;}\n.m-b-217 {margin-bottom: 217px;}\n.m-b-218 {margin-bottom: 218px;}\n.m-b-219 {margin-bottom: 219px;}\n.m-b-220 {margin-bottom: 220px;}\n.m-b-221 {margin-bottom: 221px;}\n.m-b-222 {margin-bottom: 222px;}\n.m-b-223 {margin-bottom: 223px;}\n.m-b-224 {margin-bottom: 224px;}\n.m-b-225 {margin-bottom: 225px;}\n.m-b-226 {margin-bottom: 226px;}\n.m-b-227 {margin-bottom: 227px;}\n.m-b-228 {margin-bottom: 228px;}\n.m-b-229 {margin-bottom: 229px;}\n.m-b-230 {margin-bottom: 230px;}\n.m-b-231 {margin-bottom: 231px;}\n.m-b-232 {margin-bottom: 232px;}\n.m-b-233 {margin-bottom: 233px;}\n.m-b-234 {margin-bottom: 234px;}\n.m-b-235 {margin-bottom: 235px;}\n.m-b-236 {margin-bottom: 236px;}\n.m-b-237 {margin-bottom: 237px;}\n.m-b-238 {margin-bottom: 238px;}\n.m-b-239 {margin-bottom: 239px;}\n.m-b-240 {margin-bottom: 240px;}\n.m-b-241 {margin-bottom: 241px;}\n.m-b-242 {margin-bottom: 242px;}\n.m-b-243 {margin-bottom: 243px;}\n.m-b-244 {margin-bottom: 244px;}\n.m-b-245 {margin-bottom: 245px;}\n.m-b-246 {margin-bottom: 246px;}\n.m-b-247 {margin-bottom: 247px;}\n.m-b-248 {margin-bottom: 248px;}\n.m-b-249 {margin-bottom: 249px;}\n.m-b-250 {margin-bottom: 250px;}\n.m-l-0 {margin-left: 0px;}\n.m-l-1 {margin-left: 1px;}\n.m-l-2 {margin-left: 2px;}\n.m-l-3 {margin-left: 3px;}\n.m-l-4 {margin-left: 4px;}\n.m-l-5 {margin-left: 5px;}\n.m-l-6 {margin-left: 6px;}\n.m-l-7 {margin-left: 7px;}\n.m-l-8 {margin-left: 8px;}\n.m-l-9 {margin-left: 9px;}\n.m-l-10 {margin-left: 10px;}\n.m-l-11 {margin-left: 11px;}\n.m-l-12 {margin-left: 12px;}\n.m-l-13 {margin-left: 13px;}\n.m-l-14 {margin-left: 14px;}\n.m-l-15 {margin-left: 15px;}\n.m-l-16 {margin-left: 16px;}\n.m-l-17 {margin-left: 17px;}\n.m-l-18 {margin-left: 18px;}\n.m-l-19 {margin-left: 19px;}\n.m-l-20 {margin-left: 20px;}\n.m-l-21 {margin-left: 21px;}\n.m-l-22 {margin-left: 22px;}\n.m-l-23 {margin-left: 23px;}\n.m-l-24 {margin-left: 24px;}\n.m-l-25 {margin-left: 25px;}\n.m-l-26 {margin-left: 26px;}\n.m-l-27 {margin-left: 27px;}\n.m-l-28 {margin-left: 28px;}\n.m-l-29 {margin-left: 29px;}\n.m-l-30 {margin-left: 30px;}\n.m-l-31 {margin-left: 31px;}\n.m-l-32 {margin-left: 32px;}\n.m-l-33 {margin-left: 33px;}\n.m-l-34 {margin-left: 34px;}\n.m-l-35 {margin-left: 35px;}\n.m-l-36 {margin-left: 36px;}\n.m-l-37 {margin-left: 37px;}\n.m-l-38 {margin-left: 38px;}\n.m-l-39 {margin-left: 39px;}\n.m-l-40 {margin-left: 40px;}\n.m-l-41 {margin-left: 41px;}\n.m-l-42 {margin-left: 42px;}\n.m-l-43 {margin-left: 43px;}\n.m-l-44 {margin-left: 44px;}\n.m-l-45 {margin-left: 45px;}\n.m-l-46 {margin-left: 46px;}\n.m-l-47 {margin-left: 47px;}\n.m-l-48 {margin-left: 48px;}\n.m-l-49 {margin-left: 49px;}\n.m-l-50 {margin-left: 50px;}\n.m-l-51 {margin-left: 51px;}\n.m-l-52 {margin-left: 52px;}\n.m-l-53 {margin-left: 53px;}\n.m-l-54 {margin-left: 54px;}\n.m-l-55 {margin-left: 55px;}\n.m-l-56 {margin-left: 56px;}\n.m-l-57 {margin-left: 57px;}\n.m-l-58 {margin-left: 58px;}\n.m-l-59 {margin-left: 59px;}\n.m-l-60 {margin-left: 60px;}\n.m-l-61 {margin-left: 61px;}\n.m-l-62 {margin-left: 62px;}\n.m-l-63 {margin-left: 63px;}\n.m-l-64 {margin-left: 64px;}\n.m-l-65 {margin-left: 65px;}\n.m-l-66 {margin-left: 66px;}\n.m-l-67 {margin-left: 67px;}\n.m-l-68 {margin-left: 68px;}\n.m-l-69 {margin-left: 69px;}\n.m-l-70 {margin-left: 70px;}\n.m-l-71 {margin-left: 71px;}\n.m-l-72 {margin-left: 72px;}\n.m-l-73 {margin-left: 73px;}\n.m-l-74 {margin-left: 74px;}\n.m-l-75 {margin-left: 75px;}\n.m-l-76 {margin-left: 76px;}\n.m-l-77 {margin-left: 77px;}\n.m-l-78 {margin-left: 78px;}\n.m-l-79 {margin-left: 79px;}\n.m-l-80 {margin-left: 80px;}\n.m-l-81 {margin-left: 81px;}\n.m-l-82 {margin-left: 82px;}\n.m-l-83 {margin-left: 83px;}\n.m-l-84 {margin-left: 84px;}\n.m-l-85 {margin-left: 85px;}\n.m-l-86 {margin-left: 86px;}\n.m-l-87 {margin-left: 87px;}\n.m-l-88 {margin-left: 88px;}\n.m-l-89 {margin-left: 89px;}\n.m-l-90 {margin-left: 90px;}\n.m-l-91 {margin-left: 91px;}\n.m-l-92 {margin-left: 92px;}\n.m-l-93 {margin-left: 93px;}\n.m-l-94 {margin-left: 94px;}\n.m-l-95 {margin-left: 95px;}\n.m-l-96 {margin-left: 96px;}\n.m-l-97 {margin-left: 97px;}\n.m-l-98 {margin-left: 98px;}\n.m-l-99 {margin-left: 99px;}\n.m-l-100 {margin-left: 100px;}\n.m-l-101 {margin-left: 101px;}\n.m-l-102 {margin-left: 102px;}\n.m-l-103 {margin-left: 103px;}\n.m-l-104 {margin-left: 104px;}\n.m-l-105 {margin-left: 105px;}\n.m-l-106 {margin-left: 106px;}\n.m-l-107 {margin-left: 107px;}\n.m-l-108 {margin-left: 108px;}\n.m-l-109 {margin-left: 109px;}\n.m-l-110 {margin-left: 110px;}\n.m-l-111 {margin-left: 111px;}\n.m-l-112 {margin-left: 112px;}\n.m-l-113 {margin-left: 113px;}\n.m-l-114 {margin-left: 114px;}\n.m-l-115 {margin-left: 115px;}\n.m-l-116 {margin-left: 116px;}\n.m-l-117 {margin-left: 117px;}\n.m-l-118 {margin-left: 118px;}\n.m-l-119 {margin-left: 119px;}\n.m-l-120 {margin-left: 120px;}\n.m-l-121 {margin-left: 121px;}\n.m-l-122 {margin-left: 122px;}\n.m-l-123 {margin-left: 123px;}\n.m-l-124 {margin-left: 124px;}\n.m-l-125 {margin-left: 125px;}\n.m-l-126 {margin-left: 126px;}\n.m-l-127 {margin-left: 127px;}\n.m-l-128 {margin-left: 128px;}\n.m-l-129 {margin-left: 129px;}\n.m-l-130 {margin-left: 130px;}\n.m-l-131 {margin-left: 131px;}\n.m-l-132 {margin-left: 132px;}\n.m-l-133 {margin-left: 133px;}\n.m-l-134 {margin-left: 134px;}\n.m-l-135 {margin-left: 135px;}\n.m-l-136 {margin-left: 136px;}\n.m-l-137 {margin-left: 137px;}\n.m-l-138 {margin-left: 138px;}\n.m-l-139 {margin-left: 139px;}\n.m-l-140 {margin-left: 140px;}\n.m-l-141 {margin-left: 141px;}\n.m-l-142 {margin-left: 142px;}\n.m-l-143 {margin-left: 143px;}\n.m-l-144 {margin-left: 144px;}\n.m-l-145 {margin-left: 145px;}\n.m-l-146 {margin-left: 146px;}\n.m-l-147 {margin-left: 147px;}\n.m-l-148 {margin-left: 148px;}\n.m-l-149 {margin-left: 149px;}\n.m-l-150 {margin-left: 150px;}\n.m-l-151 {margin-left: 151px;}\n.m-l-152 {margin-left: 152px;}\n.m-l-153 {margin-left: 153px;}\n.m-l-154 {margin-left: 154px;}\n.m-l-155 {margin-left: 155px;}\n.m-l-156 {margin-left: 156px;}\n.m-l-157 {margin-left: 157px;}\n.m-l-158 {margin-left: 158px;}\n.m-l-159 {margin-left: 159px;}\n.m-l-160 {margin-left: 160px;}\n.m-l-161 {margin-left: 161px;}\n.m-l-162 {margin-left: 162px;}\n.m-l-163 {margin-left: 163px;}\n.m-l-164 {margin-left: 164px;}\n.m-l-165 {margin-left: 165px;}\n.m-l-166 {margin-left: 166px;}\n.m-l-167 {margin-left: 167px;}\n.m-l-168 {margin-left: 168px;}\n.m-l-169 {margin-left: 169px;}\n.m-l-170 {margin-left: 170px;}\n.m-l-171 {margin-left: 171px;}\n.m-l-172 {margin-left: 172px;}\n.m-l-173 {margin-left: 173px;}\n.m-l-174 {margin-left: 174px;}\n.m-l-175 {margin-left: 175px;}\n.m-l-176 {margin-left: 176px;}\n.m-l-177 {margin-left: 177px;}\n.m-l-178 {margin-left: 178px;}\n.m-l-179 {margin-left: 179px;}\n.m-l-180 {margin-left: 180px;}\n.m-l-181 {margin-left: 181px;}\n.m-l-182 {margin-left: 182px;}\n.m-l-183 {margin-left: 183px;}\n.m-l-184 {margin-left: 184px;}\n.m-l-185 {margin-left: 185px;}\n.m-l-186 {margin-left: 186px;}\n.m-l-187 {margin-left: 187px;}\n.m-l-188 {margin-left: 188px;}\n.m-l-189 {margin-left: 189px;}\n.m-l-190 {margin-left: 190px;}\n.m-l-191 {margin-left: 191px;}\n.m-l-192 {margin-left: 192px;}\n.m-l-193 {margin-left: 193px;}\n.m-l-194 {margin-left: 194px;}\n.m-l-195 {margin-left: 195px;}\n.m-l-196 {margin-left: 196px;}\n.m-l-197 {margin-left: 197px;}\n.m-l-198 {margin-left: 198px;}\n.m-l-199 {margin-left: 199px;}\n.m-l-200 {margin-left: 200px;}\n.m-l-201 {margin-left: 201px;}\n.m-l-202 {margin-left: 202px;}\n.m-l-203 {margin-left: 203px;}\n.m-l-204 {margin-left: 204px;}\n.m-l-205 {margin-left: 205px;}\n.m-l-206 {margin-left: 206px;}\n.m-l-207 {margin-left: 207px;}\n.m-l-208 {margin-left: 208px;}\n.m-l-209 {margin-left: 209px;}\n.m-l-210 {margin-left: 210px;}\n.m-l-211 {margin-left: 211px;}\n.m-l-212 {margin-left: 212px;}\n.m-l-213 {margin-left: 213px;}\n.m-l-214 {margin-left: 214px;}\n.m-l-215 {margin-left: 215px;}\n.m-l-216 {margin-left: 216px;}\n.m-l-217 {margin-left: 217px;}\n.m-l-218 {margin-left: 218px;}\n.m-l-219 {margin-left: 219px;}\n.m-l-220 {margin-left: 220px;}\n.m-l-221 {margin-left: 221px;}\n.m-l-222 {margin-left: 222px;}\n.m-l-223 {margin-left: 223px;}\n.m-l-224 {margin-left: 224px;}\n.m-l-225 {margin-left: 225px;}\n.m-l-226 {margin-left: 226px;}\n.m-l-227 {margin-left: 227px;}\n.m-l-228 {margin-left: 228px;}\n.m-l-229 {margin-left: 229px;}\n.m-l-230 {margin-left: 230px;}\n.m-l-231 {margin-left: 231px;}\n.m-l-232 {margin-left: 232px;}\n.m-l-233 {margin-left: 233px;}\n.m-l-234 {margin-left: 234px;}\n.m-l-235 {margin-left: 235px;}\n.m-l-236 {margin-left: 236px;}\n.m-l-237 {margin-left: 237px;}\n.m-l-238 {margin-left: 238px;}\n.m-l-239 {margin-left: 239px;}\n.m-l-240 {margin-left: 240px;}\n.m-l-241 {margin-left: 241px;}\n.m-l-242 {margin-left: 242px;}\n.m-l-243 {margin-left: 243px;}\n.m-l-244 {margin-left: 244px;}\n.m-l-245 {margin-left: 245px;}\n.m-l-246 {margin-left: 246px;}\n.m-l-247 {margin-left: 247px;}\n.m-l-248 {margin-left: 248px;}\n.m-l-249 {margin-left: 249px;}\n.m-l-250 {margin-left: 250px;}\n.m-r-0 {margin-right: 0px;}\n.m-r-1 {margin-right: 1px;}\n.m-r-2 {margin-right: 2px;}\n.m-r-3 {margin-right: 3px;}\n.m-r-4 {margin-right: 4px;}\n.m-r-5 {margin-right: 5px;}\n.m-r-6 {margin-right: 6px;}\n.m-r-7 {margin-right: 7px;}\n.m-r-8 {margin-right: 8px;}\n.m-r-9 {margin-right: 9px;}\n.m-r-10 {margin-right: 10px;}\n.m-r-11 {margin-right: 11px;}\n.m-r-12 {margin-right: 12px;}\n.m-r-13 {margin-right: 13px;}\n.m-r-14 {margin-right: 14px;}\n.m-r-15 {margin-right: 15px;}\n.m-r-16 {margin-right: 16px;}\n.m-r-17 {margin-right: 17px;}\n.m-r-18 {margin-right: 18px;}\n.m-r-19 {margin-right: 19px;}\n.m-r-20 {margin-right: 20px;}\n.m-r-21 {margin-right: 21px;}\n.m-r-22 {margin-right: 22px;}\n.m-r-23 {margin-right: 23px;}\n.m-r-24 {margin-right: 24px;}\n.m-r-25 {margin-right: 25px;}\n.m-r-26 {margin-right: 26px;}\n.m-r-27 {margin-right: 27px;}\n.m-r-28 {margin-right: 28px;}\n.m-r-29 {margin-right: 29px;}\n.m-r-30 {margin-right: 30px;}\n.m-r-31 {margin-right: 31px;}\n.m-r-32 {margin-right: 32px;}\n.m-r-33 {margin-right: 33px;}\n.m-r-34 {margin-right: 34px;}\n.m-r-35 {margin-right: 35px;}\n.m-r-36 {margin-right: 36px;}\n.m-r-37 {margin-right: 37px;}\n.m-r-38 {margin-right: 38px;}\n.m-r-39 {margin-right: 39px;}\n.m-r-40 {margin-right: 40px;}\n.m-r-41 {margin-right: 41px;}\n.m-r-42 {margin-right: 42px;}\n.m-r-43 {margin-right: 43px;}\n.m-r-44 {margin-right: 44px;}\n.m-r-45 {margin-right: 45px;}\n.m-r-46 {margin-right: 46px;}\n.m-r-47 {margin-right: 47px;}\n.m-r-48 {margin-right: 48px;}\n.m-r-49 {margin-right: 49px;}\n.m-r-50 {margin-right: 50px;}\n.m-r-51 {margin-right: 51px;}\n.m-r-52 {margin-right: 52px;}\n.m-r-53 {margin-right: 53px;}\n.m-r-54 {margin-right: 54px;}\n.m-r-55 {margin-right: 55px;}\n.m-r-56 {margin-right: 56px;}\n.m-r-57 {margin-right: 57px;}\n.m-r-58 {margin-right: 58px;}\n.m-r-59 {margin-right: 59px;}\n.m-r-60 {margin-right: 60px;}\n.m-r-61 {margin-right: 61px;}\n.m-r-62 {margin-right: 62px;}\n.m-r-63 {margin-right: 63px;}\n.m-r-64 {margin-right: 64px;}\n.m-r-65 {margin-right: 65px;}\n.m-r-66 {margin-right: 66px;}\n.m-r-67 {margin-right: 67px;}\n.m-r-68 {margin-right: 68px;}\n.m-r-69 {margin-right: 69px;}\n.m-r-70 {margin-right: 70px;}\n.m-r-71 {margin-right: 71px;}\n.m-r-72 {margin-right: 72px;}\n.m-r-73 {margin-right: 73px;}\n.m-r-74 {margin-right: 74px;}\n.m-r-75 {margin-right: 75px;}\n.m-r-76 {margin-right: 76px;}\n.m-r-77 {margin-right: 77px;}\n.m-r-78 {margin-right: 78px;}\n.m-r-79 {margin-right: 79px;}\n.m-r-80 {margin-right: 80px;}\n.m-r-81 {margin-right: 81px;}\n.m-r-82 {margin-right: 82px;}\n.m-r-83 {margin-right: 83px;}\n.m-r-84 {margin-right: 84px;}\n.m-r-85 {margin-right: 85px;}\n.m-r-86 {margin-right: 86px;}\n.m-r-87 {margin-right: 87px;}\n.m-r-88 {margin-right: 88px;}\n.m-r-89 {margin-right: 89px;}\n.m-r-90 {margin-right: 90px;}\n.m-r-91 {margin-right: 91px;}\n.m-r-92 {margin-right: 92px;}\n.m-r-93 {margin-right: 93px;}\n.m-r-94 {margin-right: 94px;}\n.m-r-95 {margin-right: 95px;}\n.m-r-96 {margin-right: 96px;}\n.m-r-97 {margin-right: 97px;}\n.m-r-98 {margin-right: 98px;}\n.m-r-99 {margin-right: 99px;}\n.m-r-100 {margin-right: 100px;}\n.m-r-101 {margin-right: 101px;}\n.m-r-102 {margin-right: 102px;}\n.m-r-103 {margin-right: 103px;}\n.m-r-104 {margin-right: 104px;}\n.m-r-105 {margin-right: 105px;}\n.m-r-106 {margin-right: 106px;}\n.m-r-107 {margin-right: 107px;}\n.m-r-108 {margin-right: 108px;}\n.m-r-109 {margin-right: 109px;}\n.m-r-110 {margin-right: 110px;}\n.m-r-111 {margin-right: 111px;}\n.m-r-112 {margin-right: 112px;}\n.m-r-113 {margin-right: 113px;}\n.m-r-114 {margin-right: 114px;}\n.m-r-115 {margin-right: 115px;}\n.m-r-116 {margin-right: 116px;}\n.m-r-117 {margin-right: 117px;}\n.m-r-118 {margin-right: 118px;}\n.m-r-119 {margin-right: 119px;}\n.m-r-120 {margin-right: 120px;}\n.m-r-121 {margin-right: 121px;}\n.m-r-122 {margin-right: 122px;}\n.m-r-123 {margin-right: 123px;}\n.m-r-124 {margin-right: 124px;}\n.m-r-125 {margin-right: 125px;}\n.m-r-126 {margin-right: 126px;}\n.m-r-127 {margin-right: 127px;}\n.m-r-128 {margin-right: 128px;}\n.m-r-129 {margin-right: 129px;}\n.m-r-130 {margin-right: 130px;}\n.m-r-131 {margin-right: 131px;}\n.m-r-132 {margin-right: 132px;}\n.m-r-133 {margin-right: 133px;}\n.m-r-134 {margin-right: 134px;}\n.m-r-135 {margin-right: 135px;}\n.m-r-136 {margin-right: 136px;}\n.m-r-137 {margin-right: 137px;}\n.m-r-138 {margin-right: 138px;}\n.m-r-139 {margin-right: 139px;}\n.m-r-140 {margin-right: 140px;}\n.m-r-141 {margin-right: 141px;}\n.m-r-142 {margin-right: 142px;}\n.m-r-143 {margin-right: 143px;}\n.m-r-144 {margin-right: 144px;}\n.m-r-145 {margin-right: 145px;}\n.m-r-146 {margin-right: 146px;}\n.m-r-147 {margin-right: 147px;}\n.m-r-148 {margin-right: 148px;}\n.m-r-149 {margin-right: 149px;}\n.m-r-150 {margin-right: 150px;}\n.m-r-151 {margin-right: 151px;}\n.m-r-152 {margin-right: 152px;}\n.m-r-153 {margin-right: 153px;}\n.m-r-154 {margin-right: 154px;}\n.m-r-155 {margin-right: 155px;}\n.m-r-156 {margin-right: 156px;}\n.m-r-157 {margin-right: 157px;}\n.m-r-158 {margin-right: 158px;}\n.m-r-159 {margin-right: 159px;}\n.m-r-160 {margin-right: 160px;}\n.m-r-161 {margin-right: 161px;}\n.m-r-162 {margin-right: 162px;}\n.m-r-163 {margin-right: 163px;}\n.m-r-164 {margin-right: 164px;}\n.m-r-165 {margin-right: 165px;}\n.m-r-166 {margin-right: 166px;}\n.m-r-167 {margin-right: 167px;}\n.m-r-168 {margin-right: 168px;}\n.m-r-169 {margin-right: 169px;}\n.m-r-170 {margin-right: 170px;}\n.m-r-171 {margin-right: 171px;}\n.m-r-172 {margin-right: 172px;}\n.m-r-173 {margin-right: 173px;}\n.m-r-174 {margin-right: 174px;}\n.m-r-175 {margin-right: 175px;}\n.m-r-176 {margin-right: 176px;}\n.m-r-177 {margin-right: 177px;}\n.m-r-178 {margin-right: 178px;}\n.m-r-179 {margin-right: 179px;}\n.m-r-180 {margin-right: 180px;}\n.m-r-181 {margin-right: 181px;}\n.m-r-182 {margin-right: 182px;}\n.m-r-183 {margin-right: 183px;}\n.m-r-184 {margin-right: 184px;}\n.m-r-185 {margin-right: 185px;}\n.m-r-186 {margin-right: 186px;}\n.m-r-187 {margin-right: 187px;}\n.m-r-188 {margin-right: 188px;}\n.m-r-189 {margin-right: 189px;}\n.m-r-190 {margin-right: 190px;}\n.m-r-191 {margin-right: 191px;}\n.m-r-192 {margin-right: 192px;}\n.m-r-193 {margin-right: 193px;}\n.m-r-194 {margin-right: 194px;}\n.m-r-195 {margin-right: 195px;}\n.m-r-196 {margin-right: 196px;}\n.m-r-197 {margin-right: 197px;}\n.m-r-198 {margin-right: 198px;}\n.m-r-199 {margin-right: 199px;}\n.m-r-200 {margin-right: 200px;}\n.m-r-201 {margin-right: 201px;}\n.m-r-202 {margin-right: 202px;}\n.m-r-203 {margin-right: 203px;}\n.m-r-204 {margin-right: 204px;}\n.m-r-205 {margin-right: 205px;}\n.m-r-206 {margin-right: 206px;}\n.m-r-207 {margin-right: 207px;}\n.m-r-208 {margin-right: 208px;}\n.m-r-209 {margin-right: 209px;}\n.m-r-210 {margin-right: 210px;}\n.m-r-211 {margin-right: 211px;}\n.m-r-212 {margin-right: 212px;}\n.m-r-213 {margin-right: 213px;}\n.m-r-214 {margin-right: 214px;}\n.m-r-215 {margin-right: 215px;}\n.m-r-216 {margin-right: 216px;}\n.m-r-217 {margin-right: 217px;}\n.m-r-218 {margin-right: 218px;}\n.m-r-219 {margin-right: 219px;}\n.m-r-220 {margin-right: 220px;}\n.m-r-221 {margin-right: 221px;}\n.m-r-222 {margin-right: 222px;}\n.m-r-223 {margin-right: 223px;}\n.m-r-224 {margin-right: 224px;}\n.m-r-225 {margin-right: 225px;}\n.m-r-226 {margin-right: 226px;}\n.m-r-227 {margin-right: 227px;}\n.m-r-228 {margin-right: 228px;}\n.m-r-229 {margin-right: 229px;}\n.m-r-230 {margin-right: 230px;}\n.m-r-231 {margin-right: 231px;}\n.m-r-232 {margin-right: 232px;}\n.m-r-233 {margin-right: 233px;}\n.m-r-234 {margin-right: 234px;}\n.m-r-235 {margin-right: 235px;}\n.m-r-236 {margin-right: 236px;}\n.m-r-237 {margin-right: 237px;}\n.m-r-238 {margin-right: 238px;}\n.m-r-239 {margin-right: 239px;}\n.m-r-240 {margin-right: 240px;}\n.m-r-241 {margin-right: 241px;}\n.m-r-242 {margin-right: 242px;}\n.m-r-243 {margin-right: 243px;}\n.m-r-244 {margin-right: 244px;}\n.m-r-245 {margin-right: 245px;}\n.m-r-246 {margin-right: 246px;}\n.m-r-247 {margin-right: 247px;}\n.m-r-248 {margin-right: 248px;}\n.m-r-249 {margin-right: 249px;}\n.m-r-250 {margin-right: 250px;}\n.m-l-r-auto {margin-left: auto;\tmargin-right: auto;}\n.m-l-auto {margin-left: auto;}\n.m-r-auto {margin-right: auto;}\n\n\n\n/*[ TEXT ]\n///////////////////////////////////////////////////////////\n*/\n/* ------------------------------------ */\n.text-white {color: white;}\n.text-black {color: black;}\n.text-hov-white:hover {color: white;}\n\n/* ------------------------------------ */\n.text-up {text-transform: uppercase;}\n\n/* ------------------------------------ */\n.text-center {text-align: center;}\n.text-left {text-align: left;}\n.text-right {text-align: right;}\n.text-middle {vertical-align: middle;}\n\n/* ------------------------------------ */\n.lh-1-0 {line-height: 1.0;}\n.lh-1-1 {line-height: 1.1;}\n.lh-1-2 {line-height: 1.2;}\n.lh-1-3 {line-height: 1.3;}\n.lh-1-4 {line-height: 1.4;}\n.lh-1-5 {line-height: 1.5;}\n.lh-1-6 {line-height: 1.6;}\n.lh-1-7 {line-height: 1.7;}\n.lh-1-8 {line-height: 1.8;}\n.lh-1-9 {line-height: 1.9;}\n.lh-2-0 {line-height: 2.0;}\n.lh-2-1 {line-height: 2.1;}\n.lh-2-2 {line-height: 2.2;}\n.lh-2-3 {line-height: 2.3;}\n.lh-2-4 {line-height: 2.4;}\n.lh-2-5 {line-height: 2.5;}\n.lh-2-6 {line-height: 2.6;}\n.lh-2-7 {line-height: 2.7;}\n.lh-2-8 {line-height: 2.8;}\n.lh-2-9 {line-height: 2.9;}\n\n\n\n\n\n/*[ SHAPE ]\n///////////////////////////////////////////////////////////\n*/\n\n/*[ Display ]\n-----------------------------------------------------------\n*/\n.dis-none {display: none;}\n.dis-block {display: block;}\n.dis-inline {display: inline;}\n.dis-inline-block {display: inline-block;}\n.dis-flex {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\n\n/*[ Position ]\n-----------------------------------------------------------\n*/\n.pos-relative {position: relative;}\n.pos-absolute {position: absolute;}\n.pos-fixed {position: fixed;}\n\n/*[ float ]\n-----------------------------------------------------------\n*/\n.float-l {float: left;}\n.float-r {float: right;}\n\n\n/*[ Width & Height ]\n-----------------------------------------------------------\n*/\n.sizefull {\n\twidth: 100%;\n\theight: 100%;\n}\n.w-full {width: 100%;}\n.h-full {height: 100%;}\n.max-w-full {max-width: 100%;}\n.max-h-full {max-height: 100%;}\n.min-w-full {min-width: 100%;}\n.min-h-full {min-height: 100%;}\n\n/*[ Top Bottom Left Right ]\n-----------------------------------------------------------\n*/\n.top-0 {top: 0;}\n.bottom-0 {bottom: 0;}\n.left-0 {left: 0;}\n.right-0 {right: 0;}\n.top-auto {top: auto;}\n.bottom-auto {bottom: auto;}\n.left-auto {left: auto;}\n.right-auto {right: auto;}\n\n\n/*[ Opacity ]\n-----------------------------------------------------------\n*/\n.op-0-0 {opacity: 0;}\n.op-0-1 {opacity: 0.1;}\n.op-0-2 {opacity: 0.2;}\n.op-0-3 {opacity: 0.3;}\n.op-0-4 {opacity: 0.4;}\n.op-0-5 {opacity: 0.5;}\n.op-0-6 {opacity: 0.6;}\n.op-0-7 {opacity: 0.7;}\n.op-0-8 {opacity: 0.8;}\n.op-0-9 {opacity: 0.9;}\n.op-1-0 {opacity: 1;}\n\n/*[ Background ]\n-----------------------------------------------------------\n*/\n.bgwhite {background-color: white;}\n.bgblack {background-color: black;}\n\n\n\n/*[ Wrap Picture ]\n-----------------------------------------------------------\n*/\n.wrap-pic-w img {width: 100%;}\n.wrap-pic-max-w img {max-width: 100%;}\n\n/* ------------------------------------ */\n.wrap-pic-h img {height: 100%;}\n.wrap-pic-max-h img {max-height: 100%;}\n\n/* ------------------------------------ */\n.wrap-pic-cir {\n\tborder-radius: 50%;\n\toverflow: hidden;\n}\n.wrap-pic-cir img {\n\twidth: 100%;\n}\n\n\n\n/*[ Hover ]\n-----------------------------------------------------------\n*/\n.hov-pointer:hover {cursor: pointer;}\n\n/* ------------------------------------ */\n.hov-img-zoom {\n\tdisplay: block;\n\toverflow: hidden;\n}\n.hov-img-zoom img{\n\twidth: 100%;\n\t-webkit-transition: all 0.6s;\n    -o-transition: all 0.6s;\n    -moz-transition: all 0.6s;\n    transition: all 0.6s;\n}\n.hov-img-zoom:hover img {\n\t-webkit-transform: scale(1.1);\n  \t-moz-transform: scale(1.1);\n  \t-ms-transform: scale(1.1);\n  \t-o-transform: scale(1.1);\n\ttransform: scale(1.1);\n}\n\n\n\n/*[  ]\n-----------------------------------------------------------\n*/\n.bo-cir {border-radius: 50%;}\n.of-hidden {overflow: hidden;}\n.visible-false {visibility: hidden;}\n.visible-true {visibility: visible;}\n\n\n\n\n/*[ Transition ]\n-----------------------------------------------------------\n*/\n.trans-0-1 {\n\t-webkit-transition: all 0.1s;\n    -o-transition: all 0.1s;\n    -moz-transition: all 0.1s;\n    transition: all 0.1s;\n}\n.trans-0-2 {\n\t-webkit-transition: all 0.2s;\n    -o-transition: all 0.2s;\n    -moz-transition: all 0.2s;\n    transition: all 0.2s;\n}\n.trans-0-3 {\n\t-webkit-transition: all 0.3s;\n    -o-transition: all 0.3s;\n    -moz-transition: all 0.3s;\n    transition: all 0.3s;\n}\n.trans-0-4 {\n\t-webkit-transition: all 0.4s;\n    -o-transition: all 0.4s;\n    -moz-transition: all 0.4s;\n    transition: all 0.4s;\n}\n.trans-0-5 {\n\t-webkit-transition: all 0.5s;\n    -o-transition: all 0.5s;\n    -moz-transition: all 0.5s;\n    transition: all 0.5s;\n}\n.trans-0-6 {\n\t-webkit-transition: all 0.6s;\n    -o-transition: all 0.6s;\n    -moz-transition: all 0.6s;\n    transition: all 0.6s;\n}\n.trans-0-9 {\n\t-webkit-transition: all 0.9s;\n    -o-transition: all 0.9s;\n    -moz-transition: all 0.9s;\n    transition: all 0.9s;\n}\n.trans-1-0 {\n\t-webkit-transition: all 1s;\n    -o-transition: all 1s;\n    -moz-transition: all 1s;\n    transition: all 1s;\n}\n\n\n\n/*[ Layout ]\n///////////////////////////////////////////////////////////\n*/\n\n/*[ Flex ]\n-----------------------------------------------------------\n*/\n/* ------------------------------------ */\n.flex-w {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-flex-wrap: wrap;\n\t-moz-flex-wrap: wrap;\n\t-ms-flex-wrap: wrap;\n\t-o-flex-wrap: wrap;\n\tflex-wrap: wrap;\n}\n\n/* ------------------------------------ */\n.flex-l {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tjustify-content: flex-start;\n}\n.flex-r {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tjustify-content: flex-end;\n}\n.flex-c {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.flex-sa {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tjustify-content: space-around;\n}\n.flex-sb {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n/* ------------------------------------ */\n.flex-t {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-align-items: flex-start;\n\talign-items: flex-start;\n}\n.flex-b {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-align-items: flex-end;\n\talign-items: flex-end;\n}\n.flex-m {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-align-items: center;\n\talign-items: center;\n}\n.flex-str {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-align-items: stretch;\n\talign-items: stretch;\n}\n\n/* ------------------------------------ */\n.flex-row {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-flex-direction: row;\n\t-moz-flex-direction: row;\n\t-ms-flex-direction: row;\n\t-o-flex-direction: row;\n\tflex-direction: row;\n}\n.flex-row-rev {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-flex-direction: row-reverse;\n\t-moz-flex-direction: row-reverse;\n\t-ms-flex-direction: row-reverse;\n\t-o-flex-direction: row-reverse;\n\tflex-direction: row-reverse;\n}\n.flex-col {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-flex-direction: column;\n\t-moz-flex-direction: column;\n\t-ms-flex-direction: column;\n\t-o-flex-direction: column;\n\tflex-direction: column;\n}\n.flex-col-rev {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-flex-direction: column-reverse;\n\t-moz-flex-direction: column-reverse;\n\t-ms-flex-direction: column-reverse;\n\t-o-flex-direction: column-reverse;\n\tflex-direction: column-reverse;\n}\n\n/* ------------------------------------ */\n.flex-c-m {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tjustify-content: center;\n\t-ms-align-items: center;\n\talign-items: center;\n}\n.flex-c-t {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tjustify-content: center;\n\t-ms-align-items: flex-start;\n\talign-items: flex-start;\n}\n.flex-c-b {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tjustify-content: center;\n\t-ms-align-items: flex-end;\n\talign-items: flex-end;\n}\n.flex-c-str {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tjustify-content: center;\n\t-ms-align-items: stretch;\n\talign-items: stretch;\n}\n.flex-l-m {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\t-ms-align-items: center;\n\talign-items: center;\n}\n.flex-r-m {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\t-ms-align-items: center;\n\talign-items: center;\n}\n.flex-sa-m {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\t-ms-align-items: center;\n\talign-items: center;\n}\n.flex-sb-m {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\t-ms-align-items: center;\n\talign-items: center;\n}\n\n/* ------------------------------------ */\n.flex-col-l {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-flex-direction: column;\n\t-moz-flex-direction: column;\n\t-ms-flex-direction: column;\n\t-o-flex-direction: column;\n\tflex-direction: column;\n\t-ms-align-items: flex-start;\n\talign-items: flex-start;\n}\n.flex-col-r {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-flex-direction: column;\n\t-moz-flex-direction: column;\n\t-ms-flex-direction: column;\n\t-o-flex-direction: column;\n\tflex-direction: column;\n\t-ms-align-items: flex-end;\n\talign-items: flex-end;\n}\n.flex-col-c {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-flex-direction: column;\n\t-moz-flex-direction: column;\n\t-ms-flex-direction: column;\n\t-o-flex-direction: column;\n\tflex-direction: column;\n\t-ms-align-items: center;\n\talign-items: center;\n}\n.flex-col-l-m {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-flex-direction: column;\n\t-moz-flex-direction: column;\n\t-ms-flex-direction: column;\n\t-o-flex-direction: column;\n\tflex-direction: column;\n\t-ms-align-items: flex-start;\n\talign-items: flex-start;\n\tjustify-content: center;\n}\n.flex-col-r-m {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-flex-direction: column;\n\t-moz-flex-direction: column;\n\t-ms-flex-direction: column;\n\t-o-flex-direction: column;\n\tflex-direction: column;\n\t-ms-align-items: flex-end;\n\talign-items: flex-end;\n\tjustify-content: center;\n}\n.flex-col-c-m {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-flex-direction: column;\n\t-moz-flex-direction: column;\n\t-ms-flex-direction: column;\n\t-o-flex-direction: column;\n\tflex-direction: column;\n\t-ms-align-items: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n.flex-col-str {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-flex-direction: column;\n\t-moz-flex-direction: column;\n\t-ms-flex-direction: column;\n\t-o-flex-direction: column;\n\tflex-direction: column;\n\t-ms-align-items: stretch;\n\talign-items: stretch;\n}\n.flex-col-sb {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-flex-direction: column;\n\t-moz-flex-direction: column;\n\t-ms-flex-direction: column;\n\t-o-flex-direction: column;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\n/* ------------------------------------ */\n.flex-col-rev-l {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-flex-direction: column-reverse;\n\t-moz-flex-direction: column-reverse;\n\t-ms-flex-direction: column-reverse;\n\t-o-flex-direction: column-reverse;\n\tflex-direction: column-reverse;\n\t-ms-align-items: flex-start;\n\talign-items: flex-start;\n}\n.flex-col-rev-r {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-flex-direction: column-reverse;\n\t-moz-flex-direction: column-reverse;\n\t-ms-flex-direction: column-reverse;\n\t-o-flex-direction: column-reverse;\n\tflex-direction: column-reverse;\n\t-ms-align-items: flex-end;\n\talign-items: flex-end;\n}\n.flex-col-rev-c {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-flex-direction: column-reverse;\n\t-moz-flex-direction: column-reverse;\n\t-ms-flex-direction: column-reverse;\n\t-o-flex-direction: column-reverse;\n\tflex-direction: column-reverse;\n\t-ms-align-items: center;\n\talign-items: center;\n}\n.flex-col-rev-str {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-flex-direction: column-reverse;\n\t-moz-flex-direction: column-reverse;\n\t-ms-flex-direction: column-reverse;\n\t-o-flex-direction: column-reverse;\n\tflex-direction: column-reverse;\n\t-ms-align-items: stretch;\n\talign-items: stretch;\n}\n\n\n/*[ Absolute ]\n-----------------------------------------------------------\n*/\n.ab-c-m {\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\t-webkit-transform: translate(-50%, -50%);\n  \t-moz-transform: translate(-50%, -50%);\n  \t-ms-transform: translate(-50%, -50%);\n  \t-o-transform: translate(-50%, -50%);\n\ttransform: translate(-50%, -50%);\n}\n.ab-c-t {\n\tposition: absolute;\n\ttop: 0px;\n\tleft: 50%;\n\t-webkit-transform: translateX(-50%);\n  \t-moz-transform: translateX(-50%);\n  \t-ms-transform: translateX(-50%);\n  \t-o-transform: translateX(-50%);\n\ttransform: translateX(-50%);\n}\n.ab-c-b {\n\tposition: absolute;\n\tbottom: 0px;\n\tleft: 50%;\n\t-webkit-transform: translateX(-50%);\n  \t-moz-transform: translateX(-50%);\n  \t-ms-transform: translateX(-50%);\n  \t-o-transform: translateX(-50%);\n\ttransform: translateX(-50%);\n}\n.ab-l-m {\n\tposition: absolute;\n\tleft: 0px;\n\ttop: 50%;\n\t-webkit-transform: translateY(-50%);\n  \t-moz-transform: translateY(-50%);\n  \t-ms-transform: translateY(-50%);\n  \t-o-transform: translateY(-50%);\n\ttransform: translateY(-50%);\n}\n.ab-r-m {\n\tposition: absolute;\n\tright: 0px;\n\ttop: 50%;\n\t-webkit-transform: translateY(-50%);\n  \t-moz-transform: translateY(-50%);\n  \t-ms-transform: translateY(-50%);\n  \t-o-transform: translateY(-50%);\n\ttransform: translateY(-50%);\n}\n.ab-t-l {\n\tposition: absolute;\n\tleft: 0px;\n\ttop: 0px;\n}\n.ab-t-r {\n\tposition: absolute;\n\tright: 0px;\n\ttop: 0px;\n}\n.ab-b-l {\n\tposition: absolute;\n\tleft: 0px;\n\tbottom: 0px;\n}\n.ab-b-r {\n\tposition: absolute;\n\tright: 0px;\n\tbottom: 0px;\n}\n\n\n\n\n\n\n\n\n\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./node_modules/plyr/dist/plyr.min.js":
/*!********************************************!*\
  !*** ./node_modules/plyr/dist/plyr.min.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {"object"==typeof navigator&&function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,a=!1,s=void 0;try{for(var r,o=e[Symbol.iterator]();!(i=(r=o.next()).done)&&(n.push(r.value),!t||n.length!==t);i=!0);}catch(e){a=!0,s=e}finally{try{i||null==o.return||o.return()}finally{if(a)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function s(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var r={addCSS:!0,thumbWidth:15,watch:!0};var o=function(e){return null!=e?e.constructor:null},l=function(e,t){return Boolean(e&&t&&e instanceof t)},c=function(e){return null==e},u=function(e){return o(e)===Object},d=function(e){return o(e)===String},h=function(e){return Array.isArray(e)},m=function(e){return l(e,NodeList)},p={nullOrUndefined:c,object:u,number:function(e){return o(e)===Number&&!Number.isNaN(e)},string:d,boolean:function(e){return o(e)===Boolean},function:function(e){return o(e)===Function},array:h,nodeList:m,element:function(e){return l(e,Element)},event:function(e){return l(e,Event)},empty:function(e){return c(e)||(d(e)||h(e)||m(e))&&!e.length||u(e)&&!Object.keys(e).length}};function f(e,t){if(t<1){var n=(i="".concat(t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/))?Math.max(0,(i[1]?i[1].length:0)-(i[2]?+i[2]:0)):0;return parseFloat(e.toFixed(n))}var i;return Math.round(e/t)*t}var g,y,v,b=function(){function t(n,i){e(this,t),p.element(n)?this.element=n:p.string(n)&&(this.element=document.querySelector(n)),p.element(this.element)&&p.empty(this.element.rangeTouch)&&(this.config=Object.assign({},r,i),this.init())}return n(t,[{key:"init",value:function(){t.enabled&&(this.config.addCSS&&(this.element.style.userSelect="none",this.element.style.webKitUserSelect="none",this.element.style.touchAction="manipulation"),this.listeners(!0),this.element.rangeTouch=this)}},{key:"destroy",value:function(){t.enabled&&(this.listeners(!1),this.element.rangeTouch=null)}},{key:"listeners",value:function(e){var t=this,n=e?"addEventListener":"removeEventListener";["touchstart","touchmove","touchend"].forEach(function(e){t.element[n](e,function(e){return t.set(e)},!1)})}},{key:"get",value:function(e){if(!t.enabled||!p.event(e))return null;var n,i=e.target,a=e.changedTouches[0],s=parseFloat(i.getAttribute("min"))||0,r=parseFloat(i.getAttribute("max"))||100,o=parseFloat(i.getAttribute("step"))||1,l=r-s,c=i.getBoundingClientRect(),u=100/c.width*(this.config.thumbWidth/2)/100;return(n=100/c.width*(a.clientX-c.left))<0?n=0:n>100&&(n=100),n<50?n-=(100-2*n)*u:n>50&&(n+=2*(n-50)*u),s+f(l*(n/100),o)}},{key:"set",value:function(e){t.enabled&&p.event(e)&&!e.target.disabled&&(e.preventDefault(),e.target.value=this.get(e),function(e,t){if(e&&t){var n=new Event(t);e.dispatchEvent(n)}}(e.target,"touchend"===e.type?"change":"input"))}}],[{key:"setup",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=null;if(p.empty(e)||p.string(e)?i=Array.from(document.querySelectorAll(p.string(e)?e:'input[type="range"]')):p.element(e)?i=[e]:p.nodeList(e)?i=Array.from(e):p.array(e)&&(i=e.filter(p.element)),p.empty(i))return null;var a=Object.assign({},r,n);p.string(e)&&a.watch&&new MutationObserver(function(n){Array.from(n).forEach(function(n){Array.from(n.addedNodes).forEach(function(n){if(p.element(n)&&function(){return Array.from(document.querySelectorAll(i)).includes(this)}.call(n,i=e)){var i;new t(n,a)}})})}).observe(document.body,{childList:!0,subtree:!0});return i.map(function(e){return new t(e,n)})}},{key:"enabled",get:function(){return"ontouchstart"in document.documentElement}}]),t}(),k=function(e){return null!=e?e.constructor:null},w=function(e,t){return Boolean(e&&t&&e instanceof t)},T=function(e){return null==e},C=function(e){return k(e)===Object},A=function(e){return k(e)===String},E=function(e){return Array.isArray(e)},S=function(e){return w(e,NodeList)},P=function(e){return T(e)||(A(e)||E(e)||S(e))&&!e.length||C(e)&&!Object.keys(e).length},N={nullOrUndefined:T,object:C,number:function(e){return k(e)===Number&&!Number.isNaN(e)},string:A,boolean:function(e){return k(e)===Boolean},function:function(e){return k(e)===Function},array:E,weakMap:function(e){return w(e,WeakMap)},nodeList:S,element:function(e){return w(e,Element)},textNode:function(e){return k(e)===Text},event:function(e){return w(e,Event)},keyboardEvent:function(e){return w(e,KeyboardEvent)},cue:function(e){return w(e,window.TextTrackCue)||w(e,window.VTTCue)},track:function(e){return w(e,TextTrack)||!T(e)&&A(e.kind)},promise:function(e){return w(e,Promise)},url:function(e){if(w(e,window.URL))return!0;if(!A(e))return!1;var t=e;e.startsWith("http://")&&e.startsWith("https://")||(t="http://".concat(e));try{return!P(new URL(t).hostname)}catch(e){return!1}},empty:P},M=(g=document.createElement("span"),y={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},v=Object.keys(y).find(function(e){return void 0!==g.style[e]}),!!N.string(v)&&y[v]);function x(e,t){setTimeout(function(){try{e.hidden=!0,e.offsetHeight,e.hidden=!1}catch(e){}},t)}var L={isIE:!!document.documentMode,isEdge:window.navigator.userAgent.includes("Edge"),isWebkit:"WebkitAppearance"in document.documentElement.style&&!/Edge/.test(navigator.userAgent),isIPhone:/(iPhone|iPod)/gi.test(navigator.platform),isIos:/(iPad|iPhone|iPod)/gi.test(navigator.platform)},I=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){return e=!0,null}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(e){}return e}();function _(e,t,n){var i=this,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=arguments.length>5&&void 0!==arguments[5]&&arguments[5];if(e&&"addEventListener"in e&&!N.empty(t)&&N.function(n)){var o=t.split(" "),l=r;I&&(l={passive:s,capture:r}),o.forEach(function(t){i&&i.eventListeners&&a&&i.eventListeners.push({element:e,type:t,callback:n,options:l}),e[a?"addEventListener":"removeEventListener"](t,n,l)})}}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];_.call(this,e,t,n,!0,i,a)}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];_.call(this,e,t,n,!1,i,a)}function q(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0,a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s=arguments.length>4&&void 0!==arguments[4]&&arguments[4];_.call(this,e,n,function r(){j(e,n,r,a,s);for(var o=arguments.length,l=new Array(o),c=0;c<o;c++)l[c]=arguments[c];i.apply(t,l)},!0,a,s)}function H(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(N.element(e)&&!N.empty(t)){var a=new CustomEvent(t,{bubbles:n,detail:Object.assign({},i,{plyr:this})});e.dispatchEvent(a)}}function D(e,t){return t.split(".").reduce(function(e,t){return e&&e[t]},e)}function F(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];if(!n.length)return e;var s=n.shift();return N.object(s)?(Object.keys(s).forEach(function(t){N.object(s[t])?(Object.keys(e).includes(t)||Object.assign(e,i({},t,{})),F(e[t],s[t])):Object.assign(e,i({},t,s[t]))}),F.apply(void 0,[e].concat(n))):e}function R(e,t){var n=e.length?e:[e];Array.from(n).reverse().forEach(function(e,n){var i=n>0?t.cloneNode(!0):t,a=e.parentNode,s=e.nextSibling;i.appendChild(e),s?a.insertBefore(i,s):a.appendChild(i)})}function V(e,t){N.element(e)&&!N.empty(t)&&Object.entries(t).filter(function(e){var t=a(e,2)[1];return!N.nullOrUndefined(t)}).forEach(function(t){var n=a(t,2),i=n[0],s=n[1];return e.setAttribute(i,s)})}function B(e,t,n){var i=document.createElement(e);return N.object(t)&&V(i,t),N.string(n)&&(i.innerText=n),i}function U(e,t,n,i){N.element(t)&&t.appendChild(B(e,n,i))}function W(e){N.nodeList(e)||N.array(e)?Array.from(e).forEach(W):N.element(e)&&N.element(e.parentNode)&&e.parentNode.removeChild(e)}function z(e){if(N.element(e))for(var t=e.childNodes.length;t>0;)e.removeChild(e.lastChild),t-=1}function K(e,t){return N.element(t)&&N.element(t.parentNode)&&N.element(e)?(t.parentNode.replaceChild(e,t),e):null}function Y(e,t){if(!N.string(e)||N.empty(e))return{};var n={},i=F({},t);return e.split(",").forEach(function(e){var t=e.trim(),s=t.replace(".",""),r=t.replace(/[[\]]/g,"").split("="),o=a(r,1)[0],l=r.length>1?r[1].replace(/["']/g,""):"";switch(t.charAt(0)){case".":N.string(i.class)?n.class="".concat(i.class," ").concat(s):n.class=s;break;case"#":n.id=t.replace("#","");break;case"[":n[o]=l}}),F(i,n)}function Q(e,t){if(N.element(e)){var n=t;N.boolean(n)||(n=!e.hidden),e.hidden=n}}function X(e,t,n){if(N.nodeList(e))return Array.from(e).map(function(e){return X(e,t,n)});if(N.element(e)){var i="toggle";return void 0!==n&&(i=n?"add":"remove"),e.classList[i](t),e.classList.contains(t)}return!1}function J(e,t){return N.element(e)&&e.classList.contains(t)}function $(e,t){return function(){return Array.from(document.querySelectorAll(t)).includes(this)}.call(e,t)}function G(e){return this.elements.container.querySelectorAll(e)}function Z(e){return this.elements.container.querySelector(e)}function ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];N.element(e)&&(e.focus({preventScroll:!0}),t&&X(e,this.config.classNames.tabFocus))}var te,ne={"audio/ogg":"vorbis","audio/wav":"1","video/webm":"vp8, vorbis","video/mp4":"avc1.42E01E, mp4a.40.2","video/ogg":"theora"},ie={audio:"canPlayType"in document.createElement("audio"),video:"canPlayType"in document.createElement("video"),check:function(e,t,n){var i=L.isIPhone&&n&&ie.playsinline,a=ie[e]||"html5"!==t;return{api:a,ui:a&&ie.rangeInput&&("video"!==e||!L.isIPhone||i)}},pip:!(L.isIPhone||!N.function(B("video").webkitSetPresentationMode)&&(!document.pictureInPictureEnabled||B("video").disablePictureInPicture)),airplay:N.function(window.WebKitPlaybackTargetAvailabilityEvent),playsinline:"playsInline"in document.createElement("video"),mime:function(e){if(N.empty(e))return!1;var t=a(e.split("/"),1)[0],n=e;if(!this.isHTML5||t!==this.type)return!1;Object.keys(ne).includes(n)&&(n+='; codecs="'.concat(ne[e],'"'));try{return Boolean(n&&this.media.canPlayType(n).replace(/no/,""))}catch(e){return!1}},textTracks:"textTracks"in document.createElement("video"),rangeInput:(te=document.createElement("input"),te.type="range","range"===te.type),touch:"ontouchstart"in document.documentElement,transitions:!1!==M,reducedMotion:"matchMedia"in window&&window.matchMedia("(prefers-reduced-motion)").matches};function ae(e){return!!(N.array(e)||N.string(e)&&e.includes(":"))&&(N.array(e)?e:e.split(":")).map(Number).every(N.number)}function se(e){if(!N.array(e)||!e.every(N.number))return null;var t=a(e,2),n=t[0],i=t[1],s=function e(t,n){return 0===n?t:e(n,t%n)}(n,i);return[n/s,i/s]}function re(e){var t=function(e){return ae(e)?e.split(":").map(Number):null},n=t(e);if(null===n&&(n=t(this.config.ratio)),null===n&&!N.empty(this.embed)&&N.array(this.embed.ratio)&&(n=this.embed.ratio),null===n&&this.isHTML5){var i=this.media;n=se([i.videoWidth,i.videoHeight])}return n}function oe(e){if(!this.isVideo)return{};var t=re.call(this,e),n=a(N.array(t)?t:[0,0],2),i=100/n[0]*n[1];if(this.elements.wrapper.style.paddingBottom="".concat(i,"%"),this.isVimeo&&this.supported.ui){var s=(240-i)/4.8;this.media.style.transform="translateY(-".concat(s,"%)")}else this.isHTML5&&this.elements.wrapper.classList.toggle(this.config.classNames.videoFixedRatio,null!==t);return{padding:i,ratio:t}}var le={getSources:function(){var e=this;return this.isHTML5?Array.from(this.media.querySelectorAll("source")).filter(function(t){var n=t.getAttribute("type");return!!N.empty(n)||ie.mime.call(e,n)}):[]},getQualityOptions:function(){return le.getSources.call(this).map(function(e){return Number(e.getAttribute("size"))}).filter(Boolean)},extend:function(){if(this.isHTML5){var e=this;N.empty(this.config.ratio)||oe.call(e),Object.defineProperty(e.media,"quality",{get:function(){var t=le.getSources.call(e).find(function(t){return t.getAttribute("src")===e.source});return t&&Number(t.getAttribute("size"))},set:function(t){var n=le.getSources.call(e).find(function(e){return Number(e.getAttribute("size"))===t});if(n){var i=e.media,a=i.currentTime,s=i.paused,r=i.preload,o=i.readyState;e.media.src=n.getAttribute("src"),("none"!==r||o)&&(e.once("loadedmetadata",function(){e.currentTime=a,s||e.play()}),e.media.load()),H.call(e,e.media,"qualitychange",!1,{quality:t})}}})}},cancelRequests:function(){this.isHTML5&&(W(le.getSources.call(this)),this.media.setAttribute("src",this.config.blankVideo),this.media.load(),this.debug.log("Cancelled network requests"))}};function ce(e){return N.array(e)?e.filter(function(t,n){return e.indexOf(t)===n}):e}function ue(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return N.empty(e)?e:e.toString().replace(/{(\d+)}/g,function(e,t){return n[t].toString()})}function de(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1"),"g"),n.toString())}function he(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toString().replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})}function me(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toString();return(e=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toString();return e=de(e,"-"," "),e=de(e,"_"," "),de(e=he(e)," ","")}(e)).charAt(0).toLowerCase()+e.slice(1)}function pe(e){var t=document.createElement("div");return t.appendChild(e),t.innerHTML}var fe={pip:"PIP",airplay:"AirPlay",html5:"HTML5",vimeo:"Vimeo",youtube:"YouTube"},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(N.empty(e)||N.empty(t))return"";var n=D(t.i18n,e);if(N.empty(n))return Object.keys(fe).includes(e)?fe[e]:"";var i={"{seektime}":t.seekTime,"{title}":t.title};return Object.entries(i).forEach(function(e){var t=a(e,2),i=t[0],s=t[1];n=de(n,i,s)}),n},ye=function(){function t(n){e(this,t),this.enabled=n.config.storage.enabled,this.key=n.config.storage.key}return n(t,[{key:"get",value:function(e){if(!t.supported||!this.enabled)return null;var n=window.localStorage.getItem(this.key);if(N.empty(n))return null;var i=JSON.parse(n);return N.string(e)&&e.length?i[e]:i}},{key:"set",value:function(e){if(t.supported&&this.enabled&&N.object(e)){var n=this.get();N.empty(n)&&(n={}),F(n,e),window.localStorage.setItem(this.key,JSON.stringify(n))}}}],[{key:"supported",get:function(){try{if(!("localStorage"in window))return!1;return window.localStorage.setItem("___test","___test"),window.localStorage.removeItem("___test"),!0}catch(e){return!1}}}]),t}();function ve(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text";return new Promise(function(n,i){try{var a=new XMLHttpRequest;if(!("withCredentials"in a))return;a.addEventListener("load",function(){if("text"===t)try{n(JSON.parse(a.responseText))}catch(e){n(a.responseText)}else n(a.response)}),a.addEventListener("error",function(){throw new Error(a.status)}),a.open("GET",e,!0),a.responseType=t,a.send()}catch(e){i(e)}})}function be(e,t){if(N.string(e)){var n=N.string(t),i=function(){return null!==document.getElementById(t)},a=function(e,t){e.innerHTML=t,n&&i()||document.body.insertAdjacentElement("afterbegin",e)};if(!n||!i()){var s=ye.supported,r=document.createElement("div");if(r.setAttribute("hidden",""),n&&r.setAttribute("id",t),s){var o=window.localStorage.getItem("".concat("cache","-").concat(t));if(null!==o){var l=JSON.parse(o);a(r,l.content)}}ve(e).then(function(e){N.empty(e)||(s&&window.localStorage.setItem("".concat("cache","-").concat(t),JSON.stringify({content:e})),a(r,e))}).catch(function(){})}}}var ke=function(e){return Math.trunc(e/60/60%60,10)},we=function(e){return Math.trunc(e/60%60,10)},Te=function(e){return Math.trunc(e%60,10)};function Ce(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!N.number(e))return Ce(null,t,n);var i=function(e){return"0".concat(e).slice(-2)},a=ke(e),s=we(e),r=Te(e);return a=t||a>0?"".concat(a,":"):"","".concat(n&&e>0?"-":"").concat(a).concat(i(s),":").concat(i(r))}var Ae={getIconUrl:function(){var e=new URL(this.config.iconUrl,window.location).host!==window.location.host||L.isIE&&!window.svg4everybody;return{url:this.config.iconUrl,cors:e}},findElements:function(){try{return this.elements.controls=Z.call(this,this.config.selectors.controls.wrapper),this.elements.buttons={play:G.call(this,this.config.selectors.buttons.play),pause:Z.call(this,this.config.selectors.buttons.pause),restart:Z.call(this,this.config.selectors.buttons.restart),rewind:Z.call(this,this.config.selectors.buttons.rewind),fastForward:Z.call(this,this.config.selectors.buttons.fastForward),mute:Z.call(this,this.config.selectors.buttons.mute),pip:Z.call(this,this.config.selectors.buttons.pip),airplay:Z.call(this,this.config.selectors.buttons.airplay),settings:Z.call(this,this.config.selectors.buttons.settings),captions:Z.call(this,this.config.selectors.buttons.captions),fullscreen:Z.call(this,this.config.selectors.buttons.fullscreen)},this.elements.progress=Z.call(this,this.config.selectors.progress),this.elements.inputs={seek:Z.call(this,this.config.selectors.inputs.seek),volume:Z.call(this,this.config.selectors.inputs.volume)},this.elements.display={buffer:Z.call(this,this.config.selectors.display.buffer),currentTime:Z.call(this,this.config.selectors.display.currentTime),duration:Z.call(this,this.config.selectors.display.duration)},N.element(this.elements.progress)&&(this.elements.display.seekTooltip=this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))),!0}catch(e){return this.debug.warn("It looks like there is a problem with your custom controls HTML",e),this.toggleNativeControls(!0),!1}},createIcon:function(e,t){var n=Ae.getIconUrl.call(this),i="".concat(n.cors?"":n.url,"#").concat(this.config.iconPrefix),a=document.createElementNS("http://www.w3.org/2000/svg","svg");V(a,F(t,{role:"presentation",focusable:"false"}));var s=document.createElementNS("http://www.w3.org/2000/svg","use"),r="".concat(i,"-").concat(e);return"href"in s&&s.setAttributeNS("http://www.w3.org/1999/xlink","href",r),s.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r),a.appendChild(s),a},createLabel:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=ge(e,this.config);return B("span",Object.assign({},t,{class:[t.class,this.config.classNames.hidden].filter(Boolean).join(" ")}),n)},createBadge:function(e){if(N.empty(e))return null;var t=B("span",{class:this.config.classNames.menu.value});return t.appendChild(B("span",{class:this.config.classNames.menu.badge},e)),t},createButton:function(e,t){var n=this,i=F({},t),a=me(e),s={element:"button",toggle:!1,label:null,icon:null,labelPressed:null,iconPressed:null};switch(["element","icon","label"].forEach(function(e){Object.keys(i).includes(e)&&(s[e]=i[e],delete i[e])}),"button"!==s.element||Object.keys(i).includes("type")||(i.type="button"),Object.keys(i).includes("class")?i.class.split(" ").some(function(e){return e===n.config.classNames.control})||F(i,{class:"".concat(i.class," ").concat(this.config.classNames.control)}):i.class=this.config.classNames.control,e){case"play":s.toggle=!0,s.label="play",s.labelPressed="pause",s.icon="play",s.iconPressed="pause";break;case"mute":s.toggle=!0,s.label="mute",s.labelPressed="unmute",s.icon="volume",s.iconPressed="muted";break;case"captions":s.toggle=!0,s.label="enableCaptions",s.labelPressed="disableCaptions",s.icon="captions-off",s.iconPressed="captions-on";break;case"fullscreen":s.toggle=!0,s.label="enterFullscreen",s.labelPressed="exitFullscreen",s.icon="enter-fullscreen",s.iconPressed="exit-fullscreen";break;case"play-large":i.class+=" ".concat(this.config.classNames.control,"--overlaid"),a="play",s.label="play",s.icon="play";break;default:N.empty(s.label)&&(s.label=a),N.empty(s.icon)&&(s.icon=e)}var r=B(s.element);return s.toggle?(r.appendChild(Ae.createIcon.call(this,s.iconPressed,{class:"icon--pressed"})),r.appendChild(Ae.createIcon.call(this,s.icon,{class:"icon--not-pressed"})),r.appendChild(Ae.createLabel.call(this,s.labelPressed,{class:"label--pressed"})),r.appendChild(Ae.createLabel.call(this,s.label,{class:"label--not-pressed"}))):(r.appendChild(Ae.createIcon.call(this,s.icon)),r.appendChild(Ae.createLabel.call(this,s.label))),F(i,Y(this.config.selectors.buttons[a],i)),V(r,i),"play"===a?(N.array(this.elements.buttons[a])||(this.elements.buttons[a]=[]),this.elements.buttons[a].push(r)):this.elements.buttons[a]=r,r},createRange:function(e,t){var n=B("input",F(Y(this.config.selectors.inputs[e]),{type:"range",min:0,max:100,step:.01,value:0,autocomplete:"off",role:"slider","aria-label":ge(e,this.config),"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":0},t));return this.elements.inputs[e]=n,Ae.updateRangeFill.call(this,n),b.setup(n),n},createProgress:function(e,t){var n=B("progress",F(Y(this.config.selectors.display[e]),{min:0,max:100,value:0,role:"progressbar","aria-hidden":!0},t));if("volume"!==e){n.appendChild(B("span",null,"0"));var i={played:"played",buffer:"buffered"}[e],a=i?ge(i,this.config):"";n.innerText="% ".concat(a.toLowerCase())}return this.elements.display[e]=n,n},createTime:function(e,t){var n=Y(this.config.selectors.display[e],t),i=B("div",F(n,{class:"".concat(n.class?n.class:""," ").concat(this.config.classNames.display.time," ").trim(),"aria-label":ge(e,this.config)}),"00:00");return this.elements.display[e]=i,i},bindMenuItemShortcuts:function(e,t){var n=this;O(e,"keydown keyup",function(i){if([32,38,39,40].includes(i.which)&&(i.preventDefault(),i.stopPropagation(),"keydown"!==i.type)){var a,s=$(e,'[role="menuitemradio"]');if(!s&&[32,39].includes(i.which))Ae.showMenuPanel.call(n,t,!0);else 32!==i.which&&(40===i.which||s&&39===i.which?(a=e.nextElementSibling,N.element(a)||(a=e.parentNode.firstElementChild)):(a=e.previousElementSibling,N.element(a)||(a=e.parentNode.lastElementChild)),ee.call(n,a,!0))}},!1),O(e,"keyup",function(e){13===e.which&&Ae.focusFirstMenuItem.call(n,null,!0)})},createMenuItem:function(e){var t=this,n=e.value,i=e.list,a=e.type,s=e.title,r=e.badge,o=void 0===r?null:r,l=e.checked,c=void 0!==l&&l,u=Y(this.config.selectors.inputs[a]),d=B("button",F(u,{type:"button",role:"menuitemradio",class:"".concat(this.config.classNames.control," ").concat(u.class?u.class:"").trim(),"aria-checked":c,value:n})),h=B("span");h.innerHTML=s,N.element(o)&&h.appendChild(o),d.appendChild(h),Object.defineProperty(d,"checked",{enumerable:!0,get:function(){return"true"===d.getAttribute("aria-checked")},set:function(e){e&&Array.from(d.parentNode.children).filter(function(e){return $(e,'[role="menuitemradio"]')}).forEach(function(e){return e.setAttribute("aria-checked","false")}),d.setAttribute("aria-checked",e?"true":"false")}}),this.listeners.bind(d,"click keyup",function(e){if(!N.keyboardEvent(e)||32===e.which){switch(e.preventDefault(),e.stopPropagation(),d.checked=!0,a){case"language":t.currentTrack=Number(n);break;case"quality":t.quality=n;break;case"speed":t.speed=parseFloat(n)}Ae.showMenuPanel.call(t,"home",N.keyboardEvent(e))}},a,!1),Ae.bindMenuItemShortcuts.call(this,d,a),i.appendChild(d)},formatTime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return N.number(e)?Ce(e,ke(this.duration)>0,t):e},updateTimeDisplay:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];N.element(e)&&N.number(t)&&(e.innerText=Ae.formatTime(t,n))},updateVolume:function(){this.supported.ui&&(N.element(this.elements.inputs.volume)&&Ae.setRange.call(this,this.elements.inputs.volume,this.muted?0:this.volume),N.element(this.elements.buttons.mute)&&(this.elements.buttons.mute.pressed=this.muted||0===this.volume))},setRange:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;N.element(e)&&(e.value=t,Ae.updateRangeFill.call(this,e))},updateProgress:function(e){var t=this;if(this.supported.ui&&N.event(e)){var n,i,a=0;if(e)switch(e.type){case"timeupdate":case"seeking":case"seeked":n=this.currentTime,i=this.duration,a=0===n||0===i||Number.isNaN(n)||Number.isNaN(i)?0:(n/i*100).toFixed(2),"timeupdate"===e.type&&Ae.setRange.call(this,this.elements.inputs.seek,a);break;case"playing":case"progress":!function(e,n){var i=N.number(n)?n:0,a=N.element(e)?e:t.elements.display.buffer;if(N.element(a)){a.value=i;var s=a.getElementsByTagName("span")[0];N.element(s)&&(s.childNodes[0].nodeValue=i)}}(this.elements.display.buffer,100*this.buffered)}}},updateRangeFill:function(e){var t=N.event(e)?e.target:e;if(N.element(t)&&"range"===t.getAttribute("type")){if($(t,this.config.selectors.inputs.seek)){t.setAttribute("aria-valuenow",this.currentTime);var n=Ae.formatTime(this.currentTime),i=Ae.formatTime(this.duration),a=ge("seekLabel",this.config);t.setAttribute("aria-valuetext",a.replace("{currentTime}",n).replace("{duration}",i))}else if($(t,this.config.selectors.inputs.volume)){var s=100*t.value;t.setAttribute("aria-valuenow",s),t.setAttribute("aria-valuetext","".concat(s.toFixed(1),"%"))}else t.setAttribute("aria-valuenow",t.value);L.isWebkit&&t.style.setProperty("--value","".concat(t.value/t.max*100,"%"))}},updateSeekTooltip:function(e){var t=this;if(this.config.tooltips.seek&&N.element(this.elements.inputs.seek)&&N.element(this.elements.display.seekTooltip)&&0!==this.duration){var n="".concat(this.config.classNames.tooltip,"--visible"),i=function(e){return X(t.elements.display.seekTooltip,n,e)};if(this.touch)i(!1);else{var a=0,s=this.elements.progress.getBoundingClientRect();if(N.event(e))a=100/s.width*(e.pageX-s.left);else{if(!J(this.elements.display.seekTooltip,n))return;a=parseFloat(this.elements.display.seekTooltip.style.left,10)}a<0?a=0:a>100&&(a=100),Ae.updateTimeDisplay.call(this,this.elements.display.seekTooltip,this.duration/100*a),this.elements.display.seekTooltip.style.left="".concat(a,"%"),N.event(e)&&["mouseenter","mouseleave"].includes(e.type)&&i("mouseenter"===e.type)}}},timeUpdate:function(e){var t=!N.element(this.elements.display.duration)&&this.config.invertTime;Ae.updateTimeDisplay.call(this,this.elements.display.currentTime,t?this.duration-this.currentTime:this.currentTime,t),e&&"timeupdate"===e.type&&this.media.seeking||Ae.updateProgress.call(this,e)},durationUpdate:function(){if(this.supported.ui&&(this.config.invertTime||!this.currentTime)){if(this.duration>=Math.pow(2,32))return Q(this.elements.display.currentTime,!0),void Q(this.elements.progress,!0);N.element(this.elements.inputs.seek)&&this.elements.inputs.seek.setAttribute("aria-valuemax",this.duration);var e=N.element(this.elements.display.duration);!e&&this.config.displayDuration&&this.paused&&Ae.updateTimeDisplay.call(this,this.elements.display.currentTime,this.duration),e&&Ae.updateTimeDisplay.call(this,this.elements.display.duration,this.duration),Ae.updateSeekTooltip.call(this)}},toggleMenuButton:function(e,t){Q(this.elements.settings.buttons[e],!t)},updateSetting:function(e,t,n){var i=this.elements.settings.panels[e],a=null,s=t;if("captions"===e)a=this.currentTrack;else{if(a=N.empty(n)?this[e]:n,N.empty(a)&&(a=this.config[e].default),!N.empty(this.options[e])&&!this.options[e].includes(a))return void this.debug.warn("Unsupported value of '".concat(a,"' for ").concat(e));if(!this.config[e].options.includes(a))return void this.debug.warn("Disabled value of '".concat(a,"' for ").concat(e))}if(N.element(s)||(s=i&&i.querySelector('[role="menu"]')),N.element(s)){this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML=Ae.getLabel.call(this,e,a);var r=s&&s.querySelector('[value="'.concat(a,'"]'));N.element(r)&&(r.checked=!0)}},getLabel:function(e,t){switch(e){case"speed":return 1===t?ge("normal",this.config):"".concat(t,"&times;");case"quality":if(N.number(t)){var n=ge("qualityLabel.".concat(t),this.config);return n.length?n:"".concat(t,"p")}return he(t);case"captions":return Pe.getLabel.call(this);default:return null}},setQualityMenu:function(e){var t=this;if(N.element(this.elements.settings.panels.quality)){var n=this.elements.settings.panels.quality.querySelector('[role="menu"]');N.array(e)&&(this.options.quality=ce(e).filter(function(e){return t.config.quality.options.includes(e)}));var i=!N.empty(this.options.quality)&&this.options.quality.length>1;if(Ae.toggleMenuButton.call(this,"quality",i),z(n),Ae.checkMenu.call(this),i){var a=function(e){var n=ge("qualityBadge.".concat(e),t.config);return n.length?Ae.createBadge.call(t,n):null};this.options.quality.sort(function(e,n){var i=t.config.quality.options;return i.indexOf(e)>i.indexOf(n)?1:-1}).forEach(function(e){Ae.createMenuItem.call(t,{value:e,list:n,type:"quality",title:Ae.getLabel.call(t,"quality",e),badge:a(e)})}),Ae.updateSetting.call(this,"quality",n)}}},setCaptionsMenu:function(){var e=this;if(N.element(this.elements.settings.panels.captions)){var t=this.elements.settings.panels.captions.querySelector('[role="menu"]'),n=Pe.getTracks.call(this),i=Boolean(n.length);if(Ae.toggleMenuButton.call(this,"captions",i),z(t),Ae.checkMenu.call(this),i){var a=n.map(function(n,i){return{value:i,checked:e.captions.toggled&&e.currentTrack===i,title:Pe.getLabel.call(e,n),badge:n.language&&Ae.createBadge.call(e,n.language.toUpperCase()),list:t,type:"language"}});a.unshift({value:-1,checked:!this.captions.toggled,title:ge("disabled",this.config),list:t,type:"language"}),a.forEach(Ae.createMenuItem.bind(this)),Ae.updateSetting.call(this,"captions",t)}}},setSpeedMenu:function(e){var t=this;if(N.element(this.elements.settings.panels.speed)){var n=this.elements.settings.panels.speed.querySelector('[role="menu"]');N.array(e)?this.options.speed=e:(this.isHTML5||this.isVimeo)&&(this.options.speed=[.5,.75,1,1.25,1.5,1.75,2]),this.options.speed=this.options.speed.filter(function(e){return t.config.speed.options.includes(e)});var i=!N.empty(this.options.speed)&&this.options.speed.length>1;Ae.toggleMenuButton.call(this,"speed",i),z(n),Ae.checkMenu.call(this),i&&(this.options.speed.forEach(function(e){Ae.createMenuItem.call(t,{value:e,list:n,type:"speed",title:Ae.getLabel.call(t,"speed",e)})}),Ae.updateSetting.call(this,"speed",n))}},checkMenu:function(){var e=this.elements.settings.buttons,t=!N.empty(e)&&Object.values(e).some(function(e){return!e.hidden});Q(this.elements.settings.menu,!t)},focusFirstMenuItem:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.elements.settings.popup.hidden){var n=e;N.element(n)||(n=Object.values(this.elements.settings.panels).find(function(e){return!e.hidden}));var i=n.querySelector('[role^="menuitem"]');ee.call(this,i,t)}},toggleMenu:function(e){var t=this.elements.settings.popup,n=this.elements.buttons.settings;if(N.element(t)&&N.element(n)){var i=t.hidden,a=i;if(N.boolean(e))a=e;else if(N.keyboardEvent(e)&&27===e.which)a=!1;else if(N.event(e)){var s=N.function(e.composedPath)?e.composedPath()[0]:e.target,r=t.contains(s);if(r||!r&&e.target!==n&&a)return}n.setAttribute("aria-expanded",a),Q(t,!a),X(this.elements.container,this.config.classNames.menu.open,a),a&&N.keyboardEvent(e)?Ae.focusFirstMenuItem.call(this,null,!0):a||i||ee.call(this,n,N.keyboardEvent(e))}},getMenuSize:function(e){var t=e.cloneNode(!0);t.style.position="absolute",t.style.opacity=0,t.removeAttribute("hidden"),e.parentNode.appendChild(t);var n=t.scrollWidth,i=t.scrollHeight;return W(t),{width:n,height:i}},showMenuPanel:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.elements.container.querySelector("#plyr-settings-".concat(this.id,"-").concat(t));if(N.element(i)){var a=i.parentNode,s=Array.from(a.children).find(function(e){return!e.hidden});if(ie.transitions&&!ie.reducedMotion){a.style.width="".concat(s.scrollWidth,"px"),a.style.height="".concat(s.scrollHeight,"px");var r=Ae.getMenuSize.call(this,i);O.call(this,a,M,function t(n){n.target===a&&["width","height"].includes(n.propertyName)&&(a.style.width="",a.style.height="",j.call(e,a,M,t))}),a.style.width="".concat(r.width,"px"),a.style.height="".concat(r.height,"px")}Q(s,!0),Q(i,!1),Ae.focusFirstMenuItem.call(this,i,n)}},setDownloadUrl:function(){var e=this.elements.buttons.download;N.element(e)&&e.setAttribute("href",this.download)},create:function(e){var t=this,n=Ae.bindMenuItemShortcuts,i=Ae.createButton,a=Ae.createProgress,s=Ae.createRange,r=Ae.createTime,o=Ae.setQualityMenu,l=Ae.setSpeedMenu,c=Ae.showMenuPanel;this.elements.controls=null,this.config.controls.includes("play-large")&&this.elements.container.appendChild(i.call(this,"play-large"));var u=B("div",Y(this.config.selectors.controls.wrapper));this.elements.controls=u;var d={class:"plyr__controls__item"};return ce(this.config.controls).forEach(function(o){if("restart"===o&&u.appendChild(i.call(t,"restart",d)),"rewind"===o&&u.appendChild(i.call(t,"rewind",d)),"play"===o&&u.appendChild(i.call(t,"play",d)),"fast-forward"===o&&u.appendChild(i.call(t,"fast-forward",d)),"progress"===o){var l=B("div",{class:"".concat(d.class," plyr__progress__container")}),h=B("div",Y(t.config.selectors.progress));if(h.appendChild(s.call(t,"seek",{id:"plyr-seek-".concat(e.id)})),h.appendChild(a.call(t,"buffer")),t.config.tooltips.seek){var m=B("span",{class:t.config.classNames.tooltip},"00:00");h.appendChild(m),t.elements.display.seekTooltip=m}t.elements.progress=h,l.appendChild(t.elements.progress),u.appendChild(l)}if("current-time"===o&&u.appendChild(r.call(t,"currentTime",d)),"duration"===o&&u.appendChild(r.call(t,"duration",d)),"mute"===o||"volume"===o){var p=t.elements.volume;if(N.element(p)&&u.contains(p)||(p=B("div",F({},d,{class:"".concat(d.class," plyr__volume").trim()})),t.elements.volume=p,u.appendChild(p)),"mute"===o&&p.appendChild(i.call(t,"mute")),"volume"===o){var f={max:1,step:.05,value:t.config.volume};p.appendChild(s.call(t,"volume",F(f,{id:"plyr-volume-".concat(e.id)})))}}if("captions"===o&&u.appendChild(i.call(t,"captions",d)),"settings"===o&&!N.empty(t.config.settings)){var g=B("div",F({},d,{class:"".concat(d.class," plyr__menu").trim(),hidden:""}));g.appendChild(i.call(t,"settings",{"aria-haspopup":!0,"aria-controls":"plyr-settings-".concat(e.id),"aria-expanded":!1}));var y=B("div",{class:"plyr__menu__container",id:"plyr-settings-".concat(e.id),hidden:""}),v=B("div"),b=B("div",{id:"plyr-settings-".concat(e.id,"-home")}),k=B("div",{role:"menu"});b.appendChild(k),v.appendChild(b),t.elements.settings.panels.home=b,t.config.settings.forEach(function(i){var a=B("button",F(Y(t.config.selectors.buttons.settings),{type:"button",class:"".concat(t.config.classNames.control," ").concat(t.config.classNames.control,"--forward"),role:"menuitem","aria-haspopup":!0,hidden:""}));n.call(t,a,i),O(a,"click",function(){c.call(t,i,!1)});var s=B("span",null,ge(i,t.config)),r=B("span",{class:t.config.classNames.menu.value});r.innerHTML=e[i],s.appendChild(r),a.appendChild(s),k.appendChild(a);var o=B("div",{id:"plyr-settings-".concat(e.id,"-").concat(i),hidden:""}),l=B("button",{type:"button",class:"".concat(t.config.classNames.control," ").concat(t.config.classNames.control,"--back")});l.appendChild(B("span",{"aria-hidden":!0},ge(i,t.config))),l.appendChild(B("span",{class:t.config.classNames.hidden},ge("menuBack",t.config))),O(o,"keydown",function(e){37===e.which&&(e.preventDefault(),e.stopPropagation(),c.call(t,"home",!0))},!1),O(l,"click",function(){c.call(t,"home",!1)}),o.appendChild(l),o.appendChild(B("div",{role:"menu"})),v.appendChild(o),t.elements.settings.buttons[i]=a,t.elements.settings.panels[i]=o}),y.appendChild(v),g.appendChild(y),u.appendChild(g),t.elements.settings.popup=y,t.elements.settings.menu=g}if("pip"===o&&ie.pip&&u.appendChild(i.call(t,"pip",d)),"airplay"===o&&ie.airplay&&u.appendChild(i.call(t,"airplay",d)),"download"===o){var w=F({},d,{element:"a",href:t.download,target:"_blank"}),T=t.config.urls.download;!N.url(T)&&t.isEmbed&&F(w,{icon:"logo-".concat(t.provider),label:t.provider}),u.appendChild(i.call(t,"download",w))}"fullscreen"===o&&u.appendChild(i.call(t,"fullscreen",d))}),this.isHTML5&&o.call(this,le.getQualityOptions.call(this)),l.call(this),u},inject:function(){var e=this;if(this.config.loadSprite){var t=Ae.getIconUrl.call(this);t.cors&&be(t.url,"sprite-plyr")}this.id=Math.floor(1e4*Math.random());var n=null;this.elements.controls=null;var i={id:this.id,seektime:this.config.seekTime,title:this.config.title},s=!0;N.function(this.config.controls)&&(this.config.controls=this.config.controls.call(this,i)),this.config.controls||(this.config.controls=[]),N.element(this.config.controls)||N.string(this.config.controls)?n=this.config.controls:(n=Ae.create.call(this,{id:this.id,seektime:this.config.seekTime,speed:this.speed,quality:this.quality,captions:Pe.getLabel.call(this)}),s=!1);var r,o=function(e){var t=e;return Object.entries(i).forEach(function(e){var n=a(e,2),i=n[0],s=n[1];t=de(t,"{".concat(i,"}"),s)}),t};if(s&&(N.string(this.config.controls)?n=o(n):N.element(n)&&(n.innerHTML=o(n.innerHTML))),N.string(this.config.selectors.controls.container)&&(r=document.querySelector(this.config.selectors.controls.container)),N.element(r)||(r=this.elements.container),r[N.element(n)?"insertAdjacentElement":"insertAdjacentHTML"]("afterbegin",n),N.element(this.elements.controls)||Ae.findElements.call(this),!N.empty(this.elements.buttons)){var l=function(t){var n=e.config.classNames.controlPressed;Object.defineProperty(t,"pressed",{enumerable:!0,get:function(){return J(t,n)},set:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];X(t,n,e)}})};Object.values(this.elements.buttons).filter(Boolean).forEach(function(e){N.array(e)||N.nodeList(e)?Array.from(e).filter(Boolean).forEach(l):l(e)})}if(L.isEdge&&x(r),this.config.tooltips.controls){var c=this.config,u=c.classNames,d=c.selectors,h="".concat(d.controls.wrapper," ").concat(d.labels," .").concat(u.hidden),m=G.call(this,h);Array.from(m).forEach(function(t){X(t,e.config.classNames.hidden,!1),X(t,e.config.classNames.tooltip,!0)})}}};function Ee(e){var t=e;if(!(arguments.length>1&&void 0!==arguments[1])||arguments[1]){var n=document.createElement("a");n.href=t,t=n.href}try{return new URL(t)}catch(e){return null}}function Se(e){var t=new URLSearchParams;return N.object(e)&&Object.entries(e).forEach(function(e){var n=a(e,2),i=n[0],s=n[1];t.set(i,s)}),t}var Pe={setup:function(){if(this.supported.ui)if(!this.isVideo||this.isYouTube||this.isHTML5&&!ie.textTracks)N.array(this.config.controls)&&this.config.controls.includes("settings")&&this.config.settings.includes("captions")&&Ae.setCaptionsMenu.call(this);else{if(N.element(this.elements.captions)||(this.elements.captions=B("div",Y(this.config.selectors.captions)),function(e,t){N.element(e)&&N.element(t)&&t.parentNode.insertBefore(e,t.nextSibling)}(this.elements.captions,this.elements.wrapper)),L.isIE&&window.URL){var e=this.media.querySelectorAll("track");Array.from(e).forEach(function(e){var t=e.getAttribute("src"),n=Ee(t);null!==n&&n.hostname!==window.location.href.hostname&&["http:","https:"].includes(n.protocol)&&ve(t,"blob").then(function(t){e.setAttribute("src",window.URL.createObjectURL(t))}).catch(function(){W(e)})})}var t=ce((navigator.languages||[navigator.language||navigator.userLanguage||"en"]).map(function(e){return e.split("-")[0]})),n=(this.storage.get("language")||this.config.captions.language||"auto").toLowerCase();if("auto"===n)n=a(t,1)[0];var i=this.storage.get("captions");if(N.boolean(i)||(i=this.config.captions.active),Object.assign(this.captions,{toggled:!1,active:i,language:n,languages:t}),this.isHTML5){var s=this.config.captions.update?"addtrack removetrack":"removetrack";O.call(this,this.media.textTracks,s,Pe.update.bind(this))}setTimeout(Pe.update.bind(this),0)}},update:function(){var e=this,t=Pe.getTracks.call(this,!0),n=this.captions,i=n.active,a=n.language,s=n.meta,r=n.currentTrackNode,o=Boolean(t.find(function(e){return e.language===a}));this.isHTML5&&this.isVideo&&t.filter(function(e){return!s.get(e)}).forEach(function(t){e.debug.log("Track added",t),s.set(t,{default:"showing"===t.mode}),t.mode="hidden",O.call(e,t,"cuechange",function(){return Pe.updateCues.call(e)})}),(o&&this.language!==a||!t.includes(r))&&(Pe.setLanguage.call(this,a),Pe.toggle.call(this,i&&o)),X(this.elements.container,this.config.classNames.captions.enabled,!N.empty(t)),(this.config.controls||[]).includes("settings")&&this.config.settings.includes("captions")&&Ae.setCaptionsMenu.call(this)},toggle:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(this.supported.ui){var n=this.captions.toggled,i=this.config.classNames.captions.active,a=N.nullOrUndefined(e)?!n:e;if(a!==n){if(t||(this.captions.active=a,this.storage.set({captions:a})),!this.language&&a&&!t){var r=Pe.getTracks.call(this),o=Pe.findTrack.call(this,[this.captions.language].concat(s(this.captions.languages)),!0);return this.captions.language=o.language,void Pe.set.call(this,r.indexOf(o))}this.elements.buttons.captions&&(this.elements.buttons.captions.pressed=a),X(this.elements.container,i,a),this.captions.toggled=a,Ae.updateSetting.call(this,"captions"),H.call(this,this.media,a?"captionsenabled":"captionsdisabled")}}},set:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Pe.getTracks.call(this);if(-1!==e)if(N.number(e))if(e in n){if(this.captions.currentTrack!==e){this.captions.currentTrack=e;var i=n[e],a=(i||{}).language;this.captions.currentTrackNode=i,Ae.updateSetting.call(this,"captions"),t||(this.captions.language=a,this.storage.set({language:a})),this.isVimeo&&this.embed.enableTextTrack(a),H.call(this,this.media,"languagechange")}Pe.toggle.call(this,!0,t),this.isHTML5&&this.isVideo&&Pe.updateCues.call(this)}else this.debug.warn("Track not found",e);else this.debug.warn("Invalid caption argument",e);else Pe.toggle.call(this,!1,t)},setLanguage:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(N.string(e)){var n=e.toLowerCase();this.captions.language=n;var i=Pe.getTracks.call(this),a=Pe.findTrack.call(this,[n]);Pe.set.call(this,i.indexOf(a),t)}else this.debug.warn("Invalid language argument",e)},getTracks:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Array.from((this.media||{}).textTracks||[]).filter(function(n){return!e.isHTML5||t||e.captions.meta.has(n)}).filter(function(e){return["captions","subtitles"].includes(e.kind)})},findTrack:function(e){var t,n=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=Pe.getTracks.call(this),s=function(e){return Number((n.captions.meta.get(e)||{}).default)},r=Array.from(a).sort(function(e,t){return s(t)-s(e)});return e.every(function(e){return!(t=r.find(function(t){return t.language===e}))}),t||(i?r[0]:void 0)},getCurrentTrack:function(){return Pe.getTracks.call(this)[this.currentTrack]},getLabel:function(e){var t=e;return!N.track(t)&&ie.textTracks&&this.captions.toggled&&(t=Pe.getCurrentTrack.call(this)),N.track(t)?N.empty(t.label)?N.empty(t.language)?ge("enabled",this.config):e.language.toUpperCase():t.label:ge("disabled",this.config)},updateCues:function(e){if(this.supported.ui)if(N.element(this.elements.captions))if(N.nullOrUndefined(e)||Array.isArray(e)){var t=e;if(!t){var n=Pe.getCurrentTrack.call(this);t=Array.from((n||{}).activeCues||[]).map(function(e){return e.getCueAsHTML()}).map(pe)}var i=t.map(function(e){return e.trim()}).join("\n");if(i!==this.elements.captions.innerHTML){z(this.elements.captions);var a=B("span",Y(this.config.selectors.caption));a.innerHTML=i,this.elements.captions.appendChild(a),H.call(this,this.media,"cuechange")}}else this.debug.warn("updateCues: Invalid input",e);else this.debug.warn("No captions element to render to")}},Ne={enabled:!0,title:"",debug:!1,autoplay:!1,autopause:!0,playsinline:!0,seekTime:10,volume:1,muted:!1,duration:null,displayDuration:!0,invertTime:!0,toggleInvert:!0,ratio:null,clickToPlay:!0,hideControls:!0,resetOnEnd:!1,disableContextMenu:!0,loadSprite:!0,iconPrefix:"plyr",iconUrl:"https://cdn.plyr.io/3.5.6/plyr.svg",blankVideo:"https://cdn.plyr.io/static/blank.mp4",quality:{default:576,options:[4320,2880,2160,1440,1080,720,576,480,360,240]},loop:{active:!1},speed:{selected:1,options:[.5,.75,1,1.25,1.5,1.75,2]},keyboard:{focused:!0,global:!1},tooltips:{controls:!1,seek:!0},captions:{active:!1,language:"auto",update:!1},fullscreen:{enabled:!0,fallback:!0,iosNative:!1},storage:{enabled:!0,key:"plyr"},controls:["play-large","play","progress","current-time","mute","volume","captions","settings","pip","airplay","fullscreen"],settings:["captions","quality","speed"],i18n:{restart:"Restart",rewind:"Rewind {seektime}s",play:"Play",pause:"Pause",fastForward:"Forward {seektime}s",seek:"Seek",seekLabel:"{currentTime} of {duration}",played:"Played",buffered:"Buffered",currentTime:"Current time",duration:"Duration",volume:"Volume",mute:"Mute",unmute:"Unmute",enableCaptions:"Enable captions",disableCaptions:"Disable captions",download:"Download",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",frameTitle:"Player for {title}",captions:"Captions",settings:"Settings",menuBack:"Go back to previous menu",speed:"Speed",normal:"Normal",quality:"Quality",loop:"Loop",start:"Start",end:"End",all:"All",reset:"Reset",disabled:"Disabled",enabled:"Enabled",advertisement:"Ad",qualityBadge:{2160:"4K",1440:"HD",1080:"HD",720:"HD",576:"SD",480:"SD"}},urls:{download:null,vimeo:{sdk:"https://player.vimeo.com/api/player.js",iframe:"https://player.vimeo.com/video/{0}?{1}",api:"https://vimeo.com/api/v2/video/{0}.json"},youtube:{sdk:"https://www.youtube.com/iframe_api",api:"https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"},googleIMA:{sdk:"https://imasdk.googleapis.com/js/sdkloader/ima3.js"}},listeners:{seek:null,play:null,pause:null,restart:null,rewind:null,fastForward:null,mute:null,volume:null,captions:null,download:null,fullscreen:null,pip:null,airplay:null,speed:null,quality:null,loop:null,language:null},events:["ended","progress","stalled","playing","waiting","canplay","canplaythrough","loadstart","loadeddata","loadedmetadata","timeupdate","volumechange","play","pause","error","seeking","seeked","emptied","ratechange","cuechange","download","enterfullscreen","exitfullscreen","captionsenabled","captionsdisabled","languagechange","controlshidden","controlsshown","ready","statechange","qualitychange","adsloaded","adscontentpause","adscontentresume","adstarted","adsmidpoint","adscomplete","adsallcomplete","adsimpression","adsclick"],selectors:{editable:"input, textarea, select, [contenteditable]",container:".plyr",controls:{container:null,wrapper:".plyr__controls"},labels:"[data-plyr]",buttons:{play:'[data-plyr="play"]',pause:'[data-plyr="pause"]',restart:'[data-plyr="restart"]',rewind:'[data-plyr="rewind"]',fastForward:'[data-plyr="fast-forward"]',mute:'[data-plyr="mute"]',captions:'[data-plyr="captions"]',download:'[data-plyr="download"]',fullscreen:'[data-plyr="fullscreen"]',pip:'[data-plyr="pip"]',airplay:'[data-plyr="airplay"]',settings:'[data-plyr="settings"]',loop:'[data-plyr="loop"]'},inputs:{seek:'[data-plyr="seek"]',volume:'[data-plyr="volume"]',speed:'[data-plyr="speed"]',language:'[data-plyr="language"]',quality:'[data-plyr="quality"]'},display:{currentTime:".plyr__time--current",duration:".plyr__time--duration",buffer:".plyr__progress__buffer",loop:".plyr__progress__loop",volume:".plyr__volume--display"},progress:".plyr__progress",captions:".plyr__captions",caption:".plyr__caption"},classNames:{type:"plyr--{0}",provider:"plyr--{0}",video:"plyr__video-wrapper",embed:"plyr__video-embed",videoFixedRatio:"plyr__video-wrapper--fixed-ratio",embedContainer:"plyr__video-embed__container",poster:"plyr__poster",posterEnabled:"plyr__poster-enabled",ads:"plyr__ads",control:"plyr__control",controlPressed:"plyr__control--pressed",playing:"plyr--playing",paused:"plyr--paused",stopped:"plyr--stopped",loading:"plyr--loading",hover:"plyr--hover",tooltip:"plyr__tooltip",cues:"plyr__cues",hidden:"plyr__sr-only",hideControls:"plyr--hide-controls",isIos:"plyr--is-ios",isTouch:"plyr--is-touch",uiSupported:"plyr--full-ui",noTransition:"plyr--no-transition",display:{time:"plyr__time"},menu:{value:"plyr__menu__value",badge:"plyr__badge",open:"plyr--menu-open"},captions:{enabled:"plyr--captions-enabled",active:"plyr--captions-active"},fullscreen:{enabled:"plyr--fullscreen-enabled",fallback:"plyr--fullscreen-fallback"},pip:{supported:"plyr--pip-supported",active:"plyr--pip-active"},airplay:{supported:"plyr--airplay-supported",active:"plyr--airplay-active"},tabFocus:"plyr__tab-focus",previewThumbnails:{thumbContainer:"plyr__preview-thumb",thumbContainerShown:"plyr__preview-thumb--is-shown",imageContainer:"plyr__preview-thumb__image-container",timeContainer:"plyr__preview-thumb__time-container",scrubbingContainer:"plyr__preview-scrubbing",scrubbingContainerShown:"plyr__preview-scrubbing--is-shown"}},attributes:{embed:{provider:"data-plyr-provider",id:"data-plyr-embed-id"}},ads:{enabled:!1,publisherId:"",tagUrl:""},previewThumbnails:{enabled:!1,src:""},vimeo:{byline:!1,portrait:!1,title:!1,speed:!0,transparent:!1},youtube:{noCookie:!1,rel:0,showinfo:0,iv_load_policy:3,modestbranding:1}},Me="picture-in-picture",xe="inline",Le={html5:"html5",youtube:"youtube",vimeo:"vimeo"},Ie={audio:"audio",video:"video"};var _e=function(){},Oe=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e(this,t),this.enabled=window.console&&n,this.enabled&&this.log("Debugging enabled")}return n(t,[{key:"log",get:function(){return this.enabled?Function.prototype.bind.call(console.log,console):_e}},{key:"warn",get:function(){return this.enabled?Function.prototype.bind.call(console.warn,console):_e}},{key:"error",get:function(){return this.enabled?Function.prototype.bind.call(console.error,console):_e}}]),t}();function je(){if(this.enabled){var e=this.player.elements.buttons.fullscreen;N.element(e)&&(e.pressed=this.active),H.call(this.player,this.target,this.active?"enterfullscreen":"exitfullscreen",!0),L.isIos||function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(N.element(e)){var n=G.call(this,"button:not(:disabled), input:not(:disabled), [tabindex]"),i=n[0],a=n[n.length-1];_.call(this,this.elements.container,"keydown",function(e){if("Tab"===e.key&&9===e.keyCode){var t=document.activeElement;t!==a||e.shiftKey?t===i&&e.shiftKey&&(a.focus(),e.preventDefault()):(i.focus(),e.preventDefault())}},t,!1)}}.call(this.player,this.target,this.active)}}function qe(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e?this.scrollPosition={x:window.scrollX||0,y:window.scrollY||0}:window.scrollTo(this.scrollPosition.x,this.scrollPosition.y),document.body.style.overflow=e?"hidden":"",X(this.target,this.player.config.classNames.fullscreen.fallback,e),L.isIos){var t=document.head.querySelector('meta[name="viewport"]'),n="viewport-fit=cover";t||(t=document.createElement("meta")).setAttribute("name","viewport");var i=N.string(t.content)&&t.content.includes(n);e?(this.cleanupViewport=!i,i||(t.content+=",".concat(n))):this.cleanupViewport&&(t.content=t.content.split(",").filter(function(e){return e.trim()!==n}).join(","))}je.call(this)}var He=function(){function t(n){var i=this;e(this,t),this.player=n,this.prefix=t.prefix,this.property=t.property,this.scrollPosition={x:0,y:0},this.forceFallback="force"===n.config.fullscreen.fallback,O.call(this.player,document,"ms"===this.prefix?"MSFullscreenChange":"".concat(this.prefix,"fullscreenchange"),function(){je.call(i)}),O.call(this.player,this.player.elements.container,"dblclick",function(e){N.element(i.player.elements.controls)&&i.player.elements.controls.contains(e.target)||i.toggle()}),this.update()}return n(t,[{key:"update",value:function(){var e;this.enabled?(e=this.forceFallback?"Fallback (forced)":t.native?"Native":"Fallback",this.player.debug.log("".concat(e," fullscreen enabled"))):this.player.debug.log("Fullscreen not supported and fallback disabled");X(this.player.elements.container,this.player.config.classNames.fullscreen.enabled,this.enabled)}},{key:"enter",value:function(){this.enabled&&(L.isIos&&this.player.config.fullscreen.iosNative?this.target.webkitEnterFullscreen():!t.native||this.forceFallback?qe.call(this,!0):this.prefix?N.empty(this.prefix)||this.target["".concat(this.prefix,"Request").concat(this.property)]():this.target.requestFullscreen())}},{key:"exit",value:function(){if(this.enabled)if(L.isIos&&this.player.config.fullscreen.iosNative)this.target.webkitExitFullscreen(),this.player.play();else if(!t.native||this.forceFallback)qe.call(this,!1);else if(this.prefix){if(!N.empty(this.prefix)){var e="moz"===this.prefix?"Cancel":"Exit";document["".concat(this.prefix).concat(e).concat(this.property)]()}}else(document.cancelFullScreen||document.exitFullscreen).call(document)}},{key:"toggle",value:function(){this.active?this.exit():this.enter()}},{key:"usingNative",get:function(){return t.native&&!this.forceFallback}},{key:"enabled",get:function(){return(t.native||this.player.config.fullscreen.fallback)&&this.player.config.fullscreen.enabled&&this.player.supported.ui&&this.player.isVideo}},{key:"active",get:function(){return!!this.enabled&&(!t.native||this.forceFallback?J(this.target,this.player.config.classNames.fullscreen.fallback):(this.prefix?document["".concat(this.prefix).concat(this.property,"Element")]:document.fullscreenElement)===this.target)}},{key:"target",get:function(){return L.isIos&&this.player.config.fullscreen.iosNative?this.player.media:this.player.elements.container}}],[{key:"native",get:function(){return!!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)}},{key:"prefix",get:function(){if(N.function(document.exitFullscreen))return"";var e="";return["webkit","moz","ms"].some(function(t){return!(!N.function(document["".concat(t,"ExitFullscreen")])&&!N.function(document["".concat(t,"CancelFullScreen")]))&&(e=t,!0)}),e}},{key:"property",get:function(){return"moz"===this.prefix?"FullScreen":"Fullscreen"}}]),t}();function De(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return new Promise(function(n,i){var a=new Image,s=function(){delete a.onload,delete a.onerror,(a.naturalWidth>=t?n:i)(a)};Object.assign(a,{onload:s,onerror:s,src:e})})}var Fe={addStyleHook:function(){X(this.elements.container,this.config.selectors.container.replace(".",""),!0),X(this.elements.container,this.config.classNames.uiSupported,this.supported.ui)},toggleNativeControls:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&this.isHTML5?this.media.setAttribute("controls",""):this.media.removeAttribute("controls")},build:function(){var e=this;if(this.listeners.media(),!this.supported.ui)return this.debug.warn("Basic support only for ".concat(this.provider," ").concat(this.type)),void Fe.toggleNativeControls.call(this,!0);N.element(this.elements.controls)||(Ae.inject.call(this),this.listeners.controls()),Fe.toggleNativeControls.call(this),this.isHTML5&&Pe.setup.call(this),this.volume=null,this.muted=null,this.loop=null,this.quality=null,this.speed=null,Ae.updateVolume.call(this),Ae.timeUpdate.call(this),Fe.checkPlaying.call(this),X(this.elements.container,this.config.classNames.pip.supported,ie.pip&&this.isHTML5&&this.isVideo),X(this.elements.container,this.config.classNames.airplay.supported,ie.airplay&&this.isHTML5),X(this.elements.container,this.config.classNames.isIos,L.isIos),X(this.elements.container,this.config.classNames.isTouch,this.touch),this.ready=!0,setTimeout(function(){H.call(e,e.media,"ready")},0),Fe.setTitle.call(this),this.poster&&Fe.setPoster.call(this,this.poster,!1).catch(function(){}),this.config.duration&&Ae.durationUpdate.call(this)},setTitle:function(){var e=ge("play",this.config);if(N.string(this.config.title)&&!N.empty(this.config.title)&&(e+=", ".concat(this.config.title)),Array.from(this.elements.buttons.play||[]).forEach(function(t){t.setAttribute("aria-label",e)}),this.isEmbed){var t=Z.call(this,"iframe");if(!N.element(t))return;var n=N.empty(this.config.title)?"video":this.config.title,i=ge("frameTitle",this.config);t.setAttribute("title",i.replace("{title}",n))}},togglePoster:function(e){X(this.elements.container,this.config.classNames.posterEnabled,e)},setPoster:function(e){var t=this;return arguments.length>1&&void 0!==arguments[1]&&!arguments[1]||!this.poster?(this.media.setAttribute("poster",e),function(){var e=this;return new Promise(function(t){return e.ready?setTimeout(t,0):O.call(e,e.elements.container,"ready",t)}).then(function(){})}.call(this).then(function(){return De(e)}).catch(function(n){throw e===t.poster&&Fe.togglePoster.call(t,!1),n}).then(function(){if(e!==t.poster)throw new Error("setPoster cancelled by later call to setPoster")}).then(function(){return Object.assign(t.elements.poster.style,{backgroundImage:"url('".concat(e,"')"),backgroundSize:""}),Fe.togglePoster.call(t,!0),e})):Promise.reject(new Error("Poster already set"))},checkPlaying:function(e){var t=this;X(this.elements.container,this.config.classNames.playing,this.playing),X(this.elements.container,this.config.classNames.paused,this.paused),X(this.elements.container,this.config.classNames.stopped,this.stopped),Array.from(this.elements.buttons.play||[]).forEach(function(e){Object.assign(e,{pressed:t.playing})}),N.event(e)&&"timeupdate"===e.type||Fe.toggleControls.call(this)},checkLoading:function(e){var t=this;this.loading=["stalled","waiting"].includes(e.type),clearTimeout(this.timers.loading),this.timers.loading=setTimeout(function(){X(t.elements.container,t.config.classNames.loading,t.loading),Fe.toggleControls.call(t)},this.loading?250:0)},toggleControls:function(e){var t=this.elements.controls;if(t&&this.config.hideControls){var n=this.touch&&this.lastSeekTime+2e3>Date.now();this.toggleControls(Boolean(e||this.loading||this.paused||t.pressed||t.hover||n))}}},Re=function(){function t(n){e(this,t),this.player=n,this.lastKey=null,this.focusTimer=null,this.lastKeyDown=null,this.handleKey=this.handleKey.bind(this),this.toggleMenu=this.toggleMenu.bind(this),this.setTabFocus=this.setTabFocus.bind(this),this.firstTouch=this.firstTouch.bind(this)}return n(t,[{key:"handleKey",value:function(e){var t=this.player,n=t.elements,i=e.keyCode?e.keyCode:e.which,a="keydown"===e.type,s=a&&i===this.lastKey;if(!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)&&N.number(i)){if(a){var r=document.activeElement;if(N.element(r)){var o=t.config.selectors.editable;if(r!==n.inputs.seek&&$(r,o))return;if(32===e.which&&$(r,'button, [role^="menuitem"]'))return}switch([32,37,38,39,40,48,49,50,51,52,53,54,56,57,67,70,73,75,76,77,79].includes(i)&&(e.preventDefault(),e.stopPropagation()),i){case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:s||(t.currentTime=t.duration/10*(i-48));break;case 32:case 75:s||t.togglePlay();break;case 38:t.increaseVolume(.1);break;case 40:t.decreaseVolume(.1);break;case 77:s||(t.muted=!t.muted);break;case 39:t.forward();break;case 37:t.rewind();break;case 70:t.fullscreen.toggle();break;case 67:s||t.toggleCaptions();break;case 76:t.loop=!t.loop}27===i&&!t.fullscreen.usingNative&&t.fullscreen.active&&t.fullscreen.toggle(),this.lastKey=i}else this.lastKey=null}}},{key:"toggleMenu",value:function(e){Ae.toggleMenu.call(this.player,e)}},{key:"firstTouch",value:function(){var e=this.player,t=e.elements;e.touch=!0,X(t.container,e.config.classNames.isTouch,!0)}},{key:"setTabFocus",value:function(e){var t=this.player,n=t.elements;if(clearTimeout(this.focusTimer),"keydown"!==e.type||9===e.which){"keydown"===e.type&&(this.lastKeyDown=e.timeStamp);var i,a=e.timeStamp-this.lastKeyDown<=20;if("focus"!==e.type||a)i=t.config.classNames.tabFocus,X(G.call(t,".".concat(i)),i,!1),this.focusTimer=setTimeout(function(){var e=document.activeElement;n.container.contains(e)&&X(document.activeElement,t.config.classNames.tabFocus,!0)},10)}}},{key:"global",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this.player;t.config.keyboard.global&&_.call(t,window,"keydown keyup",this.handleKey,e,!1),_.call(t,document.body,"click",this.toggleMenu,e),q.call(t,document.body,"touchstart",this.firstTouch),_.call(t,document.body,"keydown focus blur",this.setTabFocus,e,!1,!0)}},{key:"container",value:function(){var e=this.player,t=e.config,n=e.elements,i=e.timers;!t.keyboard.global&&t.keyboard.focused&&O.call(e,n.container,"keydown keyup",this.handleKey,!1),O.call(e,n.container,"mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",function(t){var a=n.controls;a&&"enterfullscreen"===t.type&&(a.pressed=!1,a.hover=!1);var s=0;["touchstart","touchmove","mousemove"].includes(t.type)&&(Fe.toggleControls.call(e,!0),s=e.touch?3e3:2e3),clearTimeout(i.controls),i.controls=setTimeout(function(){return Fe.toggleControls.call(e,!1)},s)});var s=function(t){if(!t)return oe.call(e);var i=n.container.getBoundingClientRect(),a=i.width,s=i.height;return oe.call(e,"".concat(a,":").concat(s))},r=function(){clearTimeout(i.resized),i.resized=setTimeout(s,50)};O.call(e,n.container,"enterfullscreen exitfullscreen",function(t){var i=e.fullscreen,o=i.target,l=i.usingNative;if(o===n.container&&(e.isEmbed||!N.empty(e.config.ratio))){var c="enterfullscreen"===t.type,u=s(c);u.padding;!function(t,n,i){if(e.isVimeo){var s=e.elements.wrapper.firstChild,r=a(t,2)[1],o=a(re.call(e),2),l=o[0],c=o[1];s.style.maxWidth=i?"".concat(r/c*l,"px"):null,s.style.margin=i?"0 auto":null}}(u.ratio,0,c),l||(c?O.call(e,window,"resize",r):j.call(e,window,"resize",r))}})}},{key:"media",value:function(){var e=this,t=this.player,n=t.elements;if(O.call(t,t.media,"timeupdate seeking seeked",function(e){return Ae.timeUpdate.call(t,e)}),O.call(t,t.media,"durationchange loadeddata loadedmetadata",function(e){return Ae.durationUpdate.call(t,e)}),O.call(t,t.media,"canplay loadeddata",function(){Q(n.volume,!t.hasAudio),Q(n.buttons.mute,!t.hasAudio)}),O.call(t,t.media,"ended",function(){t.isHTML5&&t.isVideo&&t.config.resetOnEnd&&t.restart()}),O.call(t,t.media,"progress playing seeking seeked",function(e){return Ae.updateProgress.call(t,e)}),O.call(t,t.media,"volumechange",function(e){return Ae.updateVolume.call(t,e)}),O.call(t,t.media,"playing play pause ended emptied timeupdate",function(e){return Fe.checkPlaying.call(t,e)}),O.call(t,t.media,"waiting canplay seeked playing",function(e){return Fe.checkLoading.call(t,e)}),t.supported.ui&&t.config.clickToPlay&&!t.isAudio){var i=Z.call(t,".".concat(t.config.classNames.video));if(!N.element(i))return;O.call(t,n.container,"click",function(a){([n.container,i].includes(a.target)||i.contains(a.target))&&(t.touch&&t.config.hideControls||(t.ended?(e.proxy(a,t.restart,"restart"),e.proxy(a,t.play,"play")):e.proxy(a,t.togglePlay,"play")))})}t.supported.ui&&t.config.disableContextMenu&&O.call(t,n.wrapper,"contextmenu",function(e){e.preventDefault()},!1),O.call(t,t.media,"volumechange",function(){t.storage.set({volume:t.volume,muted:t.muted})}),O.call(t,t.media,"ratechange",function(){Ae.updateSetting.call(t,"speed"),t.storage.set({speed:t.speed})}),O.call(t,t.media,"qualitychange",function(e){Ae.updateSetting.call(t,"quality",null,e.detail.quality)}),O.call(t,t.media,"ready qualitychange",function(){Ae.setDownloadUrl.call(t)});var a=t.config.events.concat(["keyup","keydown"]).join(" ");O.call(t,t.media,a,function(e){var i=e.detail,a=void 0===i?{}:i;"error"===e.type&&(a=t.media.error),H.call(t,n.container,e.type,!0,a)})}},{key:"proxy",value:function(e,t,n){var i=this.player,a=i.config.listeners[n],s=!0;N.function(a)&&(s=a.call(i,e)),s&&N.function(t)&&t.call(i,e)}},{key:"bind",value:function(e,t,n,i){var a=this,s=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=this.player,o=r.config.listeners[i],l=N.function(o);O.call(r,e,t,function(e){return a.proxy(e,n,i)},s&&!l)}},{key:"controls",value:function(){var e=this,t=this.player,n=t.elements,i=L.isIE?"change":"input";if(n.buttons.play&&Array.from(n.buttons.play).forEach(function(n){e.bind(n,"click",t.togglePlay,"play")}),this.bind(n.buttons.restart,"click",t.restart,"restart"),this.bind(n.buttons.rewind,"click",t.rewind,"rewind"),this.bind(n.buttons.fastForward,"click",t.forward,"fastForward"),this.bind(n.buttons.mute,"click",function(){t.muted=!t.muted},"mute"),this.bind(n.buttons.captions,"click",function(){return t.toggleCaptions()}),this.bind(n.buttons.download,"click",function(){H.call(t,t.media,"download")},"download"),this.bind(n.buttons.fullscreen,"click",function(){t.fullscreen.toggle()},"fullscreen"),this.bind(n.buttons.pip,"click",function(){t.pip="toggle"},"pip"),this.bind(n.buttons.airplay,"click",t.airplay,"airplay"),this.bind(n.buttons.settings,"click",function(e){e.stopPropagation(),Ae.toggleMenu.call(t,e)}),this.bind(n.buttons.settings,"keyup",function(e){var n=e.which;[13,32].includes(n)&&(13!==n?(e.preventDefault(),e.stopPropagation(),Ae.toggleMenu.call(t,e)):Ae.focusFirstMenuItem.call(t,null,!0))},null,!1),this.bind(n.settings.menu,"keydown",function(e){27===e.which&&Ae.toggleMenu.call(t,e)}),this.bind(n.inputs.seek,"mousedown mousemove",function(e){var t=n.progress.getBoundingClientRect(),i=100/t.width*(e.pageX-t.left);e.currentTarget.setAttribute("seek-value",i)}),this.bind(n.inputs.seek,"mousedown mouseup keydown keyup touchstart touchend",function(e){var n=e.currentTarget,i=e.keyCode?e.keyCode:e.which;if(!N.keyboardEvent(e)||39===i||37===i){t.lastSeekTime=Date.now();var a=n.hasAttribute("play-on-seeked"),s=["mouseup","touchend","keyup"].includes(e.type);a&&s?(n.removeAttribute("play-on-seeked"),t.play()):!s&&t.playing&&(n.setAttribute("play-on-seeked",""),t.pause())}}),L.isIos){var s=G.call(t,'input[type="range"]');Array.from(s).forEach(function(t){return e.bind(t,i,function(e){return x(e.target)})})}this.bind(n.inputs.seek,i,function(e){var n=e.currentTarget,i=n.getAttribute("seek-value");N.empty(i)&&(i=n.value),n.removeAttribute("seek-value"),t.currentTime=i/n.max*t.duration},"seek"),this.bind(n.progress,"mouseenter mouseleave mousemove",function(e){return Ae.updateSeekTooltip.call(t,e)}),this.bind(n.progress,"mousemove touchmove",function(e){var n=t.previewThumbnails;n&&n.loaded&&n.startMove(e)}),this.bind(n.progress,"mouseleave click",function(){var e=t.previewThumbnails;e&&e.loaded&&e.endMove(!1,!0)}),this.bind(n.progress,"mousedown touchstart",function(e){var n=t.previewThumbnails;n&&n.loaded&&n.startScrubbing(e)}),this.bind(n.progress,"mouseup touchend",function(e){var n=t.previewThumbnails;n&&n.loaded&&n.endScrubbing(e)}),L.isWebkit&&Array.from(G.call(t,'input[type="range"]')).forEach(function(n){e.bind(n,"input",function(e){return Ae.updateRangeFill.call(t,e.target)})}),t.config.toggleInvert&&!N.element(n.display.duration)&&this.bind(n.display.currentTime,"click",function(){0!==t.currentTime&&(t.config.invertTime=!t.config.invertTime,Ae.timeUpdate.call(t))}),this.bind(n.inputs.volume,i,function(e){t.volume=e.target.value},"volume"),this.bind(n.controls,"mouseenter mouseleave",function(e){n.controls.hover=!t.touch&&"mouseenter"===e.type}),this.bind(n.controls,"mousedown mouseup touchstart touchend touchcancel",function(e){n.controls.pressed=["mousedown","touchstart"].includes(e.type)}),this.bind(n.controls,"focusin",function(){var i=t.config,a=t.timers;X(n.controls,i.classNames.noTransition,!0),Fe.toggleControls.call(t,!0),setTimeout(function(){X(n.controls,i.classNames.noTransition,!1)},0);var s=e.touch?3e3:4e3;clearTimeout(a.controls),a.controls=setTimeout(function(){return Fe.toggleControls.call(t,!1)},s)}),this.bind(n.inputs.volume,"wheel",function(e){var n=e.webkitDirectionInvertedFromDevice,i=a([e.deltaX,-e.deltaY].map(function(e){return n?-e:e}),2),s=i[0],r=i[1],o=Math.sign(Math.abs(s)>Math.abs(r)?s:r);t.increaseVolume(o/50);var l=t.media.volume;(1===o&&l<1||-1===o&&l>0)&&e.preventDefault()},"volume",!1)}}]),t}();"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var Ve=function(e,t){return e(t={exports:{}},t.exports),t.exports}(function(e,t){e.exports=function(){var e=function(){},t={},n={},i={};function a(e,t){if(e){var a=i[e];if(n[e]=t,a)for(;a.length;)a[0](e,t),a.splice(0,1)}}function s(t,n){t.call&&(t={success:t}),n.length?(t.error||e)(n):(t.success||e)(t)}function r(t,n,i,a){var s,o,l=document,c=i.async,u=(i.numRetries||0)+1,d=i.before||e,h=t.replace(/^(css|img)!/,"");a=a||0,/(^css!|\.css$)/.test(t)?((o=l.createElement("link")).rel="stylesheet",o.href=h,(s="hideFocus"in o)&&o.relList&&(s=0,o.rel="preload",o.as="style")):/(^img!|\.(png|gif|jpg|svg)$)/.test(t)?(o=l.createElement("img")).src=h:((o=l.createElement("script")).src=t,o.async=void 0===c||c),o.onload=o.onerror=o.onbeforeload=function(e){var l=e.type[0];if(s)try{o.sheet.cssText.length||(l="e")}catch(e){18!=e.code&&(l="e")}if("e"==l){if((a+=1)<u)return r(t,n,i,a)}else if("preload"==o.rel&&"style"==o.as)return o.rel="stylesheet";n(t,l,e.defaultPrevented)},!1!==d(t,o)&&l.head.appendChild(o)}function o(e,n,i){var o,l;if(n&&n.trim&&(o=n),l=(o?i:n)||{},o){if(o in t)throw"LoadJS";t[o]=!0}function c(t,n){!function(e,t,n){var i,a,s=(e=e.push?e:[e]).length,o=s,l=[];for(i=function(e,n,i){if("e"==n&&l.push(e),"b"==n){if(!i)return;l.push(e)}--s||t(l)},a=0;a<o;a++)r(e[a],i,n)}(e,function(e){s(l,e),t&&s({success:t,error:n},e),a(o,e)},l)}if(l.returnPromise)return new Promise(c);c()}return o.ready=function(e,t){return function(e,t){e=e.push?e:[e];var a,s,r,o=[],l=e.length,c=l;for(a=function(e,n){n.length&&o.push(e),--c||t(o)};l--;)s=e[l],(r=n[s])?a(s,r):(i[s]=i[s]||[]).push(a)}(e,function(e){s(t,e)}),o},o.done=function(e){a(e,[])},o.reset=function(){t={},n={},i={}},o.isDefined=function(e){return e in t},o}()});function Be(e){return new Promise(function(t,n){Ve(e,{success:t,error:n})})}function Ue(e){e&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===e&&(this.media.paused=!e,H.call(this,this.media,e?"play":"pause"))}var We={setup:function(){var e=this;X(this.elements.wrapper,this.config.classNames.embed,!0),oe.call(this),N.object(window.Vimeo)?We.ready.call(this):Be(this.config.urls.vimeo.sdk).then(function(){We.ready.call(e)}).catch(function(t){e.debug.warn("Vimeo SDK (player.js) failed to load",t)})},ready:function(){var e=this,t=this,n=t.config.vimeo,i=Se(F({},{loop:t.config.loop.active,autoplay:t.autoplay,muted:t.muted,gesture:"media",playsinline:!this.config.fullscreen.iosNative},n)),s=t.media.getAttribute("src");N.empty(s)&&(s=t.media.getAttribute(t.config.attributes.embed.id));var r,o=(r=s,N.empty(r)?null:N.number(Number(r))?r:r.match(/^.*(vimeo.com\/|video\/)(\d+).*/)?RegExp.$2:r),l=B("iframe"),c=ue(t.config.urls.vimeo.iframe,o,i);l.setAttribute("src",c),l.setAttribute("allowfullscreen",""),l.setAttribute("allowtransparency",""),l.setAttribute("allow","autoplay");var u=B("div",{poster:t.poster,class:t.config.classNames.embedContainer});u.appendChild(l),t.media=K(u,t.media),ve(ue(t.config.urls.vimeo.api,o),"json").then(function(e){if(!N.empty(e)){var n=new URL(e[0].thumbnail_large);n.pathname="".concat(n.pathname.split("_")[0],".jpg"),Fe.setPoster.call(t,n.href).catch(function(){})}}),t.embed=new window.Vimeo.Player(l,{autopause:t.config.autopause,muted:t.muted}),t.media.paused=!0,t.media.currentTime=0,t.supported.ui&&t.embed.disableTextTrack(),t.media.play=function(){return Ue.call(t,!0),t.embed.play()},t.media.pause=function(){return Ue.call(t,!1),t.embed.pause()},t.media.stop=function(){t.pause(),t.currentTime=0};var d=t.media.currentTime;Object.defineProperty(t.media,"currentTime",{get:function(){return d},set:function(e){var n=t.embed,i=t.media,a=t.paused,s=t.volume,r=a&&!n.hasPlayed;i.seeking=!0,H.call(t,i,"seeking"),Promise.resolve(r&&n.setVolume(0)).then(function(){return n.setCurrentTime(e)}).then(function(){return r&&n.pause()}).then(function(){return r&&n.setVolume(s)}).catch(function(){})}});var h=t.config.speed.selected;Object.defineProperty(t.media,"playbackRate",{get:function(){return h},set:function(e){t.embed.setPlaybackRate(e).then(function(){h=e,H.call(t,t.media,"ratechange")}).catch(function(e){"Error"===e.name&&Ae.setSpeedMenu.call(t,[])})}});var m=t.config.volume;Object.defineProperty(t.media,"volume",{get:function(){return m},set:function(e){t.embed.setVolume(e).then(function(){m=e,H.call(t,t.media,"volumechange")})}});var p=t.config.muted;Object.defineProperty(t.media,"muted",{get:function(){return p},set:function(e){var n=!!N.boolean(e)&&e;t.embed.setVolume(n?0:t.config.volume).then(function(){p=n,H.call(t,t.media,"volumechange")})}});var f,g=t.config.loop;Object.defineProperty(t.media,"loop",{get:function(){return g},set:function(e){var n=N.boolean(e)?e:t.config.loop.active;t.embed.setLoop(n).then(function(){g=n})}}),t.embed.getVideoUrl().then(function(e){f=e,Ae.setDownloadUrl.call(t)}).catch(function(t){e.debug.warn(t)}),Object.defineProperty(t.media,"currentSrc",{get:function(){return f}}),Object.defineProperty(t.media,"ended",{get:function(){return t.currentTime===t.duration}}),Promise.all([t.embed.getVideoWidth(),t.embed.getVideoHeight()]).then(function(n){var i=a(n,2),s=i[0],r=i[1];t.embed.ratio=[s,r],oe.call(e)}),t.embed.setAutopause(t.config.autopause).then(function(e){t.config.autopause=e}),t.embed.getVideoTitle().then(function(n){t.config.title=n,Fe.setTitle.call(e)}),t.embed.getCurrentTime().then(function(e){d=e,H.call(t,t.media,"timeupdate")}),t.embed.getDuration().then(function(e){t.media.duration=e,H.call(t,t.media,"durationchange")}),t.embed.getTextTracks().then(function(e){t.media.textTracks=e,Pe.setup.call(t)}),t.embed.on("cuechange",function(e){var n=e.cues,i=(void 0===n?[]:n).map(function(e){return function(e){var t=document.createDocumentFragment(),n=document.createElement("div");return t.appendChild(n),n.innerHTML=e,t.firstChild.innerText}(e.text)});Pe.updateCues.call(t,i)}),t.embed.on("loaded",function(){(t.embed.getPaused().then(function(e){Ue.call(t,!e),e||H.call(t,t.media,"playing")}),N.element(t.embed.element)&&t.supported.ui)&&t.embed.element.setAttribute("tabindex",-1)}),t.embed.on("play",function(){Ue.call(t,!0),H.call(t,t.media,"playing")}),t.embed.on("pause",function(){Ue.call(t,!1)}),t.embed.on("timeupdate",function(e){t.media.seeking=!1,d=e.seconds,H.call(t,t.media,"timeupdate")}),t.embed.on("progress",function(e){t.media.buffered=e.percent,H.call(t,t.media,"progress"),1===parseInt(e.percent,10)&&H.call(t,t.media,"canplaythrough"),t.embed.getDuration().then(function(e){e!==t.media.duration&&(t.media.duration=e,H.call(t,t.media,"durationchange"))})}),t.embed.on("seeked",function(){t.media.seeking=!1,H.call(t,t.media,"seeked")}),t.embed.on("ended",function(){t.media.paused=!0,H.call(t,t.media,"ended")}),t.embed.on("error",function(e){t.media.error=e,H.call(t,t.media,"error")}),setTimeout(function(){return Fe.build.call(t)},0)}};function ze(e){e&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===e&&(this.media.paused=!e,H.call(this,this.media,e?"play":"pause"))}function Ke(e){return e.noCookie?"https://www.youtube-nocookie.com":"http:"===window.location.protocol?"http://www.youtube.com":void 0}var Ye={setup:function(){var e=this;if(X(this.elements.wrapper,this.config.classNames.embed,!0),N.object(window.YT)&&N.function(window.YT.Player))Ye.ready.call(this);else{var t=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){N.function(t)&&t(),Ye.ready.call(e)},Be(this.config.urls.youtube.sdk).catch(function(t){e.debug.warn("YouTube API failed to load",t)})}},getTitle:function(e){var t=this;ve(ue(this.config.urls.youtube.api,e)).then(function(e){if(N.object(e)){var n=e.title,i=e.height,a=e.width;t.config.title=n,Fe.setTitle.call(t),t.embed.ratio=[a,i]}oe.call(t)}).catch(function(){oe.call(t)})},ready:function(){var e=this,t=e.media&&e.media.getAttribute("id");if(N.empty(t)||!t.startsWith("youtube-")){var n=e.media.getAttribute("src");N.empty(n)&&(n=e.media.getAttribute(this.config.attributes.embed.id));var i,a,s=(i=n,N.empty(i)?null:i.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/)?RegExp.$2:i),r=(a=e.provider,"".concat(a,"-").concat(Math.floor(1e4*Math.random()))),o=B("div",{id:r,poster:e.poster});e.media=K(o,e.media);var l=function(e){return"https://i.ytimg.com/vi/".concat(s,"/").concat(e,"default.jpg")};De(l("maxres"),121).catch(function(){return De(l("sd"),121)}).catch(function(){return De(l("hq"))}).then(function(t){return Fe.setPoster.call(e,t.src)}).then(function(t){t.includes("maxres")||(e.elements.poster.style.backgroundSize="cover")}).catch(function(){});var c=e.config.youtube;e.embed=new window.YT.Player(r,{videoId:s,host:Ke(c),playerVars:F({},{autoplay:e.config.autoplay?1:0,hl:e.config.hl,controls:e.supported.ui?0:1,disablekb:1,playsinline:e.config.fullscreen.iosNative?0:1,cc_load_policy:e.captions.active?1:0,cc_lang_pref:e.config.captions.language,widget_referrer:window?window.location.href:null},c),events:{onError:function(t){if(!e.media.error){var n=t.data,i={2:"The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",5:"The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",100:"The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",101:"The owner of the requested video does not allow it to be played in embedded players.",150:"The owner of the requested video does not allow it to be played in embedded players."}[n]||"An unknown error occured";e.media.error={code:n,message:i},H.call(e,e.media,"error")}},onPlaybackRateChange:function(t){var n=t.target;e.media.playbackRate=n.getPlaybackRate(),H.call(e,e.media,"ratechange")},onReady:function(t){if(!N.function(e.media.play)){var n=t.target;Ye.getTitle.call(e,s),e.media.play=function(){ze.call(e,!0),n.playVideo()},e.media.pause=function(){ze.call(e,!1),n.pauseVideo()},e.media.stop=function(){n.stopVideo()},e.media.duration=n.getDuration(),e.media.paused=!0,e.media.currentTime=0,Object.defineProperty(e.media,"currentTime",{get:function(){return Number(n.getCurrentTime())},set:function(t){e.paused&&!e.embed.hasPlayed&&e.embed.mute(),e.media.seeking=!0,H.call(e,e.media,"seeking"),n.seekTo(t)}}),Object.defineProperty(e.media,"playbackRate",{get:function(){return n.getPlaybackRate()},set:function(e){n.setPlaybackRate(e)}});var i=e.config.volume;Object.defineProperty(e.media,"volume",{get:function(){return i},set:function(t){i=t,n.setVolume(100*i),H.call(e,e.media,"volumechange")}});var a=e.config.muted;Object.defineProperty(e.media,"muted",{get:function(){return a},set:function(t){var i=N.boolean(t)?t:a;a=i,n[i?"mute":"unMute"](),H.call(e,e.media,"volumechange")}}),Object.defineProperty(e.media,"currentSrc",{get:function(){return n.getVideoUrl()}}),Object.defineProperty(e.media,"ended",{get:function(){return e.currentTime===e.duration}}),e.options.speed=n.getAvailablePlaybackRates(),e.supported.ui&&e.media.setAttribute("tabindex",-1),H.call(e,e.media,"timeupdate"),H.call(e,e.media,"durationchange"),clearInterval(e.timers.buffering),e.timers.buffering=setInterval(function(){e.media.buffered=n.getVideoLoadedFraction(),(null===e.media.lastBuffered||e.media.lastBuffered<e.media.buffered)&&H.call(e,e.media,"progress"),e.media.lastBuffered=e.media.buffered,1===e.media.buffered&&(clearInterval(e.timers.buffering),H.call(e,e.media,"canplaythrough"))},200),setTimeout(function(){return Fe.build.call(e)},50)}},onStateChange:function(t){var n=t.target;switch(clearInterval(e.timers.playing),e.media.seeking&&[1,2].includes(t.data)&&(e.media.seeking=!1,H.call(e,e.media,"seeked")),t.data){case-1:H.call(e,e.media,"timeupdate"),e.media.buffered=n.getVideoLoadedFraction(),H.call(e,e.media,"progress");break;case 0:ze.call(e,!1),e.media.loop?(n.stopVideo(),n.playVideo()):H.call(e,e.media,"ended");break;case 1:e.config.autoplay||!e.media.paused||e.embed.hasPlayed?(ze.call(e,!0),H.call(e,e.media,"playing"),e.timers.playing=setInterval(function(){H.call(e,e.media,"timeupdate")},50),e.media.duration!==n.getDuration()&&(e.media.duration=n.getDuration(),H.call(e,e.media,"durationchange"))):e.media.pause();break;case 2:e.muted||e.embed.unMute(),ze.call(e,!1)}H.call(e,e.elements.container,"statechange",!1,{code:t.data})}}})}}},Qe={setup:function(){this.media?(X(this.elements.container,this.config.classNames.type.replace("{0}",this.type),!0),X(this.elements.container,this.config.classNames.provider.replace("{0}",this.provider),!0),this.isEmbed&&X(this.elements.container,this.config.classNames.type.replace("{0}","video"),!0),this.isVideo&&(this.elements.wrapper=B("div",{class:this.config.classNames.video}),R(this.media,this.elements.wrapper),this.elements.poster=B("div",{class:this.config.classNames.poster}),this.elements.wrapper.appendChild(this.elements.poster)),this.isHTML5?le.extend.call(this):this.isYouTube?Ye.setup.call(this):this.isVimeo&&We.setup.call(this)):this.debug.warn("No media element found!")}},Xe=function(){function t(n){var i=this;e(this,t),this.player=n,this.config=n.config.ads,this.playing=!1,this.initialized=!1,this.elements={container:null,displayContainer:null},this.manager=null,this.loader=null,this.cuePoints=null,this.events={},this.safetyTimer=null,this.countdownTimer=null,this.managerPromise=new Promise(function(e,t){i.on("loaded",e),i.on("error",t)}),this.load()}return n(t,[{key:"load",value:function(){var e=this;this.enabled&&(N.object(window.google)&&N.object(window.google.ima)?this.ready():Be(this.player.config.urls.googleIMA.sdk).then(function(){e.ready()}).catch(function(){e.trigger("error",new Error("Google IMA SDK failed to load"))}))}},{key:"ready",value:function(){var e,t=this;this.enabled||((e=this).manager&&e.manager.destroy(),e.elements.displayContainer&&e.elements.displayContainer.destroy(),e.elements.container.remove()),this.startSafetyTimer(12e3,"ready()"),this.managerPromise.then(function(){t.clearSafetyTimer("onAdsManagerLoaded()")}),this.listeners(),this.setupIMA()}},{key:"setupIMA",value:function(){this.elements.container=B("div",{class:this.player.config.classNames.ads}),this.player.elements.container.appendChild(this.elements.container),google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED),google.ima.settings.setLocale(this.player.config.ads.language),google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline),this.elements.displayContainer=new google.ima.AdDisplayContainer(this.elements.container,this.player.media),this.requestAds()}},{key:"requestAds",value:function(){var e=this,t=this.player.elements.container;try{this.loader=new google.ima.AdsLoader(this.elements.displayContainer),this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,function(t){return e.onAdsManagerLoaded(t)},!1),this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,function(t){return e.onAdError(t)},!1);var n=new google.ima.AdsRequest;n.adTagUrl=this.tagUrl,n.linearAdSlotWidth=t.offsetWidth,n.linearAdSlotHeight=t.offsetHeight,n.nonLinearAdSlotWidth=t.offsetWidth,n.nonLinearAdSlotHeight=t.offsetHeight,n.forceNonLinearFullSlot=!1,n.setAdWillPlayMuted(!this.player.muted),this.loader.requestAds(n)}catch(e){this.onAdError(e)}}},{key:"pollCountdown",value:function(){var e=this;if(!(arguments.length>0&&void 0!==arguments[0]&&arguments[0]))return clearInterval(this.countdownTimer),void this.elements.container.removeAttribute("data-badge-text");this.countdownTimer=setInterval(function(){var t=Ce(Math.max(e.manager.getRemainingTime(),0)),n="".concat(ge("advertisement",e.player.config)," - ").concat(t);e.elements.container.setAttribute("data-badge-text",n)},100)}},{key:"onAdsManagerLoaded",value:function(e){var t=this;if(this.enabled){var n=new google.ima.AdsRenderingSettings;n.restoreCustomPlaybackStateOnAdBreakComplete=!0,n.enablePreloading=!0,this.manager=e.getAdsManager(this.player,n),this.cuePoints=this.manager.getCuePoints(),this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,function(e){return t.onAdError(e)}),Object.keys(google.ima.AdEvent.Type).forEach(function(e){t.manager.addEventListener(google.ima.AdEvent.Type[e],function(e){return t.onAdEvent(e)})}),this.trigger("loaded")}}},{key:"addCuePoints",value:function(){var e=this;N.empty(this.cuePoints)||this.cuePoints.forEach(function(t){if(0!==t&&-1!==t&&t<e.player.duration){var n=e.player.elements.progress;if(N.element(n)){var i=100/e.player.duration*t,a=B("span",{class:e.player.config.classNames.cues});a.style.left="".concat(i.toString(),"%"),n.appendChild(a)}}})}},{key:"onAdEvent",value:function(e){var t=this,n=this.player.elements.container,i=e.getAd(),a=e.getAdData();switch(function(e){H.call(t.player,t.player.media,"ads".concat(e.replace(/_/g,"").toLowerCase()))}(e.type),e.type){case google.ima.AdEvent.Type.LOADED:this.trigger("loaded"),this.pollCountdown(!0),i.isLinear()||(i.width=n.offsetWidth,i.height=n.offsetHeight);break;case google.ima.AdEvent.Type.STARTED:this.manager.setVolume(this.player.volume);break;case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:this.loadAds();break;case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:this.pauseContent();break;case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:this.pollCountdown(),this.resumeContent();break;case google.ima.AdEvent.Type.LOG:a.adError&&this.player.debug.warn("Non-fatal ad error: ".concat(a.adError.getMessage()))}}},{key:"onAdError",value:function(e){this.cancel(),this.player.debug.warn("Ads error",e)}},{key:"listeners",value:function(){var e,t=this,n=this.player.elements.container;this.player.on("canplay",function(){t.addCuePoints()}),this.player.on("ended",function(){t.loader.contentComplete()}),this.player.on("timeupdate",function(){e=t.player.currentTime}),this.player.on("seeked",function(){var n=t.player.currentTime;N.empty(t.cuePoints)||t.cuePoints.forEach(function(i,a){e<i&&i<n&&(t.manager.discardAdBreak(),t.cuePoints.splice(a,1))})}),window.addEventListener("resize",function(){t.manager&&t.manager.resize(n.offsetWidth,n.offsetHeight,google.ima.ViewMode.NORMAL)})}},{key:"play",value:function(){var e=this,t=this.player.elements.container;this.managerPromise||this.resumeContent(),this.managerPromise.then(function(){e.manager.setVolume(e.player.volume),e.elements.displayContainer.initialize();try{e.initialized||(e.manager.init(t.offsetWidth,t.offsetHeight,google.ima.ViewMode.NORMAL),e.manager.start()),e.initialized=!0}catch(t){e.onAdError(t)}}).catch(function(){})}},{key:"resumeContent",value:function(){this.elements.container.style.zIndex="",this.playing=!1,this.player.media.play()}},{key:"pauseContent",value:function(){this.elements.container.style.zIndex=3,this.playing=!0,this.player.media.pause()}},{key:"cancel",value:function(){this.initialized&&this.resumeContent(),this.trigger("error"),this.loadAds()}},{key:"loadAds",value:function(){var e=this;this.managerPromise.then(function(){e.manager&&e.manager.destroy(),e.managerPromise=new Promise(function(t){e.on("loaded",t),e.player.debug.log(e.manager)}),e.requestAds()}).catch(function(){})}},{key:"trigger",value:function(e){for(var t=this,n=arguments.length,i=new Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];var s=this.events[e];N.array(s)&&s.forEach(function(e){N.function(e)&&e.apply(t,i)})}},{key:"on",value:function(e,t){return N.array(this.events[e])||(this.events[e]=[]),this.events[e].push(t),this}},{key:"startSafetyTimer",value:function(e,t){var n=this;this.player.debug.log("Safety timer invoked from: ".concat(t)),this.safetyTimer=setTimeout(function(){n.cancel(),n.clearSafetyTimer("startSafetyTimer()")},e)}},{key:"clearSafetyTimer",value:function(e){N.nullOrUndefined(this.safetyTimer)||(this.player.debug.log("Safety timer cleared from: ".concat(e)),clearTimeout(this.safetyTimer),this.safetyTimer=null)}},{key:"enabled",get:function(){var e=this.config;return this.player.isHTML5&&this.player.isVideo&&e.enabled&&(!N.empty(e.publisherId)||N.url(e.tagUrl))}},{key:"tagUrl",get:function(){var e=this.config;if(N.url(e.tagUrl))return e.tagUrl;var t={AV_PUBLISHERID:"58c25bb0073ef448b1087ad6",AV_CHANNELID:"5a0458dc28a06145e4519d21",AV_URL:window.location.hostname,cb:Date.now(),AV_WIDTH:640,AV_HEIGHT:480,AV_CDIM2:this.publisherId};return"".concat("https://go.aniview.com/api/adserver6/vast/","?").concat(Se(t))}}]),t}(),Je=function(){function t(n){e(this,t),this.player=n,this.thumbnails=[],this.loaded=!1,this.lastMouseMoveTime=Date.now(),this.mouseDown=!1,this.loadedImages=[],this.elements={thumb:{},scrubbing:{}},this.load()}return n(t,[{key:"load",value:function(){var e=this;this.player.elements.display.seekTooltip&&(this.player.elements.display.seekTooltip.hidden=this.enabled),this.enabled&&this.getThumbnails().then(function(){e.enabled&&(e.render(),e.determineContainerAutoSizing(),e.loaded=!0)})}},{key:"getThumbnails",value:function(){var e=this;return new Promise(function(t){var n=e.player.config.previewThumbnails.src;if(N.empty(n))throw new Error("Missing previewThumbnails.src config attribute");var i=(N.string(n)?[n]:n).map(function(t){return e.getThumbnail(t)});Promise.all(i).then(function(){e.thumbnails.sort(function(e,t){return e.height-t.height}),e.player.debug.log("Preview thumbnails",e.thumbnails),t()})})}},{key:"getThumbnail",value:function(e){var t=this;return new Promise(function(n){ve(e).then(function(i){var s,r,o={frames:(s=i,r=[],s.split(/\r\n\r\n|\n\n|\r\r/).forEach(function(e){var t={};e.split(/\r\n|\n|\r/).forEach(function(e){if(N.number(t.startTime)){if(!N.empty(e.trim())&&N.empty(t.text)){var n=e.trim().split("#xywh="),i=a(n,1);if(t.text=i[0],n[1]){var s=a(n[1].split(","),4);t.x=s[0],t.y=s[1],t.w=s[2],t.h=s[3]}}}else{var r=e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);r&&(t.startTime=60*Number(r[1]||0)*60+60*Number(r[2])+Number(r[3])+Number("0.".concat(r[4])),t.endTime=60*Number(r[6]||0)*60+60*Number(r[7])+Number(r[8])+Number("0.".concat(r[9])))}}),t.text&&r.push(t)}),r),height:null,urlPrefix:""};o.frames[0].text.startsWith("/")||o.frames[0].text.startsWith("http://")||o.frames[0].text.startsWith("https://")||(o.urlPrefix=e.substring(0,e.lastIndexOf("/")+1));var l=new Image;l.onload=function(){o.height=l.naturalHeight,o.width=l.naturalWidth,t.thumbnails.push(o),n()},l.src=o.urlPrefix+o.frames[0].text})})}},{key:"startMove",value:function(e){if(this.loaded&&N.event(e)&&["touchmove","mousemove"].includes(e.type)&&this.player.media.duration){if("touchmove"===e.type)this.seekTime=this.player.media.duration*(this.player.elements.inputs.seek.value/100);else{var t=this.player.elements.progress.getBoundingClientRect(),n=100/t.width*(e.pageX-t.left);this.seekTime=this.player.media.duration*(n/100),this.seekTime<0&&(this.seekTime=0),this.seekTime>this.player.media.duration-1&&(this.seekTime=this.player.media.duration-1),this.mousePosX=e.pageX,this.elements.thumb.time.innerText=Ce(this.seekTime)}this.showImageAtCurrentTime()}}},{key:"endMove",value:function(){this.toggleThumbContainer(!1,!0)}},{key:"startScrubbing",value:function(e){!1!==e.button&&0!==e.button||(this.mouseDown=!0,this.player.media.duration&&(this.toggleScrubbingContainer(!0),this.toggleThumbContainer(!1,!0),this.showImageAtCurrentTime()))}},{key:"endScrubbing",value:function(){var e=this;this.mouseDown=!1,Math.ceil(this.lastTime)===Math.ceil(this.player.media.currentTime)?this.toggleScrubbingContainer(!1):q.call(this.player,this.player.media,"timeupdate",function(){e.mouseDown||e.toggleScrubbingContainer(!1)})}},{key:"listeners",value:function(){var e=this;this.player.on("play",function(){e.toggleThumbContainer(!1,!0)}),this.player.on("seeked",function(){e.toggleThumbContainer(!1)}),this.player.on("timeupdate",function(){e.lastTime=e.player.media.currentTime})}},{key:"render",value:function(){this.elements.thumb.container=B("div",{class:this.player.config.classNames.previewThumbnails.thumbContainer}),this.elements.thumb.imageContainer=B("div",{class:this.player.config.classNames.previewThumbnails.imageContainer}),this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);var e=B("div",{class:this.player.config.classNames.previewThumbnails.timeContainer});this.elements.thumb.time=B("span",{},"00:00"),e.appendChild(this.elements.thumb.time),this.elements.thumb.container.appendChild(e),N.element(this.player.elements.progress)&&this.player.elements.progress.appendChild(this.elements.thumb.container),this.elements.scrubbing.container=B("div",{class:this.player.config.classNames.previewThumbnails.scrubbingContainer}),this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)}},{key:"showImageAtCurrentTime",value:function(){var e=this;this.mouseDown?this.setScrubbingContainerSize():this.setThumbContainerSizeAndPos();var t=this.thumbnails[0].frames.findIndex(function(t){return e.seekTime>=t.startTime&&e.seekTime<=t.endTime}),n=t>=0,i=0;this.mouseDown||this.toggleThumbContainer(n),n&&(this.thumbnails.forEach(function(n,a){e.loadedImages.includes(n.frames[t].text)&&(i=a)}),t!==this.showingThumb&&(this.showingThumb=t,this.loadImage(i)))}},{key:"loadImage",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=this.showingThumb,i=this.thumbnails[t],a=i.urlPrefix,s=i.frames[n],r=i.frames[n].text,o=a+r;if(this.currentImageElement&&this.currentImageElement.dataset.filename===r)this.showImage(this.currentImageElement,s,t,n,r,!1),this.currentImageElement.dataset.index=n,this.removeOldImages(this.currentImageElement);else{this.loadingImage&&this.usingSprites&&(this.loadingImage.onload=null);var l=new Image;l.src=o,l.dataset.index=n,l.dataset.filename=r,this.showingThumbFilename=r,this.player.debug.log("Loading image: ".concat(o)),l.onload=function(){return e.showImage(l,s,t,n,r,!0)},this.loadingImage=l,this.removeOldImages(l)}}},{key:"showImage",value:function(e,t,n,i,a){var s=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];this.player.debug.log("Showing thumb: ".concat(a,". num: ").concat(i,". qual: ").concat(n,". newimg: ").concat(s)),this.setImageSizeAndOffset(e,t),s&&(this.currentImageContainer.appendChild(e),this.currentImageElement=e,this.loadedImages.includes(a)||this.loadedImages.push(a)),this.preloadNearby(i,!0).then(this.preloadNearby(i,!1)).then(this.getHigherQuality(n,e,t,a))}},{key:"removeOldImages",value:function(e){var t=this;Array.from(this.currentImageContainer.children).forEach(function(n){if("img"===n.tagName.toLowerCase()){var i=t.usingSprites?500:1e3;if(n.dataset.index!==e.dataset.index&&!n.dataset.deleting){n.dataset.deleting=!0;var a=t.currentImageContainer;setTimeout(function(){a.removeChild(n),t.player.debug.log("Removing thumb: ".concat(n.dataset.filename))},i)}}})}},{key:"preloadNearby",value:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return new Promise(function(i){setTimeout(function(){var a=t.thumbnails[0].frames[e].text;if(t.showingThumbFilename===a){var s;s=n?t.thumbnails[0].frames.slice(e):t.thumbnails[0].frames.slice(0,e).reverse();var r=!1;s.forEach(function(e){var n=e.text;if(n!==a&&!t.loadedImages.includes(n)){r=!0,t.player.debug.log("Preloading thumb filename: ".concat(n));var s=t.thumbnails[0].urlPrefix+n,o=new Image;o.src=s,o.onload=function(){t.player.debug.log("Preloaded thumb filename: ".concat(n)),t.loadedImages.includes(n)||t.loadedImages.push(n),i()}}}),r||i()}},300)})}},{key:"getHigherQuality",value:function(e,t,n,i){var a=this;if(e<this.thumbnails.length-1){var s=t.naturalHeight;this.usingSprites&&(s=n.h),s<this.thumbContainerHeight&&setTimeout(function(){a.showingThumbFilename===i&&(a.player.debug.log("Showing higher quality thumb for: ".concat(i)),a.loadImage(e+1))},300)}}},{key:"toggleThumbContainer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.player.config.classNames.previewThumbnails.thumbContainerShown;this.elements.thumb.container.classList.toggle(n,e),!e&&t&&(this.showingThumb=null,this.showingThumbFilename=null)}},{key:"toggleScrubbingContainer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.player.config.classNames.previewThumbnails.scrubbingContainerShown;this.elements.scrubbing.container.classList.toggle(t,e),e||(this.showingThumb=null,this.showingThumbFilename=null)}},{key:"determineContainerAutoSizing",value:function(){this.elements.thumb.imageContainer.clientHeight>20&&(this.sizeSpecifiedInCSS=!0)}},{key:"setThumbContainerSizeAndPos",value:function(){if(!this.sizeSpecifiedInCSS){var e=Math.floor(this.thumbContainerHeight*this.thumbAspectRatio);this.elements.thumb.imageContainer.style.height="".concat(this.thumbContainerHeight,"px"),this.elements.thumb.imageContainer.style.width="".concat(e,"px")}this.setThumbContainerPos()}},{key:"setThumbContainerPos",value:function(){var e=this.player.elements.progress.getBoundingClientRect(),t=this.player.elements.container.getBoundingClientRect(),n=this.elements.thumb.container,i=t.left-e.left+10,a=t.right-e.left-n.clientWidth-10,s=this.mousePosX-e.left-n.clientWidth/2;s<i&&(s=i),s>a&&(s=a),n.style.left="".concat(s,"px")}},{key:"setScrubbingContainerSize",value:function(){this.elements.scrubbing.container.style.width="".concat(this.player.media.clientWidth,"px"),this.elements.scrubbing.container.style.height="".concat(this.player.media.clientWidth/this.thumbAspectRatio,"px")}},{key:"setImageSizeAndOffset",value:function(e,t){if(this.usingSprites){var n=this.thumbContainerHeight/t.h;e.style.height="".concat(Math.floor(e.naturalHeight*n),"px"),e.style.width="".concat(Math.floor(e.naturalWidth*n),"px"),e.style.left="-".concat(t.x*n,"px"),e.style.top="-".concat(t.y*n,"px")}}},{key:"enabled",get:function(){return this.player.isHTML5&&this.player.isVideo&&this.player.config.previewThumbnails.enabled}},{key:"currentImageContainer",get:function(){return this.mouseDown?this.elements.scrubbing.container:this.elements.thumb.imageContainer}},{key:"usingSprites",get:function(){return Object.keys(this.thumbnails[0].frames[0]).includes("w")}},{key:"thumbAspectRatio",get:function(){return this.usingSprites?this.thumbnails[0].frames[0].w/this.thumbnails[0].frames[0].h:this.thumbnails[0].width/this.thumbnails[0].height}},{key:"thumbContainerHeight",get:function(){return this.mouseDown?Math.floor(this.player.media.clientWidth/this.thumbAspectRatio):Math.floor(this.player.media.clientWidth/this.thumbAspectRatio/4)}},{key:"currentImageElement",get:function(){return this.mouseDown?this.currentScrubbingImageElement:this.currentThumbnailImageElement},set:function(e){this.mouseDown?this.currentScrubbingImageElement=e:this.currentThumbnailImageElement=e}}]),t}(),$e={insertElements:function(e,t){var n=this;N.string(t)?U(e,this.media,{src:t}):N.array(t)&&t.forEach(function(t){U(e,n.media,t)})},change:function(e){var t=this;D(e,"sources.length")?(le.cancelRequests.call(this),this.destroy.call(this,function(){t.options.quality=[],W(t.media),t.media=null,N.element(t.elements.container)&&t.elements.container.removeAttribute("class");var n=e.sources,i=e.type,s=a(n,1)[0],r=s.provider,o=void 0===r?Le.html5:r,l=s.src,c="html5"===o?i:"div",u="html5"===o?{}:{src:l};Object.assign(t,{provider:o,type:i,supported:ie.check(i,o,t.config.playsinline),media:B(c,u)}),t.elements.container.appendChild(t.media),N.boolean(e.autoplay)&&(t.config.autoplay=e.autoplay),t.isHTML5&&(t.config.crossorigin&&t.media.setAttribute("crossorigin",""),t.config.autoplay&&t.media.setAttribute("autoplay",""),N.empty(e.poster)||(t.poster=e.poster),t.config.loop.active&&t.media.setAttribute("loop",""),t.config.muted&&t.media.setAttribute("muted",""),t.config.playsinline&&t.media.setAttribute("playsinline","")),Fe.addStyleHook.call(t),t.isHTML5&&$e.insertElements.call(t,"source",n),t.config.title=e.title,Qe.setup.call(t),t.isHTML5&&Object.keys(e).includes("tracks")&&$e.insertElements.call(t,"track",e.tracks),(t.isHTML5||t.isEmbed&&!t.supported.ui)&&Fe.build.call(t),t.isHTML5&&t.media.load(),t.previewThumbnails&&t.previewThumbnails.load(),t.fullscreen.update()},!0)):this.debug.warn("Invalid source format")}};var Ge,Ze=function(){function t(n,i){var a=this;if(e(this,t),this.timers={},this.ready=!1,this.loading=!1,this.failed=!1,this.touch=ie.touch,this.media=n,N.string(this.media)&&(this.media=document.querySelectorAll(this.media)),(window.jQuery&&this.media instanceof jQuery||N.nodeList(this.media)||N.array(this.media))&&(this.media=this.media[0]),this.config=F({},Ne,t.defaults,i||{},function(){try{return JSON.parse(a.media.getAttribute("data-plyr-config"))}catch(e){return{}}}()),this.elements={container:null,captions:null,buttons:{},display:{},progress:{},inputs:{},settings:{popup:null,menu:null,panels:{},buttons:{}}},this.captions={active:null,currentTrack:-1,meta:new WeakMap},this.fullscreen={active:!1},this.options={speed:[],quality:[]},this.debug=new Oe(this.config.debug),this.debug.log("Config",this.config),this.debug.log("Support",ie),!N.nullOrUndefined(this.media)&&N.element(this.media))if(this.media.plyr)this.debug.warn("Target already setup");else if(this.config.enabled)if(ie.check().api){var s=this.media.cloneNode(!0);s.autoplay=!1,this.elements.original=s;var r=this.media.tagName.toLowerCase(),o=null,l=null;switch(r){case"div":if(o=this.media.querySelector("iframe"),N.element(o)){if(l=Ee(o.getAttribute("src")),this.provider=function(e){return/^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e)?Le.youtube:/^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e)?Le.vimeo:null}(l.toString()),this.elements.container=this.media,this.media=o,this.elements.container.className="",l.search.length){var c=["1","true"];c.includes(l.searchParams.get("autoplay"))&&(this.config.autoplay=!0),c.includes(l.searchParams.get("loop"))&&(this.config.loop.active=!0),this.isYouTube?(this.config.playsinline=c.includes(l.searchParams.get("playsinline")),this.config.youtube.hl=l.searchParams.get("hl")):this.config.playsinline=!0}}else this.provider=this.media.getAttribute(this.config.attributes.embed.provider),this.media.removeAttribute(this.config.attributes.embed.provider);if(N.empty(this.provider)||!Object.keys(Le).includes(this.provider))return void this.debug.error("Setup failed: Invalid provider");this.type=Ie.video;break;case"video":case"audio":this.type=r,this.provider=Le.html5,this.media.hasAttribute("crossorigin")&&(this.config.crossorigin=!0),this.media.hasAttribute("autoplay")&&(this.config.autoplay=!0),(this.media.hasAttribute("playsinline")||this.media.hasAttribute("webkit-playsinline"))&&(this.config.playsinline=!0),this.media.hasAttribute("muted")&&(this.config.muted=!0),this.media.hasAttribute("loop")&&(this.config.loop.active=!0);break;default:return void this.debug.error("Setup failed: unsupported type")}this.supported=ie.check(this.type,this.provider,this.config.playsinline),this.supported.api?(this.eventListeners=[],this.listeners=new Re(this),this.storage=new ye(this),this.media.plyr=this,N.element(this.elements.container)||(this.elements.container=B("div",{tabindex:0}),R(this.media,this.elements.container)),Fe.addStyleHook.call(this),Qe.setup.call(this),this.config.debug&&O.call(this,this.elements.container,this.config.events.join(" "),function(e){a.debug.log("event: ".concat(e.type))}),(this.isHTML5||this.isEmbed&&!this.supported.ui)&&Fe.build.call(this),this.listeners.container(),this.listeners.global(),this.fullscreen=new He(this),this.config.ads.enabled&&(this.ads=new Xe(this)),this.isHTML5&&this.config.autoplay&&setTimeout(function(){return a.play()},10),this.lastSeekTime=0,this.config.previewThumbnails.enabled&&(this.previewThumbnails=new Je(this))):this.debug.error("Setup failed: no support")}else this.debug.error("Setup failed: no support");else this.debug.error("Setup failed: disabled by config");else this.debug.error("Setup failed: no suitable element passed")}return n(t,[{key:"play",value:function(){var e=this;return N.function(this.media.play)?(this.ads&&this.ads.enabled&&this.ads.managerPromise.then(function(){return e.ads.play()}).catch(function(){return e.media.play()}),this.media.play()):null}},{key:"pause",value:function(){this.playing&&N.function(this.media.pause)&&this.media.pause()}},{key:"togglePlay",value:function(e){(N.boolean(e)?e:!this.playing)?this.play():this.pause()}},{key:"stop",value:function(){this.isHTML5?(this.pause(),this.restart()):N.function(this.media.stop)&&this.media.stop()}},{key:"restart",value:function(){this.currentTime=0}},{key:"rewind",value:function(e){this.currentTime=this.currentTime-(N.number(e)?e:this.config.seekTime)}},{key:"forward",value:function(e){this.currentTime=this.currentTime+(N.number(e)?e:this.config.seekTime)}},{key:"increaseVolume",value:function(e){var t=this.media.muted?0:this.volume;this.volume=t+(N.number(e)?e:0)}},{key:"decreaseVolume",value:function(e){this.increaseVolume(-e)}},{key:"toggleCaptions",value:function(e){Pe.toggle.call(this,e,!1)}},{key:"airplay",value:function(){ie.airplay&&this.media.webkitShowPlaybackTargetPicker()}},{key:"toggleControls",value:function(e){if(this.supported.ui&&!this.isAudio){var t=J(this.elements.container,this.config.classNames.hideControls),n=void 0===e?void 0:!e,i=X(this.elements.container,this.config.classNames.hideControls,n);if(i&&this.config.controls.includes("settings")&&!N.empty(this.config.settings)&&Ae.toggleMenu.call(this,!1),i!==t){var a=i?"controlshidden":"controlsshown";H.call(this,this.media,a)}return!i}return!1}},{key:"on",value:function(e,t){O.call(this,this.elements.container,e,t)}},{key:"once",value:function(e,t){q.call(this,this.elements.container,e,t)}},{key:"off",value:function(e,t){j(this.elements.container,e,t)}},{key:"destroy",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.ready){var i=function(){document.body.style.overflow="",t.embed=null,n?(Object.keys(t.elements).length&&(W(t.elements.buttons.play),W(t.elements.captions),W(t.elements.controls),W(t.elements.wrapper),t.elements.buttons.play=null,t.elements.captions=null,t.elements.controls=null,t.elements.wrapper=null),N.function(e)&&e()):(function(){this&&this.eventListeners&&(this.eventListeners.forEach(function(e){var t=e.element,n=e.type,i=e.callback,a=e.options;t.removeEventListener(n,i,a)}),this.eventListeners=[])}.call(t),K(t.elements.original,t.elements.container),H.call(t,t.elements.original,"destroyed",!0),N.function(e)&&e.call(t.elements.original),t.ready=!1,setTimeout(function(){t.elements=null,t.media=null},200))};this.stop(),clearTimeout(this.timers.loading),clearTimeout(this.timers.controls),clearTimeout(this.timers.resized),this.isHTML5?(Fe.toggleNativeControls.call(this,!0),i()):this.isYouTube?(clearInterval(this.timers.buffering),clearInterval(this.timers.playing),null!==this.embed&&N.function(this.embed.destroy)&&this.embed.destroy(),i()):this.isVimeo&&(null!==this.embed&&this.embed.unload().then(i),setTimeout(i,200))}}},{key:"supports",value:function(e){return ie.mime.call(this,e)}},{key:"isHTML5",get:function(){return this.provider===Le.html5}},{key:"isEmbed",get:function(){return this.isYouTube||this.isVimeo}},{key:"isYouTube",get:function(){return this.provider===Le.youtube}},{key:"isVimeo",get:function(){return this.provider===Le.vimeo}},{key:"isVideo",get:function(){return this.type===Ie.video}},{key:"isAudio",get:function(){return this.type===Ie.audio}},{key:"playing",get:function(){return Boolean(this.ready&&!this.paused&&!this.ended)}},{key:"paused",get:function(){return Boolean(this.media.paused)}},{key:"stopped",get:function(){return Boolean(this.paused&&0===this.currentTime)}},{key:"ended",get:function(){return Boolean(this.media.ended)}},{key:"currentTime",set:function(e){if(this.duration){var t=N.number(e)&&e>0;this.media.currentTime=t?Math.min(e,this.duration):0,this.debug.log("Seeking to ".concat(this.currentTime," seconds"))}},get:function(){return Number(this.media.currentTime)}},{key:"buffered",get:function(){var e=this.media.buffered;return N.number(e)?e:e&&e.length&&this.duration>0?e.end(0)/this.duration:0}},{key:"seeking",get:function(){return Boolean(this.media.seeking)}},{key:"duration",get:function(){var e=parseFloat(this.config.duration),t=(this.media||{}).duration,n=N.number(t)&&t!==1/0?t:0;return e||n}},{key:"volume",set:function(e){var t=e;N.string(t)&&(t=Number(t)),N.number(t)||(t=this.storage.get("volume")),N.number(t)||(t=this.config.volume),t>1&&(t=1),t<0&&(t=0),this.config.volume=t,this.media.volume=t,!N.empty(e)&&this.muted&&t>0&&(this.muted=!1)},get:function(){return Number(this.media.volume)}},{key:"muted",set:function(e){var t=e;N.boolean(t)||(t=this.storage.get("muted")),N.boolean(t)||(t=this.config.muted),this.config.muted=t,this.media.muted=t},get:function(){return Boolean(this.media.muted)}},{key:"hasAudio",get:function(){return!this.isHTML5||(!!this.isAudio||(Boolean(this.media.mozHasAudio)||Boolean(this.media.webkitAudioDecodedByteCount)||Boolean(this.media.audioTracks&&this.media.audioTracks.length)))}},{key:"speed",set:function(e){var t=this,n=null;N.number(e)&&(n=e),N.number(n)||(n=this.storage.get("speed")),N.number(n)||(n=this.config.speed.selected);var i=this.minimumSpeed,a=this.maximumSpeed;n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:255;return Math.min(Math.max(e,t),n)}(n,i,a),this.config.speed.selected=n,setTimeout(function(){t.media.playbackRate=n},0)},get:function(){return Number(this.media.playbackRate)}},{key:"minimumSpeed",get:function(){return this.isYouTube?Math.min.apply(Math,s(this.options.speed)):this.isVimeo?.5:.0625}},{key:"maximumSpeed",get:function(){return this.isYouTube?Math.max.apply(Math,s(this.options.speed)):this.isVimeo?2:16}},{key:"quality",set:function(e){var t=this.config.quality,n=this.options.quality;if(n.length){var i=[!N.empty(e)&&Number(e),this.storage.get("quality"),t.selected,t.default].find(N.number),a=!0;if(!n.includes(i)){var s=function(e,t){return N.array(e)&&e.length?e.reduce(function(e,n){return Math.abs(n-t)<Math.abs(e-t)?n:e}):null}(n,i);this.debug.warn("Unsupported quality option: ".concat(i,", using ").concat(s," instead")),i=s,a=!1}t.selected=i,this.media.quality=i,a&&this.storage.set({quality:i})}},get:function(){return this.media.quality}},{key:"loop",set:function(e){var t=N.boolean(e)?e:this.config.loop.active;this.config.loop.active=t,this.media.loop=t},get:function(){return Boolean(this.media.loop)}},{key:"source",set:function(e){$e.change.call(this,e)},get:function(){return this.media.currentSrc}},{key:"download",get:function(){var e=this.config.urls.download;return N.url(e)?e:this.source},set:function(e){N.url(e)&&(this.config.urls.download=e,Ae.setDownloadUrl.call(this))}},{key:"poster",set:function(e){this.isVideo?Fe.setPoster.call(this,e,!1).catch(function(){}):this.debug.warn("Poster can only be set for video")},get:function(){return this.isVideo?this.media.getAttribute("poster"):null}},{key:"ratio",get:function(){if(!this.isVideo)return null;var e=se(re.call(this));return N.array(e)?e.join(":"):e},set:function(e){this.isVideo?N.string(e)&&ae(e)?(this.config.ratio=e,oe.call(this)):this.debug.error("Invalid aspect ratio specified (".concat(e,")")):this.debug.warn("Aspect ratio can only be set for video")}},{key:"autoplay",set:function(e){var t=N.boolean(e)?e:this.config.autoplay;this.config.autoplay=t},get:function(){return Boolean(this.config.autoplay)}},{key:"currentTrack",set:function(e){Pe.set.call(this,e,!1)},get:function(){var e=this.captions,t=e.toggled,n=e.currentTrack;return t?n:-1}},{key:"language",set:function(e){Pe.setLanguage.call(this,e,!1)},get:function(){return(Pe.getCurrentTrack.call(this)||{}).language}},{key:"pip",set:function(e){if(ie.pip){var t=N.boolean(e)?e:!this.pip;N.function(this.media.webkitSetPresentationMode)&&this.media.webkitSetPresentationMode(t?Me:xe),N.function(this.media.requestPictureInPicture)&&(!this.pip&&t?this.media.requestPictureInPicture():this.pip&&!t&&document.exitPictureInPicture())}},get:function(){return ie.pip?N.empty(this.media.webkitPresentationMode)?this.media===document.pictureInPictureElement:this.media.webkitPresentationMode===Me:null}}],[{key:"supported",value:function(e,t,n){return ie.check(e,t,n)}},{key:"loadSprite",value:function(e,t){return be(e,t)}},{key:"setup",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=null;return N.string(e)?i=Array.from(document.querySelectorAll(e)):N.nodeList(e)?i=Array.from(e):N.array(e)&&(i=e.filter(N.element)),N.empty(i)?null:i.map(function(e){return new t(e,n)})}}]),t}();return Ze.defaults=(Ge=Ne,JSON.parse(JSON.stringify(Ge))),Ze});
//# sourceMappingURL=plyr.min.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Nav.vue?vue&type=style&index=0&id=12bb96cf&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/Nav.vue?vue&type=style&index=0&id=12bb96cf&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Nav.vue?vue&type=style&index=0&id=12bb96cf&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Nav.vue?vue&type=style&index=0&id=12bb96cf&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AudioComponent.vue?vue&type=style&index=0&id=07fa7d1c&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AudioComponent.vue?vue&type=style&index=0&id=07fa7d1c&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./AudioComponent.vue?vue&type=style&index=0&id=07fa7d1c&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AudioComponent.vue?vue&type=style&index=0&id=07fa7d1c&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form.vue?vue&type=style&index=0&id=8048fca2&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form.vue?vue&type=style&index=0&id=8048fca2&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=style&index=0&id=8048fca2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form.vue?vue&type=style&index=0&id=8048fca2&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Content.vue?vue&type=style&index=0&id=9099c5b6&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/Content.vue?vue&type=style&index=0&id=9099c5b6&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Content.vue?vue&type=style&index=0&id=9099c5b6&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Content.vue?vue&type=style&index=0&id=9099c5b6&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Side.vue?vue&type=style&index=0&id=5103cb4a&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/Side.vue?vue&type=style&index=0&id=5103cb4a&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Side.vue?vue&type=style&index=0&id=5103cb4a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Side.vue?vue&type=style&index=0&id=5103cb4a&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Login.vue?vue&type=style&index=0&id=0004d9e0&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Login.vue?vue&type=style&index=0&id=0004d9e0&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=style&index=0&id=0004d9e0&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Login.vue?vue&type=style&index=0&id=0004d9e0&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CoverCard.vue?vue&type=style&index=0&id=66b1a3e8&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CoverCard.vue?vue&type=style&index=0&id=66b1a3e8&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./CoverCard.vue?vue&type=style&index=0&id=66b1a3e8&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CoverCard.vue?vue&type=style&index=0&id=66b1a3e8&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/App.vue?vue&type=template&id=7c4eb8cd&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/App.vue?vue&type=template&id=7c4eb8cd&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_vm.is_login ? _c("loggedin-content") : _c("Login")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Content.vue?vue&type=template&id=9099c5b6&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/Content.vue?vue&type=template&id=9099c5b6&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      attrs: {
        "data-boxed-layout": "full",
        "data-header-position": "absolute",
        "data-layout": "vertical",
        "data-navbarbg": "skin5",
        "data-sidebar-position": "absolute",
        "data-sidebartype": "full",
        id: "main-wrapper"
      }
    },
    [
      _c("Nav"),
      _vm._v(" "),
      _c("Side"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "page-wrapper" },
        [
          _c("div", { staticClass: "page-breadcrumb" }, [
            _c("div", { staticClass: "row align-items-center" }, [
              _c("div", { staticClass: "col-5" }, [
                _c("h4", { staticClass: "page-title" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(
                        (_vm.title || _vm.$route.name || "").toUpperCase()
                      ) +
                      "\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-7" })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "container-fluid" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12" }, [
                _c("div", { staticClass: "card" }, [
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [_c("router-view")],
                    1
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("Footer")
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Footer.vue?vue&type=template&id=202534c2&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/Footer.vue?vue&type=template&id=202534c2&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "footer text-center" }, [
      _vm._v("\n    Designed and Developed by "),
      _c("a", { attrs: { href: "https://www.cubetiqs.com" } }, [
        _vm._v("CUBETIQ SOLUTION")
      ]),
      _vm._v(".\n")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Nav.vue?vue&type=template&id=12bb96cf&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/Nav.vue?vue&type=template&id=12bb96cf&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "header",
    { staticClass: "topbar", attrs: { "data-navbarbg": "skin5" } },
    [
      _c(
        "nav",
        { staticClass: "navbar top-navbar navbar-expand-md navbar-dark" },
        [
          _c(
            "div",
            { staticClass: "navbar-header", attrs: { "data-logobg": "skin5" } },
            [
              _c(
                "router-link",
                {
                  staticClass: "navbar-brand",
                  attrs: { to: { name: "dashboard" } }
                },
                [
                  _c("b", { staticClass: "logo-icon" }, [
                    _c("img", {
                      staticClass: "dark-logo",
                      attrs: { src: _vm.$_env.APP_LOGO_LIGHT, alt: "homepage" }
                    }),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "light-logo",
                      attrs: {
                        src: _vm.$_env.APP_LOGO_BLACK,
                        width: "180",
                        alt: "homepage"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "logo-text" })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "d-md-none navbar-right" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass:
                      "nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic",
                    attrs: {
                      href: "",
                      "data-toggle": "dropdown",
                      "aria-haspopup": "true",
                      "aria-expanded": "false"
                    }
                  },
                  [
                    _c("div", { staticClass: "notification-area" }, [
                      _vm.count
                        ? _c("label", { attrs: { for: "noti" } }, [
                            _c("i", { staticClass: "mdi mdi-circle" })
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("i", {
                        staticClass: "mdi mdi-bell-ring-outline",
                        attrs: { id: "noti" }
                      })
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "dropdown-menu dropdown-menu-right user-dd animated"
                  },
                  [
                    _vm._l(_vm.notifications, function(notification) {
                      return _vm.notifications
                        ? _c(
                            "a",
                            {
                              staticClass: "dropdown-item",
                              attrs: { href: "javascript:void(0)" }
                            },
                            [
                              _c("i", { staticClass: "ti-user m-r-5 m-l-5" }),
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    notification.companyname +
                                      " - " +
                                      (notification.firstname || "") +
                                      " " +
                                      (notification.lastname || "")
                                  ) +
                                  "\n                            "
                              )
                            ]
                          )
                        : _vm._e()
                    }),
                    _vm._v(" "),
                    _vm.count === 0
                      ? _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: { href: "javascript:void(0)" }
                          },
                          [_c("h3", [_vm._v("No new notification")])]
                        )
                      : _vm._e()
                  ],
                  2
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "navbar-collapse collapse",
              attrs: { id: "navbarSupportedContent", "data-navbarbg": "skin5" }
            },
            [
              _c("ul", { staticClass: "navbar-nav float-left mr-auto" }),
              _vm._v(" "),
              _c("ul", { staticClass: "navbar-nav float-right" }, [
                _c("li", { staticClass: "nav-item dropdown" }, [
                  _c(
                    "a",
                    {
                      staticClass:
                        "nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic",
                      attrs: {
                        href: "",
                        "data-toggle": "dropdown",
                        "aria-haspopup": "true",
                        "aria-expanded": "false"
                      }
                    },
                    [
                      _c("div", { staticClass: "notification-area" }, [
                        _vm.count
                          ? _c("label", { attrs: { for: "noti" } }, [
                              _c("i", { staticClass: "mdi mdi-circle" })
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("i", {
                          staticClass: "mdi mdi-bell-ring-outline",
                          attrs: { id: "noti" }
                        })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "dropdown-menu dropdown-menu-right user-dd animated"
                    },
                    [
                      _vm._l(_vm.notifications, function(notification) {
                        return _vm.notifications
                          ? _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: { href: "javascript:void(0)" }
                              },
                              [
                                _c("i", { staticClass: "ti-user m-r-5 m-l-5" }),
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(
                                      notification.companyname +
                                        " - " +
                                        (notification.firstname || "") +
                                        " " +
                                        (notification.lastname || "")
                                    ) +
                                    "\n                                "
                                )
                              ]
                            )
                          : _vm._e()
                      }),
                      _vm._v(" "),
                      _vm.count === 0
                        ? _c(
                            "a",
                            {
                              staticClass: "dropdown-item",
                              attrs: { href: "javascript:void(0)" }
                            },
                            [_c("h5", [_vm._v("No new notification")])]
                          )
                        : _vm._e()
                    ],
                    2
                  )
                ])
              ])
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "nav-toggler waves-effect waves-light d-block d-md-none",
        attrs: { href: "javascript:void(0)" }
      },
      [
        _c("i", {
          staticClass: "ti-menu ti-close",
          staticStyle: { color: "black" }
        })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Side.vue?vue&type=template&id=5103cb4a&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/Side.vue?vue&type=template&id=5103cb4a&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "aside",
    { staticClass: "left-sidebar", attrs: { "data-sidebarbg": "skin6" } },
    [
      _c("div", { staticClass: "scroll-sidebar" }, [
        _c("nav", { staticClass: "sidebar-nav" }, [
          _c(
            "ul",
            { attrs: { id: "sidebarnav" } },
            [
              _c("li", [
                _c(
                  "div",
                  {
                    staticClass: "user-profile d-flex no-block dropdown m-t-20"
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "user-pic" },
                      [
                        _vm.user.photoUrl
                          ? _c("Avatar", {
                              staticClass: "rounded-circle",
                              attrs: {
                                src: _vm.user.photoUrl,
                                alt: "users",
                                width: "40"
                              }
                            })
                          : _c("Avatar", {
                              attrs: {
                                username: _vm.user.displayName || "U S E R"
                              }
                            })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "user-content hide-menu m-l-10" },
                      [
                        _c(
                          "a",
                          {
                            attrs: {
                              href: "javascript:void(0)",
                              id: "Userdd",
                              role: "button",
                              "data-toggle": "dropdown",
                              "aria-haspopup": "true",
                              "aria-expanded": "false"
                            }
                          },
                          [
                            _c(
                              "h5",
                              { staticClass: "m-b-0 user-name gt-medium" },
                              [
                                _vm._v(
                                  _vm._s(_vm.user.displayName) +
                                    "\n                                        "
                                ),
                                _c("i", { staticClass: "fa fa-angle-down" })
                              ]
                            ),
                            _vm._v(" "),
                            _c("span", { staticClass: "op-5 user-email gt" }, [
                              _vm._v(_vm._s(_vm.user.email))
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "dropdown-menu dropdown-menu-right",
                            attrs: { "aria-labelledby": "Userdd" }
                          },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "dropdown-item",
                                attrs: {
                                  to: { name: "setting.index" },
                                  href: "javascript:void(0)"
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "ti-settings m-r-5 m-l-5"
                                }),
                                _vm._v(
                                  " Account Setting\n                                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "dropdown-divider" }),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: { href: "javascript:void(0)" },
                                on: { click: _vm.logout }
                              },
                              [
                                _c("i", {
                                  staticClass: "fa fa-power-off m-r-5 m-l-5"
                                }),
                                _vm._v(" Logout")
                              ]
                            )
                          ],
                          1
                        )
                      ]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _vm._l(_vm.items, function(item) {
                return !item.type
                  ? _c(
                      "li",
                      { staticClass: "p-15 mt-2" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass:
                              "btn btn-block no-block d-flex align-items-center",
                            staticStyle: { color: "#707070" },
                            attrs: {
                              exact: "",
                              to: item.to,
                              "aria-expanded": "false"
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "mdi",
                              class: item.icon_class
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "hide-menu ml-3" }, [
                              _vm._v(_vm._s(item.text))
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  : _vm._e()
              })
            ],
            2
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "upload-area" }, [
      _c("input", {
        ref: "fileinput",
        attrs: { type: "file", name: "file", value: "Browse" },
        on: { change: _vm.gotfile }
      }),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn btn-primary",
          attrs: { href: "#" },
          on: { click: _vm.upload }
        },
        [_vm._v("Upload file")]
      ),
      _vm._v(" "),
      _c("img", { attrs: { src: _vm.img, alt: "" } })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Error404.vue?vue&type=template&id=6dc4ee4e&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Error404.vue?vue&type=template&id=6dc4ee4e&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("h1", [_vm._v("Page Not Found")])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Login.vue?vue&type=template&id=0004d9e0&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Login.vue?vue&type=template&id=0004d9e0&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "limiter" }, [
    _c("div", { staticClass: "container-login100" }, [
      _c("div", { staticClass: "wrap-login100" }, [
        _c("form", { staticClass: "login100-form validate-form" }, [
          _c("span", { staticClass: "login100-form-title p-b-48" }, [
            _c("img", {
              attrs: { src: _vm.$_env.APP_LOGO_BLACK, width: "180", alt: "" }
            })
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "wrap-input100 validate-input",
              attrs: { "data-validate": "Valid email is: a@b.c" }
            },
            [
              _c("label", { attrs: { for: "email" } }, [_vm._v("Email")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.email,
                    expression: "form.email"
                  }
                ],
                staticClass: "input100",
                attrs: { id: "email", type: "text", name: "email" },
                domProps: { value: _vm.form.email },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "email", $event.target.value)
                  }
                }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "wrap-input100 validate-input",
              attrs: { "data-validate": "Enter password" }
            },
            [
              _c("label", { attrs: { for: "password" } }, [_vm._v("Password")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.password,
                    expression: "form.password"
                  }
                ],
                staticClass: "input100",
                attrs: { id: "password", type: "password", name: "pass" },
                domProps: { value: _vm.form.password },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "password", $event.target.value)
                  }
                }
              })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "container-login100-form-btn" }, [
            _c("div", { staticClass: "wrap-login100-form-btn" }, [
              _c("div", { staticClass: "login100-form-bgbtn" }),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "login100-form-btn",
                  attrs: { type: "button" },
                  on: { click: _vm.submit }
                },
                [
                  _vm._v(
                    "\n                                Login\n                            "
                  )
                ]
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings/index.vue?vue&type=template&id=ec2dd262&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Settings/index.vue?vue&type=template&id=ec2dd262&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [_c("h1", [_vm._v("Settings")]), _vm._v(" "), _c("router-view")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Storages.vue?vue&type=template&id=40616801&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Storages.vue?vue&type=template&id=40616801&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c(
        "nav",
        { staticClass: "navbar navbar-expand-lg navbar-dark bg-light" },
        [
          _c("a", { staticClass: "navbar-brand", attrs: { href: "#" } }),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "btn btn-primary right",
              attrs: { href: "#" },
              on: { click: _vm.upload_click }
            },
            [_vm._v("Upload")]
          )
        ]
      ),
      _vm._v(" "),
      _vm.medias
        ? _c(
            "div",
            { staticClass: "row" },
            _vm._l(_vm.medias, function(media, key) {
              return _c(
                "div",
                { key: key, staticClass: "col-12 col-sm-6 col-md-3" },
                [
                  _c("card-cover", {
                    attrs: { item: media },
                    on: { play_click: _vm.PlayMusic }
                  })
                ],
                1
              )
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "UploadModal",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "exampleModalCenterTitle",
            "aria-hidden": "true"
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "modal-dialog modal-dialog-centered",
              attrs: { role: "document" }
            },
            [
              _c("div", { staticClass: "modal-content" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "modal-body" },
                  [
                    _c("form-generate", {
                      key: JSON.stringify(_vm.selected).length,
                      ref: "form",
                      attrs: {
                        inputs: _vm.add_rule,
                        data: _vm.selected,
                        savebtn: false
                      },
                      on: { browse_click: _vm.browse_click }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { type: "button", "data-dismiss": "modal" }
                    },
                    [_vm._v("Close")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button" },
                      on: { click: _vm.submit_info }
                    },
                    [_vm._v("Save changes")]
                  )
                ])
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("audio-component")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLongTitle" } },
        [_vm._v("Upload Image")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AudioComponent.vue?vue&type=template&id=07fa7d1c&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AudioComponent.vue?vue&type=template&id=07fa7d1c&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "modal fade",
      attrs: {
        id: "MusicModal",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "exampleModalCenterTitle",
        "aria-hidden": "true"
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "modal-dialog modal-dialog-centered",
          attrs: { role: "document" }
        },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "h5",
                {
                  staticClass: "modal-title",
                  attrs: { id: "exampleModalLongTitle" }
                },
                [_vm._v(_vm._s(_vm.dat.name))]
              ),
              _vm._v(" "),
              _vm._m(0)
            ]),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2)
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-body" }, [
      _c(
        "div",
        { staticClass: "audio-container", attrs: { id: "audio-container" } },
        [_c("audio", { attrs: { id: "player" } })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Close")]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "button" } },
        [_vm._v("Save changes")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Cover.vue?vue&type=template&id=485718dc&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Cover.vue?vue&type=template&id=485718dc&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "card-title" }, [
          _vm._v(_vm._s(_vm.media.name))
        ]),
        _vm._v(" "),
        _c("img", {
          staticClass: "img-fluid",
          attrs: { src: _vm.media.cover, alt: "" }
        }),
        _vm._v(" "),
        _c("div", [_vm._v(_vm._s(_vm.media.author))]),
        _vm._v(" "),
        _c("div", [_vm._v(_vm._s(_vm.media.genre))]),
        _vm._v(" "),
        _c("div", [
          _c(
            "a",
            {
              staticClass: "btn btn-primary",
              attrs: { href: _vm.media.attachment, target: "_blank" }
            },
            [_vm._v("Download Attachment")]
          )
        ]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn btn-primary",
            attrs: { href: "#" },
            on: { click: _vm.Playmusic }
          },
          [_vm._v("Play")]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CoverCard.vue?vue&type=template&id=66b1a3e8&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CoverCard.vue?vue&type=template&id=66b1a3e8&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card-cover" }, [
    _c("div", { staticClass: "card" }, [
      _c("div", {
        staticClass: "card-img-container trans-hori-center",
        style: { "background-image": "url(" + _vm.item.cover + ")" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("h5", { staticClass: "card-title" }, [_vm._v(_vm._s(_vm.item.name))])
      ]),
      _vm._v(" "),
      _c("ul", { staticClass: "list-group list-group-flush" }, [
        _c("li", { staticClass: "list-group-item" }, [
          _vm._v("Author : " + _vm._s(_vm.item.author))
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-group-item" }, [
          _vm._v("Genre : " + _vm._s(_vm.item.genre))
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-footer" }, [
        _c(
          "a",
          {
            staticClass: "btn btn-primary",
            attrs: { href: _vm.item.attachment }
          },
          [_vm._v("Download")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn btn-primary",
            attrs: { href: "#" },
            on: { click: _vm.play }
          },
          [_vm._v("Play")]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form.vue?vue&type=template&id=8048fca2&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form.vue?vue&type=template&id=8048fca2&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    { staticClass: "form-v2", style: { height: "" + (_vm.height || "250px") } },
    [
      _vm._l(_vm.inputs, function(rule, key) {
        return _c("span", { staticClass: "items" }, [
          rule.type === "hidden"
            ? _c("div", [
                _c("input", {
                  attrs: { name: rule.name, type: "hidden" },
                  domProps: { value: _vm.temp_data[key] }
                })
              ])
            : rule.type === "button"
            ? _c("div", [
                _c(
                  "a",
                  {
                    class: rule.class,
                    attrs: { href: "#", id: rule.id },
                    on: {
                      click: function($event) {
                        return _vm.button_click(rule.name || key)
                      }
                    }
                  },
                  [_vm._v(_vm._s(rule.text))]
                )
              ])
            : rule.type === "icon"
            ? _c(
                "div",
                {
                  key: _vm.temp_data[rule.column || key],
                  staticClass: "p-1",
                  style: { height: "" + (_vm.height || "250px") }
                },
                [
                  _c("image-upload", {
                    attrs: {
                      src: _vm.temp_data[rule.column || key],
                      name: rule.name || key
                    }
                  })
                ],
                1
              )
            : rule.type === "label"
            ? _c("div", [
                _c("div", { staticClass: "form-group row" }, [
                  _c("label", { staticClass: "col-4" }, [
                    _vm._v(_vm._s(rule.label || key) + " :")
                  ]),
                  _vm._v(" "),
                  _c("label", { staticClass: "col-8" }, [
                    _vm._v(" " + _vm._s(_vm.temp_data[key]))
                  ])
                ])
              ])
            : rule.type === "boolean"
            ? _c("div", [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { staticClass: "col-xs-6" }, [
                    _vm._v(_vm._s(rule.label || key))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-xs-6" }, [
                    _c(
                      "label",
                      {
                        staticClass: "label",
                        class: { "label-active": _vm.temp_data[key] },
                        on: {
                          click: function($event) {
                            return _vm.active_click(key, _vm.temp_data)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(
                              _vm.temp_data[key]
                                ? rule.active || "active"
                                : rule.inactive || "inactive"
                            ) +
                            "\n                        "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      attrs: { name: rule.name, type: "hidden" },
                      domProps: { value: _vm.temp_data[key] ? 1 : 0 }
                    })
                  ])
                ])
              ])
            : rule.type === "multiple"
            ? _c("div", [
                _c("div", { staticClass: "form-group row align-items-end" }, [
                  _c("label", { staticClass: "col-sm-4" }, [
                    _vm._v(_vm._s(rule.label || _vm.capitalize(key)) + " :")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-8" }, [
                    _c(
                      "select",
                      {
                        staticClass: "form-control form-control-line",
                        attrs: { name: key }
                      },
                      _vm._l(rule.texts, function(text, index) {
                        return _c(
                          "option",
                          {
                            domProps: {
                              selected: index == _vm.temp_data[key],
                              value: index
                            }
                          },
                          [_vm._v(_vm._s(text))]
                        )
                      }),
                      0
                    )
                  ])
                ])
              ])
            : rule.type === "textarea"
            ? _c("div", [
                _c("label", { staticClass: "col-md-12" }, [
                  _vm._v(_vm._s(rule.label || _vm.capitalize(key)))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-12" }, [
                  _c("textarea", {
                    staticClass: "form-control form-control-line",
                    attrs: {
                      name: key,
                      placeholder: rule.placeholder,
                      readonly: rule.readonly,
                      rows: rule.rows
                    },
                    domProps: { value: _vm.temp_data[key] }
                  })
                ])
              ])
            : _c("div", [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { staticClass: "col-xs-6" }, [
                    _vm._v(_vm._s(rule.label || _vm.capitalize(key)))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-xs-6" }, [
                    _c("input", {
                      staticClass: "form-control form-control-line",
                      attrs: {
                        name: key,
                        placeholder: rule.placeholder,
                        type: "text"
                      },
                      domProps: { value: _vm.temp_data[key] }
                    })
                  ])
                ])
              ])
        ])
      }),
      _vm._v(" "),
      _vm.show_save
        ? _c("div", { staticClass: "footer text-right" }, [
            _c(
              "a",
              {
                staticClass: "btn btn-primary",
                attrs: { href: "#" },
                on: { click: _vm.Save }
              },
              [_vm._v("Save")]
            )
          ])
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Image.vue?vue&type=template&id=c4020700&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Image.vue?vue&type=template&id=c4020700&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { ref: "image" }, [
    _vm.temp_img
      ? _c("img", {
          staticClass: "img-fluid",
          attrs: { width: "150", src: _vm.temp_img, alt: "" },
          on: { click: _vm.ChooseImage }
        })
      : _c("img", {
          staticClass: "rounded-circle img-fluid",
          attrs: { width: "150", src: _vm.$_env["DEFAULT_NOIMAGE"], alt: "" },
          on: { click: _vm.ChooseImage }
        }),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("small", [_vm._v("(click to change image)")])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
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
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
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


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/js/CONST.js":
/*!*******************************!*\
  !*** ./resources/js/CONST.js ***!
  \*******************************/
/*! exports provided: ROOT, ROOT_API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROOT", function() { return ROOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROOT_API", function() { return ROOT_API; });
var ROOT = '';
var ROOT_API = '/api';

/***/ }),

/***/ "./resources/js/Layouts/App.vue":
/*!**************************************!*\
  !*** ./resources/js/Layouts/App.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_7c4eb8cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7c4eb8cd&scoped=true& */ "./resources/js/Layouts/App.vue?vue&type=template&id=7c4eb8cd&scoped=true&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./resources/js/Layouts/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_7c4eb8cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_7c4eb8cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7c4eb8cd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Layouts/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Layouts/App.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/Layouts/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Layouts/App.vue?vue&type=template&id=7c4eb8cd&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Layouts/App.vue?vue&type=template&id=7c4eb8cd&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7c4eb8cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7c4eb8cd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/App.vue?vue&type=template&id=7c4eb8cd&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7c4eb8cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7c4eb8cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Layouts/Content.vue":
/*!******************************************!*\
  !*** ./resources/js/Layouts/Content.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Content_vue_vue_type_template_id_9099c5b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content.vue?vue&type=template&id=9099c5b6&scoped=true& */ "./resources/js/Layouts/Content.vue?vue&type=template&id=9099c5b6&scoped=true&");
/* harmony import */ var _Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Content.vue?vue&type=script&lang=js& */ "./resources/js/Layouts/Content.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Content_vue_vue_type_style_index_0_id_9099c5b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content.vue?vue&type=style&index=0&id=9099c5b6&scoped=true&lang=css& */ "./resources/js/Layouts/Content.vue?vue&type=style&index=0&id=9099c5b6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Content_vue_vue_type_template_id_9099c5b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Content_vue_vue_type_template_id_9099c5b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9099c5b6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Layouts/Content.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Layouts/Content.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Layouts/Content.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Content.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Content.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Layouts/Content.vue?vue&type=style&index=0&id=9099c5b6&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Layouts/Content.vue?vue&type=style&index=0&id=9099c5b6&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_id_9099c5b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Content.vue?vue&type=style&index=0&id=9099c5b6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Content.vue?vue&type=style&index=0&id=9099c5b6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_id_9099c5b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_id_9099c5b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_id_9099c5b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_id_9099c5b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_id_9099c5b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Layouts/Content.vue?vue&type=template&id=9099c5b6&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Layouts/Content.vue?vue&type=template&id=9099c5b6&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_template_id_9099c5b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Content.vue?vue&type=template&id=9099c5b6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Content.vue?vue&type=template&id=9099c5b6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_template_id_9099c5b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_template_id_9099c5b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Layouts/Footer.vue":
/*!*****************************************!*\
  !*** ./resources/js/Layouts/Footer.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_vue_vue_type_template_id_202534c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=202534c2&scoped=true& */ "./resources/js/Layouts/Footer.vue?vue&type=template&id=202534c2&scoped=true&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/Layouts/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Footer_vue_vue_type_template_id_202534c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Footer_vue_vue_type_template_id_202534c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "202534c2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Layouts/Footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Layouts/Footer.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/Layouts/Footer.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Layouts/Footer.vue?vue&type=template&id=202534c2&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/Layouts/Footer.vue?vue&type=template&id=202534c2&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_202534c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=template&id=202534c2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Footer.vue?vue&type=template&id=202534c2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_202534c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_202534c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Layouts/Nav.vue":
/*!**************************************!*\
  !*** ./resources/js/Layouts/Nav.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Nav_vue_vue_type_template_id_12bb96cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nav.vue?vue&type=template&id=12bb96cf&scoped=true& */ "./resources/js/Layouts/Nav.vue?vue&type=template&id=12bb96cf&scoped=true&");
/* harmony import */ var _Nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav.vue?vue&type=script&lang=js& */ "./resources/js/Layouts/Nav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Nav_vue_vue_type_style_index_0_id_12bb96cf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav.vue?vue&type=style&index=0&id=12bb96cf&lang=scss&scoped=true& */ "./resources/js/Layouts/Nav.vue?vue&type=style&index=0&id=12bb96cf&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Nav_vue_vue_type_template_id_12bb96cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Nav_vue_vue_type_template_id_12bb96cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "12bb96cf",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Layouts/Nav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Layouts/Nav.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/Layouts/Nav.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Nav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Nav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Layouts/Nav.vue?vue&type=style&index=0&id=12bb96cf&lang=scss&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/Layouts/Nav.vue?vue&type=style&index=0&id=12bb96cf&lang=scss&scoped=true& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_12bb96cf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Nav.vue?vue&type=style&index=0&id=12bb96cf&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Nav.vue?vue&type=style&index=0&id=12bb96cf&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_12bb96cf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_12bb96cf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_12bb96cf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_12bb96cf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_12bb96cf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Layouts/Nav.vue?vue&type=template&id=12bb96cf&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Layouts/Nav.vue?vue&type=template&id=12bb96cf&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_template_id_12bb96cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Nav.vue?vue&type=template&id=12bb96cf&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Nav.vue?vue&type=template&id=12bb96cf&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_template_id_12bb96cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_template_id_12bb96cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Layouts/Side.vue":
/*!***************************************!*\
  !*** ./resources/js/Layouts/Side.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Side_vue_vue_type_template_id_5103cb4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Side.vue?vue&type=template&id=5103cb4a&scoped=true& */ "./resources/js/Layouts/Side.vue?vue&type=template&id=5103cb4a&scoped=true&");
/* harmony import */ var _Side_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Side.vue?vue&type=script&lang=js& */ "./resources/js/Layouts/Side.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Side_vue_vue_type_style_index_0_id_5103cb4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Side.vue?vue&type=style&index=0&id=5103cb4a&scoped=true&lang=css& */ "./resources/js/Layouts/Side.vue?vue&type=style&index=0&id=5103cb4a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Side_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Side_vue_vue_type_template_id_5103cb4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Side_vue_vue_type_template_id_5103cb4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5103cb4a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Layouts/Side.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Layouts/Side.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/Layouts/Side.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Side_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Side.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Side.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Side_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Layouts/Side.vue?vue&type=style&index=0&id=5103cb4a&scoped=true&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/js/Layouts/Side.vue?vue&type=style&index=0&id=5103cb4a&scoped=true&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Side_vue_vue_type_style_index_0_id_5103cb4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Side.vue?vue&type=style&index=0&id=5103cb4a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Side.vue?vue&type=style&index=0&id=5103cb4a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Side_vue_vue_type_style_index_0_id_5103cb4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Side_vue_vue_type_style_index_0_id_5103cb4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Side_vue_vue_type_style_index_0_id_5103cb4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Side_vue_vue_type_style_index_0_id_5103cb4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Side_vue_vue_type_style_index_0_id_5103cb4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Layouts/Side.vue?vue&type=template&id=5103cb4a&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Layouts/Side.vue?vue&type=template&id=5103cb4a&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Side_vue_vue_type_template_id_5103cb4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Side.vue?vue&type=template&id=5103cb4a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/Side.vue?vue&type=template&id=5103cb4a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Side_vue_vue_type_template_id_5103cb4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Side_vue_vue_type_template_id_5103cb4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages sync recursive .*\\.vue$":
/*!******************************************!*\
  !*** ./resources/js/Pages sync .*\.vue$ ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Dashboard.vue": "./resources/js/Pages/Dashboard.vue",
	"./Error404.vue": "./resources/js/Pages/Error404.vue",
	"./Login.vue": "./resources/js/Pages/Login.vue",
	"./Settings/index.vue": "./resources/js/Pages/Settings/index.vue",
	"./Storages.vue": "./resources/js/Pages/Storages.vue"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/Pages sync recursive .*\\.vue$";

/***/ }),

/***/ "./resources/js/Pages/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/Dashboard.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_097ba13b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=097ba13b&scoped=true& */ "./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&scoped=true&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_097ba13b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_097ba13b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "097ba13b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_097ba13b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=097ba13b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_097ba13b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_097ba13b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Error404.vue":
/*!*****************************************!*\
  !*** ./resources/js/Pages/Error404.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Error404_vue_vue_type_template_id_6dc4ee4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Error404.vue?vue&type=template&id=6dc4ee4e&scoped=true& */ "./resources/js/Pages/Error404.vue?vue&type=template&id=6dc4ee4e&scoped=true&");
/* harmony import */ var _Error404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Error404.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Error404.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Error404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Error404_vue_vue_type_template_id_6dc4ee4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Error404_vue_vue_type_template_id_6dc4ee4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6dc4ee4e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Error404.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Error404.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/Error404.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Error404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Error404.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Error404.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Error404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Error404.vue?vue&type=template&id=6dc4ee4e&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Error404.vue?vue&type=template&id=6dc4ee4e&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Error404_vue_vue_type_template_id_6dc4ee4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Error404.vue?vue&type=template&id=6dc4ee4e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Error404.vue?vue&type=template&id=6dc4ee4e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Error404_vue_vue_type_template_id_6dc4ee4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Error404_vue_vue_type_template_id_6dc4ee4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Login.vue":
/*!**************************************!*\
  !*** ./resources/js/Pages/Login.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_0004d9e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=0004d9e0&scoped=true& */ "./resources/js/Pages/Login.vue?vue&type=template&id=0004d9e0&scoped=true&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Login_vue_vue_type_style_index_0_id_0004d9e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.vue?vue&type=style&index=0&id=0004d9e0&scoped=true&lang=css& */ "./resources/js/Pages/Login.vue?vue&type=style&index=0&id=0004d9e0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_0004d9e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_0004d9e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0004d9e0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Login.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/Login.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Login.vue?vue&type=style&index=0&id=0004d9e0&scoped=true&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/Login.vue?vue&type=style&index=0&id=0004d9e0&scoped=true&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_0004d9e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=style&index=0&id=0004d9e0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Login.vue?vue&type=style&index=0&id=0004d9e0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_0004d9e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_0004d9e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_0004d9e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_0004d9e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_0004d9e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Pages/Login.vue?vue&type=template&id=0004d9e0&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Login.vue?vue&type=template&id=0004d9e0&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_0004d9e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=0004d9e0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Login.vue?vue&type=template&id=0004d9e0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_0004d9e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_0004d9e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Settings/index.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Settings/index.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_ec2dd262_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=ec2dd262&scoped=true& */ "./resources/js/Pages/Settings/index.vue?vue&type=template&id=ec2dd262&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Settings/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_ec2dd262_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_ec2dd262_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ec2dd262",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Settings/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Settings/index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Settings/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Settings/index.vue?vue&type=template&id=ec2dd262&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/Settings/index.vue?vue&type=template&id=ec2dd262&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ec2dd262_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=ec2dd262&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings/index.vue?vue&type=template&id=ec2dd262&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ec2dd262_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ec2dd262_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Storages.vue":
/*!*****************************************!*\
  !*** ./resources/js/Pages/Storages.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Storages_vue_vue_type_template_id_40616801_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storages.vue?vue&type=template&id=40616801&scoped=true& */ "./resources/js/Pages/Storages.vue?vue&type=template&id=40616801&scoped=true&");
/* harmony import */ var _Storages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storages.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Storages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Storages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Storages_vue_vue_type_template_id_40616801_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Storages_vue_vue_type_template_id_40616801_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "40616801",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Storages.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Storages.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/Storages.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Storages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Storages.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Storages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Storages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Storages.vue?vue&type=template&id=40616801&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Storages.vue?vue&type=template&id=40616801&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Storages_vue_vue_type_template_id_40616801_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Storages.vue?vue&type=template&id=40616801&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Storages.vue?vue&type=template&id=40616801&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Storages_vue_vue_type_template_id_40616801_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Storages_vue_vue_type_template_id_40616801_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Plugin sync .*\\.js":
/*!******************************************************!*\
  !*** ./resources/js/Plugin sync nonrecursive .*\.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./axios.js": "./resources/js/Plugin/axios.js",
	"./index.js": "./resources/js/Plugin/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/Plugin sync .*\\.js";

/***/ }),

/***/ "./resources/js/Plugin/axios.js":
/*!**************************************!*\
  !*** ./resources/js/Plugin/axios.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/Store */ "./resources/js/Store/index.js");
/* harmony import */ var _Store_Type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Store/Type */ "./resources/js/Store/Type.js");
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../Router */ "./resources/js/Router/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








axios__WEBPACK_IMPORTED_MODULE_1___default.a.interceptors.request.use(function (request) {
  var token = js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get('token');

  if (token) {
    request.headers['authorization'] = "Bearer " + token;
  } // request.headers['Accept']="application/json"


  return request;
});
axios__WEBPACK_IMPORTED_MODULE_1___default.a.interceptors.response.use(function (res) {
  return res;
}, function (error) {
  _Store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_Store_Type__WEBPACK_IMPORTED_MODULE_3__["other"].close_loading, true);
  var response = error.response;

  switch (error.response.status) {
    case 400:
    case 401:
      _Store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_Store_Type__WEBPACK_IMPORTED_MODULE_3__["auth"].logout);
      break;

    case 404:
      _Router__WEBPACK_IMPORTED_MODULE_4__["default"].push({
        name: "error404"
      });
      break;

    case 406:
      sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
        title: "Operation Failed",
        text: response.data,
        type: "warning"
      });
      break;

    case 422:
      var errors = response.data.errors;
      var msgs = Object.keys(errors).reduce(function (result, el) {
        return _objectSpread({}, result, _defineProperty({}, el, errors[el][0]));
      }, {});
      var msg_html = Object.keys(errors).reduce(function (result, el) {
        return result.concat("<br />".concat(errors[el][0], "<br /> "));
      }, "");
      sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
        title: "Validate Failed",
        html: "<div class=\"error\">".concat(msg_html, "</div>"),
        type: "warning"
      });
      break;

    default:
      break;
  }

  return Promise.reject(error);
});

/***/ }),

/***/ "./resources/js/Plugin/index.js":
/*!**************************************!*\
  !*** ./resources/js/Plugin/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requires = __webpack_require__("./resources/js/Plugin sync .*\\.js");

var modules = requires.keys().map(function (name) {
  return requires(name);
});

/***/ }),

/***/ "./resources/js/Router/index.js":
/*!**************************************!*\
  !*** ./resources/js/Router/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _Router_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/Router/routes */ "./resources/js/Router/routes.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/Store */ "./resources/js/Store/index.js");
/* harmony import */ var _Store_Type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/Store/Type */ "./resources/js/Store/Type.js");





vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);

function before(to, from, next) {
  next();
}

function after(to, from) {
  $("#main-wrapper").toggleClass("show-sidebar");
  $(".nav-toggler i").toggleClass("ti-menu");
  var title = to.params.type;

  if (title === 'reasons') {
    title = "Features";
  }

  _Store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(_Store_Type__WEBPACK_IMPORTED_MODULE_4__["other"].set_title, title);
}

var router = new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  mode: 'history',
  routes: _Router_routes__WEBPACK_IMPORTED_MODULE_2__["default"]
});
router.beforeEach(before);
router.afterEach(after);
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./resources/js/Router/routes.js":
/*!***************************************!*\
  !*** ./resources/js/Router/routes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CONST__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/CONST */ "./resources/js/CONST.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import SettingIndex from "./../Pages/Settings/index"
// import SettingAccount from './../Pages/Settings/Account'

var requires = __webpack_require__("./resources/js/Pages sync recursive .*\\.vue$");

var _requires$keys$map$re = requires.keys().map(function (name) {
  return requires(name);
}).reduce(function (modules, module) {
  console.log('module', module);
  return _objectSpread({}, modules, _defineProperty({}, module["default"].name, module["default"]));
}, {}),
    Dashboard = _requires$keys$map$re.Dashboard,
    Storages = _requires$keys$map$re.Storages,
    SettingIndex = _requires$keys$map$re.SettingIndex,
    Error404 = _requires$keys$map$re.Error404; // import Services from '~/Pages/Services'


/* harmony default export */ __webpack_exports__["default"] = ([{
  path: "".concat(_CONST__WEBPACK_IMPORTED_MODULE_0__["ROOT"], "/"),
  component: Dashboard,
  name: "dashboard"
}, {
  path: "".concat(_CONST__WEBPACK_IMPORTED_MODULE_0__["ROOT"], "/storages"),
  component: Storages,
  name: 'storages'
}, {
  path: "".concat(_CONST__WEBPACK_IMPORTED_MODULE_0__["ROOT"], "/settings"),
  component: SettingIndex,
  name: "setting",
  children: [{
    path: "/",
    name: "setting.index"
  }]
}, {
  path: "".concat(_CONST__WEBPACK_IMPORTED_MODULE_0__["ROOT"], "/404"),
  component: Error404,
  name: "error404"
}, {
  path: "*/**",
  redirect: {
    name: "error404"
  }
}]);

/***/ }),

/***/ "./resources/js/Store/Modules sync .*\\.js":
/*!*************************************************************!*\
  !*** ./resources/js/Store/Modules sync nonrecursive .*\.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth.js": "./resources/js/Store/Modules/auth.js",
	"./other.js": "./resources/js/Store/Modules/other.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/Store/Modules sync .*\\.js";

/***/ }),

/***/ "./resources/js/Store/Modules/auth.js":
/*!********************************************!*\
  !*** ./resources/js/Store/Modules/auth.js ***!
  \********************************************/
/*! exports provided: name, state, getters, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Store_Type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/Store/Type */ "./resources/js/Store/Type.js");
/* harmony import */ var _CONST__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/CONST */ "./resources/js/CONST.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/Store */ "./resources/js/Store/index.js");


var _getters, _actions;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var name = "auth";
var state = {
  user: null,
  islogin: false
};
var getters = (_getters = {}, _defineProperty(_getters, _Store_Type__WEBPACK_IMPORTED_MODULE_1__["auth"].user, function (state) {
  return state.user;
}), _defineProperty(_getters, _Store_Type__WEBPACK_IMPORTED_MODULE_1__["auth"].is_login, function (state) {
  return state.islogin;
}), _getters);
var actions = (_actions = {}, _defineProperty(_actions, _Store_Type__WEBPACK_IMPORTED_MODULE_1__["auth"].login, function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref, _ref2) {
    var state, email, password;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            state = _ref.state;
            email = _ref2.email, password = _ref2.password;
            _Store__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(_Store_Type__WEBPACK_IMPORTED_MODULE_1__["other"].start_loading);
            _context.next = 5;
            return this.$axios.post("".concat(_CONST__WEBPACK_IMPORTED_MODULE_2__["ROOT_API"], "/login"), {
              email: email,
              password: password
            }).then(function (res) {
              state.islogin = true;
              state.user = res.data.data;
              js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set('token', res.data.token);
              _Store__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(_Store_Type__WEBPACK_IMPORTED_MODULE_1__["other"].close_loading);
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}()), _defineProperty(_actions, _Store_Type__WEBPACK_IMPORTED_MODULE_1__["auth"].fetch, function (_ref4) {
  var state = _ref4.state;
  _Store__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(_Store_Type__WEBPACK_IMPORTED_MODULE_1__["other"].start_loading);
  var token = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("token");

  if (!token) {
    _Store__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(_Store_Type__WEBPACK_IMPORTED_MODULE_1__["other"].close_loading);
    return;
  }

  return this.$axios.post("".concat(_CONST__WEBPACK_IMPORTED_MODULE_2__["ROOT_API"], "/user")).then(function (res) {
    state.islogin = true;
    state.user = res.data.data;
    _Store__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(_Store_Type__WEBPACK_IMPORTED_MODULE_1__["other"].close_loading);
  });
}), _defineProperty(_actions, _Store_Type__WEBPACK_IMPORTED_MODULE_1__["auth"].logout, function (_ref5) {
  var state = _ref5.state;
  state.user = null;
  state.islogin = false;
  this.$axios.post("".concat(_CONST__WEBPACK_IMPORTED_MODULE_2__["ROOT_API"], "/logout"));
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove("token");
}), _actions);

/***/ }),

/***/ "./resources/js/Store/Modules/other.js":
/*!*********************************************!*\
  !*** ./resources/js/Store/Modules/other.js ***!
  \*********************************************/
/*! exports provided: name, state, getters, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Type */ "./resources/js/Store/Type.js");
var _getters, _actions;

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var name = 'other';
var state = {
  loading_count: 0,
  title: null
};
var getters = (_getters = {}, _defineProperty(_getters, _Type__WEBPACK_IMPORTED_MODULE_1__["other"].token, function (state) {
  return js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('token') || null;
}), _defineProperty(_getters, _Type__WEBPACK_IMPORTED_MODULE_1__["other"].title, function (state) {
  return state.title;
}), _getters);
var actions = (_actions = {}, _defineProperty(_actions, _Type__WEBPACK_IMPORTED_MODULE_1__["other"].start_loading, function (_ref) {
  _objectDestructuringEmpty(_ref);

  state.loading_count++;
  $(".preloader").fadeIn();
}), _defineProperty(_actions, _Type__WEBPACK_IMPORTED_MODULE_1__["other"].close_loading, function (_ref2) {
  var state = _ref2.state;
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  // if force close loading
  if (force) {
    state.loading_count = 0;
    $(".preloader").fadeOut();
  } // If not force close
  else {
      state.loading_count--;

      if (state.loading_count === 0) {
        $(".preloader").fadeOut();
      }
    }
}), _defineProperty(_actions, _Type__WEBPACK_IMPORTED_MODULE_1__["other"].set_title, function (_ref3, title) {
  var state = _ref3.state;
  state.title = title;
}), _actions);

/***/ }),

/***/ "./resources/js/Store/Type.js":
/*!************************************!*\
  !*** ./resources/js/Store/Type.js ***!
  \************************************/
/*! exports provided: auth, other */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "other", function() { return other; });
var auth = {
  "user": "GET_USER",
  "fetch": "FETCH_USER",
  "login": "LOGIN_USER",
  "logout": "LOGOUT_USER",
  "is_login": "CHECK_IS_USER_LOGIN"
};
var other = {
  'token': "GET_TOKEN",
  "title": "GET_TITLE",
  'set_title': "SET_TITLE",
  "close_loading": "CLOSE_LOADING",
  "start_loading": "START_LOADING"
};

/***/ }),

/***/ "./resources/js/Store/index.js":
/*!*************************************!*\
  !*** ./resources/js/Store/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);

var requires = __webpack_require__("./resources/js/Store/Modules sync .*\\.js");

var modules = requires.keys().map(function (name) {
  return requires(name);
}).reduce(function (modules, module) {
  return _objectSpread({}, modules, _defineProperty({}, module.name, module));
}, {});
var store = new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  modules: modules
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layouts_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/Layouts/App */ "./resources/js/Layouts/App.vue");
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/Router */ "./resources/js/Router/index.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/Store */ "./resources/js/Store/index.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mixins */ "./resources/js/mixins.js");
/* harmony import */ var _Plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/Plugin */ "./resources/js/Plugin/index.js");
/* harmony import */ var _Plugin__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Plugin__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components */ "./resources/js/components/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 // window.$ = window.jQuery = require('jquery');

_Store__WEBPACK_IMPORTED_MODULE_3__["default"].$axios = axios__WEBPACK_IMPORTED_MODULE_7___default.a;
vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$axios = axios__WEBPACK_IMPORTED_MODULE_7___default.a;
vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$swal = sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a;
vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$_env = window.config;
delete window["config"];
var vue = new vue__WEBPACK_IMPORTED_MODULE_0___default.a(_objectSpread({
  mixin: _mixins__WEBPACK_IMPORTED_MODULE_4__["default"]
}, _Layouts_App__WEBPACK_IMPORTED_MODULE_1__["default"], {
  router: _Router__WEBPACK_IMPORTED_MODULE_2__["default"],
  store: _Store__WEBPACK_IMPORTED_MODULE_3__["default"]
})).$mount("#app");

/***/ }),

/***/ "./resources/js/components sync .*\\.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components sync nonrecursive .*\.vue ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./AudioComponent.vue": "./resources/js/components/AudioComponent.vue",
	"./Cover.vue": "./resources/js/components/Cover.vue",
	"./CoverCard.vue": "./resources/js/components/CoverCard.vue",
	"./Form.vue": "./resources/js/components/Form.vue",
	"./Image.vue": "./resources/js/components/Image.vue"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/components sync .*\\.vue";

/***/ }),

/***/ "./resources/js/components/AudioComponent.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/AudioComponent.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AudioComponent_vue_vue_type_template_id_07fa7d1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AudioComponent.vue?vue&type=template&id=07fa7d1c&scoped=true& */ "./resources/js/components/AudioComponent.vue?vue&type=template&id=07fa7d1c&scoped=true&");
/* harmony import */ var _AudioComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AudioComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/AudioComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AudioComponent_vue_vue_type_style_index_0_id_07fa7d1c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AudioComponent.vue?vue&type=style&index=0&id=07fa7d1c&scoped=true&lang=scss& */ "./resources/js/components/AudioComponent.vue?vue&type=style&index=0&id=07fa7d1c&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AudioComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AudioComponent_vue_vue_type_template_id_07fa7d1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AudioComponent_vue_vue_type_template_id_07fa7d1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "07fa7d1c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AudioComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AudioComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/AudioComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AudioComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AudioComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AudioComponent.vue?vue&type=style&index=0&id=07fa7d1c&scoped=true&lang=scss&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/AudioComponent.vue?vue&type=style&index=0&id=07fa7d1c&scoped=true&lang=scss& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioComponent_vue_vue_type_style_index_0_id_07fa7d1c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./AudioComponent.vue?vue&type=style&index=0&id=07fa7d1c&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AudioComponent.vue?vue&type=style&index=0&id=07fa7d1c&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioComponent_vue_vue_type_style_index_0_id_07fa7d1c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioComponent_vue_vue_type_style_index_0_id_07fa7d1c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioComponent_vue_vue_type_style_index_0_id_07fa7d1c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioComponent_vue_vue_type_style_index_0_id_07fa7d1c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioComponent_vue_vue_type_style_index_0_id_07fa7d1c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/AudioComponent.vue?vue&type=template&id=07fa7d1c&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/AudioComponent.vue?vue&type=template&id=07fa7d1c&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioComponent_vue_vue_type_template_id_07fa7d1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AudioComponent.vue?vue&type=template&id=07fa7d1c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AudioComponent.vue?vue&type=template&id=07fa7d1c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioComponent_vue_vue_type_template_id_07fa7d1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioComponent_vue_vue_type_template_id_07fa7d1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Cover.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Cover.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cover_vue_vue_type_template_id_485718dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cover.vue?vue&type=template&id=485718dc&scoped=true& */ "./resources/js/components/Cover.vue?vue&type=template&id=485718dc&scoped=true&");
/* harmony import */ var _Cover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cover.vue?vue&type=script&lang=js& */ "./resources/js/components/Cover.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Cover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Cover_vue_vue_type_template_id_485718dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Cover_vue_vue_type_template_id_485718dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "485718dc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Cover.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Cover.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Cover.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Cover.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Cover.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Cover.vue?vue&type=template&id=485718dc&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Cover.vue?vue&type=template&id=485718dc&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cover_vue_vue_type_template_id_485718dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Cover.vue?vue&type=template&id=485718dc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Cover.vue?vue&type=template&id=485718dc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cover_vue_vue_type_template_id_485718dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cover_vue_vue_type_template_id_485718dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/CoverCard.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/CoverCard.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CoverCard_vue_vue_type_template_id_66b1a3e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CoverCard.vue?vue&type=template&id=66b1a3e8&scoped=true& */ "./resources/js/components/CoverCard.vue?vue&type=template&id=66b1a3e8&scoped=true&");
/* harmony import */ var _CoverCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoverCard.vue?vue&type=script&lang=js& */ "./resources/js/components/CoverCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CoverCard_vue_vue_type_style_index_0_id_66b1a3e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CoverCard.vue?vue&type=style&index=0&id=66b1a3e8&scoped=true&lang=css& */ "./resources/js/components/CoverCard.vue?vue&type=style&index=0&id=66b1a3e8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CoverCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CoverCard_vue_vue_type_template_id_66b1a3e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CoverCard_vue_vue_type_template_id_66b1a3e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "66b1a3e8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CoverCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CoverCard.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/CoverCard.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CoverCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CoverCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CoverCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CoverCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CoverCard.vue?vue&type=style&index=0&id=66b1a3e8&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/CoverCard.vue?vue&type=style&index=0&id=66b1a3e8&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CoverCard_vue_vue_type_style_index_0_id_66b1a3e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./CoverCard.vue?vue&type=style&index=0&id=66b1a3e8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CoverCard.vue?vue&type=style&index=0&id=66b1a3e8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CoverCard_vue_vue_type_style_index_0_id_66b1a3e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CoverCard_vue_vue_type_style_index_0_id_66b1a3e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CoverCard_vue_vue_type_style_index_0_id_66b1a3e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CoverCard_vue_vue_type_style_index_0_id_66b1a3e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CoverCard_vue_vue_type_style_index_0_id_66b1a3e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/CoverCard.vue?vue&type=template&id=66b1a3e8&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/CoverCard.vue?vue&type=template&id=66b1a3e8&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CoverCard_vue_vue_type_template_id_66b1a3e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CoverCard.vue?vue&type=template&id=66b1a3e8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CoverCard.vue?vue&type=template&id=66b1a3e8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CoverCard_vue_vue_type_template_id_66b1a3e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CoverCard_vue_vue_type_template_id_66b1a3e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Form.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Form.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_8048fca2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=8048fca2&scoped=true& */ "./resources/js/components/Form.vue?vue&type=template&id=8048fca2&scoped=true&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/components/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Form_vue_vue_type_style_index_0_id_8048fca2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form.vue?vue&type=style&index=0&id=8048fca2&lang=scss&scoped=true& */ "./resources/js/components/Form.vue?vue&type=style&index=0&id=8048fca2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_8048fca2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_8048fca2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8048fca2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Form.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Form.vue?vue&type=style&index=0&id=8048fca2&lang=scss&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Form.vue?vue&type=style&index=0&id=8048fca2&lang=scss&scoped=true& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_8048fca2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=style&index=0&id=8048fca2&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form.vue?vue&type=style&index=0&id=8048fca2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_8048fca2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_8048fca2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_8048fca2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_8048fca2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_8048fca2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Form.vue?vue&type=template&id=8048fca2&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Form.vue?vue&type=template&id=8048fca2&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_8048fca2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=8048fca2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form.vue?vue&type=template&id=8048fca2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_8048fca2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_8048fca2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Image.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Image.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Image_vue_vue_type_template_id_c4020700_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image.vue?vue&type=template&id=c4020700&scoped=true& */ "./resources/js/components/Image.vue?vue&type=template&id=c4020700&scoped=true&");
/* harmony import */ var _Image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image.vue?vue&type=script&lang=js& */ "./resources/js/components/Image.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Image_vue_vue_type_template_id_c4020700_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Image_vue_vue_type_template_id_c4020700_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c4020700",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Image.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Image.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Image.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Image.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Image.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Image.vue?vue&type=template&id=c4020700&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Image.vue?vue&type=template&id=c4020700&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_template_id_c4020700_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Image.vue?vue&type=template&id=c4020700&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Image.vue?vue&type=template&id=c4020700&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_template_id_c4020700_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_template_id_c4020700_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/index.js":
/*!******************************************!*\
  !*** ./resources/js/components/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


var requires = __webpack_require__("./resources/js/components sync .*\\.vue");

var modules = requires.keys().map(function (name) {
  var module = requires(name);
  vue__WEBPACK_IMPORTED_MODULE_0___default.a.component(module["default"].comp_name || module["default"].name, module["default"]);
});

/***/ }),

/***/ "./resources/js/mixins.js":
/*!********************************!*\
  !*** ./resources/js/mixins.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var Mixins = vue__WEBPACK_IMPORTED_MODULE_0___default.a.mixin({
  methods: {
    capitalize: function capitalize(text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    },
    file_to_image: function file_to_image(file) {
      return new Promise(function (resolve, reject) {
        var imgsrc = new FileReader();

        imgsrc.onload = function (result) {
          return resolve(result.target.result);
        };

        imgsrc.readAsDataURL(file);
      });
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (Mixins);

/***/ }),

/***/ "./resources/sass/LoginV2/fonts/poppins/Poppins-Bold.ttf":
/*!***************************************************************!*\
  !*** ./resources/sass/LoginV2/fonts/poppins/Poppins-Bold.ttf ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/Poppins-Bold.ttf?7940efc40d8e3b477e16cc41b0287139";

/***/ }),

/***/ "./resources/sass/LoginV2/fonts/poppins/Poppins-Medium.ttf":
/*!*****************************************************************!*\
  !*** ./resources/sass/LoginV2/fonts/poppins/Poppins-Medium.ttf ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/Poppins-Medium.ttf?a4e11dda40531debd374e4c8b1dcc7f4";

/***/ }),

/***/ "./resources/sass/LoginV2/fonts/poppins/Poppins-Regular.ttf":
/*!******************************************************************!*\
  !*** ./resources/sass/LoginV2/fonts/poppins/Poppins-Regular.ttf ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/Poppins-Regular.ttf?731a28a413d642522667a2de8681ff35";

/***/ }),

/***/ "./resources/sass/LoginV2/fonts/poppins/Poppins-SemiBold.ttf":
/*!*******************************************************************!*\
  !*** ./resources/sass/LoginV2/fonts/poppins/Poppins-SemiBold.ttf ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/Poppins-SemiBold.ttf?e63b93dfac2600782654e2b87910d681";

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/sl/projects/web/mediation/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /home/sl/projects/web/mediation/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);