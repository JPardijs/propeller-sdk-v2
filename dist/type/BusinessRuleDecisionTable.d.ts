import { BusinessRuleNodeType } from '../enum/BusinessRuleNodeType';
import { BusinessRuleDecisionTableContent } from './BusinessRuleDecisionTableContent';
import { IBusinessRuleNode } from './IBusinessRuleNode';
/**
 Represents a single decision table node in the graph, each table can contain multiple rows.
  Each row respresents a rule that get executed. The hitPolicy determines how the rule is executed.
  When the hitPolicy is set to 'first', the first matching row is used.
  When the hitPolicy is set to 'collect', all matching rows are used.
 */
export declare class BusinessRuleDecisionTable implements IBusinessRuleNode {
    /** The type of the node.  */
    private _type;
    /** The generated ID for this node */
    private _id;
    /** The name of the node */
    private _name;
    /** The description of the node */
    private _description;
    /** The node's table content in case the type is 'decisionTableNode' */
    private _content;
    /**
     Creates a new instance of BusinessRuleDecisionTable
     */
    constructor(data?: Partial<BusinessRuleDecisionTable>);
    /**
     The type of the node.
     */
    get type(): BusinessRuleNodeType;
    /**
     The type of the node.
     */
    set type(value: BusinessRuleNodeType);
    /**
     The generated ID for this node
     */
    get id(): string | number;
    /**
     The generated ID for this node
     */
    set id(value: string | number);
    /**
     The name of the node
     */
    get name(): string;
    /**
     The name of the node
     */
    set name(value: string);
    /**
     The description of the node
     */
    get description(): string;
    /**
     The description of the node
     */
    set description(value: string);
    /**
     The node's table content in case the type is 'decisionTableNode'
     */
    get content(): BusinessRuleDecisionTableContent;
    /**
     The node's table content in case the type is 'decisionTableNode'
     */
    set content(value: BusinessRuleDecisionTableContent);
}
//# sourceMappingURL=BusinessRuleDecisionTable.d.ts.map