/**
 Edges link nodes in a grapgh together,
    most commonly a graph contains an inputNode with an edge between a decisionTableNode
    and the decisionTableNode has an edge with the outputNode
 */
export declare class BusinessRuleEdge {
    /** The generated ID of the business rule edge */
    private _id;
    /** The ID of source Node of the business rule egde */
    private _sourceId;
    /** The ID of target Node of the business rule egde */
    private _targetId;
    /** The type of the business rule egde, only posible value now being 'edge' */
    private _type;
    /**
     Creates a new instance of BusinessRuleEdge
     */
    constructor(data?: Partial<BusinessRuleEdge>);
    /**
     The generated ID of the business rule edge
     */
    get id(): string | number;
    /**
     The generated ID of the business rule edge
     */
    set id(value: string | number);
    /**
     The ID of source Node of the business rule egde
     */
    get sourceId(): string | number;
    /**
     The ID of source Node of the business rule egde
     */
    set sourceId(value: string | number);
    /**
     The ID of target Node of the business rule egde
     */
    get targetId(): string | number;
    /**
     The ID of target Node of the business rule egde
     */
    set targetId(value: string | number);
    /**
     The type of the business rule egde, only posible value now being 'edge'
     */
    get type(): string;
    /**
     The type of the business rule egde, only posible value now being 'edge'
     */
    set type(value: string);
}
//# sourceMappingURL=BusinessRuleEdge.d.ts.map