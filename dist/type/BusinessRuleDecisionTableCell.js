"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessRuleDecisionTableCell = void 0;
/**
 Represents a single cell in a decisionTable,
  each cell either hold an expression, string value or numeric value based on the column type and field
 */
class BusinessRuleDecisionTableCell {
    /**
     Creates a new instance of BusinessRuleDecisionTableCell
     */
    constructor(data = {}) {
        this._columnId = data.columnId;
        this._expression = data.expression;
        this._value = data.value;
        this._localizedValue = data.localizedValue;
        this._number = data.number;
    }
    /**
     The columnId of the cell
     */
    get columnId() {
        return this._columnId;
    }
    /**
     The columnId of the cell
     */
    set columnId(value) {
        this._columnId = value;
    }
    /**
     The expressions value for this cell
     */
    get expression() {
        return this._expression;
    }
    /**
     The expressions value for this cell
     */
    set expression(value) {
        this._expression = value;
    }
    /**
     The string value of the cell, used in output cells. Can contain a string or an expression. Strings need to be wrapped in ""
     */
    get value() {
        return this._value;
    }
    /**
     The string value of the cell, used in output cells. Can contain a string or an expression. Strings need to be wrapped in ""
     */
    set value(value) {
        this._value = value;
    }
    /**
     The localized string value of the cell, used in output cells. Used when you want a rule to generate a translated string in the output
     */
    get localizedValue() {
        return this._localizedValue;
    }
    /**
     The localized string value of the cell, used in output cells. Used when you want a rule to generate a translated string in the output
     */
    set localizedValue(value) {
        this._localizedValue = value;
    }
    /**
     The numeric value for this cell, used in output cells
     */
    get number() {
        return this._number;
    }
    /**
     The numeric value for this cell, used in output cells
     */
    set number(value) {
        this._number = value;
    }
}
exports.BusinessRuleDecisionTableCell = BusinessRuleDecisionTableCell;
//# sourceMappingURL=BusinessRuleDecisionTableCell.js.map