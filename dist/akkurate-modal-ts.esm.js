import Vue from 'vue';
import { Prop, Watch, Emit, Component, Vue as Vue$1 } from 'vue-property-decorator';

var script = Vue.extend({
  name: 'AkkurateModalTsSample',
  // vue component name
  props: {
    opts: {
      type: String,
      required: false,
      default: {}
    }
  },

  data() {
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
    changedBy() {
      var _message$amount;

      const {
        message
      } = this;
      if (!message.action) return 'initialized';
      return `${message === null || message === void 0 ? void 0 : message.action} ${(_message$amount = message.amount) !== null && _message$amount !== void 0 ? _message$amount : ''}`.trim();
    }

  },
  methods: {
    increment(arg) {
      const amount = typeof arg !== 'number' ? 1 : arg;
      this.counter += amount;
      this.message.action = 'incremented by';
      this.message.amount = amount;
    },

    decrement(arg) {
      const amount = typeof arg !== 'number' ? 1 : arg;
      this.counter -= amount;
      this.message.action = 'decremented by';
      this.message.amount = amount;
    },

    reset() {
      this.counter = this.initCounter;
      this.message.action = 'reset';
      this.message.amount = null;
    }

  }
});

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "akkurate-modal-ts-sample"
  }, [_c('p', [_vm._v("\n        The counter was " + _vm._s(_vm.changedBy) + " to "), _c('b', [_vm._v(_vm._s(_vm.counter))]), _vm._v(".\n    ")]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.increment
    }
  }, [_vm._v("\n        Click +1\n    ")]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.decrement
    }
  }, [_vm._v("\n        Click -1\n    ")]), _vm._v(" "), _c('button', {
    on: {
      "click": function ($event) {
        return _vm.increment(5);
      }
    }
  }, [_vm._v("\n        Click +5\n    ")]), _vm._v(" "), _c('button', {
    on: {
      "click": function ($event) {
        return _vm.decrement(5);
      }
    }
  }, [_vm._v("\n        Click -5\n    ")]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.reset
    }
  }, [_vm._v("\n        Reset\n    ")])]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-ee4a84ee_0", {
    source: ".akkurate-modal-ts-sample[data-v-ee4a84ee]{display:block;width:400px;margin:25px auto;border:1px solid #ccc;background:#eaeaea;text-align:center;padding:25px}.akkurate-modal-ts-sample p[data-v-ee4a84ee]{margin:0 0 1em}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-ee4a84ee";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

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
}

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;
const CLOSE = 'close';
const Escape = 'Escape';
let Modal = (_dec = Prop({
  default: {}
}), _dec2 = Prop(), _dec3 = Prop(), _dec4 = Prop({
  default: true
}), _dec5 = Watch('show'), _dec6 = Emit('init'), Component(_class = (_class2 = (_temp = class Modal extends Vue$1 {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "opts", _descriptor, this);

    _initializerDefineProperty(this, "modal", _descriptor2, this);

    _initializerDefineProperty(this, "args", _descriptor3, this);

    _initializerDefineProperty(this, "initShow", _descriptor4, this);

    this.show = false;
    this.init = false;
  }

  mounted() {
    this.onInit();

    if (this.initShow) {
      this.$nextTick().then(() => {
        this.show = true;
      });
    }
  }

  onShow(value) {
    if (value) {
      if (this.init) {
        return;
      }

      this.init = true;
      document.addEventListener('keyup', this.keyBoardEv);
      setTimeout(() => {
        const component = this.$refs.refComponent;
        component.$el.addEventListener('click', e => e.stopPropagation());
      }, 100);
    } else {
      document.removeEventListener('keyup', this.keyBoardEv);
    }
  }

  keyBoardEv(e) {
    if (e.key !== Escape) {
      return;
    }

    this.onEsc();
  }

  hide(args = false) {
    this.show = false;
    setTimeout(() => {
      this.$emit(CLOSE, this.$el, args);
    }, 500);
  }

  onEsc() {
    if (this.show && this.options.closeOnEsc) {
      this.hide();
    }
  }

  onClickMask() {
    if (this.options.closeOnClickMask) {
      this.hide();
    }
  }

  onInit() {
    return {
      isShow: () => this.show,
      open: () => {
        this.show = true;
      },
      hide: () => {
        this.show = false;
      }
    };
  }

  get options() {
    return {
      customMaskClasses: [],
      dialogClassName: null,
      customStyles: null,
      className: null,
      closeOnClickMask: true,
      closeOnEsc: false,
      animation: 'zoom',
      duration: 300,
      mask: true,
      ...this.opts
    };
  }

  get maskClasses() {
    const classes = ['akk-modal-mask'];

    if (!this.options.mask) {
      classes.push('bg-opacity-0');
    }

    if (this.options.customMaskClasses) {
      this.options.customMaskClasses.forEach(prop => {
        classes.push(prop);
      });
    }

    return classes;
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "opts", [_dec], {
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
}), _applyDecoratedDescriptor(_class2.prototype, "onShow", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "onShow"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "onInit", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "onInit"), _class2.prototype)), _class2)) || _class);

/* script */
const __vue_script__$1 = Modal;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('transition', {
    attrs: {
      "name": "akk-modal"
    },
    on: {
      "keydown": function ($event) {
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
    staticClass: "akk-modal-wrapper"
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

const __vue_inject_styles__$1 = function (inject) {
  if (!inject) return;
  inject("data-v-218f24d4_0", {
    source: ".akk-modal-mask[data-v-218f24d4]{position:fixed;z-index:9998;top:0;left:0;bottom:0;right:0;display:flex;background-color:rgba(0,0,0,.5);transition:opacity .3s ease}.akk-modal-enter[data-v-218f24d4]{opacity:0}.akk-modal-leave-active[data-v-218f24d4]{opacity:0}.akk-modal-enter .component[data-v-218f24d4],.akk-modal-leave-active .component[data-v-218f24d4]{-webkit-transform:scale(1.1);transform:scale(1.1)}.component[data-v-218f24d4]{margin:0 auto}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$1 = "data-v-218f24d4";
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, createInjector, undefined, undefined);

const ModalPlugin = {
  install(Vue, options = {}) {
    Vue.prototype.$modal = {
      show(modal, args, opts = {}) {
        const div = document.createElement('div');
        div.setAttribute('id', 'modal');
        document.getElementsByTagName('body')[0].appendChild(div);
        return new Promise(resolve => {
          const {
            store
          } = options;
          new Vue({
            // @ts-ignore
            store,
            render: h => h(__vue_component__$1, {
              props: {
                args,
                modal,
                opts
              },
              on: {
                close: ($el, res) => {
                  $el.remove();
                  resolve(res);
                }
              }
            })
          }).$mount('#modal');
        });
      },

      create(modal, args, opts = {}) {
        const {
          store
        } = options;
        const div = document.createElement('div');
        div.setAttribute('id', 'modal');
        document.getElementsByTagName('body')[0].appendChild(div);
        return new Promise(resolve => {
          new Vue({
            // @ts-ignore
            store,
            render: h => h(__vue_component__$1, {
              props: {
                args,
                modal,
                opts,
                initShow: false
              },
              on: {
                init(e) {
                  console.log(e);
                  resolve(e);
                }

              }
            })
          }).$mount('#modal');
        });
      }

    };
  }

};

// Import vue components

export default ModalPlugin;
export { __vue_component__ as AkkurateModalTsSample };
