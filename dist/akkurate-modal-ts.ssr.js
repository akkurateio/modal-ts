'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _interopDefault(e){return(e&&(typeof e==='object')&&'default'in e)?e['default']:e}var Vue=_interopDefault(require('vue')),vuePropertyDecorator=require('vue-property-decorator');function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _initializerDefineProperty(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }

  return desc;
}var script = Vue.extend({
  name: 'AkkurateModalTsSample',
  // vue component name
  props: {
    opts: {
      type: String,
      required: false,
      default: {}
    }
  },
  data: function data() {
    return {
      counter: 5,
      initCounter: 5,
      message: {
        action: null,
        amount: null
      }
    };
  },
  computed: {
    changedBy: function changedBy() {
      var _message$amount;

      var _ref = this,
          message = _ref.message;

      if (!message.action) return 'initialized';
      return "".concat(message === null || message === void 0 ? void 0 : message.action, " ").concat((_message$amount = message.amount) !== null && _message$amount !== void 0 ? _message$amount : '').trim();
    }
  },
  methods: {
    increment: function increment(arg) {
      var amount = typeof arg !== 'number' ? 1 : arg;
      this.counter += amount;
      this.message.action = 'incremented by';
      this.message.amount = amount;
    },
    decrement: function decrement(arg) {
      var amount = typeof arg !== 'number' ? 1 : arg;
      this.counter -= amount;
      this.message.action = 'decremented by';
      this.message.amount = amount;
    },
    reset: function reset() {
      this.counter = this.initCounter;
      this.message.action = 'reset';
      this.message.amount = null;
    }
  }
});function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group =  css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "akkurate-modal-ts-sample"
  }, [_vm._ssrNode("<p data-v-ee4a84ee>" + _vm._ssrEscape("\n        The counter was " + _vm._s(_vm.changedBy) + " to ") + "<b data-v-ee4a84ee>" + _vm._ssrEscape(_vm._s(_vm.counter)) + "</b>.\n    </p> <button data-v-ee4a84ee>\n        Click +1\n    </button> <button data-v-ee4a84ee>\n        Click -1\n    </button> <button data-v-ee4a84ee>\n        Click +5\n    </button> <button data-v-ee4a84ee>\n        Click -5\n    </button> <button data-v-ee4a84ee>\n        Reset\n    </button>")]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-ee4a84ee_0", {
    source: ".akkurate-modal-ts-sample[data-v-ee4a84ee]{display:block;width:400px;margin:25px auto;border:1px solid #ccc;background:#eaeaea;text-align:center;padding:25px}.akkurate-modal-ts-sample p[data-v-ee4a84ee]{margin:0 0 1em}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-ee4a84ee";
/* module identifier */

var __vue_module_identifier__ = "data-v-ee4a84ee";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);/* eslint-disable import/prefer-default-export */var components=/*#__PURE__*/Object.freeze({__proto__:null,AkkurateModalTsSample: __vue_component__});var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;
var CLOSE = 'close';
var Escape = 'Escape';
var Modal = (_dec = vuePropertyDecorator.Prop({
  default: {}
}), _dec2 = vuePropertyDecorator.Prop(), _dec3 = vuePropertyDecorator.Prop(), _dec4 = vuePropertyDecorator.Prop({
  default: true
}), _dec5 = vuePropertyDecorator.Watch('show'), _dec6 = vuePropertyDecorator.Emit('init'), vuePropertyDecorator.Component(_class = (_class2 = (_temp = /*#__PURE__*/function (_Vue) {
  _inherits(Modal, _Vue);

  var _super = _createSuper(Modal);

  function Modal() {
    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _initializerDefineProperty(_this, "opts", _descriptor, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "modal", _descriptor2, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "args", _descriptor3, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "initShow", _descriptor4, _assertThisInitialized(_this));

    _this.show = false;
    _this.init = false;
    return _this;
  }

  _createClass(Modal, [{
    key: "mounted",
    value: function mounted() {
      var _this2 = this;

      this.onInit();

      if (this.initShow) {
        this.$nextTick().then(function () {
          _this2.show = true;
        });
      }
    }
  }, {
    key: "onShow",
    value: function onShow(value) {
      var _this3 = this;

      if (value) {
        if (this.init) {
          return;
        }

        this.init = true;
        document.addEventListener('keyup', this.keyBoardEv);
        setTimeout(function () {
          var component = _this3.$refs.refComponent;
          component.$el.addEventListener('click', function (e) {
            return e.stopPropagation();
          });
        }, 100);
      } else {
        document.removeEventListener('keyup', this.keyBoardEv);
      }
    }
  }, {
    key: "keyBoardEv",
    value: function keyBoardEv(e) {
      if (e.key !== Escape) {
        return;
      }

      this.onEsc();
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this4 = this;

      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.show = false;
      setTimeout(function () {
        _this4.$emit(CLOSE, _this4.$el, args);
      }, 500);
    }
  }, {
    key: "onEsc",
    value: function onEsc() {
      if (this.show && this.options.closeOnEsc) {
        this.hide();
      }
    }
  }, {
    key: "onClickMask",
    value: function onClickMask() {
      if (this.options.closeOnClickMask) {
        this.hide();
      }
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _this5 = this;

      return {
        isShow: function isShow() {
          return _this5.show;
        },
        open: function open() {
          _this5.show = true;
        },
        hide: function hide() {
          _this5.show = false;
        }
      };
    }
  }, {
    key: "options",
    get: function get() {
      return _objectSpread2({
        customMaskClasses: ['items-center', 'justify-center'],
        dialogClasses: [],
        customStyles: null,
        className: null,
        closeOnClickMask: true,
        closeOnEsc: false,
        animation: 'zoom',
        duration: 300,
        mask: true
      }, this.opts);
    }
  }, {
    key: "wrapperClasses",
    get: function get() {
      var wrapperClasses = [];
      this.options.dialogClasses.forEach(function (prop) {
        wrapperClasses.push(prop);
      });
      return wrapperClasses;
    }
  }, {
    key: "maskClasses",
    get: function get() {
      var classes = ['akk-modal-mask'];

      if (!this.options.mask) {
        classes.push('bg-opacity-0');
      }

      if (this.options.customMaskClasses) {
        this.options.customMaskClasses.forEach(function (prop) {
          classes.push(prop);
        });
      }

      return classes;
    }
  }]);

  return Modal;
}(vuePropertyDecorator.Vue), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "opts", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "modal", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "args", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "initShow", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, "onShow", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "onShow"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "onInit", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "onInit"), _class2.prototype)), _class2)) || _class);/* script */
var __vue_script__$1 = Modal;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('transition', {
    attrs: {
      "name": "akk-modal"
    },
    on: {
      "keydown": function keydown($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
          return null;
        }

        return _vm.hide($event);
      }
    }
  }, [_vm.show ? _c('div', {
    class: _vm.maskClasses,
    on: {
      "click": _vm.onClickMask
    }
  }, [_c('div', {
    staticClass: "akk-modal-wrapper",
    class: _vm.wrapperClasses
  }, [_c(_vm.modal, _vm._b({
    ref: "refComponent",
    tag: "component",
    staticClass: "component",
    on: {
      "close": _vm.hide
    }
  }, 'component', _vm.args, false))], 1)]) : _vm._e()]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-6255dbf4_0", {
    source: ".akk-modal-mask[data-v-6255dbf4]{position:fixed;z-index:9998;top:0;left:0;bottom:0;right:0;display:flex;background-color:rgba(0,0,0,.5);transition:opacity .3s ease}.akk-modal-mask.bg-opacity-0[data-v-6255dbf4]{background-color:rgba(0,0,0,0)}.akk-modal-enter[data-v-6255dbf4]{opacity:0}.akk-modal-leave-active[data-v-6255dbf4]{opacity:0}.akk-modal-enter .component[data-v-6255dbf4],.akk-modal-leave-active .component[data-v-6255dbf4]{-webkit-transform:scale(1.1);transform:scale(1.1)}.component[data-v-6255dbf4]{margin:0 auto}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$1 = "data-v-6255dbf4";
/* module identifier */

var __vue_module_identifier__$1 = "data-v-6255dbf4";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, createInjectorSSR, undefined);var ModalPlugin = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Vue.prototype.$modal = {
      show: function show(modal, args) {
        var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var div = document.createElement('div');
        div.setAttribute('id', 'modal');
        document.getElementsByTagName('body')[0].appendChild(div);
        return new Promise(function (resolve) {
          var store = options.store;
          new Vue({
            // @ts-ignore
            store: store,
            render: function render(h) {
              return h(__vue_component__$1, {
                props: {
                  args: args,
                  modal: modal,
                  opts: opts
                },
                on: {
                  close: function close($el, res) {
                    $el.remove();
                    resolve(res);
                  }
                }
              });
            }
          }).$mount('#modal');
        });
      },
      create: function create(modal, args) {
        var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var store = options.store;
        var div = document.createElement('div');
        div.setAttribute('id', 'modal');
        document.getElementsByTagName('body')[0].appendChild(div);
        return new Promise(function (resolve) {
          new Vue({
            // @ts-ignore
            store: store,
            render: function render(h) {
              return h(__vue_component__$1, {
                props: {
                  args: args,
                  modal: modal,
                  opts: opts,
                  initShow: false
                },
                on: {
                  init: function init(e) {
                    console.log(e);
                    resolve(e);
                  }
                }
              });
            }
          }).$mount('#modal');
        });
      }
    };
  }
};// eslint-disable-next-line @typescript-eslint/no-explicit-any

// install function executed by Vue.use()
var install = function installAkkurateModalTs(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

{
  var GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
} // Default export is library as a whole, registered via Vue.use()
exports.AkkurateModalTsSample=__vue_component__;exports.default=ModalPlugin;