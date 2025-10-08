"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Price = void 0;
/**
 Object class for Price
 */
class Price {
    /**
     Creates a new instance of Price
     */
    constructor(data = {}) {
        this._id = data.id;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._productId = data.productId;
        this._per = data.per;
        this._list = data.list;
        this._costPrices = data.costPrices;
        this._suggested = data.suggested;
        this._store = data.store;
        this._bulkPriceDiscountType = data.bulkPriceDiscountType;
        this._defaultTaxCode = data.defaultTaxCode;
        this._display = data.display;
        this._cost = data.cost;
    }
    /**
     Primary identifier
     */
    get id() {
        return this._id;
    }
    /**
     Primary identifier
     */
    set id(value) {
        this._id = value;
    }
    /**
     Creation date
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     Creation date
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     Last modified date
     */
    get lastModifiedAt() {
        return this._lastModifiedAt;
    }
    /**
     Last modified date
     */
    set lastModifiedAt(value) {
        this._lastModifiedAt = value;
    }
    /**
     Product Id
     */
    get productId() {
        return this._productId;
    }
    /**
     Product Id
     */
    set productId(value) {
        this._productId = value;
    }
    /**
     The quantity of items that the listed price will purchase.
     */
    get per() {
        return this._per;
    }
    /**
     The quantity of items that the listed price will purchase.
     */
    set per(value) {
        this._per = value;
    }
    /**
     The default sales price.
     */
    get list() {
        return this._list;
    }
    /**
     The default sales price.
     */
    set list(value) {
        this._list = value;
    }
    /**
     costPrices field
     */
    get costPrices() {
        return this._costPrices;
    }
    /**
     costPrices field
     */
    set costPrices(value) {
        this._costPrices = value;
    }
    /**
     The manufacturer's or supplier's recommended retail price (RRP) for the product.
     */
    get suggested() {
        return this._suggested;
    }
    /**
     The manufacturer's or supplier's recommended retail price (RRP) for the product.
     */
    set suggested(value) {
        this._suggested = value;
    }
    /**
     The price at which the product is sold in physical stores. This might differ from the standard price due to store-specific deals, overhead costs, or regional pricing strategies.
     */
    get store() {
        return this._store;
    }
    /**
     The price at which the product is sold in physical stores. This might differ from the standard price due to store-specific deals, overhead costs, or regional pricing strategies.
     */
    set store(value) {
        this._store = value;
    }
    /**
     The method used to apply discounts for bulk prices / volume discounts.
     */
    get bulkPriceDiscountType() {
        return this._bulkPriceDiscountType;
    }
    /**
     The method used to apply discounts for bulk prices / volume discounts.
     */
    set bulkPriceDiscountType(value) {
        this._bulkPriceDiscountType = value;
    }
    /**
     Default tax code
     */
    get defaultTaxCode() {
        return this._defaultTaxCode;
    }
    /**
     Default tax code
     */
    set defaultTaxCode(value) {
        this._defaultTaxCode = value;
    }
    /**
     Describes how the price should be displayed on the Front-End. Default value is 'DEFAULT'.
     */
    get display() {
        return this._display;
    }
    /**
     Describes how the price should be displayed on the Front-End. Default value is 'DEFAULT'.
     */
    set display(value) {
        this._display = value;
    }
    /**
     cost field
     */
    get cost() {
        return this._cost;
    }
    /**
     cost field
     */
    set cost(value) {
        this._cost = value;
    }
}
exports.Price = Price;
//# sourceMappingURL=Price.js.map