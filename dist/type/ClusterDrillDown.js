"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterDrillDown = void 0;
/**
 Object class for ClusterDrillDown
 */
class ClusterDrillDown {
    /**
     Creates a new instance of ClusterDrillDown
     */
    constructor(data = {}) {
        this._attributeId = data.attributeId;
        this._priority = data.priority;
        this._displayType = data.displayType;
    }
    /**
     The id of the Attribute to create the drilldown matrix for
     */
    get attributeId() {
        return this._attributeId;
    }
    /**
     The id of the Attribute to create the drilldown matrix for
     */
    set attributeId(value) {
        this._attributeId = value;
    }
    /**
     The order in which the drilldown should be generated
     */
    get priority() {
        return this._priority;
    }
    /**
     The order in which the drilldown should be generated
     */
    set priority(value) {
        this._priority = value;
    }
    /**
     Indicator how to display the current drilldown selection
     */
    get displayType() {
        return this._displayType;
    }
    /**
     Indicator how to display the current drilldown selection
     */
    set displayType(value) {
        this._displayType = value;
    }
}
exports.ClusterDrillDown = ClusterDrillDown;
//# sourceMappingURL=ClusterDrillDown.js.map