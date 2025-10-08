"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warehouse = void 0;
/**
 Object class for Warehouse
 */
class Warehouse {
    /**
     Creates a new instance of Warehouse
     */
    constructor(data = {}) {
        this._id = data.id;
        this._addressId = data.addressId;
        this._address = data.address;
        this._name = data.name;
        this._description = data.description;
        this._notes = data.notes;
        this._isActive = data.isActive;
        this._isStore = data.isStore;
        this._isPickupLocation = data.isPickupLocation;
        this._shopId = data.shopId;
        this._businessHours = data.businessHours;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
    }
    /**
     Warehouse primary identifier
     */
    get id() {
        return this._id;
    }
    /**
     Warehouse primary identifier
     */
    set id(value) {
        this._id = value;
    }
    /**
     Address identifier associated with the warehouse
     */
    get addressId() {
        return this._addressId;
    }
    /**
     Address identifier associated with the warehouse
     */
    set addressId(value) {
        this._addressId = value;
    }
    /**
     Warehouse Address
     */
    get address() {
        return this._address;
    }
    /**
     Warehouse Address
     */
    set address(value) {
        this._address = value;
    }
    /**
     Warehouse name
     */
    get name() {
        return this._name;
    }
    /**
     Warehouse name
     */
    set name(value) {
        this._name = value;
    }
    /**
     Warehouse description
     */
    get description() {
        return this._description;
    }
    /**
     Warehouse description
     */
    set description(value) {
        this._description = value;
    }
    /**
     Warehouse notes
     */
    get notes() {
        return this._notes;
    }
    /**
     Warehouse notes
     */
    set notes(value) {
        this._notes = value;
    }
    /**
     Warehouse isActive status
     */
    get isActive() {
        return this._isActive;
    }
    /**
     Warehouse isActive status
     */
    set isActive(value) {
        this._isActive = value;
    }
    /**
     Warehouse isStore status
     */
    get isStore() {
        return this._isStore;
    }
    /**
     Warehouse isStore status
     */
    set isStore(value) {
        this._isStore = value;
    }
    /**
     Warehouse isPickupLocation status
     */
    get isPickupLocation() {
        return this._isPickupLocation;
    }
    /**
     Warehouse isPickupLocation status
     */
    set isPickupLocation(value) {
        this._isPickupLocation = value;
    }
    /**
     Optional warehouse shopId
     */
    get shopId() {
        return this._shopId;
    }
    /**
     Optional warehouse shopId
     */
    set shopId(value) {
        this._shopId = value;
    }
    /**
     Warehouse business hours per week day
     */
    get businessHours() {
        return this._businessHours;
    }
    /**
     Warehouse business hours per week day
     */
    set businessHours(value) {
        this._businessHours = value;
    }
    /**
     Warehouse initial creation timestamp
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     Warehouse initial creation timestamp
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     Warehouse last update timestamp
     */
    get lastModifiedAt() {
        return this._lastModifiedAt;
    }
    /**
     Warehouse last update timestamp
     */
    set lastModifiedAt(value) {
        this._lastModifiedAt = value;
    }
}
exports.Warehouse = Warehouse;
//# sourceMappingURL=Warehouse.js.map