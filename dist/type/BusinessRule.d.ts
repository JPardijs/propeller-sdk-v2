import { BusinessRuleType } from '../enum/BusinessRuleType';
import { LocalizedString } from './LocalizedString';
import { BusinessRuleEdge } from './BusinessRuleEdge';
import { IBusinessRuleNode } from './IBusinessRuleNode';
/**
 Represents a BusinessRule Graph or Set, each business rule set consist of at least one inputNode,
  decisionTableNode and outputNode witn edges between them.
  A decisionTable can have mutiple rows, each row representing a single rule that gets executed.
 */
export declare class BusinessRule {
    /** BusinessRule identifier */
    private _id;
    /** type field */
    private _type;
    /** name field */
    private _name;
    /** edges field */
    private _edges;
    /** nodes field */
    private _nodes;
    /** BusinessRule date created */
    private _createdAt;
    /** BusinessRule List date modified */
    private _updatedAt;
    /** jdm field */
    private _jdm;
    /**
     Creates a new instance of BusinessRule
     */
    constructor(data?: Partial<BusinessRule>);
    /**
     BusinessRule identifier
     */
    get id(): string | number;
    /**
     BusinessRule identifier
     */
    set id(value: string | number);
    /**
     type field
     */
    get type(): BusinessRuleType;
    /**
     type field
     */
    set type(value: BusinessRuleType);
    /**
     name field
     */
    get name(): LocalizedString[];
    /**
     name field
     */
    set name(value: LocalizedString[]);
    /**
     edges field
     */
    get edges(): BusinessRuleEdge[];
    /**
     edges field
     */
    set edges(value: BusinessRuleEdge[]);
    /**
     nodes field
     */
    get nodes(): IBusinessRuleNode[];
    /**
     nodes field
     */
    set nodes(value: IBusinessRuleNode[]);
    /**
     BusinessRule date created
     */
    get createdAt(): string;
    /**
     BusinessRule date created
     */
    set createdAt(value: string);
    /**
     BusinessRule List date modified
     */
    get updatedAt(): string;
    /**
     BusinessRule List date modified
     */
    set updatedAt(value: string);
    /**
     jdm field
     */
    get jdm(): any;
    /**
     jdm field
     */
    set jdm(value: any);
}
//# sourceMappingURL=BusinessRule.d.ts.map