import {capitalize} from "@core/utils";

export class DomListener {
    constructor($root, listiners= []) {
        if (!$root) {
            throw new Error(`NO $root provider DomListener`)
        }
        this.$root = $root
        this.listiners = listiners
    }
    initDOMListeners() {
        this.listiners.forEach(listener => {
            const method = getMethodName(listener)
            if (!this[method]) {
                throw new Error(`No method ${method} in component ${this.name}`)
            }
            this[method] = this[method].bind(this)
            this.$root.on(listener, this[method])
        })
    }
    removeDOMListeners() {
        console.log('removeDom')
        this.listiners.forEach(listener => {
            const method = getMethodName(listener)
            this.$root.off(listener, this[method])
        })
    }
}

function getMethodName(eventName) {
    return 'on' + capitalize(eventName)
}