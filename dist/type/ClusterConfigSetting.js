"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterConfigSetting = void 0;
/**
 Object class for ClusterConfigSetting
 */
class ClusterConfigSetting {
    /**
     Creates a new instance of ClusterConfigSetting
     */
    constructor(data = {}) {
        this._id = data.id;
        this._name = data.name;
        this._type = data.type;
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
     name field
     */
    get name() {
        return this._name;
    }
    /**
     name field
     */
    set name(value) {
        this._name = value;
    }
    /**
     type field
     */
    get type() {
        return this._type;
    }
    /**
     type field
     */
    set type(value) {
        this._type = value;
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
exports.ClusterConfigSetting = ClusterConfigSetting;
//# sourceMappingURL=ClusterConfigSetting.js.map