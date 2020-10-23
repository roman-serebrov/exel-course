import {ExcelComponent} from "@core/ExcelComponent";
import {$} from "@core/dom";
import * as actions from "@/redux/actions";
import {defaultTitle} from "@/constans";
import {debounce} from "@core/utils";
import {ActiveRouter} from "@core/routs/ActiveRouter";

export class Header extends ExcelComponent {
    static className = 'excel__header'

    constructor($root, options) {
        super($root, {
            name: 'Header',
            listeners: ['input', 'click'],
            ...options
        });
    }
    prepare() {
        this.onInput = debounce(this.onInput, 300)
    }

    toHtml() {
        const title = this.store.getState().title || defaultTitle
        return `
            <input class="input" type="text" value="${title}"/>

            <div>
                <div data-button="remove" class="button">
                    <i data-button="remove" class="material-icons">delete</i>
                </div>

                <div data-button="exit" class="button">
                    <i data-button="exit" class="material-icons">exit_to_app</i>
                </div>
            </div>
        `
    }

    onInput(event) {
        const $target = $(event.target)
        this.$dispatch(actions.changeTitle($target.text()))
    }
    onClick(event) {
        const $target = $(event.target)
        if ($target.data.button === 'remove') {
            const decision = confirm('Вы действительно хотите удалить таблицу')
            if (decision) {
                localStorage.removeItem('excel:'+ ActiveRouter.param)
                ActiveRouter.navigation('')
            }
        } else if ($target.data.button === 'exit') {
            ActiveRouter.navigation('')
        }
    }
}