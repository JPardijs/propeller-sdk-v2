"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Valueset = void 0;
/**
 Object class for Valueset
 */
class Valueset {
    /**
     Creates a new instance of Valueset
     */
    constructor(data = {}) {
        this._id = data.id;
        this._name = data.name;
        this._type = data.type;
        this._descriptions = data.descriptions;
        this._lastModifiedBy = data.lastModifiedBy;
        this._lastModifiedAt = data.lastModifiedAt;
        this._createdBy = data.createdBy;
        this._createdAt = data.createdAt;
        this._valuesetItems = data.valuesetItems;
    }
    /**
     Valueset primary identifier
     */
    get id() {
        return this._id;
    }
    /**
     Valueset primary identifier
     */
    set id(value) {
        this._id = value;
    }
    /**
     Valueset name
     */
    get name() {
        return this._name;
    }
    /**
     Valueset name
     */
    set name(value) {
        this._name = value;
    }
    /**
     Valueset type
     */
    get type() {
        return this._type;
    }
    /**
     Valueset type
     */
    set type(value) {
        this._type = value;
    }
    /**
     descriptions field
     */
    get descriptions() {
        return this._descriptions;
    }
    /**
     descriptions field
     */
    set descriptions(value) {
        this._descriptions = value;
    }
    /**
     The userId of the user that changed the valueset
     */
    get lastModifiedBy() {
        return this._lastModifiedBy;
    }
    /**
     The userId of the user that changed the valueset
     */
    set lastModifiedBy(value) {
        this._lastModifiedBy = value;
    }
    /**
     Valueset last modified date
     */
    get lastModifiedAt() {
        return this._lastModifiedAt;
    }
    /**
     Valueset last modified date
     */
    set lastModifiedAt(value) {
        this._lastModifiedAt = value;
    }
    /**
     The userId of the user that created the valueset
     */
    get createdBy() {
        return this._createdBy;
    }
    /**
     The userId of the user that created the valueset
     */
    set createdBy(value) {
        this._createdBy = value;
    }
    /**
     Valueset creation date
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     Valueset creation date
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     valuesetItems field
     */
    get valuesetItems() {
        return this._valuesetItems;
    }
    /**
     valuesetItems field
     */
    set valuesetItems(value) {
        this._valuesetItems = value;
    }
}
exports.Valueset = Valueset;
//# sourceMappingURL=Valueset.js.map