export class TableSelection {
    static className = 'selected'
    constructor() {
        this.group = []
        this.current = null
    }
    select($el) {
        this.clear()
        $el.focus().addClass(TableSelection.className)
        this.group.push($el)
        this.current = $el
    }
    selectGroup($group) {
        this.clear()
        this.group = $group
        this.group.forEach(e => e.addClass(TableSelection.className) )
    }
    clear() {
        this.group.forEach($c=> $c.removeClass(TableSelection.className))
        this.group = []
    }
    get selectedIDS() {
        return this.group.map($el => $el.id())
    }
    applyStyle(style) {
        this.group.forEach(e => {
            e.css(style)
        })
    }
}