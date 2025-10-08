"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentResponse = void 0;
/**
 Object class for ShipmentResponse
 */
class ShipmentResponse {
    /**
     Creates a new instance of ShipmentResponse
     */
    constructor(data = {}) {
        this._items = data.items;
        this._itemsFound = data.itemsFound;
        this._offset = data.offset;
        this._page = data.page;
        this._pages = data.pages;
        this._start = data.start;
        this._end = data.end;
    }
    /**
     List of items of type Shipment
     */
    get items() {
        return this._items;
    }
    /**
     List of items of type Shipment
     */
    set items(value) {
        this._items = value;
    }
    /**
     Total number of items found
     */
    get itemsFound() {
        return this._itemsFound;
    }
    /**
     Total number of items found
     */
    set itemsFound(value) {
        this._itemsFound = value;
    }
    /**
     The amount of items to show per page
     */
    get offset() {
        return this._offset;
    }
    /**
     The amount of items to show per page
     */
    set offset(value) {
        this._offset = value;
    }
    /**
     The current page
     */
    get page() {
        return this._page;
    }
    /**
     The current page
     */
    set page(value) {
        this._page = value;
    }
    /**
     Total amount of pages
     */
    get pages() {
        return this._pages;
    }
    /**
     Total amount of pages
     */
    set pages(value) {
        this._pages = value;
    }
    /**
     Start position of the current page
     */
    get start() {
        return this._start;
    }
    /**
     Start position of the current page
     */
    set start(value) {
        this._start = value;
    }
    /**
     End position of the current page
     */
    get end() {
        return this._end;
    }
    /**
     End position of the current page
     */
    set end(value) {
        this._end = value;
    }
}
exports.ShipmentResponse = ShipmentResponse;
//# sourceMappingURL=ShipmentResponse.js.map