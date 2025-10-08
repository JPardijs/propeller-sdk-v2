"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessRuleEdge = void 0;
/**
 Edges link nodes in a grapgh together,
    most commonly a graph contains an inputNode with an edge between a decisionTableNode
    and the decisionTableNode has an edge with the outputNode
 */
class BusinessRuleEdge {
    /**
     Creates a new instance of BusinessRuleEdge
     */
    constructor(data = {}) {
        this._id = data.id;
        this._sourceId = data.sourceId;
        this._targetId = data.targetId;
        this._type = data.type;
    }
    /**
     The generated ID of the business rule edge
     */
    get id() {
        return this._id;
    }
    /**
     The generated ID of the business rule edge
     */
    set id(value) {
        this._id = value;
    }
    /**
     The ID of source Node of the business rule egde
     */
    get sourceId() {
        return this._sourceId;
    }
    /**
     The ID of source Node of the business rule egde
     */
    set sourceId(value) {
        this._sourceId = value;
    }
    /**
     The ID of target Node of the business rule egde
     */
    get targetId() {
        return this._targetId;
    }
    /**
     The ID of target Node of the business rule egde
     */
    set targetId(value) {
        this._targetId = value;
    }
    /**
     The type of the business rule egde, only posible value now being 'edge'
     */
    get type() {
        return this._type;
    }
    /**
     The type of the business rule egde, only posible value now being 'edge'
     */
    set type(value) {
        this._type = value;
    }
}
exports.BusinessRuleEdge = BusinessRuleEdge;
//# sourceMappingURL=BusinessRuleEdge.js.map