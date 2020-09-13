import {DomListener} from "@core/DomListener";

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners);
        this.name = options.name
        this.prepare()
        this.emitter = options.emitter
        this.unsubsribers = []
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
    destroy() {
        this.removeDOMListeners()
        this.unsubsribers.forEach(unsub => unsub())
    }
}