"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCIPMetadata = void 0;
/**
 Object class for GCIPMetadata
 */
class GCIPMetadata {
    /**
     Creates a new instance of GCIPMetadata
     */
    constructor(data = {}) {
        this._lastSignInTime = data.lastSignInTime;
        this._creationTime = data.creationTime;
        this._lastRefreshTime = data.lastRefreshTime;
    }
    /**
     lastSignInTime field
     */
    get lastSignInTime() {
        return this._lastSignInTime;
    }
    /**
     lastSignInTime field
     */
    set lastSignInTime(value) {
        this._lastSignInTime = value;
    }
    /**
     creationTime field
     */
    get creationTime() {
        return this._creationTime;
    }
    /**
     creationTime field
     */
    set creationTime(value) {
        this._creationTime = value;
    }
    /**
     lastRefreshTime field
     */
    get lastRefreshTime() {
        return this._lastRefreshTime;
    }
    /**
     lastRefreshTime field
     */
    set lastRefreshTime(value) {
        this._lastRefreshTime = value;
    }
}
exports.GCIPMetadata = GCIPMetadata;
//# sourceMappingURL=GCIPMetadata.js.map