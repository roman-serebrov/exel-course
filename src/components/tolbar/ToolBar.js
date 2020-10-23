import {createToolbar} from "@/components/tolbar/toolbar.tamplate";
import {$} from "@core/dom";
import {ExcelStateComponent} from "@core/ExcelStateComponent";
import {defaulStyles} from "@/constans";

export class ToolBar extends ExcelStateComponent {
    static className = 'excel__toolbar'
    constructor($root, options) {
        super($root, {
            name: 'Toolbar',
            listeners: ['click'],
            subscribe: ['currentStyles'],
            ...options
        })
    }

    get template() {
        return createToolbar(this.state)
    }

    prepare() {
        this.initState(defaulStyles)
    }

    storeChange(changes) {
        this.setState(changes.currentStyles)
    }

    toHtml() {
        return this.template
    }
    onClick(event) {
        const $target = $(event.target)
        if ($target.data.type === 'button') {
            const value = JSON.parse($target.data.value)
            this.$emit('toolBar:applyStyle', value)
            // const key = Object.keys(value)[0]
            // this.setState({[key]: value[key]})
        }
    }
}