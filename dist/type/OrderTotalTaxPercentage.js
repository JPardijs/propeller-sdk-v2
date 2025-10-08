"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderTotalTaxPercentage = void 0;
/**
 Object class for OrderTotalTaxPercentage
 */
class OrderTotalTaxPercentage {
    /**
     Creates a new instance of OrderTotalTaxPercentage
     */
    constructor(data = {}) {
        this._percentage = data.percentage;
        this._total = data.total;
    }
    /**
     The tax percentage
     */
    get percentage() {
        return this._percentage;
    }
    /**
     The tax percentage
     */
    set percentage(value) {
        this._percentage = value;
    }
    /**
     The total for the tax percentage
     */
    get total() {
        return this._total;
    }
    /**
     The total for the tax percentage
     */
    set total(value) {
        this._total = value;
    }
}
exports.OrderTotalTaxPercentage = OrderTotalTaxPercentage;
//# sourceMappingURL=OrderTotalTaxPercentage.js.map