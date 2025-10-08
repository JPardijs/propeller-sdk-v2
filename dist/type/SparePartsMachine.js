"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SparePartsMachine = void 0;
/**
 Object class for SparePartsMachine
 */
class SparePartsMachine {
    /**
     Creates a new instance of SparePartsMachine
     */
    constructor(data = {}) {
        this._id = data.id;
        this._parts = data.parts;
        this._media = data.media;
        this._sparePartProducts = data.sparePartProducts;
        this._name = data.name;
        this._description = data.description;
        this._slug = data.slug;
        this._machines = data.machines;
    }
    /**
     The unique identifier for this Machine
     */
    get id() {
        return this._id;
    }
    /**
     The unique identifier for this Machine
     */
    set id(value) {
        this._id = value;
    }
    /**
     parts field
     */
    get parts() {
        return this._parts;
    }
    /**
     parts field
     */
    set parts(value) {
        this._parts = value;
    }
    /**
     media field
     */
    get media() {
        return this._media;
    }
    /**
     media field
     */
    set media(value) {
        this._media = value;
    }
    /**
     sparePartProducts field
     */
    get sparePartProducts() {
        return this._sparePartProducts;
    }
    /**
     sparePartProducts field
     */
    set sparePartProducts(value) {
        this._sparePartProducts = value;
    }
    /**
     List of localized names for this Machine
     */
    get name() {
        return this._name;
    }
    /**
     List of localized names for this Machine
     */
    set name(value) {
        this._name = value;
    }
    /**
     description field
     */
    get description() {
        return this._description;
    }
    /**
     description field
     */
    set description(value) {
        this._description = value;
    }
    /**
     slug field
     */
    get slug() {
        return this._slug;
    }
    /**
     slug field
     */
    set slug(value) {
        this._slug = value;
    }
    /**
     machines field
     */
    get machines() {
        return this._machines;
    }
    /**
     machines field
     */
    set machines(value) {
        this._machines = value;
    }
}
exports.SparePartsMachine = SparePartsMachine;
//# sourceMappingURL=SparePartsMachine.js.map