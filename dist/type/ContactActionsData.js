"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactActionsData = void 0;
/**
 Object class for ContactActionsData
 */
class ContactActionsData {
    /**
     Creates a new instance of ContactActionsData
     */
    constructor(data = {}) {
        this._message = data.message;
        this._success = data.success;
        this._companyId = data.companyId;
    }
    /**
     Output message response [INFO/WARNING/ERROR]
     */
    get message() {
        return this._message;
    }
    /**
     Output message response [INFO/WARNING/ERROR]
     */
    set message(value) {
        this._message = value;
    }
    /**
     Success status
     */
    get success() {
        return this._success;
    }
    /**
     Success status
     */
    set success(value) {
        this._success = value;
    }
    /**
     Company ID the action was performed to
     */
    get companyId() {
        return this._companyId;
    }
    /**
     Company ID the action was performed to
     */
    set companyId(value) {
        this._companyId = value;
    }
}
exports.ContactActionsData = ContactActionsData;
//# sourceMappingURL=ContactActionsData.js.map