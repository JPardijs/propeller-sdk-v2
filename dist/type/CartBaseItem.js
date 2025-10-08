"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartBaseItem = void 0;
/**
 Object class for CartBaseItem
 */
class CartBaseItem {
    /**
     Creates a new instance of CartBaseItem
     */
    constructor(data = {}) {
        this._itemId = data.itemId;
        this._parentItemUUID = data.parentItemUUID;
        this._notes = data.notes;
        this._price = data.price;
        this._priceNet = data.priceNet;
        this._priceMode = data.priceMode;
        this._totalPrice = data.totalPrice;
        this._totalPriceNet = data.totalPriceNet;
        this._sum = data.sum;
        this._sumNet = data.sumNet;
        this._totalSum = data.totalSum;
        this._totalSumNet = data.totalSumNet;
        this._quantity = data.quantity;
        this._bundleId = data.bundleId;
        this._clusterId = data.clusterId;
        this._productId = data.productId;
        this._taxCode = data.taxCode;
        this._deliveryDate = data.deliveryDate;
        this._deliveryDeadline = data.deliveryDeadline;
        this._discount = data.discount;
        this._discountPercentage = data.discountPercentage;
        this._surcharges = data.surcharges;
        this._incentive = data.incentive;
        this._product = data.product;
    }
    /**
     Item ID of the cart item, this id can be used for update or delete mutation for this cart item.
     */
    get itemId() {
        return this._itemId;
    }
    /**
     Item ID of the cart item, this id can be used for update or delete mutation for this cart item.
     */
    set itemId(value) {
        this._itemId = value;
    }
    /**
     Id of the parent cart item.
     */
    get parentItemUUID() {
        return this._parentItemUUID;
    }
    /**
     Id of the parent cart item.
     */
    set parentItemUUID(value) {
        this._parentItemUUID = value;
    }
    /**
     User notes on cart item level
     */
    get notes() {
        return this._notes;
    }
    /**
     User notes on cart item level
     */
    set notes(value) {
        this._notes = value;
    }
    /**
     Gross price per UOM of this cart item, no item specific discounts are applied to this price.
     */
    get price() {
        return this._price;
    }
    /**
     Gross price per UOM of this cart item, no item specific discounts are applied to this price.
     */
    set price(value) {
        this._price = value;
    }
    /**
     Net price per UOM of this cart item, no item specific discounts are applied to this price.
     */
    get priceNet() {
        return this._priceNet;
    }
    /**
     Net price per UOM of this cart item, no item specific discounts are applied to this price.
     */
    set priceNet(value) {
        this._priceNet = value;
    }
    /**
     Price mode for this cart item, if not set the platform default will be used.
     */
    get priceMode() {
        return this._priceMode;
    }
    /**
     Price mode for this cart item, if not set the platform default will be used.
     */
    set priceMode(value) {
        this._priceMode = value;
    }
    /**
     Total gross price for this cart item, including item specific discounts.
     */
    get totalPrice() {
        return this._totalPrice;
    }
    /**
     Total gross price for this cart item, including item specific discounts.
     */
    set totalPrice(value) {
        this._totalPrice = value;
    }
    /**
     Total net price for this cart item, including item specific discounts.
     */
    get totalPriceNet() {
        return this._totalPriceNet;
    }
    /**
     Total net price for this cart item, including item specific discounts.
     */
    set totalPriceNet(value) {
        this._totalPriceNet = value;
    }
    /**
     Gross sum of the main cart price and the prices of its child items per UOM. No item specific discounts are applied to this price.
     */
    get sum() {
        return this._sum;
    }
    /**
     Gross sum of the main cart price and the prices of its child items per UOM. No item specific discounts are applied to this price.
     */
    set sum(value) {
        this._sum = value;
    }
    /**
     Net sum of the main cart price and the prices of its child items per UOM. No item specific discounts are applied to this price.
     */
    get sumNet() {
        return this._sumNet;
    }
    /**
     Net sum of the main cart price and the prices of its child items per UOM. No item specific discounts are applied to this price.
     */
    set sumNet(value) {
        this._sumNet = value;
    }
    /**
     Total gross sum of the main cart price and the prices of its child items. Including item specific discounts.
     */
    get totalSum() {
        return this._totalSum;
    }
    /**
     Total gross sum of the main cart price and the prices of its child items. Including item specific discounts.
     */
    set totalSum(value) {
        this._totalSum = value;
    }
    /**
     Total net sum of the main cart price and the prices of its child items. Including item specific discounts.
     */
    get totalSumNet() {
        return this._totalSumNet;
    }
    /**
     Total net sum of the main cart price and the prices of its child items. Including item specific discounts.
     */
    set totalSumNet(value) {
        this._totalSumNet = value;
    }
    /**
     Quantity for this cart item
     */
    get quantity() {
        return this._quantity;
    }
    /**
     Quantity for this cart item
     */
    set quantity(value) {
        this._quantity = value;
    }
    /**
     Cart item's bundleId if applicable
     */
    get bundleId() {
        return this._bundleId;
    }
    /**
     Cart item's bundleId if applicable
     */
    set bundleId(value) {
        this._bundleId = value;
    }
    /**
     Cart item's clusterId if applicable
     */
    get clusterId() {
        return this._clusterId;
    }
    /**
     Cart item's clusterId if applicable
     */
    set clusterId(value) {
        this._clusterId = value;
    }
    /**
     Cart item's productId if applicable
     */
    get productId() {
        return this._productId;
    }
    /**
     Cart item's productId if applicable
     */
    set productId(value) {
        this._productId = value;
    }
    /**
     Tax code for this cart item.
     */
    get taxCode() {
        return this._taxCode;
    }
    /**
     Tax code for this cart item.
     */
    set taxCode(value) {
        this._taxCode = value;
    }
    /**
     Expected delivery date for this cart item.
     */
    get deliveryDate() {
        return this._deliveryDate;
    }
    /**
     Expected delivery date for this cart item.
     */
    set deliveryDate(value) {
        this._deliveryDate = value;
    }
    /**
     Deadline for delivery of this cart item.
     */
    get deliveryDeadline() {
        return this._deliveryDeadline;
    }
    /**
     Deadline for delivery of this cart item.
     */
    set deliveryDeadline(value) {
        this._deliveryDeadline = value;
    }
    /**
     Discount applied to this cart item
     */
    get discount() {
        return this._discount;
    }
    /**
     Discount applied to this cart item
     */
    set discount(value) {
        this._discount = value;
    }
    /**
     Discount percentage applied to this cart item
     */
    get discountPercentage() {
        return this._discountPercentage;
    }
    /**
     Discount percentage applied to this cart item
     */
    set discountPercentage(value) {
        this._discountPercentage = value;
    }
    /**
     List of surcharges for this cart item
     */
    get surcharges() {
        return this._surcharges;
    }
    /**
     List of surcharges for this cart item
     */
    set surcharges(value) {
        this._surcharges = value;
    }
    /**
     Incentive that applied to this cart item
     */
    get incentive() {
        return this._incentive;
    }
    /**
     Incentive that applied to this cart item
     */
    set incentive(value) {
        this._incentive = value;
    }
    /**
     product field
     */
    get product() {
        return this._product;
    }
    /**
     product field
     */
    set product(value) {
        this._product = value;
    }
}
exports.CartBaseItem = CartBaseItem;
//# sourceMappingURL=CartBaseItem.js.map