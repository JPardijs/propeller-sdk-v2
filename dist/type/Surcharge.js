"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Surcharge = void 0;
/**
 Additional fee or charge applied to products or orders
 * Surcharges represent extra costs such as handling fees, special processing charges, or additional services that are applied to pricing calculations. They can be configured as flat fees or percentage-based charges with specific tax treatments and validity periods.
 */
class Surcharge {
    /**
     Creates a new instance of Surcharge
     */
    constructor(data = {}) {
        this._id = data.id;
        this._name = data.name;
        this._description = data.description;
        this._type = data.type;
        this._value = data.value;
        this._taxCode = data.taxCode;
        this._taxZone = data.taxZone;
        this._enabled = data.enabled;
        this._validFrom = data.validFrom;
        this._validTo = data.validTo;
        this._createdBy = data.createdBy;
        this._changedBy = data.changedBy;
        this._dateCreated = data.dateCreated;
        this._dateChanged = data.dateChanged;
        this._shopId = data.shopId;
    }
    /**
     Unique identifier for the surcharge
     */
    get id() {
        return this._id;
    }
    /**
     Unique identifier for the surcharge
     */
    set id(value) {
        this._id = value;
    }
    /**
     A descriptive name for the surcharge
     */
    get name() {
        return this._name;
    }
    /**
     A descriptive name for the surcharge
     */
    set name(value) {
        this._name = value;
    }
    /**
     A brief description of the surcharge
     */
    get description() {
        return this._description;
    }
    /**
     A brief description of the surcharge
     */
    set description(value) {
        this._description = value;
    }
    /**
     Type of surcharge
     */
    get type() {
        return this._type;
    }
    /**
     Type of surcharge
     */
    set type(value) {
        this._type = value;
    }
    /**
     The value to be applied as surcharge (e.g., percentage or amount)
     */
    get value() {
        return this._value;
    }
    /**
     The value to be applied as surcharge (e.g., percentage or amount)
     */
    set value(value) {
        this._value = value;
    }
    /**
     Tax code
     */
    get taxCode() {
        return this._taxCode;
    }
    /**
     Tax code
     */
    set taxCode(value) {
        this._taxCode = value;
    }
    /**
     Tax zone
     */
    get taxZone() {
        return this._taxZone;
    }
    /**
     Tax zone
     */
    set taxZone(value) {
        this._taxZone = value;
    }
    /**
     Indicates whether the surcharge is active or not
     */
    get enabled() {
        return this._enabled;
    }
    /**
     Indicates whether the surcharge is active or not
     */
    set enabled(value) {
        this._enabled = value;
    }
    /**
     The date and time the surcharge is valid from
     */
    get validFrom() {
        return this._validFrom;
    }
    /**
     The date and time the surcharge is valid from
     */
    set validFrom(value) {
        this._validFrom = value;
    }
    /**
     The date and time the surcharge is valid to
     */
    get validTo() {
        return this._validTo;
    }
    /**
     The date and time the surcharge is valid to
     */
    set validTo(value) {
        this._validTo = value;
    }
    /**
     The userId of the user that created the surcharge
     */
    get createdBy() {
        return this._createdBy;
    }
    /**
     The userId of the user that created the surcharge
     */
    set createdBy(value) {
        this._createdBy = value;
    }
    /**
     The userId of the user that changed the surcharge
     */
    get changedBy() {
        return this._changedBy;
    }
    /**
     The userId of the user that changed the surcharge
     */
    set changedBy(value) {
        this._changedBy = value;
    }
    /**
     The date and time the surcharge is created
     */
    get dateCreated() {
        return this._dateCreated;
    }
    /**
     The date and time the surcharge is created
     */
    set dateCreated(value) {
        this._dateCreated = value;
    }
    /**
     The date and time the surcharge is changed
     */
    get dateChanged() {
        return this._dateChanged;
    }
    /**
     The date and time the surcharge is changed
     */
    set dateChanged(value) {
        this._dateChanged = value;
    }
    /**
     Shop identifier for the tax to apply to... If not provided the default will be inferred from the channel
     */
    get shopId() {
        return this._shopId;
    }
    /**
     Shop identifier for the tax to apply to... If not provided the default will be inferred from the channel
     */
    set shopId(value) {
        this._shopId = value;
    }
}
exports.Surcharge = Surcharge;
//# sourceMappingURL=Surcharge.js.map