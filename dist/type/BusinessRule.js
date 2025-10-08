"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessRule = void 0;
/**
 Represents a BusinessRule Graph or Set, each business rule set consist of at least one inputNode,
  decisionTableNode and outputNode witn edges between them.
  A decisionTable can have mutiple rows, each row representing a single rule that gets executed.
 */
class BusinessRule {
    /**
     Creates a new instance of BusinessRule
     */
    constructor(data = {}) {
        this._id = data.id;
        this._type = data.type;
        this._name = data.name;
        this._edges = data.edges;
        this._nodes = data.nodes;
        this._createdAt = data.createdAt;
        this._updatedAt = data.updatedAt;
        this._jdm = data.jdm;
    }
    /**
     BusinessRule identifier
     */
    get id() {
        return this._id;
    }
    /**
     BusinessRule identifier
     */
    set id(value) {
        this._id = value;
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
     edges field
     */
    get edges() {
        return this._edges;
    }
    /**
     edges field
     */
    set edges(value) {
        this._edges = value;
    }
    /**
     nodes field
     */
    get nodes() {
        return this._nodes;
    }
    /**
     nodes field
     */
    set nodes(value) {
        this._nodes = value;
    }
    /**
     BusinessRule date created
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     BusinessRule date created
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     BusinessRule List date modified
     */
    get updatedAt() {
        return this._updatedAt;
    }
    /**
     BusinessRule List date modified
     */
    set updatedAt(value) {
        this._updatedAt = value;
    }
    /**
     jdm field
     */
    get jdm() {
        return this._jdm;
    }
    /**
     jdm field
     */
    set jdm(value) {
        this._jdm = value;
    }
}
exports.BusinessRule = BusinessRule;
//# sourceMappingURL=BusinessRule.js.map