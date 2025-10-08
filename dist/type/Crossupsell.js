"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crossupsell = void 0;
/**
 Object class for Crossupsell
 */
class Crossupsell {
    /**
     Creates a new instance of Crossupsell
     */
    constructor(data = {}) {
        this._id = data.id;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._type = data.type;
        this._subType = data.subType;
        this._productTo = data.productTo;
        this._productFrom = data.productFrom;
        this._clusterTo = data.clusterTo;
        this._clusterFrom = data.clusterFrom;
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
     Cross/Upsell type
     */
    get type() {
        return this._type;
    }
    /**
     Cross/Upsell type
     */
    set type(value) {
        this._type = value;
    }
    /**
     Cross/Up Sell subtype
     */
    get subType() {
        return this._subType;
    }
    /**
     Cross/Up Sell subtype
     */
    set subType(value) {
        this._subType = value;
    }
    /**
     productTo field
     */
    get productTo() {
        return this._productTo;
    }
    /**
     productTo field
     */
    set productTo(value) {
        this._productTo = value;
    }
    /**
     productFrom field
     */
    get productFrom() {
        return this._productFrom;
    }
    /**
     productFrom field
     */
    set productFrom(value) {
        this._productFrom = value;
    }
    /**
     clusterTo field
     */
    get clusterTo() {
        return this._clusterTo;
    }
    /**
     clusterTo field
     */
    set clusterTo(value) {
        this._clusterTo = value;
    }
    /**
     clusterFrom field
     */
    get clusterFrom() {
        return this._clusterFrom;
    }
    /**
     clusterFrom field
     */
    set clusterFrom(value) {
        this._clusterFrom = value;
    }
}
exports.Crossupsell = Crossupsell;
//# sourceMappingURL=Crossupsell.js.map