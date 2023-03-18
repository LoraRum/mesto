class Section {
    constructor({ items, renderer }, containerSelector) {
        this.addItem = this.addItem.bind(this);

        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);

        this.renderItems();
    }

    renderItems() {
        this._items.forEach(this.addItem);
    }

    addItem(element) {
        this._container.prepend(this._renderer(element));
    }
}

export default Section;
