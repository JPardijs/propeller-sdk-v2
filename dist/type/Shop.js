"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = void 0;
/**
 Object class for Shop
 */
class Shop {
    /**
     Creates a new instance of Shop
     */
    constructor(data = {}) {
        this._shopId = data.shopId;
        this._name = data.name;
        this._purchaseRootId = data.purchaseRootId;
        this._userRootId = data.userRootId;
        this._enableIncentives = data.enableIncentives;
        this._priceCalculationConfig = data.priceCalculationConfig;
        this._debtorId = data.debtorId;
        this._cocNumber = data.cocNumber;
        this._taxNumber = data.taxNumber;
    }
    /**
     shopId field
     */
    get shopId() {
        return this._shopId;
    }
    /**
     shopId field
     */
    set shopId(value) {
        this._shopId = value;
    }
    /**
     name field
     */
    get name() {
        return this._name;
    }
    /**
     name field
     */
    set name(value) {
        this._name = value;
    }
    /**
     Shop purchase root id
     */
    get purchaseRootId() {
        return this._purchaseRootId;
    }
    /**
     Shop purchase root id
     */
    set purchaseRootId(value) {
        this._purchaseRootId = value;
    }
    /**
     Shop customer root id
     */
    get userRootId() {
        return this._userRootId;
    }
    /**
     Shop customer root id
     */
    set userRootId(value) {
        this._userRootId = value;
    }
    /**
     enableIncentives field
     */
    get enableIncentives() {
        return this._enableIncentives;
    }
    /**
     enableIncentives field
     */
    set enableIncentives(value) {
        this._enableIncentives = value;
    }
    /**
     Shop price calculation configuration
     */
    get priceCalculationConfig() {
        return this._priceCalculationConfig;
    }
    /**
     Shop price calculation configuration
     */
    set priceCalculationConfig(value) {
        this._priceCalculationConfig = value;
    }
    /**
     debtorId field
     */
    get debtorId() {
        return this._debtorId;
    }
    /**
     debtorId field
     */
    set debtorId(value) {
        this._debtorId = value;
    }
    /**
     cocNumber field
     */
    get cocNumber() {
        return this._cocNumber;
    }
    /**
     cocNumber field
     */
    set cocNumber(value) {
        this._cocNumber = value;
    }
    /**
     taxNumber field
     */
    get taxNumber() {
        return this._taxNumber;
    }
    /**
     taxNumber field
     */
    set taxNumber(value) {
        this._taxNumber = value;
    }
}
exports.Shop = Shop;
//# sourceMappingURL=Shop.js.map