"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductInventory = void 0;
/**
 Object class for ProductInventory
 */
class ProductInventory {
    /**
     Creates a new instance of ProductInventory
     */
    constructor(data = {}) {
        this._productId = data.productId;
        this._totalQuantity = data.totalQuantity;
        this._supplierQuantity = data.supplierQuantity;
        this._localQuantity = data.localQuantity;
        this._nextDeliveryDate = data.nextDeliveryDate;
        this._balance = data.balance;
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
     Total product quantity
     */
    get totalQuantity() {
        return this._totalQuantity;
    }
    /**
     Total product quantity
     */
    set totalQuantity(value) {
        this._totalQuantity = value;
    }
    /**
     Supplier product quantity
     */
    get supplierQuantity() {
        return this._supplierQuantity;
    }
    /**
     Supplier product quantity
     */
    set supplierQuantity(value) {
        this._supplierQuantity = value;
    }
    /**
     Local product quantity
     */
    get localQuantity() {
        return this._localQuantity;
    }
    /**
     Local product quantity
     */
    set localQuantity(value) {
        this._localQuantity = value;
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
     Inventory items
     */
    get balance() {
        return this._balance;
    }
    /**
     Inventory items
     */
    set balance(value) {
        this._balance = value;
    }
}
exports.ProductInventory = ProductInventory;
//# sourceMappingURL=ProductInventory.js.map