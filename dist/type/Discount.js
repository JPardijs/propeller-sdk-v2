"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Discount = void 0;
/**
 Object class for Discount
 */
class Discount {
    /**
     Creates a new instance of Discount
     */
    constructor(data = {}) {
        this._categoryId = data.categoryId;
        this._category = data.category;
        this._id = data.id;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._value = data.value;
        this._quantityFrom = data.quantityFrom;
        this._validFrom = data.validFrom;
        this._validTo = data.validTo;
        this._pricesheetId = data.pricesheetId;
        this._productId = data.productId;
        this._priceGroup = data.priceGroup;
        this._discountType = data.discountType;
        this._pricesheet = data.pricesheet;
        this._product = data.product;
    }
    /**
     Category Id
     */
    get categoryId() {
        return this._categoryId;
    }
    /**
     Category Id
     */
    set categoryId(value) {
        this._categoryId = value;
    }
    /**
     category field
     */
    get category() {
        return this._category;
    }
    /**
     category field
     */
    set category(value) {
        this._category = value;
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
     Discount value, either percentage or fixed amount
     */
    get value() {
        return this._value;
    }
    /**
     Discount value, either percentage or fixed amount
     */
    set value(value) {
        this._value = value;
    }
    /**
     Indicates the minimum quantity threshold needed to qualify for the bulk price.
     */
    get quantityFrom() {
        return this._quantityFrom;
    }
    /**
     Indicates the minimum quantity threshold needed to qualify for the bulk price.
     */
    set quantityFrom(value) {
        this._quantityFrom = value;
    }
    /**
     Start date from which the bulk pricing is effective. Must be a valid ISO 8601 date string.
     */
    get validFrom() {
        return this._validFrom;
    }
    /**
     Start date from which the bulk pricing is effective. Must be a valid ISO 8601 date string.
     */
    set validFrom(value) {
        this._validFrom = value;
    }
    /**
     End date of the bulk pricing offer. Must be a valid ISO 8601 date string.
     */
    get validTo() {
        return this._validTo;
    }
    /**
     End date of the bulk pricing offer. Must be a valid ISO 8601 date string.
     */
    set validTo(value) {
        this._validTo = value;
    }
    /**
     pricesheet foreign identifier
     */
    get pricesheetId() {
        return this._pricesheetId;
    }
    /**
     pricesheet foreign identifier
     */
    set pricesheetId(value) {
        this._pricesheetId = value;
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
     Price group
     */
    get priceGroup() {
        return this._priceGroup;
    }
    /**
     Price group
     */
    set priceGroup(value) {
        this._priceGroup = value;
    }
    /**
     The method used to apply discounts for bulk prices / volume discounts.
     */
    get discountType() {
        return this._discountType;
    }
    /**
     The method used to apply discounts for bulk prices / volume discounts.
     */
    set discountType(value) {
        this._discountType = value;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get pricesheet() {
        return this._pricesheet;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set pricesheet(value) {
        this._pricesheet = value;
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
exports.Discount = Discount;
//# sourceMappingURL=Discount.js.map