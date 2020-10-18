import {DomListener} from "@core/DomListener";

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners);
        this.name = options.name
        this.emitter = options.emitter
        this.subscribe = options.subscribe || []
        this.store = options.store
        this.unsubsribers = []
        // this.storeSub = null
        this.prepare()
    }
    // настраиваем наш компонент до init
    prepare() {}
    // выводим html
    toHtml() {
       return ''
    }
    // инициализируем компанент
    // добовляем слушатели
    init() {
        this.initDOMListeners()
    }
    // уведомляем лушатели про события
    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }
    // подписываемся на события
    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn)
        this.unsubsribers.push(unsub)
    }
    $dispatch(action) {
        this.store.dispatch(action)
    }
    // сюда приходят только изменения по тем полям на которые мы подписались
    storeChange() {}
    // $subscribe(fn) {
    //     this.storeSub = this.store.subscribe(fn)
    // }
    isWatching(key) {
        return this.subscribe.includes(key)
    }
    destroy() {
        this.removeDOMListeners()
        this.unsubsribers.forEach(unsub => unsub())
        // this.storeSub.unsubsribers()
    }
}