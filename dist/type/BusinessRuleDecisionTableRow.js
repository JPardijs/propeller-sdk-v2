"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessRuleDecisionTableRow = void 0;
/**
 Represents a single row in a business rule decision table.
 */
class BusinessRuleDecisionTableRow {
    /**
     Creates a new instance of BusinessRuleDecisionTableRow
     */
    constructor(data = {}) {
        this._id = data.id;
        this._inputs = data.inputs;
        this._outputs = data.outputs;
    }
    /**
     The generated ID for the row
     */
    get id() {
        return this._id;
    }
    /**
     The generated ID for the row
     */
    set id(value) {
        this._id = value;
    }
    /**
     The row's input columns
     */
    get inputs() {
        return this._inputs;
    }
    /**
     The row's input columns
     */
    set inputs(value) {
        this._inputs = value;
    }
    /**
     The row's output columns
     */
    get outputs() {
        return this._outputs;
    }
    /**
     The row's output columns
     */
    set outputs(value) {
        this._outputs = value;
    }
}
exports.BusinessRuleDecisionTableRow = BusinessRuleDecisionTableRow;
//# sourceMappingURL=BusinessRuleDecisionTableRow.js.map