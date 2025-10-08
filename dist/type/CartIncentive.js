"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartIncentive = void 0;
/**
 Object class for CartIncentive
 */
class CartIncentive {
    /**
     Creates a new instance of CartIncentive
     */
    constructor(data = {}) {
        this._name = data.name;
        this._action = data.action;
        this._affectedItems = data.affectedItems;
        this._params = data.params;
    }
    /**
     Incentive name
     */
    get name() {
        return this._name;
    }
    /**
     Incentive name
     */
    set name(value) {
        this._name = value;
    }
    /**
     Incentive action
     */
    get action() {
        return this._action;
    }
    /**
     Incentive action
     */
    set action(value) {
        this._action = value;
    }
    /**
     List of affected items
     */
    get affectedItems() {
        return this._affectedItems;
    }
    /**
     List of affected items
     */
    set affectedItems(value) {
        this._affectedItems = value;
    }
    /**
     Incentive parameters
     */
    get params() {
        return this._params;
    }
    /**
     Incentive parameters
     */
    set params(value) {
        this._params = value;
    }
}
exports.CartIncentive = CartIncentive;
//# sourceMappingURL=CartIncentive.js.map