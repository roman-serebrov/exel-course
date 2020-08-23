import {Excel} from "@/components/excel/Excel";
import {Header} from "@/components/header/Header";
import {Formula} from "@/components/formula/Formula";
import {ToolBar} from "@/components/tolbar/ToolBar";
import {Table} from "@/components/table/Table";
import './scss/index.scss'

const excel = new Excel('#app', {
    components: [Header, Formula, ToolBar, Table]
})


 excel.render()