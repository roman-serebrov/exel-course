import {Page} from "@core/Page";
import {Excel} from "@/components/excel/Excel";
import {Header} from "@/components/header/Header";
import {Formula} from "@/components/formula/Formula";
import {ToolBar} from "@/components/tolbar/ToolBar";
import {Table} from "@/components/table/Table";
import {createStore} from "@core/cretate_Store";
import {rootReducer} from "@/redux/rootReducer";
import {debounce, storage} from "@core/utils";
import {normalizeInitialState} from "@/redux/initialState";

export class ExcelPage extends Page {
    getRoot() {
        const params = this.params ? this.params : Date.now().toString()
        const state = storage(storageName(params))
        const initialState = normalizeInitialState(state)
        const store = createStore(rootReducer, initialState)
        const stateListener = debounce(state => {
        storage(storageName(params), state)
    }, 300)
    store.subscribe(stateListener)
    this.excel = new Excel( {
        components: [Header, Formula, ToolBar, Table],
        store
    })
    return this.excel.getRoot()
    }
    afterRender() {
        this.excel.init()
    }
    destroy() {
        this.excel.destroy()
    }
}

function storageName(param) {
    return 'excel:' + param
}