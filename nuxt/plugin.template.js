import Vue from 'vue'
import AkkurateModalTs from "../akkurate-modal-ts";

export default (obj, inject) => {
    // aviable only in client side
    if (!process.client) {
        return
    }
    // inject options from module
    const pluginOptions = [<%= serialize(options) %>][0] || {}
    const property = pluginOptions.property || '$modal'

    const keys = Object.keys(obj.app).filter(key =>
        key.startsWith('$') || ['router', 'i18n', 'store', 'apollo'].indexOf(key) >= 0)

    const context = Object.assign({}, ...keys.map(prop => {
        if (obj.app[prop]) return {[prop]: obj.app[prop]};
    }))
    context.route = obj.route

    Vue.use(AkkurateModalTs, { context, ...pluginOptions })
    const instance = Vue.prototype[property]
    if (instance) {
        obj[property] = instance
        // inject(property, instance)
    }
}