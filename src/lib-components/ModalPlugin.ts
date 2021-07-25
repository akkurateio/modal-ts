import Modal from './Modal.vue';
import _Vue from 'vue';
import vuex from 'vuex';

interface Opts {
    store?: typeof vuex;
}

const ModalPlugin = {
    install(Vue: typeof _Vue, options: Opts = {}) {
        Vue.prototype.$modal = {
            show(modal: typeof _Vue, args: any, opts = {}) {
                const div = document.createElement('div');
                div.setAttribute('id', 'modal');
                document.getElementsByTagName('body')[0].appendChild(div);
                return new Promise(resolve => {
                    const { store } = options;
                    new Vue({
                        // @ts-ignore
                        store,
                        render: h =>
                            h(Modal, {
                                props: {
                                    args,
                                    modal,
                                    opts,
                                },
                                on: {
                                    close: ($el: any, res: any) => {
                                        $el.remove();
                                        resolve(res);
                                    },
                                },
                            }),
                    }).$mount('#modal');
                });
            },
            create(modal: typeof _Vue, args: any, opts = {}) {
                const { store } = options;
                const div = document.createElement('div');
                div.setAttribute('id', 'modal');
                document.getElementsByTagName('body')[0].appendChild(div);
                return new Promise(resolve => {
                    new Vue({
                        // @ts-ignore
                        store,
                        render: h =>
                            h(Modal, {
                                props: {
                                    args,
                                    modal,
                                    opts,
                                    initShow: false,
                                },
                                on: {
                                    init(e: any) {
                                        console.log(e);
                                        resolve(e);
                                    },
                                },
                            }),
                    }).$mount('#modal');
                });
            },
        };
    },
};
export default ModalPlugin;
