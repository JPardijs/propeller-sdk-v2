"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SparePartsResponse = void 0;
/**
 Object class for SparePartsResponse
 */
class SparePartsResponse {
    /**
     Creates a new instance of SparePartsResponse
     */
    constructor(data = {}) {
        this._items = data.items;
        this._itemsFound = data.itemsFound;
        this._offset = data.offset;
        this._page = data.page;
        this._pages = data.pages;
        this._start = data.start;
        this._end = data.end;
        this._minPrice = data.minPrice;
        this._maxPrice = data.maxPrice;
        this._filters = data.filters;
    }
    /**
     List of items of type SpareParts
     */
    get items() {
        return this._items;
    }
    /**
     List of items of type SpareParts
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
    /**
     The lowest price of a product in this productlist
     */
    get minPrice() {
        return this._minPrice;
    }
    /**
     The lowest price of a product in this productlist
     */
    set minPrice(value) {
        this._minPrice = value;
    }
    /**
     The highest price of a product in this productlist
     */
    get maxPrice() {
        return this._maxPrice;
    }
    /**
     The highest price of a product in this productlist
     */
    set maxPrice(value) {
        this._maxPrice = value;
    }
    /**
     filters field
     */
    get filters() {
        return this._filters;
    }
    /**
     filters field
     */
    set filters(value) {
        this._filters = value;
    }
}
exports.SparePartsResponse = SparePartsResponse;
//# sourceMappingURL=SparePartsResponse.js.map