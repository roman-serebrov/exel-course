// import {Excel} from "@/components/excel/Excel";
// import {Header} from "@/components/header/Header";
// import {Formula} from "@/components/formula/Formula";
// import {ToolBar} from "@/components/tolbar/ToolBar";
// import {Table} from "@/components/table/Table";
// import {createStore} from "@core/cretate_Store";
// import {rootReducer} from "@/redux/rootReducer";
// import {debounce, storage} from "@core/utils";
// import {initialState} from "@/redux/initialState";
import './scss/index.scss'
import {Router} from "@core/routs/router";
import {DashBoard} from "@/pages/DashBoard";
import {ExcelPage} from "@/pages/ExcelPage";

new Router('#app', {
    dashboard: DashBoard,
    excel: ExcelPage
})
// const store = createStore(rootReducer, initialState)
// const stateListener = debounce(state => {
//     storage('excel-state', state)
//     console.log('App-state', state)
// }, 300)
// store.subscribe(stateListener)
// const excel = new Excel('#app', {
//     components: [Header, Formula, ToolBar, Table],
//     store
// })
//  excel.render()