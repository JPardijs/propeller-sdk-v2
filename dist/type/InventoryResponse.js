"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryResponse = void 0;
/**
 Object class for InventoryResponse
 */
class InventoryResponse {
    /**
     Creates a new instance of InventoryResponse
     */
    constructor(data = {}) {
        this._id = data.id;
        this._productId = data.productId;
        this._quantity = data.quantity;
        this._costPrice = data.costPrice;
        this._supplier = data.supplier;
        this._supplierCode = data.supplierCode;
        this._sku = data.sku;
        this._dateModified = data.dateModified;
        this._warehouseId = data.warehouseId;
        this._location = data.location;
        this._nextDeliveryDate = data.nextDeliveryDate;
        this._notes = data.notes;
        this._messages = data.messages;
        this._total = data.total;
        this._warehouse = data.warehouse;
    }
    /**
     Inventory primary identifier
     */
    get id() {
        return this._id;
    }
    /**
     Inventory primary identifier
     */
    set id(value) {
        this._id = value;
    }
    /**
     Inventory product identifier
     */
    get productId() {
        return this._productId;
    }
    /**
     Inventory product identifier
     */
    set productId(value) {
        this._productId = value;
    }
    /**
     Inventory quantity
     */
    get quantity() {
        return this._quantity;
    }
    /**
     Inventory quantity
     */
    set quantity(value) {
        this._quantity = value;
    }
    /**
     Inventory cost price
     */
    get costPrice() {
        return this._costPrice;
    }
    /**
     Inventory cost price
     */
    set costPrice(value) {
        this._costPrice = value;
    }
    /**
     Inventory supplier
     */
    get supplier() {
        return this._supplier;
    }
    /**
     Inventory supplier
     */
    set supplier(value) {
        this._supplier = value;
    }
    /**
     Inventory supplier code
     */
    get supplierCode() {
        return this._supplierCode;
    }
    /**
     Inventory supplier code
     */
    set supplierCode(value) {
        this._supplierCode = value;
    }
    /**
     Inventory sku
     */
    get sku() {
        return this._sku;
    }
    /**
     Inventory sku
     */
    set sku(value) {
        this._sku = value;
    }
    /**
     Inventory last modified date
     */
    get dateModified() {
        return this._dateModified;
    }
    /**
     Inventory last modified date
     */
    set dateModified(value) {
        this._dateModified = value;
    }
    /**
     Inventory warehouse identifier
     */
    get warehouseId() {
        return this._warehouseId;
    }
    /**
     Inventory warehouse identifier
     */
    set warehouseId(value) {
        this._warehouseId = value;
    }
    /**
     Inventory location
     */
    get location() {
        return this._location;
    }
    /**
     Inventory location
     */
    set location(value) {
        this._location = value;
    }
    /**
     Inventory estimated next delivery date
     */
    get nextDeliveryDate() {
        return this._nextDeliveryDate;
    }
    /**
     Inventory estimated next delivery date
     */
    set nextDeliveryDate(value) {
        this._nextDeliveryDate = value;
    }
    /**
     Inventory note
     */
    get notes() {
        return this._notes;
    }
    /**
     Inventory note
     */
    set notes(value) {
        this._notes = value;
    }
    /**
     Error messages
     */
    get messages() {
        return this._messages;
    }
    /**
     Error messages
     */
    set messages(value) {
        this._messages = value;
    }
    /**
     Total
     */
    get total() {
        return this._total;
    }
    /**
     Total
     */
    set total(value) {
        this._total = value;
    }
    /**
     warehouse field
     */
    get warehouse() {
        return this._warehouse;
    }
    /**
     warehouse field
     */
    set warehouse(value) {
        this._warehouse = value;
    }
}
exports.InventoryResponse = InventoryResponse;
//# sourceMappingURL=InventoryResponse.js.map