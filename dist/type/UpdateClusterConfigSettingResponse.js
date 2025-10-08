"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClusterConfigSettingResponse = void 0;
/**
 Object class for UpdateClusterConfigSettingResponse
 */
class UpdateClusterConfigSettingResponse {
    /**
     Creates a new instance of UpdateClusterConfigSettingResponse
     */
    constructor(data = {}) {
        this._id = data.id;
        this._displayType = data.displayType;
        this._priority = data.priority;
    }
    /**
     id field
     */
    get id() {
        return this._id;
    }
    /**
     id field
     */
    set id(value) {
        this._id = value;
    }
    /**
     displayType field
     */
    get displayType() {
        return this._displayType;
    }
    /**
     displayType field
     */
    set displayType(value) {
        this._displayType = value;
    }
    /**
     priority field
     */
    get priority() {
        return this._priority;
    }
    /**
     priority field
     */
    set priority(value) {
        this._priority = value;
    }
}
exports.UpdateClusterConfigSettingResponse = UpdateClusterConfigSettingResponse;
//# sourceMappingURL=UpdateClusterConfigSettingResponse.js.map