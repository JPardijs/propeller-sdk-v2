"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessRuleDecisionTable = void 0;
/**
 Represents a single decision table node in the graph, each table can contain multiple rows.
  Each row respresents a rule that get executed. The hitPolicy determines how the rule is executed.
  When the hitPolicy is set to 'first', the first matching row is used.
  When the hitPolicy is set to 'collect', all matching rows are used.
 */
class BusinessRuleDecisionTable {
    /**
     Creates a new instance of BusinessRuleDecisionTable
     */
    constructor(data = {}) {
        this._type = data.type;
        this._id = data.id;
        this._name = data.name;
        this._description = data.description;
        this._content = data.content;
    }
    /**
     The type of the node.
     */
    get type() {
        return this._type;
    }
    /**
     The type of the node.
     */
    set type(value) {
        this._type = value;
    }
    /**
     The generated ID for this node
     */
    get id() {
        return this._id;
    }
    /**
     The generated ID for this node
     */
    set id(value) {
        this._id = value;
    }
    /**
     The name of the node
     */
    get name() {
        return this._name;
    }
    /**
     The name of the node
     */
    set name(value) {
        this._name = value;
    }
    /**
     The description of the node
     */
    get description() {
        return this._description;
    }
    /**
     The description of the node
     */
    set description(value) {
        this._description = value;
    }
    /**
     The node's table content in case the type is 'decisionTableNode'
     */
    get content() {
        return this._content;
    }
    /**
     The node's table content in case the type is 'decisionTableNode'
     */
    set content(value) {
        this._content = value;
    }
}
exports.BusinessRuleDecisionTable = BusinessRuleDecisionTable;
//# sourceMappingURL=BusinessRuleDecisionTable.js.map