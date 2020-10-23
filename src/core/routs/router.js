import {$} from "@core/dom";
import {ActiveRouter} from "@core/routs/ActiveRouter";

export class Router {
    constructor(selector, routes) {
        if (!selector) {
            new Error('Selector is not provided in Router')
        }
        this.placeholder = $(selector)
        this.routes = routes
        this.page = null
        this.changePageHandler = this.changePageHandler.bind(this)
        this.init()
    }
    init() {
        window.addEventListener('hashchange', this.changePageHandler)// когда меняетяся хэш вызывается changePageHandler
        this.changePageHandler()
    }
    changePageHandler(event) {
        if (this.page) {
            this.page.destroy()
        }
        this.placeholder.clear()
        const Page = ActiveRouter.path.includes('excel') ? this.routes.excel : this.routes.dashboard
        this.page = new Page(ActiveRouter.param)
        this.placeholder.clear()
        this.placeholder.append(this.page.getRoot())
        this.page.afterRender()
    }
    destroy() {
        window.removeEventListener('hashchange', this.changePageHandler)
    }
}