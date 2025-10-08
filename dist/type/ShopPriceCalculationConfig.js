"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopPriceCalculationConfig = void 0;
/**
 Object class for ShopPriceCalculationConfig
 */
class ShopPriceCalculationConfig {
    /**
     Creates a new instance of ShopPriceCalculationConfig
     */
    constructor(data = {}) {
        this._isVatIncludedLeading = data.isVatIncludedLeading;
        this._inheritCatalogDiscountOnPriceList = data.inheritCatalogDiscountOnPriceList;
        this._useMultipleCostprices = data.useMultipleCostprices;
        this._calculateDiscountOverBulkPrices = data.calculateDiscountOverBulkPrices;
    }
    /**
     isVatIncludedLeading field
     */
    get isVatIncludedLeading() {
        return this._isVatIncludedLeading;
    }
    /**
     isVatIncludedLeading field
     */
    set isVatIncludedLeading(value) {
        this._isVatIncludedLeading = value;
    }
    /**
     inheritCatalogDiscountOnPriceList field
     */
    get inheritCatalogDiscountOnPriceList() {
        return this._inheritCatalogDiscountOnPriceList;
    }
    /**
     inheritCatalogDiscountOnPriceList field
     */
    set inheritCatalogDiscountOnPriceList(value) {
        this._inheritCatalogDiscountOnPriceList = value;
    }
    /**
     useMultipleCostprices field
     */
    get useMultipleCostprices() {
        return this._useMultipleCostprices;
    }
    /**
     useMultipleCostprices field
     */
    set useMultipleCostprices(value) {
        this._useMultipleCostprices = value;
    }
    /**
     calculateDiscountOverBulkPrices field
     */
    get calculateDiscountOverBulkPrices() {
        return this._calculateDiscountOverBulkPrices;
    }
    /**
     calculateDiscountOverBulkPrices field
     */
    set calculateDiscountOverBulkPrices(value) {
        this._calculateDiscountOverBulkPrices = value;
    }
}
exports.ShopPriceCalculationConfig = ShopPriceCalculationConfig;
//# sourceMappingURL=ShopPriceCalculationConfig.js.map