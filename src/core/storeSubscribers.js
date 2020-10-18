import {isEqual} from "@core/utils";

export class StoreSubscriber {
    constructor(store) {
        this.store = store
        this.sub = null
        this.prevState = {}
    }
    // подписываем компаненты
    subscribeComponents(components) {
        this.prevState = this.store.getState() // получаем состояние изначальнок
        this.sub = this.store.subscribe(state => { // передаю функцию которая проходит
            Object.keys(state).forEach(key => { // по ключам
                if (!isEqual(this.prevState[key], state[key])) {
                    components.forEach(component => {
                        if (component.isWatching(key)) {
                            const changes = {[key]: state[key]}
                            component.storeChange(changes)
                        }
                    })
                }
            })
            this.prevState = this.store.getState()
        })
    }
    unsubscribeFromStore() {
        this.sub.unsubscribe()
    }
}