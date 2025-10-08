"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartVoucher = void 0;
/**
 Object class for CartVoucher
 */
class CartVoucher {
    /**
     Creates a new instance of CartVoucher
     */
    constructor(data = {}) {
        this._code = data.code;
        this._name = data.name;
        this._description = data.description;
        this._ruleId = data.ruleId;
        this._redeemed = data.redeemed;
        this._combinable = data.combinable;
        this._partialRedemption = data.partialRedemption;
        this._available = data.available;
        this._remaining = data.remaining;
    }
    /**
     Voucher code
     */
    get code() {
        return this._code;
    }
    /**
     Voucher code
     */
    set code(value) {
        this._code = value;
    }
    /**
     Name of the rule that generated this voucher
     */
    get name() {
        return this._name;
    }
    /**
     Name of the rule that generated this voucher
     */
    set name(value) {
        this._name = value;
    }
    /**
     Description of the rule that generated this voucher
     */
    get description() {
        return this._description;
    }
    /**
     Description of the rule that generated this voucher
     */
    set description(value) {
        this._description = value;
    }
    /**
     Id of the rule that generated this voucher
     */
    get ruleId() {
        return this._ruleId;
    }
    /**
     Id of the rule that generated this voucher
     */
    set ruleId(value) {
        this._ruleId = value;
    }
    /**
     Is this voucher already redeemed
     */
    get redeemed() {
        return this._redeemed;
    }
    /**
     Is this voucher already redeemed
     */
    set redeemed(value) {
        this._redeemed = value;
    }
    /**
     Can this voucher be combined with other vouchers
     */
    get combinable() {
        return this._combinable;
    }
    /**
     Can this voucher be combined with other vouchers
     */
    set combinable(value) {
        this._combinable = value;
    }
    /**
     Can this voucher be partially redeemed when type is a payable amount
     */
    get partialRedemption() {
        return this._partialRedemption;
    }
    /**
     Can this voucher be partially redeemed when type is a payable amount
     */
    set partialRedemption(value) {
        this._partialRedemption = value;
    }
    /**
     Available amount when the voucher represents a payable amount
     */
    get available() {
        return this._available;
    }
    /**
     Available amount when the voucher represents a payable amount
     */
    set available(value) {
        this._available = value;
    }
    /**
     Remaining amount when the voucher represent a payable amount and can be partially redeemed
     */
    get remaining() {
        return this._remaining;
    }
    /**
     Remaining amount when the voucher represent a payable amount and can be partially redeemed
     */
    set remaining(value) {
        this._remaining = value;
    }
}
exports.CartVoucher = CartVoucher;
//# sourceMappingURL=CartVoucher.js.map