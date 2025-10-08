"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessRuleDecisionTableInputOutput = void 0;
/**
 Definition of a decisionTable's input or output column
 */
class BusinessRuleDecisionTableInputOutput {
    /**
     Creates a new instance of BusinessRuleDecisionTableInputOutput
     */
    constructor(data = {}) {
        this._id = data.id;
        this._name = data.name;
        this._field = data.field;
        this._type = data.type;
    }
    /**
     The generated ID for this input or output column
     */
    get id() {
        return this._id;
    }
    /**
     The generated ID for this input or output column
     */
    set id(value) {
        this._id = value;
    }
    /**
     The name for the input or output column
     */
    get name() {
        return this._name;
    }
    /**
     The name for the input or output column
     */
    set name(value) {
        this._name = value;
    }
    /**
     The field of the input or output column.
    In case of inputs this is the full path of from the root of the input payload of the rule.
    In case of an output column it's the fieldname you want to output after the rule has been executed.
    Output fields can be organized by using the dot notation.
    For example:
    - input: "input.name"
    - output: "output.name.firstname"
    - output: "output.name.lastname"
     */
    get field() {
        return this._field;
    }
    /**
     The field of the input or output column.
    In case of inputs this is the full path of from the root of the input payload of the rule.
    In case of an output column it's the fieldname you want to output after the rule has been executed.
    Output fields can be organized by using the dot notation.
    For example:
    - input: "input.name"
    - output: "output.name.firstname"
    - output: "output.name.lastname"
     */
    set field(value) {
        this._field = value;
    }
    /**
     The type of the input or output column, currently only "expression" is used.
     */
    get type() {
        return this._type;
    }
    /**
     The type of the input or output column, currently only "expression" is used.
     */
    set type(value) {
        this._type = value;
    }
}
exports.BusinessRuleDecisionTableInputOutput = BusinessRuleDecisionTableInputOutput;
//# sourceMappingURL=BusinessRuleDecisionTableInputOutput.js.map