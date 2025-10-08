"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterConfigSettingResponse = void 0;
/**
 Object class for ClusterConfigSettingResponse
 */
class ClusterConfigSettingResponse {
    /**
     Creates a new instance of ClusterConfigSettingResponse
     */
    constructor(data = {}) {
        this._id = data.id;
        this._attributeName = data.attributeName;
        this._displayType = data.displayType;
        this._priority = data.priority;
        this._clusterConfigId = data.clusterConfigId;
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
     attributeName field
     */
    get attributeName() {
        return this._attributeName;
    }
    /**
     attributeName field
     */
    set attributeName(value) {
        this._attributeName = value;
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
    /**
     clusterConfigId field
     */
    get clusterConfigId() {
        return this._clusterConfigId;
    }
    /**
     clusterConfigId field
     */
    set clusterConfigId(value) {
        this._clusterConfigId = value;
    }
}
exports.ClusterConfigSettingResponse = ClusterConfigSettingResponse;
//# sourceMappingURL=ClusterConfigSettingResponse.js.map