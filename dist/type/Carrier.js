"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carrier = void 0;
/**
 Object class for Carrier
 */
class Carrier {
    /**
     Creates a new instance of Carrier
     */
    constructor(data = {}) {
        this._id = data.id;
        this._name = data.name;
        this._type = data.type;
        this._descriptions = data.descriptions;
        this._shippingCost = data.shippingCost;
        this._trackAndTraceURL = data.trackAndTraceURL;
        this._logo = data.logo;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._createdBy = data.createdBy;
        this._lastModifiedBy = data.lastModifiedBy;
        this._trackAndTraces = data.trackAndTraces;
        this._warehouses = data.warehouses;
    }
    /**
     Carrier primary identifier
     */
    get id() {
        return this._id;
    }
    /**
     Carrier primary identifier
     */
    set id(value) {
        this._id = value;
    }
    /**
     Carrier name
     */
    get name() {
        return this._name;
    }
    /**
     Carrier name
     */
    set name(value) {
        this._name = value;
    }
    /**
     Carrier type
     */
    get type() {
        return this._type;
    }
    /**
     Carrier type
     */
    set type(value) {
        this._type = value;
    }
    /**
     Carrier description per language
     */
    get descriptions() {
        return this._descriptions;
    }
    /**
     Carrier description per language
     */
    set descriptions(value) {
        this._descriptions = value;
    }
    /**
     shippingCost field
     */
    get shippingCost() {
        return this._shippingCost;
    }
    /**
     shippingCost field
     */
    set shippingCost(value) {
        this._shippingCost = value;
    }
    /**
     Track and Trace redirect URL
     */
    get trackAndTraceURL() {
        return this._trackAndTraceURL;
    }
    /**
     Track and Trace redirect URL
     */
    set trackAndTraceURL(value) {
        this._trackAndTraceURL = value;
    }
    /**
     Logo url
     */
    get logo() {
        return this._logo;
    }
    /**
     Logo url
     */
    set logo(value) {
        this._logo = value;
    }
    /**
     Carrier creation date
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     Carrier creation date
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     Carrier last modified date
     */
    get lastModifiedAt() {
        return this._lastModifiedAt;
    }
    /**
     Carrier last modified date
     */
    set lastModifiedAt(value) {
        this._lastModifiedAt = value;
    }
    /**
     The userId of the user that created the carrier
     */
    get createdBy() {
        return this._createdBy;
    }
    /**
     The userId of the user that created the carrier
     */
    set createdBy(value) {
        this._createdBy = value;
    }
    /**
     The userId of the user that last modified the carrier
     */
    get lastModifiedBy() {
        return this._lastModifiedBy;
    }
    /**
     The userId of the user that last modified the carrier
     */
    set lastModifiedBy(value) {
        this._lastModifiedBy = value;
    }
    /**
     Get all track and traces for a carrier
     */
    get trackAndTraces() {
        return this._trackAndTraces;
    }
    /**
     Get all track and traces for a carrier
     */
    set trackAndTraces(value) {
        this._trackAndTraces = value;
    }
    /**
     warehouses field
     */
    get warehouses() {
        return this._warehouses;
    }
    /**
     warehouses field
     */
    set warehouses(value) {
        this._warehouses = value;
    }
}
exports.Carrier = Carrier;
//# sourceMappingURL=Carrier.js.map