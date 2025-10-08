"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenderTaxLevel = void 0;
/**
 Object class for TenderTaxLevel
 */
class TenderTaxLevel {
    /**
     Creates a new instance of TenderTaxLevel
     */
    constructor(data = {}) {
        this._percentage = data.percentage;
        this._total = data.total;
        this._tax = data.tax;
        this._discount = data.discount;
    }
    /**
     percentage field
     */
    get percentage() {
        return this._percentage;
    }
    /**
     percentage field
     */
    set percentage(value) {
        this._percentage = value;
    }
    /**
     total field
     */
    get total() {
        return this._total;
    }
    /**
     total field
     */
    set total(value) {
        this._total = value;
    }
    /**
     tax field
     */
    get tax() {
        return this._tax;
    }
    /**
     tax field
     */
    set tax(value) {
        this._tax = value;
    }
    /**
     discount field
     */
    get discount() {
        return this._discount;
    }
    /**
     discount field
     */
    set discount(value) {
        this._discount = value;
    }
}
exports.TenderTaxLevel = TenderTaxLevel;
//# sourceMappingURL=TenderTaxLevel.js.map