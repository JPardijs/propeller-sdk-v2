"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkResponseData = void 0;
/**
 Object class for BulkResponseData
 */
class BulkResponseData {
    /**
     Creates a new instance of BulkResponseData
     */
    constructor(data = {}) {
        this._created = data.created;
        this._updated = data.updated;
        this._total = data.total;
    }
    /**
     Number of created items
     */
    get created() {
        return this._created;
    }
    /**
     Number of created items
     */
    set created(value) {
        this._created = value;
    }
    /**
     Number of updated items
     */
    get updated() {
        return this._updated;
    }
    /**
     Number of updated items
     */
    set updated(value) {
        this._updated = value;
    }
    /**
     Total number of created and updated items
     */
    get total() {
        return this._total;
    }
    /**
     Total number of created and updated items
     */
    set total(value) {
        this._total = value;
    }
}
exports.BulkResponseData = BulkResponseData;
//# sourceMappingURL=BulkResponseData.js.map